/*import {Session} from 'meteor/session'*/


Template.annonceItem.helpers({
	city: function(cityId){
		return Cities.findOne(cityId).name;
	},
	category: function(categoryId){
		return Categories.findOne(categoryId).name;
	},
	submittedText: function(){
		moment.locale('fr');		
		return moment(this.submitted).fromNow();		
	},
	photo: function(){		
		//console.log(this.images[0]);
		var photoId = this.images[0] ;
		if(photoId){			
			return Photos.findOne(photoId);
		}				
	},
	username: function(){
		return this.author.charAt(0).toUpperCase() + this.author.slice(1);
	},
	status: function(){
		var user = Meteor.users.findOne(this.userId);
		if(user)
			return user.status;
	}
	
});

Template.annonceItem.events({
	'click .readIt': function(e){
		e.preventDefault();
		//console.log('annonce Id' + this._id);
		if(Meteor.userId())
			Meteor.call('readIt', this._id);
		Router.go('annoncePage', {_id: this._id});
	}
});


/*Tracker.autorun(function(){		
	return Meteor.subscribe('photo', Session.get('photo'));
});*/

