import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ foodsData }) => {
    return (
        <>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img src={foodsData.image} alt="Card 1" className="w-full h-48 object-cover" />
                <div className="p-4">
                    <h2 className="text-lg font-medium text-gray-800">{foodsData.name}</h2>
                    <div className='flex items-center justify-between font-bold'>
                        <div className="flex items-center mt-2">
                            <svg className="w-5 h-5 fill-current text-yellow-500 mr-2" viewBox="0 0 24 24">
                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </svg>
                            <span className="text-gray-700">{foodsData.rating}</span>
                        </div>
                        <p className='line-through text-gray-400'>${foodsData.old_price}</p>
                        <p className='text-green-600'>${foodsData.new_price}</p>
                    </div>
                    <p className='text-center'>
                        {foodsData?.description.slice(0, 100) + "..."}
                    </p>
                    <Link to={`/details/${foodsData._id}`}><button className="mt-4 w-full   text-white py-2 px-4 rounded  bg-blue-900 dark:bg-green-500 dark:hover:bg-blue-900  hover:bg-green-500 transition-colors duration-300">Details</button></Link>
                </div>
            </div>

        </>
    );
};

export default ServiceCard;