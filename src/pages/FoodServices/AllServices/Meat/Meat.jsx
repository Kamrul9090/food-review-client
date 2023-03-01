import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { useQuery } from 'react-query';
import { PropagateLoader } from 'react-spinners';
import MeatCard from './MeatCard';

const Meat = () => {
    const { data: foodsData = [], isLoading } = useQuery({
        queryKey: ["foodsData"],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/foods');
            const data = res.json();
            return data;
        }
    })
    const meatData = foodsData[1]?.category;
    if (isLoading) {
        return <PropagateLoader></PropagateLoader>
    }
    return (
        <>
            <AnimationOnScroll initiallyVisible={true} animateIn="animate__backInUp">

                <div className='w-1/4 mx-auto text-center mb-20 text-blue-900'>
                    <h1 className='text-3xl font-bold'>See All Meats Foods</h1>
                    <p className='text-lg font-semibold'>here has our all-meats base foods collection.</p>
                </div>
            </AnimationOnScroll>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    meatData.map(meat => <MeatCard key={meat._id} meat={meat}></MeatCard>)
                }
            </div>
        </>
    );
};

export default Meat;