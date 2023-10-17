import React from 'react';
import { CCarousel, CCarouselCaption, CCarouselItem, CImage } from '@coreui/react';
import 'bootstrap/dist/css/bootstrap.min.css'


const Slider = () => {
    return (
        <div>
            <div>
                <CCarousel controls indicators >
                    <CCarouselItem>
                        <CImage className="d-block w-100 h-[90vh] " src={`https://www.topgear.com/sites/default/files/2022/07/13.jpg`} alt="slide 1" />
                        <CCarouselCaption className="hidden d-md-block">
                            <div className='bg-gray-400 bg-opacity-30 p-2 rounded-md shadow-inherit'>
                                <h5>First slide label</h5>
                                <p>Some representative placeholder content for the first slide.</p>
                            </div>
                        </CCarouselCaption>
                    </CCarouselItem>
                    <CCarouselItem>
                        <CImage className="d-block w-100 h-[90vh]" src={`https://www.topgear.com/sites/default/files/2022/07/13.jpg`} alt="slide 2" />
                        <CCarouselCaption className="hidden d-md-block">
                            <div className='bg-gray-400 bg-opacity-30 p-2 rounded-md shadow-inherit '>
                                <h5>Second slide label</h5>
                                <p>Some representative placeholder content for the first slide.</p>
                            </div>
                        </CCarouselCaption>
                    </CCarouselItem>
                    <CCarouselItem>
                        <CImage className="d-block w-100 h-[90vh]" src={`https://www.topgear.com/sites/default/files/2022/07/13.jpg`} alt="slide 3" />
                        <CCarouselCaption className="hidden d-md-block md:block">
                            <div className='bg-gray-400 bg-opacity-30 p-2 rounded-md shadow-inherit '>
                                <h5>Third slide label</h5>
                                <p>Some representative placeholder content for the first slide.</p>
                            </div>
                        </CCarouselCaption>
                    </CCarouselItem>
                </CCarousel>
            </div>
        </div>
    );
};

export default Slider;