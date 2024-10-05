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
        <div className='lg:mx-20 min-h-screen'>
            <h1 className='text-3xl my-10 m-auto text-center border-b w-72 p-5'>Payment History</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="bg-base-200">
                            <th>Transaction id</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Current Address</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            paymentHistory.map(product => (
                                <tr key={product._id}>
                                    <th>{product.transaction_id}</th>
                                    <td>{product.customar_name}</td>
                                    <td>{product.amount}</td>
                                    <td>{product.status}</td>
                                    <td>{product.userInfo.current_address}</td>
                                    <td>
                                        <div>
                                            <button className='btn'>Details</button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        }



                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserPaymentHistory;