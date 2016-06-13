var angular = require('angular');
require('angular-mocks');
require('../../app/js/entry.js');

describe('the client', function() {
  beforeEach(angular.mock.module('cfFinalApp'));

  it('should make the right api calls when submitPalindrome is called', angular.mock.inject(function() {//TODO inject $httpBackend and $controller
    //TODO setup $httpBackend expect statements

    //TODO construct the PalindromeController

    //TODO call the function to satisfy the $httpbackend requests

    //TODO verify there were no extra REST requests and that all REST expects were satisfied
  }));
});
