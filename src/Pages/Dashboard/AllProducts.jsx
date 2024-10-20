import React from 'react';
import { CiEdit } from 'react-icons/ci';
import { MdDelete } from 'react-icons/md';
import { TiDocumentText } from 'react-icons/ti';
import Select from 'react-select';
import img from '../../assets/shop/img1.png'
import useTotalProduct from '../../Hooks/useTotalProduct';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';

const AllProducts = () => {

    const [useAllProduct, refetch] = useTotalProduct()
    const axiosSecure = useAxiosSecure()
    console.log(useAllProduct)

    const handleProductDelete = (product) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/all-product/${product?._id}`)
                    .then(res => {
                        console.log(res.data)
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            refetch()
                        }
                    })
                    .catch(error => {
                        console.log(error.message)
                    })

            }
        });

    }

    return (
        <div className='lg:mx-10 my-5'>
            <Helmet>
                <title>All Product | EasyStore</title>
            </Helmet>
            <div className='flex justify-between items-center mx-5'>
                <div>
                    <h1 className='text-3xl font-[600]'>Product List</h1>
                    {/* <p className='font-[400]'>Whole data about your business here</p> */}
                </div>
                <button className='flex items-center btn bg-[#3bb77e] text-white'>
                    <TiDocumentText className='text-xl' />
                    Create report
                </button>
            </div>
            <div className='my-10 bg-white p-5'>
                <div className='flex flex-col lg:flex-row justify-between items-center gap-5 mb-10'>
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
                                <th>Name</th>
                                <th>Category</th>
                                <th>Brand Name</th>
                                <th>Unit Type</th>
                                <th>Price</th>
                                <th>Availability</th>
                                <th>Expiry date</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody className='text-[14px]'>
                            {/* row 1 */}
                            {
                                useAllProduct.map(product => (
                                    <tr key={product._id} className="">
                                        <th>1</th>
                                        <th>
                                            <img className='w-52' src={product.image[0]} alt="" />
                                        </th>
                                        <td>{product.name}</td>
                                        <td>{product.category}</td>
                                        <td>{product.brand_name}</td>
                                        <td>{product.unit_type}</td>
                                        <td>${product.price}</td>
                                        <td>{product.availability}</td>
                                        <td>{product.expiry_date}</td>
                                        <td>
                                            <div className='flex items-center'>
                                                <button className='btn rounded-none bg-[#3bb77e] text-white'>
                                                    <CiEdit />
                                                    <span>Edit</span>
                                                </button>
                                                <button onClick={() => handleProductDelete(product)} className='btn rounded-none bg-[#3bb77e] text-white'>
                                                    <MdDelete />
                                                    <span>Delete</span>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div >
    );
};

export default AllProducts;