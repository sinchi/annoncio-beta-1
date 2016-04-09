import {Session} from 'meteor/session'

Template.login.onCreated(function(){
	Session.set('loginErrors', {});
});


Template.login.onRendered(function(){
	$('body').scrollTop(0);
});

Template.login.helpers({
	errorClass: function(field){
		return !!Session.get('loginErrors')[field] ? 'has-error' : '';
	},
	errorMessage: function(field){
		return Session.get('loginErrors')[field];
	}
});


Template.login.events({
	'submit .form-signin': function(e){
		e.preventDefault();		
		var email = $(e.target).find('[name=email]').val();
		var password = $(e.target).find('[name=password]').val();

		var errors = validateLogin(email, password);
		if(errors.email || errors.password)
			return Session.set('loginErrors', errors);

		Meteor.loginWithPassword(email, password, function(err){
			if(err)
				return throwError(err.reason);
			
			Router.go('annoncesList');
		});
	}
});
	