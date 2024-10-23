import React from 'react';
import { Helmet } from 'react-helmet-async';
import { MdCancel } from 'react-icons/md';
import { Link } from 'react-router-dom';

const PaymentFail = () => {
    return (
        <div className='h-[500px] mx-2'>
            <Helmet>
                <title>Payment fail | EasyStore</title>
            </Helmet>
            <div className='space-y-2 flex flex-col justify-center items-center h-[500px]'>
                <MdCancel className='text-5xl text-red-500' />
                <h1 className='text-xl font-[600]'>Payment Fail</h1>
                <p>Sorry your payment was not successful. Please try again.</p>
                <Link to={"/"}>
                    <button className='btn rounded-none w-32 text-white bg-[#4f46e5]'>Go Back</button>
                </Link>
            </div>
        </div>
    );
};

export default PaymentFail;