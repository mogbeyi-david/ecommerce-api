import 'dotenv/config';
import morgan from 'morgan';
import express from 'express';
import bodyParser from 'body-parser';
import database from './models/database/database';
import RequestLogger from './helpers/loggers/request-logger';

//  Choose the database to connect to based on node environment
let databaseURI = process.env.MONGO_URI;
//  If the node environment is testing, switch the database to the testing database instead
if (process.env.NODE_ENV === 'test') databaseURI = process.env.TEST_MONGO_URI;
database.connect(databaseURI)
  .then(() => {
    console.log('connected to the database')
  })
  .catch(error => console.log(error));

const accessLogStream = RequestLogger.log();
const app = express();

//  Use middlewares
app.use(morgan('combined', {stream: accessLogStream}));

// => parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));

// => parse application/json
app.use(bodyParser.json());


// End of middlewares


const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

export default server;
