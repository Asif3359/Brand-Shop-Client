import React from 'react';

const AddProduct = () => {
    return (
        <div className='bg-gray-200 py-10 px-2 md:px-0'>
            <div>
                <h3 className='text-center text-3xl'>Add Your New Product</h3>
            </div>
            <div className='flex  justify-center  items-center w-full md:w-3/4 mx-auto '>
                <form className='space-y-3 w-full'>
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
                            <label htmlFor='image'>Image:</label>
                            <input type="text" id='image' name='image' placeholder='image URL' className=' p-2 border-gray-700 rounded-lg w-full ' />
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
                    <div className=' flex  md:items-center  flex-col  md:flex-row gap-2'>
                        <input type="submit" value="Add This Product" className='btn btn-sm btn-primary w-full' />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;