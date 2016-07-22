(function(){
  var app = angular.module('store', ['store-products']);

  app.controller('StoreController', ['$http', function($http){
	var store = this; // criar uma referência para o objeto corrente
	store.products = []; // inicializar produtos
    $http.get('/angular/products.json').success(function(data){
	  store.products = data; // associar os dados obtidos pelo HTTP a listagem de produtos
	});	
  }]); 

  app.controller('ReviewController', function(){
	this.review = {};
	
	this.addReview = function(product){
	  product.reviews.push(this.review);
	  this.review = {};
	}
  });
  
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