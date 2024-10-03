import React from 'react';
import useAxiosSecure from './useAxiosSecure';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';

const useAdmin = () => {
    const axiosSecure = useAxiosSecure()
    const axiosPublic = useAxiosPublic()
    const { user, loading } = useAuth()

    const { data: isAdmin = [], refetch, isLoading: usrLoading } = useQuery({
        queryKey: ["isAdmin", user?.email],
        enabled: !loading && !!user?.email,
        queryFn: async () => {
            const res = await axiosSecure.get(`/isAdmin/${user?.email}`)
            console.log(res.data)
            return res.data
        }
    })
    return [isAdmin, refetch, loading]
};

export default useAdmin;