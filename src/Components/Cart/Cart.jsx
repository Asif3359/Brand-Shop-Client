import React from 'react';
import { Link } from 'react-router-dom';

const Cart = ({ brand }) => {

    return (
        <div>
            <div className="w-full lg:card-side bg-base-100 border  transition delay-150 duration-300 ease-in-out rounded-lg">
                <figure><img className='w-full h-[200px] md:h-[250px] lg:h-[300px] rounded-lg transition delay-150 duration-300 ease-in-out hover:scale-110' src={brand.image} alt="Album" /></figure>
                <div className=" p-2 shadow-none">
                    <h2 className="card-title">{brand.name}</h2>
                    <h2 className="card-title">{brand.brandName}</h2>
                    <p>{brand.description.slice(0, 20)} <Link to={`/details/${brand._id}`} className="">...See more</Link></p>
                    <div className='flex gap-3 items-center'>
                        <div className="rating rating-sm">
                            <input type="radio" name="rating-9" className="rating-hidden" />
                            <input type="radio" name="rating-9" className="mask mask-star-2" />
                            <input type="radio" name="rating-9" className="mask mask-star-2" defaultChecked />
                            <input type="radio" name="rating-9" className="mask mask-star-2" />
                            <input type="radio" name="rating-9" className="mask mask-star-2" />
                            <input type="radio" name="rating-9" className="mask mask-star-2" />
                        </div>
                        <div>
                            <h1>{brand.rating}</h1>
                        </div>
                    </div>
                    <div className="card-actions flex justify-between items-center ">
                        <h4 className='font-bold'>{brand.price}</h4>
                        <div className='flex flex-col gap-2'>
                            <Link to={`/details/${brand._id}`} className="btn btn-primary btn-sm">Details</Link>
                            <Link to={`/update/${brand._id}`} className="btn btn-primary btn-sm">Update </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;