'use client';

import withUserAuthentication from '@/utils/withUserAuthentication';
import CheckoutCart from '@/widgets/CheckoutCart';

const CartPage = () => {
    return (
        <main className='px-6 py-8 min-h-screen h-full flex-grow'>
            <CheckoutCart />
        </main>
    );
};

export default withUserAuthentication(CartPage);
