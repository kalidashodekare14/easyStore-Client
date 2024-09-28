import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';

const Root = () => {


    const location = useLocation()
    console.log(location.pathname)

    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('register')

    return (
        <div>
            <div className='mb-5'>
                {
                    noHeaderFooter || <Navbar></Navbar>
                }

            </div>
            <Outlet></Outlet>
            <div>
                {
                    noHeaderFooter || <Footer></Footer>
                }
            </div>
        </div>
    );
};

export default Root;