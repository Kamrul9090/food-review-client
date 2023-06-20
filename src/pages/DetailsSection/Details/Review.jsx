import { format } from 'date-fns';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';

const Review = () => {
    const singleFoodData = useLoaderData();

    const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();
    const publishDate = new Date();
    const date = format(publishDate, 'PP')

    const onSubmit = data => {
        const review = {
            title: singleFoodData.name,
            picture: singleFoodData.image,
            date: date,
            name: data.name,
            review: data.review
        }

        fetch(`https://food-review-server-ten.vercel.app/review`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)

        })
            .then(res => res.json())
            .then(data => {
                if (data?.message) {
                    toast.success(data.message)
                    reset()
                } else {
                    toast.error(data.error)
                }
            })
    }
    return (
        <div className='nax-w-6xl mx-auto py-20'>
            <h1 className='text-5xl'>Add Your Review</h1>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col my-10 space-y-5'>
                <input type="text" placeholder='title' className='outline-none border-2 py-2 px-5 bg-gray-200 rounded-lg' defaultValue={singleFoodData.name} disabled />
                <input type="text"
                    {...register("name")}
                    placeholder='your name...' name="name" className='outline-none border-2 py-2 px-5 bg-gray-200 rounded-lg' />
                <textarea name="review"
                    {...register("review")}
                    id="" cols="30" rows="10" className='outline-none border-2 py-2 px-5 bg-gray-200 rounded-lg'></textarea>
                <button type="submit" className="flex items-center justify-center py-3 font-semibold tracking-wide rounded-md bg-blue-900 text-white dark:bg-gray-200 dark:text-black px-2">Add Review</button>
            </form>
        </div>
    );
};

export default Review;