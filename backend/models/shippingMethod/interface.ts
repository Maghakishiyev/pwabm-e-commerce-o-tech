import { Document } from 'mongoose';

export interface IShippingMethod extends Document {
    name: string;
    price: number;
    description: string;
}
