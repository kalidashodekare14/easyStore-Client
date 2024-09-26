import React from 'react';
import cake from '../../../assets/category/cake.png'
import oganik from '../../../assets/category/oganik.png'
import peach from '../../../assets/category/peach.png'
import redApple from '../../../assets/category/redApple.png'
import snack from '../../../assets/category/snak.png'
import vagitables from '../../../assets/category/vagitables.png'
import strawberry from '../../../assets/category/strawberry.png'
import blackPlum from '../../../assets/category/blackPlum.png'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const FeaturesCategory = () => {
    return (
        <div className='my-10'>
            <div className='flex justify-between items-center '>
                <h1 className='text-2xl font-semibold'>Featured Categories</h1>
                <div className='flex items-center gap-5'>
                    <FaArrowLeft />
                    <FaArrowRight />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-4 lg:grid-cols-8 gap-3 my-5'>
                <div className='flex flex-col items-center border  space-y-2 p-3 rounded-lg'>
                    <img src={cake} alt="" />
                    <div className='flex flex-col items-center'>
                        <h3>Cake & Milk</h3>
                        <p>26 Items</p>
                    </div>
                </div>
                <div className='flex flex-col items-center border space-y-2 p-3 rounded-lg'>
                    <img src={oganik} alt="" />
                    <div className='flex flex-col items-center'>
                        <h3>Oganic Kiwi</h3>
                        <p>28 items</p>
                    </div>
                </div>
                <div className='flex flex-col items-center border space-y-2 p-3 rounded-lg'>
                    <img src={peach} alt="" />
                    <div className='flex flex-col items-center'>
                        <h3>Peach</h3>
                        <p>14 items</p>
                    </div>
                </div>
                <div className='flex flex-col items-center border  space-y-2 p-3 rounded-lg'>
                    <img src={redApple} alt="" />
                    <div className='flex flex-col items-center'>
                        <h3>Red Apple</h3>
                        <p>54 items</p>
                    </div>
                </div>
                <div className='flex flex-col items-center border  space-y-2 p-3 rounded-lg'>
                    <img src={snack} alt="" />
                    <div className='flex flex-col items-center'>
                        <h3>Snack</h3>
                        <p>56 items</p>
                    </div>
                </div>
                <div className='flex flex-col items-center border  space-y-2 p-3 rounded-lg'>
                    <img src={vagitables} alt="" />
                    <div className='flex flex-col items-center'>
                        <h3>Vegetables</h3>
                        <p>72 items</p>
                    </div>
                </div>
                <div className='flex flex-col items-center border  space-y-2 p-3 rounded-lg'>
                    <img src={strawberry} alt="" />
                    <div className='flex flex-col items-center'>
                        <h3>Strawberry</h3>
                        <p>36 items</p>
                    </div>
                </div>
                <div className='flex flex-col items-center border  space-y-2 p-3 rounded-lg'>
                    <img src={blackPlum} alt="" />
                    <div className='flex flex-col items-center'>
                        <h3>Black plum</h3>
                        <p>123 items</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default FeaturesCategory;