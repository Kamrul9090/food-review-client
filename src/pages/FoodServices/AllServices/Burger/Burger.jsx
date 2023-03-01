import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { useQuery } from 'react-query';
import { PropagateLoader } from 'react-spinners';
import BurgerCard from './BurgerCard';

const Burger = () => {

    const { data: foodsData = [], isLoading } = useQuery({
        queryKey: ["foodsData"],
        queryFn: async () => {
            const res = await fetch('https://food-review-server-ten.vercel.app/foods');
            const data = res.json();
            return data;
        }
    })
    const burgerData = foodsData[2]?.category;
    if (isLoading) {
        return <PropagateLoader></PropagateLoader>
    }
    for (const a of foodsData) {
        const data = a.category;
        // for (const foods of data) {
        //     console.log(foods.name);
        // }
        console.log(data.find(d => d.name === "BBQ Bacon Burger"));
    }
    console.log(foodsData);
    return (
        <>
            <AnimationOnScroll initiallyVisible={true} animateIn="animate__backInUp">

                <div className='w-1/4 mx-auto text-center mb-20 text-blue-900'>
                    <h1 className='text-3xl font-bold'>See All Burgers.</h1>
                    <p className='text-lg font-semibold'>here has our all-burgers foods collection.</p>
                </div>
            </AnimationOnScroll>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    burgerData.map(burger => <BurgerCard key={burger._id} burger={burger}></BurgerCard>)
                }
            </div>
        </>
    );
};

export default Burger;