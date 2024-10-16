import React from 'react';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

import './BlogDetails.css'
import UseBlogsData from '../../Hooks/UseBlogsData';
import { useLoaderData } from 'react-router-dom';

const BlogDetails = () => {


    const dataBlog = useLoaderData()

    return (
        <div className='min-h-screen mx-32 blogs-container'>
            <div className='space-y-10'>
                <div dangerouslySetInnerHTML={{ __html: dataBlog.content }} />
            </div>
        </div>
    );
};

export default BlogDetails;