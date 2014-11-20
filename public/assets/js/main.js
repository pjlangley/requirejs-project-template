requirejs.config({
  shim: {
    'vendor/jquery': {
      exports: '$'
    },
    'lib/app/namespace': {
      exports: 'app'
    }
  }
});

require([
  'vendor/jquery',
  'lib/core',
  'lib/app'
], function() {
  // Do something...
});