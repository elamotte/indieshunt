Package.describe({
  summary: 'Indieshunt – indieshunt layer over Telescope',
  version: '0.1.0',
  name: 'indieshunt'
});

Npm.depends({
  // NPM package dependencies
});

Package.onUse(function (api) {

  // --------------------------- 1. Meteor packages dependencies ---------------------------

  // automatic (let the package specify where it's needed)

  api.use([
    'tap:i18n',                   // internationalization package
    'telescope-base',             // basic Telescope hooks and objects
    'telescope-lib',              // useful functions
    'telescope-i18n',             // internationalization wrapper
    'fourseven:scss'              // SCSS compilation package
  ]);

  // client

  api.use([
    'jquery',                     // useful for DOM interactions
    'underscore',                 // JavaScript swiss army knife library
    'templating'                  // required for client-side templates
  ], ['client']);

  // server

  api.use([
    //
  ], ['server']);

  // ---------------------------------- 2. Files to include ----------------------------------

  // i18n config (must come first)

  api.add_files([
    'package-tap.i18n'
  ], ['client', 'server']);

  // both

  api.add_files([
    'lib/custom_fields.js',
    'lib/template_replace.js',
    'lib/array_replace.js'
  ], ['client', 'server']);

  // client

  api.add_files([
      'lib/client/stylesheets/style.css',
      'lib/client/templates/posts/modules/post_short_description.html',
      'lib/client/templates/posts/modules/post_short_description.js',
      'lib/client/templates/posts/modules/ih_post_edit.html',
      'lib/client/templates/posts/modules/ih_post_categories.html',
      'lib/client/templates/posts/modules/ih_post_categories.js',
      'lib/client/templates/nav/ih_submit_button.html',
      'lib/client/templates/nav/ih_notifications_menu.html',
      'lib/client/templates/nav/ih_notifications_menu.js'
  ], ['client']);

  // server

  api.add_files([

  ], ['server']);

  // i18n languages (must come last)

  api.add_files([
    'i18n/en.i18n.json',
  ], ['client', 'server']);

  // -------------------------------- 3. Variables to export --------------------------------

  api.export([
    'myFunction',
    'primaryNav',
    'postMeta',
    'postHeading'
  ]);

});
