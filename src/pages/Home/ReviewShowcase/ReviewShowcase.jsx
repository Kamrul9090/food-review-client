import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Carousel from 'react-grid-carousel';

const ReviewShowcase = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://food-review-server-ten.vercel.app/review')
            .then(res => res.json())
            .then(data => setReviews(data));

    }, [])
    console.log(reviews);
    return (
        <div className='max-w-6xl mx-auto'>
            <h1 className='text-5xl text-center font-bold'>Reviews</h1>
            <Carousel cols={2} rows={1} gap={10} loop>
                {
                    reviews.map(review => <Carousel.Item>
                        <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 dark:bg-gray-900 dark:text-gray-100">
                            <div className="flex justify-between p-4">
                                <div className="flex space-x-4">
                                    <div>
                                        <img src={review.picture} alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold">{review.title}</h4>
                                        <span className="text-xs dark:text-gray-400">{review.name}</span>
                                    </div>
                                </div>
                                <span className="font-bold">{review.date}</span>
                            </div>
                            <div className="p-4 space-y-2 text-sm dark:text-gray-400">
                                <p>{review.review}</p>
                            </div>
                        </div>
                    </Carousel.Item>)
                }
            </Carousel>
        </div>
    );
};

export default ReviewShowcase;