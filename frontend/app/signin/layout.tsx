import React, { FC, ReactNode } from 'react'

interface AuthLayoutProps {
    children: ReactNode
}

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100">
            {/* Form Section */}
            <div className="w-full flex items-center justify-center p-6">
                {children}
            </div>

        </div>
    )
}

export default AuthLayout
