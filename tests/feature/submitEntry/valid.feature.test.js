import chai from 'chai';

import AppRoute from '../../lib/routes/app.routes';


const requestData = require('../../mocks/valid.mock.json');

const expect = chai.expect;

describe('POST /submitEntry - Submit a valid request to endpoint', () => {

  let response, statusCode;

  // Before running the tests, send a request to the endpoint.
  before(function(done) {

    AppRoute.submitEntry(requestData)
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

  it('should expect a status message', (done) => {
    expect(response).to.eql('Entry submitted');
    done();
  });




});


