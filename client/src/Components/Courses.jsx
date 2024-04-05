import React from 'react'
import CourseCard from './CourseCard'

const Courses = () => {
    return (
        <>
            <div className='w-full bg-slate-800 flex items-center flex-col justify-center'>

                <h1 className='text-start text-3xl p-4 '>Courses</h1>
                <div className='flex w-full flex-col md:flex-row px-8 py-4 gap-4'>
                    <CourseCard />
                    <CourseCard />
                    <CourseCard />                    
                </div>

            </div>

        </>
    )
}

export default Courses
