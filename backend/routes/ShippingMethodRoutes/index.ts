import express, { Request, Response } from 'express';
import { ShippingMethod } from '@/models/shippingMethod/model';
import { validateShippingMethod } from './helpers/validateShippingMethod';
import { authCheck, ReqWithUser } from '@/middleware/authCheck';

const router = express.Router();

// List all shipping methods
router.get('/list', async (_req: Request, res: Response) => {
    try {
        const methods = await ShippingMethod.find({});
        res.json(methods);
    } catch (error) {
        res.status(500).json({
            message: 'Error retrieving shipping methods',
            error,
        });
    }
});

// Get a shipping method by ID
router.get('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const method = await ShippingMethod.findById(id);
        if (!method) {
            return res
                .status(404)
                .json({ message: 'Shipping method not found' });
        }
        res.json(method);
    } catch (error) {
        res.status(500).json({
            message: 'Error retrieving shipping method',
            error,
        });
    }
});

// Add a new shipping method
router.post(
    '/add',
    authCheck,
    validateShippingMethod,
    async (req: ReqWithUser, res: Response) => {
        const { name, price, description } = req.body;

        try {
            const newMethod = new ShippingMethod({ name, price, description });
            const savedMethod = await newMethod.save();
            res.status(201).json(savedMethod);
        } catch (error) {
            res.status(500).json({
                message: 'Error adding shipping method',
                error,
            });
        }
    }
);

// Update a shipping method
router.put(
    '/:id',
    authCheck,
    validateShippingMethod,
    async (req: ReqWithUser, res: Response) => {
        const { id } = req.params;
        const { name, price, description } = req.body;

        try {
            const updatedMethod = await ShippingMethod.findByIdAndUpdate(
                id,
                { name, price, description },
                { new: true }
            );

            if (!updatedMethod) {
                return res
                    .status(404)
                    .json({ message: 'Shipping method not found' });
            }

            res.json(updatedMethod);
        } catch (error) {
            res.status(500).json({
                message: 'Error updating shipping method',
                error,
            });
        }
    }
);

// Delete a shipping method
router.delete('/:id', authCheck, async (req: ReqWithUser, res: Response) => {
    const { id } = req.params;

    try {
        const deletedMethod = await ShippingMethod.findByIdAndDelete(id);
        if (!deletedMethod) {
            return res
                .status(404)
                .json({ message: 'Shipping method not found' });
        }

        res.json({ message: 'Shipping method deleted successfully' });
    } catch (error) {
        res.status(500).json({
            message: 'Error deleting shipping method',
            error,
        });
    }
});

export default router;
