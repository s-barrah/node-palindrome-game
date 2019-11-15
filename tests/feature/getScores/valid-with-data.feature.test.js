import chai from 'chai';

import AppRoute from '../../lib/routes/app.routes';

const requestData = require('../../mocks/valid.mock.json');

const expect = chai.expect;

describe('POST /getScores - Get scores from database with records', () => {

  let response, statusCode;

  // Before running the tests, send requests to the endpoints.
  before(function(done) {

    AppRoute.submitEntry(requestData)
      .then(() => AppRoute.getScores())
      .then((body) => {
        statusCode = 200;
        response = body;
        done();
      })
      .catch((error) => {
        statusCode = 500;
        response = error;
        done();
      });
  });

  it('should expect a 200 status code', (done) => {
    expect(statusCode).to.eql(200);
    done();
  });

  it('should expect a response with data', (done) => {
    expect(response[0].name).to.eql('Test');
    expect(response[0].word).to.eql('A man, a plan, a canal. Panama');
    expect(response[0].points).to.eql(30);
    done();
  });




});


