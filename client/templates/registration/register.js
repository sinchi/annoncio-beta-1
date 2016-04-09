import {Session} from 'meteor/session'

Template.register.onCreated(function(){
	Session.set('registerErrors', {});
});

Template.register.helpers({
	errorClass: function(field){
		return !!Session.get('registerErrors')[field] ? 'has-error' : '';
	},
	errorMessage: function(field){
		return Session.get('registerErrors')[field];
	}
});


Template.register.events({
	'submit form': function(e){
		e.preventDefault();

		var annonceur = {
			type: $(e.target).find('[name=type]').val(),
			phone: $(e.target).find('[name=phone]').val(),
			city: $(e.target).find('[name=city]').val(),
			name: $(e.target).find('[name=name]').val(),
			email: $(e.target).find('[name=email]').val(),
			vEmail: $(e.target).find('[name=vEmail]').val(),
			password: $(e.target).find('[name=password]').val(),
			vPassword: $(e.target).find('[name=vPassword]').val()
		};		

		var errors = validateAnnonceur(annonceur);
		if(errors.name || errors.email || errors.vEmail || errors.password || errors.vPassword 
			|| errors.city || errors.phone || errors.type)
			return Session.set('registerErrors', errors);
		errors = checkEmail(annonceur);
		if(errors.vEmail)
			return Session.set('registerErrors', errors);
		errors = checkPassword(annonceur);
		if(errors.vPassword)
			return Session.set('registerErrors', errors);

		var profile = {
				name: annonceur.name,
            	city: annonceur.city,
            	phone: annonceur.phone,
            	type: annonceur.type
		};

		Accounts.createUser({email: annonceur.email, password : annonceur.password, profile: profile}, function(err){
          if (err) {
            return throwError(err.reason);
          } else {            
            Router.go('profile');
          }

        }); 

		
	}
})