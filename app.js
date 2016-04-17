'use strict';

var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider){

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

    .otherwise({redirectTo: '/'})



}])