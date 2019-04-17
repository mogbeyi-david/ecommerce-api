import ShippingRegion from '../../../models/shipping-region';
import validateShippingRegion from '../../../validations';
import * as HttpStatus from 'http-status-codes';
import JsonResponse from '../../../helpers/response/json-response';


class ShippingRegionController {
  create(req, res) {
    const {error, value} = validateShippingRegion(req.body);
    if (error) {
      return res.status(HttpStatus.BAD_REQUEST).send({message: error.details[0].message, data: value})
    }
  }

}

export default ShippingRegionController;