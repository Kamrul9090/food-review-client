import React from 'react';
import { Link } from 'react-router-dom';
import allFoods from '../../../assets/logo/All.png'
import burger from '../../../assets/logo/burgur.png'
import fish from '../../../assets/logo/fish.png'
import meat from '../../../assets/logo/meat.png'
import rice from '../../../assets/logo/rice.png'
const AllServicesCategory = () => {
    return (
        <>
            <div >

            </div>
            <section className="p-6 my-6  text-blue-900 dark:text-gray-100">
                <div className="container grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-4">
                    <Link to="/AllServices/AllFoods">
                        <div className="flex px-2 space-x-2 rounded-lg shadow-xl md:space-x-6 bg-gray-200 dark:bg-gray-900 dark:text-gray-100">
                            <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-gray-200">
                                <img className='w-20 h-20' src={allFoods} alt="" srcset="" />
                            </div>
                            <div className="flex flex-col justify-center align-middle">
                                <p className="text-xl font-semibold leading-none">See All</p>
                                <p className="capitalize">Foods</p>
                            </div>
                        </div>
                    </Link>
                    <Link to="/AllServices/burger">
                        <div className="flex px-2 space-x-4 rounded-lg shadow-xl md:space-x-6 bg-gray-200 dark:bg-gray-900 dark:text-gray-100">
                            <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-gray-200">
                                <img className='w-20 h-20' src={burger} alt="" srcset="" />
                            </div>
                            <div className="flex flex-col justify-center align-middle">
                                <p className="text-xl font-semibold leading-none">See All</p>
                                <p className="capitalize">Burgers</p>
                            </div>
                        </div>
                    </Link>
                    <Link to="/AllServices/fish">
                        <div className="flex px-2 space-x-4 rounded-lg shadow-xl md:space-x-6 dark:bg-gray-900 bg-gray-200 dark:text-gray-100">
                            <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-gray-200">
                                <img className='w-20 h-20' src={fish} alt="" srcset="" />
                            </div>
                            <div className="flex flex-col justify-center align-middle">
                                <p className="text-xl font-semibold leading-none">See All</p>
                                <p className="capitalize">Fish</p>
                            </div>
                        </div>
                    </Link>
                    <Link to="/AllServices/meat">
                        <div className="flex px-2 space-x-4 rounded-lg shadow-xl md:space-x-6 dark:bg-gray-900 bg-gray-200 dark:text-gray-100">
                            <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-gray-200">
                                <img className='w-20 h-20' src={meat} alt="" srcset="" />
                            </div>
                            <div className="flex flex-col justify-center align-middle">
                                <p className="text-xl font-semibold leading-none">See All</p>
                                <p className="capitalize">Meats</p>
                            </div>
                        </div>
                    </Link>
                    <Link to="/AllServices/rice">
                        <div className="flex px-2 space-x-4 rounded-lg shadow-xl md:space-x-6 dark:bg-gray-900 bg-gray-200 dark:text-gray-100">
                            <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-gray-200">
                                <img className='w-20 h-20' src={rice} alt="" srcset="" />
                            </div>
                            <div className="flex flex-col justify-center align-middle">
                                <p className="text-xl font-semibold leading-none">See All</p>
                                <p className="capitalize">Rice</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </section>
        </>
    );
};

export default AllServicesCategory;