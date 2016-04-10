

Template.annoncesList.helpers({
	ownAnnonce: function(){
		return Meteor.userId() === this.userId;
	},
	
});

/*Tracker.autorun(function(){
	console.log(Annonces.find().count());
});*/