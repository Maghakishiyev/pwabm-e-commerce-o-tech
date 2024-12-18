import mongoose, { Schema } from 'mongoose';
import { IShippingMethod } from './interface';

const shippingMethodSchema: Schema = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true, min: 0 },
    description: { type: String, required: true },
});

export const ShippingMethod = mongoose.model<IShippingMethod>(
    'ShippingMethod',
    shippingMethodSchema
);
