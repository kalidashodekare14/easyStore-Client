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

    console.log(quantity)

    const handleAddToCart = () => {
        addItem({ ...productDetails, id: productDetails._id }, parseInt(quantity))
    }

    return (
        <div className='lg:mx-20 min-h-screen'>
            <div className='flex gap-5'>
                <div className='w-[500px] h-[10vh]'>
                    <div>
                        <Carousel selectedItem={selectedIndex} onChange={setSelectedIndex} >
                            {
                                images.map((image, index) => (
                                    <div key={index} className='border'>
                                        <ImageZoom onClickThumb src={image} className={'w-full h-96'} alt="A image to apply the ImageZoom plugin" zoom="200" />
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
                <div className='space-y-5'>
                    <h1 className='text-4xl font-[500]'>{productDetails.name}</h1>

                    <Rating
                        style={{ maxWidth: 100 }}
                        value={4}
                        readOnly
                    />
                    <p className='text-4xl font-bold'>${productDetails.price}</p>
                    <p className='line-clamp-2'>{productDetails.description}</p>
                    <div>
                        <p>{productDetails.category}</p>
                        <p>{productDetails.brand_name}</p>
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