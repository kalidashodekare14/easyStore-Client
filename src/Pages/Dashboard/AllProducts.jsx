import React from 'react';
import { CiEdit } from 'react-icons/ci';
import { MdDelete } from 'react-icons/md';
import { TiDocumentText } from 'react-icons/ti';
import Select from 'react-select';
import img from '../../assets/shop/img1.png'

const AllProducts = () => {
    return (
        <div className='mx-10 my-5'>
            <div className='flex justify-between items-center'>
                <div>
                    <h1 className='text-3xl font-[600]'>Product List</h1>
                    <p className='font-[400]'>Whole data about your business here</p>
                </div>
                <button className='flex items-center btn bg-[#3bb77e] text-white'>
                    <TiDocumentText className='text-xl' />
                    Create report
                </button>
            </div>
            <div className='my-10 bg-white p-5'>
                <div className='flex justify-between items-center'>
                    <div className=''>
                        <select className="select select-bordered w-52">
                            <option disabled selected>All Category</option>
                            <option>Han Solo</option>
                            <option>Greedo</option>
                        </select>
                    </div>
                    <div className='flex items-center gap-5'>
                        <input className='input input-bordered' type="date" />
                        <div>
                            <select className="select select-bordered w-full max-w-xs">
                                <option disabled selected>All Category</option>
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
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody className='text-[14px]'>
                            {/* row 1 */}
                            <tr className="">
                                <th>1</th>
                                <th>
                                    <img className='w-20' src={img} alt="" />
                                </th>
                                <td>Cy Ganderton</td>
                                <td>$5845</td>
                                <td>Active</td>
                                <td>09/29/2024</td>
                                <td>
                                    <div>
                                        <button className='btn rounded-none bg-[#3bb77e] text-white'>
                                            <CiEdit />
                                            <span>Edit</span>
                                        </button>
                                        <button className='btn rounded-none bg-[#3bb77e] text-white'>
                                            <MdDelete />
                                            <span>Delete</span>
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

export default AllProducts;