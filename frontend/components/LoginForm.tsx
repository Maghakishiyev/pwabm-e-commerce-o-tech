"use client"
import Image from 'next/image'
import React, { useState, FormEvent } from 'react'
import img from '@/public/images/test/Frame 10.jpg'
import Link from 'next/link'

export default function LoginForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log('Email:', email)
        console.log('Password:', password)
    }

    return (
        <div className="flex min-h-screen flex-col items-center bg-gradient-to-r p-6 md:flex-row">
            {/* Container for Image & Form - flex on md and above, stacked on small screens */}
            <div className="w-full max-w-4xl rounded-lg overflow-hidden md:flex md:flex-row">

                {/* Image container */}
                <div className="relative w-full h-auto md:w-1/2">
                    <Image
                        src={img}
                        alt="Login"
                        // Ensure you use correct layout props depending on your Next/Image version
                        layout="responsive"
                        width={800}
                        height={600}
                        className="h-full w-full object-cover"
                    />
                </div>

                {/* Form container */}
                <form onSubmit={handleSubmit} className="w-full p-8 md:w-1/2">
                    <h1 className="mb-6 text-center text-3xl font-bold text-gray-800">
                        Login to Your Account
                    </h1>

                    <label htmlFor="email" className="mb-2 block font-medium text-gray-700">
                        Email:
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="mb-4 w-full rounded border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <label htmlFor="password" className="mb-2 block font-medium text-gray-700">
                        Password:
                    </label>
                    <input
                        type="password"
                        id="password"
                        className="mb-4 w-full rounded border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <button
                        type="submit"
                        className="w-full rounded bg-blue-500 py-2 font-bold text-white transition duration-300 hover:bg-blue-700"
                    >
                        Login
                    </button>

                    <div className="mt-4 text-center">
                        <span className="text-gray-700">Don’t have an account? </span>
                        <Link href="/signup" className="text-blue-500 hover:underline">
                            Sign up now
                        </Link>
                    </div>
                </form>

            </div>
        </div>
    )
}
