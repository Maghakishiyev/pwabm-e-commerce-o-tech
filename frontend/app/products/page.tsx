"use client";
import React, { useState } from "react";
import { ItemViewCard } from "@/components";
import mockProducts from "./mockdata";


const ProductsPage = () => {

    const [priceRange, setPriceRange] = useState({ min: 0, max: 5000 });
    const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
    const [sortOption, setSortOption] = useState("price"); // Default sort by price
    const [currentPage, setCurrentPage] = useState(1);
    const [expanded, setExpanded] = useState<string | null>(null);
    const itemsPerPage = 9;

    // Filter products
    const filteredProducts = mockProducts
        .filter((product) => Number(product.price) >= priceRange.min && Number(product.price) <= priceRange.max)
        .filter((product) => (selectedBrand ? product.brand === selectedBrand : true))
        .sort((a, b) => (sortOption === "price" ? parseFloat(a.price) - parseFloat(b.price) : 0));

    // Paginate products
    const totalProducts = filteredProducts.length;
    const totalPages = Math.ceil(totalProducts / itemsPerPage);
    const paginatedProducts = filteredProducts.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );
    const toggleAccordion = (section: string) => {
        setExpanded(expanded === section ? null : section);
    };
    const brands = [
        { name: "Apple", count: 110 },
        { name: "Samsung", count: 125 },
        { name: "Xiaomi", count: 68 },
        { name: "Poco", count: 44 },
        { name: "OPPO", count: 36 },
        { name: "Honor", count: 10 },
        { name: "Motorola", count: 34 },
        { name: "Nokia", count: 22 },
        { name: "Realme", count: 35 },
    ];


    return (
        <div className="flex flex-col lg:flex-row min-h-screen bg-white p-6 gap-5">
            {/* Sidebar */}
            <aside className="w-full lg:w-1/5 p-4 bg-white shadow rounded-lg mb-6 lg:mb-0">
                <h2 className="text-lg font-bold mb-4">Filters</h2>

                {/* Price Filter */}
                <div className="border-b pb-4 mb-4">
                    <div
                        className="flex items-center justify-between cursor-pointer"
                        onClick={() => toggleAccordion("price")}
                    >
                        <h3 className="font-semibold text-gray-800">Price</h3>
                        <span className="text-sm">{expanded === "price" ? "▲" : "▼"}</span>
                    </div>
                    {expanded === "price" && (
                        <div className="mt-4">
                            <div className="flex items-center space-x-2">
                                <input
                                    type="number"
                                    value={priceRange.min}
                                    onChange={(e) =>
                                        setPriceRange({ ...priceRange, min: Number(e.target.value) })
                                    }
                                    className="w-full border rounded p-2"
                                    placeholder="From"
                                />
                                <input
                                    type="number"
                                    value={priceRange.max}
                                    onChange={(e) =>
                                        setPriceRange({ ...priceRange, max: Number(e.target.value) })
                                    }
                                    className="w-full border rounded p-2"
                                    placeholder="To"
                                />
                            </div>
                            {/* Price Slider (Optional) */}
                            <input
                                type="range"
                                min="0"
                                max="5299"
                                value={priceRange.min}
                                onChange={(e) =>
                                    setPriceRange({ ...priceRange, min: Number(e.target.value) })
                                }
                                className="mt-4 w-full"
                            />
                            <input
                                type="range"
                                min="0"
                                max="5299"
                                value={priceRange.max}
                                onChange={(e) =>
                                    setPriceRange({ ...priceRange, max: Number(e.target.value) })
                                }
                                className="mt-2 w-full"
                            />
                        </div>
                    )}
                </div>

                {/* Brand Filter */}
                <div className="border-b pb-4 mb-4">
                    <div
                        className="flex items-center justify-between cursor-pointer"
                        onClick={() => toggleAccordion("brand")}
                    >
                        <h3 className="font-semibold text-gray-800">Brand</h3>
                        <span className="text-sm">{expanded === "brand" ? "▲" : "▼"}</span>
                    </div>
                    {expanded === "brand" && (
                        <div className="mt-4">
                            <input
                                type="text"
                                placeholder="Search"
                                className="w-full border rounded p-2 mb-4"
                            />
                            <div className="space-y-2">
                                {brands.map((brand) => (
                                    <label key={brand.name} className="flex items-center">
                                        <input
                                            type="checkbox"
                                            value={brand.name}
                                            checked={selectedBrand === brand.name}
                                            onChange={() =>
                                                setSelectedBrand(
                                                    selectedBrand === brand.name ? null : brand.name
                                                )
                                            }
                                            className="mr-2"
                                        />
                                        <span className="text-gray-700">
                                            {brand.name} <span className="text-gray-400">({brand.count})</span>
                                        </span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto" >
                <header className="flex items-center justify-between mb-4">
                    <h1 className="text-2xl font-bold">All Products</h1>
                    <div>
                        <label className="mr-2">Sort by:</label>
                        <select
                            value={sortOption}
                            onChange={(e) => setSortOption(e.target.value)}
                            className="border rounded p-2"
                        >
                            <option value="price">Price</option>
                            <option value="rating">Rating</option>
                        </select>
                    </div>
                </header>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {paginatedProducts.map((product) => (

                        <ItemViewCard
                            key={product.id}
                            id={product.id}
                            name={product.name}
                            description={product.description}
                            price={product.price}
                            availableColors={product.availableColors}
                            itemImageUrl={product.itemImageUrl}
                        />

                    ))}
                </div>

                {/* Pagination */}
                <div className="flex items-center justify-center mt-6 space-x-2">
                    {Array.from({ length: totalPages }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentPage(index + 1)}
                            className={`px-4 py-2 rounded ${currentPage === index + 1
                                ? "bg-blue-500 text-white"
                                : "bg-gray-200 text-gray-600"
                                }`}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default ProductsPage;
