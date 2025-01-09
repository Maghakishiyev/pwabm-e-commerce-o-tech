import React from 'react'
import Head from 'next/head'
import AuthLayout from './layout'
import { SignupForm } from '@/components'

export default function SignupPage() {
    return (
        <>
            <Head>
                <title>Signup Page</title>
            </Head>
            <AuthLayout>
                <SignupForm />
            </AuthLayout>
        </>
    )
}
