 Accounts.emailTemplates.from = 'Annoncio.ma  <info@annoncio.ma>';
 Accounts.emailTemplates.siteName = 'Annoncio.ma';
 Accounts.emailTemplates.verifyEmail.subject = function(user) {
	 	return 'Confirmer votre adresse email, ' + user.emails[0].address;
};
	 /** Note: if you need to return HTML instead, use .html instead
	 of .text **/
	 Accounts.emailTemplates.verifyEmail.text = function(user, url) {
	 	return 'Bienvenue sur Annoncio.ma !\n' + ' Veuillez cliquer sur ce lien pour vérifier votre adresse email :\n' + url;
 	};

 	/*Accounts.emailTemplates.verifyEmail.html = function(user, url) {
	 	return 'Bienvenue sur Annoncio.ma !\n' + ' Veuillez cliquer sur ce lien pour vérifier votre adresse email ' + url;
 	};*/