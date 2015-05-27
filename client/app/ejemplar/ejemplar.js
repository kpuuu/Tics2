'use strict';

angular.module('bibliotecaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('ejemplar', {
        url: '/ejemplar',
        templateUrl: 'app/ejemplar/ejemplar.html',
        controller: 'EjemplarCtrl'
      });
  });