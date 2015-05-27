'use strict';

describe('Controller: CategoriaCtrl', function () {

  // load the controller's module
  beforeEach(module('bibliotecaApp'));

  var CategoriaCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CategoriaCtrl = $controller('CategoriaCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
