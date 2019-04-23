import 'babel-polyfill';
import request from 'supertest';
import {expect} from 'chai';
import mongoose from 'mongoose';
import server from '../../../app';
import {ShippingRegion} from '../../../models';
import generateRandomString from '../../../helpers/utility-functions/generate-random-string';
import createTwoShippingRegions from '../../../helpers/test-functions/shipping-regions/create-two-shipping-regions';

let app;

const baseEndpoint = '/api/v1/shipping-regions/';

describe('-- SHIPPING REGIONS --', () => {

  /**
   * Declare the beforeEach hook for performing operations common to all test cases before the test run.
   * Here we re-initialize the server before every test
   */
  beforeEach(() => {
    app = server;
  });

  /**
   * Declare the afterEach hook for performing operations common to all test cases after the test run
   * Here, we delete every shipping region in the database to create a fresh environment
   */
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
        const payload = {shippingRegion: 'test_shipping_region'}; // Declare the payload
        // Send a post request to the endpoint
        const response = await request(app).post(baseEndpoint).send(payload);
        expect(response).to.be.a('object');
        expect(response.status).to.equal(409);
        expect(response.body.message).to.be.a('string');
        expect(response.body).to.be.a('object');
      });

      //   Test case for successfully creating the shipping region
      it('should create a new shipping region for a proper payload', async () => {
        const payload = {shippingRegion: generateRandomString()}; // Declare the payload
        const response = await request(app).post(baseEndpoint).send(payload);
        expect(response).to.be.a('object');
        expect(response.status).to.equal(201);
        expect(response.body.message).to.be.a('string');
        expect(response.body).to.be.a('object');
      })
    });
  });

  describe('PUT ENDPOINTS', () => {
    describe('Updating an Existing Shipping Region', () => {
      it('should return 404 error for a shipping ID that does not exist', async () => {
        const fakeId = mongoose.Types.ObjectId();
        const payload = {shippingRegion: generateRandomString()};
        const response = await request(app).put(`${baseEndpoint}${fakeId}`).send(payload);
        expect(response).to.be.a('object');
        expect(response.status).to.equal(404);
        expect(response.body).to.be.a('object');
      });

      it('should return a 400 error if no shipping region was passed in the request payload', async () => {
        const payload = {}; // Declare the empty payload
        const response = await request(app).post(baseEndpoint).send(payload); // Send a post request to the endpoint
        expect(response).to.be.a('object');
        expect(response.status).to.equal(400);
        expect(response.body.message).to.be.a('string');
        expect(response.body).to.be.a('object');
      });
      it('should return a 200 response for a proper payload', async () => {

        //First we create a shipping region
        const shippingRegion = new ShippingRegion({
          shippingRegion: generateRandomString()
        });
        const result = await shippingRegion.save();
        const shippingRegionId = result._id;
        const payload = {
          shippingRegion: 'New shipping region'
        }; // Declare the empty payload
        const response = await request(app).put(`${baseEndpoint}${shippingRegionId}`).send(payload); // Send a put request to the endpoint

        expect(response).to.be.a('object');
        expect(response.status).to.equal(200);
        expect(response.body.message).to.be.a('string');
        expect(response.body.data).to.be.a('object');
        expect(response.body.data.shippingRegion).to.equal('New shipping region');
      });
    });
  });

  describe('GET ENDPOINTS', () => {
    describe('Getting all the shipping regions', async () => {
      it('should successfully return all the shipping regions', async () => {
        // First we create two new shipping regions...
        await createTwoShippingRegions();

        const response = await request(app).get(baseEndpoint);
        expect(response).to.be.a('object');
        expect(response.status).to.equal(200);
        expect(response.body.data).to.be.a('array');
        expect(response.body.data.length).to.equal(2);
      })
    });

    describe('Getting a single shipping region by its ID', () => {
      it('should return 404 error for an ID that does not exist', async () => {
        const fakeId = mongoose.Types.ObjectId();
        const response = await request(app).get(`${baseEndpoint}${fakeId}`);
        expect(response).to.be.a('object');
        expect(response.status).to.equal(404);
        expect(response.body).to.be.a('object');
      });

      it('should return a 200 success response for a shipping region ID that exists', async () => {
        const shippingRegion = new ShippingRegion({
          shippingRegion: generateRandomString()
        });
        const result = await shippingRegion.save();
        const shippingRegionId = result._id;
        const response = await request(app).get(`${baseEndpoint}${shippingRegionId}`);
        expect(response).to.be.a('object');
        expect(response.status).to.equal(200);
        expect(response.body).to.be.a('object');
      })
    });
  });

  describe('DELETE ENDPOINTS', () => {
    it('should return 404 error for a shipping ID that does not exist', async () => {
      const fakeId = mongoose.Types.ObjectId();
      const payload = {shippingRegion: generateRandomString()};
      const response = await request(app).put(`${baseEndpoint}${fakeId}`).send(payload);
      expect(response).to.be.a('object');
      expect(response.status).to.equal(404);
      expect(response.body).to.be.a('object');
    });

    it('should return a 200 response for a proper payload', async () => {

      //First we create a shipping region
      const shippingRegion = new ShippingRegion({
        shippingRegion: generateRandomString()
      });
      const result = await shippingRegion.save();
      const shippingRegionId = result._id;
      const response = await request(app).delete(`${baseEndpoint}${shippingRegionId}`); // Send a put request to the endpoint

      expect(response.status).to.equal(204);
    });
  })
});