import express from 'express';
import { CONFIG } from '../config/config.js';
import authorize from '../middleware/authorization.middleware.js';
import { createAddress, deleteAddress, getAddressById, getAllAddress, updateAddress } from '../controller/address/address.controller.js';

const router = express.Router();

const role = CONFIG.USER_ROLE;
//authorized
router.use(authorize([role]));
router.post('/', createAddress);
router.get('/', getAllAddress);
router.delete('/:id', deleteAddress);
router.put('/:id', updateAddress);

export { router as addressRouter };
