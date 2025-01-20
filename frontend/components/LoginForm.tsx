"use client";
import React, { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import img from "@/public/images/test/Frame 10.jpg";
import Link from "next/link";
import axios from "axios"; // Import Axios

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const router = useRouter();

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:8080/api/auth/signin", {
                email,
                password,
            });

            // Handle success response
            setSuccess(response.data.message);
            setError(""); // Clear any previous error

            setTimeout(() => {
                router.push('/'); // Replace '/profile' with your desired route
            }, 1000);
        } catch (error: unknown) {
            // Handle error response
            if (axios.isAxiosError(error) && error.response) {
                setError(error.response.data?.message || "An error occurred");
            } else {
                setError("An error occurred");
            }
            setSuccess(""); // Clear any previous success message
        }
    };

    return (
        <div className="flex min-h-screen flex-col items-center bg-gradient-to-r p-6 md:flex-row">
            <div className="w-full max-w-4xl rounded-lg overflow-hidden md:flex md:flex-row">
                <div className="relative w-full h-auto md:w-1/2">
                    <Image
                        src={img}
                        alt="Login"
                        layout="responsive"
                        width={800}
                        height={600}
                        className="h-full w-full object-cover"
                    />
                </div>

                <form onSubmit={handleSubmit} className="w-full p-8 md:w-1/2">
                    <h1 className="mb-6 text-center text-3xl font-bold text-gray-800">
                        Login to Your Account
                    </h1>

                    {error && (
                        <p className="mb-4 text-center text-red-500">
                            {error}
                        </p>
                    )}
                    {success && (
                        <p className="mb-4 text-center text-green-500">
                            {success}
                        </p>
                    )}

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
    );
}
