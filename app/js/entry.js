const angular = require('angular');

const app = ;//TODO create an app called 'cfFinalApp'

app.controller('PalindromeController', [function () {//TODO dependency inject $http
  this.palindromes = [];
  this.submitPalindrome = function(input) {
    //TODO use http to submit the input as JSON object in the field text to
    // '/api/palindrome as a POST request, then reset the input field for inputText
    // save the original input and the result of the api call into an object into the palindromes array
  };
}]);
