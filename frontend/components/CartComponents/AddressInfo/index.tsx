'use client';

import React from 'react';

interface AddressInfoProps {
    name: string;
    phone: string;
    address: string;
    onEdit: () => void;
}

const AddressInfo: React.FC<AddressInfoProps> = ({
    name,
    phone,
    address,
    onEdit,
}) => {
    return (
        <div className='p-6 border rounded-lg shadow-md w-full flex flex-col items-start justify-start gap-6'>
            <h2 className='text-2xl font-semibold w-full text-[#1E1E1E] flex items-center justify-between gap-4'>
                Address Info
                <button
                    onClick={onEdit}
                    className='w-fit whitespace-nowrap px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700 transition'
                >
                    Edit Address
                </button>
            </h2>
            <div className='flex flex-col gap-4 w-full'>
                <p className='text-xl text-[#1E1E1E] w-full'>{name}</p>
                <p className='text-lg text-[#1E1E1E]'>
                    <span className='font-medium text-gray-800'>Phone:</span>{' '}
                    {phone}
                </p>
                <p className='text-lg text-[#1E1E1E]'>
                    <span className='font-medium text-gray-800'>Address:</span>{' '}
                    {address}
                </p>
            </div>
        </div>
    );
};

export default AddressInfo;
