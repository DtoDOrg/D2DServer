import express from 'express';
//app configuration
import { CONFIG } from '../config/config.js';
//authorization middleware
import authorize from '../middleware/authorization.middleware.js';
import { create, deleteCity, getAll, getById, getByState, update } from '../controller/address/city.js';
//request validation
import { cityValidation } from '../validation/validation/city.validation.js';
const router = express.Router();

const role = CONFIG.ADMIN_ROLE;

router.get('/', getAll);
router.get('/:id', getById);
router.get('/state/:id', getByState);
//authorized
router.use(authorize([role]));
router.post('/', cityValidation, create);
router.delete('/:id', deleteCity);
router.put('/:id', update);
export { router as cityRouter };
