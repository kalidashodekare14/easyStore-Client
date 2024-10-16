import React from 'react';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { CiShoppingCart } from 'react-icons/ci';

import useAllProduct from '../../../Hooks/useAllProduct';
import { useCart } from 'react-use-cart';



const NewProduct = () => {

    const [allProduct] = useAllProduct()
    const { addItem } = useCart();

    return (
        <div className='my-5'>
            <div className='my-10'>
                <h1 className='text-2xl font-semibold'>New Products</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5'>
                {
                    allProduct.slice(0, 5).map(product => (
                        <div className=' border space-y-2'>
                            <div className='flex justify-center items-center bg-[#dc2626] text-white border w-16 h-9 '>
                                <p>{product.discount}%</p>
                            </div>
                            <div className='p-5 flex flex-col justify-center'>
                                <img className='h-52 w-full' src={product.image[0]} alt="" />
                                <span className='text-[#7a7a7a]'>{product.name}</span>
                                <h1 className='text-xl font-medium'>{product.description}</h1>
                                <Rating
                                    style={{ maxWidth: 100 }}
                                    value={0}
                                    readOnly
                                />
                                <div className='flex justify-between items-center'>
                                    <p className='font-bold text-xl text-[#3bb77e]'>${product.price}</p>
                                    <button onClick={() => addItem({ ...product, id: product._id })} className='btn bg-[#1acc5b3f] text-[#16a34a]'>
                                        <CiShoppingCart className='text-xl' />
                                        <span className='font-bold'>Add</span>
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

export default NewProduct;