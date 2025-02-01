"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import { IProduct } from "../interface";
import axios from "axios";



const ProductPage = () => {
    const params = useParams();
    const [product, setProduct] = useState<IProduct | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [selectedColor, setSelectedColor] = useState<string | null>(null);
    const [selectedMemory, setSelectedMemory] = useState<string | null>(null);
    const id = params.id;

    useEffect(() => {
        if (id) {
            const fetchProduct = async () => {
                try {
                    const response = await axios.get(`http://localhost:8080/api/products`);
                    const product: IProduct | undefined = response.data.products.find((product: IProduct) => product._id === id);
                    setProduct(product || null);
                    setError(null);
                } catch (error) {
                    console.error("Error fetching product details:", error);
                    setError("Failed to load product details.");
                } finally {
                    setLoading(false);
                }
            };

            fetchProduct();
        }
    }, [id]);
    if (loading) {
        return <p>Loading product details...</p>;
    }

    if (error) {
        return <p className="text-red-500">{error}</p>;
    }

    // Handle if the product is not found
    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <h1 className="text-2xl font-bold text-red-500">Product not found!</h1>
            </div>
        );
    }

    return (
        <div className="min-h-screen bt-1">
            <div className="max-w-5xl mx-auto p-8">
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
                                {product.available_colors && product.available_colors.map((color, index) => (
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
                            {product.available_memory && product.available_memory.map((option, index) => (
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
                        src={product.product_image_url || "/default-image.jpg"}
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