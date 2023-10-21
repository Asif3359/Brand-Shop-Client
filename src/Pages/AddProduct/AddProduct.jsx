import React, { useState } from 'react';
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
        
        fetch('https://brand-server-asif-ahammeds-projects.vercel.app/product', {
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
        <div className=' py-10 px-2 md:px-0'>
            <div>
                <h3 className='text-center text-3xl'>Add Your New Product</h3>
            </div>
            <div className='flex  justify-center  items-center w-full md:w-3/4 mx-auto mt-10 '>
                <form onSubmit={handleAddProduct}  className='space-y-3 w-full'>
                    <div className=' flex  md:items-center  flex-col  md:flex-row gap-2 w-full '>
                        <div className='flex-1 space-y-1'>
                            <label htmlFor='name'>Name:</label>
                            <input type="text" id='name' name='name' placeholder='Name' className=' p-2 border-2 border-gray-400  rounded-lg w-full ' required />
                        </div>
                        {/* <div className='flex-1 space-y-1'>
                            <label htmlFor='brandName'>Brand Name:</label>
                            <input type="text" id='brandName' name='brandName' placeholder='Brand Name' className='  border-2 p-2 border-gray-400 rounded-lg w-full ' required />
                        </div> */}

                        <div className='flex-1 space-y-1'>
                            <label htmlFor="brandName"> Brand Name :</label>
                            <select id='brandName' name='brandName' placeholder='Brand Name' className='  border-2 p-2 border-gray-400 rounded-lg w-full ' required>
                                <option value="">Select Brand Name </option>
                                <option value="BMW">BMW</option>
                                <option value="Audi">Audi</option>
                                <option value="Rolls Royce">Rolls Royce</option>
                                <option value="Mercedes Benz">Mercedes Benz</option>
                                <option value="Lamborghini">Lamborghini</option>
                                <option value="Nissan">Nissan</option>
                            </select>
                        </div>

                    </div>
                    <div className=' flex  md:items-center  flex-col  md:flex-row gap-2'>
                        <div className='flex-1 space-y-1'>
                            <label htmlFor='type'>Type:</label>
                            <input type="text" id='type' name='type' placeholder='Type' className='  border-2 p-2 border-gray-400 rounded-lg w-full ' required />
                        </div>
                        <div className='flex-1 space-y-1'>
                            <label htmlFor='rating'>Rating:</label>
                            <input type="text" id='rating' name='rating' placeholder='Rating' className='  border-2 p-2 border-gray-400 rounded-lg w-full ' required />
                        </div>

                    </div>
                    <div className=' flex  md:items-center  flex-col  md:flex-row gap-2'>
                        <div className='flex-1 space-y-1'>
                            <label htmlFor='price'>Price:</label>
                            <input type="text" id='price' name='price' placeholder='Price $' className='  border-2 p-2 border-gray-400 rounded-lg w-full ' required />
                        </div>
                        <div className='flex-1 space-y-1'>
                            <label htmlFor='description'>Short description:</label>
                            <input type="text" id='description' name='description' placeholder='Short Description' className='  border-2 p-2 border-gray-400 rounded-lg w-full ' required />
                        </div>
                    </div>
                    <div className='flex-1 space-y-1'>
                        <label htmlFor='image'>Image:</label>
                        <input type="text" id='image' name='image' placeholder='image URL' className='  border-2 p-2 border-gray-400 rounded-lg w-full ' required />
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