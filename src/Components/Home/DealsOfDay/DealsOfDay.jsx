import React from 'react';
import { Rating } from '@smastrom/react-rating';
import { CiShoppingCart } from 'react-icons/ci';
import useAllProduct from '../../../Hooks/useAllProduct';

const DealsOfDay = () => {

    const [allProduct] = useAllProduct()

    return (
        <div className=' my-10'>
            <div className='my-10'>
                <h1 className='text-2xl font-semibold'>Deals Of The Day</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    allProduct.slice(0,3).map(product => (
                        <div className='flex flex-col border'>
                            <img className='h-80' src={product.image[0]} alt="" />
                            <div className='w-80 m-auto border -mt-32 p-5 bg-white space-y-2'>
                                <h1 className='text-xl font-bold'>Seeds of Change Organic Quinoa,
                                    Brown, & Red Rice</h1>
                                <Rating
                                    style={{ maxWidth: 100 }}
                                    value={2}
                                    readOnly
                                />
                                <p>by: <span>NestFood</span></p>
                                <div className='flex justify-between items-center'>
                                    <h1 className='text-xl font-medium text-[#3bb77e]'>$34.85</h1>
                                    <button className='btn bg-[#3bb77d2a] text-[#3bb77e]'>
                                        <CiShoppingCart className='text-2xl' />
                                        Add
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                }


            </div>
        </div>
    );
};

export default DealsOfDay;