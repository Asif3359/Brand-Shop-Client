import React from 'react';

const AboutUs = () => {
    return (
        <div className='container mx-auto'>
            <div>
                <h1 className='text-center text-4xl font-bold'>About Us</h1>
                <div className='p-4 text-center w-full lg:w-4/5 mx-auto'>
                    <p>Corporate Nexus Events Event - Your Premier Event Management Partner

                        At Corporate Nexus Events Event, we are passionate about creating unforgettable experiences. With XyZ Event years of experience in the event management industry, we have established ourselves as a trusted partner for individuals and businesses seeking to host extraordinary events.</p>
                </div>
                <div className='flex flex-col lg:flex-row gap-5 justify-between items-center mt-5 p-2 lg:p-10 '>
                    <div className='flex-1' data-aos="fade-right">
                        <img className='rounded-lg w-full' src="https://www.autoserviceworld.com/wp-content/uploads/2020/08/Team.jpg" alt="" />
                    </div>
                    <div className='flex-1 p-3' >
                        <div>
                            <h1 className='font-bold text-3xl'>Our Mission</h1>
                        </div>
                        <div className='mt-5 w-full'>
                            <p> At the heart of our mission is the commitment to turning your vision into reality. We believe that every event is unique, and we strive to bring creativity, precision, and a personal touch to each project we undertake.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;