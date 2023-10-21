import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Cart from '../../Components/Cart/Cart';
import LoadingRoute from '../../Components/LoadingRoute/LoadingRoute';
import { Link } from '@react-email/link';

const BrandItem = () => {

    const [brands, setBrands] = useState([]);
    const [length, setLength] = useState(false);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    const allBrands = useLoaderData();
    // console.log(allBrands);

    useEffect(() => {

        fetch('/Brands.json')
            .then(res => res.json())
            .then(data => {
                const brandSelect = data.find(brand => brand.id == id);

                const BrandsToShow = allBrands.filter(brand => brand.brandName.toLowerCase() == brandSelect.brandName.toLowerCase());

                if (BrandsToShow.length == 0) {
                    setLoading(true);
                    setLength(false);
                } else {
                    setLoading(false);
                    setLength(true);
                    setBrands(BrandsToShow);
                }
            })



    }, [id])
    return (
        <div>
            {/* <LoadingRoute loading={loading} length={length}> */}
            {
                length ? <>
                    <div>
                        <div className=''>
                            <div className="carousel w-full h-[60vh] lg:h-[90vh]">
                                <div id="slide1" className="carousel-item relative w-full">
                                    <div className="hero bg-opacity-50 bg-center bg-cover " style={{ backgroundImage: `url(${brands[0]?.image})` }}>
                                        <div className="hero-overlay bg-opacity-70"></div>
                                        <div className="  container mx-auto text-neutral-content px-12">
                                            <div className="block md:hidden text-left" >
                                                <h1 className="mb-2 lg:mb-5 text-3xl md:text-5xl font-bold">Hello there</h1>
                                                <p className="mb-2 lg:mb-5">Welcome to the heart of our company - our brands.</p>
                                                <Link href="mailto:asifahammednishst@gmail.com" className='btn btn-sm'>Contact Us</Link>
                                            </div>
                                            <div className="hidden md:block text-left">
                                                <h1 className="mb-2 lg:mb-5 text-3xl md:text-5xl font-bold">Hello there</h1>
                                                <p className="mb-2 lg:mb-5">Welcome to the heart of our company - our brands. These are the pillars of our existence, each with a unique purpose and mission. In this section, I invite you to get to know our family of brands, the very essence of what we do.</p>
                                                <Link href="mailto:asifahammednishst@gmail.com" className='btn btn-sm'>Contact Us</Link>
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
                                        <div className="hero-overlay bg-opacity-70"></div>
                                        <div className="  container mx-auto text-neutral-content px-12">
                                            <div className="block md:hidden text-left" >
                                                <h1 className="mb-2 lg:mb-5 text-3xl md:text-5xl font-bold">Hello there</h1>
                                                <p className="mb-2 lg:mb-5">Welcome to the heart of our company - our brands.</p>
                                                <Link href="mailto:asifahammednishst@gmail.com" className='btn btn-sm'>Contact Us</Link>
                                            </div>
                                            <div className="hidden md:block text-left">
                                                <h1 className="mb-2 lg:mb-5 text-3xl md:text-5xl font-bold">Hello there</h1>
                                                <p className="mb-2 lg:mb-5">Welcome to the heart of our company - our brands. These are the pillars of our existence, each with a unique purpose and mission. In this section, I invite you to get to know our family of brands, the very essence of what we do.</p>
                                                <Link href="mailto:asifahammednishst@gmail.com" className='btn btn-sm'>Contact Us</Link>
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
                                        <div className="hero-overlay bg-opacity-70"></div>
                                        <div className="  container mx-auto text-neutral-content px-12">
                                            <div className="block md:hidden text-left" >
                                                <h1 className="mb-2 lg:mb-5 text-3xl md:text-5xl font-bold">Hello there</h1>
                                                <p className="mb-2 lg:mb-5">Welcome to the heart of our company - our brands.</p>
                                                <Link href="mailto:asifahammednishst@gmail.com" className='btn btn-sm'>Contact Us</Link>
                                            </div>
                                            <div className="hidden md:block text-left">
                                                <h1 className="mb-2 lg:mb-5 text-3xl md:text-5xl font-bold">Hello there</h1>
                                                <p className="mb-2 lg:mb-5">Welcome to the heart of our company - our brands. These are the pillars of our existence, each with a unique purpose and mission. In this section, I invite you to get to know our family of brands, the very essence of what we do.</p>
                                                <Link href="mailto:asifahammednishst@gmail.com" className='btn btn-sm'>Contact Us</Link>
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
                    </div>
                </> : <>
                <div className='text-center flex items-center justify-center h-[90vh]'>
                    <h1>This brand product is not available now!</h1>
                </div>
                </>
            }

            {/* </LoadingRoute> */}
        </div>
    );
};

export default BrandItem;