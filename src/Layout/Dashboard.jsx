import React from 'react';
import { AiFillDollarCircle } from 'react-icons/ai';
import { FaHome, FaShoppingBag, FaShoppingCart, FaStar, FaUser } from 'react-icons/fa';
import { GiOrange } from 'react-icons/gi';
import { MdAddBox, MdAddHomeWork, MdMessage } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import logo from '/logo.png'


const Dashboard = () => {
    return (
        <div className=''>
            <div className='w-56 border min-h-screen'>
                <div className='p-3 border-b'>
                    <img className='w-32' src={logo} alt="" />
                </div>
                <div className='p-5'>
                    <ul className='space-y-5'>
                        <li>
                            <NavLink
                                to="/messages"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : ""
                                }
                            >
                                <div className='flex items-center gap-2 text-[18px]'>
                                    <FaHome className='text-[#686666]'></FaHome>
                                    <h1 className='font-[500]'>Messages</h1>
                                </div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/messages"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : ""
                                }
                            >
                                <div className='flex items-center gap-2 text-[18px]'>
                                    <FaShoppingBag className='text-[#686666]'></FaShoppingBag>
                                    <h1 className='font-[500]'>Products</h1>
                                </div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/messages"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : ""
                                }
                            >
                                <div className='flex items-center gap-2 text-[18px]'>
                                    <FaShoppingCart className='text-[#686666]'></FaShoppingCart>
                                    <h1 className='font-[500]'>Orders</h1>
                                </div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/messages"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : ""
                                }
                            >
                                <div className='flex items-center gap-2 text-[18px]'>
                                    <MdAddHomeWork className='text-[#686666]'></MdAddHomeWork>
                                    <h1 className='font-[500]'>Sellers</h1>
                                </div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/messages"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : ""
                                }
                            >
                                <div className='flex items-center gap-2 text-[18px]'>
                                    <MdAddBox className='text-[#686666]'></MdAddBox>
                                    <h1 className='font-[500]'>Add Product</h1>
                                </div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/messages"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : ""
                                }
                            >
                                <div className='flex items-center gap-2 text-[18px]'>
                                    <AiFillDollarCircle className='text-[#686666]'></AiFillDollarCircle>
                                    <h1 className='font-[500]'>Transaction</h1>
                                </div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/messages"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : ""
                                }
                            >
                                <div className='flex items-center gap-2 text-[18px]'>
                                    <FaUser className='text-[#686666]'></FaUser>
                                    <h1 className='font-[500]'>Account</h1>
                                </div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/messages"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : ""
                                }
                            >
                                <div className='flex items-center gap-2 text-[18px]'>
                                    <MdMessage className='text-[#686666]'></MdMessage>
                                    <h1 className='font-[500]'>Reviews</h1>
                                </div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/messages"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : ""
                                }
                            >
                                <div className='flex items-center gap-2 text-[18px]'>
                                    <FaStar className='text-[#686666]'></FaStar>
                                    <h1 className='font-[500]'>Brands</h1>
                                </div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/messages"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : ""
                                }
                            >
                                <div className='flex items-center gap-2 text-[18px]'>
                                    <GiOrange className='text-[#686666]'></GiOrange>
                                    <h1 className='font-[500]'>Statistics</h1>
                                </div>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default Dashboard;