import { CiEdit } from 'react-icons/ci';
import { MdDelete } from 'react-icons/md';
import { TiDocumentText } from 'react-icons/ti';
import Select from 'react-select';
import img from '../../assets/shop/img1.png'

const Orders = () => {
    return (
        <div className='mx-10 my-5'>
            <div className='flex justify-between items-center'>
                <div>
                    <h1 className='text-3xl font-[600]'>Order List</h1>
                    <p className='font-[400]'>Whole data about your business here</p>
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
                <div className="overflow-x-auto my-10">
                    <table className="table w-full">
                        {/* head */}
                        <thead className='text-[14px]'>
                            <tr className="bg-base-200">
                                <th>Id</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Total</th>
                                <th>Status</th>
                                <th>Date</th>
                                <th>action</th>
                            </tr>
                        </thead>
                        <tbody className='text-[14px]'>
                            {/* row 1 */}
                            <tr className="">
                                <th>584fdrews54df</th>
                                <td>Cy Ganderton</td>
                                <td>kalidashodekare14@gmail.com</td>
                                <td>$5845</td>
                                <td>Active</td>
                                <td>09/29/2024</td>
                                <td>
                                    <div>
                                        <button className='btn rounded-none bg-[#3bb77e] text-white'>
                                            <span>Details</span>
                                        </button>
                                        <button className='btn rounded-none  border'>
                                            <span>...</span>
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

export default Orders;