import express from 'express';
import { CONFIG } from '../config/config.js';
import {
    changeBannerStatus,
    createBanner,
    deleteBanner,
    getAllBanner,
    getAllMultiBanner,
    getAllSingleBanner,
    updateBanner,
    updateBannerImage,
} from '../controller/banner.controller.js';
import authorize from '../middleware/authorization.middleware.js';
import { upload } from '../middleware/multer.js';

const router = express.Router();
const role = CONFIG.ADMIN_ROLE;

router.get('/', getAllBanner);
router.get('/multi', getAllMultiBanner);
router.get('/single', getAllSingleBanner);

router.use(authorize([role]));
router.post('/', createBanner);
router.patch('/image/:id', upload.single('banner'), updateBannerImage);

router.put('/:id', updateBanner);
router.patch('/:id', changeBannerStatus);
router.delete('/:id', deleteBanner);

export { router as bannerRouter };
