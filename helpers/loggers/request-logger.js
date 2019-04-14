import * as path from 'path';
import * as fs from 'fs';
import rfs from 'rotating-file-stream';

/**
 *  Class responsible for anything that has to do with Logging requests
 */
class RequestLogger {
  /**
   *
   * @returns {*}
   */
  static log() {
    const logDirectory = path.join(__dirname, 'log');
    // Check if the logs directory exists and create it if it does not exist
    fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);
    return rfs('access.log', {
      interval: '1d', // Set the logging to be read use one file per day
      path: logDirectory
    });
  }
}

export default RequestLogger;
