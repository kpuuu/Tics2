'use strict';

describe('Controller: SubscripcionCtrl', function () {

  // load the controller's module
  beforeEach(module('bibliotecaApp'));

  var SubscripcionCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SubscripcionCtrl = $controller('SubscripcionCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
