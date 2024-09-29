import React from 'react';
import { AiFillDollarCircle } from 'react-icons/ai';
import { FaCarSide } from 'react-icons/fa';
import { FaCartShopping } from 'react-icons/fa6';
import { RiMoneyDollarBoxFill } from 'react-icons/ri';
import { TiDocumentText } from 'react-icons/ti';
import { AreaChart, BarChart, Bar, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Page A',
        Sales: 4000,
        Visitors: 2400,
        Products: 2000,
    },
    {
        name: 'Page B',
        Sales: 3000,
        Visitors: 1398,
        Products: 2210,
    },
    {
        name: 'Page C',
        Sales: 2000,
        Visitors: 9800,
        Products: 2290,
    },
    {
        name: 'Page D',
        Sales: 2780,
        Visitors: 3908,
        Products: 2000,
    },
    {
        name: 'Page E',
        Sales: 1890,
        Visitors: 4800,
        Products: 2181,
    },
    {
        name: 'Page F',
        Sales: 2390,
        Visitors: 3800,
        Products: 2500,
    },
    {
        name: 'Page G',
        Sales: 3490,
        Visitors: 4300,
        Products: 2100,
    },
];


const data2 = [
    {
        name: 'Page A',
        Bangladesh: 2400,
        US: 4000,
        India: 2400,
    },
    {
        name: 'Page B',
        Bangladesh: 3000,
        US: 1398,
        India: 2210,
    },
    {
        name: 'Page C',
        Bangladesh: 2000,
        US: 9800,
        India: 2290,
    },
    {
        name: 'Page D',
        Bangladesh: 2780,
        US: 3908,
        India: 2000,
    },
    {
        name: 'Page E',
        Bangladesh: 1890,
        US: 4800,
        India: 2181,
    },
    {
        name: 'Page F',
        Bangladesh: 2390,
        US: 3800,
        India: 2500,
    },
    {
        name: 'Page G',
        Bangladesh: 3490,
        US: 4300,
        India: 2100,
    },
];


const DashboardInfo = () => {






    return (
        <div className='mx-10 my-5'>
            <div className='flex justify-between items-center'>
                <div>
                    <h1 className='text-3xl font-[600]'>Dashboard</h1>
                    <p className='font-[400]'>Whole data about your business here</p>
                </div>
                <button className='flex items-center btn bg-[#3bb77e] text-white'>
                    <TiDocumentText className='text-xl' />
                    Create report
                </button>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-10'>
                <div className='flex items-center gap-3 border  p-5'>
                    <div className='border p-5 rounded-full bg-[#d8f1e5]'>
                        <AiFillDollarCircle className='text-3xl text-[#3bb77e]' />
                    </div>
                    <div className='space-y-1'>
                        <h3 className='text-xl font-[500]'>Revenue</h3>
                        <h1 className='text-2xl font-[600]'>$154526.5</h1>
                        <p>Shopping fees are not included</p>
                    </div>
                </div>
                <div className='flex items-center gap-3 border  p-5'>
                    <div className='border p-5 rounded-full bg-[#d8f1e5]'>
                        <FaCarSide className='text-3xl text-[#3bb77e]' />
                    </div>
                    <div className='space-y-1'>
                        <h3 className='text-xl font-[500]'>Orders</h3>
                        <h1 className='text-2xl font-[600]'>56894</h1>
                        <p>Excluding orders in transit</p>
                    </div>
                </div>
                <div className='flex items-center gap-3 border  p-5'>
                    <div className='border p-5 rounded-full bg-[#d8f1e5]'>
                        <FaCartShopping className='text-3xl text-[#3bb77e]' />
                    </div>
                    <div className='space-y-1'>
                        <h3 className='text-xl font-[500]'>Products</h3>
                        <h1 className='text-2xl font-[600]'>78956</h1>
                        <p>In 19 Categories</p>
                    </div>
                </div>
                <div className='flex items-center gap-3 border  p-5'>
                    <div className='border p-5 rounded-full bg-[#d8f1e5]'>
                        <RiMoneyDollarBoxFill className='text-3xl text-[#3bb77e]' />
                    </div>
                    <div className='space-y-1'>
                        <h3 className='text-xl font-[500]'>Month Earning</h3>
                        <h1 className='text-2xl font-[600]'>$5964</h1>
                        <p>Based in your local time</p>
                    </div>
                </div>
            </div>
            <div className='my-10 flex justify-between items-center gap-5'>
                <div className='w-full bg-white shadow-lg rounded-2xl p-3'>
                    <h1 className='text-xl p-2'>Sales Statistics</h1>
                    <div className='h-96 '>
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart
                                width={500}
                                height={400}
                                data={data}
                                margin={{
                                    top: 10,
                                    right: 30,
                                    left: 0,
                                    bottom: 0,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis domain={[5, 'auto']} tickCount={6} />
                                <Tooltip />
                                <Legend />
                                <Area type="monotone" dataKey="Sales" stackId="1" stroke="#8884d8" fill="#8884d8" />
                                <Area type="monotone" dataKey="Visitors" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                                <Area type="monotone" dataKey="Products" stackId="1" stroke="#ffc658" fill="#ffc658" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>
                <div className='w-[70%] border p-2 bg-white shadow-lg rounded-2xl'>
                    <h1 className='text-xl p-2'>Sales Statistics</h1>
                    <div className='h-96'>
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart
                                width={500}
                                height={300}
                                data={data2}
                                margin={{
                                    top: 20,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="Bangladesh" stackId="a" fill="#5897fb" />
                                <Bar dataKey="US" stackId="a" fill="#7bcf86" />
                                <Bar dataKey="India" stackId="a" fill="#ff9076" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardInfo;