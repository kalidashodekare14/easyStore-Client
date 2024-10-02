import React, { useState } from 'react';
import { FaDeleteLeft } from 'react-icons/fa6';
import { useCart } from 'react-use-cart';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import useUser from '../../Hooks/useUser';

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

        const paymentInfo = {
            customar_name: userInfo?.name,
            customar_email: userInfo?.email,
            amount: grandTotal,
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
            <h1 className='text-center text-3xl my-10'>Checkout</h1>
            <div className='flex justify-between gap-5'>
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
                <div className='w-[40%] bg-white shadow p-5'>
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
        </div>
    );
};

export default CartCheckout;