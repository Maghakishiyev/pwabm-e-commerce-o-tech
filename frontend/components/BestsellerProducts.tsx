import React from 'react';
import { ItemViewCard } from './ItemViewCard';

const BestsellerProducts = () => {
    const products = [
        {
            _id: "1",
            availableColors: ['#5B5B5B', '#AB83FF', '#6D9FFF', '#FF6363'],
            name: 'Apple iPhone 14 Pro Max',
            description: '128GB Deep Purple (MQ9T3RX/A)',
            itemImageUrl: '/images/test/iphone14.png',
            price: '1699,99$',
            category_id: "smartphones",
            brand_id: "apple",
            detail_description: "The latest iPhone with advanced features and sleek design.",
        },
        {
            _id: "2",
            availableColors: ['#5B5B5B', '#AB83FF', '#6D9FFF', '#FF6363'],
            name: 'Apple iPhone 14 Pro Max',
            description: '128GB Deep Purple (MQ9T3RX/A)',
            itemImageUrl: '/images/test/iphone14.png',
            price: '1699,99$',
        },
        {
            _id: "3",
            availableColors: ['#5B5B5B', '#AB83FF', '#6D9FFF', '#FF6363'],
            name: 'Apple iPhone 14 Pro Max',
            description: '128GB Deep Purple (MQ9T3RX/A)',
            itemImageUrl: '/images/test/iphone14.png',
            price: '1699,99$',
        },
        {
            _id: "4",
            availableColors: ['#5B5B5B', '#AB83FF', '#6D9FFF', '#FF6363'],
            name: 'Apple iPhone 14 Pro Max',
            description: '128GB Deep Purple (MQ9T3RX/A)',
            itemImageUrl: '/images/test/iphone14.png',
            price: '1699,99$',
        },
        {
            _id: "5",
            availableColors: ['#5B5B5B', '#AB83FF', '#6D9FFF', '#FF6363'],
            name: 'Apple iPhone 14 Pro Max',
            description: '128GB Deep Purple (MQ9T3RX/A)',
            itemImageUrl: '/images/test/iphone14.png',
            price: '1699,99$',
        },
        {
            _id: "6",
            availableColors: ['#5B5B5B', '#AB83FF', '#6D9FFF', '#FF6363'],
            name: 'Apple iPhone 14 Pro Max',
            description: '128GB Deep Purple (MQ9T3RX/A)',
            itemImageUrl: '/images/test/iphone14.png',
            price: '1699,99$',
        },
        {
            _id: "7",
            availableColors: ['#5B5B5B', '#AB83FF', '#6D9FFF', '#FF6363'],
            name: 'Apple iPhone 14 Pro Max',
            description: '128GB Deep Purple (MQ9T3RX/A)',
            itemImageUrl: '/images/test/iphone14.png',
            price: '1699,99$',
        },
    ];

    return (
        <>
            <h2 className="text-[26px] font-bold text-left mt-[100px] mb-10">Bestseller Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.map(product => (

                    <ItemViewCard
                        key={product._id}
                        _id={product._id}
                        available_colors={product.availableColors}
                        price={product.price}
                        category_id={product.category_id ?? ''}
                        brand_id={product.brand_id ?? ''}
                        detail_description={product.detail_description ?? ''}
                        description={product.description}
                        product_image_url={product.itemImageUrl}
                        name={product.name}
                    />

                ))}
            </div>
        </>
    );
}

export default BestsellerProducts;