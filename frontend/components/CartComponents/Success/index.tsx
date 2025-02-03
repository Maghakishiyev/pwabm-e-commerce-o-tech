'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

const Success: React.FC = () => {
    const router = useRouter();

    return (
        <div className='flex flex-col items-center justify-center w-full'>
            <div className='p-6 rounded-lg shadow-lg bg-white max-w-md text-center border border-[#E2E2E2] min-h-[320px]'>
                <div className='w-[120px] h-[120px] mx-auto mb-6 flex items-center justify-center rounded-full bg-[#3192EC]'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={2}
                        stroke='currentColor'
                        className='w-[120px] h-[120px] text-white'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M5 13l4 4L19 7'
                        />
                    </svg>
                </div>
                <h1 className='text-xl font-semibold text-gray-800 mb-4'>
                    Your order has been successfully completed
                </h1>
                <p className='text-sm text-gray-600 mb-20'>
                    We will get back to you regarding delivery and other issues.
                </p>
                <button
                    onClick={() => router.push('/orders')}
                    className='w-full px-6 py-6 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition'
                >
                    View Order
                </button>
            </div>
        </div>
    );
};

export default Success;
