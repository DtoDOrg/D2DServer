import express from 'express';
import { upload } from '../../middleware/multer.js';
import {
    createService,
    deleteService,
    getAllServices,
    getServiceByCategory,
    getServiceById,
    updateService,
    updateServiceImage,
} from '../../controller/service.controller.js';
import { CONFIG } from '../../config/config.js';
import authorize from '../../middleware/authorization.middleware.js';
import { updateServiceValidation } from '../../validation/validation/service.validation.js';
const router = express.Router();

router.get('/', getAllServices);
router.get('/:id', getServiceById);
router.get('/category/:id', getServiceByCategory);

//authorized
const role = CONFIG.ADMIN_ROLE;
router.use(authorize([role]));
router.post('/', createService);
router.patch('/image/:id', upload.single('image'), updateServiceImage);
router.patch('/:id', updateServiceValidation, updateService);
router.delete('/:id', deleteService);

export { router as serviceRouter };
