import React from 'react';
import { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../AuthProviders/AuthProvider';

const ProductDetails = () => {
    const {user}=useContext(AuthContext);
    const BrandDetails = useLoaderData();
    const navigate = useNavigate();
    const Cart = {
        email:user.email,
        image:BrandDetails.image,
        name:BrandDetails.name,
        brandName:BrandDetails.brandName,
        type:BrandDetails.type,
        rating:BrandDetails.rating,
        price:BrandDetails.price,
        description:BrandDetails.description,
    }
    const handleAddCart = () => {
        fetch('https://brand-server-asif-ahammeds-projects.vercel.app/carts', {
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
                    toast.success('Product Added Successfully', {
                        position: "top-right",
                        autoClose: 1500,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        });
                        navigate(-1);
                }
            })

    }
    return (
        <div className=' py-5 container mx-auto '>

            <div className="relative grid grid-cols-1 lg:grid-cols-4 gap-4  items-center  border border-gray-200 ">
                <div className='lg:col-span-3 '>
                    <img className=" h-[50vh] md:h-[80vh] w-full  " src={BrandDetails.image} alt="" />
                </div>
                <div className=" p-2">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight ">{BrandDetails.name}</h5>
                    <h5 className="mb-2 text-xl font-bold tracking-tight ">{BrandDetails.brandName}</h5>
                    <h5 className="mb-2  font-bold tracking-tight ">{BrandDetails.type}</h5>
                    <h5 className="mb-2  font-bold tracking-tight ">Price: {BrandDetails.price}</h5>
                    <h5 className="mb-2  font-bold tracking-tight ">Rating: {BrandDetails.rating}</h5>
                    <p className="mb-3 font-normal  ">{BrandDetails.description}</p>
                    <button onClick={handleAddCart} className='btn btn-sm btn-primary'>Add To Cart</button>
                </div>
            </div>

        </div>
    );
};

export default ProductDetails;