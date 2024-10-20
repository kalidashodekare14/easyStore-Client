import React from 'react';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const UseBlogsData = () => {
    const axiosSecure = useAxiosSecure()

    const { data: blogsData = [], isLoading: blogLoading } = useQuery({
        queryKey: ['blogsData'],
        queryFn: async () => {
            const res = await axiosSecure.get('/blogs')
            return res.data
        }
    })
    return [blogsData, blogLoading]
};

export default UseBlogsData;