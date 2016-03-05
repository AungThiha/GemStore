(function(){

  var app = angular.module('store-products', []);
  
  app.directive('productTitle', function(){
    return {
      restrict: 'E', // E stands for element, A stands for attribute
      templateUrl: '../partials/product-title.html',
    };
  });

  app.directive('productGallery', function(){
    return {
      restrict: 'E',
      templateUrl: "../partials/product-gallery.html",
      controller: function(){
        this.current = 0;
        this.setCurrent = function(newGallery){
          this.current = newGallery || 0;
        };
      },
      controllerAs: 'gallery'
    };
  });

  app.directive("productDescription", function(){
    return {
      restrict: 'E',
      templateUrl: '../partials/product-description.html',
    };
  });

  app.directive("productSpecs", function(){
    return {
      restrict: 'E',
      templateUrl: '../partials/product-specs.html',
    };
  });

  app.directive("productReviews", function(){
    return {
      restrict: 'A',
      templateUrl: '../partials/product-reviews.html'
    };
  });

  app.controller('ReviewController', function(){
    this.review = {};
    this.addReview = function(product){
      this.review.createdOn = Date.now();
      product.reviews.push(this.review);
      this.review = {};
    };
  });

  app.directive("productPanels", function(){
    return {
      restrict: 'E',
      templateUrl: '../partials/product-panels.html',
      controller: function(){
        this.tab = 1;

        this.selectTab = function(setTab){
          this.tab = setTab;
        };

        this.isSelected = function(checkedTab){
          return this.tab === checkedTab;
        };
      },
      controllerAs: "panels"
    };
  });


})();