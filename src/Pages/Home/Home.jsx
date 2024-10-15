import React from 'react';
import banner from '../../assets/homeBanner/banner.png'
import banner1 from '../../assets/homeBanner/banner1.png'
import banner2 from '../../assets/homeBanner/banner2.png'
import Banner from '../../Components/Home/Banner/Banner';
import TopCategories from '../../Components/Home/TopCategories/TopCategories';
import NewProduct from '../../Components/Home/NewProduct/NewProduct';
import DailySales from '../../Components/Home/DailySales/DailySales';
import DealsOfDay from '../../Components/Home/DealsOfDay/DealsOfDay';
import ProductReview from '../../Components/Home/ProductReview/ProductReview';

// css file import
import './Home.css'

// images
import img1 from '../../assets/system/img1.png'
import img2 from '../../assets/system/img2.png'
import img3 from '../../assets/system/img3.png'
// import img4 from '../../assets/system/img4.png'
import img5 from '../../assets/system/img5.png'
import { Link } from 'react-router-dom';




const Home = () => {
    return (
        <div className='lg:mx-20'>
            <Banner></Banner>
            {/* Category */}
            <TopCategories></TopCategories>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5'>
                <div className={`flex flex-col justify-center gap-5  banner1 bg-center bg-no-repeat bg-cover  h-72 w-full px-5`}>
                    <h1 className='text-[22px] w-60 font-[600]'>Fresh and Organic Vegetables for a Healthy Life</h1>
                    <Link to={"/shop"}>
                        <button className='btn w-32 bg-[#3bb77e] text-white'>Shop</button>
                    </Link>
                </div>
                <div className={`flex flex-col justify-center gap-5  banner2 bg-center bg-no-repeat bg-cover  h-72 w-full px-5`}>
                    <h1 className='text-[22px] w-60 font-[600]'>Delicious Instant Noodles – Ready in Minutes!</h1>
                    <Link to={"/shop"}>
                        <button className='btn w-32 bg-[#3bb77e] text-white'>Shop</button>
                    </Link>
                </div>
                <div className={`flex flex-col justify-center gap-5  banner3 bg-center bg-no-repeat bg-cover  h-72 w-full px-5`}>
                    <h1 className='text-[22px] w-60 font-[600]'>Farm-Fresh Vegetables for Every Meal</h1>
                    <Link to={"/shop"}>
                        <button className='btn w-32 bg-[#3bb77e] text-white'>Shop</button>
                    </Link>
                </div>
            </div>
            {/* popular product */}
            <NewProduct></NewProduct>
            {/* daily sales */}
            <DailySales></DailySales>
            {/* Deals Of Day */}
            <DealsOfDay></DealsOfDay>
            {/* Product Review */}
            <ProductReview></ProductReview>
            <div className="my-10 subscribe-banner h-[300px] bg-center bg-no-repeat bg-cover">
                <div className='lg:w-96 space-y-3 flex flex-col justify-center h-[300px] lg:mx-10 mx-5'>
                    <h1 className='text-3xl font-bold'>Stay home & get your daily
                        needs from our shop</h1>
                    <p className='text-[#8a8a8a] font-medium'>Start You'r Daily Shopping with Nest Mart</p>
                    <div className='border'>
                        <input className='input rounded-3xl' placeholder='Your emaill address' type="text" />
                        <button className='btn bg-[#3bb77e] text-white rounded-3xl -ms-10'>Subscribe</button>
                    </div>
                </div>
            </div>
            {/* ecomarce system */}
            <div className='my-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5'>
                <div className='flex items-center gap-3 border  p-5 rounded-2xl bg-[#f4f6fa]'>
                    <img className='w-12' src={img2} alt="" />
                    <div>
                        <h1 className='text-xl font-medium'>Best prices & offers</h1>
                        <p className='text-[#6b6969]'>Order $50 or more</p>
                    </div>
                </div>
                <div className='flex items-center gap-3 border  p-5 rounded-2xl bg-[#f4f6fa]'>
                    <img className='w-12' src={img3} alt="" />
                    <div>
                        <h1 className='text-xl font-medium'>Free delivery</h1>
                        <p className='text-[#6b6969]'>24/7 amazing services</p>
                    </div>
                </div>
                <div className='flex items-center gap-3 border  p-5 rounded-2xl bg-[#f4f6fa]'>
                    <img className='w-12' src={img5} alt="" />
                    <div>
                        <h1 className='text-xl font-medium'>Great daily deal</h1>
                        <p className='text-[#6b6969]'>When you sign up</p>
                    </div>
                </div>
                <div className='flex items-center gap-3 border  p-5 rounded-2xl bg-[#f4f6fa]'>
                    {/* <img className='w-12' src={img4} alt="" /> */}
                    <div>
                        <h1 className='text-xl font-medium'>Wide assortment</h1>
                        <p className='text-[#6b6969]'>Mega Discounts</p>
                    </div>
                </div>
                <div className='flex items-center gap-3 border  p-5 rounded-2xl bg-[#f4f6fa]'>
                    <img className='w-12' src={img1} alt="" />
                    <div>
                        <h1 className='text-xl font-medium'>Easy returns</h1>
                        <p className='text-[#6b6969]'>Within 30 days</p>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Home;