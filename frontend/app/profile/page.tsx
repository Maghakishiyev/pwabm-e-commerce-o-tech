'use client';
import { userStore } from '@/store/userStore';
import withUserAuthentication from '@/utils/withUserAuthentication';
import React from 'react';
import { useSnapshot } from 'valtio';

const ProfilePage: React.FC = () => {
    const { user } = useSnapshot(userStore);

    if (!user?._id) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{user.email}</h1>
            <p>Email: {user.email}</p>
            <p>Username: {user.fullName}</p>
            {/* Add more profile fields as needed */}
        </div>
    );
};

export default withUserAuthentication(ProfilePage);
