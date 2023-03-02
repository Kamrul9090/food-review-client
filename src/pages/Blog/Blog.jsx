import React from 'react';
import BlogsForm from './BlogsForm';
import blogBanner from '../../assets/banner/blogBanner.jpg'
import BlogCard from './BlogCard';

const Blog = () => {

    return (
        <div className='pt-40 max-w-6xl mx-auto'>
            <div className='h-72 w-full mb-10 relative'>
                <img src={blogBanner} className="h-full w-full rounded-md" alt="" srcset="" />
                <h1 className='absolute bottom-32 left-96 font-bold text-2xl dark:text-gray-200 text-blue-900'>Welcome To Our Food Blogs</h1>
            </div>
            <BlogsForm></BlogsForm>
            <BlogCard></BlogCard>
        </div>
    );
};

export default Blog;