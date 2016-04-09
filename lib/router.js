Router.configure({
	layoutTemplate: 'layout',
	notFoundTemplate: 'notFound',
	loadingTemplate: 'loading',
	waitOn: function(){

		return [Meteor.subscribe('cities'), Meteor.subscribe('categories'), Meteor.subscribe('notifications')];
	}
});

Router.route('/annonces/:_id', {
	name: 'annoncePage',
	waitOn: function(){		
		return [
			Meteor.subscribe('users', this.params._id),
			Meteor.subscribe('annonce', this.params._id),
			Meteor.subscribe('photosAnnonce', this.params._id),
			Meteor.subscribe('comments', this.params._id)
		];
	},
	data: function(){				
		return Annonces.findOne(this.params._id);
	}
});

Router.route('/annonces/:_id/edit', {
	name: 'annonceEdit',
	waitOn: function(){
		$('body').scrollTop(0);
		return[
			Meteor.subscribe('annonce', this.params._id),
			Meteor.subscribe('photosAnnonce', this.params._id)
		];		
	},
	data: function(){
		return Annonces.findOne(this.params._id);
	}
});



Router.route('/login', {
	name:'login'
});

Router.route('/submit', {
	name: 'annonceSubmit'
});

Router.route('/register', {
	name: 'register'
});

Router.route('/profile', {
	name: 'profile'
});

Router.route('/store', {
	name: 'store'
});

SearchListController = RouteController.extend({
	template: 'searchList',
	increment: 5,
	searchText : function(){
		var texte  = this.params.texte || ' ';
		return { '$regex' : '.*' + 	texte || '' + '.*', '$options' : 'i' };
	},
	annoncesLimitSearch: function(){
		return parseInt(this.params.annoncesLimitSearch) || this.increment;
	},
	findOption: function(){		
		// { '$regex' : '.*' + this.searchText() || '' + '.*', '$options' : 'i' }
		return {sort: {submitted: -1}, limit: this.annoncesLimitSearch()};
	},
	subscriptions: function(){
		this.annoncesSub =  Meteor.subscribe('searchAnnonces', this.findOption(), this.searchText());
		this.photosSub =  Meteor.subscribe('photos');
	},
	annonces: function(){
		//console.log(this.findOption());
		return Annonces.find({title: this.searchText()}, this.findOption());
	},
	data: function(){
		var hasMore = this.annonces().count() === this.annoncesLimitSearch();
		//console.log('has more '+ this.annonces().count());
		var nextPath = this.route.path({texte: this.params.texte, annoncesLimitSearch: this.annoncesLimitSearch() + this.increment});
		return{
			annonces: this.annonces(),
			ready: this.annoncesSub.ready,
			nextPath: hasMore ? nextPath : null,
			readyPhotos: this.photosSub
		}
	}
});

Router.route('/search/:texte?/:annoncesLimitSearch?', {
	name: 'searchList'
});

AnnoncesListController = RouteController.extend({
	template: 'annoncesList',
	increment: 5,
	annoncesLimit: function(){
		return parseInt(this.params.annoncesLimit) || this.increment;
	},
	findOption: function(){
		return {sort: {submitted: -1}, limit: this.annoncesLimit()};
	},
	subscriptions: function(){
		this.annoncesSub =  Meteor.subscribe('annonces', this.findOption());
		this.photosSub =  Meteor.subscribe('photos');
	},
	annonces: function(){
		return Annonces.find({}, this.findOption());
	},
	data: function(){
		var hasMore = this.annonces().count() === this.annoncesLimit();
		var nextPath = this.route.path({annoncesLimit: this.annoncesLimit() + this.increment});
		return{
			annonces: this.annonces(),
			ready: this.annoncesSub.ready,
			nextPath: hasMore ? nextPath : null,
			readyPhotos: this.photosSub
		}
	}
});

Router.route('/:annoncesLimit?', {
	name: 'annoncesList'
});


var requireLogin = function(){
	if(!Meteor.userId()){
		if(Meteor.loggingIn()){
			this.render(this.loadingTemplate);
		}else{
			this.render('login');
		}
	}else{
		this.next();
	}
}


Router.onBeforeAction('dataNotFound', {only: 'annoncePage'});
Router.onBeforeAction(requireLogin, {only: 'profile'});
Router.onBeforeAction(requireLogin, {only: 'store'});

