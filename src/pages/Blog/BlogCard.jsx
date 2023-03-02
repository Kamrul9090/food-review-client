import React from 'react';
import { useQuery } from 'react-query';
import { PropagateLoader } from 'react-spinners';

const BlogCard = () => {

    const { data: blogs = [], isLoading } = useQuery({
        queryKey: ['blogs'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/blogs`);
            const data = await res.json();
            return data;
        }
    })
    if (isLoading) {
        return <PropagateLoader></PropagateLoader>
    }
    return (
        <div className='grid grid-cols-1 gap-10 mb-20'>
            {
                blogs.map(blog => <div className=" dark:text-gray-100">
                    <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900 bg-gray-300">
                        <div className="flex items-center justify-between">
                            <span className="text-sm dark:text-gray-400">{blog?.publishDate}</span>
                            <a rel="noopener noreferrer" href="#" className="px-2 py-1 font-bold rounded dark:bg-gray-100 dark:text-gray-900">Foods Blog</a>
                        </div>
                        <div className="mt-3">
                            <h2 className="text-2xl font-bold hover:underline">{blog?.title}</h2>
                            <p className="mt-2">{blog?.message}</p>
                        </div>
                        <div className="flex items-center justify-between mt-4">
                            <a rel="noopener noreferrer" href="#" className="hover:underline dark:text-violet-400">Read more</a>
                            <div>
                                <a rel="noopener noreferrer" href="#" className="flex items-center">
                                    <img src="https://source.unsplash.com/50x50/?portrait" alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full dark:bg-gray-500" />
                                    <span className="hover:underline dark:text-gray-400">Leroy Jenkins</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default BlogCard;