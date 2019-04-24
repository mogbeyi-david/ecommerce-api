import * as HttpStatus from 'http-status-codes';


/**
 *
 * @param {object} req
 * @param {object} res
 * @param {object} next
 * @returns {*|void|boolean}
 */
const admin = (req, res, next) => {
  // Check if the user is an admin from the decoded JSON WEB TOKEN
  if (req.user.role !== 'ADMIN') {
    return res.status(HttpStatus.FORBIDDEN).send({ message: 'Access Denied', data: null });
  }
  next();
};

export default admin;
