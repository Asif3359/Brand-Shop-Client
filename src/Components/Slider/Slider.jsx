import { Link } from '@react-email/link';

const Slider = () => {
    return (
        <div>
            <div>
                <div className="carousel w-full h-[300px]  md:h-[60vh] lg:h-[90vh]">
                    <div id="slide1" className="carousel-item relative w-full">
                        <div className="hero " style={{ backgroundImage: 'url(https://th.bing.com/th/id/R.d08df49da7cdd8bcdbbd7b66a8ccddc9?rik=UJA%2bMIH9cB%2bGcA&riu=http%3a%2f%2fhdqwalls.com%2fwallpapers%2fnissan-gtr-5k-2019-uh.jpg&ehk=KwrQdxUFA7oSpVNu%2bGd26zE4RzcK6lQzKSMWgE5q1cE%3d&risl=1&pid=ImgRaw&r=0)' }}>
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
                                        {/* <Link href="mailto:asifahammednishst@gmail.com" className='btn btn-sm'>Contact Us</Link> */}
                                        <Link href="mailto:asifahammednishst@gmail.com" className='btn btn-sm'>Contact Us</Link>
                                    </div>
                            </div>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-sm lg:btn-lg btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-sm lg:btn-lg btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                    <div className="hero " style={{ backgroundImage: 'url(https://images.pexels.com/photos/15646673/pexels-photo-15646673/free-photo-of-nissan-silvia-s14-on-drifting-on-a-track.jpeg?auto=compress&cs=tinysrgb&w=1600)' }}>
                            <div className="hero-overlay bg-opacity-70"></div>
                            <div className="  container mx-auto text-neutral-content px-12 ">
                                <div className=" text-left ">
                                    <div className="block md:hidden text-left" >
                                        <h1 className="mb-2 lg:mb-5 text-3xl md:text-5xl font-bold">Hello there</h1>
                                        <p className="mb-2 lg:mb-5">Welcome to the heart of our company - our brands.</p>
                                    </div>
                                    <div className="hidden md:block text-left">
                                        <h1 className="mb-2 lg:mb-5 text-3xl md:text-5xl font-bold">Hello there</h1>
                                        <p className="mb-2 lg:mb-5">Welcome to the heart of our company - our brands. These are the pillars of our existence, each with a unique purpose and mission. In this section, I invite you to get to know our family of brands, the very essence of what we do.</p>
                                    </div>
                                    <Link href="mailto:asifahammednishst@gmail.com" className='btn btn-sm'>Contact Us</Link>
                                </div>
                            </div>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-sm lg:btn-lg btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-sm lg:btn-lg btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <div className="hero " style={{ backgroundImage: 'url(https://images.pexels.com/photos/13602150/pexels-photo-13602150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)' }}>
                            <div className="hero-overlay bg-opacity-70"></div>
                            <div className="  container mx-auto text-neutral-content px-12 ">
                                <div className=" text-left ">
                                    <div className="block md:hidden text-left" >
                                        <h1 className="mb-2 lg:mb-5 text-3xl md:text-5xl font-bold">Hello there</h1>
                                        <p className="mb-2 lg:mb-5">Welcome to the heart of our company - our brands.</p>
                                    </div>
                                    <div className="hidden md:block text-left">
                                        <h1 className="mb-2 lg:mb-5 text-3xl md:text-5xl font-bold">Hello there</h1>
                                        <p className="mb-2 lg:mb-5">Welcome to the heart of our company - our brands. These are the pillars of our existence, each with a unique purpose and mission. In this section, I invite you to get to know our family of brands, the very essence of what we do.</p>
                                    </div>
                                    <Link href="mailto:asifahammednishst@gmail.com" className='btn btn-sm'>Contact Us</Link>
                                </div>
                            </div>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-sm lg:btn-lg btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-sm lg:btn-lg btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <div className="hero " style={{ backgroundImage: 'url(https://images.pexels.com/photos/17918291/pexels-photo-17918291/free-photo-of-white-tuned-nissan-gt-r.jpeg?auto=compress&cs=tinysrgb&w=1600)' }}>
                            <div className="hero-overlay bg-opacity-70"></div>
                            <div className="  container mx-auto text-neutral-content px-12 ">
                                <div className=" text-left ">
                                    <div className="block md:hidden text-left" >
                                        <h1 className="mb-2 lg:mb-5 text-3xl md:text-5xl font-bold">Hello there</h1>
                                        <p className="mb-2 lg:mb-5">Welcome to the heart of our company - our brands.</p>
                                    </div>
                                    <div className="hidden md:block text-left">
                                        <h1 className="mb-2 lg:mb-5 text-3xl md:text-5xl font-bold">Hello there</h1>
                                        <p className="mb-2 lg:mb-5">Welcome to the heart of our company - our brands. These are the pillars of our existence, each with a unique purpose and mission. In this section, I invite you to get to know our family of brands, the very essence of what we do.</p>
                                    </div>
                                    <Link href="mailto:asifahammednishst@gmail.com" className='btn btn-sm'>Contact Us</Link>
                                </div>
                            </div>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-sm lg:btn-lg btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-sm lg:btn-lg btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;
