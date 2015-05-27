'use strict';

angular.module('bibliotecaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('estadoprestamo', {
        url: '/estadoprestamo',
        templateUrl: 'app/estadoprestamo/estadoprestamo.html',
        controller: 'EstadoprestamoCtrl'
      });
  });