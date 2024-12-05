import express from 'express';
//controller
import {
    deleteSuperAdmin,
    getAllSuperAdmins,
    getSuperAdmin,
    getSuperAdminById,
    login,
    registration,
    updateImage,
    updatePassword,
    updateSuperAdmin,
} from '../../controller/superAdmin/superAdmin.js';
//app configuration
import { CONFIG } from '../../config/config.js';
//authorization middleware
import authorize from '../../middleware/authorization.middleware.js';
//validation
import { superAdminLoginValidation } from '../../validation/validation/login.validation.js';
import { superAdminRegistrationValidation } from '../../validation/validation/registration.validation.js';
import { passwordValidation, superAdminUpdateValidation } from '../../validation/validation/update.validation.js';
import { upload } from '../../middleware/multer.js';

const router = express.Router();
//auth
router.post('/', superAdminRegistrationValidation, registration);
router.post('/sign-in', superAdminLoginValidation, login);
//authorized
const role = CONFIG.SUPER_ADMIN_ROLE;
router.use(authorize([role]));
router.get('/profile', getSuperAdmin);
router.get('/', getAllSuperAdmins);
router.get('/:id', getSuperAdminById);
router.patch('/profile', superAdminUpdateValidation, updateSuperAdmin);
router.patch('/password', passwordValidation, updatePassword);
router.patch('/avatar', upload.single('image'), updateImage);
router.delete('/:id', deleteSuperAdmin);

export { router as superAdminRouter };
