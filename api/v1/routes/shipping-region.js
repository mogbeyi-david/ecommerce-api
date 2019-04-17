import express from 'express';
import {ShippingRegionController} from '../../../api/v1/controllers';


const router = express.Router();


router.post('/shipping-regions', ShippingRegionController.create);

export default router;