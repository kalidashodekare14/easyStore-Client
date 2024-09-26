import React from 'react';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { CiShoppingCart } from 'react-icons/ci';
import img from '../../../assets/popular/img3.png'
import img1 from '../../../assets/popular/img2.png'
import img2 from '../../../assets/popular/img3.png'
import img3 from '../../../assets/popular/img4.png'
import img4 from '../../../assets/popular/img5.png'
import img5 from '../../../assets/popular/img6.png'
import img6 from '../../../assets/popular/img7.png'
import img7 from '../../../assets/popular/img8.png'
import img8 from '../../../assets/popular/img9.png'
import img9 from '../../../assets/popular/img10.png'


const PopularProduct = () => {
    return (
        <div className='my-5'>
            <div className='my-10'>
                <h1 className='text-2xl font-semibold'>Popular Products</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3'>
                <div className=' border space-y-2 rounded-2xl'>
                    <div className='flex justify-center items-center bg-[#f74b81] text-white border w-16 h-9 rounded-tl-2xl rounded-br-2xl'>
                        <p>Hot</p>
                    </div>
                    <div className='p-5'>
                        <img src={img} alt="" />
                        <span className='text-[#7a7a7a]'>Snak</span>
                        <h1 className='text-xl font-medium'>Seeds of Change Organic
                            Quinoa, Brown, & Red Rice</h1>
                        <Rating
                            style={{ maxWidth: 100 }}
                            value={2}
                            readOnly
                        />
                        <h2 className='text-[#7a7a7a]'>By <span className='text-[#3bb77e] font-medium'>NestFood</span></h2>
                        <div className='flex justify-between items-center'>
                            <p className='text-[#3bb77e] font-bold text-xl'>$28.85</p>
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
                        <img src={img1} alt="" />
                        <span className='text-[#7a7a7a]'>Hodo Foods</span>
                        <h1 className='text-xl font-medium'>All Natural Italian-Style Chicken
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
                        <img src={img2} alt="" />
                        <span className='text-[#7a7a7a]'>Snack</span>
                        <h1 className='text-xl font-medium'>Angie’s Boomchickapop Sweet &
                            Salty Kettle Corn</h1>
                        <Rating
                            style={{ maxWidth: 100 }}
                            value={3.5}
                            readOnly
                        />
                        <h2 className='text-[#7a7a7a]'>
                            By
                            <span className='text-[#3bb77e] font-medium'>
                                StarKist
                            </span>
                        </h2>
                        <div className='flex justify-between items-center'>
                            <p className='text-[#3bb77e] font-bold text-xl'>$48.85</p>
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
                        <img src={img3} alt="" />
                        <span className='text-[#7a7a7a]'>Vegetables</span>
                        <h1 className='text-xl font-medium'>Foster Farms Takeout Crispy
                            Classic Buffalo Wings</h1>
                        <Rating
                            style={{ maxWidth: 100 }}
                            value={4.2}
                            readOnly
                        />
                        <h2 className='text-[#7a7a7a]'>
                            By
                            <span className='text-[#3bb77e] font-medium'>
                                NestFood
                            </span>
                        </h2>
                        <div className='flex justify-between items-center'>
                            <p className='text-[#3bb77e] font-bold text-xl'>$17.85</p>
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
                        <img src={img4} alt="" />
                        <span className='text-[#7a7a7a]'>Pet Foods</span>
                        <h1 className='text-xl font-medium'>Blue Diamond Almonds Lightly
                            Salted Vegetables</h1>
                        <Rating
                            style={{ maxWidth: 100 }}
                            value={4.2}
                            readOnly
                        />
                        <h2 className='text-[#7a7a7a]'>
                            By
                            <span className='text-[#3bb77e] font-medium'>
                            NestFood
                            </span>
                        </h2>
                        <div className='flex justify-between items-center'>
                            <p className='text-[#3bb77e] font-bold text-xl'>$23.85</p>
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
                        <img src={img5} alt="" />
                        <span className='text-[#7a7a7a]'>Hodo Foods</span>
                        <h1 className='text-xl font-medium'>Chobani Complete Vanilla Greek
                        Yogurt</h1>
                        <Rating
                            style={{ maxWidth: 100 }}
                            value={4.2}
                            readOnly
                        />
                        <h2 className='text-[#7a7a7a]'>
                            By
                            <span className='text-[#3bb77e] font-medium'>
                            NestFood
                            </span>
                        </h2>
                        <div className='flex justify-between items-center'>
                            <p className='text-[#3bb77e] font-bold text-xl'>$54.85</p>
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
                        <img src={img6} alt="" />
                        <span className='text-[#7a7a7a]'>Meats</span>
                        <h1 className='text-xl font-medium'>Canada Dry Ginger Ale – 2 L
                        Bottle - 200ml - 400g</h1>
                        <Rating
                            style={{ maxWidth: 100 }}
                            value={4.2}
                            readOnly
                        />
                        <h2 className='text-[#7a7a7a]'>
                            By
                            <span className='text-[#3bb77e] font-medium'>
                            NestFood
                            </span>
                        </h2>
                        <div className='flex justify-between items-center'>
                            <p className='text-[#3bb77e] font-bold text-xl'>$32.85</p>
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
                        <img src={img7} alt="" />
                        <span className='text-[#7a7a7a]'>Snack</span>
                        <h1 className='text-xl font-medium'>Encore Seafoods Stuffed
                        Alaskan Salmon</h1>
                        <Rating
                            style={{ maxWidth: 100 }}
                            value={4.2}
                            readOnly
                        />
                        <h2 className='text-[#7a7a7a]'>
                            By
                            <span className='text-[#3bb77e] font-medium'>
                            NestFood
                            </span>
                        </h2>
                        <div className='flex justify-between items-center'>
                            <p className='text-[#3bb77e] font-bold text-xl'>$35.85</p>
                            <button className='btn bg-[#3bb77d34] text-[#3bb77e]'>
                                <CiShoppingCart className='text-xl' />
                                <span className='font-bold'>Add</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularProduct;