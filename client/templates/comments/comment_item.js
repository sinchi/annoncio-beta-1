Template.commentItem.helpers({	
	submittedText: function(){
		moment.locale('fr');		
		return moment(this.submitted).fromNow();		
	},
	username: function(){
		return this.author.substring(0, this.author.indexOf('@'));
	}
})