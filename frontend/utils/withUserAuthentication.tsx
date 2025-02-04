'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { userStore, loadUser } from '@/store/userStore';

const withUserAuthentication = (WrappedComponent: React.FC) => {
    return function AuthComponent(props: any) {
        const router = useRouter();
        const [isLoading, setIsLoading] = useState(true); // Track loading state

        useEffect(() => {
            loadUser(); // Load user from localStorage

            // Delay redirection until userStore is updated
            setTimeout(() => {
                if (!userStore.user) {
                    router.replace('/signin'); // Redirect if no user is found
                }
                setIsLoading(false);
            }, 300); // Allow state update to complete
        }, [router]); // Run only once when the component mounts

        if (isLoading) {
            return (
                <div className='flex h-screen items-center justify-center text-lg'>
                    Loading...
                </div>
            ); // Prevent content flash
        }

        return <WrappedComponent {...props} />;
    };
};

export default withUserAuthentication;
