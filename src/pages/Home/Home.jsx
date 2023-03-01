import React, { useState } from 'react';
import DisplayServices from '../FoodServices/AllServices/DisplayServices/DisplayServices';
import Banner from './Banner/Banner';
import Bonus from './Bonus';
import ContactUs from './ContactUs';
import Feature from './Feature';
import Gallery from './Gallery/Gallery';
import Teams from './Teams';
const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <DisplayServices></DisplayServices>
            <Gallery></Gallery>
            <Teams></Teams>
            <Bonus></Bonus>
            <Feature></Feature>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;