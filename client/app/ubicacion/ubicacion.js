'use strict';

angular.module('bibliotecaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('ubicacion', {
        url: '/ubicacion',
        templateUrl: 'app/ubicacion/ubicacion.html',
        controller: 'UbicacionCtrl'
      });
  });