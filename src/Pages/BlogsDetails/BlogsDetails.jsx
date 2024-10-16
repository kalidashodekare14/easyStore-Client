import React from 'react';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

import './BlogDetails.css'
import UseBlogsData from '../../Hooks/UseBlogsData';
import { useLoaderData } from 'react-router-dom';

const BlogDetails = () => {


    const [blogsData] = UseBlogsData()
    const dataBlog = useLoaderData()
    console.log(dataBlog)

    return (
        <div className='min-h-screen mx-20 blogs-container'>
            <div className='space-y-10'>
                <div dangerouslySetInnerHTML={{ __html: dataBlog.content }} />
                {/* {
                    blogsData.map(blog => (
                        <div key={blog._id}>
                            <div dangerouslySetInnerHTML={{ __html: blog.content }} />
                        </div>
                    ))
                } */}
            </div>
        </div>
    );
};

export default BlogDetails;