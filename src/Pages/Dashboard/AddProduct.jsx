import React, { useState } from 'react';
import upload from '../../assets/upload.png'
import { useForm } from 'react-hook-form';
import { RotatingLines } from 'react-loader-spinner';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';
const image_hosting_key = import.meta.env.VITE_IMG_API_KEY
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const AddProduct = () => {

    const [loading, setLoading] = useState(false)
    const [isImage, setIsImage] = useState([])
    const axiosSecure = useAxiosSecure()

    console.log(isImage)

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        reset
    } = useForm()


    const handleImageHosting = async (event) => {
        const selectedImage = event.target.files
        setLoading(true)
        const imageUrl = [];

        for (let i = 0; i < selectedImage.length; i++) {
            const formData = new FormData()
            formData.append('image', selectedImage[i])

            try {
                const res = await fetch(`${image_hosting_api}`, {
                    method: 'POST',
                    body: formData
                })
                const data = await res.json()
                if (data.success) {
                    console.log(data.data.url)
                    imageUrl.push(data.data.url)

                }
            } catch (error) {
                console.log(error.message)
            } finally {
                setIsImage([...imageUrl])
                setLoading(false)

            }
        }


    }

    const onSubmit = (data) => {
        console.log(data)
        const info = {
            name: data.product_name,
            description: data.description,
            price: data.price,
            category: data.category,
            brand_name: data.brand_name,
            unit_type: data.unit_type,
            discount: data.discount,
            availability: data.availability,
            expiry_date: data.expiry_date,
            image: isImage
        }

        try {
            axiosSecure.post('/all_product', info)
                .then(res => {
                    console.log(res.data)
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "Your product has been public",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        reset()
                    }
                })
                .catch(error => {
                    console.log(error.message)
                })
        } catch (error) {
            console.log("Something Rong", error.message)
        }
    }

    return (
        <div className='lg:mx-10'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='flex flex-col lg:flex-row justify-between items-center gap-5 my-5'>
                    <h1 className='text-2xl'>Add New Product</h1>
                    <div className='space-x-3'>
                        <button className='btn'>Save  to Draft</button>
                        <button type='submit' className='btn bg-[#3bb77e] text-white'>Public</button>
                    </div>
                </div>
                <div className='flex flex-col-reverse lg:flex-row gap-3'>
                    <div className='border p-5 bg-white space-y-3'>
                        <div className='flex flex-col'>
                            <label htmlFor="">Product Name</label>
                            <input {...register("product_name")} className='input input-bordered' type="text" />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="">Description</label>
                            <textarea {...register("description")} className='textarea textarea-bordered'></textarea>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                            <div className='flex flex-col'>
                                <label htmlFor="">Price</label>
                                <input {...register("price")} className='input input-bordered' type="text" />
                            </div>
                            <div className='flex flex-col'>
                                <label htmlFor="">Category</label>
                                <input {...register("category")} className='input input-bordered' type="text" />
                            </div>
                            <div className='flex flex-col'>
                                <label htmlFor="">Brand Name</label>
                                <input {...register("brand_name")} className='input input-bordered' type="text" />
                            </div>
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="">Unit Type</label>
                            <select {...register("unit_type")} className="select select-bordered w-full">
                                <option disabled selected>Select</option>
                                <option>Kg</option>
                                <option>Liter</option>
                                <option>Piece</option>
                                <option>Packet</option>
                            </select>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                            <div className='flex flex-col'>
                                <label htmlFor="">Discount/Offer</label>
                                <input {...register("discount")} className='input input-bordered' type="text" />
                            </div>
                            <div className='flex flex-col'>
                                <label htmlFor="">Availability</label>
                                <select {...register("availability")} className="select select-bordered w-full max-w-xs">
                                    <option disabled selected>Select</option>
                                    <option>In Stock</option>
                                    <option>Out of Stock</option>
                                </select>
                            </div>
                            <div className='flex flex-col'>
                                <label htmlFor="">Expiry Date</label>
                                <input {...register("expiry_date")} className='input input-bordered' type="date" />
                            </div>
                        </div>
                    </div>
                    <div className='lg:w-[40%] w-full'>
                        <div className='p-5 bg-white h-[350px]'>
                            <h1 className='text-xl font-[600]'>Media</h1>
                            <div className='border-b'>
                                <div onClick={() => document.querySelector('input[type="file"]').click()} className='flex flex-col justify-center items-center'>
                                    {
                                        loading && (
                                            <RotatingLines
                                                visible={true}
                                                height="96"
                                                width="96"
                                                color="grey"
                                                strokeWidth="5"
                                                animationDuration="0.75"
                                                ariaLabel="rotating-lines-loading"
                                                wrapperStyle={{}}
                                                wrapperClass=""
                                            />
                                        )
                                    }
                                    <img className={`${loading && "hidden"} w-40`} src={upload} alt="" />
                                    <input onChange={handleImageHosting} type="file" hidden multiple className="file-input file-input-bordered w-full max-w-xs" />
                                </div>
                            </div>
                            <div className='flex items-center gap-5 p-3'>
                                {
                                    isImage.map(image => (
                                        <div key={image}>
                                            <img className='w-16 h-20' src={image} alt="" />
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddProduct;