import React from 'react';
import UseBlogsData from '../../Hooks/UseBlogsData';
import { Link } from 'react-router-dom';

const Blogs = () => {

    const [blogsData] = UseBlogsData()
    console.log(blogsData)

    const calculateTimeDifferent = (createdAt) => {
        const createdDate = new Date(createdAt)
        const currentDate = new Date()
        const diffInSeconds = Math.floor((currentDate - createdDate) / 1000)

        let time = diffInSeconds
        let unit = 'seconds'


        if (time < 60) {
            return `${time} ${unit} ago`
        }

        time = Math.floor(time / 60)
        unit = 'minutes'
        if (time < 60) {
            return `${time} ${unit} ago`
        }

        time = Math.floor(time / 60)
        unit = 'hours'
        if (time < 24) {
            return `${time} ${unit} ago`
        }

        time = Math.floor(time / 60)
        unit = 'days'
        if (time === 24) {
            const hours = Math.floor(diffInSeconds / 3600)
            return `${hours} ${unit} ago`
        } else if (time < 30) {
            return `${time} ${unit} ago`
        }

        time = Math.floor(time / 30)
        unit = 'months'
        if (time < 12) {
            return `${time} ${unit} ago`
        }

        time = Math.floor(time / 12)
        unit = 'years'
        return `${time} ${unit} ago`
    }



    return (
        <div className='lg:mx-20'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                {
                    blogsData.map(blog => (
                        <Link to={`/blogs_details/${blog._id}`}>
                            <div className='space-y-2' key={blog._id}>
                                <img className='w-full h-72' src={blog.blogThumbnail} alt="" />
                                <h1 className='text-2xl font-[700]'>{blog.blogTitle}</h1>
                                <div className='flex items-center gap-2'>
                                    <p>{new Date(blog.createdAt).toLocaleTimeString()}</p>
                                    <p>{new Date(blog.createdAt).toLocaleDateString()}</p>
                                    <p>{calculateTimeDifferent(blog.createdAt)}</p>
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    );
};

export default Blogs;