import React from 'react';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const UseAllOrders = () => {
    const axiosSecure = useAxiosSecure()

    const { data: allOrders = [] } = useQuery({
        queryKey: ["allOrders"],
        queryFn: async () => {
            const res = await axiosSecure.get('/dashboard-orders')
            return res.data
        }
    })
    return [allOrders]
};

export default UseAllOrders;