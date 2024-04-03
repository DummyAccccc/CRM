import React from 'react'
import { Link } from 'react-router-dom'
const Login = () => {
    return (
        <div className='w-full flex items-center justify-center'>
            <div className='w-3/4 md:w-1/2 flex flex-col gap-y-8 px-8 py-8 bg-slate-800 rounded-lg'>
                <h1 className='text-2xl md:text-4xl font-bold text-white text-center'>Login </h1>

                <form action="" className='text-xl'>
                    <div className='w-full mb-4 flex flex-col gap-2'>
                        <label htmlFor="" className='px-3 text-sm md:text-lg'>Email Address</label>
                        <input type="email" placeholder='Enter email address' className='border-b-4 border-none p-3 bg-slate-700 rounded-md outline-none focus:ring-indigo-600 focus:ring-2 text-sm md:text-lg' />
                    </div>

                    <div className='w-full mb-4 flex flex-col gap-2'>
                        <label htmlFor="" className='px-3 text-sm md:text-lg'>Password</label>
                        <input type="password" placeholder='Enter Password' className='border-b-4 border-none p-3 bg-slate-700 rounded-md outline-none focus:ring-indigo-600 focus:ring-2 text-sm md:text-lg' />
                    </div>
                    <div className='w-full my-6 flex flex-col gap-2'>
                        <button className='bg-indigo-600 p-3 rounded-md text-white text-md md:text-lg'>
                            Login
                        </button>
                    </div>
                <Link to="/dashboard">Dashboard</Link>
                </form>
            </div>
        </div>
    )
}

export default Login
