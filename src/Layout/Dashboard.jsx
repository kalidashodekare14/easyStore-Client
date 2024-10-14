import React from 'react';
import { AiFillDollarCircle } from 'react-icons/ai';
import { FaBloggerB, FaHome, FaSearch, FaShoppingBag, FaShoppingCart, FaStar, FaUser } from 'react-icons/fa';
import { GiOrange } from 'react-icons/gi';
import { MdAddBox, MdAddHomeWork, MdMessage } from 'react-icons/md';
import { Link, NavLink, Outlet } from 'react-router-dom';
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
                            <div className='p-2'>
                                <ul className='space-y-5'>
                                    <li>
                                        <NavLink
                                            to="/dashboard/info"
                                            className={({ isActive, isPending }) =>
                                                isPending ? "pending" : isActive ? "flex items-center px-1 py-2 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 text-[#00bba6] hover:text-[#00bba6] border border-[#00bba6] dark:hover:bg-gray-800 dark:hover:text-gray-200 " : "flex items-center px-1 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                                            }
                                        >
                                            <div className='flex items-center gap-2 text-[18px]'>
                                                <FaHome className=''></FaHome>
                                                <h1 className='font-[500]'>Dashboard</h1>
                                            </div>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/dashboard/all-product"
                                            className={({ isActive, isPending }) =>
                                                isPending ? "pending" : isActive ? "flex items-center px-1 py-2 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 text-[#00bba6] hover:text-[#00bba6] border border-[#00bba6] dark:hover:bg-gray-800 dark:hover:text-gray-200 " : "flex items-center px-1 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                                            }
                                        >
                                            <div className='flex items-center gap-2 text-[18px]'>
                                                <FaShoppingBag className=''></FaShoppingBag>
                                                <h1 className='font-[500]'>Products</h1>
                                            </div>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/dashboard/orders"
                                            className={({ isActive, isPending }) =>
                                                isPending ? "pending" : isActive ? "flex items-center px-1 py-2 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 text-[#00bba6] hover:text-[#00bba6] border border-[#00bba6] dark:hover:bg-gray-800 dark:hover:text-gray-200 " : "flex items-center px-1 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                                            }
                                        >
                                            <div className='flex items-center gap-2 text-[18px]'>
                                                <FaShoppingCart className=''></FaShoppingCart>
                                                <h1 className='font-[500]'>Orders</h1>
                                            </div>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/dashboard/Sellers"
                                            className={({ isActive, isPending }) =>
                                                isPending ? "pending" : isActive ? "flex items-center px-1 py-2 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 text-[#00bba6] hover:text-[#00bba6] border border-[#00bba6] dark:hover:bg-gray-800 dark:hover:text-gray-200 " : "flex items-center px-1 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                                            }
                                        >
                                            <div className='flex items-center gap-2 text-[18px]'>
                                                <MdAddHomeWork className=''></MdAddHomeWork>
                                                <h1 className='font-[500]'>Sellers</h1>
                                            </div>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/dashboard/add-product"
                                            className={({ isActive, isPending }) =>
                                                isPending ? "pending" : isActive ? "flex items-center px-1 py-2 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 text-[#00bba6] hover:text-[#00bba6] border border-[#00bba6] dark:hover:bg-gray-800 dark:hover:text-gray-200 " : "flex items-center px-1 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                                            }
                                        >
                                            <div className='flex items-center gap-2 text-[18px]'>
                                                <MdAddBox className=''></MdAddBox>
                                                <h1 className='font-[500]'>Add Product</h1>
                                            </div>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/dashboard/transaction"
                                            className={({ isActive, isPending }) =>
                                                isPending ? "pending" : isActive ? "flex items-center px-1 py-2 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 text-[#00bba6] hover:text-[#00bba6] border border-[#00bba6] dark:hover:bg-gray-800 dark:hover:text-gray-200 " : "flex items-center px-1 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                                            }
                                        >
                                            <div className='flex items-center gap-2 text-[18px]'>
                                                <AiFillDollarCircle className=''></AiFillDollarCircle>
                                                <h1 className='font-[500]'>Transaction</h1>
                                            </div>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/dashboard/account"
                                            className={({ isActive, isPending }) =>
                                                isPending ? "pending" : isActive ? "flex items-center px-1 py-2 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 text-[#00bba6] hover:text-[#00bba6] border border-[#00bba6] dark:hover:bg-gray-800 dark:hover:text-gray-200 " : "flex items-center px-1 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                                            }
                                        >
                                            <div className='flex items-center gap-2 text-[18px]'>
                                                <FaUser className=''></FaUser>
                                                <h1 className='font-[500]'>Account</h1>
                                            </div>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/dashboard/reviews"
                                            className={({ isActive, isPending }) =>
                                                isPending ? "pending" : isActive ? "flex items-center px-1 py-2 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 text-[#00bba6] hover:text-[#00bba6] border border-[#00bba6] dark:hover:bg-gray-800 dark:hover:text-gray-200 " : "flex items-center px-1 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                                            }
                                        >
                                            <div className='flex items-center gap-2 text-[18px]'>
                                                <MdMessage className=''></MdMessage>
                                                <h1 className='font-[500]'>Reviews</h1>
                                            </div>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/dashboard/brands"
                                            className={({ isActive, isPending }) =>
                                                isPending ? "pending" : isActive ? "flex items-center px-1 py-2 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 text-[#00bba6] hover:text-[#00bba6] border border-[#00bba6] dark:hover:bg-gray-800 dark:hover:text-gray-200 " : "flex items-center px-1 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                                            }
                                        >
                                            <div className='flex items-center gap-2 text-[18px]'>
                                                <FaStar className=''></FaStar>
                                                <h1 className='font-[500]'>Brands</h1>
                                            </div>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/dashboard/statistics"
                                            className={({ isActive, isPending }) =>
                                                isPending ? "pending" : isActive ? "flex items-center px-1 py-2 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 text-[#00bba6] hover:text-[#00bba6] border border-[#00bba6] dark:hover:bg-gray-800 dark:hover:text-gray-200 " : "flex items-center px-1 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                                            }
                                        >
                                            <div className='flex items-center gap-2 text-[18px]'>
                                                <GiOrange className=''></GiOrange>
                                                <h1 className='font-[500]'>Statistics</h1>
                                            </div>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/dashboard/blog-post"
                                            className={({ isActive, isPending }) =>
                                                isPending ? "pending" : isActive ? "flex items-center px-1 py-2 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 text-[#00bba6] hover:text-[#00bba6] border border-[#00bba6] dark:hover:bg-gray-800 dark:hover:text-gray-200 " : "flex items-center px-1 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                                            }
                                        >
                                            <div className='flex items-center gap-2 text-[18px]'>
                                                <FaBloggerB ></FaBloggerB>
                                                <h1 className='font-[500]'>Blogs</h1>
                                            </div>
                                        </NavLink>
                                    </li>
                                    <div className="divider">OR</div>
                                    <li><Link to={'/'} className='text-xl'>Home</Link></li>
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