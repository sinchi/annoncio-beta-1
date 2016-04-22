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
