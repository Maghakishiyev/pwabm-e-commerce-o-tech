import { body, validationResult } from 'express-validator';
import { Request, Response } from 'express';

export const validateShippingMethod = [
    body('name').isString().notEmpty().withMessage('Name is required'),
    body('price')
        .isNumeric()
        .withMessage('Price must be a valid number')
        .custom((value) => value >= 0)
        .withMessage('Price must be a non-negative number'),
    body('description')
        .isString()
        .notEmpty()
        .withMessage('Description is required'),

    (req: Request, res: Response, next: Function) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    },
];
