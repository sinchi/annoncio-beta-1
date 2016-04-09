import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
  /*if(Annonces.find().count() === 0)
	  Annonces.insert({
	  	title: "Galaxy S6 Edge"
	  });*/
if(Cities.find().count() === 0){
	Cities.insert({
  	name: 'Casablanca'
  });
  Cities.insert({
  	name: 'Tanger'
  });
  Cities.insert({
  	name: 'Agadir'
  });
  
  Cities.insert({
  	name: 'Fes'
  });
  
  Cities.insert({
  	name: 'Marrakech'
  });
  
  Cities.insert({
  	name: 'El jadida'
  });
  
  Cities.insert({
  	name: 'Rabat'
  });
}
  
  
if(Categories.find().count() === 0){
	Categories.insert({
  	name: 'Informatique et Multimédia'  	
  });

  Categories.insert({
  	name: 'Vihicules'  	
  });

  Categories.insert({
  	name: 'Immobilier'  	
  });

  Categories.insert({
  	name: 'Pour la maison et jardin'  	
  });

  Categories.insert({
  	name: 'Habillement et bien être'  	
  });

  Categories.insert({
  	name: 'loisirs et divertissement'  	
  });

  Categories.insert({
  	name: 'Emploi et service'  	
  });

  Categories.insert({
  	name: 'Entreprises'  	
  });

  Categories.insert({
  	name: 'autres'  	
  });

  var informatiqueId = Categories.findOne({name: 'Informatique et Multimédia'})._id;
  Categories.insert({
  	name: 'Téléphone',
  	parentId: informatiqueId	
  });

  Categories.insert({
  	name: 'Tablettes',
  	parentId: informatiqueId	
  });

  Categories.insert({
  	name: 'Ordinateurs portables',
  	parentId: informatiqueId	
  });

  Categories.insert({
  	name: 'Ordinateurs de bureau',
  	parentId: informatiqueId	
  });

  Categories.insert({
  	name: 'Accesoires informatique et Gadget',
  	parentId: informatiqueId	
  });

  Categories.insert({
  	name: 'Jeux videos et console',
  	parentId: informatiqueId	
  });

  Categories.insert({
  	name: 'Appareils photos et caméras',
  	parentId: informatiqueId	
  });

  Categories.insert({
  	name: 'Télévision',
  	parentId: informatiqueId	
  });

  Categories.insert({
  	name: 'Image & Son',
  	parentId: informatiqueId	
  });

  var vihiculeId = Categories.findOne({name: 'Vihicules'})._id;
  Categories.insert({
  	name: 'Voitures',
  	parentId: vihiculeId	
  });

  Categories.insert({
  	name: 'Motos',
  	parentId: vihiculeId	
  });

  Categories.insert({
  	name: 'Vélos',
  	parentId: vihiculeId	
  });

  Categories.insert({
  	name: 'Vihicules Professionnels',
  	parentId: vihiculeId	
  });

  Categories.insert({
  	name: 'Bateaux',
  	parentId: vihiculeId	
  });

  Categories.insert({
  	name: 'Pieces et accessoires pour vihicules',
  	parentId: vihiculeId	
  });

  var immobilierId = Categories.findOne({name: 'Immobilier'})._id;
  Categories.insert({
  	name: 'Appartements',
  	parentId: immobilierId	
  });

}
  

});
