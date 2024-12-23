import React, { useEffect } from 'react';
import { useState } from 'react';
// import logo from '../../assets/Header.png'
import logo from '/logo.png'
import { MdOutlineFavoriteBorder } from 'react-icons/md';
import { FiSearch, FiShoppingCart } from 'react-icons/fi';
import { FaAngleDown, FaBars, FaHeadphones, FaLocationArrow, FaRegUser } from 'react-icons/fa';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import Flag from 'react-world-flags'
import { useCart } from 'react-use-cart';
import useAuth from '../../Hooks/useAuth';
import useUser from '../../Hooks/useUser';
import { HiUserCircle } from 'react-icons/hi';
import useAdmin from '../../Hooks/useAdmin';



const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [profileDropdown, setProfileDropdown] = useState(false)
    const [searchSystem, setSearchSystem] = useState("")
    const [country, setCountry] = useState("")
    const { totalUniqueItems } = useCart()
    const { user, logoutSystem } = useAuth()
    const navigate = useNavigate()
    const [userInfo] = useUser()
    // const isAdmin = false
    const [isAdmin] = useAdmin()
    // console.log(isAdmin)


    const handleProfileDropdown = () => {
        setProfileDropdown(!profileDropdown)
    }

    const handleLogout = () => {
        logoutSystem()
            .then(res => {
                console.log(res.data)
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    const handleSearch = (e) => {
        e.preventDefault()
        if (searchSystem.trim()) {
            navigate(`/shop?search=${searchSystem}`)
            setSearchSystem("")
        }
    }


    useEffect(() => {
        fetch(`https://ipinfo.io?token=${import.meta.env.VITE_LOCATION_API_KEY}`)
            .then(res => res.json())
            .then(data => {
                setCountry(data.country)
            })
            .catch(error => {
                console.log(error.message)
            })
    }, [])



    return (
        <nav x-data="{ isOpen: false }" className="relative dark:bg-gray-800">
            <div className='lg:px-20 border'>
                <div className="py-4 px-2 lg:px-0 mx-auto md:flex md:justify-between md:items-center">
                    <div className="flex items-center justify-between">
                        <p>
                            <img className="h-10 sm:h-10 my-2 lg:w-80" src={logo} alt="QuickShop Logo" />
                        </p>
                        <div className='lg:hidden flex items-center gap-5'>
                            <div className="flex  flex-col md:flex-row md:mx-6 ">
                                <Link to={"/checkout"}>
                                    <div className='flex items-center gap-1'>
                                        <div className='indicator'>
                                            <FiShoppingCart className='text-2xl' />
                                            <span className="badge -translate-y-6 text-[16px] bg-[#3bb77e] text-white p-2 w-8 h-8 badge-sm indicator-item">{totalUniqueItems}</span>
                                        </div>
                                        <span>Cart</span>
                                    </div>
                                </Link>
                            </div>
                            <div>
                                {
                                    user?.email ? (
                                        <div onClick={handleProfileDropdown} className={`relative flex  flex-col md:flex-row md:mx-6 cursor-pointer`}>
                                            <div className='flex items-center gap-1'>
                                                <div>
                                                    <div className=" avatar">
                                                        <div className="w-10 rounded-full">
                                                            {
                                                                userInfo.image ? (
                                                                    <img
                                                                        alt="Tailwind CSS Navbar component"
                                                                        src={userInfo?.image} />
                                                                ) : (
                                                                    <HiUserCircle className='w-full text-5xl' />
                                                                )
                                                            }

                                                        </div>
                                                    </div>

                                                </div>
                                                <span>Account</span>
                                            </div>
                                            <div className={`${profileDropdown ? "" : "hidden"} duration-300 absolute -translate-x-20 translate-y-10`}>
                                                <ul
                                                    tabIndex={0}
                                                    className="menu menu-sm dropdown-content bg-base-100  z-[1] mt-3 w-52 p-2 shadow">
                                                    <li>
                                                        {
                                                            isAdmin ? (
                                                                <Link to={"/dashboard/overview"}>
                                                                    Dashboard
                                                                </Link>
                                                            ) : (
                                                                <Link to={"/profile"}>
                                                                    Profile
                                                                </Link>
                                                            )
                                                        }

                                                    </li>
                                                    <li>
                                                        {
                                                            isAdmin || <Link to={"/payment-history"}>Payment History</Link>
                                                        }

                                                    </li>
                                                    <li onClick={handleLogout}><a>Logout</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    ) : (
                                        <Link to={"/login"}>
                                            <div className="flex  flex-col md:flex-row md:mx-6 cursor-pointer">
                                                <div className='flex items-center gap-1'>
                                                    <FaRegUser className='text-2xl' />
                                                    <span>Login</span>
                                                </div>
                                            </div>
                                        </Link>
                                    )
                                }
                            </div>
                        </div>
                        <div className="flex lg:hidden">
                            <button onClick={() => setIsOpen(!isOpen)} type="button" className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                                {isOpen ? (
                                    <svg x-show="isOpen" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                ) : (

                                    <FaBars />
                                )
                                }
                            </button>
                        </div>
                    </div>
                    <div className='hidden lg:flex items-center gap-2 border shadow px-3 py-2 rounded-2xl'>
                        {
                            country ? <>
                                <div className='w-10'>
                                    <Flag code={country} />
                                </div>
                                <h1>{country}</h1>
                            </> : <>
                                <span className="loading loading-spinner loading-md"></span>
                            </>
                        }

                    </div>
                    <form onSubmit={handleSearch} className='w-full lg:px-10'>
                        <div className='flex items-center'>
                            <input
                                onChange={(e) => setSearchSystem(e.target.value)}
                                value={searchSystem}
                                className='input input-bordered w-full'
                                placeholder='Search for products, categories or brands...'
                                type="text" />
                            <button type='submit' className='text-2xl -ms-9'><FiSearch /></button>
                        </div>
                    </form>
                    <div className={`${isOpen ? 'translate-x-0 opacity-100 bg-white' : 'opacity-0 -translate-x-full '} hidden  absolute inset-x-0 z-20 w-full transition-all duration-300 ease-in-out  dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center`}>

                        <div>
                            {
                                user?.email ? (
                                    <div onClick={handleProfileDropdown} className={`relative flex  flex-col md:flex-row md:mx-3 cursor-pointer`}>
                                        <div className='flex items-center gap-1'>
                                            <div>
                                                <div className=" avatar">
                                                    <div className="w-10 rounded-full">
                                                        {
                                                            userInfo.image ? (
                                                                <img
                                                                    alt="Tailwind CSS Navbar component"
                                                                    src={userInfo?.image} />
                                                            ) : (
                                                                <HiUserCircle className='w-full text-5xl' />
                                                            )
                                                        }

                                                    </div>
                                                </div>

                                            </div>
                                            <span>Account</span>
                                        </div>
                                        <div className={`${profileDropdown ? "" : "hidden"} duration-300 absolute -translate-x-20 translate-y-10`}>
                                            <ul
                                                tabIndex={0}
                                                className="menu menu-sm dropdown-content bg-base-100  z-[1] mt-3 w-52 p-2 shadow">
                                                <li>
                                                    {
                                                        isAdmin ? (
                                                            <Link to={"/dashboard/overview"}>
                                                                Dashboard
                                                            </Link>
                                                        ) : (
                                                            <Link to={"/profile"}>
                                                                Profile
                                                            </Link>
                                                        )
                                                    }

                                                </li>
                                                <li>
                                                    {
                                                        isAdmin || <Link to={"/payment-history"}>Payment History</Link>
                                                    }

                                                </li>
                                                <li onClick={handleLogout}><a>Logout</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                ) : (
                                    <Link to={"/login"}>
                                        <div className="flex  flex-col md:flex-row md:mx-3 cursor-pointer">
                                            <div className='flex items-center gap-1'>
                                                <FaRegUser className='text-2xl' />
                                                <span>Login</span>
                                            </div>
                                        </div>
                                    </Link>
                                )
                            }
                        </div>
                        <div className="flex  flex-col md:flex-row md:mx-3 ">
                            <div className='flex items-center gap-1'>
                                <MdOutlineFavoriteBorder className='text-2xl' />
                                <span>Wishlist</span>
                            </div>
                        </div>
                        <div className="flex  flex-col md:flex-row md:mx-3 ">
                            <Link to={"/checkout"}>
                                <div className='flex items-center gap-1'>
                                    <div className='indicator'>
                                        <FiShoppingCart className='text-2xl' />
                                        <span className="badge -translate-y-6 text-[16px] bg-[#3bb77e] text-white p-2 w-8 h-8 badge-sm indicator-item">{totalUniqueItems}</span>
                                    </div>
                                    <span>Cart</span>
                                </div>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
            <div className={`${isOpen ? 'translate-x-0 opacity-100 bg-white' : 'opacity-0 -translate-x-full '} absolute lg:static inset-x-0 z-20 w-full transition-all duration-300 ease-in-out  dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center`}>
                <div className='lg:px-20 w-full p-2 border flex flex-col lg:flex-row justify-between items-center'>
                    <div className='flex flex-col lg:flex-row items-center gap-5'>
                        <div>
                            <ul className='flex items-center gap-5'>
                                <li>
                                    <NavLink to={'/'}
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "text-[#3bb77e]  font-[600] border-b-2 border-[#3bb77e] " : "hover:text-[#3bb77e] duration-300 font-[600]"
                                        }
                                    >Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/shop'}
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "text-[#3bb77e]  font-[600] border-b-2 border-[#3bb77e] " : "hover:text-[#3bb77e] duration-300 font-[600]"
                                        }
                                    >Shop</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/about'}
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "text-[#3bb77e]  font-[600] border-b-2 border-[#3bb77e] " : "hover:text-[#3bb77e] duration-300 font-[600]"
                                        }
                                    >About</NavLink>
                                </li>

                                <li>
                                    <NavLink to={'/blogs'}
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "text-[#3bb77e]  font-[600] border-b-2 border-[#3bb77e] " : "hover:text-[#3bb77e] duration-300 font-[600]"
                                        }
                                    >Blog</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/contact'}
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "text-[#3bb77e] font-[600] border-b-2 border-[#3bb77e] " : "hover:text-[#3bb77e] duration-300 font-[600]"
                                        }
                                    >Contact</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className='flex items-center gap-2 p-5 lg:p-0'>
                        <FaHeadphones className='text-3xl'></FaHeadphones>
                        <div>
                            <h1 className='text-2xl text-[#3bb77e] font-[700]'>5489-8956</h1>
                            <span className='text-[13px] font-[500]'>24/7 Support Center</span>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

    );
};

export default Navbar;