import {Session} from 'meteor/session'

Template.searchAnnonces.onCreated(function(){
	Session.set('category', '');
})

Template.searchAnnonces.helpers({
	extraField: function () {		
		return Session.get('category');
	},
	brands: function () {
		return Brands.find()
	}
});

Template.searchAnnonces.events({
	'submit form': function(e){
		e.preventDefault();			
		
		var query = {
			texte: $(e.target).find('[name=texte]').val() || 'all',
			category: $(e.target).find('[name=category]').val(),
			city: $(e.target).find('[name=city]').val(),
			priceMin: parseInt(Session.get('price-min')),
			priceMax: parseInt(Session.get('price-max'))
		};
		
		Router.go('searchList',{}, {query: query, hash: 'hashFrag'});
	},
	'change .category': function(e, tpl){
		var category =  Categories.findOne(e.target.value);
		if(category)
			Session.set('category', category.name);		
	}	
});

