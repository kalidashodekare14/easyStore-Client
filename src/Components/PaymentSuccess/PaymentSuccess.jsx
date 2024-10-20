import React from 'react';
import { Helmet } from 'react-helmet-async';

const PaymentSuccess = () => {
    return (
        <div>
             <Helmet>
                <title>Success | EasyStore</title>
            </Helmet>
            <h1>Payment Success</h1>
        </div>
    );
};

export default PaymentSuccess;