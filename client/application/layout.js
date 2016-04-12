Template.layout.onRendered(function(){
	 var wall = new Freewall("#main");
	 console.log(wall);
      wall.fitWidth();
});

Template.layout.events({
	'click .drop': function(e){
		$('html,body').animate({
            scrollTop: 0
        }, 800);
	},
	'change .category': function(e){
		e.preventDefault();
		console.log(e.target.value);
	},
	'change .city': function(e){
		e.preventDefault();
		console.log(e.target.value);
	},

});

