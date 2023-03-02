import { format } from 'date-fns';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import "./uploadImage.css"

const BlogsForm = () => {
    const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm()
    const publishDate = new Date();
    const date = format(publishDate, 'PP')
    const imageHostKey = process.env.REACT_APP_imageBBkey;
    const onSubmit = (e) => {
        const image = e.image[0];
        const data = new FormData();
        data.append("image", image)
        fetch(`https://api.imgbb.com/1/upload?key=${imageHostKey}`, {
            method: "POST",
            body: data,
        })
            .then(res => res.json())
            .then(data => {
                const blogsData = {
                    "title": e.title,
                    "message": e.message,
                    "image": data.data.display_url,
                    "publishDate": date,
                }
                fetch('http://localhost:5000/blogs', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(blogsData)
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
            })
    }
    return (
        <div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20 dark:bg-gray-900 bg-gray-300 p-5'>
                <div className='space-y-5 pt-20 dark:text-gray-100 text-blue-900'>
                    <h1 className='text-5xl font-bold'>Write Your Blogs</h1>
                    <p className='text-lg'>Food blogs have become increasingly popular in recent years, with people turning to the internet to find inspiration for their next meal. These blogs can range from simple recipe collections to more in-depth explorations of specific cuisines or cooking techniques.</p>
                </div>
                <div>
                    <div className="flex flex-col max-w-xl p-8 shadow-sm rounded-xl lg:p-12 dark:bg-gray-900 text-blue-900 dark:text-gray-100">
                        <div className="flex flex-col items-center w-full">
                            <h2 className="text-2xl font-semibold text-center mb-5">Write about your favourite foods</h2>
                            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-full space-y-5">
                                <input {...register("title")} type="text" placeholder='Foods title' className='rounded p-2 text-blue-900' required />
                                <div class="flex flex-col items-center justify-center mt-8">
                                    <label
                                        for="file-upload"
                                        class="px-4 py-2 text-sm font-medium text-white bg-blue-900 rounded-full cursor-pointer hover:bg-blue-600 focus:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    >
                                        Choose a Picture
                                    </label>
                                    <input {...register("image")} id="file-upload" type="file" class="hidden" required />
                                    <p class="mt-2 text-sm text-gray-500">Max file size: 5MB</p>
                                </div>
                                <textarea {...register("message")} rows="3" placeholder="Message..." className="p-4 rounded-md resize-none dark:text-blue-900 text-blue-900" required></textarea>
                                <button type="submit" className="py-4 my-8 font-semibold rounded-md dark:text-gray-900 bg-blue-900 text-white dark:bg-gray-200 dark:hover:bg-blue-700 dark:hover:text-gray-200">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogsForm;