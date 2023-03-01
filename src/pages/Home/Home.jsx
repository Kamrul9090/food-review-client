import React, { useState } from 'react';
import DisplayServices from '../FoodServices/AllServices/DisplayServices/DisplayServices';
import Banner from './Banner/Banner';
import ContactUs from './ContactUs';
import Gallery from './Gallery/Gallery';
import Teams from './Teams';
const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <DisplayServices></DisplayServices>
            <Gallery></Gallery>
            <Teams></Teams>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;