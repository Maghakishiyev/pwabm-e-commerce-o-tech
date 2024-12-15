import { body, validationResult } from 'express-validator';
import { Request, Response } from 'express';
import mongoose from 'mongoose';

export const validateBrand = [
    // Validate the brand's name
    body('name').isString().notEmpty().withMessage('Name is required'),

    // Validate the brand's image URL
    body('image').optional().isURL().withMessage('Image must be a valid URL'),

    // Validate the brand's description
    body('description').optional().isString(),

    // Validate the brand's associated categories
    body('categories')
        .optional()
        .isArray()
        .withMessage('Categories must be an array of IDs')
        .custom((categories) => {
            if (!categories || categories.length === 0) return true; // Allow empty array
            for (const id of categories) {
                if (!mongoose.Types.ObjectId.isValid(id)) {
                    throw new Error(`Invalid category ID: ${id}`);
                }
            }
            return true;
        }),

    // Handle validation errors
    (req: Request, res: Response, next: Function) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    },
];
