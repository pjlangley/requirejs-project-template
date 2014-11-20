define( function() {

  var OrderConstructor = function() {
    this.whoami = 'Order';
    this.items = [];
  };

  OrderConstructor.prototype.addItem = function( item ) {
    this.items.push( item );
  };

  OrderConstructor.prototype.submit = function() {
    console.log( 'SEND THIS ORDER TO SERVER:' );
    console.log( JSON.stringify( this.items ) );
  };

  return OrderConstructor;
});