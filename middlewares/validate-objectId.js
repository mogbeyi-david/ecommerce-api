import mongoose from 'mongoose';
import JsonResponse from '../helpers/response/json-response';
import * as HttpStatus from "http-status-codes";

async function validateObjectId(req, res, next) {
  const isValid = mongoose.Types.ObjectId.isValid(req.params.id);
  if (!isValid) return JsonResponse.error(res, HttpStatus.BAD_REQUEST, 'Invalid Id', null);
  next();
}

export default validateObjectId;
