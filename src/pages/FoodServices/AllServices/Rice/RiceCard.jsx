import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

const RiceCard = ({ rice }) => {
    const { image, name, description, new_price, old_price, rating } = rice;

    return (
        <div className="max-w-xs rounded-md shadow-xl bg-gray-200 text-blue-900 dark:bg-gray-900 dark:text-gray-100 relative">
            <PhotoProvider>
                <PhotoView src={image}>
                    <img src={image} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                </PhotoView>
            </PhotoProvider>
            <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                    <div className="flex items-center justify-between mt-2">
                        <div>
                            <span className=" font-bold text-xl mr-2">${new_price}</span>
                            <span className="text-gray-700 font-bold text-sm line-through">${old_price}</span>
                        </div>
                        <div className='flex items-center'>
                            <svg className="w-5 h-5 fill-current text-yellow-500 mr-2" viewBox="0 0 24 24">
                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </svg>
                            <span className="text-gray-600 text-sm">{rating}</span>
                        </div>
                    </div>
                    <div className='h-40'>
                        <h2 className="text-xl font-semibold tracking-wide">{name}</h2>
                        <p className="dark:text-gray-100 text-justify">{description.slice(0, 100) + "..."}</p>
                    </div>
                    <Link><button type="button" className="flex items-center justify-center absolute bottom-0 left-0 w-full py-3 font-semibold tracking-wide rounded-md bg-gray-300 shadow-xl dark:bg-green-600 dark:text-gray-900">Buy Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default RiceCard;