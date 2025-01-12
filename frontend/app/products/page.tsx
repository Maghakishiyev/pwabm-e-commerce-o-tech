"use client";
import React, { useState } from "react";
import { ItemViewCard } from "@/components";
import mockProducts from "./mockdata";


const ProductsPage = () => {
    
    const [priceRange, setPriceRange] = useState({ min: 0, max: 2000 });
    const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
    const [sortOption, setSortOption] = useState("price"); // Default sort by price
    const [currentPage, setCurrentPage] = useState(1);
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

    return (
        <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100 p-6">
            {/* Sidebar */}
            <aside className="w-full lg:w-1/4 p-4 bg-white shadow rounded-lg mb-6 lg:mb-0">
                <h2 className="text-lg font-bold mb-4">Filters</h2>

                {/* Price Range Filter */}
                <div className="mb-6">
                    <h3 className="font-semibold mb-2">Price</h3>
                    <div className="flex items-center space-x-2">
                        <input
                            type="number"
                            value={priceRange.min}
                            onChange={(e) => setPriceRange({ ...priceRange, min: Number(e.target.value) })}
                            className="w-full border rounded p-2"
                            placeholder="Min"
                        />
                        <input
                            type="number"
                            value={priceRange.max}
                            onChange={(e) => setPriceRange({ ...priceRange, max: Number(e.target.value) })}
                            className="w-full border rounded p-2"
                            placeholder="Max"
                        />
                    </div>
                </div>

                {/* Brand Filter */}
                <div className="mb-6">
                    <h3 className="font-semibold mb-2">Brand</h3>
                    <div>
                        {["Apple", "Samsung", "Xiaomi"].map((brand) => (
                            <label key={brand} className="flex items-center mb-2">
                                <input
                                    type="radio"
                                    value={brand}
                                    checked={selectedBrand === brand}
                                    onChange={() => setSelectedBrand(brand)}
                                    className="mr-2"
                                />
                                {brand}
                            </label>
                        ))}
                        <label className="flex items-center">
                            <input
                                type="radio"
                                value=""
                                checked={!selectedBrand}
                                onChange={() => setSelectedBrand(null)}
                                className="mr-2"
                            />
                            All Brands
                        </label>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1">
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
