"use client"
import React, { useState } from 'react'
import CartItem from '@/components/CartItem'
import OrderSummary from '@/components/OrderSummary'

interface CartProduct {
    productName: string
    color: string
    price: string
    productImage: string
    quantity: number
}

const initialCart: CartProduct[] = [
    {
        productName: 'Apple iPhone 14 Pro Max',
        color: 'Dark Purple',
        price: "1649.99",
        productImage: '/images/test/iphone14.png',
        quantity: 1
    },
    {
        productName: 'Beats Black HeadPhone',
        color: 'Black',
        price: "169.99",
        productImage: '/images/test/iphone14.png',
        quantity: 1
    }
]

export default function CartPage() {
    const [cartItems, setCartItems] = useState<CartProduct[]>(initialCart)

    // Removing an item
    const handleRemoveItem = (index: number) => {
        const updated = [...cartItems]
        updated.splice(index, 1)
        setCartItems(updated)
    }

    // Increase or decrease quantity
    const handleIncrease = (index: number) => {
        const updated = [...cartItems]
        updated[index].quantity += 1
        setCartItems(updated)
    }

    const handleDecrease = (index: number) => {
        const updated = [...cartItems]
        if (updated[index].quantity > 1) {
            updated[index].quantity -= 1
            setCartItems(updated)
        }
    }

    // Data for OrderSummary
    const summaryData = cartItems.map(item => ({
        price: item.price,
        quantity: item.quantity
    }))

    const handleCheckout = () => {
        console.log('Proceed to checkout with:', cartItems)
        // Possibly navigate to a payment page or similar
    }

    return (
        <main className="px-6 py-8">
            <div className="mx-auto flex max-w-6xl flex-col gap-20 md:flex-row">
                {/* Left Column: Cart Items */}
                <div className="flex-1">
                    <div className='flex items-center justify-between mb-6'>
                        <h1 className="mb-1 text-2xl font-bold">Cart</h1>
                        <div className="mb-4 text-sm text-gray-500">
                            {cartItems.length} {cartItems.length === 1 ? 'ITEM' : 'ITEMS'}
                        </div>
                    </div>

                    {cartItems.map((item, i) => (
                        <CartItem
                            key={i}
                            productName={item.productName}
                            color={item.color}
                            price={item.price}
                            productImage={item.productImage}
                            quantity={item.quantity}
                            onIncrease={() => handleIncrease(i)}
                            onDecrease={() => handleDecrease(i)}
                            onRemove={() => handleRemoveItem(i)}
                        />
                    ))}
                </div>

                {/* Right Column: Order Summary */}
                <OrderSummary
                    cartItems={summaryData}
                    shippingFee={0}     // or e.g. 5.99
                    discount={31.90}   // Example discount
                    onCheckout={handleCheckout}
                />
            </div>
        </main>
    )
}
