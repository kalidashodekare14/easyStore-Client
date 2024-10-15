import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Rating } from '@smastrom/react-rating';


import { CiShoppingCart } from 'react-icons/ci';
import UseAllProduct from '../../../Hooks/useAllProduct';
import { useCart } from 'react-use-cart';

const DailySales = () => {


    const [useAllProduct] = UseAllProduct()
    const { addItem } = useCart();


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
                    <h1 className='text-2xl font-semibold'>Daily sales of day</h1>
                </div>
            </div>
            <Carousel responsive={responsive}>

                {
                    useAllProduct.map(product => (
                        <div>
                            <div className=' border space-y-2'>
                                <div className='flex justify-center items-center bg-[#dc2626] text-white border w-16 h-9 '>
                                    <p>{product.discount}%</p>
                                </div>
                                <div className='p-5 space-y-2'>
                                    <img className='w-full h-40' src={product.image[0]} alt="" />
                                    <span className='text-[#7a7a7a]'>{product.name}</span>
                                    <h1 className='text-xl font-medium'>{product.description.slice(0,50)}...</h1>
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
                                        <button onClick={() => addItem({ ...product, id: product._id })} className='btn w-full bg-[#3bb77e] text-white'>Add To Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </Carousel>
        </div>
    );
};

export default DailySales;