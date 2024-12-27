import express from 'express';
import { CONFIG } from '../config/config.js';
import authorize from '../middleware/authorization.middleware.js';
import { getAllTxn, getTxn } from '../controller/transaction.controller.js';
const router = express.Router();

const role = CONFIG.SERVICE_PROVIDER;
router.get('/', getAllTxn);
router.use(authorize([role]));
router.get('/self', getTxn);
export { router as transactionRouter };
