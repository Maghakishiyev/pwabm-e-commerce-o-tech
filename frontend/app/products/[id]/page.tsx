"use client";
import { useParams } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import mockProducts from "../mockdata";



const ProductPage = () => {
    const params = useParams();
    const [selectedColor, setSelectedColor] = useState<string | null>(null);
    const [selectedMemory, setSelectedMemory] = useState<string | null>(null);
    const id = params.id;

    const data = [...mockProducts];
    const product = data.find((product) => product.id === id); // Find product by ID

    // Handle if the product is not found
    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <h1 className="text-2xl font-bold text-red-500">Product not found!</h1>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100">

            <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-md p-8">
                <div className="flex flex-col md:flex-row justify-between">
                    <div className="flex flex-col">
                        <h1 className="text-4xl font-bold text-gray-800 mb-6">
                            {product.name}
                        </h1>
                        <div className="flex items-center space-x-2 mb-4">
                            {/* Discounted Price */}
                            <span className="text-blue-600 text-3xl font-bold">${Number(product.price) - 100}</span>
                            {/* Original Price (Struck-through) */}
                            <span className="text-gray-400 text-2xl line-through">${product.price}</span>
                        </div>
                        <div className="flex items-center space-x-4 mb-4">
                            <span className="text-gray-900 text-base font-medium">Select color:</span>
                            <div className="flex space-x-2">
                                {product.availableColors.map((color, index) => (
                                    <div
                                        key={index}
                                        onClick={() => setSelectedColor(color)}
                                        className={`w-8 h-8 rounded-full cursor-pointer border-2 ${selectedColor === color ? "border-blue-500" : "border-gray-300"
                                            }`}
                                        style={{ backgroundColor: color }}
                                    ></div>
                                ))}
                            </div>
                        </div>

                        <div className="flex space-x-4">
                            {product.memory.map((option, index) => (
                                <div
                                    key={index}
                                    onClick={() => setSelectedMemory(option)} // Set selected option
                                    className={`px-5 py-2 rounded-lg cursor-pointer border ${selectedMemory === option
                                        ? "border-blue-500 text-blue-500"
                                        : "border-gray-300 text-gray-500"
                                        } hover:border-blue-400 transition`}
                                >
                                    {option}
                                </div>
                            ))}
                        </div>
                        <div className="mt-4">
                            {product.description}
                        </div>
                        <div className="mt-4">
                            <button
                                className="px-10 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>

                    <Image
                        src={product.itemImageUrl}
                        alt={product.name}
                        className="w-full md:w-1/2 object-contain rounded-lg"
                        width={500}
                        height={500}
                    />
                </div>
            </div>
        </div>
    );
};

export default ProductPage;