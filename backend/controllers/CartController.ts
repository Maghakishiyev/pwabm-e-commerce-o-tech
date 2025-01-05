import { Request, Response } from 'express';
import { Cart } from '@/models/cart/model';  
import { validateCartItem } from '@/routes/CartRoutes/helpers/validateCart'; 

export const getCart = async (req: Request, res: Response) => {
    try {
        const { user_id, } = req.body;
        const userId = user_id;  
        const cart = await Cart.findOne({ userId }).populate('cartItems.product');  
        if (!cart) {
            return res.status(404).json({ message: 'Cart not found' });
        }

        const totalPrice = cart.cart_items.reduce((total, item) => total + (item.quantity * item.price), 0);

        return res.status(200).json({
            cart,
            totalPrice
        });
    } catch (error) {
        return res.status(500).json({ error: 'Failed to fetch cart' });
    }
};

export const addCartItem = async (req: Request, res: Response) => {
    try {
        const { user_id, product_id, selected_color, selected_memory_size, quantity, price } = req.body;

        const newItem = {
            product_id,
            selected_color,
            selected_memory_size,
            quantity,
            price,
        };

        // Validate the cart item
        const itemValidation = validateCartItem(newItem);
        if (!itemValidation.valid) {
            return res.status(400).json({ message: itemValidation.message });
        }

        let cart = await Cart.findOne({ user_id });

        if (!cart) {
            cart = new Cart({ user_id, cartItems: [] });
        }

        // Check if the item already exists in the cart
        const existingItemIndex = cart.cart_items.findIndex(item =>
            item.product_id.toString() === product_id &&
            item.selected_color === selected_color &&
            item.selected_memory_size === selected_memory_size
        );

        if (existingItemIndex !== -1) {
            // If the item already exists, update its quantity
            cart.cart_items[existingItemIndex].quantity += quantity;
        } else {
            // Otherwise, add the new item to the cart
            cart.cart_items.push(newItem);
        }

        // Save the updated cart
        await cart.save();

        return res.status(201).json({
            message: 'Item added to cart',
            cart
        });
    } catch (error) {
        return res.status(500).json({ error: 'Failed to add item to cart' });
    }
};

export const deleteCartItem = async (req: Request, res: Response) => {
    try {
        const { user_id } = req.body;  // Get user ID from the authenticated user

        const { itemId } = req.params;  // Get itemId from route params

        // Find the user's cart
        const cart = await Cart.findOne({ user_id });

        if (!cart) {
            return res.status(404).json({ message: 'Cart not found' });
        }

        // Remove the item from the cart
        const updatedCartItems = cart.cart_items.filter(item => item.product_id.toString() !== itemId);

        if (updatedCartItems.length === cart.cart_items.length) {
            return res.status(404).json({ message: 'Item not found in cart' });
        }

        // Update the cart with the remaining items
        cart.cart_items = updatedCartItems;
        await cart.save();

        return res.status(200).json({
            message: 'Item removed from cart',
            cart
        });
    } catch (error) {
        return res.status(500).json({ error: 'Failed to delete item from cart' });
    }
};
