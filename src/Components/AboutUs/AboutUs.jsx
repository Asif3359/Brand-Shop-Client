import React from 'react';

const AboutUs = () => {
    return (
        <div className='container mx-auto'>
            <div>
                <h1 className='text-center text-4xl font-bold'>About Us</h1>
                <div className='p-4 text-center w-full lg:w-4/5 mx-auto'>
                    <p>AA<sub>3</sub> - your Dream Partner

                        At AA<sub>3</sub>, we are dedicated to crafting unforgettable experiences. With years of expertise in the automotive industry, we have solidified our position as a reliable partner for individuals and businesses looking to host remarkable automotive events.</p>
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
                            <p> Central to our mission at AA<sub>3</sub> is our unwavering commitment to transforming your automotive dreams into reality. We understand that every automotive event is a one-of-a-kind experience, and our goal is to infuse each project with creativity, precision, and a personal touch that sets it apart from the rest.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;