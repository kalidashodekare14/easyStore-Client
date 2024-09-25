import React from 'react';
import { useState } from 'react';
import logo from '../../assets/Header.png'
import { MdOutlineFavoriteBorder } from 'react-icons/md';
import { FiShoppingCart } from 'react-icons/fi';
import { FaHeadphones, FaLocationArrow, FaRegUser } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);



    return (
        <nav x-data="{ isOpen: false }" className=" relative  dark:bg-gray-800">
            <div className='lg:px-20 border'>
                <div className="container mx-auto md:flex md:justify-between md:items-center">
                    <div className="flex items-center justify-between">
                        <a href="#">
                            <img className="h-10 sm:h-10 my-2 lg:w-80" src={logo} alt="QuickShop Logo" />
                        </a>
                        <div className='lg:hidden flex items-center gap-5'>
                            <div className="flex  flex-col md:flex-row md:mx-6 ">
                                <div className='flex items-center gap-1'>
                                    <FiShoppingCart className='text-2xl' />
                                    <span>Cart</span>
                                </div>
                            </div>
                            <div className="flex  flex-col md:flex-row md:mx-6 ">
                                <div className='flex items-center gap-1'>
                                    <FaRegUser className='text-2xl' />
                                    <span>Account</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex lg:hidden">
                            <button onClick={() => setIsOpen(!isOpen)} type="button" className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                                {isOpen ? (
                                    <svg x-show="isOpen" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                ) : (

                                    <svg x-show="!isOpen" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M4 8h16M4 16h16" />
                                    </svg>
                                )
                                }
                            </button>
                        </div>
                    </div>
                    <div className='w-full lg:px-10'>
                        <input className='input input-bordered w-full' type="text" />
                    </div>
                    <div className={`${isOpen ? 'translate-x-0 opacity-100 bg-white' : 'opacity-0 -translate-x-full '} hidden  absolute inset-x-0 z-20 w-full transition-all duration-300 ease-in-out  dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center`}>
                        <div className='flex items-center gap-2 border shadow px-3 py-2 rounded-2xl'>
                            <FaLocationArrow></FaLocationArrow>
                            <h1>Bangladesh</h1>
                        </div>
                        <div className="flex  flex-col md:flex-row md:mx-6 ">
                            <div className='flex items-center gap-1'>
                                <MdOutlineFavoriteBorder className='text-2xl' />
                                <span>Wishlist</span>
                            </div>
                        </div>
                        <div className="flex  flex-col md:flex-row md:mx-6 ">
                            <div className='flex items-center gap-1'>
                                <FiShoppingCart className='text-2xl' />
                                <span>Cart</span>
                            </div>
                        </div>
                        <div className="flex  flex-col md:flex-row md:mx-6 ">
                            <div className='flex items-center gap-1'>
                                <FaRegUser className='text-2xl' />
                                <span>Account</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${isOpen ? 'translate-x-0 opacity-100 bg-white' : 'opacity-0 -translate-x-full '} absolute lg:static inset-x-0 z-20 w-full transition-all duration-300 ease-in-out  dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center`}>
                <div className='lg:px-20 w-full p-2 border flex flex-col lg:flex-row justify-between items-center'>
                    <div className='flex flex-col lg:flex-row items-center gap-5'>
                        <details className="dropdown">
                            <summary className="btn w-52">Browse All Category</summary>
                            <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                                <li><a>Item 1</a></li>
                                <li><a>Item 2</a></li>
                            </ul>
                        </details>
                        <div>
                            <ul className='flex items-center gap-5'>
                                <li>
                                    <NavLink>Home</NavLink>
                                </li>
                                <li>
                                    <NavLink>About</NavLink>
                                </li>
                                <li>
                                    <NavLink>Shop</NavLink>
                                </li>
                                <li>
                                    <NavLink>Blog</NavLink>
                                </li>
                                <li>
                                    <NavLink>Contact</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className='flex items-center gap-2 p-5 lg:p-0'>
                        <FaHeadphones className='text-3xl'></FaHeadphones>
                        <div>
                            <h1 className='text-2xl'>5489-8956</h1>
                            <span className='text-[12px]'>24/7 Support Center</span>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

    );
};

export default Navbar;