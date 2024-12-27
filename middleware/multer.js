import multer from 'multer';
import ApiError from './error.js';
const storage = multer.memoryStorage();
export const upload = multer({ storage: storage });
