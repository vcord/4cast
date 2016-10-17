'use strict';

describe('Controller: ModalCtrl', function () {

  // load the controller's module
  beforeEach(module('4castApp'));

  var ModalCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ModalCtrl = $controller('ModalCtrl', {
      $scope: scope
      
    });
  }));

  it('implements the country search and place modal<pop up>, listens to the UserReject event and pops up.', function () {
    expect(scope.showReject()).toBeUndefined();
  })
  
  it('implements the normal country search modal.', function () {
    expect(scope.showManual()).toBeUndefined();
  })
  
 it('implements the recent weather modal. listens to the showWeather event.', function () {
    expect(scope.showWeatherForm()).toBeUndefined();
  })
 
});
