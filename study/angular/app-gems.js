(function(){
  var app = angular.module('store', []);

  app.controller('StoreController', function(){
    // anonymous function, to execute when the controller is called
	this.products = gems; // setting the object into the controller variable
  }); // name of the controller, cammelcase, using 'controller'
  
  var gems =[ 
  {
    name: 'Dodecahedron',
	price: 2.95,
	description: 'blah',
	canPurchase: false,
	soldOut: true
  },
  {
    name: 'Pentagonal Gem',
	price: 5.95,
	description: 'blah2',
	canPurchase: false,
	soldOut: true
  }
  ];
})(); // closure