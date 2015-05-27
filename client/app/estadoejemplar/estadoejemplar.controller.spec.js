'use strict';

describe('Controller: EstadoejemplarCtrl', function () {

  // load the controller's module
  beforeEach(module('bibliotecaApp'));

  var EstadoejemplarCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EstadoejemplarCtrl = $controller('EstadoejemplarCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
