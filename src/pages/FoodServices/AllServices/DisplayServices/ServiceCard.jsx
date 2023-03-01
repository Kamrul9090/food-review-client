import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ foodsData }) => {
    // console.log(foodsData._id);
    return (
        <>
            <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img src={foodsData.image} alt="Card 1" class="w-full h-48 object-cover" />
                <div class="p-4">
                    <h2 class="text-lg font-medium text-gray-800">{foodsData.name}</h2>
                    <div className='flex items-center justify-between font-bold'>
                        <div class="flex items-center mt-2">
                            <svg class="w-5 h-5 fill-current text-yellow-500 mr-2" viewBox="0 0 24 24">
                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </svg>
                            <span class="text-gray-700">{foodsData.rating}</span>
                        </div>
                        <p className='line-through text-gray-400'>${foodsData.old_price}</p>
                        <p className='text-green-600'>${foodsData.new_price}</p>
                    </div>
                    <p className='text-center'>
                        {foodsData?.description.slice(0, 100) + "..."}
                    </p>
                    <Link to={`/details/${foodsData._id}`}><button class="mt-4 w-full  bg-green-500 text-white py-2 px-4 rounded hover:bg-blue-900 transition-colors duration-300">Details</button></Link>
                </div>
            </div>

        </>
    );
};

export default ServiceCard;