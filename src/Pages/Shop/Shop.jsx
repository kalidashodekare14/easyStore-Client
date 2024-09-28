import React from 'react';
import img from '../../assets/main.png'
import Select from 'react-select';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import img1 from '../../assets/food.png'
import { Rating } from '@smastrom/react-rating';
import { CiShoppingCart } from 'react-icons/ci';
import card1 from '../../assets/shop/img1.png'
import card2 from '../../assets/shop/img2.png'
import card3 from '../../assets/shop/img3.png'
import card4 from '../../assets/shop/img4.png'
import card5 from '../../assets/shop/img5.png'
import card6 from '../../assets/shop/img6.png'

const Shop = () => {
    return (
        <div className='lg:mx-20 my-10'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='flex gap-5 w-full min-h-screen mt-10'>
                <div className='w-80 space-y-5 min-h-screen'>
                    <div className='border shadow rounded-xl'>
                        <div className='p-3'>
                            <div className='border-b pb-2'>
                                <h1 className='text-2xl font-[600]'>Category</h1>
                            </div>
                            <div className='mt-5'>
                                <Select />
                            </div>
                        </div>
                        <div className='p-3'>
                            <div className='border-b pb-2'>
                                <h1 className='text-2xl font-[600]'>Fill By Prices</h1>
                            </div>
                            <div className='mt-5'>
                                <RangeSlider />
                                <div className='flex justify-between items-center my-5'>
                                    <div className='flex justify-center items-center border w-20 h-10'>
                                        <h1>458</h1>
                                    </div>
                                    <div className='flex justify-center items-center border  w-20 h-10'>
                                        <h1>586</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='p-3'>
                            <div className='border-b pb-2'>
                                <h1 className='text-xl font-[600]'>Color</h1>
                            </div>
                            <div className='py-3'>
                                <div className='flex items-center gap-2'>
                                    <input type="checkbox" />
                                    <h1>Red (50)</h1>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <input type="checkbox" />
                                    <h1>Green (50)</h1>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <input type="checkbox" />
                                    <h1>Blue (50)</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='border shadow rounded-xl'>
                        <div className='p-3'>
                            <div className='border-b pb-2'>
                                <h1 className='text-2xl font-[600]'>New Products</h1>
                            </div>
                            <div className='flex items-center'>
                                <img src={img1} alt="" />
                                <div className='p-5'>
                                    <h1 className='text-[#3bb77e] font-[700]'>Chen Cardigan</h1>
                                    <p>$99.50</p>
                                    <Rating
                                        style={{ maxWidth: 100 }}
                                        value={4}
                                        readOnly
                                    />
                                </div>
                            </div>
                            <div className='flex items-center'>
                                <img src={img1} alt="" />
                                <div className='p-5'>
                                    <h1 className='text-[#3bb77e] font-[700]'>Chen Cardigan</h1>
                                    <p>$99.50</p>
                                    <Rating
                                        style={{ maxWidth: 100 }}
                                        value={4}
                                        readOnly
                                    />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='w-full min-h-screen'>
                    <div className='flex justify-between items-center'>
                        <h1>We found 29 items for you!</h1>
                        <div className='space-x-5'>
                            <details className="dropdown">
                                <summary className="btn rounded-none">Show:</summary>
                                <ul className="menu dropdown-content bg-base-100  w-52 p-2 shadow">
                                    <li><a>One Collumn</a></li>
                                    <li><a>Two Collumn</a></li>
                                </ul>
                            </details>
                            <details className="dropdown">
                                <summary className="btn rounded-none">Sort By: Price</summary>
                                <ul className="menu dropdown-content bg-base-100  w-52 p-2 shadow">
                                    <li><a>Item 1</a></li>
                                    <li><a>Item 2</a></li>
                                </ul>
                            </details>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-10'>
                        <div className=' border space-y-2 rounded-2xl'>
                            <div className='flex justify-center items-center bg-[#f74b81] text-white border w-16 h-9 rounded-tl-2xl rounded-br-2xl'>
                                <p>Hot</p>
                            </div>
                            <div className='p-5'>
                                <img src={card1} alt="" />
                                <span className='text-[#7a7a7a]'>Hodo Foods</span>
                                <h1 className='text-[18px] font-medium'>All Natural Italian-Style Chicken
                                    Meatballs</h1>
                                <Rating
                                    style={{ maxWidth: 100 }}
                                    value={4}
                                    readOnly
                                />
                                <h2 className='text-[#7a7a7a]'>
                                    By
                                    <span className='text-[#3bb77e] font-medium'>
                                        Stouffer
                                    </span>
                                </h2>
                                <div className='flex justify-between items-center'>
                                    <p className='text-[#3bb77e] font-bold text-xl'>$52.85</p>
                                    <button className='btn bg-[#3bb77d34] text-[#3bb77e]'>
                                        <CiShoppingCart className='text-xl' />
                                        <span className='font-bold'>Add</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className=' border space-y-2 rounded-2xl'>
                            <div className='flex justify-center items-center bg-[#f74b81] text-white border w-16 h-9 rounded-tl-2xl rounded-br-2xl'>
                                <p>Hot</p>
                            </div>
                            <div className='p-5'>
                                <img src={card2} alt="" />
                                <span className='text-[#7a7a7a]'>Hodo Foods</span>
                                <h1 className='text-[18px] font-medium'>All Natural Italian-Style Chicken
                                    Meatballs</h1>
                                <Rating
                                    style={{ maxWidth: 100 }}
                                    value={4}
                                    readOnly
                                />
                                <h2 className='text-[#7a7a7a]'>
                                    By
                                    <span className='text-[#3bb77e] font-medium'>
                                        Stouffer
                                    </span>
                                </h2>
                                <div className='flex justify-between items-center'>
                                    <p className='text-[#3bb77e] font-bold text-xl'>$52.85</p>
                                    <button className='btn bg-[#3bb77d34] text-[#3bb77e]'>
                                        <CiShoppingCart className='text-xl' />
                                        <span className='font-bold'>Add</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className=' border space-y-2 rounded-2xl'>
                            <div className='flex justify-center items-center bg-[#f74b81] text-white border w-16 h-9 rounded-tl-2xl rounded-br-2xl'>
                                <p>Hot</p>
                            </div>
                            <div className='p-5'>
                                <img src={card3} alt="" />
                                <span className='text-[#7a7a7a]'>Hodo Foods</span>
                                <h1 className='text-[18px] font-medium'>All Natural Italian-Style Chicken
                                    Meatballs</h1>
                                <Rating
                                    style={{ maxWidth: 100 }}
                                    value={4}
                                    readOnly
                                />
                                <h2 className='text-[#7a7a7a]'>
                                    By
                                    <span className='text-[#3bb77e] font-medium'>
                                        Stouffer
                                    </span>
                                </h2>
                                <div className='flex justify-between items-center'>
                                    <p className='text-[#3bb77e] font-bold text-xl'>$52.85</p>
                                    <button className='btn bg-[#3bb77d34] text-[#3bb77e]'>
                                        <CiShoppingCart className='text-xl' />
                                        <span className='font-bold'>Add</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className=' border space-y-2 rounded-2xl'>
                            <div className='flex justify-center items-center bg-[#f74b81] text-white border w-16 h-9 rounded-tl-2xl rounded-br-2xl'>
                                <p>Hot</p>
                            </div>
                            <div className='p-5'>
                                <img src={card4} alt="" />
                                <span className='text-[#7a7a7a]'>Hodo Foods</span>
                                <h1 className='text-[18px] font-medium'>All Natural Italian-Style Chicken
                                    Meatballs</h1>
                                <Rating
                                    style={{ maxWidth: 100 }}
                                    value={4}
                                    readOnly
                                />
                                <h2 className='text-[#7a7a7a]'>
                                    By
                                    <span className='text-[#3bb77e] font-medium'>
                                        Stouffer
                                    </span>
                                </h2>
                                <div className='flex justify-between items-center'>
                                    <p className='text-[#3bb77e] font-bold text-xl'>$52.85</p>
                                    <button className='btn bg-[#3bb77d34] text-[#3bb77e]'>
                                        <CiShoppingCart className='text-xl' />
                                        <span className='font-bold'>Add</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className=' border space-y-2 rounded-2xl'>
                            <div className='flex justify-center items-center bg-[#f74b81] text-white border w-16 h-9 rounded-tl-2xl rounded-br-2xl'>
                                <p>Hot</p>
                            </div>
                            <div className='p-5'>
                                <img src={card5} alt="" />
                                <span className='text-[#7a7a7a]'>Hodo Foods</span>
                                <h1 className='text-[18px] font-medium'>All Natural Italian-Style Chicken
                                    Meatballs</h1>
                                <Rating
                                    style={{ maxWidth: 100 }}
                                    value={4}
                                    readOnly
                                />
                                <h2 className='text-[#7a7a7a]'>
                                    By
                                    <span className='text-[#3bb77e] font-medium'>
                                        Stouffer
                                    </span>
                                </h2>
                                <div className='flex justify-between items-center'>
                                    <p className='text-[#3bb77e] font-bold text-xl'>$52.85</p>
                                    <button className='btn bg-[#3bb77d34] text-[#3bb77e]'>
                                        <CiShoppingCart className='text-xl' />
                                        <span className='font-bold'>Add</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className=' border space-y-2 rounded-2xl'>
                            <div className='flex justify-center items-center bg-[#f74b81] text-white border w-16 h-9 rounded-tl-2xl rounded-br-2xl'>
                                <p>Hot</p>
                            </div>
                            <div className='p-5'>
                                <img src={card6} alt="" />
                                <span className='text-[#7a7a7a]'>Hodo Foods</span>
                                <h1 className='text-[18px] font-medium'>All Natural Italian-Style Chicken
                                    Meatballs</h1>
                                <Rating
                                    style={{ maxWidth: 100 }}
                                    value={4}
                                    readOnly
                                />
                                <h2 className='text-[#7a7a7a]'>
                                    By
                                    <span className='text-[#3bb77e] font-medium'>
                                        Stouffer
                                    </span>
                                </h2>
                                <div className='flex justify-between items-center'>
                                    <p className='text-[#3bb77e] font-bold text-xl'>$52.85</p>
                                    <button className='btn bg-[#3bb77d34] text-[#3bb77e]'>
                                        <CiShoppingCart className='text-xl' />
                                        <span className='font-bold'>Add</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className=' border space-y-2 rounded-2xl'>
                            <div className='flex justify-center items-center bg-[#f74b81] text-white border w-16 h-9 rounded-tl-2xl rounded-br-2xl'>
                                <p>Hot</p>
                            </div>
                            <div className='p-5'>
                                <img src={card1} alt="" />
                                <span className='text-[#7a7a7a]'>Hodo Foods</span>
                                <h1 className='text-[18px] font-medium'>All Natural Italian-Style Chicken
                                    Meatballs</h1>
                                <Rating
                                    style={{ maxWidth: 100 }}
                                    value={4}
                                    readOnly
                                />
                                <h2 className='text-[#7a7a7a]'>
                                    By
                                    <span className='text-[#3bb77e] font-medium'>
                                        Stouffer
                                    </span>
                                </h2>
                                <div className='flex justify-between items-center'>
                                    <p className='text-[#3bb77e] font-bold text-xl'>$52.85</p>
                                    <button className='btn bg-[#3bb77d34] text-[#3bb77e]'>
                                        <CiShoppingCart className='text-xl' />
                                        <span className='font-bold'>Add</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;