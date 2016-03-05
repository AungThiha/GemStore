(function(){
  var app = angular.module('store', ['store-products']);

  app.controller('StoreController', [ '$http', function($http){
    var self = this;
    self.products = [];

    $http.get('../data/gems.json').success(function(data){
      self.products = data;
    });
    
  }]);

})();
