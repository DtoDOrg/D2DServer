import express from 'express';
import { CONFIG } from '../config/config.js';
const router = express.Router();
import authorize from '../middleware/authorization.middleware.js';
import { creditAmount, debitAmount } from '../controller/wallet.controller.js';
router.use(authorize([CONFIG.SERVICE_PROVIDER]));
router.post('/cr', creditAmount);
router.post('/debt', debitAmount);
export { router as walletRouter };
