/*import {Session} from 'meteor/session'

Tracker.autorun(function(){
	if(throwError(Session.get('notify')))
		throwError(Session.get('notify'));
});*/

/*Template.notifications.onCreated(function(){
	return Session.set('notify', '');
});*/

Template.notifications.helpers({
	notifications: function(){
		return Notifications.find({userId: Meteor.userId(), read: false});
	},

	countNotifications: function(){
		/*Session.set('notify', 'vous avez une nouvelle notification !' + Notifications.find({userId: Meteor.userId(), read: false}).count());*/
		return Notifications.find({userId: Meteor.userId(), read: false}).count();
	}
});


Template.notificationItem.helpers({
	commentNotificationPath: function(){		
		return Router.routes.annoncePage.path({_id: this.annonceId});
	}
});

Template.notificationItem.events({
	'click a': function(e){
		Notifications.update(this._id, {$set: {read: true}});
	}
});