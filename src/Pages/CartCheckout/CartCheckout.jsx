import React, { useState } from 'react';
import { FaDeleteLeft } from 'react-icons/fa6';
import { useCart } from 'react-use-cart';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import useUser from '../../Hooks/useUser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from 'react-helmet-async';

const CartCheckout = () => {

    const axiosSecure = useAxiosSecure()
    const [userInfo] = useUser()

    const salesTextRate = 0.1

    const {
        isEmpty,
        totalUniqueItems,
        items,
        updateItemQuantity,
        removeItem,
        cartTotal
    } = useCart();



    const salesTax = cartTotal * salesTextRate
    const grandTotal = cartTotal + salesTax

    const handleDeleteButton = (item) => {
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
                if (removeItem(item.id)) {
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                }

            }
        });
    }


    const handlePaymentSystem = () => {

        if (!userInfo.name || !userInfo.country || !userInfo.postal_code || !userInfo.mobile || !userInfo.current_address || !userInfo.address) {
            toast.warning("Your Profile Update")
            return
        }

        if (totalUniqueItems <= 0) {
            return toast.warning("Your Cart Empty")
        }

        const prodcuts = items.map(product => ({
            prodcut_name: product.name,
            product_category: product.category,
            prodcut_brand_name: product.brand_name,
            prodcut_quantity: product.quantity,
            prodcut_image: product.image
        }))

        const paymentInfo = {
            customar_name: userInfo?.name,
            customar_email: userInfo?.email,
            image: userInfo?.image,
            amount: grandTotal,
            prodcuts,
            addressInfo: {
                country: userInfo?.country,
                address: userInfo?.address,
                current_address: userInfo.current_address,
                postal_code: userInfo.postal_code,
                phone_number: userInfo.mobile
            },
            currency: "BDT"
        }

        axiosSecure.post('/payment-create', paymentInfo)
            .then(res => {
                console.log(res)
                const redirecUrl = res.data.paymentUrl
                if (redirecUrl) {
                    window.location.replace(redirecUrl)
                }
            })

    }



    return (
        <div className='min-h-screen lg:mx-20'>
            <Helmet>
                <title>Checkout | EasyStore</title>
            </Helmet>
            <h1 className='text-center text-3xl my-10'>Checkout</h1>
            <div className='flex flex-col lg:flex-row justify-between gap-5'>
                <div className='w-full'>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr className="bg-base-200">
                                    <th></th>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    items.map(item => (
                                        <tr>
                                            <th>1</th>
                                            <td>
                                                <img className='w-20' src={item.image[0]} alt="" />
                                            </td>
                                            <td>{item.name}</td>
                                            <td>${item.price}</td>
                                            <td>
                                                <div>
                                                    <button onClick={() => updateItemQuantity(item.id, Math.max(1, item.quantity - 1))} className='btn'>-</button>
                                                    <input value={item.quantity} className='input input-bordered w-12' type="text" />
                                                    <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)} className='btn'>+</button>
                                                </div>
                                            </td>
                                            <td>${item.price * item.quantity}</td>
                                            <td>
                                                <div onClick={() => handleDeleteButton(item)}>
                                                    <FaDeleteLeft className='text-2xl text-red-500' />
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='lg:w-[40%] w-full bg-white shadow p-5'>
                    <div>
                        <div>
                            <p>Enter Promo Code</p>
                            <div className='border rounded-lg flex items-center'>
                                <input className='input w-full' type="text" />
                                <button className='btn rounded-none '>Submit</button>
                            </div>
                        </div>
                        <div className='mt-5'>
                            <div className='mb-5 flex justify-between items-center'>
                                <h2>Subtotal :</h2>
                                <h2>${cartTotal.toFixed(2)}</h2>
                            </div>
                            <div className='mb-5 flex justify-between items-center'>
                                <h2>Sales Tax :</h2>
                                <h2>${salesTax.toFixed(2)}</h2>
                            </div>
                            <div className='mb-5 flex justify-between items-center'>
                                <h2>Grand Total : </h2>
                                <h2>${grandTotal.toFixed(2)}</h2>
                            </div>
                        </div>
                        <div className='flex justify-center items-center'>
                            <button onClick={handlePaymentSystem} className='btn w-32'>Checkout</button>
                        </div>

                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default CartCheckout;