import {Session} from 'meteor/session'

Template.brands.onCreated(function(){
	//console.log("one care"  + CarsModel.findOne());
	return Session.set('model', CarsModel.findOne());
});

Template.brands.events({
	'change .brand': function(e){
		e.preventDefault();
		var brand = e.target.value;
		Session.set('model', brand);

		console.log('brand ' + e.target.value);
	}
});

Template.carsModel.helpers({
	carsModel: function(){
		return CarsModel.find({model: Session.get('model')});
	}
});

Template.carsModel.events({
	'change .carModel':function(e,tpl){
		e.preventDefault();
		console.log('carsModel ' + e.target.value);
	}
});

