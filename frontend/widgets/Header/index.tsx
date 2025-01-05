'use client'

import React from 'react';
import { useRouter } from 'next/navigation';
import './header.css'; // Ensure this path matches your project structure.

interface IHeader {
  isSignedIn: boolean; // Indicates if the user is signed in
}

const Header: React.FC<IHeader> = ({ isSignedIn }) => {
  const router = useRouter();

  const handleCartOrProfileClick = (path: string) => {
    if (isSignedIn) {
      router.push(path); // Go to the page if the user is signed in
    } else {
      router.push('/signin'); // Redirect to the sign-in page if not signed in
    }
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo" onClick={() => router.push('/')}>
        O-Tech
      </div>

      {/* Navigation Links */}
      <ul className="navbar-links">
        <li>
          <a href="#footer">Contact</a>
        </li>
        <li onClick={() => router.push('/categories')}>Categories</li>
        <li onClick={() => handleCartOrProfileClick('/cart')}>
          <i className="icon-cart"></i>
        </li>
        <li onClick={() => handleCartOrProfileClick('/profile')}>
          <i className="icon-profile"></i>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
