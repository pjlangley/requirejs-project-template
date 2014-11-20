define([
  'vendor/jquery',
  'lib/core/model/Doughnut'
], function( $, Doughnut ) {

  return {
    init: function() {
      $( document ).on( 'submit', function( e ) {
        e.preventDefault();

        var quantity = $( '#js-order-form').find( '[name="quantity"]' ).val();

        app.order.addItem( new Doughnut( quantity ) );
        app.order.submit();
      });
    }
  };
});
