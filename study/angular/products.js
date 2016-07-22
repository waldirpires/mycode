(function(){
  var app = angular.module('store-products', []);
  
  app.directive('productPanels', function(){
    return {
      restrict: 'E',
  	  templateUrl: 'product-panels.html',
	  controller: function(){
    // anonymous function, to execute when the controller is called
	this.tab = 1;
	
	this.selectTab = function(setTab){
	  this.tab = setTab;
	};
	this.isSelected = function(checkTab){
	  return this.tab === checkTab;
	};
	  
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

})();


