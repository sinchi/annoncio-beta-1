Template.categories.helpers({
	categories: function(){
		return Categories.find();
	},
	categoryChilds: function(parentId){
		return Categories.find({parentId: parentId});
	}
});