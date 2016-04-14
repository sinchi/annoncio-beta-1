import {Session} from 'meteor/session'

Template.commentsList.onCreated(function(){
	Session.set('disabled', 'disabled');
});

Template.commentsList.helpers({
	comments: function(){
		return Comments.find({}, {sort: {submitted: 1}});
	},
	disabled: function(){
		return Session.get('disabled');
	}
});

Template.commentsList.events({
	'submit form': function(e, tpl){
		e.preventDefault();

		var $body = $(e.target).find('[name=body]');
		var annonceId = tpl.data._id;
		var comment = {
			body: $body.val(),
			annonceId: annonceId
		};

		Meteor.call('insertComment', comment, function(err, result){
			if(err)
				return throwError(err.reason);
			
			$body.val('');
		});
	},
	'keyup #body':function(e){
		e.preventDefault();		
		var body = e.target.value;
		if(!body)
			Session.set('disabled', 'disabled');
		else
			Session.set('disabled', '');
	}
});