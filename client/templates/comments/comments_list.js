Template.commentsList.helpers({
	comments: function(){
		return Comments.find();
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
	}
});