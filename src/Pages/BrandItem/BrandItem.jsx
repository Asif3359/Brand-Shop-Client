import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Cart from '../../Components/Cart/Cart';

const BrandItem = () => {

    const [brands, setBrands] = useState([]);
    const { id } = useParams();

    const allBrands = useLoaderData();
    // console.log(allBrands);

    useEffect(() => {

        fetch('/public/Brands.json')
            .then(res => res.json())
            .then(data => {
                const brandSelect = data.find(brand => brand.id == id);

                const BrandsToShow = allBrands.filter(brand => brand.brandName.toLowerCase() == brandSelect.brandName.toLowerCase());
                // console.log("To show", BrandsToShow);
                setBrands(BrandsToShow);
            })

    }, [id])
    return (
        <div>
            <div className=''>
                <div className="carousel w-full h-[90vh]">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src={brands[0]?.image} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src={brands[1]?.image} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src={brands[1]?.image} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container mx-auto my-5'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                    {
                        brands.map(brand => <Cart key={brand._id} brand={brand}></Cart>)
                    }
                </div>
            </div>
        </div>
    );
};

export default BrandItem;