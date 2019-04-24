import 'babel-polyfill';
import request from 'supertest';
import {expect} from 'chai';
import mongoose from 'mongoose';
import server from '../../../app';
import {Customer} from '../../../models';
import generateRandomString from '../../../helpers/utility-functions/generate-random-string';
import createTwoCustomers from '../../../helpers/test-functions/customers/create-two-customers';

let app;

const baseEndpoint = '/api/v1/customers/';

describe('--CUSTOMER ENDPOINTS--', () => {

  /**
   * Declare the beforeEach hook for performing operations common to all test cases before the test run.
   * Here we re-initialize the server before every test
   */
  beforeEach(() => {
    app = server;
  });

  /**
   * Declare the afterEach hook for performing operations common to all test cases after the test run
   * Here, we delete every customer in the database to create a fresh environment
   */

  afterEach(async () => {
    await Customer.deleteMany({});
    app.close();
  });

  describe('Post Endpoints', () => {
    describe('Creating a new customer', () => {
      it('should return a 400 error when there is a validation error with the payload', async () => {
        // first, we declare a faulty payload.
        const payload = {};
        // Then we send a post request to the base endpoint
        const response = await request(app).post(baseEndpoint).send(payload);

        expect(response).to.be.a('object');
        expect(response.status).to.equal(400);
        expect(response.body.message).to.be.a('string');
        expect(response.body).to.be.a('object');
      })

      it('should return a 409 error if the customer already exists', async () => {
        // First create a new customer using the customer Model and save it to the DB
        const customer = new Customer({
          name: generateRandomString(),
          email: 'exists@gmail.com',
          password: generateRandomString()
        });
        await customer.save();

        // Then send a payload with the customer email being the same as the created one
        const payload = {
          name: generateRandomString(),
          email: 'exists@gmail.com',
          password: generateRandomString()
        }; // Declare the payload
        // Send a post request to the endpoint
        const response = await request(app).post(baseEndpoint).send(payload);
        expect(response).to.be.a('object');
        expect(response.status).to.equal(409);
        expect(response.body.message).to.be.a('string');
        expect(response.body).to.be.a('object');
      });
    });
  })
});