import express from 'express';
import { CONFIG } from '../config/config.js';
import { createOrder, getAllOrders, getOrderByOrderId, getOrderByUserId, updateOrderStatus } from '../controller/order.controller.js';
import authorize from '../middleware/authorization.middleware.js';
const router = express.Router();

router.get('/', authorize([CONFIG.ADMIN_ROLE]), getAllOrders);
router.get('/details/:id', getOrderByOrderId);
router.use(authorize([CONFIG.USER_ROLE]));
router.post('/', createOrder);
router.get('/my', getOrderByUserId);
router.put('/', updateOrderStatus);
export { router as OrderRouter };
