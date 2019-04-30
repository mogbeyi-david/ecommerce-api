import * as HttpStatus from 'http-status-codes';
import Customer from '../../../models/customer';
import {validateCustomer} from '../../../validations';
import JsonResponse from '../../../helpers/response/json-response';
import _ from 'lodash';
import ShippingRegion from "../../../models/shipping-region";


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

    // Try to create the customer from the payload
    try {
      const newCustomer = new Customer({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      });
      const result = await newCustomer.save(); // Save customer to the database
      const customer = _.pick(result, ['name', 'email']);
      return JsonResponse.success(res, HttpStatus.CREATED, 'Customer created successfully', customer);
    } catch (exception) {
      return JsonResponse.error(res, HttpStatus.INTERNAL_SERVER_ERROR, exception.message, null);
    }
  }
}

const customerController = new CustomerController();
export default customerController;
