'use client';
import { proxy } from 'valtio';

interface User {
    _id?: string;
    email?: string;
    fullName?: string;
    token?: string;
    firstName?: string;
    lastName?: string;
    phoneNumber?: string;
    birthday?: string;
    address?: string;
    idCardaddress?: string;
    apartmentaddress?: string;
    cityaddress?: string;
    countryaddress?: string;
}

export const userStore = proxy<{ user: User | null }>({
    user: null, // Initially, no user is logged in
});

export const setUser = (user: User) => {
    userStore.user = user;
    localStorage.setItem('user', JSON.stringify(user)); // Store user session in localStorage
};

export const loadUser = () => {
    if (typeof window !== 'undefined') {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            userStore.user = JSON.parse(storedUser);
        }
    }
};

export const logoutUser = () => {
    userStore.user = null;
    localStorage.removeItem('user');
};
