import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import useAuth from '../../Hooks/useAuth';
import useAxiosPublic from '../../Hooks/useAxiosPublic';

const UserPaymentHistory = () => {

    const axiosSecure = useAxiosSecure()
    const axiosPublic = useAxiosPublic()
    const { user } = useAuth()

    const { data: paymentHistory = [] } = useQuery({
        queryKey: ["paymentHistory"],
        queryFn: async () => {
            const res = await axiosSecure.get(`/customar-payment-history/${user?.email}`)
            return res.data
        }
    })

    console.log(paymentHistory)

    return (
        <div className='min-h-screen'>

        </div>
    );
};

export default UserPaymentHistory;