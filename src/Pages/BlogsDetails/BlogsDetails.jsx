import React from 'react';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

import './BlogDetails.css'
import UseBlogsData from '../../Hooks/UseBlogsData';

const BlogDetails = () => {


    const [blogsData] = UseBlogsData()
    // const axiosSecure = useAxiosSecure()

    // const { data: blogsData = [] } = useQuery({
    //     queryKey: ['blogsData'],
    //     queryFn: async () => {
    //         const res = await axiosSecure.get('/blogs')
    //         return res.data
    //     }
    // })

    // console.log(blogsData)

    return (
        <div className='min-h-screen mx-20 blogs-container'>
            <div className='space-y-10'>
                {
                    blogsData.map(blog => (
                        <div key={blog._id}>
                            <div dangerouslySetInnerHTML={{ __html: blog.content }} />
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default BlogDetails;