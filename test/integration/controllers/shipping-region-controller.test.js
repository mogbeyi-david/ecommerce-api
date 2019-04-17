import 'babel-polyfill';
import request from 'supertest';
import {expect} from 'chai';
import server from '../../../app';
import {ShippingRegion} from '../../../models'

let app;

const baseEndpoint = '/api/v1/shipping-regions/';

describe('Testing Endpoints for Shipping Regions', () => {
  //Declare the beforeEach hook for performing operations common to all test cases before the test run.
  beforeEach(() => {
    app = server;
  });

  //Declare the afterEach hook for performing operations common to all test cases after the test run
  afterEach(async () => {
    await ShippingRegion.deleteMany({});
    app.close();
  });

  /**/
  describe('POST ENDPOINTS', () => {
    describe('Creating a New Shipping Region', () => {
      //  Testcase for when no shipping region was passed in the request payload
      it('should return a 400 error if no shipping region was passed in the request payload', async () => {
        const payload = {}; // Declare the empty payload
        const response = await request(app).post(baseEndpoint).send(payload); // Send a post request to the endpoint
        expect(response).to.be.a('object');
        expect(response.status).to.equal(400);
        expect(response.body.message).to.be.a('string');
        expect(response.body).to.be.a('object');
      });

      it('should return a 409 error if the shipping region already exists', async () => {
        // First create a new shipping region using the ShippingRegion Model and save it to the DB
        const shippingRegion = new ShippingRegion({
          shippingRegion: 'test_shipping_region'
        });
        await shippingRegion.save();
        // Then send a payload with the shipping region being the same as the created one
        const payload = {shippingRegion: 'test_shipping_region'}; // Declare the empty payload
        // Send a post request to the endpoint
        const response = await request(app).post(baseEndpoint).send(payload);
        console.log(response);
        expect(response).to.be.a('object');
        expect(response.status).to.equal(409);
        expect(response.body.message).to.be.a('string');
        expect(response.body).to.be.a('object');
      })
    });
  });
});