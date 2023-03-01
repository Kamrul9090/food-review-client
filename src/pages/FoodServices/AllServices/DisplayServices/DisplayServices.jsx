import React from 'react';
import { useQuery } from 'react-query';
import { PropagateLoader } from 'react-spinners';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import 'animate.css';
import ServiceCard from './ServiceCard';
import { Link } from 'react-router-dom';
const DisplayServices = () => {
    const { data: AllFoodsData = [], isLoading } = useQuery({
        queryKey: ['AllFoodsData'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/AllServices`);
            const data = res.json();
            return data;
        }
    })
    if (isLoading) {
        return <PropagateLoader></PropagateLoader>
    }

    return (
        <>
            <AnimationOnScroll initiallyVisible={true} animateIn="animate__backInUp">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto mt-20">
                    {
                        AllFoodsData.map(foodsData => <ServiceCard key={foodsData._id} foodsData={foodsData}></ServiceCard>)

                    }
                </div>
                <div className='flex justify-center mt-10'>
                    <Link to="/AllServices"><button class="mt-4 w-52 bg-green-500 text-white py-2 px-4 rounded hover:bg-blue-900 transition-colors duration-300">See All</button></Link>
                </div>
            </AnimationOnScroll>
        </>
    );
};

export default DisplayServices;