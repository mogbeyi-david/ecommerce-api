import express from 'express';
import { ShippingRegionController } from '../controllers';


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

/**
 * @swagger
 * /api/v1/shipping-regions/{shippingRegionId}:
 *    put:
 *      summary: Updates a shipping region.
 *      tags: [/api/v1/shipping-regions]
 *      consumes:
 *        - application/json
 *      description: Creates a new shipping region
 *      parameters:
 *        - in: path
 *          name: shippingRegionId
 *          description: The ID of the shipping region
 *        - name: shippingRegion
 *          in: body
 *          description: shipping region details.
 *          schema:
 *            type: object
 *            required: true
 *            properties:
 *              shippingRegion:
 *                type: string
 *                example: New Shipping Region
 *      responses:
 *        200:
 *          description: Shipping region created successfully
 *          schema:
 *            type: string
 *        400:
 *          description: Could not update shipping region
 *          schema:
 *            type: string
 *
 *        404:
 *          description: Shipping region not found
 *          schema:
 *            type: string
 *        500:
 *          description: Shipping region could not be updated at this time
 *          schema:
 *            type: string
 */
router.put('/:shippingRegionId', ShippingRegionController.update);

/**
 * @swagger
 * /api/v1/shipping-regions/{shippingRegionId}:
 *    delete:
 *      summary: Deletes a shipping region.
 *      tags: [/api/v1/shipping-regions]
 *      description: This should delete a single shipping region
 *      parameters:
 *        - in: path
 *          name: shippingRegionId
 *          description: The ID of the shipping region
 *      responses:
 *        200:
 *          description: Response without any Body
 *          schema:
 *            type: string
 *        400:
 *          description: Failed Request
 *          schema:
 *            type: string
 *        404:
 *          description: Shipping region not found
 *          schema:
 *            type: string
 *        500:
 *          description: Shipping region could not be deleted at this time
 *          schema:
 *            type: string
 */
router.delete('/:shippingRegionId', ShippingRegionController.delete);

export {
  router
};
