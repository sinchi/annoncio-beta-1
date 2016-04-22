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