import express from 'express';
import { createCustomer, deleteCustomer, getAll, getCustomerById, login, updateCustomer } from '../controller/user';
import { CONFIG } from '../config/config';
import authorize from '../middleware/authorization.middleware';
import { customerRegistrationValidation } from '../validation/validation/registration.validation.js';

const router = express.Router();
//create user
router.post('/', customerRegistrationValidation, createCustomer);
//login
router.post('/login', login);

const superAdminRole = CONFIG.SUPER_ADMIN_ROLE;
router.use(authorize([superAdminRole]));
//get all users
router.get('/', getAll);
const userRole = CONFIG.USER_ROLE;
router.use(authorize([userRole]));
//delete by id
router.delete('/:id', deleteCustomer);
//get by id
router.get('/:id', getCustomerById);
router.put('/:id', updateCustomer);
export { router as UserRouter };
