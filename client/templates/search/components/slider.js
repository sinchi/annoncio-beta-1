import {Session} from 'meteor/session'

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