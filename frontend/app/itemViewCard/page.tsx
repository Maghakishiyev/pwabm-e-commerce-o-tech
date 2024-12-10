import { ItemViewCard } from '@/components/ItemViewCard';

const ItemViewCardTestPage = () => {
    return (
        <div className='w-full h-full min-w-screen min-h-screen flex items-center justify-center'>
            <ItemViewCard
                id='1'
                availableColors={['#5B5B5B', '#AB83FF', '6D9FFF', 'FF6363']}
                name='Apple iPhone 14 Pro Max '
                description='128GB Deep Purple (MQ9T3RX/A)'
                itemImageUrl='/images/test/iphone14.png'
                price='1699,99$'
            />
        </div>
    );
};

export default ItemViewCardTestPage;
