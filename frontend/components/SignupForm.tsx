"use client";
import Image from "next/image";
import React, { useState, FormEvent } from "react";
import img from "@/public/images/test/Frame 10.jpg";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";


export default function SignupForm() {
    const [email, setEmail] = useState("");
    const [fullName, setFullName] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const router = useRouter();
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:8080/api/auth/signup", {
                email,
                fullName,
                password,
                phoneNumber,
            });

            // Handle success response
            setSuccess(response.data.message);
            setError(""); // Clear any previous error
            


            setTimeout(() => {
                router.push('/'); // Replace '/profile' with your desired route
            }, 1000);
        } catch (error: unknown) {
            // Handle error response
            if (axios.isAxiosError(error)) {
                setError(error.response?.data?.message || "An error occurred");
            } else {
                setError("An error occurred");
            }
            setSuccess("");
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center">
            <div className="flex w-full max-w-6xl flex-col-reverse items-center justify-between gap-8 p-6 md:flex-row">
                <form
                    onSubmit={handleSubmit}
                    className="w-full md:w-1/2 p-8"
                >
                    <h1 className="mb-6 text-center text-3xl font-bold text-gray-800">Create your account</h1>

                    {error && <p className="mb-4 text-center text-red-500">{error}</p>}
                    {success && <p className="mb-4 text-center text-green-500">{success}</p>}

                    <label htmlFor="fullName" className="mb-2 block font-medium text-gray-700">
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

                    <label htmlFor="phoneNumber" className="mb-2 block font-medium text-gray-700">
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
                        Signup
                    </button>
                    <div className="mt-4 text-center">
                        <span className="text-gray-700">Have an account? </span>
                        <Link href="/signin" className="text-blue-500 hover:underline">Sign in now</Link>
                    </div>
                </form>

                <div className="relative w-full md:w-1/2">
                    <Image
                        src={img}
                        alt="Login"
                        layout="responsive"
                        objectFit="cover"
                    />
                </div>
            </div>
        </div>
    );
}
