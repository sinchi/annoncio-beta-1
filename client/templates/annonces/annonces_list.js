Template.annoncesList.helpers({
	ownAnnonce: function(){
		return Meteor.userId() === this.userId;
	}
});