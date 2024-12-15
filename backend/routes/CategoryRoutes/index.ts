// routes/category.routes.ts
import express, { Request, Response } from 'express';
import { Category } from '@/models/category/model';
import { ReqWithUser, authCheck } from '@/middleware/authCheck';
import { validateCategory } from './helpers/validateCategory';
import { Brand } from '@/models/brand/model';

const router = express.Router();

// List all categories with their associated brands
router.get('/list', async (_req: Request, res: Response) => {
    try {
        const categories = await Category.find({}).populate(
            'brands',
            '_id name description image'
        );
        res.json(categories);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving categories', error });
    }
});

// Get a category by ID with its associated brands
router.get('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const category = await Category.findOne({ _id: id }).populate(
            'brands',
            '_id name description image'
        );
        if (!category) {
            return res.status(404).json({ message: 'Category not found' });
        }
        res.json(category);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving category', error });
    }
});

// Update a category (including associated brands)
router.put(
    '/:id',
    authCheck,
    validateCategory,
    async (req: ReqWithUser, res: Response) => {
        const { id } = req.params;
        const { name, image, description, brands } = req.body;

        try {
            // Validate if the provided brand IDs exist
            if (brands && brands.length > 0) {
                const existingBrands = await Brand.find({
                    _id: { $in: brands },
                });
                if (existingBrands.length !== brands.length) {
                    return res
                        .status(400)
                        .json({ message: 'One or more brand IDs are invalid' });
                }
            }

            // Update the category
            const updatedCategory = await Category.findOneAndUpdate(
                { _id: id },
                { name, image, description, brands },
                { new: true }
            ).populate('brands', '_id name description image');

            if (!updatedCategory) {
                return res.status(404).json({ message: 'Category not found' });
            }

            res.json(updatedCategory);
        } catch (error) {
            res.status(500).json({ message: 'Error updating category', error });
        }
    }
);

// Delete a category
router.delete(
    '/:id',
    authCheck,
    validateCategory,
    async (req: ReqWithUser, res: Response) => {
        const { id } = req.params;

        try {
            const deletedCategory = await Category.findOneAndDelete({
                _id: id,
            });
            if (!deletedCategory) {
                return res.status(404).json({ message: 'Category not found' });
            }
            res.status(200).json({ message: 'Category deleted' });
        } catch (error) {
            res.status(500).json({ message: 'Error deleting category', error });
        }
    }
);

// Add a new category with associated brands
router.post(
    '/add',
    authCheck,
    validateCategory,
    async (req: ReqWithUser, res: Response) => {
        const { name, image, description, brands } = req.body;

        try {
            // Validate if the provided brand IDs exist
            if (brands && brands.length > 0) {
                const existingBrands = await Brand.find({
                    _id: { $in: brands },
                });
                if (existingBrands.length !== brands.length) {
                    return res
                        .status(400)
                        .json({ message: 'One or more brand IDs are invalid' });
                }
            }

            // Create a new category object
            const newCategory = new Category({
                name,
                image,
                description,
                brands,
            });

            // Save the new category
            const savedCategory = await newCategory.save();
            const populatedCategory = await savedCategory.populate(
                'brands',
                '_id name description image'
            );
            res.status(201).json(populatedCategory);
        } catch (error) {
            res.status(500).json({ message: 'Error adding category', error });
        }
    }
);

export default router;
