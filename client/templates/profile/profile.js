
Template.profile.helpers({
	email: function(){
		return Meteor.user().emails[0].address;
	}
});

Template.profile.events({
	'submit form': function(e){
		e.preventDefault();
		throwError('Sauvgarder avec succée');
	}
});