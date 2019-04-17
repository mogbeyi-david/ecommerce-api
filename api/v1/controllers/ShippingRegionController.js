import ShippingRegion from '../../../models/shipping-region';
import {validateShippingRegion} from '../../../validations';
import * as HttpStatus from 'http-status-codes';
import JsonResponse from '../../../helpers/response/json-response';


class ShippingRegionController {
  create(req, res) {
    // Run an API-level validation against the payload
    const {error, value} = validateShippingRegion(req.body);
    if (error) {
      return JsonResponse.error(res, HttpStatus.BAD_REQUEST, error.details[0].message, value);
    }

    //  Check if shipping region already exists.
    const existingShippingRegion = ShippingRegion.findOne({shippingRegion: req.body.shippingRegion});
    if (existingShippingRegion) {
      return JsonResponse.error(res, HttpStatus.CONFLICT, 'Shipping region already exists', req.body);
    }
  }

}


const shippingRegionController = new ShippingRegionController();
export default shippingRegionController;