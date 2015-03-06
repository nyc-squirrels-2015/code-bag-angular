angular.module('auth'). controller('WelcomeController', 
  ['$scope', '$location',
  function($scope, $location){
  console.log('WelcomeController init');
  $scope.data = {};
}]);