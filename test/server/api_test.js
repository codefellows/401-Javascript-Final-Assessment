const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
//TODO start the server

describe('longest palindrome', function() {
  //TODO make this test async
  it('should return the longest palindrome', function() {
    chai.request('localhost:3000')
      .post('/api/palindrome')
      .send({text: 'aaaxfbbbbbzqccc'})
      //TODO finish this test
  });
});
