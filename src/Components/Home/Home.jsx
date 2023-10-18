import React, { useContext } from 'react';
import Slider from '../Slider/Slider';
import { AuthContext } from '../../AuthProviders/AuthProvider';
import Brands from '../Brands/Brands';

const Home = () => {

    return (
        <div>
            <Slider></Slider>
            <div>
                <Brands></Brands>
            </div>
        </div>
    );
};

export default Home;