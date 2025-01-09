"use client"
import React from 'react'
import Image from 'next/image'

interface CartItemProps {
    productName: string
    color: string
    price: string
    productImage: string
    quantity: number
    onIncrease?: () => void
    onDecrease?: () => void
    onRemove?: () => void
}

export default function CartItem({
    productName,
    color,
    price,
    productImage,
    quantity,
    onIncrease,
    onDecrease,
    onRemove
}: CartItemProps) {
    return (
        <div className="flex flex-col gap-4 border-b p-4 md:flex-row md:items-center md:justify-between">

             {/* Left section: image + product details */}
            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center md:w-1/2">
                {/* Product Image */}
                <div className="relative h-24 w-24 flex-shrink-0">
                    <Image
                        src={productImage}
                        alt={productName}
                        fill
                        className="object-contain"
                    // For older Next versions:
                    // layout="fill"
                    // objectFit="contain"
                    />
                </div>

                {/* Name & Color */}
                <div>
                    <h2 className="text-base font-semibold sm:text-lg">
                        {productName}
                    </h2>
                    <p className="text-sm text-gray-500">
                        Color <span className="capitalize">{color}</span>
                    </p>
                </div>
            </div>

            {/* Right section: price + quantity + remove */}
            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center md:w-1/2 md:justify-end">

                {/* Price */}
                <span className="min-w-[80px] text-base font-bold sm:text-lg text-blue-600">
                    {price}
                </span>

                {/* Quantity Controls */}
                <div className="flex items-center gap-2">
                    <button
                        type="button"
                        onClick={onDecrease}
                        className="flex h-8 w-8 items-center justify-center rounded border border-gray-300 text-lg"
                    >
                        -
                    </button>
                    <span className="w-6 text-center">{quantity}</span>
                    <button
                        type="button"
                        onClick={onIncrease}
                        className="flex h-8 w-8 items-center justify-center rounded border border-gray-300 text-lg"
                    >
                        +
                    </button>
                </div>

                {/* Remove Button */}
                <button
                    onClick={onRemove}
                    className="text-sm text-red-500 hover:text-red-600 hover:underline"
                >
                    Remove
                </button>
            </div>
        </div>
    )
}
