import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { PropagateLoader } from 'react-spinners';
import BlogCarouselCard from './BlogCarouselCard';
const BlogCarousel = () => {
    const { data: AllBlogs = [], isLoading } = useQuery({
        queryKey: ['blogs'],
        queryFn: async () => {
            const res = await fetch(`https://food-review-server-ten.vercel.app/blogs`);
            const data = await res.json();
            return data;
        }
    })
    if (isLoading) {
        return <PropagateLoader></PropagateLoader>
    }
    console.log(AllBlogs);
    return (
        <div className='max-w-6xl mx-auto mb-32'>
            <h1 className='text-5xl text-center font-bold mb-10'>Our Blogs</h1>
            <div>
                <BlogCarouselCard AllBlogs={AllBlogs}></BlogCarouselCard>
            </div>

        </div>
    );
};

export default BlogCarousel;