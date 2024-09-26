import { Rating } from '@smastrom/react-rating';
import img from '../../../assets/productReview/img1.png'
import img1 from '../../../assets/productReview/img2.png'
import img2 from '../../../assets/productReview/img3.png'

const ProductReview = () => {
    return (
        <div className='my-20'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                <div className=' h-[450px] '>
                    <div className='mb-2'>
                        <h1 className='text-xl font-bold'>Top Selling</h1>
                        <div className='divider w-20'></div>
                    </div>
                    <div>
                        <div className='flex items-center gap-3 pb-3'>
                            <img className='w-32' src={img} alt="" />
                            <div className='space-y-1'>
                                <h3 className='text-[17px] font-medium'>Nestle Original Coffee-Mate
                                    Coffee Creamer</h3>
                                <Rating
                                    style={{ maxWidth: 100 }}
                                    value={2}
                                    readOnly
                                />
                                <div className='flex items-center gap-2'>
                                    <h1 className='text-xl font-mono text-[#3BB77E] font-bold'>$7895</h1>
                                    <p className='line-through font-bold text-[#a39c9c]'>$548</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center gap-3 pb-3'>
                            <img className='w-32' src={img1} alt="" />
                            <div className='space-y-1'>
                                <h3 className='text-[17px] font-medium'>Nestle Original Coffee-Mate
                                    Coffee Creamer</h3>
                                <Rating
                                    style={{ maxWidth: 100 }}
                                    value={2}
                                    readOnly
                                />
                                <div className='flex items-center gap-2'>
                                    <h1 className='text-xl font-mono text-[#3BB77E] font-bold'>$7895</h1>
                                    <p className='line-through font-bold text-[#a39c9c]'>$548</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center gap-3 pb-3'>
                            <img className='w-32' src={img2} alt="" />
                            <div className='space-y-1'>
                                <h3 className='text-[17px] font-medium'>Nestle Original Coffee-Mate
                                    Coffee Creamer</h3>
                                <Rating
                                    style={{ maxWidth: 100 }}
                                    value={2}
                                    readOnly
                                />
                                <div className='flex items-center gap-2'>
                                    <h1 className='text-xl font-mono text-[#3BB77E] font-bold'>$7895</h1>
                                    <p className='line-through font-bold text-[#a39c9c]'>$548</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' h-[450px] '>
                    <div className='mb-2'>
                        <h1 className='text-xl font-bold'>Trending Products</h1>
                        <div className='divider w-20'></div>
                    </div>
                    <div>
                        <div className='flex items-center gap-3 pb-3'>
                            <img className='w-32' src={img} alt="" />
                            <div className='space-y-1'>
                                <h3 className='text-[17px] font-medium'>Nestle Original Coffee-Mate
                                    Coffee Creamer</h3>
                                <Rating
                                    style={{ maxWidth: 100 }}
                                    value={2}
                                    readOnly
                                />
                                <div className='flex items-center gap-2'>
                                    <h1 className='text-xl font-mono text-[#3BB77E] font-bold'>$7895</h1>
                                    <p className='line-through font-bold text-[#a39c9c]'>$548</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center gap-3 pb-3'>
                            <img className='w-32' src={img1} alt="" />
                            <div className='space-y-1'>
                                <h3 className='text-[17px] font-medium'>Nestle Original Coffee-Mate
                                    Coffee Creamer</h3>
                                <Rating
                                    style={{ maxWidth: 100 }}
                                    value={2}
                                    readOnly
                                />
                                <div className='flex items-center gap-2'>
                                    <h1 className='text-xl font-mono text-[#3BB77E] font-bold'>$7895</h1>
                                    <p className='line-through font-bold text-[#a39c9c]'>$548</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center gap-3 pb-3'>
                            <img className='w-32' src={img2} alt="" />
                            <div className='space-y-1'>
                                <h3 className='text-[17px] font-medium'>Nestle Original Coffee-Mate
                                    Coffee Creamer</h3>
                                <Rating
                                    style={{ maxWidth: 100 }}
                                    value={2}
                                    readOnly
                                />
                                <div className='flex items-center gap-2'>
                                    <h1 className='text-xl font-mono text-[#3BB77E] font-bold'>$7895</h1>
                                    <p className='line-through font-bold text-[#a39c9c]'>$548</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' h-[450px] '>
                    <div className='mb-2'>
                        <h1 className='text-xl font-bold'>Recently added</h1>
                        <div className='divider w-20'></div>
                    </div>
                    <div>
                        <div className='flex items-center gap-3 pb-3'>
                            <img className='w-32' src={img} alt="" />
                            <div className='space-y-1'>
                                <h3 className='text-[17px] font-medium'>Nestle Original Coffee-Mate
                                    Coffee Creamer</h3>
                                <Rating
                                    style={{ maxWidth: 100 }}
                                    value={2}
                                    readOnly
                                />
                                <div className='flex items-center gap-2'>
                                    <h1 className='text-xl font-mono text-[#3BB77E] font-bold'>$7895</h1>
                                    <p className='line-through font-bold text-[#a39c9c]'>$548</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center gap-3 pb-3'>
                            <img className='w-32' src={img1} alt="" />
                            <div className='space-y-1'>
                                <h3 className='text-[17px] font-medium'>Nestle Original Coffee-Mate
                                    Coffee Creamer</h3>
                                <Rating
                                    style={{ maxWidth: 100 }}
                                    value={2}
                                    readOnly
                                />
                                <div className='flex items-center gap-2'>
                                    <h1 className='text-xl font-mono text-[#3BB77E] font-bold'>$7895</h1>
                                    <p className='line-through font-bold text-[#a39c9c]'>$548</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center gap-3 pb-3'>
                            <img className='w-32' src={img2} alt="" />
                            <div className='space-y-1'>
                                <h3 className='text-[17px] font-medium'>Nestle Original Coffee-Mate
                                    Coffee Creamer</h3>
                                <Rating
                                    style={{ maxWidth: 100 }}
                                    value={2}
                                    readOnly
                                />
                                <div className='flex items-center gap-2'>
                                    <h1 className='text-xl font-mono text-[#3BB77E] font-bold'>$7895</h1>
                                    <p className='line-through font-bold text-[#a39c9c]'>$548</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' h-[450px] '>
                    <div className='mb-2'>
                        <h1 className='text-xl font-bold'>Top Rated</h1>
                        <div className='divider w-20'></div>
                    </div>
                    <div>
                        <div className='flex items-center gap-3 pb-3'>
                            <img className='w-32' src={img} alt="" />
                            <div className='space-y-1'>
                                <h3 className='text-[17px] font-medium'>Nestle Original Coffee-Mate
                                    Coffee Creamer</h3>
                                <Rating
                                    style={{ maxWidth: 100 }}
                                    value={2}
                                    readOnly
                                />
                                <div className='flex items-center gap-2'>
                                    <h1 className='text-xl font-mono text-[#3BB77E] font-bold'>$7895</h1>
                                    <p className='line-through font-bold text-[#a39c9c]'>$548</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center gap-3 pb-3'>
                            <img className='w-32' src={img1} alt="" />
                            <div className='space-y-1'>
                                <h3 className='text-[17px] font-medium'>Nestle Original Coffee-Mate
                                    Coffee Creamer</h3>
                                <Rating
                                    style={{ maxWidth: 100 }}
                                    value={2}
                                    readOnly
                                />
                                <div className='flex items-center gap-2'>
                                    <h1 className='text-xl font-mono text-[#3BB77E] font-bold'>$7895</h1>
                                    <p className='line-through font-bold text-[#a39c9c]'>$548</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center gap-3 pb-3'>
                            <img className='w-32' src={img2} alt="" />
                            <div className='space-y-1'>
                                <h3 className='text-[17px] font-medium'>Nestle Original Coffee-Mate
                                    Coffee Creamer</h3>
                                <Rating
                                    style={{ maxWidth: 100 }}
                                    value={2}
                                    readOnly
                                />
                                <div className='flex items-center gap-2'>
                                    <h1 className='text-xl font-mono text-[#3BB77E] font-bold'>$7895</h1>
                                    <p className='line-through font-bold text-[#a39c9c]'>$548</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductReview;