import express, { Application, Request, Response } from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import { dbConnection } from './db';
import authRoutes from '@/routes/AuthRoutes';
import categoryRoutes from '@/routes/CategoryRoutes';
import brandRoutes from '@/routes/BrandRoutes';
import productRoutes from '@/routes/ProductRoutes';
import shippingMethodRoutes from '@/routes/ShippingMethodRoutes';
import orderRoutes from '@/routes/OrderRoutes';
import cartRoutes from '@/routes/CartRoutes';

dotenv.config();

const PORT = process.env.PORT;

if (!PORT) {
    console.error('No port value specified in .env...');
    process.exit(1);
}

const app: Application = express();

dbConnection().catch((error) => {
    console.error('Failed to connect to MongoDB', error);
    process.exit(1);
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());

app.get('/', (req: Request, res: Response) => {
    res.json({ message: 'Hello from Express and TypeScript!' + PORT });
});

app.use('/api/auth', authRoutes);
app.use('/api/category', categoryRoutes);
app.use('/api/brand', brandRoutes);
app.use('/api/products', productRoutes);
app.use('/api/shipping-methods', shippingMethodRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/cart', cartRoutes);

app.listen(parseInt(PORT, 10), () => {
    console.log(`Server is listening on port ${PORT}`);
});

export default app;
