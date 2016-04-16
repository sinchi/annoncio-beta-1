Annonces = new Mongo.Collection('annonces');

var validateAnnonceDefault = function(annonce){
	var errors = {};
	if(!annonce.description)
		errors.description = "Veuillez remplir la description s'il vous plaît !";
	if(!annonce.price)
		errors.price = "Veuillez remplir la prix s'il vous plaît !";
	if(!annonce.title)
		errors.title = "Veuillez remplir le titre s'il vous plaît !";
	if(!annonce.type_annonce )// === "" && annonce.demande === "" && annonce.location === ""
		errors.type_annonce = "Veuillez remplir le type d'annonce s'il vous plaît !";

	return errors;
}
var validateAnnonceVoitures = function(annonce){
	var errors = validateAnnonceDefault(annonce);
	if(!annonce.brand || annonce.brand === "unselected")
		errors.brand = "Veuillez selectionner la marque  s'il vous plaît !";
	if(!annonce.carModel || annonce.carModel === "unselected")
		errors.carModel = "Veuillez selectionner le model  s'il vous plaît !";
	if(!annonce.gazoline || annonce.gazoline === "unselected")
		errors.gazoline = "Veuillez selectionner le carburant  s'il vous plaît !";
	if(!annonce.years || annonce.years === "unselected")
		errors.years = "Veuillez selectionner l'année  s'il vous plaît !";
	if(!annonce.km || annonce.km === "unselected")
		errors.km = "Veuillez selectionner le kilométrage  s'il vous plaît !";	

	return errors;
}

var validateAnnonceMotos = function(annonce){
	var errors = validateAnnonceDefault(annonce);
	if(!annonce.years || annonce.years === "unselected")
		errors.years = "Veuillez selectionner l'année  s'il vous plaît !";
	if(!annonce.km || annonce.km === "unselected")
		errors.km = "Veuillez selectionner le kilométrage  s'il vous plaît !";	

	return errors;
}

var validateAnnonceVpro = function(annonce){
	var errors = validateAnnonceDefault(annonce);
	if(!annonce.gazoline || annonce.gazoline === "unselected")
		errors.gazoline = "Veuillez selectionner le carburant  s'il vous plaît !";
	if(!annonce.years || annonce.years === "unselected")
		errors.years = "Veuillez selectionner l'année  s'il vous plaît !";
	if(!annonce.km || annonce.km === "unselected")
		errors.km = "Veuillez selectionner le kilométrage  s'il vous plaît !";
	if(!annonce.vihiculePro || annonce.vihiculePro === "all")
		errors.vihicule_pro = "Veuillez selectionner le type de vihicule s'il vous plaît !";	
	if(!annonce.location && !annonce.offre && !annonce.demande)
		errors.location = "Veuillez selectionner le type d'annonce s'il vous plaît !";		

	return errors;
}

validateAnnonce = function(annonce, submittedAnnonceType){
	if(submittedAnnonceType === "default"){
		return validateAnnonceDefault(annonce);
	}
	else if(submittedAnnonceType === "Voitures"){
		return validateAnnonceVoitures(annonce);			
	}else if(submittedAnnonceType === "Motos"){
		return validateAnnonceMotos(annonce);

	}else if(submittedAnnonceType === "Vpro"){
		return validateAnnonceVpro(annonce);
	}	
	
}

			
Meteor.methods({
	insertAnnonce: function(annonceAttributes, submittedAnnonceType){
		check(Meteor.userId(), String);
		check(submittedAnnonceType, String);
		switch(submittedAnnonceType){
			case 'default':
				check(annonceAttributes, {
					description: String,
					price: Number,
					title: String,
					cityId: String,
					categoryId: String,
					type: String,
					type_annonce: String,
					images: Array
				});
				break;
				
			case 'Voitures':
				check(annonceAttributes, {
					description: String,
					price: Number,
					title: String,
					cityId: String,
					categoryId: String,
					type_annonce: String,					
					images: Array,
					brand: String,
					carModel: String,
					gazoline: String,
					years: String,
					km: String,					
				});
			break;
			case "Motos":
				check(annonceAttributes, {
					description: String,
					price: Number,
					title: String,
					cityId: String,
					categoryId: String,
					type_annonce: String,					
					images: Array,
					years: String,
					km: String
				});
			break;
			case "Vpro":
				check(annonceAttributes, {
					description: String,
					price: Number,
					title: String,
					cityId: String,
					categoryId: String,
					type_annonce: String,					
					images: Array,
					gazoline: String,
					years: String,
					km: String,	
					vihiculePro: String
				});
			break;

		}
		

		var errors = validateAnnonce(annonceAttributes,submittedAnnonceType);
		if(errors.description || errors.price || errors.title)
			throw new Meteor.Error('invalid-annonce', 'Veuillez vérifier le formulaire');

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