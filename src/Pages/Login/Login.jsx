import google from '../../assets/google.png'
import facebook from '../../assets/facebook.png'
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import useAuth from '../../Hooks/useAuth';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import { useState } from 'react';
import { RotatingLines } from 'react-loader-spinner';

const Login = () => {


    const { loginSystem, googleAuthSystem } = useAuth()
    const navigate = useNavigate()
    const axiosPublic = useAxiosPublic()
    const [isRequired, setIsRequired] = useState("")
    const [loginLoading, setLoginLoading] = useState(false)

    console.log('loading checking', loginLoading)

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()


    const onSubmit = async (data) => {
        try {
            setLoginLoading(true)
            console.log(data)
            const dataInfo = {
                email: data.email,
                password: data.password
            }
            loginSystem(data.email, data.password)
                .then(async (res) => {
                    try {
                        setLoginLoading(true)
                        const loginRes = await axiosPublic.get('/login-matched', { params: dataInfo })
                        console.log(loginRes.data)
                        navigate("/")
                    } catch (error) {
                        console.log(error)
                    } finally {
                        setLoginLoading(false)
                    }

                })
                .catch(error => {
                    console.log(error.message)
                })
        } catch (error) {
            console.log(error)
        }



    }


    const handleGoogleRegister = () => {
        googleAuthSystem()
            .then(res => {
                console.log(res.data)
                navigate('/')
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    return (
        <div className='min-h-screen flex justify-center items-center'>
            <Helmet>
                <title>Login | EasyStore</title>
            </Helmet>
            <div className='w-96 border p-5 space-y-5 rounded-2xl'>
                <h1 className='text-3xl font-bold'>Login in</h1>
                <div className='space-y-5'>
                    <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
                        <div>

                            <input {...register("email", { required: true })} className={`input input-bordered w-full ${errors.email && 'border-red-500 focus:outline-red-500'}`} placeholder='Your Name or Email' type="email" />
                            {errors.email && <span className='text-red-500'>This field is required</span>}

                        </div>
                        <div>
                            <input {...register("password", { required: true })} className={`input input-bordered w-full ${errors.email && 'border-red-500 focus:outline-red-500'}`} placeholder='Password' type="password" />
                            {errors.password && <span className='text-red-500'>This field is required</span>}
                            <span className='text-red-500'>{isRequired}</span>
                        </div>
                        <div>
                            <button className='btn w-full bg-[#3bb77e] text-white' type='submit'>
                                {
                                    loginLoading ? (
                                        <RotatingLines
                                            visible={true}
                                            height="30"
                                            width="30"
                                            color=""
                                            strokeColor="white"
                                            strokeWidth="5"
                                            animationDuration="0.75"
                                            ariaLabel="rotating-lines-loading"
                                            wrapperStyle={{}}
                                            wrapperClass=""
                                        />
                                    ) : (
                                        "Login"
                                    )
                                }
                            </button>
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
                    <h1 className='text-center'>Already have an account? <Link to={"/register"} className='text-[#3bb77e] font-bold'>Sign in now</Link></h1>
                </div>
            </div>
        </div>
    );
};

export default Login;