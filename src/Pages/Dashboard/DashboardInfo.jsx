import React from 'react';
import { AiFillDollarCircle } from 'react-icons/ai';
import { FaCarSide } from 'react-icons/fa';
import { FaCartShopping } from 'react-icons/fa6';
import { RiMoneyDollarBoxFill } from 'react-icons/ri';
import { TiDocumentText } from 'react-icons/ti';
import { AreaChart, BarChart, Bar, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {
    QueryClient,
    QueryClientProvider,
    useQuery,
} from '@tanstack/react-query'
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const data = [
    {
      name: 'SAT',
      Revenue: 4000,
      Customar: 2400,
      Order: 2400,
    },
    {
      name: 'SUN',
      Revenue: 3000,
      Customar: 1398,
      Order: 2210,
    },
    {
      name: 'MON',
      Revenue: 2000,
      Customar: 9800,
      Order: 2290,
    },
    {
      name: 'TUES',
      Revenue: 2780,
      Customar: 3908,
      Order: 2000,
    },
    {
      name: 'WEN',
      Revenue: 1890,
      Customar: 4800,
      Order: 2181,
    },
    {
      name: 'THUS',
      Revenue: 2390,
      Customar: 3800,
      Order: 2500,
    },
    {
      name: 'FRI',
      Revenue: 3490,
      Customar: 4300,
      Order: 2100,
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

    const axiosSecure = useAxiosSecure()


    const { data: overviewData = {} } = useQuery({
        queryKey: ["overview"],
        queryFn: async () => {
            const res = await axiosSecure.get("/dashboard-overview")
            return res.data
        },
    })





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
            <Tabs>
                <TabList>
                    <Tab>Last 24 Hour</Tab>
                    <Tab>Last Weeks</Tab>
                    <Tab>Last Last Month</Tab>
                    <Tab>Last Last Year</Tab>
                </TabList>
                <TabPanel>
                    <div>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-10'>
                            <div className='flex items-center gap-3 border  p-5'>
                                <div className='border p-5 rounded-full bg-[#d8f1e5]'>
                                    <AiFillDollarCircle className='text-3xl text-[#3bb77e]' />
                                </div>
                                <div className='space-y-1'>
                                    <h3 className='text-xl font-[500]'>Total Revenue</h3>
                                    <h1 className='text-2xl font-[600]'>${overviewData?.totalRevenue?.last24Hours}</h1>
                                </div>
                            </div>
                            <div className='flex items-center gap-3 border  p-5'>
                                <div className='border p-5 rounded-full bg-[#d8f1e5]'>
                                    <AiFillDollarCircle className='text-3xl text-[#3bb77e]' />
                                </div>
                                <div className='space-y-1'>
                                    <h3 className='text-xl font-[500]'>Total Customar</h3>
                                    <h1 className='text-2xl font-[600]'>{overviewData?.totalCustomar?.last24Hours}</h1>
                                </div>
                            </div>
                            <div className='flex items-center gap-3 border  p-5'>
                                <div className='border p-5 rounded-full bg-[#d8f1e5]'>
                                    <FaCarSide className='text-3xl text-[#3bb77e]' />
                                </div>
                                <div className='space-y-1'>
                                    <h3 className='text-xl font-[500]'>Total Orders</h3>
                                    <h1 className='text-2xl font-[600]'>{overviewData?.totalOrder?.last24Hours}</h1>
                                </div>
                            </div>
                            <div className='flex items-center gap-3 border  p-5'>
                                <div className='border p-5 rounded-full bg-[#d8f1e5]'>
                                    <FaCartShopping className='text-3xl text-[#3bb77e]' />
                                </div>
                                <div className='space-y-1'>
                                    <h3 className='text-xl font-[500]'>All Product</h3>
                                    <h1 className='text-2xl font-[600]'>{overviewData?.totalProducts?.last24Hours}</h1>
                                </div>
                            </div>
                            <div className='flex items-center gap-3 border  p-5'>
                                <div className='border p-5 rounded-full bg-[#d8f1e5]'>
                                    <RiMoneyDollarBoxFill className='text-3xl text-[#3bb77e]' />
                                </div>
                                <div className='space-y-1'>
                                    <h3 className='text-xl font-[500]'>Total Sales</h3>
                                    <h1 className='text-2xl font-[600]'>$5964</h1>
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
                                            <Area type="monotone" dataKey="Revenue" stackId="1" stroke="#8884d8" fill="#8884d8" />
                                            <Area type="monotone" dataKey="Customar" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                                            <Area type="monotone" dataKey="Order" stackId="1" stroke="#ffc658" fill="#ffc658" />
                                            <Area type="monotone" dataKey="Products" stackId="1" stroke="#58ff95" fill="#58ff95" />
                                        </AreaChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>
                            <div className='w-[80%] border p-2 bg-white shadow-lg rounded-2xl'>
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
                </TabPanel>
                <TabPanel>
                    <div>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-10'>
                            <div className='flex items-center gap-3 border  p-5'>
                                <div className='border p-5 rounded-full bg-[#d8f1e5]'>
                                    <AiFillDollarCircle className='text-3xl text-[#3bb77e]' />
                                </div>
                                <div className='space-y-1'>
                                    <h3 className='text-xl font-[500]'>Total Revenue</h3>
                                    <h1 className='text-2xl font-[600]'>${overviewData?.totalRevenue?.last24Hours}</h1>
                                </div>
                            </div>
                            <div className='flex items-center gap-3 border  p-5'>
                                <div className='border p-5 rounded-full bg-[#d8f1e5]'>
                                    <AiFillDollarCircle className='text-3xl text-[#3bb77e]' />
                                </div>
                                <div className='space-y-1'>
                                    <h3 className='text-xl font-[500]'>Total Customar</h3>
                                    <h1 className='text-2xl font-[600]'>15452</h1>
                                </div>
                            </div>
                            <div className='flex items-center gap-3 border  p-5'>
                                <div className='border p-5 rounded-full bg-[#d8f1e5]'>
                                    <FaCarSide className='text-3xl text-[#3bb77e]' />
                                </div>
                                <div className='space-y-1'>
                                    <h3 className='text-xl font-[500]'>Total Orders</h3>
                                    <h1 className='text-2xl font-[600]'>56894</h1>
                                </div>
                            </div>
                            <div className='flex items-center gap-3 border  p-5'>
                                <div className='border p-5 rounded-full bg-[#d8f1e5]'>
                                    <FaCartShopping className='text-3xl text-[#3bb77e]' />
                                </div>
                                <div className='space-y-1'>
                                    <h3 className='text-xl font-[500]'>All Product</h3>
                                    <h1 className='text-2xl font-[600]'>78956</h1>
                                </div>
                            </div>
                            <div className='flex items-center gap-3 border  p-5'>
                                <div className='border p-5 rounded-full bg-[#d8f1e5]'>
                                    <RiMoneyDollarBoxFill className='text-3xl text-[#3bb77e]' />
                                </div>
                                <div className='space-y-1'>
                                    <h3 className='text-xl font-[500]'>Total Sales</h3>
                                    <h1 className='text-2xl font-[600]'>$5964</h1>
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
                            <div className='w-[80%] border p-2 bg-white shadow-lg rounded-2xl'>
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
                </TabPanel>
                <TabPanel>
                    <div>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-10'>
                            <div className='flex items-center gap-3 border  p-5'>
                                <div className='border p-5 rounded-full bg-[#d8f1e5]'>
                                    <AiFillDollarCircle className='text-3xl text-[#3bb77e]' />
                                </div>
                                <div className='space-y-1'>
                                    <h3 className='text-xl font-[500]'>Total Revenue</h3>
                                    <h1 className='text-2xl font-[600]'>$154526.5</h1>
                                </div>
                            </div>
                            <div className='flex items-center gap-3 border  p-5'>
                                <div className='border p-5 rounded-full bg-[#d8f1e5]'>
                                    <AiFillDollarCircle className='text-3xl text-[#3bb77e]' />
                                </div>
                                <div className='space-y-1'>
                                    <h3 className='text-xl font-[500]'>Total Customar</h3>
                                    <h1 className='text-2xl font-[600]'>15452</h1>
                                </div>
                            </div>
                            <div className='flex items-center gap-3 border  p-5'>
                                <div className='border p-5 rounded-full bg-[#d8f1e5]'>
                                    <FaCarSide className='text-3xl text-[#3bb77e]' />
                                </div>
                                <div className='space-y-1'>
                                    <h3 className='text-xl font-[500]'>Total Orders</h3>
                                    <h1 className='text-2xl font-[600]'>56894</h1>
                                </div>
                            </div>
                            <div className='flex items-center gap-3 border  p-5'>
                                <div className='border p-5 rounded-full bg-[#d8f1e5]'>
                                    <FaCartShopping className='text-3xl text-[#3bb77e]' />
                                </div>
                                <div className='space-y-1'>
                                    <h3 className='text-xl font-[500]'>All Product</h3>
                                    <h1 className='text-2xl font-[600]'>78956</h1>
                                </div>
                            </div>
                            <div className='flex items-center gap-3 border  p-5'>
                                <div className='border p-5 rounded-full bg-[#d8f1e5]'>
                                    <RiMoneyDollarBoxFill className='text-3xl text-[#3bb77e]' />
                                </div>
                                <div className='space-y-1'>
                                    <h3 className='text-xl font-[500]'>Total Sales</h3>
                                    <h1 className='text-2xl font-[600]'>$5964</h1>
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
                            <div className='w-[80%] border p-2 bg-white shadow-lg rounded-2xl'>
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
                </TabPanel>
                <TabPanel>
                    <div>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-10'>
                            <div className='flex items-center gap-3 border  p-5'>
                                <div className='border p-5 rounded-full bg-[#d8f1e5]'>
                                    <AiFillDollarCircle className='text-3xl text-[#3bb77e]' />
                                </div>
                                <div className='space-y-1'>
                                    <h3 className='text-xl font-[500]'>Total Revenue</h3>
                                    <h1 className='text-2xl font-[600]'>$154526.5</h1>
                                </div>
                            </div>
                            <div className='flex items-center gap-3 border  p-5'>
                                <div className='border p-5 rounded-full bg-[#d8f1e5]'>
                                    <AiFillDollarCircle className='text-3xl text-[#3bb77e]' />
                                </div>
                                <div className='space-y-1'>
                                    <h3 className='text-xl font-[500]'>Total Customar</h3>
                                    <h1 className='text-2xl font-[600]'>15452</h1>
                                </div>
                            </div>
                            <div className='flex items-center gap-3 border  p-5'>
                                <div className='border p-5 rounded-full bg-[#d8f1e5]'>
                                    <FaCarSide className='text-3xl text-[#3bb77e]' />
                                </div>
                                <div className='space-y-1'>
                                    <h3 className='text-xl font-[500]'>Total Orders</h3>
                                    <h1 className='text-2xl font-[600]'>56894</h1>
                                </div>
                            </div>
                            <div className='flex items-center gap-3 border  p-5'>
                                <div className='border p-5 rounded-full bg-[#d8f1e5]'>
                                    <FaCartShopping className='text-3xl text-[#3bb77e]' />
                                </div>
                                <div className='space-y-1'>
                                    <h3 className='text-xl font-[500]'>All Product</h3>
                                    <h1 className='text-2xl font-[600]'>78956</h1>
                                </div>
                            </div>
                            <div className='flex items-center gap-3 border  p-5'>
                                <div className='border p-5 rounded-full bg-[#d8f1e5]'>
                                    <RiMoneyDollarBoxFill className='text-3xl text-[#3bb77e]' />
                                </div>
                                <div className='space-y-1'>
                                    <h3 className='text-xl font-[500]'>Total Sales</h3>
                                    <h1 className='text-2xl font-[600]'>$5964</h1>
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
                            <div className='w-[80%] border p-2 bg-white shadow-lg rounded-2xl'>
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
                </TabPanel>
            </Tabs>

        </div>
    );
};

export default DashboardInfo;