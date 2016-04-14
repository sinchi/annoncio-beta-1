import {Session} from 'meteor/session'

Template.brandsList.onCreated(function(){
	console.log("one care"  + CarsModel.findOne());
	return Session.set('model', CarsModel.findOne());
})

Template.brandsList.helpers({
	carsModel: function(){
		return CarsModel.find({model: Session.get('model')});
	}
})
Template.brandsList.events({
	'change .brand': function(e){
		e.preventDefault();
		Session.set('model', e.target.value);
		console.log(e.target.value);
	}
})