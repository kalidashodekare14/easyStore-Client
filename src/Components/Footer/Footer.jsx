import { MdOutlineWifiCalling } from "react-icons/md";
import { IoMailOutline } from "react-icons/io5";
import paymentIcon from '../../assets/play1.png'
import paymentIcon1 from '../../assets/play2.png'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import pIcon1 from '../../assets/payemnt/1.png'
import pIcon2 from '../../assets/payemnt/2.png'
import pIcon3 from '../../assets/payemnt/3.png'
import pIcon4 from '../../assets/payemnt/4.png'
import pIcon5 from '../../assets/payemnt/5.png'

const Footer = () => {
    return (
        <div>
            <footer className="footer bg-base-200 text-base-content p-10">
                <aside>
                    <h1 className='font-bold'>Do You Need Help ?</h1>
                    <p className='w-80'>Autoseligen syr. Nek diarask fröbomba. Nör
                        antipol kynoda nynat. Pressa fåmoska.</p>
                    <div className="space-y-7 mt-7">
                        <div className="flex items-center gap-5">
                            <MdOutlineWifiCalling className="text-3xl" />
                            <div>
                                <p>Monday-Friday: 08am-9pm</p>
                                <h1 className="text-2xl font-bold">0 854 785-562</h1>
                            </div>
                        </div>
                        <div className="flex items-center gap-5">
                            <IoMailOutline className="text-3xl" />
                            <div>
                                <p>Need help with your order?</p>
                                <h1 className="text-[16px] font-bold">quickshop@gmail.com</h1>
                            </div>
                        </div>
                    </div>
                </aside>
                <nav>
                    <h6 className="uppercase font-[600]">Make Money with Us</h6>
                    <a className="link link-hover">Sell on Grogin</a>
                    <a className="link link-hover">Sell Your Services on Grogin</a>
                    <a className="link link-hover">Sell on Grogin Business</a>
                    <a className="link link-hover">Sell Your Apps on Grogin</a>
                    <a className="link link-hover">Become an Affilate</a>
                    <a className="link link-hover">Advertise Your Products</a>
                    <a className="link link-hover">Sell-Publish with Us</a>
                    <a className="link link-hover">Become an Blowwe Vendor</a>
                </nav>
                <nav>
                    <h6 className="uppercase font-[600]">Let Us Help You</h6>
                    <a className="link link-hover">Accessibility Statement</a>
                    <a className="link link-hover">Your Orders</a>
                    <a className="link link-hover">Returns & Replacements</a>
                    <a className="link link-hover">Shipping Rates & Policies</a>
                    <a className="link link-hover">Refund and Returns Policy</a>
                    <a className="link link-hover">Privacy Policy</a>
                    <a className="link link-hover">Terms and Conditions</a>
                    <a className="link link-hover">Cookie Settings</a>
                    <a className="link link-hover">Help Center</a>
                </nav>
                <nav>
                    <h6 className="uppercase font-[600]">Get to Know Us</h6>
                    <a className="link link-hover">Careers for Grogin</a>
                    <a className="link link-hover">About Grogin</a>
                    <a className="link link-hover">Inverstor Relations</a>
                    <a className="link link-hover">Grogin Devices</a>
                    <a className="link link-hover">Customer reviews</a>
                    <a className="link link-hover">Social Responsibility</a>
                    <a className="link link-hover">Store Locations</a>
                </nav>
                <nav>
                    <h6 className="uppercase font-[600]">Get to Know Us</h6>
                    <div>
                        <img src={paymentIcon} alt="" />
                        <img src={paymentIcon1} alt="" />
                    </div>
                    <div>
                        <p className="text-[18px]">Follow us on social media:</p>
                        <div className="flex items-center gap-3 my-5">
                            <div className="bg-white w-10 h-10 flex justify-center items-center text-2xl text-[#1877f2] rounded-md shadow">
                                <FaFacebookF />
                            </div>
                            <div className="bg-white w-10 h-10 flex justify-center items-center text-2xl text-[#1da1f2] rounded-md shadow">
                                <FaTwitter />
                            </div>
                            <div className="bg-white w-10 h-10 flex justify-center items-center text-2xl text-[#fd2b2b] rounded-md shadow">
                                <FaInstagram />
                            </div>
                            <div className="bg-white w-10 h-10 flex justify-center items-center text-2xl text-[#0077b5] rounded-md shadow">
                                <FaLinkedinIn />
                            </div>
                        </div>
                    </div>
                </nav>
            </footer>
            <footer className="footer footer-center bg-base-300 text-base-content p-4">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;