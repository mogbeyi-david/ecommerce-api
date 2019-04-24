import express from 'express';
import { CustomerController } from '../controllers';

const router = express.Router(); // Get the express router



router.post('', CustomerController.create);

export {
  router
};
