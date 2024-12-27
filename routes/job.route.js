import express from 'express';
import { CONFIG } from '../config/config.js';
import authorize from '../middleware/authorization.middleware.js';
import { acceptAJob, cancelAJob, getByCity, getByState, getJobs, getJobsByCategoryId, jobDone, requestForJobDone } from '../controller/job.controller.js';
const router = express.Router();

router.get('/', getJobs);
router.post('/done/:id', authorize([CONFIG.USER_ROLE]), jobDone);
router.use(authorize([CONFIG.SERVICE_PROVIDER]));
router.get('/city/:id', getByCity);
router.get('/state/:id', getByState);
router.get('/category/:id', getJobsByCategoryId);
router.post('/accept/:id', acceptAJob);
router.post('/request/:id', requestForJobDone);
router.post('/cancel/:id', cancelAJob);

export { router as jobRouter };
