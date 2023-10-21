import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import { toast } from 'react-toastify';

const UpdatePage = () => {
    const formRef = useRef(null);
    const lodeSpecificProduct = useLoaderData();
    const navigate = useNavigate();
    const { _id, name, brandName, type, image, price, description, rating } = lodeSpecificProduct;

    const handleUpdateProduct = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const brandName = form.brandName.value;
        const type = form.type.value;
        const image = form.image.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;

        const updateProduct = {
            name,
            brandName,
            type,
            image,
            price,
            description,
            rating
        }
        fetch(`https://brand-server-asif-ahammeds-projects.vercel.app/product/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success('Congratulation information Updated successfully!', {
                    position: "top-right",
                    autoClose: 1500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
                navigate("/");
                formRef.current.reset();
            })
    }

    return (
        <div>
            <div className='py-10 px-2 md:px-0'>
                <div>
                    <h3 className='text-center text-3xl'>Update Your Product Information</h3>
                </div>
                <div className='flex  justify-center  items-center w-full md:w-3/4 mx-auto '>
                    <form onSubmit={handleUpdateProduct} className='space-y-3 w-full'>
                        <div className=' flex  md:items-center  flex-col  md:flex-row gap-2 w-full '>
                            <div className='flex-1 space-y-1'>
                                <label htmlFor='name'>Name:</label>
                                <input type="text" id='name' name='name' defaultValue={name} placeholder='Name' className=' p-2 border-gray-400 rounded-lg w-full border-2 ' />
                            </div>
                            {/* <div className='flex-1 space-y-1'>
                                <label htmlFor='brandName'>Brand Name:</label>
                                <input type="text" id='brandName' name='brandName' defaultValue={brandName} placeholder='Brand Name' className=' p-2 border-gray-400 rounded-lg w-full border-2 ' />
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
                                <input type="text" id='type' name='type' defaultValue={type} placeholder='Type' className=' p-2 border-gray-400 rounded-lg w-full border-2 ' />
                            </div>
                            <div className='flex-1 space-y-1'>
                                <label htmlFor='rating'>Rating:</label>
                                <input type="text" id='rating' name='rating' defaultValue={rating} placeholder='Rating' className=' p-2 border-gray-400 rounded-lg w-full border-2 ' />
                            </div>

                        </div>
                        <div className=' flex  md:items-center  flex-col  md:flex-row gap-2'>
                            <div className='flex-1 space-y-1'>
                                <label htmlFor='price'>Price:</label>
                                <input type="text" id='price' name='price' defaultValue={price} placeholder='Price $' className=' p-2 border-gray-400 rounded-lg w-full border-2 ' />
                            </div>
                            <div className='flex-1 space-y-1'>
                                <label htmlFor='description'>Short description:</label>
                                <input type="text" id='description' name='description' defaultValue={description} placeholder='Short Description' className=' p-2 border-gray-400 rounded-lg w-full border-2 ' />
                            </div>
                        </div>
                        <div className='flex-1 space-y-1'>
                            <label htmlFor='image'>Image:</label>
                            <input type="text" id='image' name='image' defaultValue={image} placeholder='image URL' className=' p-2 border-gray-400 rounded-lg w-full border-2 ' />
                        </div>
                        <div className=' flex  md:items-center  flex-col  md:flex-row gap-2'>
                            <input type="submit" value="Submit" className='btn btn-sm btn-primary w-full' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdatePage;