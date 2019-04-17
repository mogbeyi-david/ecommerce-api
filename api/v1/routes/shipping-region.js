import express from 'express';
import {ShippingRegionController} from '../../../api/v1/controllers';


const router = express.Router();


router.post('', ShippingRegionController.create);
router.get('', ShippingRegionController.getAll);

export {
  router
}