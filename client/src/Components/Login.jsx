import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';


const Login = (props) => {



    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userData, setUserData] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();
    const [invalidUser, setInvalidUser] = useState(false);


    useEffect(() => {

        fetchData()

    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:3001/fetchUsers'); // Assuming your backend is running on the same host
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            await setUserData(data);
            // console.log(userData)
        } catch (error) {
            console.error(error);
        }
    };

    const loginHandler = (e) => {
        e.preventDefault();

        userData.map((val, index) => {
            if (val.email == email && val.password == password) {
                navigate('/dashboard', {
                    state: {
                        email: val.email,
                        company: val.company,
                        role: val.role
                    }
                })

            } else {
                setInvalidUser(true)
            }
        })

        if (invalidUser) {
            console.log("invalid credentials")
        }




    }



    return (
        <div className='w-full flex items-center justify-center'>
            <div className='w-3/4 md:w-1/2 flex flex-col gap-y-8 px-8 py-8 bg-slate-800 rounded-lg'>
                <h1 className='text-2xl md:text-4xl font-bold text-white text-center'>Login </h1>

                <form onSubmit={loginHandler} className='text-xl'>
                    <div className='w-full mb-4 flex flex-col gap-2'>
                        <label htmlFor="" className='px-3 text-sm md:text-lg'>Email Address</label>
                        <input type="email" placeholder='Enter email address' className='border-b-4 border-none p-3 bg-slate-700 rounded-md outline-none focus:ring-indigo-600 focus:ring-2 text-sm md:text-lg'
                            value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div className='w-full mb-4 flex flex-col gap-2'>
                        <label htmlFor="" className='px-3 text-sm md:text-lg'>Password</label>
                        <input type="password" placeholder='Enter Password' className='border-b-4 border-none p-3 bg-slate-700 rounded-md outline-none focus:ring-indigo-600 focus:ring-2 text-sm md:text-lg'
                            value={password} onChange={(e) => setPassword(e.target.value)} />
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
