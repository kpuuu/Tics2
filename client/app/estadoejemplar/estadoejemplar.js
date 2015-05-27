'use strict';

angular.module('bibliotecaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('estadoejemplar', {
        url: '/estadoejemplar',
        templateUrl: 'app/estadoejemplar/estadoejemplar.html',
        controller: 'EstadoejemplarCtrl'
      });
  });