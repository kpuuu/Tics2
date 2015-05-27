'use strict';

angular.module('bibliotecaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('rol', {
        url: '/rol',
        templateUrl: 'app/rol/rol.html',
        controller: 'RolCtrl'
      });
  });