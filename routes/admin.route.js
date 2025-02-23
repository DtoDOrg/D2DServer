import express from 'express';
import { changeStatus, create, deleteAdmin, getAll, getById, logIn } from '../controller/admin.controller.js';
import { CONFIG } from '../config/config.js';
import authorize from '../middleware/authorization.middleware.js';
import { loginValidation } from '../validation/validation/login.validation.js';

const router = express.Router();

const role = CONFIG.ADMIN_ROLE;
router.post('/create', create);
router.post('/login', loginValidation, logIn);
router.use(authorize([role]));
router.get('/', getAll);
router.get('/:id', getById);
router.put('/status/:id', changeStatus);
router.delete('/:id', deleteAdmin);
export { router as adminRouter };
