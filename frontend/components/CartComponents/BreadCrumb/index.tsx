'use client';

import { TCheckoutSteps } from '@/widgets/CheckoutCart';
import React from 'react';

interface BreadcrumbProps {
    steps: { step: string; onClick: () => void }[];
    currentStep: TCheckoutSteps;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ steps, currentStep }) => {
    return (
        <nav className='flex items-center space-x-2 text-sm text-gray-600 mb-6'>
            {steps.map(({ onClick, step }, index) => (
                <button
                    onClick={onClick}
                    key={step}
                    className='flex items-center'
                >
                    <span
                        className={`${
                            currentStep?.toLowerCase() === step?.toLowerCase()
                                ? 'font-semibold text-gray-900'
                                : 'text-gray-500'
                        }`}
                    >
                        {step}
                    </span>
                    {index < steps.length - 1 && (
                        <span className='mx-2 text-gray-400'>/</span>
                    )}
                </button>
            ))}
        </nav>
    );
};

export default Breadcrumb;
