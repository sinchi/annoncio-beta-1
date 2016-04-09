Template.annoncePage.onRendered(function(){
	//console.log('scrollTop');
	//return $('body').scrollTop(0);
	//return $('body').scrollTop($(this)[0].scrollHeight);
	$('html,body').animate({
            scrollTop: 0
        }, 100);
})

Template.annoncePage.helpers({
	user: function(){
		return Meteor.users.findOne(this.userId);
	},
	photos: function(){
		return Photos.find({_id: {$in: this.images}})		
	}
});
