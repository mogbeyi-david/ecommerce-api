import * as HttpStatus from 'http-status-codes';


/**
 * The Class for handling all Json Responses
 */
class JsonResponse {
  /**
   *
   * @param {object} res
   * @param {int} statusCode
   * @param {string} message
   * @param {object} data
   * @returns {*|boolean|void}
   */
  static success(res, statusCode = HttpStatus.OK, message = 'Operation successful', data = {}) {
    return res.status(statusCode).send({ message, data });
  }

  /**
   *
   * @param {object} res
   * @param {int} statusCode
   * @param {string} message
   * @param {object} data
   * @returns {*|boolean|void}
   */
  static error(res, statusCode = HttpStatus.BAD_REQUEST, message = 'Operation failed', data = null) {
    return res.status(statusCode).send({ message, data });
  }
}


export default JsonResponse;
