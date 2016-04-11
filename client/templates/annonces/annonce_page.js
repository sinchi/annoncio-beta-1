Template.annoncePage.onRendered(function(){
	//console.log('scrollTop');
	//return $('body').scrollTop(0);
	//return $('body').scrollTop($(this)[0].scrollHeight);
	$('html,body').animate({
            scrollTop: 0
        }, 100);
	//Meteor.call('readIt', this._id);
	
});

Template.annoncePage.helpers({
	user: function(){
		return Meteor.users.findOne(this.userId);
	},
	photos: function(){
		return Photos.find({_id: {$in: this.images}})		
	},
	city: function(){
		return Cities.findOne(this.cityId).name;
	},
	category: function(){
		return Categories.findOne(this.categoryId).name;
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
	email: function(){
		var user = Meteor.users.findOne(this.userId);
		return user.emails[0].address;
	}/*,
	ownStatus: function(){
		if(Meteor.userId() !== this.userId)
			return true;
		else
			return false;
	}*/
});
