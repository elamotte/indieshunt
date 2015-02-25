Meteor.startup(function () {
  Template[getTemplate('ihPostCategories')].helpers({
    categoriesArray: function(){
      return _.map(this.categories, function (categoryId) { // note: this.categories maybe be undefined
        return Categories.findOne(categoryId);
      });
    },
    categoryLink: function(){
      return getCategoryUrl(this.slug);
    }
  });
});
