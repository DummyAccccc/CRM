import React, { useEffect, useState } from 'react'
import CourseCard from './CourseCard'
import { Link } from 'react-router-dom'

const Courses = () => {

    const [courses, setCourses] = useState([]);
    const [assignInstructor, setAssignInstructor] = useState([]);
    useEffect(() => {

        fetchData()
        fetchAssign()

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

    const fetchAssign = async () => {
        try {
            const response = await fetch('http://localhost:3001/fetchassign'); // Assuming your backend is running on the same host
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            await setAssignInstructor(data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>

            <div className='w-full bg-slate-800 flex items-center flex-col justify-center'>

                <h1 className='text-start text-3xl p-4 flex justify-between w-full px-10'>
                    <p>Courses</p>
                    <button className='btn btn-success rounded-lg text-lg'>
                        <Link to="/dashboard/newcourse">Add + </Link>
                    </button>
                </h1>

                <div className='w-full grid grid-cols-1 lg:grid-cols-3 px-8 py-4 gap-4'>
                    {courses.map((val, index) => {
                        return <CourseCard data={val} assign={assignInstructor} key={index} />
                    })}

                </div>

            </div>
            {/* <div className="divider"></div> */}

        </>
    )
}

export default Courses
