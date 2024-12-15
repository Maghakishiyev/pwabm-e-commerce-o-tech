// routes/brand.routes.ts
import express, { Request, Response } from 'express';
import { Brand } from '@/models/brand/model';
import { Category } from '@/models/category/model';
import { ReqWithUser, authCheck } from '@/middleware/authCheck';
import { validateBrand } from './helpers/validateBrand';

const router = express.Router();

// List all brands with their associated categories
router.get('/list', async (req: Request, res: Response) => {
    try {
        const brands = await Brand.find({}).populate(
            'categories',
            '_id name description image'
        );
        res.json(brands);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving brands', error });
    }
});

// Get a brand by ID with its associated categories
router.get('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const brand = await Brand.findOne({ _id: id }).populate(
            'categories',
            '_id name description image'
        );
        if (!brand) {
            return res.status(404).json({ message: 'Brand not found' });
        }
        res.json(brand);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving brand', error });
    }
});

// Update a brand (including associated categories)
router.put(
    '/:id',
    authCheck,
    validateBrand,
    async (req: ReqWithUser, res: Response) => {
        const { id } = req.params;
        const { name, image, description, categories } = req.body;

        try {
            // Validate if the provided category IDs exist
            if (categories && categories.length > 0) {
                const existingCategories = await Category.find({
                    _id: { $in: categories },
                });
                if (existingCategories.length !== categories.length) {
                    return res.status(400).json({
                        message: 'One or more category IDs are invalid',
                    });
                }
            }

            // Update the brand
            const updatedBrand = await Brand.findOneAndUpdate(
                { _id: id },
                { name, image, description, categories },
                { new: true }
            ).populate('categories', '_id name description image');

            if (!updatedBrand) {
                return res.status(404).json({ message: 'Brand not found' });
            }

            res.json(updatedBrand);
        } catch (error) {
            res.status(500).json({ message: 'Error updating brand', error });
        }
    }
);

// Delete a brand
router.delete('/:id', authCheck, async (req: ReqWithUser, res: Response) => {
    const { id } = req.params;

    try {
        const deletedBrand = await Brand.findOneAndDelete({
            _id: id,
        });
        if (!deletedBrand) {
            return res.status(404).json({ message: 'Brand not found' });
        }

        // Optionally, you might want to remove this brand from associated categories
        await Category.updateMany({ brands: id }, { $pull: { brands: id } });

        res.status(200).json({ message: 'Brand deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting brand', error });
    }
});

// Add a new brand with associated categories
router.post(
    '/add',
    authCheck,
    validateBrand,
    async (req: ReqWithUser, res: Response) => {
        const { name, image, description, categories } = req.body;

        try {
            // Validate if the provided category IDs exist
            if (categories && categories.length > 0) {
                const existingCategories = await Category.find({
                    _id: { $in: categories },
                });
                if (existingCategories.length !== categories.length) {
                    return res.status(400).json({
                        message: 'One or more category IDs are invalid',
                    });
                }
            }

            // Create a new brand object
            const newBrand = new Brand({
                name,
                image,
                description,
                categories,
            });

            // Save the new brand
            const savedBrand = await newBrand.save();

            // Optionally, add the brand to the associated categories
            if (categories && categories.length > 0) {
                await Category.updateMany(
                    { _id: { $in: categories } },
                    { $push: { brands: savedBrand._id } }
                );
            }

            const populatedBrand = await savedBrand.populate(
                'categories',
                '_id name description image'
            );
            res.status(201).json(populatedBrand);
        } catch (error) {
            res.status(500).json({ message: 'Error adding brand', error });
        }
    }
);

export default router;
