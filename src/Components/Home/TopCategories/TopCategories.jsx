import React from 'react';
import cake from '../../../assets/category/cake.png'
import oganik from '../../../assets/category/oganik.png'
import peach from '../../../assets/category/peach.png'
import redApple from '../../../assets/category/redApple.png'
import snack from '../../../assets/category/snak.png'
import vagitables from '../../../assets/category/vagitables.png'
import strawberry from '../../../assets/category/strawberry.png'
import blackPlum from '../../../assets/category/blackPlum.png'
import { FaArrowCircleRight, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import useAllProduct from '../../../Hooks/useAllProduct';

// css import
import './TopCategories.css'
import { Link } from 'react-router-dom';

const TopCategories = () => {

    const [allProduct] = useAllProduct()
    console.log(allProduct)


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




    return (
        <div className='my-10'>
            <div className='flex justify-between items-center '>
                <h1 className='text-2xl font-semibold'>Top Categories</h1>
                <Link to={"/shop"}>
                    <div className='flex items-center gap-2 border p-2 rounded-2xl'>
                        <span className='font-[500]'>All Items </span>
                        <FaArrowCircleRight />
                    </div>
                </Link>
            </div>
            <div className='mainBg my-5'>

                <Carousel responsive={responsive}>
                    {
                        allProduct.map(category => (
                            <Link to={`/shop?category=${category.category}`}>
                                <div className='flex flex-col mr-5 items-center border  space-y-2 p-3 rounded-lg'>
                                    <img className='w-20 h-20' src={category.image[0]} alt="" />
                                    <div className='flex flex-col items-center'>
                                        <h3 className='font-[600]'>{category.category}</h3>
                                    </div>
                                </div>
                            </Link>
                        ))
                    }
                </Carousel>;

            </div>
        </div>
    );
};

export default TopCategories;