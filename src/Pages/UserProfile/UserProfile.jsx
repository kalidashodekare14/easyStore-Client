import React, { useState } from 'react';
import img from '../../assets/upload.png'
import { FaEdit, FaSave } from 'react-icons/fa';
import useUser from '../../Hooks/useUser';
import { useForm } from 'react-hook-form';
import { MdOutlineCancel } from 'react-icons/md';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import useAuth from '../../Hooks/useAuth';
import { RotatingLines } from 'react-loader-spinner';
import { Helmet } from 'react-helmet-async';
const image_hosting_key = import.meta.env.VITE_IMG_API_KEY
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`


const UserProfile = () => {

    const [toggleInformation, setToggleImformation] = useState(false)
    const [toggleInAddress, setToggleAddress] = useState(false)
    const axiosSecure = useAxiosSecure()
    const { user } = useAuth()
    const [userInfo, refetch] = useUser()
    const [imageLoading, setImageLoading] = useState(false)

    // toggle System conditional
    const handleToggleInformation = () => {
        setToggleImformation(!toggleInformation)
    }
    const handleToggleAddress = () => {
        setToggleAddress(!toggleInAddress)
    }
    //==================================




    // image upload

    const handleImageHosting = async (event) => {
        const ImageSelected = event.target.files[0]
        setImageLoading(true)
        const formData = new FormData()
        formData.append("image", ImageSelected)

        try {
            const res = await fetch(`${image_hosting_api}`, {
                method: "POST",
                body: formData
            })
            const data = await res.json()
            if (data.success) {
                console.log(data.data.url)
                const imageUrl = {
                    image: data.data.url
                }
                axiosSecure.patch(`/profile_image/${user?.email}`, imageUrl)
                    .then(res => {
                        console.log(res.data)
                        if (res.data.modifiedCount > 0) {
                            refetch()
                        }
                    })
                    .catch(error => {
                        console.log(error.message)
                    })
            }
        } catch (error) {
            console.log(error.message)
        } finally {
            setImageLoading(false)
        }

    }



    // information and address update

    const {
        register: registerOne,
        handleSubmit: handleSubmitFormOne,
    } = useForm()

    const {
        register: registerTwo,
        handleSubmit: handleSubmitFormTwo,
    } = useForm()


    const handleSubmitOne = (data) => {
        console.log(data)
        const information = {
            name: data.name,
            email: data.email,
            mobile: data.mobile,
            bio: data.bio
        }
        axiosSecure.patch(`/information_update/${user?.email}`, information)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    setToggleImformation(false)
                    refetch()
                }
            })
            .catch(error => {
                console.log(error.message)
            })
    }


    const handleSubmitTwo = (data) => {
        console.log(data)
        const address = {
            country: data.country,
            address: data.address,
            postal_code: data.postal_code,
            current_address: data.current_address
        }
        axiosSecure.patch(`/address_update/${user?.email}`, address)
            .then(res => {
                console.log(res.data)
                setToggleAddress(false)
                refetch()
            })
            .catch(error => {
                console.log(error.message)
            })
    }



    return (
        <div className='lg:mx-40 min-h-screen'>
            <Helmet>
                <title>Profile | EasyStore</title>
            </Helmet>
            <div>
                <div>
                    <div className="flex justify-center items-center w-full h-52 bg-gradient-to-r from-cyan-500 to-blue-500 ...">
                        <h1 className='text-3xl font-[600] text-[#e2e2e2]'>My Profile</h1>
                    </div>
                    <div className='-mt-10 ms-5 flex  items-center gap-5'>
                        <div className='' onClick={() => document.querySelector('input[type="file"]').click()}>
                            <div className="avatar border-4 border-[#3bb77e] rounded-full">
                                {
                                    imageLoading ? (
                                        <div className='w-40 bg-white rounded-full'>
                                            <RotatingLines
                                                visible={true}
                                                height="140"
                                                width="150"
                                                color="grey"
                                                strokeWidth="5"
                                                animationDuration="0.75"
                                                ariaLabel="rotating-lines-loading"
                                                wrapperStyle={{}}
                                                wrapperClass=""
                                            />
                                        </div>
                                    ) : (
                                        <div className="w-40 rounded-full">

                                            <img
                                                alt="Tailwind CSS Navbar component"
                                                src={userInfo?.image} />

                                        </div>
                                    )
                                }

                            </div>
                            <input onChange={handleImageHosting} hidden type="file" className="file-input file-input-bordered w-full max-w-xs" />
                        </div>
                        <div>
                            <h1 className='text-3xl font-[600]'>{userInfo?.name}</h1>
                            <p>{userInfo?.bio}</p>
                        </div>
                    </div>
                </div>
                {/* information */}
                <div className='my-10 border p-5 rounded-lg space-y-3'>
                    <form onSubmit={handleSubmitFormOne(handleSubmitOne)}>
                        <div className='flex justify-between items-center'>
                            <h1 className='text-2xl font-[600]'>Personal Information</h1>
                            {
                                toggleInformation ? (
                                    <div className='space-x-3'>
                                        <button onClick={handleToggleInformation} className='btn rounded-xl'>
                                            <MdOutlineCancel></MdOutlineCancel>
                                            Cancel
                                        </button>
                                        <button type='submit' className='btn rounded-xl'>
                                            <FaSave></FaSave>
                                            Save
                                        </button>

                                    </div>
                                ) : (
                                    <div onClick={handleToggleInformation} className='btn rounded-xl'>
                                        <FaEdit></FaEdit>
                                        Edit
                                    </div>
                                )
                            }
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                            <div className='flex flex-col gap-1'>
                                <label htmlFor="">Full Name</label>
                                {
                                    toggleInformation ? (
                                        <input {...registerOne("name")} defaultValue={userInfo?.name} className='input input-bordered' type="text" />
                                    ) : (
                                        <div>
                                            <h1 className='font-[600]'>{userInfo?.name ? userInfo?.name : "N/A"}</h1>
                                        </div>
                                    )
                                }


                            </div>
                            <div className='flex flex-col gap-1'>
                                <label htmlFor="">Phone</label>
                                {
                                    toggleInformation ? (
                                        <input {...registerOne("mobile")} defaultValue={userInfo?.mobile} className='input input-bordered' type="text" />
                                    ) : (
                                        <div>
                                            <h1 className='font-[600]'>{userInfo?.mobile ? userInfo?.mobile : "N/A"}</h1>
                                        </div>
                                    )
                                }
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label htmlFor="">Email Address</label>
                                {
                                    toggleInformation ? (
                                        <input {...registerOne("email")} defaultValue={userInfo?.email} className='input input-bordered' type="text" />
                                    ) : (
                                        <div>
                                            <h1 className='font-[600]'>{userInfo?.email ? userInfo?.email : "N/A"}</h1>
                                        </div>
                                    )
                                }

                            </div>
                            <div className='flex flex-col gap-1'>
                                <label htmlFor="">Bio</label>
                                {
                                    toggleInformation ? (
                                        <input {...registerOne("bio")} defaultValue={userInfo?.bio} className='input input-bordered' type="text" />
                                    ) : (
                                        <div>
                                            <h1 className='font-[600]'>{userInfo?.bio ? userInfo?.bio : "N/A"}</h1>
                                        </div>
                                    )
                                }


                            </div>
                        </div>
                    </form>
                </div >
                {/* address */}
                <div className='my-10 border p-5 rounded-lg space-y-3'>
                    <form onSubmit={handleSubmitFormTwo(handleSubmitTwo)}>
                        <div className='flex justify-between items-center'>
                            <h1 className='text-2xl font-[600]'>Address</h1>
                            {
                                toggleInAddress ? (
                                    <div className='space-x-3'>
                                        <button onClick={handleToggleAddress} className='btn rounded-xl'>
                                            <MdOutlineCancel></MdOutlineCancel>
                                            Cancel
                                        </button>
                                        <button type='submit' className='btn rounded-xl'>
                                            <FaSave></FaSave>
                                            Save
                                        </button>

                                    </div>
                                ) : (
                                    <div onClick={handleToggleAddress} className='btn rounded-xl'>
                                        <FaEdit></FaEdit>
                                        Edit
                                    </div>
                                )
                            }
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                            <div className='flex flex-col gap-1'>
                                <label htmlFor="">Country</label>
                                {
                                    toggleInAddress ? (
                                        <div>
                                            {/* <input   className='input input-bordered' type="text" /> */}
                                            <select {...registerTwo("country")} defaultValue={userInfo?.country} className="select select-bordered w-full">
                                                <option disabled selected>Country</option>
                                                <option>Bangladesh</option>
                                                <option>India</option>
                                                <option>United State</option>
                                            </select>
                                        </div>
                                    ) : (
                                        <div>
                                            <h1 className='font-[600]'>{userInfo?.country ? userInfo?.country : "N/A"}</h1>
                                        </div>
                                    )
                                }
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label htmlFor="">City/State</label>
                                {
                                    toggleInAddress ? (
                                        <input {...registerTwo("address")} defaultValue={userInfo?.address} className='input input-bordered' type="text" />
                                    ) : (

                                        <div>
                                            <h1 className='font-[600]'>{userInfo?.address ? userInfo?.address : "N/A"}</h1>
                                        </div>
                                    )
                                }

                            </div>
                            <div className='flex flex-col gap-1'>
                                <label htmlFor="">Postal Code</label>
                                {
                                    toggleInAddress ? (
                                        <input {...registerTwo("postal_code")} defaultValue={userInfo?.postal_code} className='input input-bordered' type="text" />
                                    ) : (
                                        <div>
                                            <h1 className='font-[600]'>{userInfo?.postal_code ? userInfo?.postal_code : "N/A"}</h1>
                                        </div>
                                    )
                                }


                            </div>
                            <div className='flex flex-col gap-1'>
                                <label htmlFor="">Current Address</label>
                                {
                                    toggleInAddress ? (
                                        <input {...registerTwo("current_address")} defaultValue={userInfo?.current_address} className='input input-bordered' type="text" />
                                    ) : (
                                        <div>
                                            <h1 className='font-[600]'>{userInfo?.current_address ? userInfo?.current_address : "N/A"}</h1>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </form>
                </div>
            </div >
        </div >
    );
};

export default UserProfile;