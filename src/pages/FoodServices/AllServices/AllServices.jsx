import React from 'react';
import { useQuery } from 'react-query';
import { Outlet } from 'react-router-dom';
import { PropagateLoader } from 'react-spinners';
import AllServicesCategory from './AllServicesCategory';

const AllServices = () => {
    // const { data: AllFoodsData = [], isLoading } = useQuery({
    //     queryKey: ['AllFoodsData'],
    //     queryFn: async () => {
    //         const res = await fetch(`http://localhost:5000/AllServices`);
    //         const data = res.json();
    //         return data;
    //     }
    // })
    // if (isLoading) {
    //     return <PropagateLoader></PropagateLoader>
    // }
    return (
        <div className='mt-40 max-w-6xl mx-auto'>
            <AllServicesCategory></AllServicesCategory>
            <div className='my-20 max-w-6xl mx-auto'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default AllServices;