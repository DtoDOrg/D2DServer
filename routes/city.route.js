import express from 'express';
//app configuration
import { CONFIG } from '../config/config.js';
//authorization middleware
import authorize from '../middleware/authorization.middleware.js';
import { create, deleteCity, getAll, getById, update } from '../controller/address/city.js';
//request validation
import { cityValidation } from '../validation/validation/city.validation.js';
const router = express.Router();

const role = CONFIG.SUPER_ADMIN_ROLE;

router.get('/', getAll);
router.get('/:id', getById);
//authorized
router.use(authorize([role]));
router.post('/', cityValidation, create);
router.delete('/:id', deleteCity);
router.put('/:id', cityValidation, update);
export { router as cityRouter };
