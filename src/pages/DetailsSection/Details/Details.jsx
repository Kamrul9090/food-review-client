import React from 'react';
import { useQuery } from 'react-query';
import { Link, useLoaderData } from 'react-router-dom';
import { PropagateLoader } from 'react-spinners';

const Details = () => {
    const singleFoodData = useLoaderData();
    console.log(singleFoodData);
    const { _id, image, name, rating, old_price, new_price, description } = singleFoodData;
    // All category foods data
    const { data: foodsData = [], isLoading } = useQuery({
        queryKey: ["foodsData"],
        queryFn: async () => {
            const res = await fetch(`https://food-review-server-ten.vercel.app/foods`)
            const data = res.json()
            return data;
        }
    })
    console.log(foodsData);

    if (isLoading) {
        return <PropagateLoader></PropagateLoader>
    }
    return (
        <div className='py-40'>
            <section className="dark:bg-gray-800 dark:text-blue-900">
                <div className="container flex flex-col-reverse mx-auto lg:flex-row">
                    <div className="flex flex-col px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5 bg-gray-200 text-blue-900 dark:bg-green-600 dark:text-gray-300">
                        <div className="flex space-x-2 sm:space-x-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                            </svg>
                            <div className="space-y-2">
                                <p className="text-lg font-medium leading-snug">{name}</p>
                                <p className="leading-snug">{description}</p>
                            </div>
                        </div>
                        <div className="flex space-x-2 sm:space-x-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                            </svg>
                            <div className="space-y-2">
                                <p className="text-lg font-medium leading-snug">Others Info</p>
                                <div>
                                    <div>
                                        <span className=" font-bold text-xl mr-2">New Price: ${new_price}</span>
                                        <span className="text-gray-700 font-bold text-sm line-through">Old Price: ${old_price}</span>
                                    </div>
                                    <div className='flex items-center'>
                                        <span>Rating:</span>
                                        <svg className="w-5 h-5 fill-current text-yellow-500 mr-2" viewBox="0 0 24 24">
                                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                        </svg>
                                        <span className="text-gray-600 text-sm">{rating}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex space-x-2 sm:space-x-4">
                            <button type="button" className="flex items-center justify-center py-3 font-semibold tracking-wide rounded-md bg-blue-900 text-white dark:bg-gray-200 dark:text-black px-2">Buy Now</button>
                            <Link to={`/review/${_id}`}><button type="button" className="flex items-center justify-center py-3 font-semibold tracking-wide rounded-md bg-blue-900 text-white dark:bg-gray-200 dark:text-black px-2">Review</button></Link>
                        </div>
                    </div>
                    <div className="lg:w-1/2 xl:w-3/5 dark:bg-gray-800">
                        <div className="flex items-center justify-center p-4 md:p-8 lg:p-12">
                            <img src={image} alt="" className="rounded-lg w-full shadow-lg dark:bg-gray-500 aspect-video sm:min-h-96" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Details;