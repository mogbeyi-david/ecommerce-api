import * as HttpStatus from 'http-status-codes';
import jwt from 'jsonwebtoken';
import 'dotenv/config';
import JsonResponse from '../helpers/response/json-response';


/**
 *
 * @param {object} req
 * @param {object} res
 * @param {object} next
 * @returns {*}
 */
const auth = (req, res, next) => {
  const token = req.header('x-auth-token');
  if (!token) {
    return JsonResponse.error(res, HttpStatus.BAD_REQUEST, 'No token provided', null);
  }
  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET_KEY);
    next();
  } catch (exception) {
    return res.status(HttpStatus.BAD_REQUEST).send({ message: 'Invalid token', data: null });
  }
};

export default auth;
