import React from 'react';
import img1 from '../../assets/blogs/blogs (2).jpg'
import img3 from '../../assets/blogs/blogs (3).jpg'
const Feature = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 max-w-6xl mx-auto py-10 dark:bg-gray-900 dark:text-gray-100 text-blue-900 mb-20 px-5'>
            <div className='relative'>
                <img src={img1} alt="" srcset="" className='h-3/4 w-full lg:w-3/4' />
                <img src={img3} alt="" srcset="" className='w-1/2 absolute top-80 left-40 lg:left-64 rounded-3xl shadow-2xl shadow-slate-400 border-4 border-gray-200' />
            </div>
            <div className='font-semibold text-center lg:pt-28'>
                <h1 className='text-3xl'>Fast food has become a ubiquitous part of our modern world</h1>
                <p>
                    Fast food has become a ubiquitous part of our modern world. We often find ourselves rushing through our busy lives, with little time to prepare a healthy meal. This is where fast food comes in - quick, convenient and easily available. However, while fast food can be a convenient option, it's important to be aware of its potential drawbacks.
                </p>
            </div>
        </div>
    );
};

export default Feature;