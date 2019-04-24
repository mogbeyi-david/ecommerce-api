import 'dotenv/config';
import mongoose from 'mongoose';

/**
 * Database class for carrying out Database operations
 */
class Database {
  /**
   *
   * @param {string} databaseURI
   * @returns {Promise<*>}
   */
  async connect(databaseURI) {
    try {
      const result = await mongoose.connect(databaseURI, { useCreateIndex: true, useNewUrlParser: true });
      if (result) return result;
    } catch (exception) {
      return exception.message;
    }
  }
}

const database = new Database();
export default database;
