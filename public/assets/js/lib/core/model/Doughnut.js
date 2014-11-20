define( function() {

  var DoughnutConstructor = function( quantity ) {
    return {
        id: 'doughnut',
        ingredients: [ 'dough' ],
        quantity: quantity || 0
    };
  };

  return DoughnutConstructor;
});