interface IItemViewCard {
    id: string;
    name: string;
    description: string;
    price: string;
    availableColors: string[];
    itemImageUrl: string;
}

export const ItemViewCard: React.FC<IItemViewCard> = ({}: IItemViewCard) => {
    return <></>;
};
