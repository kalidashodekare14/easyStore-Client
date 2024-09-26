import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Rating } from '@smastrom/react-rating';

import img1 from '../../../assets/dailySales/img1.png'
import img2 from '../../../assets/dailySales/img2.png'
import img3 from '../../../assets/dailySales/img3.png'
import img4 from '../../../assets/dailySales/img4.png'
import { CiShoppingCart } from 'react-icons/ci';

const DailySales = () => {


    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
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
        <div className=''>
            <div>
                <div className='my-10'>
                    <h1 className='text-2xl font-semibold'>Popular Products</h1>
                </div>
            </div>
            <Carousel responsive={responsive}>
                <div>
                    <div className=' border space-y-2 rounded-2xl me-2'>
                        <div className='flex justify-center items-center bg-[#f74b81] text-white border w-16 h-9 rounded-tl-2xl rounded-br-2xl'>
                            <p>Hot</p>
                        </div>
                        <div className='p-5 space-y-2'>
                            <img src={img1} alt="" />
                            <span className='text-[#7a7a7a]'>Snak</span>
                            <h1 className='text-xl font-medium'>Seeds of Change Organic
                                Quinoa, Brown, & Red Rice</h1>
                            <Rating
                                style={{ maxWidth: 100 }}
                                value={2}
                                readOnly
                            />
                            <p className='text-[#3bb77e] font-bold text-xl'>$28.85</p>
                            <div className='w-full'>
                                <input className='w-full' value={60} type="range" />
                            </div>
                            <div>
                                <h2 className='font-medium'>Sold: 90/120</h2>
                                <button className='btn w-full bg-[#3bb77e] text-white'>Add To Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className=' border space-y-2 rounded-2xl me-2'>
                        <div className='flex justify-center items-center bg-[#f74b81] text-white border w-16 h-9 rounded-tl-2xl rounded-br-2xl'>
                            <p>Hot</p>
                        </div>
                        <div className='p-5 space-y-2'>
                            <img src={img2} alt="" />
                            <span className='text-[#7a7a7a]'>Snak</span>
                            <h1 className='text-xl font-medium'>Seeds of Change Organic
                                Quinoa, Brown, & Red Rice</h1>
                            <Rating
                                style={{ maxWidth: 100 }}
                                value={2}
                                readOnly
                            />
                            <p className='text-[#3bb77e] font-bold text-xl'>$28.85</p>
                            <div className='w-full'>
                                <input className='w-full' value={60} type="range" />
                            </div>
                            <div>
                                <h2 className='font-medium'>Sold: 90/120</h2>
                                <button className='btn w-full bg-[#3bb77e] text-white'>Add To Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className=' border space-y-2 rounded-2xl me-2'>
                        <div className='flex justify-center items-center bg-[#f74b81] text-white border w-16 h-9 rounded-tl-2xl rounded-br-2xl'>
                            <p>Hot</p>
                        </div>
                        <div className='p-5 space-y-2'>
                            <img src={img3} alt="" />
                            <span className='text-[#7a7a7a]'>Snak</span>
                            <h1 className='text-xl font-medium'>Seeds of Change Organic
                                Quinoa, Brown, & Red Rice</h1>
                            <Rating
                                style={{ maxWidth: 100 }}
                                value={2}
                                readOnly
                            />
                            <p className='text-[#3bb77e] font-bold text-xl'>$28.85</p>
                            <div className='w-full'>
                                <input className='w-full' value={60} type="range" />
                            </div>
                            <div>
                                <h2 className='font-medium'>Sold: 90/120</h2>
                                <button className='btn w-full bg-[#3bb77e] text-white'>Add To Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className=' border space-y-2 rounded-2xl me-2'>
                        <div className='flex justify-center items-center bg-[#f74b81] text-white border w-16 h-9 rounded-tl-2xl rounded-br-2xl'>
                            <p>Hot</p>
                        </div>
                        <div className='p-5 space-y-2 '>
                            <img src={img4} alt="" />
                            <span className='text-[#7a7a7a]'>Snak</span>
                            <h1 className='text-xl font-medium'>Seeds of Change Organic
                                Quinoa, Brown, & Red Rice</h1>
                            <Rating
                                style={{ maxWidth: 100 }}
                                value={2}
                                readOnly
                            />
                            <p className='text-[#3bb77e] font-bold text-xl'>$28.85</p>
                            <div className='w-full'>
                                <input className='w-full' value={60} type="range" />
                            </div>
                            <div>
                                <h2 className='font-medium'>Sold: 90/120</h2>
                                <button className='btn w-full bg-[#3bb77e] text-white'>Add To Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className=' border space-y-2 rounded-2xl me-2'>
                        <div className='flex justify-center items-center bg-[#f74b81] text-white border w-16 h-9 rounded-tl-2xl rounded-br-2xl'>
                            <p>Hot</p>
                        </div>
                        <div className='p-5 space-y-2 '>
                            <img src={img4} alt="" />
                            <span className='text-[#7a7a7a]'>Snak</span>
                            <h1 className='text-xl font-medium'>Seeds of Change Organic
                                Quinoa, Brown, & Red Rice</h1>
                            <Rating
                                style={{ maxWidth: 100 }}
                                value={2}
                                readOnly
                            />
                            <p className='text-[#3bb77e] font-bold text-xl'>$28.85</p>
                            <div className='w-full'>
                                <input className='w-full' value={60} type="range" />
                            </div>
                            <div>
                                <h2 className='font-medium'>Sold: 90/120</h2>
                                <button className='btn w-full bg-[#3bb77e] text-white'>Add To Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className=' border space-y-2 rounded-2xl me-2'>
                        <div className='flex justify-center items-center bg-[#f74b81] text-white border w-16 h-9 rounded-tl-2xl rounded-br-2xl'>
                            <p>Hot</p>
                        </div>
                        <div className='p-5 space-y-2 '>
                            <img src={img4} alt="" />
                            <span className='text-[#7a7a7a]'>Snak</span>
                            <h1 className='text-xl font-medium'>Seeds of Change Organic
                                Quinoa, Brown, & Red Rice</h1>
                            <Rating
                                style={{ maxWidth: 100 }}
                                value={2}
                                readOnly
                            />
                            <p className='text-[#3bb77e] font-bold text-xl'>$28.85</p>
                            <div className='w-full'>
                                <input className='w-full' value={60} type="range" />
                            </div>
                            <div>
                                <h2 className='font-medium'>Sold: 90/120</h2>
                                <button className='btn w-full bg-[#3bb77e] text-white'>Add To Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Carousel>
        </div>
    );
};

export default DailySales;