import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import banner from '../../../assets/banner.png'
import banner1 from '../../../assets/banner1.png'
import banner2 from '../../../assets/banner2.png'

const Banner = () => {
    return (
        <div className=''>
            <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                <SwiperSlide>
                    <div>
                        <img className='lg:h-[400px] h-[200px] w-full' src={banner} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img className='lg:h-[400px] h-[200px] w-full' src={banner1} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img className='lg:h-[400px] h-[200px] w-full' src={banner2} alt="" />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;