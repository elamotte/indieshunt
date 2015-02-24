// Custom Post Property

var shortDescription = {
  propertyName: 'shortDescription',
  propertySchema: {
    type: String,                           // property type
    label: 'shortDescription',                   // key string used for internationalization
    optional: false,                         // make this property optional
    autoform: {
      editable: true,                       // make this property editable by users
      type: "text",                         // assign a custom input type
      omit: false                           // set to true to omit field from form entirely
    }
  }
}
addToPostSchema.push(shortDescription);

postHeading.push({
  template: 'postShortDescription',
  order: 30
});
