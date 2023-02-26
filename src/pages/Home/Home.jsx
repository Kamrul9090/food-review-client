import React, { useState } from 'react';
import Banner from './Banner/Banner';
import Teams from './Teams';
const Home = () => {
    // const [foodData, setFooData] = useState([])
    fetch('allData.json')
        .then(res => res.json())
        .then(data => console.log(data));
    return (
        <div>
            <Banner></Banner>
            <Teams></Teams>
        </div>
    );
};

export default Home;