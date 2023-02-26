import React from 'react';
import { useQuery } from 'react-query';
import { PropagateLoader } from 'react-spinners';

const AllServices = () => {
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
    console.log(AllFoodsData);
    return (
        <div>

        </div>
    );
};

export default AllServices;