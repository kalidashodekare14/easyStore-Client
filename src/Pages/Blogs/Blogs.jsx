import React from 'react';
import UseBlogsData from '../../Hooks/UseBlogsData';
import { Link } from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner';
import moment from 'moment/moment';
import { Helmet } from 'react-helmet-async';

const Blogs = () => {

    const [blogsData, blogLoading] = UseBlogsData()
    console.log(blogsData)




    return (
        <div className='min-h-screen lg:mx-20 my-20'>
            <Helmet>
                <title>Blogs | EasyStore</title>
            </Helmet>
            {
                blogLoading ? (
                    <div className='h-40 flex flex-col justify-center items-center gap-5'>
                        <RotatingLines
                            visible={true}
                            height="150"
                            width="140"
                            color="grey"
                            strokeWidth="5"
                            animationDuration="0.75"
                            ariaLabel="rotating-lines-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                        />
                        <h1 className='text-xl'>Please wait.....</h1>
                    </div>

                ) : (
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
                                            {/* <p>{calculateTimeDifferent(blog.createdAt)}</p> */}
                                            <p>{moment(blog.createdAt).fromNow()}</p>

                                        </div>
                                    </div>
                                </Link>
                            ))
                        }
                    </div>
                )
            }

        </div>
    );
};

export default Blogs;