import {Session} from 'meteor/session'

Template.annonceSubmit.onCreated(function(){
	Session.set('submitAnnonceErrors', {});
	Session.set('photos', []);
});

Template.annonceSubmit.onRendered(function(){
	$('html,body').animate({
            scrollTop: 0
        }, 100);
});

Template.annonceSubmit.helpers({
	errorClass: function(field){
		return !!Session.get('submitAnnonceErrors')[field] ? 'has-error' : '';
	},
	errorMessage: function(field){
		return Session.get('submitAnnonceErrors')[field];
	},
	vihicule: function(){
		return Session.get('vihicule');
	},
	immobilier: function(){
		return Session.get('immobilier');
	}
});


Template.annonceSubmit.events({
	'change .category': function(e){
		e.preventDefault();
		var categoryId = e.target.value;
		var parentId = Categories.findOne(categoryId).parentId;
		var parent = Categories.findOne(parentId);
		if(parent.name === 'Vihicules')
			Session.set('vihicule', true);
		else
			Session.set('vihicule', false);

		 if(parent.name === 'Immobilier')
			Session.set('immobilier', true)
		else
			Session.set('immobilier', false);
	},
	'change .photos': function(e){
		e.preventDefault();	
		//console.log(e.target.files);
		
		var files = e.target.files;		
		var photos = Session.get('photos') || [];

		if(photos.length > 0){
			_.each(photos, function(photoId){
				Photos.remove(photoId);
			});
			Session.set('photos', []);
		}			
		_.each(files, function(file){
				Photos.insert(file, function(err, photo){
					if(err)
						throwError(err.reason);
					photos.push(photo._id);
					Session.set('photos', photos);
					//console.log(Session.get('photos'));
				})
		});						
	},
	'submit form': function(e, tpl){
		e.preventDefault();	
	
			if(Meteor.user()){				
				var annonce = {
					categoryId: $(e.target).find('[name=category]').val(),
					offre: $(e.target).find('[name=type]').val(),
					//demande: $(e.target).find('[name=demande]').val(),
					cityId: $(e.target).find('[name=city]').val(),
					title: $(e.target).find('[name=title]').val(),
					description: $(e.target).find('[name=description]').val(),
					price: $(e.target).find('[name=price]').val(),					
					images: Session.get('photos') || []
				};						
				/*console.log('ok');
				var photos = $("#photos").files;
				console.log(photos);
				return;
				_.each(photos, function(img){
					console.log(img.name);
				});*/
				//console.log(Session.get('photos'));
				//return;
				var errors = validateAnnonce(annonce);
				if(errors.description || errors.price || errors.title)
					return Session.set('submitAnnonceErrors', errors);

				Meteor.call('insertAnnonce', annonce, function(error, result){
					if(error)
						return throwError(error.reason);
					Router.go('annoncePage', {_id: result._id});
				});

				

			}else{
				
				var annonceur = {
					type: $(e.target).find('[name=typeUser]').val(),
					phone: $(e.target).find('[name=phone]').val(),		
					name: $(e.target).find('[name=name]').val(),
					email: $(e.target).find('[name=email]').val(),			
					password: $(e.target).find('[name=password]').val()		
				};	

				var annonce = {
					categoryId: $(e.target).find('[name=category]').val(),
					offre: $(e.target).find('[name=type]').val(),
					//demande: $(e.target).find('[name=demande]').val(),
					cityId: $(e.target).find('[name=city]').val(),
					title: $(e.target).find('[name=title]').val(),
					description: $(e.target).find('[name=description]').val(),
					price: $(e.target).find('[name=price]').val(),
					images: Session.get('photos') || []
				};	
				
				var errors = validateFastAnnonceurAnnonce(annonceur, annonce);
				if(errors.name || errors.email || errors.password ||  errors.phone || errors.typeUser
					|| errors.description || errors.price || errors.title)
					return Session.set('submitAnnonceErrors', errors);
				

				var profile = {
					name: annonceur.name,		           
		            phone: annonceur.phone,
		            type: annonceur.type
				};

				Accounts.createUser({email: annonceur.email, password : annonceur.password, profile: profile}, function(err){
		         if (err) {
		         	console.log(err.reason);
		            return throwError(err.reason);
		        } else { 
		        	console.log('user created');
		        	 Meteor.call('insertAnnonce', annonce, function(error, result){
		        	 	console.log('annonce');
						if(error){
							console.log(error.reason);
							return throwError(error.reason);
						}
							
						Router.go('annoncePage', {_id: result._id});
					});       
		            
		          }

		        }); 
				
			}			
	}
});