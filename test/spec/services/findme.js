'use strict';

describe('Service: findme', function () {

  // load the service's module
  beforeEach(module('4castApp'));

  // instantiate service
  var findme;
  beforeEach(inject(function (_findme_) {
    findme = _findme_;
  }));

  it('gets all weather forecast history from the Local storage', function () {
    expect(findme.now()).toBeDefined();
  })

});
