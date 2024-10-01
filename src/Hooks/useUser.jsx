import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';

const useUser = () => {

    const axiosSecure = useAxiosSecure()
    const { user } = useAuth()

    const { data: userInfo = [], refetch, isLoading: loading } = useQuery({
        queryKey: ["UserInfo", user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/customar-profile/${user?.email}`)
            return res.data
        }
    })
    return [userInfo, refetch, loading]
};

export default useUser;