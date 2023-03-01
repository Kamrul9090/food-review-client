import React, { useState } from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { PropagateLoader } from 'react-spinners';

const Gallery = () => {
    const { data: foodsData = [], isLoading } = useQuery({
        queryKey: ["foodsData"],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/foods');
            const data = res.json();
            return data;
        }
    })
    const fishImg = foodsData[0]?.category[2].image;
    const fishImg2 = foodsData[0]?.category[4].image;
    const burgerImg = foodsData[1]?.category[1].image;
    const riceImg = foodsData[2]?.category[2].image;
    const meatImg = foodsData[3]?.category[3].image;

    console.log(foodsData[0]?.category[0].image);
    if (isLoading) {
        return <PropagateLoader></PropagateLoader>
    }
    return (
        <AnimationOnScroll initiallyVisible={true} animateIn="animate__bounceInLeft">
            <h1 className='text-center mt-20 text-4xl font-bold font-mono text-blue-900 dark:text-green-600'>See Our Foods</h1>
            <section className="py-6 dark:bg-gray-800 dark:text-gray-50">
                <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
                    <Link to='/AllServices/fish' className='className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square'>
                        <img src={fishImg} alt="" className="aspect-square" title='Fish Items' />
                    </Link>
                    <Link to='/AllServices/burger' className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500">
                        <img alt="" src={burgerImg} className="aspect-square" title='Burger Items' />
                    </Link>
                    <Link to='/AllServices/rice' className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500">
                        <img alt="" src={riceImg} className="aspect-square" title='rice base foods Items' />
                    </Link>
                    <Link to='/AllServices/meat' className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500">
                        <img alt="" src={meatImg} className="aspect-square" title='Meats Items' />
                    </Link>
                    <Link to='/AllServices/allFoods' className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500">
                        <img alt="" src={fishImg2} className="aspect-square" title='Fish Items' />
                    </Link>
                </div>
            </section>
        </AnimationOnScroll>

    );
};

export default Gallery;