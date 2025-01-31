import { PopularItem } from '@/components/PopularItem';

const PopularItemTestPage = () => {
    return (
        <div className='w-full h-full min-w-screen min-h-screen flex items-center justify-center'>
            <PopularItem
                brandDescription='iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.'
                brandId='smart-watches'
                brandName='Smart Watches'
                brandImageUrl='/images/test/smartwatches.png'
            />
        </div>
    );
};

export default PopularItemTestPage;
