'use strict';

angular.module('bibliotecaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('proveedor', {
        url: '/proveedor',
        templateUrl: 'app/proveedor/proveedor.html',
        controller: 'ProveedorCtrl'
      });
  });