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
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <img src="https://via.placeholder.com/350x200" alt="Card 1" class="w-full h-48 object-cover" />
                    <div class="p-4">
                        <h2 class="text-lg font-medium text-gray-800">Card 1 Title</h2>
                        <div class="flex items-center mt-2">
                            <svg class="w-4 h-4 fill-current text-yellow-500 mr-2" viewBox="0 0 24 24">
                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </svg>
                            <span class="text-gray-700">4.8</span>
                        </div>
                        <button class="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300">Read More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;