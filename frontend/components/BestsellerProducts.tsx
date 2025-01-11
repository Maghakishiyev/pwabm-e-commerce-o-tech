import React from 'react';
import { ItemViewCard } from './ItemViewCard';

const BestsellerProducts = () => {
    const products = [
        {
            id: '1',
            availableColors: ['#5B5B5B', '#AB83FF', '#6D9FFF', '#FF6363'],
            name: 'Apple iPhone 14 Pro Max',
            description: '128GB Deep Purple (MQ9T3RX/A)',
            itemImageUrl: '/images/test/iphone14.png',
            price: '1699,99$',
        },
        {
            id: '2',
            availableColors: ['#5B5B5B', '#AB83FF', '#6D9FFF', '#FF6363'],
            name: 'Apple iPhone 14 Pro Max',
            description: '128GB Deep Purple (MQ9T3RX/A)',
            itemImageUrl: '/images/test/iphone14.png',
            price: '1699,99$',
        },
        {
            id: '3',
            availableColors: ['#5B5B5B', '#AB83FF', '#6D9FFF', '#FF6363'],
            name: 'Apple iPhone 14 Pro Max',
            description: '128GB Deep Purple (MQ9T3RX/A)',
            itemImageUrl: '/images/test/iphone14.png',
            price: '1699,99$',
        },
        {
            id: '4',
            availableColors: ['#5B5B5B', '#AB83FF', '#6D9FFF', '#FF6363'],
            name: 'Apple iPhone 14 Pro Max',
            description: '128GB Deep Purple (MQ9T3RX/A)',
            itemImageUrl: '/images/test/iphone14.png',
            price: '1699,99$',
        },
        {
            id: '5',
            availableColors: ['#5B5B5B', '#AB83FF', '#6D9FFF', '#FF6363'],
            name: 'Apple iPhone 14 Pro Max',
            description: '128GB Deep Purple (MQ9T3RX/A)',
            itemImageUrl: '/images/test/iphone14.png',
            price: '1699,99$',
        },
        {
            id: '6',
            availableColors: ['#5B5B5B', '#AB83FF', '#6D9FFF', '#FF6363'],
            name: 'Apple iPhone 14 Pro Max',
            description: '128GB Deep Purple (MQ9T3RX/A)',
            itemImageUrl: '/images/test/iphone14.png',
            price: '1699,99$',
        },
        {
            id: '7',
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
                        key={product.id}
                        id={product.id}
                        availableColors={product.availableColors}
                        name={product.name}
                        description={product.description}
                        itemImageUrl={product.itemImageUrl}
                        price={product.price}
                    />
                ))}
            </div>
        </>
    );
}

export default BestsellerProducts;