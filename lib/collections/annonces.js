Annonces = new Mongo.Collection('annonces');

validateAnnonce = function(annonce){
	var errors = {};
	if(!annonce.description)
		errors.description = "Veuillez remplir la description s'il vous plaît !";
	if(!annonce.price)
		errors.price = "Veuillez remplir la prix s'il vous plaît !";
	if(!annonce.title)
		errors.title = "Veuillez remplir le titre s'il vous plaît !";

	return errors;
}

			
Meteor.methods({
	insertAnnonce: function(annonceAttributes){
		check(Meteor.userId(), String);
		check(annonceAttributes, {
			description: String,
			price: String,
			title: String,
			cityId: String,
			categoryId: String,
			offre: String,
			images: Array
		});

		var errors = validateAnnonce(annonceAttributes);
		if(errors.description || errors.price || errors.title)
			throw new Meteor.Error('invalid-annonce', 'Veuillez vérifier la formulaire');

		var user = Meteor.user();
		var category = Categories.findOne(annonceAttributes.categoryId);
		
		var annonce = _.extend(annonceAttributes, {
			userId: user._id,
			author: user.profile.name,
			submitted: new Date(),
			read: [],
			countComments: 0,
			ancestors: [category.parentId]
		});

		var annonceId = Annonces.insert(annonce);

		return{
			_id: annonceId
		}
	}
});