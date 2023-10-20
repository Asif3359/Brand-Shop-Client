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

        fetch('/Brands.json')
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
            {
                brands.length ?
                    <div><div className=''>
                        <div className="carousel w-full h-[80vh]">
                            <div id="slide1" className="carousel-item relative w-full">
                                <div className="hero bg-opacity-50 bg-center bg-cover " style={{ backgroundImage: `url(${brands[0]?.image})`}}>
                                    <div className="hero-overlay bg-opacity-30"></div>
                                    <div className="hero-content  text-neutral-content pr-96">
                                        <div className=" text-left ">
                                            <h1 className="mb-5 text-3xl md:text-5xl font-bold">Hello there</h1>
                                            <p className="mb-5">Welcome to the heart of our company - our brands. These are the pillars of our existence, each with a unique purpose and mission. In this section, I invite you to get to know our family of brands, the very essence of what we do.</p>
                                            <button className="btn btn-sm lg:btn btn-primary">Get Started</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide3" className="btn btn-circle">❮</a>
                                    <a href="#slide2" className="btn btn-circle">❯</a>
                                </div>
                            </div>
                            <div id="slide2" className="carousel-item relative w-full">
                            <div className="hero " style={{ backgroundImage: `url(${brands[1]?.image})` }}>
                                    <div className="hero-overlay bg-opacity-30"></div>
                                    <div className="hero-content  text-neutral-content pr-96">
                                        <div className=" text-left ">
                                            <h1 className="mb-5 text-3xl md:text-5xl font-bold">Hello there</h1>
                                            <p className="mb-5">Welcome to the heart of our company - our brands. These are the pillars of our existence, each with a unique purpose and mission. In this section, I invite you to get to know our family of brands, the very essence of what we do.</p>
                                            <button className="btn btn-sm lg:btn btn-primary">Get Started</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide1" className="btn btn-circle">❮</a>
                                    <a href="#slide3" className="btn btn-circle">❯</a>
                                </div>
                            </div>
                            <div id="slide3" className="carousel-item relative w-full">
                            <div className="hero " style={{ backgroundImage: `url(${brands[2]?.image})` }}>
                                    <div className="hero-overlay bg-opacity-30"></div>
                                    <div className="hero-content  text-neutral-content pr-96">
                                        <div className=" text-left ">
                                            <h1 className="mb-5 text-3xl md:text-5xl font-bold">Hello there</h1>
                                            <p className="mb-5">Welcome to the heart of our company - our brands. These are the pillars of our existence, each with a unique purpose and mission. In this section, I invite you to get to know our family of brands, the very essence of what we do.</p>
                                            <button className="btn btn-sm lg:btn btn-primary">Get Started</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide2" className="btn btn-circle">❮</a>
                                    <a href="#slide1" className="btn btn-circle">❯</a>
                                </div>
                            </div>
                        </div>
                    </div>
                        <div className='container mx-auto my-5'>
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                                {
                                    brands.map(brand => <Cart key={brand._id} brand={brand}></Cart>)
                                }
                            </div>
                        </div>
                    </div> :
                    <div className='flex justify-center items-center h-[70vh]'>
                        <p>sorry!</p>
                        <h1>Product of this brand is not available now!</h1>
                    </div>
            }
        </div>
    );
};

export default BrandItem;