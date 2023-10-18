import React from 'react';
import ProductCard from '../../Components/ProductCard/ProductCard';
import { useLoaderData } from 'react-router-dom';
import { useState } from 'react';

const MyCart = () => {
    const lodeCarts = useLoaderData();
  const [carts, setCarts]=useState(lodeCarts);
    return (
        <div>
            <p>{carts.length}</p>
            {
                carts.map(cart => <ProductCard  
                    key={cart._id} 
                    cart={cart}
                    carts={carts}
                    setCarts={setCarts}>
                    </ProductCard>)
            }
        </div>
    );
};

export default MyCart;