import React, { useEffect, useState } from 'react';
import { AiFillDollarCircle } from 'react-icons/ai';
import { FaBloggerB, FaHome, FaSearch, FaShoppingBag, FaShoppingCart, FaStar, FaUser } from 'react-icons/fa';
import { GiOrange } from 'react-icons/gi';
import { MdAddBox, MdAddHomeWork, MdMessage } from 'react-icons/md';
import { Link, NavLink, Outlet } from 'react-router-dom';
import logo from '/logo.png'
import { IoMdNotifications } from 'react-icons/io';
import { useQuery } from '@tanstack/react-query';
import { IoNotificationsCircleSharp } from "react-icons/io5";
import useAxiosSecure from '../Hooks/useAxiosSecure';
import { io } from 'socket.io-client';
import { FaBarsStaggered } from "react-icons/fa6";
import useAdmin from '../Hooks/useAdmin';


const Dashboard = () => {

    const isAdmin = useAdmin()
    const [isOpenNoti, setIsOpenNoti] = useState(false)
    const [notifications, setNotifications] = useState([])
    const [toggleSidebar, setToggleSidebar] = useState(false)
    const axiosSecure = useAxiosSecure()

    const handleToggleBar = () => {
        setToggleSidebar(!toggleSidebar)
    }

    const handleOpenNotification = () => {
        setIsOpenNoti(!isOpenNoti)

        axiosSecure.patch('/notification-unread-update')
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    notificationRefetch()
                }
            })
            .catch(error => {
                console.log(error.message)
            })

    }
    useEffect(() => {
        axiosSecure.get('/notification')
            // .then(res => res.json())
            .then(res => {
                console.log(res.data)
                setNotifications(res.data)
            })
            .catch(error => {
                console.log(error.message)
            })

        const socket = io('https://easy-store-server.vercel.app')

        socket.on('newUser', (notification) => {
            setNotifications(prev => [notification, ...prev])
        })

        // socket.on('newOrder', (data) => {
        //     setNotifications(prev => [...prev, data.message])
        // })

        return () => {
            socket.disconnect()
        }

    }, [])

    const { data: unReadNotifications = 0, isLoading, refetch: notificationRefetch } = useQuery({
        queryKey: ["unReadNotifications"],
        queryFn: async () => {
            const res = await axiosSecure.get(`/notification/unread`);
            return res.data;
        },
    });



    return (
        <div>
            {
                isAdmin ? (
                    <div className='relative flex bg-[#f8f9fa]'>
                        <div className={`z-20 w-56 border min-h-screen bg-white absolute lg:static transform transition-transform duration-300 lg:translate-x-0  translate-y-20 lg:translate-y-0 -translate-x-full ${toggleSidebar ? 'translate-x-0' : '-translate-x-full'} `}>
                            <div className='p-3 border-b'>
                                <img className='w-32' src={logo} alt="" />
                            </div>
                            <div className='p-2'>
                                <ul className='space-y-5'>
                                    <li>
                                        <NavLink
                                            to="/dashboard/overview"
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
                                <div onClick={handleToggleBar} className='lg:hidden'>
                                    <FaBarsStaggered />
                                </div>
                                <div className='flex items-center'>
                                    <input className='input input-bordered' placeholder='Search Here' type="text" />
                                    <p className='-ms-5'><FaSearch></FaSearch></p>
                                </div>
                                <div className='flex items-center gap-5'>
                                    <div className="indicator">
                                        <span className="indicator-item badge bg-[#de192e] text-white">{unReadNotifications?.totalUnreadNotificaton}+</span>
                                        <div className='relative'>
                                            <IoNotificationsCircleSharp onClick={handleOpenNotification} className='text-4xl' />
                                            <div className={`${isOpenNoti ? 'visible' : 'hidden'} rounded-xl absolute lg:right-0 -right-10 z-10 lg:w-96 w-80 h-80 border bg-white`}>
                                                <ul className='space-y-5 p-2 overflow-y-auto scroll-smooth h-full'>
                                                    {
                                                        notifications.map((notification, index) => (
                                                            <li className='border-b p-1 space-x-1' key={index}>
                                                                <div className='flex space-x-3 items-center'>
                                                                    <div className="dropdown dropdown-end">
                                                                        <div className="btn btn-ghost btn-circle avatar">
                                                                            <div className="w-10 rounded-full">
                                                                                <img
                                                                                    alt="Tailwind CSS Navbar component"
                                                                                    src={notification?.image ? notification?.image : "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"} />
                                                                            </div>
                                                                        </div>

                                                                    </div>
                                                                    <div className='flex flex-col'>
                                                                        <h1 className='text-[#3a4966]'><span className='font-medium'>{notification?.name}</span> {notification.message}</h1>
                                                                        <span className='font-bold'>{notification.user.email}</span>
                                                                        <span className='font-semibold'>{notification.transaction_id}</span>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        ))
                                                    }
                                                </ul>
                                            </div>
                                        </div>

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