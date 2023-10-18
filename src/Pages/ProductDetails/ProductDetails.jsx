import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ProductDetails = () => {
    const BrandDetails = useLoaderData();
    
    const Cart = {
        image:BrandDetails.image,
        name:BrandDetails.name,
        brandName:BrandDetails.brandName,
        type:BrandDetails.type,
        rating:BrandDetails.rating,
        price:BrandDetails.price,
        description:BrandDetails.description,
    }
    const handleAddCart = () => {
        fetch('http://localhost:5000/carts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(Cart)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    console.log(data.acknowledged);
                }
            })

    }
    return (
        <div className=' py-5 container mx-auto '>

            <div className="relative grid grid-cols-4 items-center  border border-gray-200 rounded-lg shadow md:flex-row md:max-full  dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <div className='flex-1 col-span-3'>
                    <img className="  object-cover w-full rounded-t-lg h-fit md:h-auto md:w-full  md:rounded-none md:rounded-l-lg " src={BrandDetails.image} alt="" />
                </div>
                <div className="flex-1 grid grid-cols-1 justify-between p-4 leading-normal w-full">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight  dark:text-white">{BrandDetails.name}</h5>
                    <h5 className="mb-2 text-xl font-bold tracking-tight  dark:text-white">{BrandDetails.brandName}</h5>
                    <h5 className="mb-2  font-bold tracking-tight  dark:text-white">{BrandDetails.type}</h5>
                    <h5 className="mb-2  font-bold tracking-tight  dark:text-white">{BrandDetails.price}</h5>
                    <h5 className="mb-2  font-bold tracking-tight  dark:text-white">{BrandDetails.rating}</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{BrandDetails.description}</p>
                    <button onClick={handleAddCart} className='btn btn-sm btn-primary'>Add To Cart</button>
                </div>
            </div>

        </div>
    );
};

export default ProductDetails;