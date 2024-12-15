import mongoose, { Schema } from 'mongoose';
import { IBrand } from './interface';

const brandSchema: Schema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String },
    categories: [{ type: Schema.Types.ObjectId, ref: 'Category' }],
});

export const Brand = mongoose.model<IBrand>('Brand', brandSchema);
