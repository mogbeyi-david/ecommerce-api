import mongoose from 'mongoose';
import * as HttpStatus from 'http-status-codes';
import JsonResponse from '../helpers/response/json-response';


/**
 *
 * @param {object} req
 * @param {object} res
 * @param {object} next
 * @returns {*|boolean|void}
 */
const validateObjectId = (req, res, next) => {
  const isValid = mongoose.Types.ObjectId.isValid(req.params.id);
  if (!isValid) return JsonResponse.error(res, HttpStatus.BAD_REQUEST, 'Invalid Id', null);
  next();
};

export default validateObjectId;
