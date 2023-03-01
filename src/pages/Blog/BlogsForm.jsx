import React from 'react';

const BlogsForm = () => {
    return (
        <div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20'>
                <div className='space-y-5 pt-20'>
                    <h1 className='text-5xl font-bold'>Write Your Blogs</h1>
                    <p className='text-lg'>Food blogs have become increasingly popular in recent years, with people turning to the internet to find inspiration for their next meal. These blogs can range from simple recipe collections to more in-depth explorations of specific cuisines or cooking techniques.</p>
                </div>
                <div>
                    <div className="flex flex-col max-w-xl p-8 shadow-sm rounded-xl lg:p-12 dark:bg-gray-900 dark:text-gray-100">
                        <div className="flex flex-col items-center w-full">
                            <h2 className="text-3xl font-semibold text-center mb-5">Write your favourite foods</h2>
                            <div className="flex flex-col w-full space-y-5">
                                <input type="text" placeholder='Foods title' className='rounded p-2' />
                                <textarea rows="3" placeholder="Message..." className="p-4 rounded-md resize-none dark:text-gray-100"></textarea>
                                <button type="button" className="py-4 my-8 font-semibold rounded-md dark:text-gray-900 dark:bg-violet-400">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogsForm;