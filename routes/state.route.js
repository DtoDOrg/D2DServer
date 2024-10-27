import express from 'express';
//app configuration
import { CONFIG } from '../config/config.js';
//authorization middleware
import authorize from '../middleware/authorization.middleware.js';
import { getAll, getById, update, create, deleteState, addCity } from '../controller/address/state.js';
//request validation
import { stateValidation } from '../validation/validation/state.validation.js';
const router = express.Router();

const role = CONFIG.SUPER_ADMIN_ROLE;

router.get('/', getAll);
router.get('/:id', getById);
//authorized
router.use(authorize([role]));
router.post('/', stateValidation, create);
router.post('/:id', addCity);
router.delete('/:id', deleteState);
router.put('/:id', stateValidation, update);
export { router as stateRouter };
