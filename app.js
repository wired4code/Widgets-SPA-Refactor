var app = angular.module('app', ['ngRoute']);

app.config('$routeProvider', $locationProvider, [function($routeProvider, locationProvider){

  $routeProvider

    .when('/', {
      templateUrl: 'home.html',
      controller: 'homeController'
    })

    .when('/user', {
      templateUrl: 'user.html',
      controller: 'userController'
    })

    .when('/widget', {
      templateUrl: 'widget.html',
      controller: 'widgetController'
    })


  $locationProvider.html5Mode(true);

}])