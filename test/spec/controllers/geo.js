'use strict';

describe('Controller: GeoCtrl - Implements the main controller for the application', function () {

  // load the controller's module
  beforeEach(module('4castApp'));

  var GeoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GeoCtrl = $controller('GeoCtrl', {
      $scope: scope
     
    });
  }));

  it('gets all weather forecast history from the Local storage', function () {
    expect(scope.LoadWeather).toBeDefined();
  })
  
  it('gets the total count of weather forecast history from the Local storage.', function () {
    expect(scope.WeatherCount).toBeDefined();
  })
  
  it('Uses the Html5 geolocation api to fetch user\'s current weather from openwaether API and broadcasts the showWeather event.', function () {
    expect(scope.getLocation()).not.toBeDefined();
  })
  
  it('listens to the saveWeather event and saves the weather Data to the localstorage in Json Format and reloads the browser.', function () {
    expect(scope.SaveWeather()).not.toBeDefined();
  })
  
  it('clears all weather history', function () {
    expect(scope.clearHistory()).not.toBeDefined();
  })
  
  it('converts Kelvin to Celsius.', function () {
    expect(scope.ToCelcius()).not.toBeUndefined();
  })
  
  it('converts Meter to Kilometer.', function () {
    expect(scope.ToKilometer()).not.toBeUndefined();
  })
  
  it('converts Meter to Kilometer.', function () {
    expect(scope.uniqeId()).not.toBeUndefined();
  });
  
});
