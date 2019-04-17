import 'babel-polyfill';
import request from 'supertest';
import {expect} from 'chai';
import server from '../../../app';

let app;

const baseEndpoint = '/api/v1/shipping-regions/';

describe('Testing Endpoints for Shipping Regions', () => {
  //Declare the beforeEach hook for performing operations common to all test cases before the test run.
  beforeEach(() => {
    app = server;
  });

  //Declare the afterEach hook for performing operations common to all test cases after the test run
  afterEach(() => {
    app.close();
  });

  /**/
  describe('POST ENDPOINTS', () => {
    describe('Creating a New Shipping Region', () => {
      //  Testcase for when no shipping region was passed in the request payload
      it('should return a 400 error if no shipping region was passed in the request payload', () => {
        const payload = {}; // Declare the empty payload
        const response = request(app).post(baseEndpoint).send(payload); // Send a post request to the endpoint
        expect(response).to.be.a('object');
        expect(response.status).to.equal(400);
        expect(response.message).to.be.a('string');
        expect(response.message).to.match(/Error/);
        expect(response.body).to.be.a('object');
      });
    });
  });
});