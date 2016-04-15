import {Session} from 'meteor/session'

Template.annonceSubmit.onCreated(function(){
	Session.set('submitAnnonceErrors', {});
	Session.set('photos', []);
	Session.set('offre', 'offre');
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

	voiture: function(){
		if(Session.get('categoryId')){
			var category =  Categories.findOne(Session.get('categoryId'));
			var categoryParent = Categories.findOne(category.parentId);		
			if(category.name === "Voitures" && categoryParent.name === "Vihicules")
				return true;
		}				
	},
	moto: function(){
		if(Session.get('categoryId')){
			var category =  Categories.findOne(Session.get('categoryId'));
			var categoryParent = Categories.findOne(category.parentId);		
			if(category.name === "Motos" && categoryParent.name === "Vihicules")
				return true;
		}
	},
	immobilier: function(){
		if(Session.get('categoryId')){
			var category =  Categories.findOne(Session.get('categoryId'));
			var categoryParent = Categories.findOne(category.parentId);		
			if(categoryParent.name === "Immobilier")
				return true;
		}
	},
	vihiculePro: function(){
		if(Session.get('categoryId')){
			var category =  Categories.findOne(Session.get('categoryId'));
			var categoryParent = Categories.findOne(category.parentId);		
			if(category.name === "Vihicules Professionnels" && categoryParent.name === "Vihicules")
				return true;
		}
	}

});


Template.annonceSubmit.events({
	'change .category': function(e){
		e.preventDefault();
		var categoryId = e.target.value;
		if(categoryId !== "all")		
			Session.set('categoryId', categoryId);	

		Session.set('submitAnnonceErrors', {});			
	},
	'click .offre': function(e){
		///e.preventDefault();
		if(e.target.value){
			Session.set('offre', 'offre');
			Session.set('demande', '');
			Session.set('location', '');
		}
		
		
	},
	'click .demande': function(e){
		//e.preventDefault();
		if(e.target.value){
			Session.set('demande', 'demande');
			Session.set('offre', '');
			Session.set('location', '');
		}
	},
	
	'click .location': function(e){
		//e.preventDefault();
		if(e.target.value){
			Session.set('location', 'location');
			Session.set('demande', '');
			Session.set('offre', '');
		}
			
	},
	
	'change .photos': function(e){
		e.preventDefault();	
		//console.log(e.target.files);
		
		/*var files = e.target.files;		
		var photos = Session.get('photos') || [];

		if(photos.length > 0){
			_.each(photos, function(photoId){
				Photos.remove(photoId);
			});
			Session.set('photos', []);
		}			
		var i = 0;
		_.each(files, function(file){
			Photos.insert(file, function(err, photo){
					if(err)
						throwError(err.reason);
					photos.push(photo._id);
					Session.set('photos', photos);
					//console.log(Session.get('photos'));
					if(i === 0)
						Photos.update({_id: photo._id}, {$set: {active:true}});
					
					i++;
				});

		});	*/					
	},
	'submit form': function(e, tpl){
		e.preventDefault();	
	
			if(Meteor.user()){				
				var annonce = {
					categoryId: $(e.target).find('[name=category]').val(),					
					cityId: $(e.target).find('[name=city]').val(),
					title: $(e.target).find('[name=title]').val(),
					description: $(e.target).find('[name=description]').val(),
					price: parseInt($(e.target).find('[name=price]').val()),					
					images: Session.get('photos') || [],
					offre :  Session.get('offre'),
					demande : Session.get('demande')		
				};		
								


				/*if(annonce.categoryId === "all"){
					$('html,body').animate({
			            scrollTop: 0
			        }, 100);
			        return throwError('Veuillez remplir le formulaire pour ajouter une annonce !');
				}*/
					
				var errors = {};
				if(annonce.categoryId=== "all"){
					errors.category = "Vous devez choisir la catégorie !";
					return Session.set("submitAnnonceErrors", errors);
				}

				var category =  Categories.findOne(annonce.categoryId);								
				var categoryParent = Categories.findOne(category.parentId);	
				var submittedAnnonceType = "default";

				if(category.name === "Voitures" && categoryParent.name === "Vihicules"){					
					_.extend(annonce, {
						brand: $(e.target).find('[name=brand]').val(),
						carModel: $(e.target).find('[name=carModel]').val(),
						gazoline: $(e.target).find('[name=gazoline]').val(),
						years: $(e.target).find('[name=years]').val(),
						km: $(e.target).find('[name=km]').val()
					});
					submittedAnnonceType = "Voitures";
				}else if(category.name === "Motos" && categoryParent.name === "Vihicules"){
					_.extend(annonce, {						
						years: $(e.target).find('[name=years]').val(),
						km: $(e.target).find('[name=km]').val()
					});
					submittedAnnonceType = "Motos";
				}else if(category.name === "Vihicules Professionnels" && categoryParent.name === "Vihicules"){
					_.extend(annonce, {	
						location: Session.get('location'),
						gazoline: $(e.target).find('[name=gazoline]').val(),				
						years: $(e.target).find('[name=years]').val(),
						km: $(e.target).find('[name=km]').val(),
						vihiculePro: $(e.target).find('[name=vihicule_pro]').val()						
					});
					submittedAnnonceType = "Vpro";
				}
					
				console.log("type annonce : " + submittedAnnonceType);
				console.log(annonce);
			/*	var photos = $('#photos').prop('files');
				if(photos.length > 6){
					Bert.alert('<strong>Le nombre maximum autoriser pour charger les images est 6 images ! </strong><br/><p>Merci de réssayer </p>','danger');
					return ;
				}*/
					

				//console.log(photos);

			/*	var annonceId = 1;
				var active = true;
					_.each(photos, function(photo){
						_.extend(photo, {
							annonceId: annonceId,
							userId: Meteor.userId(),
							active: active 
						});
						console.log(photo);
						active = false;						
						//Photos.insert(photo);
					});*/

			//	return ;

								
				/*console.log('ok');
				var photos = $("#photos").files;
				console.log(photos);
				return;
				_.each(photos, function(img){
					console.log(img.name);
				});*/
				//console.log(Session.get('photos'));
				//return;
				var errors = validateAnnonce(annonce, submittedAnnonceType);
				console.log(errors);
				if(errors.description || errors.price || errors.title)
					return Session.set('submitAnnonceErrors', errors);



				console.log("OK");
				return;
				Meteor.call('insertAnnonce', annonce, function(error, result){
					if(error)
						return throwError(error.reason);
					var annonceId = result._id;
					var active = true;
					_.each(photos, function(photo){
						_.extend(photo, {
							annonceId: annonceId,
							userId: Meteor.userId(),
							active: active 
						});
						active = false;
						Photos.insert(photo);
					});
				//	Modules.client.uploadToAmazonS3 = ({files:photos, annonceId: annonceId});
					/*Router.go('annoncePage', {_id: result._id});*/
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
					price: parseInt($(e.target).find('[name=price]').val()),
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
						Meteor.call('updateUserStatusLogin', function(err, result){
							console.log(Meteor.userId() + " est en ligne");
						});
						Router.go('annoncePage', {_id: result._id});
					});       
		            
		          }

		        }); 
				
			}			
	}
});