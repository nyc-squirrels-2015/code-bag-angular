angular.module('products'). controller('FormController', 
  ['$scope', '$location', '$route', 'Product', 'Shared',
  function($scope, $location, $route, Product, Shared ){

  function Feedback(type, message) {
    this.type = type;
    this.message = message;
  }

  function newProduct() {
    $scope.mainHeader = "Create Product";
    $scope.product = {};
    $scope.product.is_new = true;
    Shared.product = null;
  }

  $scope.feedback = [];
  if($location.url() === '/new') {
    newProduct();
  } else {
    p = Product.getOne({id: $route.current.params.id});
    p.$promise.then(function(data){
      $scope.product = data; 
      Shared.product = data;
      $scope.mainHeader = "Edit Product " + $scope.product.name;
    });
  }

  console.log($location.url());

  $scope.saveProduct = function() {
    var retval;
    if ($scope.product.is_new) {
      retval = Product.post($scope.product);
    } else {
      console.log('product', $scope.product);
      retval = Product.update($scope.product);
    }

    retval.$promise.then(function(data){
      $scope.feedback.unshift(new Feedback("success", "Saved " + data.name));
      if($scope.product.is_new) {
        newProduct();
      }
      console.log(data);
    });

    retval.$promise.catch(function(data){
      $scope.feedback.unshift(new Feedback("danger", "HTTP call failed: " + data.data));
      console.error('HTTP call failed', data);
    });

  };

}]);

