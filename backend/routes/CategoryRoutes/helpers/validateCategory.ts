import { body, validationResult } from 'express-validator';
import { Request, Response } from 'express';
import mongoose from 'mongoose';

export const validateCategory = [
    body('name').isString().notEmpty().withMessage('Name is required'),
    body('image').optional().isURL().withMessage('Image must be a valid URL'),
    body('description').optional().isString(),
    body('brands')
        .optional()
        .isArray()
        .withMessage('Brands must be an array of IDs')
        .custom((brands) => {
            if (!brands || brands.length === 0) return true;
            for (const id of brands) {
                if (!mongoose.Types.ObjectId.isValid(id)) {
                    throw new Error(`Invalid brand ID: ${id}`);
                }
            }
            return true;
        }),
    (req: Request, res: Response, next: Function) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    },
];
