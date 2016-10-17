'use strict';

describe('Controller: GeoformCtrl', function () {

  // load the controller's module
  beforeEach(module('4castApp'));

  var GeoformCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GeoformCtrl = $controller('GeoformCtrl', {
      $scope: scope
    });
  }));

   it('sets the container for populating the place auto-suggest form', function () {
    expect(scope.formGeoLocate).toBeDefined();
  })
  
  it('Auto suggests placea, address, zipcode on input.fetches Data from google map api.', function () {
    expect(scope.getLocation()).toBeDefined();
  });
  
 
});
