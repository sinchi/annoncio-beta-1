Template.header.helpers({
	name: function(){
		if(!Meteor.userId()){
			if(Meteor.logginIn()){
				var user = Meteor.users.findOne(Meteor.userId());
				return user.profile.name;
			}							
		}		
	}
});

Template.header.events({
	'click .logout': function(e){
		e.preventDefault();
		Meteor.call('updateUserStatusDeconnection', function(err, result){
			if(err)
				throwError(err.reason);
			console.log(Meteor.userId() + " est deconnecté");
		});
		Meteor.logout();
		

	}
});