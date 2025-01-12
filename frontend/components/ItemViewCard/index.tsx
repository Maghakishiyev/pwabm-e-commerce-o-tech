import Image from "next/image";
import Link from "next/link";
import React from "react";

interface IItemViewCard {
    id: string;
    name: string;
    description: string;
    price: string;
    availableColors: string[];
    itemImageUrl: string;
}

export const ItemViewCard: React.FC<IItemViewCard> = ({
    id,
    name,
    description,
    price,
    availableColors,
    itemImageUrl,
}: IItemViewCard) => {
    return (
        <div className="bg-white rounded-lg shadow-lg dark:bg-gray-100 p-4 flex flex-col items-center hover:shadow-xl transition-shadow duration-300">
            {/* Product Image */}
            <Link href={`/products/${id}`} key={id}>
                <Image
                    className="w-[200px] h-[200px] object-contain rounded-lg mb-4"
                    src={itemImageUrl}
                    alt={name}
                    width={600}
                    height={800}
                />

                {/* Product Name */}
                <h3 className="text-lg font-semibold text-gray-900 dark:text-black text-center">
                    {name}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-500 text-center mb-4">
                    {description.length > 60 ? `${description.substring(0, 60)}...` : description}
                </p>

                {/* Price and Color Options */}
                <div className="flex items-center justify-between w-full mb-4">
                    {/* Price */}
                    <span className="text-xl font-bold text-blue-500">{price}</span>

                    {/* Color Options */}
                    <div className="flex space-x-2">
                        {availableColors.map((color, index) => (
                            <span
                                key={index}
                                className="w-5 h-5 rounded-full border border-gray-300"
                                style={{ backgroundColor: color }}
                            />
                        ))}
                    </div>
                </div>
            </Link>

            {/* Add to Cart Button */}
            <button className="w-full text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 transition-colors duration-300 focus:outline-none">
                Add to Cart
            </button>
        </div>
    );
};
