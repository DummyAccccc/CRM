import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const AssignCourse = () => {

    const location = useLocation();
    const data = location.state || {}
    const [name, setName] = useState(data.name);
    const [email, setEmail] = useState(data.email);
    const [selectCourse, setSelectCourse] = useState("");
    const navigate = useNavigate();



    const [courses, setCourses] = useState([]);
    useEffect(() => {

        fetchData()

    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:3001/fetchCourse'); // Assuming your backend is running on the same host
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            await setCourses(data);
        } catch (error) {
            console.error(error);
        }
    };

    const AssignCourseHandler = async (e) => {
        e.preventDefault();

        const response = await fetch('http://localhost:3001/assigncourse', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, selectCourse })
        });

        if (response.ok) {
            // Handle success
            console.log('Course Assigned Successfully');
            navigate('/dashboard')
        } else {
            // Handle error
            console.error('Failed to register user');
        }
    }
    return (
        <>
            <div className='w-full flex items-center justify-center py-10'>
                <div className='w-3/4 md:w-1/2 flex flex-col gap-y-8 px-8 py-8 bg-slate-800 rounded-lg'>
                    <h1 className='text-2xl md:text-4xl font-bold text-white text-center'>Assign Course To instructor</h1>

                    <form onSubmit={AssignCourseHandler} className='text-xl'>
                        <div className='w-full mb-4 flex flex-col gap-2'>
                            <label htmlFor="" className='px-3 text-sm md:text-lg'>Instructor Name</label>
                            <input type="text" placeholder='Enter Course Title' className='border-b-4 border-none p-3 bg-slate-700 rounded-md outline-none focus:ring-indigo-600 focus:ring-2 text-sm md:text-lg' onChange={(e) => setName(e.target.value)} value={name} readOnly />
                        </div>
                        <div className='w-full mb-4 flex flex-col gap-2'>
                            <label htmlFor="" className='px-3 text-sm md:text-lg'>Email</label>
                            <input type="email" placeholder='Enter Course Description' className='border-b-4 border-none p-3 bg-slate-700 rounded-md outline-none focus:ring-indigo-600 focus:ring-2 text-sm md:text-lg' onChange={(e) => setEmail(e.target.value)} value={email} readOnly />
                        </div>
                        <div className='w-full mb-4 flex flex-col gap-2'>
                            <label htmlFor="" className='px-3 text-sm md:text-lg'>Select Course</label>
                            <select className="select select-bordered w-full bg-slate-700 text-sm md:text-lg" onChange={(e) => setSelectCourse(e.target.value)} value={selectCourse}>
                                <option disabled selected>Select Course </option>
                                {
                                    courses.map((val, i) => {
                                        return <option value={val.title} >{val.title}</option>
                                    })
                                }

                            </select>
                        </div>

                        <div className='w-full my-6 flex flex-col gap-2'>
                            <button className='bg-indigo-600 p-3 rounded-md text-white text-md md:text-lg'>Assign Course </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AssignCourse
