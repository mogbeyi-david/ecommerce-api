import 'dotenv/config';
import morgan from 'morgan';
import express from 'express';

import database from './models/database/database';
import RequestLogger from './helpers/loggers/request-logger';

//  Choose the database to connect to based on node environment
let databaseURI = process.env.MONGO_URI;
//  If the node environment is testing, switch the database to the testing database instead
if (process.env.NODE_ENV === 'test') databaseURI = process.env.TEST_MONGO_URI;
database.connect(databaseURI);

const accessLogStream = RequestLogger.log();
const app = express();

//  Use middlewares
app.use(morgan('combined', { stream: accessLogStream }));
// End of middlewares


const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

export default server;
