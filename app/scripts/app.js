'use strict';

angular.module('jdateApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'wu.masonry'
])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/main',
        controller: 'MainCtrl'
      })
      .when('/profile/:profileId', {
        templateUrl: 'partials/profile',
        controller: 'ProfileCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);
  });
