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
	}
});


/*Tracker.autorun(function(){		
	return Meteor.subscribe('photo', Session.get('photo'));
});*/

