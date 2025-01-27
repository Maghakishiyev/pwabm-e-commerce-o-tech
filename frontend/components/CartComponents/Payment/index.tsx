'use client';

import React from 'react';

export interface PaymentProps {
    cardNumber: string;
    nameOnCard: string;
    expiryDate: string;
    ccv: string;
    onChange: (field: string, value: string) => void;
}

const Payment: React.FC<PaymentProps> = ({
    cardNumber,
    nameOnCard,
    expiryDate,
    ccv,
    onChange,
}) => {
    return (
        <div className='p-6 border rounded-md shadow-md'>
            <h2 className='text-lg font-semibold mb-4'>Payment</h2>
            <div className='space-y-4'>
                <div className='grid grid-cols-2 gap-4'>
                    <div>
                        <label
                            htmlFor='cardNumber'
                            className='block text-sm text-gray-600 mb-1'
                        >
                            Card Number
                        </label>
                        <input
                            id='cardNumber'
                            type='text'
                            className='w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-600 focus:outline-none'
                            placeholder='Card Number'
                            value={cardNumber}
                            onChange={(e) =>
                                onChange('cardNumber', e.target.value)
                            }
                        />
                    </div>
                    <div>
                        <label
                            htmlFor='expiryDate'
                            className='block text-sm text-gray-600 mb-1'
                        >
                            MM/YY
                        </label>
                        <input
                            id='expiryDate'
                            type='text'
                            className='w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-600 focus:outline-none'
                            placeholder='MM/YY'
                            value={expiryDate}
                            onChange={(e) =>
                                onChange('expiryDate', e.target.value)
                            }
                        />
                    </div>
                </div>
                <div className='grid grid-cols-2 gap-4'>
                    <div>
                        <label
                            htmlFor='nameOnCard'
                            className='block text-sm text-gray-600 mb-1'
                        >
                            Full Name on card
                        </label>
                        <input
                            id='nameOnCard'
                            type='text'
                            className='w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-600 focus:outline-none'
                            placeholder='Full Name on card'
                            value={nameOnCard}
                            onChange={(e) =>
                                onChange('nameOnCard', e.target.value)
                            }
                        />
                    </div>
                    <div>
                        <label
                            htmlFor='ccv'
                            className='block text-sm text-gray-600 mb-1'
                        >
                            CCV
                        </label>
                        <input
                            id='ccv'
                            type='text'
                            className='w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-600 focus:outline-none'
                            placeholder='CCV'
                            value={ccv}
                            onChange={(e) => onChange('ccv', e.target.value)}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;
