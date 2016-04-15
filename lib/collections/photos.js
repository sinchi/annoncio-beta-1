Photos = new FS.Collection('photos', {
	stores:[new FS.Store.GridFS('photos')],
	filter: {
		allow: {
			contentType: ['image/*']
		}
	}
});


Photos.allow({
	insert: function(userId){
		return true;
	},
	update: function(userId){
		return true;
	},
	remove: function(userId){
		return (userId ? true: false);
	},
	download: function(){
		return true;
	}
});


/*Meteor.methods({
  storeUrlInDatabase: function( url , annonceId) {
    check( url, String );
    check(annonceId, String);

    Modules.both.checkUrlValidity( url );

    try {
      Files.insert({
        url: url,
        userId: Meteor.userId(),
        annonceId: annonceId,
        submitted: new Date() 
      });
    } catch( exception ) {
      return exception;
    }
  }
});*/