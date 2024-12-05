import express from 'express';
import { create, deleteAdmin, getAll, getById, logIn } from '../../controller/admin.controller.js';
const route = express.Router();
route.get('/', getAll);
route.get('/:id', getById);
route.post('/login', logIn);
route.post('/', create);
route.delete('/:id', deleteAdmin);
export { route as adminRouter };
