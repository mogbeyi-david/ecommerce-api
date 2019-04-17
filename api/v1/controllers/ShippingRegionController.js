import ShippingRegion from '../../../models/shipping-region';
import validateShippingRegion from '../../../validations';
import * as HttpStatus from 'http-status-codes';
import JsonResponse from '../../../helpers/response/json-response';


class ShippingRegionController {
  create(req, res) {
    // Run an API-level validation against the payload
    return res.status(200).send('Working');
  }

}


const shippingRegionController = new ShippingRegionController();
export default shippingRegionController;