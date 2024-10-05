import img from '../../assets/shopImage/img.png'
import img1 from '../../assets/shopImage/about-1.png'
import img2 from '../../assets/shopImage/about-2.png'
import img3 from '../../assets/shopImage/about-3.png'
import prodiver1 from '../../assets/about/p1.png'
import prodiver2 from '../../assets/about/p2.png'
import prodiver3 from '../../assets/about/p3.png'
import prodiver4 from '../../assets/about/p4.png'
import prodiver5 from '../../assets/about/p5.png'
import prodiver6 from '../../assets/about/p6.png'
import towImage from '../../assets/shop/shop.png'
import team1 from '../../assets/about/team1.png'
import team2 from '../../assets/about/team2.png'

import './About.css'
import CountUp from 'react-countup';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

const About = () => {



    return (
        <div className='lg:mx-20'>
            <div className='flex flex-col lg:flex-row justify-between items-center gap-5'>
                <img className='lg:w-[500px]' src={img} alt="" />
                <div className='p-3 my-5 '>
                    <h1 className='text-3xl font-bold my-3'>Welcome to Nest</h1>
                    <div className='space-y-3 text-[16px] font-lato text-[#707070]'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate id est laborum.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate id est laborum.</p>
                    </div>
                    <div className='flex flex-col lg:flex-row items-center gap-3 mt-5'>
                        <img className='lg:max-w-sm w-full' src={img1} alt="" />
                        <img className='lg:max-w-sm w-full' src={img2} alt="" />
                        <img className='lg:max-w-sm w-full' src={img3} alt="" />
                    </div>
                </div>
            </div>
            <div className='my-10'>
                <h1 className='text-2xl text-center font-[600]'>What We Provider ?</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10'>
                    <div className='border flex flex-col justify-center items-center p-5 space-y-3'>
                        <img src={prodiver1} alt="" />
                        <h3 className='text-[20px]'>Best Prices & Offers</h3>
                        <p className='text-center text-[15px]'>There are many variations of passages of Lorem
                            Ipsum available, but the majority have suffered
                            alteration in some form
                        </p>
                        <span className='text-[#3bb77e] font-[400] cursor-pointer'>Read More</span>
                    </div>
                    <div className='border flex flex-col justify-center items-center p-5 space-y-3'>
                        <img src={prodiver2} alt="" />
                        <h3 className='text-[20px]'>Wide Assortment</h3>
                        <p className='text-center text-[15px]'>There are many variations of passages of Lorem
                            Ipsum available, but the majority have suffered
                            alteration in some form
                        </p>
                        <span className='text-[#3bb77e] font-[400] cursor-pointer'>Read More</span>
                    </div>
                    <div className='border flex flex-col justify-center items-center p-5 space-y-3'>
                        <img src={prodiver3} alt="" />
                        <h3 className='text-[20px]'>Free Delivery</h3>
                        <p className='text-center text-[15px]'>There are many variations of passages of Lorem
                            Ipsum available, but the majority have suffered
                            alteration in some form
                        </p>
                        <span className='text-[#3bb77e] font-[400] cursor-pointer'>Read More</span>
                    </div>
                    <div className='border flex flex-col justify-center items-center p-5 space-y-3'>
                        <img src={prodiver4} alt="" />
                        <h3 className='text-[20px]'>Easy Returns</h3>
                        <p className='text-center text-[15px]'>There are many variations of passages of Lorem
                            Ipsum available, but the majority have suffered
                            alteration in some form
                        </p>
                        <span className='text-[#3bb77e] font-[400] cursor-pointer'>Read More</span>
                    </div>
                    <div className='border flex flex-col justify-center items-center p-5 space-y-3'>
                        <img src={prodiver5} alt="" />
                        <h3 className='text-[20px]'>100% Satisfaction</h3>
                        <p className='text-center text-[15px]'>There are many variations of passages of Lorem
                            Ipsum available, but the majority have suffered
                            alteration in some form
                        </p>
                        <span className='text-[#3bb77e] font-[400] cursor-pointer'>Read More</span>
                    </div>
                    <div className='border flex flex-col justify-center items-center p-5 space-y-3'>
                        <img src={prodiver6} alt="" />
                        <h3 className='text-[20px]'>Great Daily Deal</h3>
                        <p className='text-center text-[15px]'>There are many variations of passages of Lorem
                            Ipsum available, but the majority have suffered
                            alteration in some form
                        </p>
                        <span className='text-[#3bb77e] font-[400] cursor-pointer'>Read More</span>
                    </div>
                </div>
            </div>
            <div className='flex flex-col lg:flex-row justify-center items-center gap-5 my-10'>
                <img className='lg:max-w-xl' src={towImage} alt="" />
                <div className='space-y-3'>
                    <p>Our performance</p>
                    <h1 className='text-4xl font-bold'>Your Partner for e-
                        commerce grocery
                        solution</h1>
                    <p>Ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                        doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
                        inventore veritatis et quasi architecto</p>
                    <p>Pitatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                        ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia</p>
                </div>
            </div>
            <div className='my-10 flex flex-col lg:flex-row justify-between items-center'>
                <div className=' space-y-2'>
                    <h1 className='text-2xl font-[600]'>Who we are</h1>
                    <p>Volutpat diam ut venenatis tellus in metus. Nec dui nunc
                        mattis enim ut tellus eros donec ac odio orci ultrices in.
                        ellus eros donec ac odio orci ultrices in.</p>
                </div>
                <div className='space-y-2'>
                    <h1 className='text-2xl font-[600]'>Our history</h1>
                    <p>Volutpat diam ut venenatis tellus in metus. Nec dui nunc
                        mattis enim ut tellus eros donec ac odio orci ultrices in.
                        ellus eros donec ac odio orci ultrices in.</p>
                </div>
                <div className='space-y-2'>
                    <h1 className='text-2xl font-[600]'>Our mission</h1>
                    <p>Volutpat diam ut venenatis tellus in metus. Nec dui nunc
                        mattis enim ut tellus eros donec ac odio orci ultrices in.
                        ellus eros donec ac odio orci ultrices in.</p>
                </div>
            </div>
            <div className='flex flex-col lg:flex-row justify-between px-10 items-center gap-5 my-10 count lg:h-40 bg-cover bg-no-repeat bg-center'>
                <div className='flex flex-col justify-center items-center'>
                    <h1 className='text-4xl font-bold text-white'><CountUp end={20} />+</h1>
                    <p className='text-white'>Glorious years</p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <h1 className='text-4xl font-bold text-white'><CountUp end={20} />+</h1>
                    <p className='text-white'>Happy clients</p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <h1 className='text-4xl font-bold text-white'><CountUp end={20} />+</h1>
                    <p className='text-white'>Projects complete</p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <h1 className='text-4xl font-bold text-white'><CountUp end={20} />+</h1>
                    <p className='text-white'>Team advisor</p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <h1 className='text-4xl font-bold text-white'><CountUp end={20} />+</h1>
                    <p className='text-white'>Products Sale</p>
                </div>
            </div>
            <div>
                <div className="my-10 subscribe-banner h-[300px] bg-center bg-no-repeat bg-cover">
                    <div className='lg:w-96 space-y-3 flex flex-col justify-center h-[300px] lg:mx-10 mx-5'>
                        <h1 className='text-3xl font-bold'>Stay home & get your daily
                            needs from our shop</h1>
                        <p className='text-[#8a8a8a] font-medium'>Start You'r Daily Shopping with Nest Mart</p>
                        <div className=''>
                            <input className='input rounded-3xl' placeholder='Your emaill address' type="text" />
                            <button className='btn bg-[#3bb77e] text-white rounded-3xl -ms-10'>Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;