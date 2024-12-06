import express from 'express';
import {
    createCategory,
    deleteCategory,
    getAllCategories,
    getCategoryById,
    updateBannerImage,
    updateCategory,
    updateCategoryImage,
} from '../controller/category.js';
import { CONFIG } from '../config/config.js';
import authorize from '../middleware/authorization.middleware.js';
import { createCategoryValidation, updateCategoryValidation } from '../validation/validation/category.validation.js';
import { upload } from '../middleware/multer.js';

const router = express.Router();

router.get('/', getAllCategories);
router.get('/:id', getCategoryById);

//authorized
const role = CONFIG.ADMIN_ROLE;
router.use(authorize([role]));
router.post('/', createCategoryValidation, createCategory);
router.patch('/image/:id', upload.single('image'), updateCategoryImage);
router.patch('/banner/:id', upload.single('banner'), updateBannerImage);
router.patch('/:id', updateCategoryValidation, updateCategory);
router.delete('/:id', deleteCategory);

export { router as categoryRouter };
