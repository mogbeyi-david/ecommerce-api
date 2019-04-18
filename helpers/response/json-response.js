import * as HttpStatus from 'http-status-codes';

class JsonResponse {
  /**
   *
   * @param res
   * @param statusCode
   * @param message
   * @param data
   * @returns {*|boolean|void}
   */
  static success(res, statusCode = HttpStatus.OK, message = 'Operation successful', data = {}) {
    return res.status(statusCode).send({message, data});
  }

  /**
   *
   * @param res
   * @param statusCode
   * @param message
   * @param data
   * @returns {*|boolean|void}
   */
  static error(res, statusCode = HttpStatus.BAD_REQUEST, message = 'Operation failed', data = null) {
    return res.status(statusCode).send({message, data});
  }
}


export default JsonResponse;