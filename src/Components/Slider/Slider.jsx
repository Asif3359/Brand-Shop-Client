
const Slider = () => {
    return (
        <div>
            <div>
                <div className="carousel w-full h-[300px]  md:h-[60vh] lg:h-[90vh]">
                    <div id="slide1" className="carousel-item relative w-full">
                        <div className="hero " style={{ backgroundImage: 'url(https://www.mercedes-benz.com/content/dam/brandhub/assets/innovation/concept-cars/vision-one-eleven/stage/06-2023/images/mercedes-benz-vision-111-stage-3840x2160-06-2023.cbv20230606193723.jpg/_jcr_content/renditions/mq7-original-aspect.jpeg)' }}>
                            <div className="hero-overlay bg-opacity-60"></div>
                            <div className="hero-content  text-neutral-content">
                                <div className=" text-left ">
                                    <h1 className="mb-5 text-3xl md:text-5xl font-bold">Hello there</h1>
                                    <p className="mb-5">Welcome to the heart of our company - our brands. These are the pillars of our existence, each with a unique purpose and mission. In this section, I invite you to get to know our family of brands, the very essence of what we do.</p>
                                    <button className="btn btn-sm lg:btn btn-primary">Get Started</button>
                                </div>
                            </div>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-sm lg:btn-lg btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-sm lg:btn-lg btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <div className="hero " style={{ backgroundImage: 'url(https://www.mercedes-benz.com/content/dam/brandhub/assets/innovation/concept-cars/concept-cla-class/stage/09-2023/images/mercedes-benz-iaa-sc055-stage-3840x2160-09-2023.cbv20230903160535.jpg/_jcr_content/renditions/mq7-original-aspect.jpeg)' }}>
                            <div className="hero-overlay bg-opacity-60"></div>
                            <div className="hero-content  text-neutral-content">
                                <div className=" text-left ">
                                    <h1 className="mb-5 text-3xl md:text-5xl font-bold">Hello there</h1>
                                    <p className="mb-5">Welcome to the heart of our company - our brands. These are the pillars of our existence, each with a unique purpose and mission. In this section, I invite you to get to know our family of brands, the very essence of what we do.</p>
                                    <button className="btn btn-sm lg:btn btn-primary">Get Started</button>
                                </div>
                            </div>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-sm lg:btn-lg btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-sm lg:btn-lg btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <div className="hero " style={{ backgroundImage: 'url(https://www.mercedes-benz.com/content/dam/brandhub/assets/vehicles/mercedes-maybach/mercedes-maybach-s-class-z223/stage/11-2020/images/mercedes-maybach-s-class-z223-stage-3400x1440-11-2020.cbv20230517105537.jpg/_jcr_content/renditions/mq7-original-aspect.jpeg)' }}>
                            <div className="hero-overlay bg-opacity-60"></div>
                            <div className="hero-content  text-neutral-content">
                                <div className=" text-left ">
                                    <h1 className="mb-5 text-3xl md:text-5xl font-bold">Hello there</h1>
                                    <p className="mb-5">Welcome to the heart of our company - our brands. These are the pillars of our existence, each with a unique purpose and mission. In this section, I invite you to get to know our family of brands, the very essence of what we do.</p>
                                    <button className="btn btn-sm lg:btn btn-primary">Get Started</button>
                                </div>
                            </div>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-sm lg:btn-lg btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-sm lg:btn-lg btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <div className="hero " style={{ backgroundImage: 'url(https://www.mercedes-benz.com/content/dam/brandhub/assets/vehicles/mercedes-maybach/mercedes-maybach-s-class-z223/stage/11-2020/images/mercedes-maybach-s-class-z223-stage-3400x1440-11-2020.cbv20230517105537.jpg/_jcr_content/renditions/mq7-original-aspect.jpeg)' }}>
                            <div className="hero-overlay bg-opacity-60"></div>
                            <div className="hero-content  text-neutral-content">
                                <div className=" text-left ">
                                    <h1 className="mb-5 text-3xl md:text-5xl font-bold">Hello there</h1>
                                    <p className="mb-5">Welcome to the heart of our company - our brands. These are the pillars of our existence, each with a unique purpose and mission. In this section, I invite you to get to know our family of brands, the very essence of what we do.</p>
                                    <button className="btn btn-sm lg:btn btn-primary">Get Started</button>
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

// https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/news/2023/10_17_autostyle/cover.jpg
// https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/news/2023/09_14_ubisoft/ubi_cover.jpg
// https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/news/2023/07_25_porto_cervo/cover_d.jpg