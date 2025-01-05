import express from 'express';
import {
    addItem,
    removeItem,
    getCart,
    clearCart,
} from '@/controllers/CartController';
import { authCheck } from '@/middleware/authCheck';

const router = express.Router();

router.post('/add', authCheck, addItem); // Add item to cart
router.post('/remove', authCheck, removeItem); // Remove item from cart
router.get('/:user_id', authCheck, getCart); // Get user's cart
router.post('/clear', authCheck, clearCart); // Clear user's cart

export default router;
