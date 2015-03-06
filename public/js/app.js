angular.module('auth', ['ngResource', 'ngRoute']);

angular.module('auth'). config(['$routeProvider',function($routeProvider) {
    $routeProvider.when('/', {templateUrl: 'views/welcome.html', controller: 'WelcomeController'});
    $routeProvider.otherwise({redirectTo: '/welcome'});
}]);