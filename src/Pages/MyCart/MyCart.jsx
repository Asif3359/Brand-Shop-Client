import React from 'react';
import ProductCard from '../../Components/ProductCard/ProductCard';
import { useLoaderData } from 'react-router-dom';
import { useState } from 'react';

const MyCart = () => {
    const lodeCarts = useLoaderData();
    const [carts, setCarts] = useState(lodeCarts);
    return (
        <div className='container mx-auto space-y-8 mt-3'>
            <div className='text-center'>
                <h1 className='text-4xl font-bold'>Your Product List</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
                {
                    carts.map(cart => <ProductCard
                        key={cart._id}
                        cart={cart}
                        carts={carts}
                        setCarts={setCarts}>
                    </ProductCard>)
                }
            </div>
        </div>
    );
};

export default MyCart;