'use strict';

angular.module('bibliotecaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('subscripcion', {
        url: '/subscripcion',
        templateUrl: 'app/subscripcion/subscripcion.html',
        controller: 'SubscripcionCtrl'
      });
  });