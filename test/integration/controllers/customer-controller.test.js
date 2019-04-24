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
});