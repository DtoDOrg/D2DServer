import express from 'express';
import { CONFIG } from '../config/config.js';
import authorize from '../middleware/authorization.middleware.js';
import { changeStatus, deleteById, getAll, getProfile, getProfileByToken, login, registration, update, updateImage } from '../controller/user.controller.js';
import { upload } from '../middleware/multer.js';

const router = express.Router();
//create user
router.post('/', registration);
router.post('/login', login);

//authorized
const userRole = CONFIG.USER_ROLE;
const adminRole = CONFIG.ADMIN_ROLE;
router.get('/', authorize([adminRole]), getAll);
router.get('profile/:id', authorize([adminRole]), getProfile);
router.use(authorize([userRole]));
router.get('/self', getProfileByToken);
router.put('/:id', update);
router.put('/status/:id', changeStatus);
router.put('/image/:id', upload.single('image'), updateImage);
router.delete('/:id', deleteById);

export { router as UserRouter };
