import ShippingRegion from '../../../models/shipping-region';
import {validateShippingRegion} from '../../../validations';
import * as HttpStatus from 'http-status-codes';
import JsonResponse from '../../../helpers/response/json-response';


class ShippingRegionController {
  create(req, res) {
    // Run an API-level validation against the payload
    const {error, value} = validateShippingRegion(req.body);
    if (error) {
      return JsonResponse.success(res, HttpStatus.BAD_REQUEST, error.details[0].message, value);
    }
  }

}


const shippingRegionController = new ShippingRegionController();
export default shippingRegionController;