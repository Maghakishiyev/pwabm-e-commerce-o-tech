import { Document, Schema } from 'mongoose';

export interface ICategory extends Document {
    name: string;
    description: string;
    image?: string;
    brands: Schema.Types.ObjectId[];
}
