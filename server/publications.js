Meteor.publish('searchAnnonces', function(options, texte, city, category){
	check(options, {
		sort: Object,
		limit: Number
	});
	check(texte, Object);
	check(city, String);
	check(category, String);

	return Annonces.find({title: texte, cityId: city, categoryId: category}, options);
});

Meteor.publish('annonces', function(options){	 	
	check(options, {
		sort: Object,
		limit: Number
	});
	
	return Annonces.find({}, options);
});

Meteor.publish('annonce', function(annonceId){
	check(annonceId, String);
	return Annonces.find({_id: annonceId});
});

Meteor.publish('cities', function(){
	return Cities.find();
});

Meteor.publish('categories', function(){
	return Categories.find();
});

Meteor.publish('users', function(annonceId){
	check(annonceId, String);
	var annonce = Annonces.findOne(annonceId);
	return Meteor.users.find(annonce.userId, {fields: {profile : 1, emails: 1}});
});

/*Meteor.publish('getPhotos', function(annonceId){
	check(annonceId, String);
	var annonce = Annonces.findOne(annonceId);
	return Photos.find({_id: {$in: annonce.images}});
});
*/
Meteor.publish('photo', function(photoId){
	check(photoId, String);
	return Photos.find({_id: photoId});
});

Meteor.publish('photos', function(){
	return Photos.find();
});

Meteor.publish('photosAnnonce', function(annonceId){
	check(annonceId, String);
	var annonce = Annonces.findOne(annonceId);
	if(annonce)
		return Photos.find({_id: {$in: annonce.images}})
});

Meteor.publish('comments', function(annonceId){
	check(annonceId, String);
	return Comments.find({annonceId: annonceId}, {sort: {submitted: -1}});
});

Meteor.publish('notifications', function(){
	return Notifications.find({userId: this.userId, read: false});
});