import { Document, Schema } from 'mongoose';

export interface IBrand extends Document {
    name: string;
    description: string;
    image?: string;
    categories: Schema.Types.ObjectId[];
}
