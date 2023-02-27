import React from 'react';
import { useQuery } from 'react-query';
import { PropagateLoader } from 'react-spinners';
import BurgerCard from './BurgerCard';

const Burger = () => {

    const { data: foodsData = [], isLoading } = useQuery({
        queryKey: ["foodsData"],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/foods');
            const data = res.json();
            return data;
        }
    })
    const burgerData = foodsData[2]?.burger_category;
    if (isLoading) {
        return <PropagateLoader></PropagateLoader>
    }
    console.log(foodsData[2]?.burger_category);
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
            {
                burgerData.map(burger => <BurgerCard key={burger._id} burger={burger}></BurgerCard>)
            }
        </div>
    );
};

export default Burger;