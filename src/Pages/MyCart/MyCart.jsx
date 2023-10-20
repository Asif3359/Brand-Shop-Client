import React, { useContext, useEffect } from 'react';
import ProductCard from '../../Components/ProductCard/ProductCard';
import { useLoaderData } from 'react-router-dom';
import { useState } from 'react';
import { AuthContext } from '../../AuthProviders/AuthProvider';

const MyCart = () => {
    const {user}=useContext(AuthContext);
    const lodeCarts = useLoaderData();
    const [userCarts, setUserCarts] = useState([]);
    // const [carts, setCarts] = useState(userCarts);
    useEffect(()=>{
        const addedUserCarts = lodeCarts.filter(crt => crt.email == user.email);
        setUserCarts(addedUserCarts)
    },[])
    return (
        <div className='container mx-auto space-y-8 mt-3 mb-10'>
            <div className='text-center'>
                {
                    userCarts.length?<h1>Your Added Cart</h1>:<div className='h-[70vh] flex justify-center items-center'>
                        <h1>No products have been added yet in Cart. </h1>
                    </div>
                }
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 '>
                {
                    userCarts.map(cart => <ProductCard
                        key={cart._id}
                        cart={cart}
                        userCarts={userCarts}
                        setUserCarts={setUserCarts}
                        >
                    </ProductCard>)
                }
            </div>
        </div>
    );
};

export default MyCart;