'use client';

import React, { useState, useMemo, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import AddressInfo from '@/components/CartComponents/AddressInfo';
import Breadcrumb from '@/components/CartComponents/BreadCrumb';
import Error from '@/components/CartComponents/Error';
import OrderSummary from '@/components/CartComponents/OrderSummary';
import Payment from '@/components/CartComponents/Payment';
import ShippingMethod, {
    ShippingOption,
} from '@/components/CartComponents/ShippingMethod';
import Success from '@/components/CartComponents/Success';
import CartItem from '@/components/CartItem';

interface CartProduct {
    productName: string;
    color: string;
    price: string;
    productImage: string;
    quantity: number;
}

const initialCart: CartProduct[] = [
    {
        productName: 'Apple iPhone 14 Pro Max',
        color: 'Dark Purple',
        price: '1649.99',
        productImage: '/images/test/iphone14.png',
        quantity: 1,
    },
    {
        productName: 'Beats Black HeadPhone',
        color: 'Black',
        price: '169.99',
        productImage: '/images/test/smartwatches.png',
        quantity: 1,
    },
];

const shippingOptions: ShippingOption[] = [
    {
        name: 'Free Standard Shipping',
        description: 'Delivered in 5-7 business days',
        price: '$0.00',
        deliveryDate: 'Feb 01, 2025',
    },
    {
        name: 'Express Shipping',
        description: 'Delivered in 2-3 business days',
        price: '$10.00',
        deliveryDate: 'Jan 30, 2025',
    },
    {
        name: 'Next-Day Delivery',
        description: 'Delivered by tomorrow',
        price: '$25.00',
        deliveryDate: 'Jan 27, 2025',
    },
    {
        name: 'Same-Day Delivery',
        description: 'Delivered by end of the day',
        price: '$40.00',
        deliveryDate: 'Jan 26, 2025',
    },
];

export type TCheckoutSteps =
    | 'cart'
    | 'address'
    | 'method'
    | 'payment'
    | 'success'
    | 'error';

const CheckoutCart: React.FC = () => {
    const [currentStep, setCurrentStep] = useState<TCheckoutSteps>('cart');
    const [cartItems, setCartItems] = useState<CartProduct[]>(initialCart);
    const [selectedShipping, setSelectedShipping] =
        useState<ShippingOption | null>(shippingOptions[0]);
    const [paymentData, setPaymentData] = useState({
        cardNumber: '',
        nameOnCard: '',
        expiryDate: '',
        ccv: '',
    });

    const router = useRouter();

    const handlePaymentChange = (field: string, value: string) => {
        setPaymentData((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    const handlePaymentSubmit = () => {
        console.log('Payment Data:', paymentData);
        setCurrentStep('success');
    };

    const handleRemoveItem = (index: number) => {
        const updated = [...cartItems];
        updated.splice(index, 1);
        setCartItems(updated);
    };

    const handleIncrease = (index: number) => {
        const updated = [...cartItems];
        updated[index].quantity += 1;
        setCartItems(updated);
    };

    const handleDecrease = (index: number) => {
        const updated = [...cartItems];
        if (updated[index].quantity > 1) {
            updated[index].quantity -= 1;
            setCartItems(updated);
        }
    };

    const summaryData = cartItems.map((item) => ({
        price: item.price,
        quantity: item.quantity,
    }));

    const handleCheckout = useCallback(() => {
        setCurrentStep((prev) => {
            switch (prev) {
                case 'cart':
                    return 'address';
                case 'address':
                    return 'method';
                case 'method':
                    return 'payment';
                case 'payment':
                    return 'success';
                default:
                    return 'cart';
            }
        });
    }, []);

    const renderCurrentStep = useMemo(() => {
        switch (currentStep) {
            case 'cart':
                return (
                    <div className='flex-1'>
                        <div className='flex items-center justify-between mb-6'>
                            <h1 className='mb-1 text-2xl font-bold'>Cart</h1>
                            <div className='mb-4 text-sm text-gray-500'>
                                {cartItems.length}{' '}
                                {cartItems.length === 1 ? 'ITEM' : 'ITEMS'}
                            </div>
                        </div>

                        {cartItems.map((item, i) => (
                            <CartItem
                                key={i}
                                productName={item.productName}
                                color={item.color}
                                price={item.price}
                                productImage={item.productImage}
                                quantity={item.quantity}
                                onIncrease={() => handleIncrease(i)}
                                onDecrease={() => handleDecrease(i)}
                                onRemove={() => handleRemoveItem(i)}
                            />
                        ))}
                    </div>
                );
            case 'address':
                return (
                    <AddressInfo
                        name='Huzefa Bagwala'
                        phone='(936) 361-0310'
                        address='1131 Dusty Townline, Jacksonville, TX 40322'
                        onEdit={() => router.push('/profile')}
                    />
                );
            case 'method':
                return (
                    <ShippingMethod
                        options={shippingOptions}
                        onSelect={(option) => setSelectedShipping(option)}
                        selectedOption={selectedShipping}
                    />
                );
            case 'payment':
                return (
                    <Payment
                        cardNumber={paymentData.cardNumber}
                        nameOnCard={paymentData.nameOnCard}
                        expiryDate={paymentData.expiryDate}
                        ccv={paymentData.ccv}
                        onChange={handlePaymentChange}
                    />
                );
            default:
                return null;
        }
    }, [currentStep, cartItems, router, selectedShipping, paymentData]);

    return (
        <div className='mx-auto flex max-w-6xl flex-col gap-10 md:flex-row'>
            {currentStep === 'success' ? (
                <Success />
            ) : currentStep === 'error' ? (
                <Error />
            ) : (
                <>
                    <div className='w-full'>
                        <Breadcrumb
                            steps={[
                                {
                                    step: 'Cart',
                                    onClick: () => setCurrentStep('cart'),
                                },
                                {
                                    step: 'Address',
                                    onClick: () => setCurrentStep('address'),
                                },
                                {
                                    step: 'Method',
                                    onClick: () => setCurrentStep('method'),
                                },
                                {
                                    step: 'Payment',
                                    onClick: () => setCurrentStep('payment'),
                                },
                            ]}
                            currentStep={currentStep}
                        />
                        {renderCurrentStep}
                    </div>
                    <OrderSummary
                        cartItems={summaryData}
                        shippingFee={
                            selectedShipping
                                ? parseFloat(selectedShipping.price.slice(1))
                                : 0
                        }
                        discount={31.9}
                        onCheckout={handleCheckout}
                        currentStep={currentStep}
                    />
                </>
            )}
        </div>
    );
};

export default CheckoutCart;
