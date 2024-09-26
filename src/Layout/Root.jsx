import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';

const Root = () => {
    return (
        <div>
            <div className='mb-5'>
                <Navbar></Navbar>
            </div>
            <Outlet></Outlet>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Root;