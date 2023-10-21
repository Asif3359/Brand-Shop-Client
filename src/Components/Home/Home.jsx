import React, { useContext } from 'react';
import Slider from '../Slider/Slider';
import { AuthContext } from '../../AuthProviders/AuthProvider';
import Brands from '../Brands/Brands';
import AboutUs from '../AboutUs/AboutUs';
import UserComments from '../UserComments/UserComments';
import Statistics from '../Statistics/Statistics';

const Home = () => {

    return (
        <div>
            <Slider></Slider>
            <div className='space-y-10 container mx-auto mb-5'>
                <div>
                    <Brands></Brands>
                </div>
                <div>
                    <AboutUs></AboutUs>
                </div>
                <div>
                    <UserComments></UserComments>
                </div>
                <div>
                    <Statistics></Statistics>
                </div>
            </div>
        </div>
    );
};

export default Home;