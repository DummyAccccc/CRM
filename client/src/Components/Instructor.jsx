import React, { useEffect, useState } from 'react'
import InstructorTable from './InstructorTable';

const Instructor = () => {

    const [instructors, setInstructors] = useState([]);
    useEffect(() => {

        fetchData()

    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:3001/fetchinstructor'); // Assuming your backend is running on the same host
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            await setInstructors(data);
            console.log(data)
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <div className='w-full bg-slate-800 flex items-center flex-col justify-center'>

                <h1 className='text-start text-3xl p-4 flex justify-between w-full px-10'>
                    <p>Instructor</p>
                    {/* <button className='btn btn-success rounded-lg text-lg'>Add + </button> */}
                </h1>

                <div className='flex w-full flex-col md:flex-row px-8 py-4 gap-4'>
                    <InstructorTable data={instructors} />
                </div>

            </div>

        </>
    )
}

export default Instructor
