import 'dotenv/config';
import morgan from 'morgan';
import express from 'express';
import bodyParser from 'body-parser';
import database from './models/database/database';
import RequestLogger from './helpers/loggers/request-logger';
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
//  Extract the request logging stream
const accessLogStream = RequestLogger.log();
const app = express();

const options = {
  swaggerDefinition: {
    // Like the one described here: https://swagger.io/specification/#infoObject
    info: {
      title: 'Ecommerce API',
      version: '1.0.0',
      description: 'API documentation using swagger'
    },
  },
  // List of files to be processes. You can also set globs './routes/*.js'
  apis: ['./api/v1/routes/*.js']
};

const specs = swaggerJsdoc(options);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

//  Pull in the routers
import {shippingRegionRouter} from './api/v1';

//  Choose the database to connect to based on node environment
let databaseURI = process.env.MONGO_URI;
//  If the node environment is testing, switch the database to the testing database instead
if (process.env.NODE_ENV === 'test') databaseURI = process.env.TEST_MONGO_URI;
database.connect(databaseURI)
  .then(() => {
    return true;
  });




//  Use middlewares
app.use(morgan('combined', {stream: accessLogStream}));

// => parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));

// => parse application/json
app.use(bodyParser.json());

app.use(express.json());


// End of middlewares


// Route Handling middlewares
app.use('/api/v1/shipping-regions', shippingRegionRouter);

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

export default server;
