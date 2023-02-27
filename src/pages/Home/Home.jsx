import React, { useState } from 'react';
import DisplayServices from '../FoodServices/AllServices/DisplayServices/DisplayServices';
import Banner from './Banner/Banner';
import Teams from './Teams';
const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <DisplayServices></DisplayServices>
            <Teams></Teams>
        </div>
    );
};

export default Home;