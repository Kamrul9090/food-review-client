import React from 'react';
import Carousel from 'react-grid-carousel'

const BlogCarouselCard = ({ AllBlogs }) => {
    return (
        <div>
            <Carousel cols={1} rows={1} gap={10} loop>
                {
                    AllBlogs.map(blog => <Carousel.Item>
                        <div className='grid grid-cols-1 lg:grid-cols-2'>
                            <div>
                                <img src={blog.image} className='' alt="" srcset="" />
                            </div>
                            <div className='pl-5 flex flex-col justify-between'>
                                <div className='flex items-center justify-between'>
                                    <h2 className='text-5xl'>{blog.title}</h2>
                                    <span>publish {blog.publishDate}</span>
                                </div>
                                <p className='text-justify'>
                                    {blog.message}
                                </p>
                            </div>
                        </div>
                    </Carousel.Item>)
                }
            </Carousel>

        </div>
    );
};

export default BlogCarouselCard;