// pages/login.tsx
import React from 'react'
import Head from 'next/head'
import AuthLayout from './layout'
import { LoginForm } from '@/components'

export default function LoginPage() {
    return (
        <>
            <Head>
                <title>Login Page</title>
            </Head>
            <AuthLayout>
                <LoginForm />
            </AuthLayout>
        </>
    )
}
