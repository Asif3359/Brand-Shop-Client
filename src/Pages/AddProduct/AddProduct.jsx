import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const AddProduct = () => {

    const navigate = useNavigate();
    const handleAddProduct = (event) => {
        event.preventDefault();
        const from = event.target;
        const name = from.name.value;
        const brandName = from.brandName.value;
        const type = from.type.value;
        const image = from.image.value;
        const price = from.price.value;
        const description = from.description.value;
        const rating = from.rating.value;
        const newProduct = {
            name, brandName, type, image, price, description, rating
        }
        // console.log(newProduct);
        fetch('http://localhost:5000/product', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                navigate("/");
                console.log(data.acknowledged);


            })
    }
    return (
        <div className='bg-gray-200 py-10 px-2 md:px-0'>
            <div>
                <h3 className='text-center text-3xl'>Add Your New Product</h3>
            </div>
            <div className='flex  justify-center  items-center w-full md:w-3/4 mx-auto '>
                <form onSubmit={handleAddProduct} className='space-y-3 w-full'>
                    <div className=' flex  md:items-center  flex-col  md:flex-row gap-2 w-full '>
                        <div className='flex-1 space-y-1'>
                            <label htmlFor='name'>Name:</label>
                            <input type="text" id='name' name='name' placeholder='Name' className=' p-2 border-gray-700  rounded-lg w-full ' />
                        </div>
                        <div className='flex-1 space-y-1'>
                            <label htmlFor='brandName'>Brand Name:</label>
                            <input type="text" id='brandName' name='brandName' placeholder='Brand Name' className=' p-2 border-gray-700 rounded-lg w-full ' />
                        </div>
                    </div>
                    <div className=' flex  md:items-center  flex-col  md:flex-row gap-2'>
                        <div className='flex-1 space-y-1'>
                            <label htmlFor='type'>Type:</label>
                            <input type="text" id='type' name='type' placeholder='Type' className=' p-2 border-gray-700 rounded-lg w-full ' />
                        </div>
                        <div className='flex-1 space-y-1'>
                            <label htmlFor='rating'>Rating:</label>
                            <input type="text" id='rating' name='rating' placeholder='Rating' className=' p-2 border-gray-700 rounded-lg w-full ' />
                        </div>

                    </div>
                    <div className=' flex  md:items-center  flex-col  md:flex-row gap-2'>
                        <div className='flex-1 space-y-1'>
                            <label htmlFor='price'>Price:</label>
                            <input type="text" id='price' name='price' placeholder='Price $' className=' p-2 border-gray-700 rounded-lg w-full ' />
                        </div>
                        <div className='flex-1 space-y-1'>
                            <label htmlFor='description'>Short description:</label>
                            <input type="text" id='description' name='description' placeholder='Short Description' className=' p-2 border-gray-700 rounded-lg w-full ' />
                        </div>
                    </div>
                    <div className='flex-1 space-y-1'>
                        <label htmlFor='image'>Image:</label>
                        <input type="text" id='image' name='image' placeholder='image URL' className=' p-2 border-gray-700 rounded-lg w-full ' />
                    </div>
                    <div className=' flex  md:items-center  flex-col  md:flex-row gap-2'>
                        <input type="submit" value="Add This Product" className='btn btn-sm btn-primary w-full' />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;