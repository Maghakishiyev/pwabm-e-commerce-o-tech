import React from 'react';
import './globals.css'; // Main global styles
import { Footer, Header } from '@/components';

const isSignedIn = false; // Replace this with your authentication logic

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en'>
            <body>
                {/* Add Header */}
                <Header isSignedIn={isSignedIn} />

                {/* Main Content */}
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
