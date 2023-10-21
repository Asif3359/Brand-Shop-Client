import React, { useEffect, useState } from 'react';

import { Link } from "react-router-dom"

const Brands = () => {
    const [brands, setBrands] = useState([]);
    useEffect(() => {
        fetch('/Brands.json')
            .then(res => res.json())
            .then(data => setBrands(data))
    }, []);
    return (
        <div className='container mx-auto my-5 py-5'>
            <div className='text-center'>
                <h3 className='text-4xl mb-10 font-bold'>Our Brands </h3>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
                {
                    brands.map(brand => <Link to={`/brands/${brand.id}`} key={brand.id} className='py-5 transition  duration-300 ease-in  flex flex-col justify-between border no-underline rounded-lg hover:rounded-2xl hover:scale-125 hover:border-none hover:text-gray-700 hover:bg-slate-200 hover:bg-opacity-75 '>
                        <div className='flex justify-center  items-center'>
                            <img className=' w-40 h-40 transition  duration-300 ease-in hover:scale-110 ' src={brand.logo} alt="" />
                        </div>
                        <div className='px-3'>
                            <h4 className='text-sm no-underline  '>{brand.brandName}</h4>
                        </div>
                    </Link>)
                }
            </div>
        </div>
    );
};

export default Brands;