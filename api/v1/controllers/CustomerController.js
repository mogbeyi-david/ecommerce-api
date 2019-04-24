import * as HttpStatus from 'http-status-codes';
import Customer from '../../../models/customer';
import {validateCustomer} from '../../../validations';
import JsonResponse from '../../../helpers/response/json-response';


/**
 * Controller for customer resource
 */
class CustomerController {

  async create(req, res) {

    //First perform API-Level validation on the payload
    const {error, value} = validateCustomer(req.body);
    if (error) {
      return JsonResponse.error(res, HttpStatus.BAD_REQUEST, error.details[0].message, value);
    }

    //  Check if customer already exists.
    const existingCustomer = await Customer.find({email: req.body.email});
    if (existingCustomer.length > 0) {
      return JsonResponse.error(res, HttpStatus.CONFLICT, 'Customer already exists', req.body);
    }
  }
}

const customerController = new CustomerController();
export default customerController;
