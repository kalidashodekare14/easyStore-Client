import React, { useState } from 'react';
// import image from '../../assets/shop/img1.png'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import image from '../../assets/det.jpeg'
import ImageZoom from "react-image-zooom";
import { useLoaderData } from 'react-router-dom';
import './Details.css'

const Details = () => {


    const productDetails = useLoaderData()
    const images = productDetails.image
    const [selectedIndex, setSelectedIndex] = useState(0)



    return (
        <div className='lg:mx-20 min-h-screen'>

            <div className='w-[500px] h-[10vh]'>
                <div>
                    <Carousel selectedItem={selectedIndex} onChange={setSelectedIndex} >
                        {
                            images.map((image, index) => (
                                <div className='border'>
                                    <ImageZoom onClickThumb src={image} className={'w-full h-96'} alt="A image to apply the ImageZoom plugin" zoom="200" />
                                </div>
                            ))
                        }
                    </Carousel>
                </div>
                <div className='flex'>
                    {
                        images.map((image, index) => (
                            <img key={index} onClick={() => setSelectedIndex(index)} className={`w-20 h-20 object-cover cursor-pointer rounded ${selectedIndex === index ? 'border-2 border-blue-500' : 'border-2 border-gray-300'}`} src={image} alt='' />
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Details;