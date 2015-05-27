'use strict';

angular.module('bibliotecaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('prestamo', {
        url: '/prestamo',
        templateUrl: 'app/prestamo/prestamo.html',
        controller: 'PrestamoCtrl'
      });
  });