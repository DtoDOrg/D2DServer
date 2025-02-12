import express from 'express';
import { changeStatus, create, deleteAdmin, getAll, getById, logIn } from '../controller/admin.controller.js';
import { CONFIG } from '../config/config.js';
import authorize from '../middleware/authorization.middleware.js';
import { loginValidation } from '../validation/validation/login.validation.js';
const route = express.Router();
const role = CONFIG.ADMIN_ROLE;
route.post('/login', loginValidation, logIn);
route.post('/', create);
route.use(authorize([role]));
route.get('/', getAll);
route.get('/:id', getById);
route.put('/:id', changeStatus);
route.delete('/:id', deleteAdmin);
export { route as adminRouter };
