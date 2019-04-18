import express from 'express';
import {ShippingRegionController} from '../../../api/v1/controllers';


const router = express.Router();


/**
 * @swagger
 * /api/v1/shipping-regions:
 *    post:
 *      summary: creates a new shipping region.
 *      tags: [/api/v1/shipping-regions]
 *      consumes:
 *        - application/json
 *      description: Creates a new shipping region
 *      parameters:
 *        - name: shippingRegion
 *          in: body
 *          description: shipping region details.
 *          schema:
 *            type: object
 *            required: true
 *            properties:
 *              shippingRegion:
 *                type: string
 *                example: Africa
 *      responses:
 *        200:
 *          description: Shipping region created successfully
 *          schema:
 *            type: string
 *        400:
 *          description: Could not create shipping region
 *          schema:
 *            type: string
 */
router.post('', ShippingRegionController.create);

/**
 * @swagger
 * /api/v1/shipping-regions:
 *    get:
 *      summary: returns all shipping-regions.
 *      tags: [/api/v1/shipping-regions]
 *      description: This should return all users
 *      responses:
 *        200:
 *          description: A list of shipping regions
 *          schema:
 *            type: string
 *        400:
 *          description: Failed Request
 *          schema:
 *            type: string
 */
router.get('', ShippingRegionController.getAll);

/**
 * @swagger
 * /api/v1/shipping-regions/{shippingRegionId}:
 *    get:
 *      summary: returns a single shipping region.
 *      tags: [/api/v1/shipping-regions]
 *      description: This should return a single shipping region
 *      parameters:
 *        - in: path
 *          name: shippingRegionId
 *          description: The ID of the shipping region
 *      responses:
 *        200:
 *          description: A shipping region
 *          schema:
 *            type: string
 *        400:
 *          description: Failed Request
 *          schema:
 *            type: string
 */
router.get('/:shippingRegionId', ShippingRegionController.getOne);

export {
  router
}