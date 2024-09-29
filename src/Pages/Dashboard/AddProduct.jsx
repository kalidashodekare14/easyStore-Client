import React, { useState } from 'react';
import upload from '../../assets/upload.png'
import { useForm } from 'react-hook-form';
import { RotatingLines } from 'react-loader-spinner';
const image_hosting_key = import.meta.env.VITE_IMG_API_KEY
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const AddProduct = () => {

    const [loading, setLoading] = useState(false)
    const [isImage, setIsImage] = useState([])
    
    console.log(isImage)

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
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

    }

    return (
        <div className='mx-10'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='flex justify-between items-center my-5'>
                    <h1 className='text-2xl'>Add New Product</h1>
                    <div className='space-x-3'>
                        <button className='btn'>Save  to Draft</button>
                        <button type='submit' className='btn bg-[#3bb77e] text-white'>Public</button>
                    </div>
                </div>
                <div className='flex gap-3'>
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
                    <div className='w-[40%]'>
                        <div className='p-5 bg-white '>
                            <h1 className='text-xl font-[600]'>Media</h1>
                            <div onClick={() => document.querySelector('input[type="file"]').click()} className='flex flex-col justify-center items-center'>
                                {
                                    loading ? (
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
                                    ) : (

                                        <img className='w-40' src={isImage} alt="" />
                                    )
                                }
                                <img className={` w-40`} src={upload} alt="" />
                                <input onChange={handleImageHosting} type="file" hidden multiple className="file-input file-input-bordered w-full max-w-xs" />
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddProduct;