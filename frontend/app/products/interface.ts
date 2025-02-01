export interface IProduct {
    _id: string; // Use string for IDs instead of ObjectId
    price: string;
    name: string;
    category_id: string; // Use string for IDs instead of ObjectId
    brand_id: string; // Use string for IDs instead of ObjectId
    description?: string;
    available_memory?: string[]; // Optional array of strings
    available_colors?: string[]; // Optional array of strings
    details?: {
        screenSize?: string;
        cpu?: string;
        numberOfCores?: number;
        mainCamera?: string;
        frontCamera?: string;
        batteryCapacity?: string;
    }; // Optional object for detailed specifications
    detail_description: string;
    promotion_description?: string;
    product_image_url?: string;
    createdAt?: string; // Use string for dates (e.g., ISO 8601 format)
    updatedAt?: string; // Use string for dates
}
