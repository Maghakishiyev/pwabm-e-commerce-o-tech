'use client';

import { TCheckoutSteps } from '@/widgets/CheckoutCart';
import React, { useMemo } from 'react';

interface CartItem {
    price: string;
    quantity: number;
}

interface OrderSummaryProps {
    cartItems: CartItem[];
    shippingFee?: number;
    discount?: number;
    onCheckout?: () => void;
    currentStep: TCheckoutSteps;
}

export default function OrderSummary({
    cartItems,
    shippingFee = 0,
    discount = 0,
    onCheckout,
    currentStep,
}: OrderSummaryProps) {
    // 1. Calculate total price of all items
    const itemsTotal = cartItems.reduce(
        (acc, item) => acc + Number(item.price) * item.quantity,
        0
    );

    // 2. Define shipping label
    const shippingLabel =
        shippingFee === 0 ? 'Free' : `$${shippingFee.toFixed(2)}`;

    // 3. Calculate final total
    const finalTotal = itemsTotal + shippingFee - discount;

    // 4. Estimated delivery date = Today + 10 days
    const estimatedDeliveryDate = new Date();
    estimatedDeliveryDate.setDate(estimatedDeliveryDate.getDate() + 10);
    const deliveryString = estimatedDeliveryDate.toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
    });

    const buttonLabel = useMemo(() => {
        switch (currentStep) {
            case 'cart':
                return 'Proceed to Checkout';
            case 'address':
            case 'method':
                return 'Continue';
            case 'payment':
                return 'Confirm Payment';
            default:
                return 'Processing';
        }
    }, [currentStep]);

    return (
        <div className='rounded-lg border p-4 shadow-sm max-w-md w-full max-h-fit'>
            <h2 className='mb-4 text-xl font-bold'>Order Summary</h2>

            <div className='mb-2 flex justify-between'>
                <span>Price</span>
                <span>${itemsTotal.toFixed(2)}</span>
            </div>

            <div className='mb-2 flex justify-between'>
                <span>Discount</span>
                <span>${discount.toFixed(2)}</span>
            </div>

            <div className='mb-2 flex justify-between'>
                <span>Shipping</span>
                <span className='text-blue-600'>{shippingLabel}</span>
            </div>

            <hr className='my-3' />

            <div className='mb-2 flex justify-between'>
                <span className='font-semibold'>TOTAL</span>
                <span className='font-semibold text-lg'>
                    ${finalTotal.toFixed(2)}
                </span>
            </div>

            <div className='mb-4 text-sm text-gray-500'>
                <div>Estimated Delivery by</div>
                <div className='font-semibold'>{deliveryString}</div>
            </div>

            <button
                onClick={onCheckout}
                className='w-full rounded bg-blue-500 py-2 text-white font-semibold hover:bg-blue-600'
            >
                {buttonLabel}
            </button>
        </div>
    );
}
