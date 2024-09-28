import google from '../../assets/google.png'
import facebook from '../../assets/facebook.png'
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='min-h-screen flex justify-center items-center'>
        <div className='w-96 border p-5 space-y-5 rounded-2xl'>
            <h1 className='text-3xl font-bold'>Login in</h1>
            <div className='space-y-5'>
                <div>
                   
                    <input className='input input-bordered w-full' placeholder='Your Name or Email' type="text" />
                </div>
                <div>
                    <input className='input input-bordered w-full' placeholder='Password' type="text" />
                </div>
                <div>
                    <button className='btn w-full bg-[#3bb77e] text-white' type='submit'>Sign Up</button>
                </div>
                <p className='text-center '>or sign up with</p>
                <div className='flex justify-center items-center gap-5'>
                    <button className='btn 40 flex items-center gap-2'>
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