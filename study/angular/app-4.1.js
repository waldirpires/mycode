(function(){
  var app = angular.module('store', []);

  app.controller('StoreController', function(){
    // anonymous function, to execute when the controller is called
	this.products = gems; // setting the object into the controller variable
  }); // name of the controller, cammelcase, using 'controller'

  app.controller('ReviewController', function(){
	this.review = {};
	
	this.addReview = function(product){
	  product.reviews.push(this.review);
	  this.review = {};
	}
  });
  
  app.directive('productPanels', function(){
    return {
      restrict: 'E',
  	  templateUrl: 'product-panels.html',
	  controller: function(){
	  },
	  controllerAs: 'panels'
    };
  });
  
  app.directive('productTitle', function(){
    return {
      restrict: 'A', // A: attribute
  	templateUrl: 'product-title.html'
    };
  });
  
  app.controller('PanelController', function(){
    // anonymous function, to execute when the controller is called
	this.tab = 1;
	
	this.selectTab = function(setTab){
	  this.tab = setTab;
	};
	this.isSelected = function(checkTab){
	  return this.tab === checkTab;
	};
  }); // name of the controller, cammelcase, using 'controller'
  
  
  var gems =[ 
  {
    name: 'Dodecahedron',
	price: 2.95,
	description: 'blah',
	images: [{
	  full: 'gem.jpg',
	  thumb: 'thumb.jpg'
	}],
	reviews: [
	{
	  stars: 1,
	  body: "I don´t like this product!",
	  author: "joe22@joe.com",
	},
	],
	canPurchase: false,
	soldOut: true
  },
  {
    name: 'Pentagonal Gem',
	price: 5.95,
	description: 'blah2',
	images: [{
	  full: 'gem2.png',
	  thumb: 'thumb.jpg'
	}],
	reviews: [
	{
	  stars: 5,
	  body: "I like this product!",
	  author: "joe@joe.com",
	},
	{
	  stars: 4,
	  body: "I like this product so so!",
	  author: "ana@joe.com",
	},
	],
	canPurchase: false,
	soldOut: true
  }
  ];
})(); // closure