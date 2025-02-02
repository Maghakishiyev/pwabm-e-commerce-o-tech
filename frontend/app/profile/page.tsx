"use client"
import React, { useEffect, useState } from 'react';

const ProfilePage: React.FC = () => {
    interface Profile {
        name: string;
        email: string;
        username: string;
    }

    const [profile, setProfile] = useState<Profile | null>(null);

    useEffect(() => {
        // Fetch profile data from an API or other source
        const fetchProfile = async () => {
            const response = await fetch('/api/profile');
            const data = await response.json();
            setProfile(data);
        };

        fetchProfile();
    }, []);

    if (!profile) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{profile.name}</h1>
            <p>Email: {profile.email}</p>
            <p>Username: {profile.username}</p>
            {/* Add more profile fields as needed */}
        </div>
    );
};

export default ProfilePage;