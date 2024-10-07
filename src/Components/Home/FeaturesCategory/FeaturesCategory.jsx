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
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// css import
import './FeaturesCategory.css'

const FeaturesCategory = () => {


    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 7
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 7
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const handleLeftArrow = () => {
        
    }
    const handleRightArrow = () => {

    }


    return (
        <div className='my-10'>
            <div className='flex justify-between items-center '>
                <h1 className='text-2xl font-semibold'>Featured Categories</h1>
                <div className='flex items-center gap-5'>
                    <div onClick={handleLeftArrow}>
                        <FaArrowLeft />
                    </div>
                    <div onClick={handleRightArrow}>
                        <FaArrowRight />
                    </div>
                </div>
            </div>
            <div className='mainBg my-5'>

                <Carousel responsive={responsive}>
                    <div className='childBackground flex flex-col mr-5 items-center border  space-y-2 p-3 rounded-lg'>
                        <img src={cake} alt="" />
                        <div className='flex flex-col items-center'>
                            <h3 className='font-[600]'>Cake & Milk</h3>
                            <p>26 Items</p>
                        </div>
                    </div>
                    <div className='childBackground flex flex-col  mr-5 items-center border  space-y-2 p-3 rounded-lg'>
                        <img src={cake} alt="" />
                        <div className='flex flex-col items-center'>
                            <h3 className='font-[600]'>Cake & Milk</h3>
                            <p>26 Items</p>
                        </div>
                    </div>
                    <div className='childBackground flex flex-col  mr-5 items-center border  space-y-2 p-3 rounded-lg'>
                        <img src={cake} alt="" />
                        <div className='flex flex-col items-center'>
                            <h3 className='font-[600]'>Cake & Milk</h3>
                            <p>26 Items</p>
                        </div>
                    </div>
                    <div className='childBackground flex flex-col  mr-5 items-center border  space-y-2 p-3 rounded-lg'>
                        <img src={cake} alt="" />
                        <div className='flex flex-col items-center'>
                            <h3 className='font-[600]'>Cake & Milk</h3>
                            <p>26 Items</p>
                        </div>
                    </div>
                    <div className='childBackground flex flex-col  mr-5 items-center border  space-y-2 p-3 rounded-lg'>
                        <img src={cake} alt="" />
                        <div className='flex flex-col items-center'>
                            <h3 className='font-[600]'>Cake & Milk</h3>
                            <p>26 Items</p>
                        </div>
                    </div>
                    <div className='childBackground flex flex-col  mr-5 items-center border  space-y-2 p-3 rounded-lg'>
                        <img src={cake} alt="" />
                        <div className='flex flex-col items-center'>
                            <h3 className='font-[600]'>Cake & Milk</h3>
                            <p>26 Items</p>
                        </div>
                    </div>
                    <div className='childBackground flex flex-col  mr-5 items-center border  space-y-2 p-3 rounded-lg'>
                        <img src={cake} alt="" />
                        <div className='flex flex-col items-center'>
                            <h3 className='font-[600]'>Cake & Milk</h3>
                            <p>26 Items</p>
                        </div>
                    </div>
                    <div className='childBackground flex flex-col  mr-5 items-center border  space-y-2 p-3 rounded-lg'>
                        <img src={cake} alt="" />
                        <div className='flex flex-col items-center'>
                            <h3 className='font-[600]'>Cake & Milk</h3>
                            <p>26 Items</p>
                        </div>
                    </div>
                    <div className='childBackground flex flex-col  mr-5 items-center border  space-y-2 p-3 rounded-lg'>
                        <img src={cake} alt="" />
                        <div className='flex flex-col items-center'>
                            <h3 className='font-[600]'>Cake & Milk</h3>
                            <p>26 Items</p>
                        </div>
                    </div>
                    <div className='childBackground flex flex-col  mr-5 items-center border  space-y-2 p-3 rounded-lg'>
                        <img src={cake} alt="" />
                        <div className='flex flex-col items-center'>
                            <h3 className='font-[600]'>Cake & Milk</h3>
                            <p>26 Items</p>
                        </div>
                    </div>

                </Carousel>;

            </div>
        </div>
    );
};

export default FeaturesCategory;