import mongoose, { Schema } from 'mongoose';
import { ICategory } from './interface';

const categorySchema: Schema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String },
    brands: [{ type: Schema.Types.ObjectId, ref: 'Brand' }],
});

export const Category = mongoose.model<ICategory>('Category', categorySchema);
