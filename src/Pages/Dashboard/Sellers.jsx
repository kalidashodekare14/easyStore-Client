import { CiEdit } from 'react-icons/ci';
import { MdDelete } from 'react-icons/md';
import { TiDocumentText } from 'react-icons/ti';
import Select from 'react-select';
import img from '../../assets/shop/img1.png'

const Sellers = () => {
    return (
        <div className='lg:mx-10  my-5'>
            <div className='flex justify-between items-center px-2'>
                <div>
                    <h1 className='text-3xl font-[600]'>Product Selles</h1>
                    {/* <p className='font-[400]'>Whole data about your business here</p> */}
                </div>
                <button className='flex items-center btn bg-[#3bb77e] text-white'>
                    <TiDocumentText className='text-xl' />
                    Create report
                </button>
            </div>
            <div className='my-10 bg-white p-5'>
                <div className='flex justify-between items-center'>
                    <input className='input input-bordered w-80' placeholder='Searh...' type="text" />
                    <div className='flex items-center gap-5'>
                        <div>
                            <select className="select select-bordered w-full max-w-xs">
                                <option disabled selected>Status</option>
                                <option>Han Solo</option>
                                <option>Greedo</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        {/* head */}
                        <thead className='text-[14px]'>
                            <tr>
                                <th>Seller</th>
                                <th>Email</th>
                                <th>Status</th>
                                <th>Sale Date</th>
                                <th>Action</th>
                                
                            </tr>
                        </thead>
                        <tbody className='text-[14px]'>
                            {/* row 1 */}
                            <tr className="">
                                <th>
                                    <div className='flex items-center'>
                                        <img className='w-20' src={img} alt="" />
                                        <div>
                                            <h1>Kalidash Odekare</h1>
                                            <span>Seller Id: 54fd8595f574ef6</span>
                                        </div>
                                    </div>
                                </th>
                                <td>kalidashodekare14@gmail.com</td>
                                <td>Active</td>
                                <td>09/29/2024</td>
                                <td>
                                    <div>
                                        <button className='btn rounded-none bg-[#3bb77e] text-white'>
                                            View Details
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div >
    );
};

export default Sellers;