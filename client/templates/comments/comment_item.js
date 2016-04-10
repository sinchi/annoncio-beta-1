Template.commentItem.helpers({	
	submittedText: function(){
		moment.locale('fr');		
		return moment(this.submitted).fromNow();		
	}
})