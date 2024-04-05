import React, { useState } from 'react'

const CreateAccountFrom = () => {
    const [user, setUser] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [company, setCompany] = useState("");
    const [password, setPassword] = useState("");
    const RoleSubmitHandler = (e) => {
        e.preventDefault()
    }

    const SignInHandler = async (e) => {
        e.preventDefault();

        console.log(user + email + mobile + company + password)

        const response = await fetch('http://localhost:3001/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ user, email, mobile, company, password })
        });

        if (response.ok) {
            // Handle success
            console.log('User registered successfully');
        } else {
            // Handle error
            console.error('Failed to register user');
        }
    }

    return (
        <>
            {user ? <div className='w-full flex items-center justify-center'>
                <div className='w-3/4 md:w-1/2 flex flex-col gap-y-8 px-8 py-8 bg-slate-800 rounded-lg'>
                    <h1 className='text-2xl md:text-4xl font-bold text-white text-center'>Create {user} Account </h1>

                    <form onSubmit={SignInHandler} className='text-xl'>
                        <div className='w-full mb-4 flex flex-col gap-2'>
                            <label htmlFor="" className='px-3 text-sm md:text-lg'>Email Address</label>
                            <input type="email" placeholder='Enter email address' className='border-b-4 border-none p-3 bg-slate-700 rounded-md outline-none focus:ring-indigo-600 focus:ring-2 text-sm md:text-lg' onChange={(e) => setEmail(e.target.value)} value={email} />
                        </div>
                        <div className='w-full mb-4 flex flex-col gap-2'>
                            <label htmlFor="" className='px-3 text-sm md:text-lg'>Mobile No.</label>
                            <input type="text" placeholder='Enter mobile No.' className='border-b-4 border-none p-3 bg-slate-700 rounded-md outline-none focus:ring-indigo-600 focus:ring-2 text-sm md:text-lg' onChange={(e) => setMobile(e.target.value)} value={mobile} />
                        </div>
                        {user == "Administrator" ? <div className='w-full mb-4 flex flex-col gap-2'>
                            <label htmlFor="" className='px-3 text-sm md:text-lg'>Company Name</label>
                            <input type="text" placeholder='Enter Company Name' className='border-b-4 border-none p-3 bg-slate-700 rounded-md outline-none focus:ring-indigo-600 focus:ring-2 text-sm md:text-lg' onChange={(e) => setCompany(e.target.value)} value={company} />
                        </div> : <div></div>}
                        <div className='w-full mb-4 flex flex-col gap-2'>
                            <label htmlFor="" className='px-3 text-sm md:text-lg'>Password</label>
                            <input type="password" placeholder='Enter Password' className='border-b-4 border-none p-3 bg-slate-700 rounded-md outline-none focus:ring-indigo-600 focus:ring-2 text-sm md:text-lg' onChange={(e) => setPassword(e.target.value)} value={password} />
                        </div>
                        <div className='w-full my-6 flex flex-col gap-2'>
                            <button className='bg-indigo-600 p-3 rounded-md text-white text-md md:text-lg'>Create Account</button>
                        </div>
                    </form>
                </div>
            </div> : <div className='w-full flex items-center justify-center'>
                <div className='w-3/4 md:w-1/2 flex flex-col gap-y-8 px-8 py-8 bg-slate-800 rounded-lg'>
                    <h1 className='text-2xl md:text-4xl font-bold text-white text-center'>Which best describes your role?</h1>

                    <form className='text-xl' onSubmit={RoleSubmitHandler}>

                        <div className='w-full my-6 flex flex-col lg:flex-row gap-3 justify-between items-center'>
                            <button className='w-full py-6 bg-slate-600 hover:bg-slate-700 p-3 rounded-md text-white text-md md:text-lg' value="Administrator" onClick={(e) => setUser(e.target.value)}>Administrator</button>
                            <button className='w-full py-6 bg-slate-600 hover:bg-slate-700 p-3 rounded-md text-white text-md md:text-lg' value="Instructor" onClick={(e) => setUser(e.target.value)}>Instructor</button>
                            <button className='w-full py-6 bg-slate-600 hover:bg-slate-700 p-3 rounded-md text-white text-md md:text-lg' value="Student" onClick={(e) => setUser(e.target.value)}>Student</button>
                        </div>
                    </form>
                </div>
            </div>}


        </>

    )
}

export default CreateAccountFrom
