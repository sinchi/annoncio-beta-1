Template.annonceEdit.onRendered(function(){
	return $('html,body').animate({
            scrollTop: 0
        }, 100);
});

Template.annonceEdit.helpers({
	photos: function(){
		return Photos.find({_id: {$in: this.images}})
	}
});