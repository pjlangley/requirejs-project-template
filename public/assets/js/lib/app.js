require([
  'lib/app/namespace',
  'lib/app/eventHandler',
  'lib/core/model/Order'
], function( app, evtHandler, Order ) {

  // Create the new order ahead of time
  app.order = new Order();

  // Initialise the event handler
  evtHandler.init();
});