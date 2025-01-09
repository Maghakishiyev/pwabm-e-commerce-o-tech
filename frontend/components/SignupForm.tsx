"use client"
import Image from 'next/image'
import React, { useState, FormEvent } from 'react'
import img from '@/public/images/test/Frame 10.jpg'
import Link from 'next/link'


export default function SignupForm() {
    const [email, setEmail] = useState('')
    const [fullName, setFullName] = useState('')
    const [password, setPassword] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log('Email:', email)
        console.log('Password:', password)
    }

    return (
        <div className="flex min-h-screen items-center justify-center">
            {/* Wrapper for form + image */}
            <div className="flex w-full max-w-6xl flex-col-reverse items-center justify-between gap-8 p-6 md:flex-row">

                <form
                    onSubmit={handleSubmit}
                    className="w-full md:w-1/2 p-8"
                >
                    <h1 className="mb-6 text-center text-3xl font-bold text-gray-800">Create your account</h1>

                    <label htmlFor="email" className="mb-2 block font-medium text-gray-700">
                        Full Name:
                    </label>
                    <input
                        type="text"
                        id="fullName"
                        className="mb-4 w-full rounded border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        required
                    />
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

                    <label htmlFor="email" className="mb-2 block font-medium text-gray-700">
                        Phone Number:
                    </label>
                    <input
                        type="number"
                        id="phoneNumber"
                        className="mb-4 w-full rounded border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
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
                        <span className="text-gray-700">Have an account? </span>
                        <Link href="/signin" className="text-blue-500 hover:underline">Sign in now</Link>
                    </div>
                </form>

                <div className="relative w-full  md:w-1/2">
                    <Image
                        src={img}
                        alt="Login"
                        layout="responsive"
                        objectFit="cover"
                    // width={800}
                    // height={600}
                    />
                </div>
            </div>
        </div >
    )
}