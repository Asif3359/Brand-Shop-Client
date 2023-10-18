import React, { useEffect, useState } from 'react';

import {Link} from "react-router-dom"

const Brands = () => {
    const [brands, setBrands] = useState([]);
    useEffect(() => {
        fetch('/public/Brands.json')
            .then(res => res.json())
            .then(data => setBrands(data))
    }, []);
    return (
        <div className='container mx-auto my-5 py-5'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>
                {
                    brands.map(brand =><Link to={`/brands/${brand.id}`} key={brand.id} className='py-4 transition delay-150 duration-300 ease-in-out flex flex-col justify-between border no-underline hover:underline hover:scale-125 hover:border-none hover:bg-slate-200 hover:bg-opacity-75 '>
                        <div className='flex justify-center items-center'>
                            <img className='rounded-full w-40 h-40 ' src={brand.logo} alt="" />
                        </div>
                        <div className='px-3'>
                            <h4 className='text-sm '>{brand.brandName}</h4>
                        </div>
                    </Link>)
                }
            </div>
        </div>
    );
};

export default Brands;