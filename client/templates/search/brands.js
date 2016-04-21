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
		console.log('carsModel ' + e.target.value);
	}
});

Template.gazoline.events({
	'change .gazoline':function(e){
		e.preventDefault();
		console.log('gazoline ' + e.target.value);
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
		console.log('years ' + e.target.value);
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
		console.log('km ' + e.target.value);
	}
});


Template.brandsList.events({
	'change .brand': function(e){
		e.preventDefault();
		var brand = e.target.value;
		Session.set('model', brand);

		console.log('brand ' + e.target.value);
	}
});

Template.slider.onCreated(function(){
	Session.set('price-min', 0);
	Session.set('price-max', 5000);
})

Template.slider.onRendered(function(){
	if (! $('#slider-range').data('uiSlider')) {        
        $( "#slider-range" ).slider({
            range: true,
            min: 0,
            max: 5000,
            step: 50,
            values: [ 0, 5000 ],
            slide: function( event, ui ) {
                $( "#price-min" ).val( ui.values[ 0 ] + " DH") ;
                $('#price-max').val(ui.values[ 1 ] +" DH" );
                Session.set('price-min', ui.values[0]);
                Session.set('price-max', ui.values[1]);
            }
        });
    }
});

/*Template.slider.events({
	'mouseup #slider-range': function(e, tpl){		
		console.log('prix Min :' + Session.get('price-min'));
		console.log('prix Max :' + Session.get('price-max'));
	}
});*/