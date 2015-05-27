'use strict';

describe('Controller: ProveedorCtrl', function () {

  // load the controller's module
  beforeEach(module('bibliotecaApp'));

  var ProveedorCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProveedorCtrl = $controller('ProveedorCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
