Notifications = new Mongo.Collection('notifications');

Notifications.allow({
	update: function(userId, doc, fieldsName){
		return userId && doc.userId === userId &&
		fieldsName.length === 1 && fieldsName[0] === 'read';
	}
});

createCommentNotification = function(comment){
	var annonce = Annonces.findOne(comment.annonceId);
	if(annonce.userId !== comment.userId){
		Notifications.insert({
			userId: annonce.userId,
			annonceId: annonce._id,
			commentId: comment._id,
			commenterName: comment.author,
			read: false
		});
	}
};