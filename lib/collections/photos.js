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
		return (userId ? true: false);
	},
	remove: function(userId){
		return (userId ? true: false);
	},
	download: function(){
		return true;
	}
});