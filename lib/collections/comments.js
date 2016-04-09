Comments = new Mongo.Collection('comments');

Meteor.methods({
	insertComment: function(commentAttributes){
		check(Meteor.userId(), String);
		check(commentAttributes, {
			body: String,
			annonceId: String
		});

		if(!commentAttributes.body)
			throw new Meteor.Error('invalid-comment', 'Veuillez ecrire un commentaire');

		var user = Meteor.user();
		var annonce = Annonces.findOne(commentAttributes.annonceId);
		if(!annonce)
			throw new Meteor.Error('invalid-annonce', 'Cette annonce n\'existe pas');

		var comment = _.extend(commentAttributes, {
			userId: user._id,
			author: user.emails[0].address,
			submitted: new Date(),			
		});

		Annonces.update(annonce._id, {$inc: {countComments: 1}});
		comment._id = Comments.insert(comment);

		createCommentNotification(comment);
		/*return {
			_id: commentId
		}*/
	}
})