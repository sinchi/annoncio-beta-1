validateAnnonceur = function(annonceur){
	var errors = {};
	if(!annonceur.city)
		errors.city = 'Veuillez choisir votre ville';
	if(!annonceur.phone)
		errors.phone = 'Veuillez saisir votre téléphone ';
	if(!annonceur.type)
		errors.type = 'Veuillez choisir le type de votre profile Annoncion !';
	if(!annonceur.name)
		errors.name = 'Veuillez saisir un nom svp !';
	if(!annonceur.email)
		errors.email = 'Veuillez saisir un email svp !';
	if(!annonceur.vEmail)
		errors.vEmail = 'Veuillez saisir un la vérification d\'mail svp !';
	if(!annonceur.password)
		errors.password = 'Veuillez saisir un mot de passe svp !';
	if(!annonceur.vPassword)
		errors.vPassword = 'Veuillez saisir la vérification de mot de passe svp !';
	return errors;
};

validateFastAnnonceurAnnonce = function(annonceur, annonce){
	var errors = {};	
	if(!annonceur.phone)
		errors.phone = 'Veuillez saisir votre téléphone ';
	if(!annonceur.type)
		errors.typeUser = 'Veuillez choisir le type de votre profile Annoncion !';
	if(!annonceur.name)
		errors.name = 'Veuillez saisir un nom svp !';
	if(!annonceur.email)
		errors.email = 'Veuillez saisir un email svp !';
	if(!annonceur.password)
		errors.password = 'Veuillez saisir un mot de passe svp !';
	if(!annonce.description)
		errors.description = "Veuillez remplir la description s'il vous plaît !";
	if(!annonce.price)
		errors.price = "Veuillez remplir la prix s'il vous plaît !";
	if(!annonce.title)
		errors.title = "Veuillez remplir le titre s'il vous plaît !";
	
	return errors;
}

checkEmail = function(annonceur){
	var errors = {};
	if(annonceur.email !== annonceur.vEmail){
		errors.vEmail = "Les emails ne sont pas identiques";
	}
	return errors;
};

checkPassword = function(annonceur){
	var errors = {};
	if(annonceur.password !== annonceur.vPassword){
		errors.vPassword = "Mot de passe ne sont pas identiques";
	}
	return errors;
};


validateLogin = function(email, password){
	var errors = {};
	if(!email)
		errors.email = "Veuillez saisir votre email";
	if(!password)
		errors.password = "Veuillez saisir votre mot de passe";

	return errors;
};

Meteor.methods({
	updateUserStatusLogin: function(){
		check(Meteor.userId(), String);
		Meteor.users.update(Meteor.userId(), {$set: {status: true}});
	},
	updateUserStatusDeconnection: function(){
		check(Meteor.userId(), String);
		var affected = Meteor.users.update(Meteor.userId(), {$set: {status: false}});
		if(!affected)
			throw new Meteor.Error('deconnection-failed', 'not deconnected')
	}
});