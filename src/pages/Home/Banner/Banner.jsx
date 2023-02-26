import React from 'react';
import './Banner.css'
const Banner = () => {
    return (
        <div className='bg-img text-slate-100 font-mono mt-24'>
            <div className='w-full lg:w-1/2 mx-auto text-center'>
                <h1 className='text-2xl lg:text-6xl'>Welcome to <br /> <span className='text-green-600 font-bold'>Hot Foodies</span></h1>
                <p>We are Providing the most delicious foods. We have different variants of foods for our customers. Please check our food and choose your favorite foods. And don't forget for giving a review.</p>
            </div>
        </div>
    );
};

export default Banner;