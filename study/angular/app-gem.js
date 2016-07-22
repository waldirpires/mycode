(function(){
  var app = angular.module('store', []);

  app.controller('StoreController', function(){
    // anonymous function, to execute when the controller is called
	this.product = gem; // setting the object into the controller variable
  }); // name of the controller, cammelcase, using 'controller'
  
  var gem = {
    name: 'Dodecahedron',
	price: 2.95,
	description: 'blah',
	canPurchase: false,
	soldOut: true
  }
})(); // closure