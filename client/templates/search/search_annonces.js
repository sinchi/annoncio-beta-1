import {Session} from 'meteor/session'

Template.searchAnnonces.onCreated(function(){
	Session.set('texte', '');
	Session.set('category', '');
	Session.set('city', '');
});

Template.searchAnnonces.events({
	'submit form': function(e){
		e.preventDefault();

		var texte = $(e.target).find('[name=texte]').val();
		var category = $(e.target).find('[name=category]').val();
		var city = $(e.target).find('[name=city]').val();
		Session.set('texte', texte);
		Session.set('category', category);
		Session.set('city', city);
		if(texte)
			Router.go('searchList', {texte: texte, category: category, city: city});
	}
});

/*Tracker.autorun(function(){
	var texte = Session.get('texte');
	console.log(texte);
	if(texte){
		 var sub = Meteor.subscribe('searchAnnonces', texte);
		 if(sub.ready)
			console.log(Annonces.find({title: { '$regex' : '.*' + texte || '' + '.*', '$options' : 'i' }}).fetch());
	}
});*/