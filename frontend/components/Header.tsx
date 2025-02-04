'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Container from './Container';

interface IHeader {
    isSignedIn: boolean;
}

const Header: React.FC<IHeader> = ({ isSignedIn }) => {
    const router = useRouter();

    const handleCartOrProfileClick = (path: string) => {
        if (isSignedIn) {
            router.push(path);
        } else {
            router.push('/signin');
        }
    };

    return (
        <Container className='flex items-center justify-between px-8 py-4 bg-white border-gray-200'>
            {/* Logo */}
            <div
                className='flex items-center text-2xl font-bold cursor-pointer text-gray-900'
                onClick={() => router.push('/')}
            >
                <span className='logo-o'>O</span>
                <span className='logo-dash'>-</span>
                <span className='logo-tech'>Tech</span>
            </div>

            {/* Navigation Links */}
            <div className='flex items-center gap-8'>
                <Link
                    href='/'
                    className='text-indigo-600 font-medium hover:text-indigo-500 transition-colors'
                >
                    Home
                </Link>
                <Link
                    href='#footer'
                    className='text-gray-900 font-medium hover:text-indigo-500 transition-colors'
                >
                    Contact
                </Link>
                <Link
                    href='/products'
                    className='text-gray-900 font-medium hover:text-indigo-500 transition-colors'
                >
                    Products
                </Link>
            </div>

            {/* Right Icons */}
            <div className='flex items-center gap-4'>
                <Link
                    href={isSignedIn ? '/cart' : '/signin'}
                    className='p-2 text-gray-900 hover:text-indigo-500 transition-colors'
                >
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-6 w-6'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        strokeWidth='2'
                    >
                        <circle cx='9' cy='21' r='1' />
                        <circle cx='20' cy='21' r='1' />
                        <path d='M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6' />
                    </svg>
                </Link>
                <Link
                    href={isSignedIn ? '/profile' : '/signin'}
                    className='p-2 text-gray-900 hover:text-indigo-500 transition-colors'
                    onClick={() => handleCartOrProfileClick('/profile')}
                >
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-6 w-6'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        strokeWidth='2'
                    >
                        <path d='M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2' />
                        <circle cx='12' cy='7' r='4' />
                    </svg>
                </Link>
            </div>
        </Container>
    );
};

export default Header;
