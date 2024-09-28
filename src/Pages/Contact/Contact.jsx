import React from 'react';
import GoogleMapReact from 'google-map-react';
import img from '../../assets/about/team2.png'

const Contact = () => {

    const AnyReactComponent = ({ text }) => <div>{text}</div>;

    const defaultProps = {
        center: {
            lat: 10.99835602,
            lng: 77.01502627
        },
        zoom: 11
    };

    return (
        <div className='lg:mx-20'>
            <div className='flex flex-col lg:flex-row items-center gap-5 p-5'>
                <div className='space-y-5'>
                    <p className='text-[#3bb77e]'>How can help you ?</p>
                    <h1 className='text-5xl font-bold '>Let us know how
                        we can help you
                    </h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                        elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                        leo.
                    </p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                        elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                        leo.
                    </p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10'>
                    <div className='space-y-3'>
                        <p className='font-[600] text-xl'>01. Visit Feedback</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                            elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                            leo.
                        </p>
                    </div>
                    <div className='space-y-3'>
                        <p className='font-[600] text-xl'>02. Employer Services</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                            elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                            leo.
                        </p>
                    </div>
                    <div className='space-y-3'>
                        <p className='font-[600] text-xl'>03. Billing Inquiries</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                            elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                            leo.</p>
                    </div>
                    <div className='space-y-3'>
                        <p className='font-[600] text-xl'>04.General Inquiries</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                            elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                            leo.</p>
                    </div>
                </div>
            </div>
            <div className='w-full h-96 my-10'>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "" }}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                >
                    <AnyReactComponent
                        lat={59.955413}
                        lng={30.337844}
                        text="My Marker"
                    />
                </GoogleMapReact>
            </div>
            <div className='my-10 flex flex-col lg:flex-row justify-center items-center gap-20'>
                <div className='space-y-5'>
                    <h1 className='text-4xl font-bold text-[#3bb77e]'>Office</h1>
                    <div className='space-y-1'>
                        <p>205 North Michigan Avenue, Suite 810</p>
                        <p>Chicago, 60601, USA</p>
                        <p>Phone: (123) 456-7890</p>
                        <p>Email: contact@Evara.com</p>
                    </div>
                    <button className='btn w-32 bg-[#3bb77e] text-white'>View Map</button>
                </div>
                <div className='space-y-5'>
                    <h1 className='text-4xl font-bold text-[#3bb77e]'>Studio</h1>
                    <div className='space-y-1'>
                        <p>205 North Michigan Avenue, Suite 810</p>
                        <p>Chicago, 60601, USA</p>
                        <p>Phone: (123) 456-7890</p>
                        <p>Email: contact@Evara.com</p>
                    </div>
                    <button className='btn w-32 bg-[#3bb77e] text-white'>View Map</button>
                </div>
                <div className='space-y-5'>
                    <h1 className='text-4xl font-bold text-[#3bb77e]'>Shop</h1>
                    <div className='space-y-1'>
                        <p>205 North Michigan Avenue, Suite 810</p>
                        <p>Chicago, 60601, USA</p>
                        <p>Phone: (123) 456-7890</p>
                        <p>Email: contact@Evara.com</p>
                    </div>
                    <button className='btn w-32 bg-[#3bb77e] text-white'>View Map</button>
                </div>
            </div>
            <div className='my-10 flex justify-center items-center gap-10'>
                <div>
                    <div className='space-y-2 my-5'>
                        <p className='text-[#3bb77e] font-[600]'>Contact from</p>
                        <h1 className='text-3xl font-bold'>Drop Us a Line</h1>
                        <p>Your email address will not be published. Required fields are marked *</p>
                    </div>
                    <div className='space-y-3'>
                        <div className='w-full flex lg:gap-5'>
                            <input className='input input-bordered w-full' placeholder='First Name' type="text" />
                            <input className='input input-bordered w-full' placeholder='Your Email' type="text" />
                        </div>
                        <div className='w-full flex lg:gap-5'>
                            <input className='input input-bordered w-full' placeholder='First Name' type="text" />
                            <input className='input input-bordered w-full' placeholder='Your Email' type="text" />
                        </div>
                        <div>
                            <textarea className='w-full h-32 textarea textarea-bordered' placeholder='Message' name="" id=""></textarea>
                        </div>
                        <button className='btn w-40 bg-[#3bb77e] text-white'>Send Message</button>
                    </div>
                </div>
                <div>
                    <img src={img} alt="" />
                </div>
            </div>
            <div className="my-10 subscribe-banner h-[300px] bg-center bg-no-repeat bg-cover">
                <div className='w-96 space-y-3 flex flex-col justify-center h-[300px] lg:mx-10 mx-5'>
                    <h1 className='text-3xl font-bold'>Stay home & get your daily
                        needs from our shop</h1>
                    <p className='text-[#8a8a8a] font-medium'>Start You'r Daily Shopping with Nest Mart</p>
                    <div className='border'>
                        <input className='input rounded-3xl' placeholder='Your emaill address' type="text" />
                        <button className='btn bg-[#3bb77e] text-white rounded-3xl -ms-10'>Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;