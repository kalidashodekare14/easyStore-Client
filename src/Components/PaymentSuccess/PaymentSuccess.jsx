import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const PaymentSuccess = () => {
    return (
        <div className='h-[500px] mx-2'>
            <Helmet>
                <title>Success | EasyStore</title>
            </Helmet>
            <div className='space-y-2 flex flex-col justify-center items-center h-[500px]'>
                <div className='bg-[#16a34a] w-10 h-10 rounded-full text-white flex justify-center items-center'>
                    <FaCheck className='text-2xl' />
                </div>
                <h1 className='text-xl font-[600]'>Payment Done!</h1>
                <p>Thank you for completing your secure online payment</p>
                <p>Have a greate day!</p>
                <Link to={"/"}>
                    <button className='btn rounded-none w-32 text-white bg-[#4f46e5]'>Go Back</button>
                </Link>
            </div>
        </div>
    );
};

export default PaymentSuccess;