Template.profile.onRendered(function(){
	//console.log('scrollTop');
	//return $('body').scrollTop(0);
	//return $('body').scrollTop($(this)[0].scrollHeight);
	$('html,body').animate({
            scrollTop: 0
        }, 100);
	//Meteor.call('readIt', this._id);
	
});

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