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


  if(Brands.find().count() === 0){

  /* alfa */
   var alfa = Brands.insert({
      name: "Alfa Romeo"
    });
   CarsModel.insert({
      name: "Brera",
      model: alfa
   });
   CarsModel.insert({
      name: "Giulietta",
      model: alfa
   });
    CarsModel.insert({
        name: "Gt",
        model: alfa
     });
     CarsModel.insert({
        name: "Mito",
        model: alfa
     });

      CarsModel.insert({
        name: "Spider",
        model: alfa
       });

    CarsModel.insert({
      name: "Autres",
      model: alfa
   });
  /* //alfa */
 
  // Aston
  var aston =  Brands.insert({
      name: "Aston Martin"
    });
  CarsModel.insert({
      name: "DB9",
      model: aston
   });
  CarsModel.insert({
      name: "DBS",
      model: aston
   });
  CarsModel.insert({
      name: "Vanquish",
      model: aston
   });
  CarsModel.insert({
      name: "Vantage",
      model: aston
   });
  CarsModel.insert({
      name: "Autres",
      model: aston
   });

  // /Aston


  // Audi
  var audi = Brands.insert({
    name: 'Audi'
  });
  CarsModel.insert({
      name: "A1",
      model: audi
   });
  CarsModel.insert({
      name: "A2",
      model: audi
   });
  CarsModel.insert({
      name: "A3",
      model: audi
   });
  CarsModel.insert({
      name: "A4",
      model: audi
   });
  CarsModel.insert({
      name: "A5",
      model: audi
   });
  CarsModel.insert({
      name: "A6",
      model: audi
   });
  CarsModel.insert({
      name: "A7",
      model: audi
   });
  CarsModel.insert({
      name: "A8",
      model: audi
   });
  CarsModel.insert({
      name: "Q3",
      model: audi
   });
  CarsModel.insert({
      name: "Q5",
      model: audi
   });
  CarsModel.insert({
      name: "Q7",
      model: audi
   });
  CarsModel.insert({
      name: "Q5",
      model: audi
   });
  CarsModel.insert({
      name: "R8",
      model: audi
   });
  CarsModel.insert({
      name: "RS5",
      model: audi
   });
  CarsModel.insert({
      name: "RS6",
      model: audi
   });
  CarsModel.insert({
      name: "S4",
      model: audi
   });
  CarsModel.insert({
      name: "S5",
      model: audi
   });
  CarsModel.insert({
      name: "TT",
      model: audi
   });
  CarsModel.insert({
      name: "TTS",
      model: audi
   });
   CarsModel.insert({
      name: "Autres",
      model: audi
   });

// /Audi


  // Bentley
  var bentley = Brands.insert({
      name: "Bentley"
    });
  CarsModel.insert({
      name: "Arnage",
      model: bentley
   });
  CarsModel.insert({
      name: "continental",
      model: bentley
   });
  CarsModel.insert({
      name: "Continental Flying Spur",
      model: bentley
   });
  CarsModel.insert({
      name: "Coupe",
      model: bentley
   });
  CarsModel.insert({
      name: "Mulsanne",
      model: bentley
   });
  CarsModel.insert({
      name: "Autres",
      model: bentley
   });
  // / Bentley


  // BMW
  var bmw =  Brands.insert({
      name: "BMW"
    });
  CarsModel.insert({
      name: "M",
      model: bmw
   });
  CarsModel.insert({
      name: "M3",
      model: bmw
   });
  CarsModel.insert({
      name: "M4",
      model: bmw
   });
  CarsModel.insert({
      name: "M5",
      model: bmw
   });
  CarsModel.insert({
      name: "M6",
      model: bmw
   });

CarsModel.insert({
      name: "Serie 1",
      model: bmw
   });

CarsModel.insert({
      name: "Serie 2",
      model: bmw
   });

CarsModel.insert({
      name: "Serie 3",
      model: bmw
   });

CarsModel.insert({
      name: "Serie 4",
      model: bmw
   });

CarsModel.insert({
      name: "Serie 5",
      model: bmw
   });

CarsModel.insert({
      name: "Serie 6",
      model: bmw
   });

CarsModel.insert({
      name: "Serie 7",
      model: bmw
   });

CarsModel.insert({
      name: "X1",
      model: bmw
   });

CarsModel.insert({
      name: "X2",
      model: bmw
   });
CarsModel.insert({
      name: "X3",
      model: bmw
   });

CarsModel.insert({
      name: "X4",
      model: bmw
   });

CarsModel.insert({
      name: "X5",
      model: bmw
   });

CarsModel.insert({
      name: "X6",
      model: bmw
   });
CarsModel.insert({
      name: "Z4",
      model: bmw
   });

CarsModel.insert({
      name: "Autres",
      model: bmw
   });
 //  /BMW



// byd
  var byd =  Brands.insert({
      name: "BYD"
    });
  CarsModel.insert({
      name: "F3",
      model: byd
   });

CarsModel.insert({
      name: "Autres",
      model: byd
   });

// /byd


  // cadillac 
 var cadillac =  Brands.insert({
      name: "Cadillac"
    });

CarsModel.insert({
      name: "DTS",
      model: cadillac
   });
CarsModel.insert({
      name: "Escalade",
      model: cadillac
   });
CarsModel.insert({
      name: "Autres",
      model: cadillac
   });

// /cadillac



  // changhe
  var changhe =  Brands.insert({
      name: "Changhe"
    });

  CarsModel.insert({
      name: "Idal",
      model: changhe
   });
  CarsModel.insert({
      name: "Autres",
      model: changhe
   });
  // / changhe


// chery
  var chery =  Brands.insert({
      name: "Chery"
    });

  CarsModel.insert({
      name: "A113",
      model: chery
   });

CarsModel.insert({
      name: "A516",
      model: chery
   });

CarsModel.insert({
      name: "Eastar",
      model: chery
   });

CarsModel.insert({
      name: "QQ",
      model: chery
   });

CarsModel.insert({
      name: "QQ6",
      model: chery
   });

CarsModel.insert({
      name: "Tiggo",
      model: chery
   });

CarsModel.insert({
      name: "A525",
      model: chery
   });
CarsModel.insert({
      name: "Autres",
      model: chery
   });

// /chery


// Chevrolet
  var chevrolet =  Brands.insert({
      name: "Chevrolet"
    });

  CarsModel.insert({
      name: "Aveo",
      model: chevrolet
   });
  CarsModel.insert({
      name: "Camaro",
      model: chevrolet
   });
  CarsModel.insert({
      name: "Captiva",
      model: chevrolet
   });
  CarsModel.insert({
      name: "Corvette",
      model: chevrolet
   });
  CarsModel.insert({
      name: "Corvette Cabrio",
      model: chevrolet
   });
  CarsModel.insert({
      name: "Cruze",
      model: chevrolet
   });
  CarsModel.insert({
      name: "Epica",
      model: chevrolet
   });
  CarsModel.insert({
      name: "HHR",
      model: chevrolet
   });
  CarsModel.insert({
      name: "Lacetti",
      model: chevrolet
   });
  CarsModel.insert({
      name: "Optra",
      model: chevrolet
   });
  CarsModel.insert({
      name: "Spark",
      model: chevrolet
   });
  CarsModel.insert({
      name: "Tahoe",
      model: chevrolet
   });
  CarsModel.insert({
      name: "Trailblazer",
      model: chevrolet
   });
  CarsModel.insert({
      name: "Autres",
      model: chevrolet
   });

// /Chevrolet


// chrysler
  var chrysler = Brands.insert({
      name: "Chrysler"
    });

  CarsModel.insert({
      name: "300C",
      model: chrysler
   });
  CarsModel.insert({
      name: "300M",
      model: chrysler
   });
  CarsModel.insert({
      name: "Grand Voyager",
      model: chrysler
   });
  CarsModel.insert({
      name: "Pacifica",
      model: chrysler
   });
  CarsModel.insert({
      name: "PT Cuiser",
      model: chrysler
   });
  CarsModel.insert({
      name: "Sebring",
      model: chrysler
   });
  CarsModel.insert({
      name: "Autres",
      model: chrysler
   });
 // /chrysler


// citroen
  var citroen =  Brands.insert({
      name: "Citroen"
    });

 CarsModel.insert({
      name: "Berlingo",
      model: citroen
   });
  CarsModel.insert({
      name: "C1",
      model: citroen
   });
   CarsModel.insert({
      name: "C2",
      model: citroen
   });
    CarsModel.insert({
      name: "C3",
      model: citroen
   });
     CarsModel.insert({
      name: "C3 Picasso",
      model: citroen
   });
     CarsModel.insert({
      name: "C4",
      model: citroen
   });
     CarsModel.insert({
      name: "C4 Aircross",
      model: citroen
   });
     CarsModel.insert({
      name: "C5",
      model: citroen
   });
     CarsModel.insert({
      name: "C6",
      model: citroen
   });
     CarsModel.insert({
      name: "C8",
      model: citroen
   });
     CarsModel.insert({
      name: "C-Elysée",
      model: citroen
   });
      CarsModel.insert({
      name: "DS3",
      model: citroen
   });

 CarsModel.insert({
      name: "DS4",
      model: citroen
   });

 CarsModel.insert({
      name: "DS5",
      model: citroen
   });

 CarsModel.insert({
      name: "Jumper",
      model: citroen
   });
 CarsModel.insert({
      name: "Jumpy",
      model: citroen
   });
 CarsModel.insert({
      name: "Nemo",
      model: citroen
   });
 CarsModel.insert({
      name: "Xsara Picasso",
      model: citroen
   });
 CarsModel.insert({
      name: "Autres",
      model: citroen
   });
// / citroen

// Dacia
  var dacia =   Brands.insert({
      name: "Dacia"
    });

  CarsModel.insert({
      name: "Dokker",
      model: dacia
   });
  CarsModel.insert({
      name: "Duster",
      model: dacia
   });
  CarsModel.insert({
      name: "Lodgy",
      model: dacia
   });
  CarsModel.insert({
      name: "Logan",
      model: dacia
   });
  CarsModel.insert({
      name: "Sandero",
      model: dacia
   });
  CarsModel.insert({
      name: "Autres",
      model: dacia
   });
// /Dacia

// Daewoo
var daewoo = Brands.insert({
      name: "Daewoo"
  });
CarsModel.insert({
      name: "Espero",
      model: daewoo
   });
CarsModel.insert({
      name: "Evanda",
      model: daewoo
   });
CarsModel.insert({
      name: "Kalos",
      model: daewoo
   });
CarsModel.insert({
      name: "Korando",
      model: daewoo
   });
CarsModel.insert({
      name: "Lacetti",
      model: daewoo
   });
CarsModel.insert({
      name: "Lanos",
      model: daewoo
   });
CarsModel.insert({
      name: "Matiz",
      model: daewoo
   });
CarsModel.insert({
      name: "Musso",
      model: daewoo
   });
CarsModel.insert({
      name: "Nexia",
      model: daewoo
   });
CarsModel.insert({
      name: "Nubira",
      model: daewoo
   });
CarsModel.insert({
      name: "Rezzo",
      model: daewoo
   });
CarsModel.insert({
      name: "Autres",
      model: daewoo
   });

// /daewoo

// Dahaitsu
  var daihatsu =  Brands.insert({
      name: "Daihatsu"
    });
  CarsModel.insert({
      name: "Copen",
      model: daihatsu
   });
  CarsModel.insert({
      name: "Sirion",
      model: daihatsu
   });
  CarsModel.insert({
      name: "Terios",
      model: daihatsu
   });
  CarsModel.insert({
      name: "YRV",
      model: daihatsu
   });
  CarsModel.insert({
      name: "Autres",
      model: daihatsu
   });
// /Daihatsu

// Dodge
  var dodge =  Brands.insert({
      name: "Dodge"
    });
  CarsModel.insert({
      name: "Avenger",
      model: dodge
   });
CarsModel.insert({
      name: "Caliber",
      model: dodge
   });
CarsModel.insert({
      name: "Autres",
      model: dodge
   });
// /Dodge

// Ferrari
  var ferrari =  Brands.insert({
      name: "Ferrari"
    });
  CarsModel.insert({
      name: "458",
      model: ferrari
   });
  CarsModel.insert({
      name: "488",
      model: ferrari
   });
  CarsModel.insert({
      name: "California",
      model: ferrari
   });
  CarsModel.insert({
      name: "F40",
      model: ferrari
   });
  CarsModel.insert({
      name: "F430",
      model: ferrari
   });
  CarsModel.insert({
      name: "Nitro",
      model: ferrari
   });
  CarsModel.insert({
      name: "Ram",
      model: ferrari
   });
  CarsModel.insert({
      name: "Autres",
      model: ferrari
   });
// /Ferrari

// fiat
  var fiat =  Brands.insert({
      name: "Fiat"
    });
  CarsModel.insert({
      name: "500",
      model: fiat
   });
 CarsModel.insert({
      name: "Albea",
      model: fiat
   });
CarsModel.insert({
      name: "Bravo",
      model: fiat
   });
  CarsModel.insert({
      name: "Doblo",
      model: fiat
   });
  CarsModel.insert({
      name: "Ducato",
      model: fiat
   });
  CarsModel.insert({
      name: "Linea",
      model: fiat
   });
  CarsModel.insert({
      name: "Palio",
      model: fiat
   });
  CarsModel.insert({
      name: "Panda",
      model: fiat
   });
  CarsModel.insert({
      name: "Pinto",
      model: fiat
   });
  CarsModel.insert({
      name: "Punto",
      model: fiat
   });
  CarsModel.insert({
      name: "Scudo",
      model: fiat
   });
  CarsModel.insert({
      name: "Siena",
      model: fiat
   });
  CarsModel.insert({
      name: "Uno",
      model: fiat
   });
  CarsModel.insert({
      name: "Autres",
      model: fiat
   });

  // /fiat


// Ford
 var ford =  Brands.insert({
      name: "Ford"
    });
   CarsModel.insert({
      name: "C-Max",
      model: ford
   });
CarsModel.insert({
      name: "Expedition",
      model: ford
   });
CarsModel.insert({
      name: "F150",
      model: ford
   });
CarsModel.insert({
      name: "F250",
      model: ford
   });
CarsModel.insert({
      name: "F350",
      model: ford
   });
CarsModel.insert({
      name: "Fiesta",
      model: ford
   });
CarsModel.insert({
      name: "Focus",
      model: ford
   });
CarsModel.insert({
      name: "Fusion",
      model: ford
   });
CarsModel.insert({
      name: "Galaxy",
      model: ford
   });
CarsModel.insert({
      name: "Ka",
      model: ford
   });
CarsModel.insert({
      name: "Kuga",
      model: ford
   });
CarsModel.insert({
      name: "Mondeo",
      model: ford
   });
CarsModel.insert({
      name: "Mustang",
      model: ford
   });
CarsModel.insert({
      name: "Ranger",
      model: ford
   });
CarsModel.insert({
      name: "S-Max",
      model: ford
   });
CarsModel.insert({
      name: "Tourneo",
      model: ford
   });
CarsModel.insert({
      name: "Transit",
      model: ford
   });
CarsModel.insert({
      name: "Autres",
      model: ford
   });

// /Ford

// Foton
  var foton = Brands.insert({
      name: "Foton"
    });
  CarsModel.insert({
      name: "Forland",
      model: foton
   });
   CarsModel.insert({
      name: "Autres",
      model: foton
   });
// /Foton

// Geely
  var geely =  Brands.insert({
      name: "Geely"
    });
  CarsModel.insert({
      name: "GK-GL",
      model: geely
   });
   CarsModel.insert({
      name: "GK-GS",
      model: geely
   });
    CarsModel.insert({
      name: "GK-GT",
      model: geely
   });
     CarsModel.insert({
      name: "LC",
      model: geely
   });
      CarsModel.insert({
      name: "MK-GL",
      model: geely
   });
       CarsModel.insert({
      name: "MK-GS",
      model: geely
   });
        CarsModel.insert({
      name: "MK-GT",
      model: geely
   });
         CarsModel.insert({
      name: "Zotye",
      model: geely
   });
  CarsModel.insert({
      name: "Autres",
      model: geely
   });

  // /Geely

// GMC
  var gmc = Brands.insert({
      name: "GMC"
    });
   CarsModel.insert({
      name: "Hover",
      model: gmc
   });
   CarsModel.insert({
      name: "Yukon",
      model: gmc
   });
   CarsModel.insert({
      name: "Autres",
      model: gmc
   });

   // /GMC

// Honda
  var honda =  Brands.insert({
      name: "Honda"
    });
   CarsModel.insert({
      name: "Accent",
      model: honda
   });
    CarsModel.insert({
      name: "Accord",
      model: honda
   });
     CarsModel.insert({
      name: "City",
      model: honda
   });
      CarsModel.insert({
      name: "Civic",
      model: honda
   });

 CarsModel.insert({
      name: "CR-V",
      model: honda
   });

 CarsModel.insert({
      name: "Jazz",
      model: honda
   });

 CarsModel.insert({
      name: "Legend",
      model: honda
   });

 CarsModel.insert({
      name: "Odyssey",
      model: honda
   });

 CarsModel.insert({
      name: "Vigor",
      model: honda
   });

 CarsModel.insert({
      name: "Autres",
      model: honda
   });
 // /Honda

// Hummer
  var hummer =  Brands.insert({
      name: "Hummer"
    });
  CarsModel.insert({
      name: "H2",
      model: hummer
   });
  CarsModel.insert({
      name: "H3",
      model: hummer
   });
  CarsModel.insert({
      name: "Autres",
      model: hummer
   });
  // /Hummer


// Hyundai
  var hyundai =  Brands.insert({
      name: "Hyundai"
    });
  CarsModel.insert({
      name: "Accent",
      model: hyundai
   });
  CarsModel.insert({
      name: "Atos",
      model: hyundai
   });
  CarsModel.insert({
      name: "Atos Prime",
      model: hyundai
   });
  CarsModel.insert({
      name: "Azera",
      model: hyundai
   });
  CarsModel.insert({
      name: "Coupe",
      model: hyundai
   });
  CarsModel.insert({
      name: "Elantra",
      model: hyundai
   });
  CarsModel.insert({
      name: "Genesis",
      model: hyundai
   });
  CarsModel.insert({
      name: "Grand i10",
      model: hyundai
   });
  CarsModel.insert({
      name: "H-1",
      model: hyundai
   });
  CarsModel.insert({
      name: "H-100",
      model: hyundai
   });
  CarsModel.insert({
      name: "i 10",
      model: hyundai
   });
  CarsModel.insert({
      name: "i 20",
      model: hyundai
   });
  CarsModel.insert({
      name: "i 30",
      model: hyundai
   });
  CarsModel.insert({
      name: "i 40",
      model: hyundai
   });
  CarsModel.insert({
      name: "ix 35",
      model: hyundai
   });
  CarsModel.insert({
      name: "Matrix",
      model: hyundai
   });
  CarsModel.insert({
      name: "Santa Fe",
      model: hyundai
   });
  CarsModel.insert({
      name: "Tucson",
      model: hyundai
   });
  CarsModel.insert({
      name: "Veracruz",
      model: hyundai
   });
  CarsModel.insert({
      name: "Autres",
      model: hyundai
   });

  // /Hyundai

// infiniti
  var infiniti =  Brands.insert({
      name: "Infiniti"
    });
CarsModel.insert({
      name: "EX35",
      model: infiniti
   });
  CarsModel.insert({
      name: "FX35",
      model: infiniti
   });
  CarsModel.insert({
      name: "FX50",
      model: infiniti
   });
  CarsModel.insert({
      name: "G35",
      model: infiniti
   });
  CarsModel.insert({
      name: "G37",
      model: infiniti
   });
  CarsModel.insert({
      name: "Autres",
      model: infiniti
   });

  // /infinit

  // isuzu

 var isuzu =  Brands.insert({
      name: "Isuzu"
    });
 CarsModel.insert({
      name: "D-MAX",
      model: isuzu
   });
 CarsModel.insert({
      name: "Landwind",
      model: isuzu
   });
 CarsModel.insert({
      name: "Trooper",
      model: isuzu
   });
 CarsModel.insert({
      name: "Autres",
      model: isuzu
   });

 // /isuzu

// iveco
 var iveco =  Brands.insert({
      name: "Iveco"
    });
  CarsModel.insert({
      name: "Daily",
      model: iveco
   });
   CarsModel.insert({
      name: "Trakker",
      model: iveco
   });
    CarsModel.insert({
      name: "Autres",
      model: iveco
   });

  // /iveco

// Jaguar
  var jaguar =  Brands.insert({
      name: "Jaguar"
    });
     CarsModel.insert({
      name: "S-Type",
      model: jaguar
   });
       CarsModel.insert({
      name: "Sovreign",
      model: jaguar
   });
         CarsModel.insert({
      name: "X-Type",
      model: jaguar
   });
   CarsModel.insert({
      name: "XF",
      model: jaguar
   });
    CarsModel.insert({
      name: "XJ",
      model: jaguar
   });
    CarsModel.insert({
      name: "XJ6",
      model: jaguar
   });
     CarsModel.insert({
      name: "XJ8",
      model: jaguar
   });
     CarsModel.insert({
      name: "XK8",
      model: jaguar
   });
    CarsModel.insert({
      name: "XKR",
      model: jaguar
   });
   CarsModel.insert({
      name: "Autres",
      model: jaguar
   });

   // /Jaguar

// Jeep
 var jeep = Brands.insert({
      name: "Jeep"
    });
  CarsModel.insert({
      name: "Cherokee",
      model: jeep
   });
   CarsModel.insert({
      name: "Commander",
      model: jeep
   });
   CarsModel.insert({
      name: "Compass",
      model: jeep
   });
   CarsModel.insert({
      name: "Grand Cherokee",
      model: jeep
   });
   CarsModel.insert({
      name: "Liberty",
      model: jeep
   });
   CarsModel.insert({
      name: "Patriot",
      model: jeep
   });
   CarsModel.insert({
      name: "Wrangler",
      model: jeep
   });
   CarsModel.insert({
      name: "Autres",
      model: jeep
   });
   // /Jeep

// kia
var kia =  Brands.insert({
      name: "Kia"
    });
   CarsModel.insert({
      name: "Carens",
      model: kia
   });
      CarsModel.insert({
      name: "C'eed",
      model: kia
   });
   CarsModel.insert({
      name: "Cerato",
      model: kia
   });
      CarsModel.insert({
      name: "K2700",
      model: kia
   });
     CarsModel.insert({
      name: "Mohave",
      model: kia
   });
 CarsModel.insert({
      name: "Opirus",
      model: kia
   });
    CarsModel.insert({
      name: "Optima",
      model: kia
   });
   CarsModel.insert({
      name: "Picanto",
      model: kia
   });

   CarsModel.insert({
      name: "Rio",
      model: kia
   });
   CarsModel.insert({
      name: "Sorento",
      model: kia
   });

  CarsModel.insert({
      name: "Soul",
      model: kia
   });
CarsModel.insert({
      name: "Sportage",
      model: kia
   });
CarsModel.insert({
      name: "Autres",
      model: kia
   });

// /kia

// lamborghini
var lamborghini =  Brands.insert({
      name: "Lamborghini"
    });

CarsModel.insert({
      name: "Aventador",
      model: lamborghini
   });
CarsModel.insert({
      name: "Gallardo",
      model: lamborghini
   });
CarsModel.insert({
      name: "Huracan",
      model: lamborghini
   });
CarsModel.insert({
      name: "Autres",
      model: lamborghini
   });

/// lamborghini

// lancia
 var lancia =   Brands.insert({
      name: "Lancia"
    });
 CarsModel.insert({
      name: "Autres",
      model: lancia
   });
 CarsModel.insert({
      name: "Autres",
      model: lancia
   });

CarsModel.insert({
      name: "Autres",
      model: lancia
   });

CarsModel.insert({
      name: "Autres",
      model: lancia
   });

// /lancia


// landrover
  var landrover=  Brands.insert({
      name: "Land Rover"
    });
  CarsModel.insert({
      name: "Autres",
      model: landrover
   });

CarsModel.insert({
      name: "Autres",
      model: landrover
   });

CarsModel.insert({
      name: "Autres",
      model: landrover
   });

CarsModel.insert({
      name: "Autres",
      model: landrover
   });

CarsModel.insert({
      name: "Autres",
      model: landrover
   });

CarsModel.insert({
      name: "Autres",
      model: landrover
   });
// /landrover

// lexus

var lexus = Brands.insert({
      name: "Lexus"
    });
CarsModel.insert({
      name: "LS",
      model: lexus
   });
CarsModel.insert({
      name: "RX",
      model: lexus
   });
CarsModel.insert({
      name: "Autres",
      model: lexus
   });

// /lexus

// town car
 var lincoln =  Brands.insert({
      name: "Lincoln"
    });
 CarsModel.insert({
      name: "Town Car",
      model: lincoln
   });

CarsModel.insert({
      name: "Autres",
      model: lincoln
   });
// /town car
   
   // mahindra 
  var mahindra =  Brands.insert({
      name: "Mahindra"
    });
CarsModel.insert({
      name: "Hover",
      model: mahindra
   });
CarsModel.insert({
      name: "Scorpion",
      model: mahindra
   });
CarsModel.insert({
      name: "Autres",
      model: mahindra
   });

// /mahindra

// man
 var man = Brands.insert({
      name: "Man"
    });

CarsModel.insert({
      name: "8X4",
      model: man
   });
CarsModel.insert({
      name: "TGA",
      model: man
   });
CarsModel.insert({
      name: "Autres",
      model: man
   });

// /man

// maseraati
 var maserati = Brands.insert({
      name: "Maserati"
    });
 CarsModel.insert({
      name: "3200 GT",
      model: maserati
   });
  CarsModel.insert({
      name: "4200 GT",
      model: maserati
   });
 CarsModel.insert({
      name: "Quattroporte",
      model: maserati
   });
  CarsModel.insert({
      name: "Autres",
      model: maserati
   });
  // /maserati

// masey
 var masey =   Brands.insert({
      name: "Masey Ferguson"
    });
   CarsModel.insert({
      name: "440",
      model: masey
   });
     CarsModel.insert({
      name: "Autres",
      model: masey
   });
// /masey

// mazda
  var mazda =  Brands.insert({
      name: "Mazda"
    });

  CarsModel.insert({
      name: "2",
      model: mazda
   });
  CarsModel.insert({
      name: "3",
      model: mazda
   });

CarsModel.insert({
      name: "5",
      model: mazda
   });

CarsModel.insert({
      name: "6",
      model: mazda
   });

CarsModel.insert({
      name: "323",
      model: mazda
   });

CarsModel.insert({
      name: "BK",
      model: mazda
   });

CarsModel.insert({
      name: "BT-50",
      model: mazda
   });

CarsModel.insert({
      name: "CX-9",
      model: mazda
   });

CarsModel.insert({
      name: "MX-5",
      model: mazda
   });

CarsModel.insert({
      name: "RX-8",
      model: mazda
   });

CarsModel.insert({
      name: "Autres",
      model: mazda
   });

// /mazda

// Mercedes
 var mercedes = Brands.insert({
      name: "Mercedes-Benz"
    });
 CarsModel.insert({
      name: "190",
      model: mercedes
   });
 CarsModel.insert({
      name: "220",
      model: mercedes
   });
  CarsModel.insert({
      name: "250",
      model: mercedes
   });
   CarsModel.insert({
      name: "Classe A",
      model: mercedes
   });
    CarsModel.insert({
      name: "Classe B",
      model: mercedes
   });
     CarsModel.insert({
      name: "Classe C",
      model: mercedes
   });
 CarsModel.insert({
      name: "Classe CL",
      model: mercedes
   });
 CarsModel.insert({
      name: "Classe CLA",
      model: mercedes
   });
  CarsModel.insert({
      name: "Classe CLK",
      model: mercedes
   });
 CarsModel.insert({
      name: "Classe CLS",
      model: mercedes
   });
 CarsModel.insert({
      name: "Classe E",
      model: mercedes
   });
  CarsModel.insert({
      name: "Classe G",
      model: mercedes
   });
 CarsModel.insert({
      name: "Classe GL",
      model: mercedes
   });
 CarsModel.insert({
      name: "Classe GLA",
      model: mercedes
   });
 CarsModel.insert({
      name: "Classe GLC",
      model: mercedes
   });
 CarsModel.insert({
      name: "Classe GLE",
      model: mercedes
   });
 CarsModel.insert({
      name: "Classe GLS",
      model: mercedes
   });
 CarsModel.insert({
      name: "Classe M",
      model: mercedes
   });
 CarsModel.insert({
      name: "Classe S",
      model: mercedes
   });
 CarsModel.insert({
      name: "Classe SL",
      model: mercedes
   });
  CarsModel.insert({
      name: "Classe SLK",
      model: mercedes
   });
   CarsModel.insert({
      name: "Classe V",
      model: mercedes
   });
    CarsModel.insert({
      name: "Sprinter",
      model: mercedes
   });
     CarsModel.insert({
      name: "Viano",
      model: mercedes
   });
      CarsModel.insert({
      name: "Vito",
      model: mercedes
   });
       CarsModel.insert({
      name: "Autres",
      model: mercedes
   });

// /Mercedes

// mini
 var mini = Brands.insert({
      name: "Mini"
    });
CarsModel.insert({
      name: "cabrio",
      model: mini
   });
CarsModel.insert({
      name: "cooper",
      model: mini
   });
CarsModel.insert({
      name: "country man",
      model: mini
   });
CarsModel.insert({
      name: "one",
      model: mini
   });
CarsModel.insert({
      name: "Autres",
      model: mini
   });

// / mini

// mitsubishi

var mitsubishi = Brands.insert({
      name: "Mitsubishi"
    });
CarsModel.insert({
      name: "canter",
      model: mitsubishi
   });
CarsModel.insert({
      name: "L200",
      model: mitsubishi
   });
CarsModel.insert({
      name: "lancer",
      model: mitsubishi
   });
CarsModel.insert({
      name: "nativa",
      model: mitsubishi
   });
CarsModel.insert({
      name: "outlander",
      model: mitsubishi
   });
CarsModel.insert({
      name: "pajero",
      model: mitsubishi
   });
CarsModel.insert({
      name: "pajero sport",
      model: mitsubishi
   });
CarsModel.insert({
      name: "pick up",
      model: mitsubishi
   });
CarsModel.insert({
      name: "Autres",
      model: mitsubishi
   });

// /mitsubishi

// nissan
var nissan =  Brands.insert({
      name: "Nissan"
    });
CarsModel.insert({
      name: "350Z",
      model: nissan
   });
CarsModel.insert({
      name: "370Z",
      model: nissan
   });

CarsModel.insert({
      name: "Altima",
      model: nissan
   });

CarsModel.insert({
      name: "Juke",
      model: nissan
   });

CarsModel.insert({
      name: "Micra",
      model: nissan
   });

CarsModel.insert({
      name: "Murano",
      model: nissan
   });

CarsModel.insert({
      name: "Navara",
      model: nissan
   });

CarsModel.insert({
      name: "Pathfinder",
      model: nissan
   });

CarsModel.insert({
      name: "Patrol GR",
      model: nissan
   });

CarsModel.insert({
      name: "Pick up",
      model: nissan
   });

CarsModel.insert({
      name: "primera",
      model: nissan
   });

CarsModel.insert({
      name: "Qashqai",
      model: nissan
   });

CarsModel.insert({
      name: "Rogue",
      model: nissan
   });

CarsModel.insert({
      name: "Sunny",
      model: nissan
   });

CarsModel.insert({
      name: "Tiida",
      model: nissan
   });

CarsModel.insert({
      name: "X-Trail",
      model: nissan
   });

CarsModel.insert({
      name: "Autres",
      model: nissan
   });
// /nissan

// opel
var opel =  Brands.insert({
      name: "Opel"
    });
CarsModel.insert({
      name: "Agila",
      model: opel
   });
CarsModel.insert({
      name: "Astra",
      model: opel
   });

CarsModel.insert({
      name: "Corsa",
      model: opel
   });

CarsModel.insert({
      name: "Insignia",
      model: opel
   });

CarsModel.insert({
      name: "Meriva",
      model: opel
   });

CarsModel.insert({
      name: "Tigra",
      model: opel
   });
CarsModel.insert({
      name: "Vectra",
      model: opel
   });

CarsModel.insert({
      name: "Zafira",
      model: opel
   });

CarsModel.insert({
      name: "Autres",
      model: opel
   });

// /opel

// peugeot
var peugeot =  Brands.insert({
      name: "Peugeot"
    });
CarsModel.insert({
      name: "106",
      model: peugeot
   });
CarsModel.insert({
      name: "107",
      model: peugeot
   });
CarsModel.insert({
      name: "205",
      model: peugeot
   });
CarsModel.insert({
      name: "206",
      model: peugeot
   });
CarsModel.insert({
      name: "207",
      model: peugeot
   });
CarsModel.insert({
      name: "208",
      model: peugeot
   });
CarsModel.insert({
      name: "301",
      model: peugeot
   });
CarsModel.insert({
      name: "306",
      model: peugeot
   });
CarsModel.insert({
      name: "307",
      model: peugeot
   });
CarsModel.insert({
      name: "308",
      model: peugeot
   });
CarsModel.insert({
      name: "309",
      model: peugeot
   });
CarsModel.insert({
      name: "404",
      model: peugeot
   });
CarsModel.insert({
      name: "405",
      model: peugeot
   });
CarsModel.insert({
      name: "406",
      model: peugeot
   });
CarsModel.insert({
      name: "407",
      model: peugeot
   });
CarsModel.insert({
      name: "505",
      model: peugeot
   });
CarsModel.insert({
      name: "506",
      model: peugeot
   });
CarsModel.insert({
      name: "507",
      model: peugeot
   });
CarsModel.insert({
      name: "508",
      model: peugeot
   });
CarsModel.insert({
      name: "607",
      model: peugeot
   });
CarsModel.insert({
      name: "2008",
      model: peugeot
   });
CarsModel.insert({
      name: "3008",
      model: peugeot
   });
CarsModel.insert({
      name: "4008",
      model: peugeot
   });
CarsModel.insert({
      name: "5008",
      model: peugeot
   });
CarsModel.insert({
      name: "Bipper",
      model: peugeot
   });
CarsModel.insert({
      name: "Boxer",
      model: peugeot
   });
CarsModel.insert({
      name: "Expert",
      model: peugeot
   });
CarsModel.insert({
      name: "Partner",
      model: peugeot
   });
CarsModel.insert({
      name: "RCZ",
      model: peugeot
   });
CarsModel.insert({
      name: "Tepee",
      model: peugeot
   });
CarsModel.insert({
      name: "Autres",
      model: peugeot
   });

// /peugeot

//pontiac
 var pontiac =  Brands.insert({
      name: "Pontiac"
    });
 CarsModel.insert({
      name: "G6",
      model: pontiac
   });
  CarsModel.insert({
      name: "Solstice",
      model: pontiac
   });
   CarsModel.insert({
      name: "Autres",
      model: pontiac
   });
   // /pontiac

// porsche

var porsche =  Brands.insert({
      name: "Porsche"
    });
   CarsModel.insert({
      name: "911 Turbo",
      model: porsche
   });
      CarsModel.insert({
      name: "911 Carrera",
      model: porsche
   });

   CarsModel.insert({
      name: "Boxster",
      model: porsche
   });

   CarsModel.insert({
      name: "Carrera GT",
      model: porsche
   });

   CarsModel.insert({
      name: "Cayenne",
      model: porsche
   });

   CarsModel.insert({
      name: "Cayman",
      model: porsche
   });

   CarsModel.insert({
      name: "Panamera",
      model: porsche
   });

   CarsModel.insert({
      name: "Autres",
      model: porsche
   });

// /porsche

// Renault
var renault = Brands.insert({
      name: "Renault"
    });
   CarsModel.insert({
      name: "19",
      model: renault
   });
      CarsModel.insert({
      name: "Capture",
      model: renault
   });

   CarsModel.insert({
      name: "Clio",
      model: renault
   });

   CarsModel.insert({
      name: "Espace",
      model: renault
   });

   CarsModel.insert({
      name: "Fluence",
      model: renault
   });

   CarsModel.insert({
      name: "Grand Espace",
      model: renault
   });
   CarsModel.insert({
      name: "Kadjar",
      model: renault
   });
   CarsModel.insert({
      name: "Kangoo",
      model: renault
   });
   CarsModel.insert({
      name: "Koleos",
      model: renault
   });
   CarsModel.insert({
      name: "Laguna",
      model: renault
   });
   CarsModel.insert({
      name: "Latitude",
      model: renault
   });
   CarsModel.insert({
      name: "Logan",
      model: renault
   });
   CarsModel.insert({
      name: "Master",
      model: renault
   });
   CarsModel.insert({
      name: "Megane",
      model: renault
   });
   CarsModel.insert({
      name: "Midlum",
      model: renault
   });
   CarsModel.insert({
      name: "Modus",
      model: renault
   });
   CarsModel.insert({
      name: "R21",
      model: renault
   });
   CarsModel.insert({
      name: "R4",
      model: renault
   });
   CarsModel.insert({
      name: "Safrane",
      model: renault
   });
   CarsModel.insert({
      name: "Scenic",
      model: renault
   });
   CarsModel.insert({
      name: "Symbol",
      model: renault
   });
   CarsModel.insert({
      name: "Trafic",
      model: renault
   });
   CarsModel.insert({
      name: "Twingo",
      model: renault
   });
   CarsModel.insert({
      name: "Vel Satis",
      model: renault
   });
   CarsModel.insert({
      name: "Autres",
      model: renault
   });

   // /Renault

//Rover

var rover = Brands.insert({
      name: "Rover"
    });

   CarsModel.insert({
      name: "25",
      model: rover
   });
 CarsModel.insert({
      name: "45",
      model: rover
   });
      CarsModel.insert({
      name: "75",
      model: rover
   });
 CarsModel.insert({
      name: "Mini",
      model: rover
   });
   CarsModel.insert({
      name: "Serie 100",
      model: rover
   });
     CarsModel.insert({
      name: "Serie 200",
      model: rover
   });
 CarsModel.insert({
      name: "Serie 400",
      model: rover
   });
   CarsModel.insert({
      name: "Serie 600",
      model: rover
   });
   CarsModel.insert({
      name: "Serie 800",
      model: rover
   });
   CarsModel.insert({
      name: "SD1",
      model: rover
   });
      CarsModel.insert({
      name: "Streetwise",
      model: rover
   });
      CarsModel.insert({
      name: "Autres",
      model: rover
   });
     
// /Rover

// Seat

var seat =  Brands.insert({
      name: "Seat"
  });

  CarsModel.insert({
      name: "Altea",
      model: seat
   });
    CarsModel.insert({
      name: "Cordoba",
      model: seat
   });
      CarsModel.insert({
      name: "Exeo",
      model: seat
   });
  CarsModel.insert({
      name: "Ibiza",
      model: seat
   });
  CarsModel.insert({
      name: "Leon",
      model: seat
   });
   
    CarsModel.insert({
      name: "Toledo",
      model: seat
   });
  CarsModel.insert({
      name: "Autres",
      model: seat
   });

  // /seat

// skoda
 var skoda =  Brands.insert({
      name: "Skoda"
    });
   CarsModel.insert({
      name: "Fabia",
      model: skoda
   });
      CarsModel.insert({
      name: "Octavia",
      model: skoda
   });

   CarsModel.insert({
      name: "Roomster",
      model: skoda
   });
   CarsModel.insert({
      name: "Superb",
      model: skoda
   });
   CarsModel.insert({
      name: "Yeti",
      model: skoda
   });
   CarsModel.insert({
      name: "Autres",
      model: skoda
   });
// /skoda

// smart
 var smart = Brands.insert({
      name: "Smart"
  });
    CarsModel.insert({
      name: "Crossblade",
      model: smart
   });
    CarsModel.insert({
      name: "ForTwo",
      model: smart
   });
  CarsModel.insert({
      name: "Smart",
      model: smart
   });
    CarsModel.insert({
      name: "Autres",
      model: smart
   });
// /smart

// sangyong
var sangyong = Brands.insert({
      name: "Ssangyong"
    });

    CarsModel.insert({
      name: "Actyon",
      model: sangyong
   });
CarsModel.insert({
      name: "Ceo",
      model: sangyong
   });
    CarsModel.insert({
      name: "Korando",
      model: sangyong
   });
    CarsModel.insert({
      name: "Kyron",
      model: sangyong
   });
    CarsModel.insert({
      name: "Rexton",
      model: sangyong
   });
    CarsModel.insert({
      name: "Rodius",
      model: sangyong
   });
    CarsModel.insert({
      name: "Autres",
      model: sangyong
   });
// /sangyong

// subaru
var subaru = Brands.insert({
      name: "Subaru"
    });
CarsModel.insert({
      name: "Impreza",
      model: subaru
   });
CarsModel.insert({
      name: "Legacy",
      model: subaru
   });
   CarsModel.insert({
      name: "Tribeca",
      model: subaru
   });
   
   CarsModel.insert({
      name: "Autres",
      model: subaru
   });
// / subaru

// Suzuki
var suzuki = Brands.insert({
      name: "Suzuki"
    });
   CarsModel.insert({
      name: "Alto",
      model: suzuki
   });
   CarsModel.insert({
      name: "Carry",
      model: suzuki
   });
      CarsModel.insert({
      name: "Celerio",
      model: suzuki
   });
CarsModel.insert({
      name: "Grand Vitara",
      model: suzuki
   });
CarsModel.insert({
      name: "Jimmy",
      model: suzuki
   });
CarsModel.insert({
      name: "Maruti",
      model: suzuki
   });
CarsModel.insert({
      name: "Swift",
      model: suzuki
          });
CarsModel.insert({
      name: "SX4",
      model: suzuki
   });
CarsModel.insert({
      name: "Vitara",
      model: suzuki
   });
CarsModel.insert({
      name: "Autres",
      model: suzuki
   });

// /Suzuki
      
// toyota
var toyota = Brands.insert({
      name: "Toyota"
    });

CarsModel.insert({
      name: "Auris",
      model: toyota
   });
CarsModel.insert({
      name: "Avensis",
      model: toyota
   });
CarsModel.insert({
      name: "Aygo",
      model: toyota
   });
CarsModel.insert({
      name: "Camry",
      model: toyota
   });
CarsModel.insert({
      name: "Corolla",
      model: toyota
   });
CarsModel.insert({
      name: "Corolla verso",
      model: toyota
   });
CarsModel.insert({
      name: "FJ",
      model: toyota
   });
CarsModel.insert({
      name: "Hi Ace",
      model: toyota
   });
CarsModel.insert({
      name: "Hilux",
      model: toyota
   });
CarsModel.insert({
      name: "Land Cruiser",
      model: toyota
   });
CarsModel.insert({
      name: "Prado",
      model: toyota
   });
CarsModel.insert({
      name: "Prius",
      model: toyota
   });
CarsModel.insert({
      name: "RAV 4",
      model: toyota
   });
CarsModel.insert({
      name: "Tercel",
      model: toyota
   });
CarsModel.insert({
      name: "Yaris",
      model: toyota
   });
CarsModel.insert({
      name: "Yaris Verso",
      model: toyota
   });
CarsModel.insert({
      name: "Autres",
      model: toyota
   });
// /toyota

// ufo
var ufo = Brands.insert({
      name: "UFO"
    });
CarsModel.insert({
      name: "RV3",
      model: ufo
   });
CarsModel.insert({
      name: "Autres",
      model: ufo
   });
// /ufo

// volks
var volks = Brands.insert({
      name: "Volkswagen"
    });
CarsModel.insert({
      name: "Amarok",
      model: volks
   });
CarsModel.insert({
      name: "Beetle",
      model: volks
   });
CarsModel.insert({
      name: "Bora",
      model: volks
   });
CarsModel.insert({
      name: "Caddy",
      model: volks
   });
CarsModel.insert({
      name: "Caravelle",
      model: volks
   });
CarsModel.insert({
      name: "EOS",
      model: volks
   });
CarsModel.insert({
      name: "Fox",
      model: volks
   });
CarsModel.insert({
      name: "Gol",
      model: volks
   });
CarsModel.insert({
      name: "Golf",
      model: volks
   });
CarsModel.insert({
      name: "Jetta",
      model: volks
   });
CarsModel.insert({
      name: "Passat",
      model: volks
   });
CarsModel.insert({
      name: "Phaeton",
      model: volks
   });
CarsModel.insert({
      name: "Polo",
      model: volks
   });
CarsModel.insert({
      name: "Scirocco",
      model: volks
   });
CarsModel.insert({
      name: "Tiguan",
      model: volks
   });
CarsModel.insert({
      name: "Touareg",
      model: volks
   });
CarsModel.insert({
      name: "Touran",
      model: volks
   });
CarsModel.insert({
      name: "Vento",
      model: volks
   });
CarsModel.insert({
      name: "Autres",
      model: volks
   });
// /volks

// volvo
var volvo = Brands.insert({
      name: "Volvo"
    });
CarsModel.insert({
      name: "C30",
      model: volvo
   });
CarsModel.insert({
      name: "C70",
      model: volvo
   });
CarsModel.insert({
      name: "S40",
      model: volvo
   });
CarsModel.insert({
      name: "S60",
      model: volvo
   });
CarsModel.insert({
      name: "S80",
      model: volvo
   });
CarsModel.insert({
      name: "XC60",
      model: volvo
   });
CarsModel.insert({
      name: "XC70",
      model: volvo
   });
CarsModel.insert({
      name: "XC90",
      model: volvo
   });
CarsModel.insert({
      name: "Autres",
      model: volvo
   });
 // /volvo7

 // zotye 
var zotye = Brands.insert({
      name: "Zotye"
    });
CarsModel.insert({
      name: "Nomad",
      model: zotye
   });
CarsModel.insert({
      name: "Autres",
      model: zotye
   });
// /zotye

autre = Brands.insert({
      name: "Autres"
    });
  }

});
