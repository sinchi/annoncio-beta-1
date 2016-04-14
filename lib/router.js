Router.configure({
	layoutTemplate: 'layout',
	notFoundTemplate: 'notFound',
	loadingTemplate: 'loading',
	waitOn: function(){

		return [
			Meteor.subscribe('cities'),
			Meteor.subscribe('categories'),
			Meteor.subscribe('brandsAndModels'),			
			Meteor.subscribe('notifications'),
			Meteor.subscribe('usersConnection')
		 ];
	}
});

Router.route('/feed.xml', {
	where: 'server',
	name: 'rss',
	action: function(){
		this.response.write('hello world');
		this.response.end();
	}
});

Router.route('/api/annonces', {
	where:'server',
	name: 'apiAnnonces',
	action: function(){
		var parameters = this.request.query,
			limit = !!parameters.limit ? parseInt(parameters.limit) : 20,
			data = Annonces.find({}, {limit: limit, fields: {title: 1, author: 1, submitted: 1}}).fetch();

			this.response.write(JSON.stringify(data));
			this.response.end();
	}
});

Router.route('/api/annonces/:_id', {
	where: 'server',
	name: 'apiAnnonce',
	action: function(){
		var annonce = Annonces.findOne(this.params._id);
		if(annonce){
			this.response.write(JSON.stringify(annonce));
		}else{
			this.response.writeHead(404, {'Content-Type': 'text/html'});
			this.response.write("Annonce n'existe pas");
		}

		this.response.end();
	}
})

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
	name: 'annonceSubmit',
	data: function(){
		return {
			brands: Brands.find()
		}
	}
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
	searchOptions : function(){
		/*if(this.params.texte)
			console.log(texte);
		else
			console.log("empty texte");*/
		console.log("texte : " + this.params.texte);
		console.log("texte : " + this.params.category);
		console.log("texte : " + this.params.city);
		if(this.params.texte === "all")
			return  {
				 $and:[
				 					 							 
					 	{categoryId: this.params.category || ''},
					 	{cityId: this.params.city || ''}									 		
				 ]					
			};
			else

			return  {
					 $and:[
					 		{title:  { '$regex' : '.*' + 	this.params.texte || '' + '.*', '$options' : 'i' } } ,			 							 
						 	{categoryId: this.params.category || ''},
						 	{cityId: this.params.city || ''}									 		
					 ]					
				};
			

	},
	annoncesLimitSearch: function(){
		return parseInt(this.params.annoncesLimitSearch) || this.increment;
	},
	findOption: function(){				
		return {sort: {submitted: -1}, limit: this.annoncesLimitSearch()};
	},
	subscriptions: function(){
		this.annoncesSub =  Meteor.subscribe('searchAnnonces', this.searchOptions(), this.findOption());
		this.photosSub =  Meteor.subscribe('photos');
	},
	annonces: function(){
		//console.log(this.findOption());
		return Annonces.find(this.searchOptions(), this.findOption());
	},
	data: function(){
		var hasMore = this.annonces().count() === this.annoncesLimitSearch();		
		var nextPath = this.route.path({texte: this.params.texte, city: this.params.city, category: this.params.category, annoncesLimitSearch: this.annoncesLimitSearch() + this.increment});
		return{
			annonces: this.annonces(),
			ready: this.annoncesSub.ready,
			nextPath: hasMore ? nextPath : null,
			readyPhotos: this.photosSub,
			/*city: this.params.city,
			category: this.params.category,
			texte: this.params.texte*/
		}
	}
});

Router.route('/search/:texte?/:city?/:category?/:annoncesLimitSearch?', {
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

if(Meteor.isClient){
	Router.onBeforeAction('dataNotFound', {only: 'annoncePage'});
	Router.onBeforeAction('dataNotFound', {only: 'searchList'});
	Router.onBeforeAction(requireLogin, {only: 'profile'});
	Router.onBeforeAction(requireLogin, {only: 'store'});

}
