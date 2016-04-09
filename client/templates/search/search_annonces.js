import {Session} from 'meteor/session'

Template.searchAnnonces.onCreated(function(){
	Session.set('texte', '');
});

Template.searchAnnonces.events({
	'submit form': function(e){
		e.preventDefault();

		var texte = $(e.target).find('[name=texte]').val();
		Session.set('texte', texte);
		if(texte)
			Router.go('searchList', {texte: texte});
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