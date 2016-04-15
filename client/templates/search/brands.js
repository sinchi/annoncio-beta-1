import {Session} from 'meteor/session'

Template.brandsList.onCreated(function(){
	//console.log("one care"  + CarsModel.findOne());
	return Session.set('model', CarsModel.findOne());
});

Template.carsModel.helpers({
	carsModel: function(){
		return CarsModel.find({model: Session.get('model')});
	}
});

Template.carsModel.events({
	'change .carModel':function(e,tpl){
		e.preventDefault();
		console.log(e.target.value);
	}
});

Template.gazoline.events({
	'change .gazoline':function(e){
		e.preventDefault();
		console.log(e.target.value);
	}
});

Template.yearOfModel.helpers({
	years: function(){
		var i = 1980;
		var years = [];
			for(i; i<=2016; i++){
				years.push(i);
			}			
		return years.reverse();
	}
});

Template.yearOfModel.events({
	'change .years':function(e){
		e.preventDefault();
		console.log(e.target.value);
	}
});


Template.km.helpers({
	km: function(){
		/*0 - 4999
		5000 - 9999*/
		var i = 0;
		var j = 4999;
		var tkm = [];
		while(i<=450000 && j<=499999){			
			tkm.push( numeral(i).format('0,0') + ' - ' + numeral(j).format('0,0'));
			if(i >= 100000){
				i+= 10000;
				j+= 10000;
			}else if(i >= 200000){
					i+=50000;
					j+=50000;
			}else{
				i+=5000;
				j+=5000;
			}								
			
		}

		return tkm;
	}
});

Template.km.events({
	'change .km': function(e){
		e.preventDefault();
		console.log(e.target.value);
	}
});


Template.brandsList.events({
	'change .brand': function(e){
		e.preventDefault();
		Session.set('model', e.target.value);
		console.log(e.target.value);
	}
});