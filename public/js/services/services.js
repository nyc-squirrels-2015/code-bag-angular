angular.module('auth'). config(['$routeProvider',function($routeProvider) {
    $routeProvider.when('/welcome', {templateUrl: 'views/welcome.html', controller: 'WelcomeController'});
    $routeProvider.otherwise({redirectTo: '/welcome'});
}]);