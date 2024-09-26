import { CiLocationOn } from 'react-icons/ci';
import logo from '/logo.png'
import { FiPhoneCall } from 'react-icons/fi';
import { SiMinutemailer } from 'react-icons/si';
import { IoIosTimer } from 'react-icons/io';
import img from '../../assets/play1.png'
import img1 from '../../assets/play2.png'
import img3 from '../../assets/payment.png'
import { IoCallOutline } from 'react-icons/io5';
import { FaFacebook, FaFacebookF, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <footer className="footer bg-base-200 text-base-content p-10 px-20">
                <nav className='space-y-3'>
                    <img src={logo} alt="" />
                    <a className="link link-hover text-[16px] font-medium">Awesome grocery store website
                        template</a>
                    <div className='flex gap-2 font-[700] text-[#253D4E]'>
                        <CiLocationOn className='text-[#3BB77E] text-xl font-medium' />
                        <p className='w-52'>Address: 5171 W Campbell Ave undefined Kent, Utah 53127 United States</p>
                    </div>
                    <div className='flex gap-2 font-[700] text-[#253D4E]'>
                        <FiPhoneCall className='text-[#3BB77E] text-xl font-medium' />
                        <p className='w-52'>Call Us:(+91) - 540-025-124553</p>
                    </div>
                    <div className='flex gap-2 font-[700] text-[#253D4E]'>
                        <SiMinutemailer className='text-[#3BB77E] text-xl font-medium' />
                        <p className='w-52'>easyshop@gmail.com</p>
                    </div>
                    <div className='flex gap-2 font-[700] text-[#253D4E]'>
                        <IoIosTimer className='text-[#3BB77E] text-xl font-medium' />
                        <p className='w-52'>Hours:10:00 - 18:00, Mon - Sat</p>
                    </div>
                </nav>
                <nav className='space-y-2'>
                    <h6 className="footer-title text-xl">Company</h6>
                    <a className="link link-hover text-[15px]">About us</a>
                    <a className="link link-hover text-[15px]">Delivery Information</a>
                    <a className="link link-hover text-[15px]">Privacy Policy</a>
                    <a className="link link-hover text-[15px]">Terms & Conditions</a>
                    <a className="link link-hover text-[15px]">Contact Us</a>
                    <a className="link link-hover text-[15px]">Support Center</a>
                    <a className="link link-hover text-[15px]">Careers</a>
                </nav>
                <nav className='space-y-2'>
                    <h6 className="footer-title text-xl">Account</h6>
                    <a className="link link-hover text-[15px]">Sign In</a>
                    <a className="link link-hover text-[15px]">View Cart</a>
                    <a className="link link-hover text-[15px]">My Wishlist</a>
                    <a className="link link-hover text-[15px]">Track My Order</a>
                    <a className="link link-hover text-[15px]">Help Ticket</a>
                    <a className="link link-hover text-[15px]">Shipping Details</a>
                    <a className="link link-hover text-[15px]">Compare products</a>
                </nav>
                <nav className='space-y-2'>
                    <h6 className="footer-title text-xl">Corporate</h6>
                    <a className="link link-hover text-[15px]">Become a Vendor</a>
                    <a className="link link-hover text-[15px]">Affiliate Program</a>
                    <a className="link link-hover text-[15px]">Farm Business</a>
                    <a className="link link-hover text-[15px]">Farm Careers</a>
                    <a className="link link-hover text-[15px]">Our Suppliers</a>
                    <a className="link link-hover text-[15px]">Accessibility</a>
                    <a className="link link-hover text-[15px]">Promotions</a>
                </nav>
                <nav className='space-y-2'>
                    <h6 className="footer-title text-xl">Popular</h6>
                    <a className="link link-hover text-[15px]">Milk & Flavoured Milk</a>
                    <a className="link link-hover text-[15px]">Butter and Margarine</a>
                    <a className="link link-hover text-[15px]">Eggs Substitutes</a>
                    <a className="link link-hover text-[15px]">Marmalades</a>
                    <a className="link link-hover text-[15px]">Sour Cream and Dips</a>
                    <a className="link link-hover text-[15px]">Tea & Kombucha</a>
                    <a className="link link-hover text-[15px]">Cheese</a>
                </nav>
                <nav className='space-y-6'>
                    <div>
                        <h6 className="footer-title text-xl">Install App</h6>
                        <a className="link link-hover text-[15px]">From App Store or Google Play</a>
                    </div>
                    <div className='flex items-center'>
                        <img src={img} alt="" />
                        <img src={img1} alt="" />
                    </div>
                    <div className='space-y-5'>
                        <h1 className='text-[18px]'>Secured Payment Gateways</h1>
                        <img src={img3} alt="" />
                    </div>
                </nav>
            </footer>
            <footer className="px-20 footer bg-base-200 text-base-content border-base-300 border-t py-4">
                <aside className="grid-flow-col items-center">

                    <p className='w-80 text-[16px]'>2022, Nest - HTML Ecommerce Template
                        All rights reserved</p>
                </aside>
                <div className='flex items-center gap-5'>
                    <div className='flex items-center gap-3'>
                        <IoCallOutline className='text-2xl' />
                        <div>
                            <h1 className='text-2xl font-bold text-[#3bb77e]'>1900 - 6666</h1>
                            <p>Working 8:00 - 22:00</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-3'>
                        <IoCallOutline className='text-2xl' />
                        <div>
                            <h1 className='text-2xl font-bold text-[#3bb77e]'>1900 - 8888</h1>
                            <p>24/7 Support Center</p>
                        </div>
                    </div>
                </div>
                <nav className="md:place-self-center md:justify-self-end">
                    <div>
                        <div className='flex items-center gap-3'>
                            <h1>Follow Us</h1>
                            <div className='bg-[#3bb77e] text-white w-8 h-8 flex justify-center items-center  border rounded-full'>
                                <FaFacebook></FaFacebook>
                            </div>
                            <div className='bg-[#3bb77e] text-white  w-8 h-8 flex justify-center items-center  border rounded-full'>
                                <FaTwitter></FaTwitter>
                            </div>
                            <div className='bg-[#3bb77e] text-white  w-8 h-8 flex justify-center items-center  border rounded-full'>
                                <FaInstagram></FaInstagram>
                            </div>
                            <div className='bg-[#3bb77e] text-white w-8 h-8 flex justify-center items-center  border rounded-full'>
                                <FaPinterest></FaPinterest>
                            </div>
                            <div className='bg-[#3bb77e] text-white w-8 h-8 flex justify-center items-center  border rounded-full'>
                                <FaYoutube></FaYoutube>
                            </div>
                        </div>
                        <div>
                            <h1>Up to 15% discount on your first subscribe</h1>
                        </div>
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;