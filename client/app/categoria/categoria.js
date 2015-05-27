'use strict';

angular.module('bibliotecaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('categoria', {
        url: '/categoria',
        templateUrl: 'app/categoria/categoria.html',
        controller: 'CategoriaCtrl'
      });
  });