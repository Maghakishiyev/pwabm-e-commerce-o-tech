'use client';

import React from 'react';

export interface ShippingOption {
    name: string;
    description: string;
    price: string;
    deliveryDate: string;
}

export interface ShippingMethodProps {
    options: ShippingOption[];
    onSelect: (option: ShippingOption) => void;
    selectedOption: ShippingOption | null;
}

export const ShippingMethod: React.FC<ShippingMethodProps> = ({
    options,
    onSelect,
    selectedOption,
}) => {
    return (
        <div className='p-6 border rounded-lg shadow-md'>
            <h2 className='text-lg font-semibold mb-4'>Choose method</h2>
            <div className='space-y-4'>
                {options.map((option) => (
                    <label
                        key={option.name}
                        className={`flex items-center justify-between p-4 border rounded-lg cursor-pointer ${
                            selectedOption?.name === option.name
                                ? 'border-blue-600 bg-blue-50'
                                : 'border-gray-300'
                        }`}
                    >
                        <div className='flex items-center space-x-4'>
                            <input
                                type='radio'
                                name='shipping'
                                className='w-5 h-5 text-blue-600 focus:ring-blue-500 cursor-pointer'
                                checked={selectedOption?.name === option.name}
                                onChange={() => onSelect(option)}
                            />
                            <div className='flex items-center gap-3'>
                                <p
                                    className={`text-sm font-semibold ${
                                        selectedOption?.name === option.name
                                            ? 'text-blue-600'
                                            : 'text-[#1E1E1E]'
                                    }`}
                                >
                                    {option.price}
                                </p>
                                <p className='text-sm text-[#1E1E1E]'>
                                    {option.name}
                                </p>
                            </div>
                        </div>
                        <p className='text-sm font-medium text-[#1E1E1E]'>
                            {option.deliveryDate}
                        </p>
                    </label>
                ))}
            </div>
        </div>
    );
};

export default ShippingMethod;
