import React from 'react';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useTotalProduct = () => {

    const axiosSecure = useAxiosSecure()

    const { data: allProduct = [], refetch, isLoading, allProductLoading } = useQuery({
        queryKey: ["allProduct"],
        queryFn: async () => {
            const res = await axiosSecure.get("/dashboard-all-product")
            return res.data
        }
    })
    return [allProduct, refetch, allProductLoading]
};

export default useTotalProduct;