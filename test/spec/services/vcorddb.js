'use strict';

describe('Service: vcordDB', function () {

  // load the service's module
  beforeEach(module('4castApp'));

  // instantiate service
  var vcordDB;
  beforeEach(inject(function (_vcordDB_) {
    vcordDB = _vcordDB_;
  }));

  it('creates the database table. In actual sense, the local storage Key and sets an empty array as its value.', function () {
    expect(vcordDB.table()).not.toBeUndefined();
  })
  
  it('Implements the save Feature.', function () {
    expect(vcordDB.Insert()).not.toBeUndefined();
  })
  
  it('returns the count of all stored data.', function () {
    expect(vcordDB.Count()).not.toBeUndefined();
  })
  
	it('Implements the delete functionality', function () {
    expect(vcordDB.DeleteAll()).not.toBeUndefined();
  });

});
