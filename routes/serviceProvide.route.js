import express from 'express';
import {
    createServiceProvider,
    deleteServiceProvider,
    findById,
    getAll,
    login,
    update,
    updateImage,
    updateStatus,
} from '../controller/serviceProvider.controller.js';
import { upload } from '../middleware/multer.js';
import { CONFIG } from '../config/config.js';
import authorize from '../middleware/authorization.middleware.js';

const router = express.Router();
router.post('/', createServiceProvider);
router.post('/login', login);
router.get('/', getAll);
router.get('/:id', findById);
router.put('/status/:id', updateStatus);

router.use(authorize([CONFIG.SERVICE_PROVIDER]));
router.put('/', update);
router.put('/image', upload.single('image'), updateImage);
router.delete('/', deleteServiceProvider);
export { router as serviceProviderRouter };
