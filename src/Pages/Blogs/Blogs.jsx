import React from 'react';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const Blogs = () => {

    const axiosSecure = useAxiosSecure()

    const { data: blogsData = [] } = useQuery({
        queryKey: ['blogsData'],
        queryFn: async () => {
            const res = await axiosSecure.get('/blogs')
            return res.data
        }
    })

    console.log(blogsData)

    return (
        <div className='min-h-screen mx-20'>
            {
                blogsData.map(blog => (
                    <div>
                        <div dangerouslySetInnerHTML={{ __html: blog.content }} />
                    </div>
                ))
            }
        </div>
    );
};

export default Blogs;