import React, { useContext, useEffect } from 'react';
import ProductCard from '../../Components/ProductCard/ProductCard';
import { useLoaderData } from 'react-router-dom';
import { useState } from 'react';
import { AuthContext } from '../../AuthProviders/AuthProvider';
import LoadingRoute from '../../Components/LoadingRoute/LoadingRoute';

const MyCart = () => {
    const { user } = useContext(AuthContext);
    const lodeCarts = useLoaderData();
    const [userCarts, setUserCarts] = useState([]);
    const [length, setLength] = useState(false);
    const [loading, setLoading] = useState(true);
    // const [carts, setCarts] = useState(userCarts);
    useEffect(() => {
        const addedUserCarts = lodeCarts.filter(crt => crt.email == user.email);

        if (addedUserCarts.length == 0) {
            setLoading(true);
            setLength(false);
            // window.location.reload();
        } else {
            setLoading(false);
            setLength(true);
            setUserCarts(addedUserCarts);
        }
    }, [])
    return (
        <div className='container mx-auto space-y-8 mt-3 mb-10'>
            {/* <LoadingRoute length={length} loading={loading}> 
                <div className='text-center'>
                    {
                        userCarts.length ? <h1>Your Added Cart</h1> : <div className='h-[70vh] flex justify-center items-center'>
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
            </LoadingRoute> */}
            {
                length ?<>
                        <div className='text-center my-5 '>
                            <h1>Your Added Product</h1>
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
                    </>:
                    <div className='h-[80vh] flex justify-center items-center'>
                        <h1>No products have been added yet in Cart. </h1>
                    </div>
            }
        </div>
    );
};

export default MyCart;