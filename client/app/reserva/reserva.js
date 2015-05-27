'use strict';

angular.module('bibliotecaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('reserva', {
        url: '/reserva',
        templateUrl: 'app/reserva/reserva.html',
        controller: 'ReservaCtrl'
      });
  });