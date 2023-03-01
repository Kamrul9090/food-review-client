import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { useQuery } from 'react-query';
import { PropagateLoader } from 'react-spinners';
import RiceCard from './RiceCard';

const Rice = () => {
    const { data: foodsData = [], isLoading } = useQuery({
        queryKey: ["foodsData"],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/foods');
            const data = res.json();
            return data;
        }
    })
    const riceData = foodsData[3]?.category;
    if (isLoading) {
        return <PropagateLoader></PropagateLoader>
    }
    return (
        <>
            <AnimationOnScroll initiallyVisible={true} animateIn="animate__backInUp">

                <div className='w-1/4 mx-auto text-center mb-20 text-blue-900'>
                    <h1 className='text-3xl font-bold'>See All Rice Foods</h1>
                    <p className='text-lg font-semibold'>here has our all-rice base foods collection.</p>
                </div>
            </AnimationOnScroll>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    riceData.map(rice => <RiceCard key={rice._id} rice={rice}></RiceCard>)
                }
            </div>
        </>
    );
};

export default Rice;