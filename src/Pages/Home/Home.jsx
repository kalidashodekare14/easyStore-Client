import React from 'react';
import Banner from '../../Components/Banner/Banner';
import FeaturesCategory from '../../Components/FeaturesCategory/FeaturesCategory';

import banner from '../../assets/homeBanner/Main.png'
import banner1 from '../../assets/homeBanner/Main-1.png'
import banner2 from '../../assets/homeBanner/Main-2.png'

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            {/* Category */}
            <FeaturesCategory></FeaturesCategory>
            <div className='lg:mx-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5'>
                <div>
                    <img src={banner} alt="" />
                </div>
                <div>
                    <img src={banner1} alt="" />
                </div>
                <div>
                    <img src={banner2} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Home;