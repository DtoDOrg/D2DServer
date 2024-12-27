import express from 'express';
import {
    addAlternativeMobileNumber,
    addNotes,
    addToCart,
    clearCart,
    decrementQuantity,
    getCart,
    incrementQuantity,
    removeAlternativeMobileNumber,
    removeNotes,
} from '../controller/cart.controller.js';
import { CONFIG } from '../config/config.js';
import authorize from '../middleware/authorization.middleware.js';

const router = express.Router();

const role = CONFIG.USER_ROLE;
router.use(authorize([role]));
router.get('/', getCart);
router.post('/', addToCart);
router.post('/increment', incrementQuantity);
router.post('/decrement', decrementQuantity);
router.post('/notes', addNotes);
router.post('/mobile', addAlternativeMobileNumber);
router.delete('/', clearCart);
router.delete('/mobile', removeAlternativeMobileNumber);
router.delete('/notes', removeNotes);

export { router as cartRouter };
