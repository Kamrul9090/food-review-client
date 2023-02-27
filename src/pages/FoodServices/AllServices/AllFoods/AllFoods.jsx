import React from 'react';
import { useQuery } from 'react-query';
import { PropagateLoader } from 'react-spinners';
import FoodCard from './FoodCard';
import 'animate.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';
const AllFoods = () => {
    const { data: AllFoods = [], isLoading } = useQuery({
        queryKey: ["AllFoods"],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/AllFoods`)
            const data = await res.json()
            return data;
        }
    })
    console.log(AllFoods);
    if (isLoading) {
        return <PropagateLoader></PropagateLoader>
    }
    return (
        <div>
            <AnimationOnScroll initiallyVisible={true} animateIn="animate__backInUp">

                <div className='w-1/4 mx-auto text-center mb-20 text-blue-900'>
                    <h1 className='text-3xl font-bold'>See All Foods</h1>
                    <p className='text-lg font-semibold'>There has our all-foods collection. Like Meat,  Fast food, Fish and Rice, base foods.</p>
                </div>
            </AnimationOnScroll>
            <div class="flex flex-wrap -mx-4">
                {
                    AllFoods.map(food => <FoodCard key={food._id} food={food}></FoodCard>)
                }

            </div>
        </div>
    );
};

export default AllFoods;