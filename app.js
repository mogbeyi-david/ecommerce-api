import database from './models/database/database';
import 'dotenv/config';


//  Choose the database to connect to based on node environment
let databaseURI = process.env.MONGO_URI;
//  If the node environment is testing, switch the database to the testing database instead
if (process.env.NODE_ENV === 'test') databaseURI = process.env.TEST_MONGO_URI;
database.connect(databaseURI);
