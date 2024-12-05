import express from 'express';
import { create, deleteAdmin, getAll, getById, logIn } from '../../controller/admin.controller.js';
import { CONFIG } from '../../config/config.js';
import authorize from '../../middleware/authorization.middleware.js';
const route = express.Router();
const role = CONFIG.ADMIN_ROLE;
route.post('/login', logIn);
route.post('/', create);
route.use(authorize([role]));
route.get('/', getAll);
route.get('/:id', getById);
route.delete('/:id', deleteAdmin);
export { route as adminRouter };
