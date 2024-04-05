import React from 'react'

const Instructor = () => {
    return (
        <>
            <div className='w-full bg-slate-800 flex items-center flex-col justify-center'>

                <h1 className='text-start text-3xl p-4 flex justify-between w-full px-10'>
                    <p>Instructor</p>
                    <button className='btn btn-success rounded-lg text-lg'>Add + </button>
                </h1>

                <div className='flex w-full flex-col md:flex-row px-8 py-4 gap-4'>
                    {/* <CourseCard />
                    <CourseCard />
                    <CourseCard /> */}
                </div>

            </div>

        </>
    )
}

export default Instructor
