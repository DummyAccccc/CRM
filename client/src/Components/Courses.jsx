import React from 'react'
import CourseCard from './CourseCard'

const Courses = () => {
    return (
        <>
            <h1 className='text-start text-2xl p-4 '>Courses</h1>
            <div className='flex w-full px-6 py-4 gap-4'>
                <CourseCard />
                <CourseCard />
                <CourseCard />
            </div>
            <div className='flex w-full px-6 py-4 gap-4'>
                <CourseCard />
                <CourseCard />
                <CourseCard />
            </div>
        </>
    )
}

export default Courses
