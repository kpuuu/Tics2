'use strict';

describe('Controller: PrestamoCtrl', function () {

  // load the controller's module
  beforeEach(module('bibliotecaApp'));

  var PrestamoCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PrestamoCtrl = $controller('PrestamoCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
