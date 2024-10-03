import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';

const useUser = () => {

    const axiosSecure = useAxiosSecure()
    const { user, loading } = useAuth()

    const { data: userInfo = [], refetch, isLoading: usrLoading } = useQuery({
        queryKey: ["UserInfo", user?.email],
        enabled: !loading && !!user?.email,
        queryFn: async () => {
            const res = await axiosSecure.get(`/customar-profile/${user?.email}`)
            return res.data
        }
    })
    return [userInfo, refetch, loading]
};

export default useUser;