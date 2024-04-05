import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const NewCourse = () => {

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [pre, setPre] = useState("");
    const [criteria, setCriteria] = useState("");

    const navigate = useNavigate();


    const NewCourseHandler = async (e) => {
        e.preventDefault();

        const response = await fetch('http://localhost:3001/newcourse', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title, desc, pre, criteria })
        });

        if (response.ok) {
            // Handle success
            console.log('Course Added Successfully');
            navigate('/dashboard')
        } else {
            // Handle error
            console.error('Failed to register user');
        }
    }
    return (
        <>
            <div className='w-full flex items-center justify-center py-4'>
                <div className='w-3/4 md:w-1/2 flex flex-col gap-y-8 px-8 py-8 bg-slate-800 rounded-lg'>
                    <h1 className='text-2xl md:text-4xl font-bold text-white text-center'>Add New Course</h1>

                    <form onSubmit={NewCourseHandler} className='text-xl'>
                        <div className='w-full mb-4 flex flex-col gap-2'>
                            <label htmlFor="" className='px-3 text-sm md:text-lg'>Title</label>
                            <input type="text" placeholder='Enter Course Title' className='border-b-4 border-none p-3 bg-slate-700 rounded-md outline-none focus:ring-indigo-600 focus:ring-2 text-sm md:text-lg' onChange={(e) => setTitle(e.target.value)} value={title} />
                        </div>
                        <div className='w-full mb-4 flex flex-col gap-2'>
                            <label htmlFor="" className='px-3 text-sm md:text-lg'>Description</label>
                            <input type="text" placeholder='Enter Course Description' className='border-b-4 border-none p-3 bg-slate-700 rounded-md outline-none focus:ring-indigo-600 focus:ring-2 text-sm md:text-lg' onChange={(e) => setDesc(e.target.value)} value={desc} />
                        </div>
                        <div className='w-full mb-4 flex flex-col gap-2'>
                            <label htmlFor="" className='px-3 text-sm md:text-lg'>Course Prerequisites</label>
                            <input type="text" placeholder='Enter prerequisites' className='border-b-4 border-none p-3 bg-slate-700 rounded-md outline-none focus:ring-indigo-600 focus:ring-2 text-sm md:text-lg' onChange={(e) => setPre(e.target.value)} value={pre} />
                        </div>
                        <div className='w-full mb-4 flex flex-col gap-2'>
                            <label htmlFor="" className='px-3 text-sm md:text-lg'>Enrollment Criteria</label>
                            <input type="text" placeholder='Enter Enrollment Criteria' className='border-b-4 border-none p-3 bg-slate-700 rounded-md outline-none focus:ring-indigo-600 focus:ring-2 text-sm md:text-lg' onChange={(e) => setCriteria(e.target.value)} value={criteria} />
                        </div>
                        <div className='w-full my-6 flex flex-col gap-2'>
                            <button className='bg-indigo-600 p-3 rounded-md text-white text-md md:text-lg'>Add Course </button>
                        </div>
                    </form>
                </div>
            </div></>
    )
}

export default NewCourse
