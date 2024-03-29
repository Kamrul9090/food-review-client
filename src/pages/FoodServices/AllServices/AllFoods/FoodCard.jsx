import React from 'react';
import { Link } from 'react-router-dom';

const FoodCard = ({ food }) => {
    const { image, name, description, rating, old_price, new_price, _id } = food;

    return (
        <>
            <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-4 mb-4">
                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                    <img className="w-full h-64 object-cover object-center" src={image} alt='' />
                    <div className="p-4 h-auto">
                        <h2 className="text-gray-900 font-bold text-2xl mb-2">{name}</h2>
                        <p className="text-gray-600 text-base">{description}</p>
                        <div className="flex items-center mt-2">
                            <span className="text-gray-900 font-bold text-xl mr-2">${new_price}</span>
                            <span className="text-gray-600 text-sm line-through">${old_price}</span>
                            <span className="text-green-600 text-sm ml-auto">20% off</span>
                        </div>
                        <div className="flex items-center mt-4">
                            <Link to={`/details/${_id}`}><button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">Details</button></Link>
                            <div className="flex items-center ml-auto">
                                <svg className="w-5 h-5 fill-current text-yellow-500 mr-2" viewBox="0 0 24 24">
                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                </svg>
                                <span className="text-gray-600 text-sm">{rating}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FoodCard;