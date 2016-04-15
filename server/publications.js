Meteor.publish('searchAnnonces', function(search,options){
	check(search, Object);

	check(options, {
		sort: Object,
		limit: Number
	});
	

	return Annonces.find(search, options);
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

Meteor.publishComposite('brandsAndModels', {
	find: function(){
		return Brands.find();
	},
	children:[
		{
			find: function(brand){
				return CarsModel.find({model: brand._id});
			}
		}
	]
});

Meteor.publish('users', function(annonceId){
	check(annonceId, String);
	var annonce = Annonces.findOne(annonceId);
	return Meteor.users.find(annonce.userId, {fields: {profile : 1, emails: 1, status: 1}});
});

Meteor.publish('usersConnection', function(){
	return Meteor.users.find({status: true}, {fields: {profile: 1, emails: 1, status: 1}});
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


Meteor.publishComposite('annoncesWithRelation', function(options){
	
	check(options, {
		sort: Object,
		limit: Number
	});
	return{
		find: function(){
			return Annonces.find({}, options);
		},
		children:[
			{
				find: function(annonce){
					return Comments.find(annonce._id);
				},
				find: function(annonce){
					return Meteor.users.find(annonce.userId)
				},
				find: function(annonce){
					return Meteor.users.find({_id: {$in: annonce.readers}});
				}
			}
		]
	}
});
/*Meteor.publishComposite('usersWithAnnonces', {
	find: function(){
		return Meteor.users.find({}, {fields: {profile: 1, emails: 1, status: 1}});
	},
	children:[
		{
			find: function(user){
				return Annonces.find({userId: user._id});
			},
			children:[
				{
					find: function(annonce, user){
						return Comments.find({annonceId: annonce._id});
					}
				},
				{					
					find: function(annonce,user){
						return Meteor.users.find({_id: {$in: annonce.readers}});
					}
				}
			]
			
		}
	]
})*/