const express = require('express');
const jsonParser = require('body-parser').json();
const app = express();

app.use(express.static(__dirname + '/build'));

app.post('/api/palindrome', jsonParser, function(req, res) {
  //TODO find the longest palindrome in the string contained in req.body.text
  //this portion of the assignment is "closed book" so don't look up an algorithm
  //for solving it. I want you to think about it, it doesn't have to be a best
  //solution, the O(n) doesn't matter but you should know what the O(n) is and
  // place it in a comment inside of this function. If you create any helper
  // functions place them in their own file under __dirname + '/lib'
});

//TODO Start the server using an enviroment variable named PORT or a default of
// 3000, console.log the port the server is using after the server is up.
