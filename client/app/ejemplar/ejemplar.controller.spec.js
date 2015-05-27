'use strict';

describe('Controller: EjemplarCtrl', function () {

  // load the controller's module
  beforeEach(module('bibliotecaApp'));

  var EjemplarCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EjemplarCtrl = $controller('EjemplarCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
