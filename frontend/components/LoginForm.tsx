"use client"
import Image from 'next/image'
import React, { useState, FormEvent } from 'react'
import img from '@/public/images/test/Frame 10.jpg'


export default function LoginForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log('Email:', email)
        console.log('Password:', password)
    }

    return (
        <div className="flex min-h-screen items-center  bg-gradient-to-r p-6">
            <div className="flex w-full max-w-4xl rounded-lg overflow-hidden">
               
                <div className="relative hidden md:flex w-1/2 h-auto">
                    <Image
                        src={img} 
                        alt="Login"
                        layout="intrinsic" 
                        width={800} 
                        height={600} 
                    />
                </div>
                <form
                    onSubmit={handleSubmit}
                    className="w-full md:w-1/2 p-8"
                >
                    <h1 className="mb-6 text-center text-3xl font-bold text-gray-800">Login</h1>

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
                        className="w-full rounded bg-blue-500 py-2 text-white font-bold hover:bg-blue-700 transition duration-300"
                    >
                        Login
                    </button>

                    <div className="mt-4 text-center">
                        <a href="#" className="text-blue-500 hover:underline">Forgot your password?</a>
                    </div>
                </form>
            </div>
        </div>
    )
}