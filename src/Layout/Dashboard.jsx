import React from 'react';
import { AiFillDollarCircle } from 'react-icons/ai';
import { FaHome, FaSearch, FaShoppingBag, FaShoppingCart, FaStar, FaUser } from 'react-icons/fa';
import { GiOrange } from 'react-icons/gi';
import { MdAddBox, MdAddHomeWork, MdMessage } from 'react-icons/md';
import { NavLink, Outlet } from 'react-router-dom';
import logo from '/logo.png'
import { IoMdNotifications } from 'react-icons/io';


const Dashboard = () => {

    const isAdmin = true

    return (
        <div>
            {
                isAdmin ? (
                    <div className='flex bg-[#f8f9fa]'>
                        <div className='w-56 border min-h-screen bg-white'>
                            <div className='p-3 border-b'>
                                <img className='w-32' src={logo} alt="" />
                            </div>
                            <div className='p-5'>
                                <ul className='space-y-5'>
                                    <li>
                                        <NavLink
                                            to="/dashboard/info"
                                            className={({ isActive, isPending }) =>
                                                isPending ? "pending" : isActive ? "active" : ""
                                            }
                                        >
                                            <div className='flex items-center gap-2 text-[18px]'>
                                                <FaHome className='text-[#686666]'></FaHome>
                                                <h1 className='font-[500]'>Dashboard</h1>
                                            </div>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/dashboard/all-product"
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
                                            to="/dashboard/orders"
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
                                            to="/dashboard/Sellers"
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
                                            to="/dashboard/add-product"
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
                                            to="/dashboard/transaction"
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
                                            to="/dashboard/account"
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
                                            to="/dashboard/reviews"
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
                                            to="/dashboard/brands"
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
                                            to="/dashboard/statistics"
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
                        <div className='w-full'>
                            <div className='p-3 flex justify-between items-center bg-white'>
                                <div>
                                    <input className='input input-bordered' placeholder='Search Here' type="text" />
                                    <button className='btn rounded-none'><FaSearch></FaSearch></button>
                                </div>
                                <div className='flex items-center gap-5'>
                                    <div className='indicator'>
                                        <span className="badge bg-red-400 text-white badge-sm indicator-item">10</span>
                                        <IoMdNotifications className='text-3xl'></IoMdNotifications>
                                    </div>
                                    <div className="dropdown dropdown-end">
                                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                            <div className="w-10 rounded-full">
                                                <img
                                                    alt="Tailwind CSS Navbar component"
                                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                            </div>
                                        </div>
                                        <ul
                                            tabIndex={0}
                                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                            <li>
                                                <a className="justify-between">
                                                    Profile
                                                    <span className="badge">New</span>
                                                </a>
                                            </li>
                                            <li><a>Settings</a></li>
                                            <li><a>Logout</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <Outlet></Outlet>
                        </div>
                    </div>
                ) : (
                    <div className='h-[50vh] w-full flex justify-center items-center'>
                        <h1 className='text-2xl font-[600]'>Something is Rong</h1>
                    </div>
                )
            }
        </div>
    );
};

export default Dashboard;