'use strict';

describe('Controller: RolCtrl', function () {

  // load the controller's module
  beforeEach(module('bibliotecaApp'));

  var RolCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RolCtrl = $controller('RolCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
