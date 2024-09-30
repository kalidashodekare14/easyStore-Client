import React from 'react';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';


const useAllProduct = () => {
    const axiosPublic = useAxiosPublic()

    const { data: useAllProduct = [] } = useQuery({
        queryKey: ["useAllProduct"],
        queryFn: async () => {
            const res = await axiosPublic.get('/all_product')
            return res.data
        }
    })
    return [useAllProduct]

};

export default useAllProduct;