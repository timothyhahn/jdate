'use strict';

angular.module('jdateApp')
  .controller('ProfileCtrl', function ($scope, $http, $routeParams) {
    $http.get('/api/profile/' + $routeParams.profileId).success(function(data) {
      $scope.you = data.you;
      $scope.others = data.others;
    });
  });
