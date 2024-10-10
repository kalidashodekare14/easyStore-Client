import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import google from '../../assets/google.png'
import facebook from '../../assets/facebook.png'
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import useAuth from '../../Hooks/useAuth';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../Hooks/useAxiosPublic';

const Register = () => {

    const { registerSystem, googleAuthSystem } = useAuth()
    const axiosPublic = useAxiosPublic()
    const [phone, setPhone] = useState("")
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data, phone)
        registerSystem(data.email, data.password)
            .then(res => {
                console.log(res.data)

                const info = {
                    email: data.email,
                    password: data.password,
                    mobile: phone
                }

                axiosPublic.post("/user-register", info)
                    .then(res => {
                        console.log(res.data)
                        if (res.data.insertedId) {
                            Swal.fire({
                                position: "center",
                                icon: "success",
                                title: "Your register has been successfuly",
                                showConfirmButton: false,
                                timer: 1500
                            });
                            navigate("/")
                        }

                    })
                    .catch(error => {
                        console.log(error.message)
                    })

            })
            .catch(error => {
                console.log(error.message)
            })
    }

    const handleGoogleRegister = () => {
        googleAuthSystem()
            .then(res => {
                console.log(res.data)
                const regiInfo = {
                    name: res?.user?.displayName,
                    email: res?.user?.email,
                    image: res?.user?.photoURL
                }

                axiosPublic.post("/user-register", regiInfo)
                    .then(res => {
                        console.log(res.data)


                    })
                    .catch(error => {
                        console.log(error.message)
                    })
                navigate('/')
            })
            .catch(error => {
                console.log(error.message)
            })
    }





    return (
        <div className='min-h-screen flex justify-center items-center'>
            <div className='w-96 border p-5 space-y-5 rounded-2xl'>
                <h1 className='text-3xl font-bold'>Sign Up</h1>
                <div className='space-y-5'>
                    <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
                        <div className='flex flex-col space-y-2'>
                            <label>Email</label>
                            <input {...register("email")} className='input input-bordered' placeholder='Your Email' type="email" />
                        </div>
                        <div className='flex flex-col space-y-2'>
                            <label>Phone</label>
                            <div>
                                <div>
                                    <PhoneInput
                                        country={'us'}
                                        value={phone}
                                        onChange={setPhone}
                                        inputStyle={{
                                            height: '3rem',
                                            width: "100%"
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col space-y-2'>
                            <label>Create Password</label>
                            <input {...register("password")} className='input input-bordered' placeholder='Your Password' type="password" />
                        </div>
                        <div>
                            <button className='btn w-full bg-[#3bb77e] text-white' type='submit'>Sign Up</button>
                        </div>
                    </form>
                    <p className='text-center '>or sign up with</p>
                    <div className='flex justify-center items-center gap-5'>
                        <button onClick={handleGoogleRegister} className='btn 40 flex items-center gap-2'>
                            <img className='w-5' src={google} alt="" />
                            Google
                        </button>
                        <button className='btn w-40 flex items-center gap-2'>
                            <img className='w-5' src={facebook} alt="" />
                            Facebook
                        </button>
                    </div>
                    <h1 className='text-center'>Already have an account? <Link to={"/login"} className='text-[#3bb77e] font-bold'>Sign in now</Link></h1>
                </div>
            </div>
        </div>
    );
};

export default Register;