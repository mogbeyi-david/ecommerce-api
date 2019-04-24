import * as HttpStatus from 'http-status-codes';
import ShippingRegion from '../../../models/shipping-region';
import { validateShippingRegion } from '../../../validations';
import JsonResponse from '../../../helpers/response/json-response';

/**
 * Controller actions for the Shipping Region Resource
 */
class ShippingRegionController {
  /**
   *
   * @param {object} req
   * @param {object} res
   * @returns {Promise<*|boolean|void>}
   */
  async create(req, res) {
    // Run an API-level validation against the payload
    const { error, value } = validateShippingRegion(req.body);
    if (error) {
      return JsonResponse.error(res, HttpStatus.BAD_REQUEST, error.details[0].message, value);
    }

    //  Check if shipping region already exists.
    const existingShippingRegion = await ShippingRegion.find({ shippingRegion: req.body.shippingRegion });
    if (existingShippingRegion.length > 0) {
      return JsonResponse.error(res, HttpStatus.CONFLICT, 'Shipping region already exists', req.body);
    }

    // Try to create the new shipping region
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

  /**
   *
   * @param {object} req
   * @param {object} res
   * @returns {Promise<*|boolean|void>}
   */
  async getAll(req, res) {
    try {
      // Simply query the database and get all the shipping regions inside it
      const shippingRegions = await ShippingRegion.find({});
      // Return success response if it comes through
      return JsonResponse.success(res, HttpStatus.OK, 'Operation Successful', shippingRegions);
    } catch (exception) {
      return JsonResponse.error(res, HttpStatus.INTERNAL_SERVER_ERROR, exception.message, null);
    }
  }

  /**
   *
   * @param {object} req
   * @param {object} res
   * @returns {Promise<*|boolean|void>}
   */
  async getOne(req, res) {
    const { shippingRegionId } = req.params;
    try {
      const shippingRegion = await ShippingRegion.findById(shippingRegionId);
      if (!shippingRegion) {
        return JsonResponse.error(res, HttpStatus.NOT_FOUND, 'Shipping Region not found', shippingRegionId);
      }
      return JsonResponse.success(res, HttpStatus.OK, 'Operation Successful', shippingRegion);
    } catch (exception) {
      return JsonResponse.error(res, HttpStatus.INTERNAL_SERVER_ERROR, exception.message, null);
    }
  }

  /**
   *
   * @param {object} req
   * @param {object} res
   * @returns {Promise<*|boolean|void>}
   */
  async update(req, res) {
    // Run an API-level validation against the payload
    const { error, value } = validateShippingRegion(req.body);
    if (error) {
      return JsonResponse.error(res, HttpStatus.BAD_REQUEST, error.details[0].message, value);
    }


    const { shippingRegionId } = req.params;
    try {
      const shippingRegion = await ShippingRegion.findById(shippingRegionId);
      if (!shippingRegion) {
        return JsonResponse.error(res, HttpStatus.NOT_FOUND, 'Shipping Region not found', shippingRegionId);
      }

      const newShippingRegion = await ShippingRegion.findOneAndUpdate({ _id: shippingRegionId }, {
        $set: {
          shippingRegion: req.body.shippingRegion
        }
      }, {
        new: true
      });
      return JsonResponse.success(res, HttpStatus.OK, 'Shipping Region Updated Successfully', newShippingRegion);
    } catch (exception) {
      return JsonResponse.error(res, HttpStatus.INTERNAL_SERVER_ERROR, exception.message, null);
    }
  }

  /**
   *
   * @param {object} req
   * @param {object} res
   * @returns {Promise<*|boolean|void>}
   */
  async delete(req, res) {
    const { shippingRegionId } = req.params;
    try {
      const shippingRegion = await ShippingRegion.findById(shippingRegionId);
      if (!shippingRegion) {
        return JsonResponse.error(res, HttpStatus.NOT_FOUND, 'Shipping Region not found', shippingRegionId);
      }

      await ShippingRegion.findByIdAndRemove(shippingRegionId);
      return JsonResponse.success(res, HttpStatus.NO_CONTENT, 'Operation Successful', null);
    } catch (exception) {
      return JsonResponse.error(res, HttpStatus.INTERNAL_SERVER_ERROR, exception.message, null);
    }
  }
}


const shippingRegionController = new ShippingRegionController();
export default shippingRegionController;
