import React, { useState } from 'react';
// import image from '../../assets/shop/img1.png'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import image from '../../assets/det.jpeg'
import ImageZoom from "react-image-zooom";
import { useLoaderData } from 'react-router-dom';
import './Details.css'
import { Rating } from '@smastrom/react-rating';
import { useCart } from 'react-use-cart';
import { TbBrandAppgallery, TbCategoryFilled } from "react-icons/tb";
import { MdEventAvailable } from "react-icons/md";
import { Helmet } from 'react-helmet-async';



const Details = () => {


    const productDetails = useLoaderData()
    const images = productDetails.image
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [quantity, setQuantity] = useState(1)

    const {
        isEmpty,
        addItem,
        totalUniqueItems,
        items,
        updateItemQuantity,
        removeItem,
    } = useCart();

    const handleAddToCart = () => {
        addItem({ ...productDetails, id: productDetails._id }, parseInt(quantity))
    }

    return (
        <div className='lg:mx-20 min-h-screen'>
            <Helmet>
                <title>Details | EasyStore</title>
            </Helmet>
            <div className='flex flex-col lg:flex-row gap-5'>
                <div className='lg:w-[500px] lg:h-[10vh]'>
                    <div>
                        <Carousel selectedItem={selectedIndex} onChange={setSelectedIndex} >
                            {
                                images.map((image, index) => (
                                    <div key={index} className='border'>
                                        <ImageZoom onClickThumb src={image} className={'lg:w-full h-[450px]'} alt="A image to apply the ImageZoom plugin" zoom="200" />
                                    </div>
                                ))
                            }
                        </Carousel>
                    </div>
                    <div className='flex items-center space-x-2 '>
                        {
                            images.map((image, index) => (
                                <img key={index} onClick={() => setSelectedIndex(index)} className={`w-20 h-20 object-cover cursor-pointer rounded ${selectedIndex === index ? 'border-2 border-blue-500' : 'border-2 border-gray-300'}`} src={image} alt='' />
                            ))
                        }
                    </div>
                </div>
                <div className='lg:w-[50%] space-y-5 p-5'>
                    <div className='border w-20 px-2 rounded bg-[#fde0e9] text-[#f74b81] font-[600]'>
                        <h1>10 Off</h1>
                    </div>
                    <h1 className='lg:text-4xl text-2xl font-[500]'>{productDetails.name}</h1>

                    <Rating
                        style={{ maxWidth: 100 }}
                        value={4}
                        readOnly
                    />
                    <p className='text-4xl font-bold text-[#3bb77e]'>${productDetails.price}</p>
                    <p className='line-clamp-2'>{productDetails.description}</p>
                    <div className='grid grid-cols-2 md:grid-cols-3 gap-5'>
                        <div className='flex items-center text-xl gap-2'>
                            <TbCategoryFilled className='font-[600]' />
                            <span >{productDetails.category}</span>
                        </div>
                        <div className='flex items-center text-xl gap-2'>
                            <TbBrandAppgallery className='font-[600] text-[22px]' />
                            <span className='text-[#2c2c2c]'>{productDetails.brand_name}</span>
                        </div>
                        <div className='flex items-center text-xl gap-2'>
                            <MdEventAvailable className='font-[600] text-[22px]' />
                            <span className='text-[#2c2c2c]'>{productDetails.availability}</span>
                        </div>
                    </div>
                    <div className='flex items-center gap-5'>
                        <div className='flex items-center border w-[170px] rounded-xl'>
                            <span onClick={() => setQuantity(Math.max(1, quantity - 1))} className='text-xl btn bg-opacity-0'>-</span>
                            <input onChange={(e) => setQuantity(e.target.value)} value={quantity} className='input w-20' type="text" />
                            <span onClick={() => setQuantity(quantity + 1)} className='text-xl btn bg-opacity-0'>+</span>
                        </div>
                        <button onClick={handleAddToCart} className='btn bg-[#3bb77e] text-white'>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Details;