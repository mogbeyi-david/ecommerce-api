import express from 'express';
import {CustomerController} from '../controllers';

const router = express.Router(); // Get the express router


/**
 * @swagger
 * /api/v1/customers:
 *    post:
 *      summary: creates a new customer
 *      tags: [/api/v1/customer]
 *      consumes:
 *        - application/json
 *      description: Creates a new customer
 *      parameters:
 *        - name: name
 *          in: body
 *          description: customer name
 *          schema:
 *            type: object
 *            required: true
 *            properties:
 *              name:
 *                type: string
 *                example: David Mogbeyi
 *              email:
 *                type: string
 *                example: mogbeyidavid@gmail.com
 *              password:
 *                type: string
 *                example: '123456789'
 *      responses:
 *        200:
 *          description: Customer created successfully
 *          schema:
 *            type: string
 *        400:
 *          description: Could not create customer
 *          schema:
 *            type: string
 *        500:
 *          description: Error occurred while trying to creating customer
 *          schema:
 *            type: string
 */
router.post('', CustomerController.create);

export {
  router
};
