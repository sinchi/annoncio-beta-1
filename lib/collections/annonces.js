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
			price: Number,
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
			readers: [],
			reads: 0,
			countComments: 0,
			ancestors: [category.parentId]
		});

		var annonceId = Annonces.insert(annonce);

		return{
			_id: annonceId
		}
	},
	readIt: function(annonceId){
		check(this.userId, String);
		check(annonceId, String);

		var annonce = Annonces.findOne(annonceId);
		if(!annonce)
			throw new Meteor.Error('invalid-annonce', 'Annonce n\'existe pas');

		if(!_.include(annonce.readers, this.userId) && annonce.userId != this.userId){
			Annonces.update(annonce._id, {
				$addToSet: {readers: this.userId},
				$inc: {reads: 1}
			})
		}
			/*throw new Meteor.Error('invalid', 'Déja vu')*/
	}
});