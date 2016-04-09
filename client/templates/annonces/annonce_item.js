/*import {Session} from 'meteor/session'*/


Template.annonceItem.helpers({
	city: function(cityId){
		return Cities.findOne(cityId).name;
	},
	category: function(categoryId){
		return Categories.findOne(categoryId).name;
	},
	submittedText: function(){
		return this.submitted.toString();
	},
	photo: function(){		
		//console.log(this.images[0]);
		var photoId = this.images[0] ;
		if(photoId){			
			return Photos.findOne(photoId);
		}				
	}
});


/*Tracker.autorun(function(){		
	return Meteor.subscribe('photo', Session.get('photo'));
});*/