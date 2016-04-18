'use strict';

var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', '$httpProvider', function ($routeProvider, $httpProvider){

  $httpProvider.defaults.useXDomain = true;
  delete $httpProvider.defaults.headers.common['X-Requested-With'];

  $routeProvider

    .when('/', {
      templateUrl: 'home/home.html',
      controller: 'HomeController'
    })

    .when('/user', {
      templateUrl: 'user/user.html',
      controller: 'UserController'
    })

    .when('/user/:userId', {
      templateUrl: 'user/oneuser.html',
      controller: 'UserController'
    })

    .when('/widget', {
      templateUrl: 'widget/widget.html',
      controller: 'WidgetController'
    })

     .otherwise({redirectTo: '/'})


}])