import express from 'express';
import { create, deleteRating, getRatingByService } from '../controller/rating.controller.js';
import authorize from '../middleware/authorization.middleware.js';
import { CONFIG } from '../config/config.js';
const router = express.Router();
router.get('/:id', getRatingByService);
router.delete('/:id', deleteRating);
router.use(authorize([CONFIG.USER_ROLE]));
router.post('/', create);
export { router as RatingRouter };
