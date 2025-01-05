interface IItemViewCard {
    id: string;
    name: string;
    description: string;
    price: string;
    availableColors: string[];
    itemImageUrl: string;
}

export const ItemViewCard: React.FC<IItemViewCard> = ({
    name,
    description,
    price,
    availableColors,
    itemImageUrl,
}: IItemViewCard) => {
    return (
        <div className ="w-[315px] h-[436px] bg-white rounded-lg shadow dark:bg-gray-100 p-4 flex flex-col items-center justify-center">
            
            <img className="w-[200px] h-[200px] object-contain rounded-t-lg mb-4"
                src= {itemImageUrl} />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-black">{name}</h3>
            <p className="text-sm text-gray-500 mb-4">{description}</p>

            <div className="flex items-center justify-start mb-4 space-x-20">
                <span className="text-xl font-bold text-blue-500">{price}</span>
                <div className="flex space-x-1">
                    {availableColors.map((color, index) => (
                        <span
                            key={index}
                            className="w-5 h-5 rounded-full border border-gray-200"
                            style={{ backgroundColor: color }}
                        ></span>
                    ))}
                </div>
            </div>
            
            <button className="w-full text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none">
                Add to Cart
            </button>          


        </div>
    );
};
