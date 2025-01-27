'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

const Error: React.FC = () => {
    const router = useRouter();

    return (
        <div className='flex flex-col items-center justify-center w-full'>
            <div className='p-6 rounded-lg shadow-lg bg-white max-w-md text-center border border-[#E2E2E2] min-h-[320px]'>
                <div className='w-[120px] h-[120px] mx-auto mb-6 flex items-center justify-center rounded-full bg-[#FF4B4B]'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={2}
                        stroke='currentColor'
                        className='w-[80px] h-[80px] text-white'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M18.364 5.636l-12.728 12.728M5.636 5.636l12.728 12.728'
                        />
                    </svg>
                </div>
                <h1 className='text-xl font-semibold text-gray-800 mb-4'>
                    Oops! Something went wrong
                </h1>
                <p className='text-sm text-gray-600 mb-20'>
                    There was an issue with your order. Please try again or
                    contact support.
                </p>
                <button
                    onClick={() => router.refresh()}
                    className='w-full px-6 py-6 border border-red-600 text-red-600 rounded-lg hover:bg-red-600 hover:text-white transition'
                >
                    Retry
                </button>
            </div>
        </div>
    );
};

export default Error;
