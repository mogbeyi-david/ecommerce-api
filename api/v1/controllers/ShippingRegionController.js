import ShippingRegion from '../../../models/shipping-region';
import {validateShippingRegion} from '../../../validations';
import * as HttpStatus from 'http-status-codes';
import JsonResponse from '../../../helpers/response/json-response';


class ShippingRegionController {
  /**
   *
   * @param req
   * @param res
   * @returns {Promise<*|boolean|void>}
   */
  async create(req, res) {
    // Run an API-level validation against the payload
    const {error, value} = validateShippingRegion(req.body);
    if (error) {
      return JsonResponse.error(res, HttpStatus.BAD_REQUEST, error.details[0].message, value);
    }

    //  Check if shipping region already exists.
    const existingShippingRegion = await ShippingRegion.find({shippingRegion: req.body.shippingRegion});
    if (existingShippingRegion.length > 0) {
      return JsonResponse.error(res, HttpStatus.CONFLICT, 'Shipping region already exists', req.body);
    }

    //Try to create the new shipping region
    try {
      const newShippingRegion = new ShippingRegion({
        shippingRegion: req.body.shippingRegion
      });
      const shippingRegion = await newShippingRegion.save(); // Save shipping region to the database
      return JsonResponse.success(res, HttpStatus.CREATED, 'Shipping region created successfully', shippingRegion);
    } catch (exception) {
      return JsonResponse.error(res, HttpStatus.INTERNAL_SERVER_ERROR, exception.message, null);
    }
  }

  async getAll(req, res) {
    try {
      const shippingRegions = await ShippingRegion.find({});
      return JsonResponse.success(res, HttpStatus.OK, 'Operation Successful', shippingRegions);
    } catch (exception) {
      return JsonResponse.error(res, HttpStatus.INTERNAL_SERVER_ERROR, exception.message, null);
    }
  }
}


const shippingRegionController = new ShippingRegionController();
export default shippingRegionController;