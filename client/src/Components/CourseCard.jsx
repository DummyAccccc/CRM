import React from 'react'

const CourseCard = (props) => {
    const cardData = props.data
    const assign = props.assign

    return (
        <div className="card card-compact w-full bg-base-100 shadow-xl">
            {/* <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure> */}
            <div className="card-body">
                <h2 className="card-title text-3xl">{cardData.title}</h2>
                <p className='text-md'>{cardData.desc}</p>
                <div className="divider"></div>

                <p className='text-md'><span className="font-bold text-md">Prerequisites</span>: {cardData.pre}</p>
                <p className='text-md'><span className="font-bold text-md">Enrollment Criteria:</span> {cardData.criteria}</p>
                {assign.map((val) => {
                    if (cardData.title == val.course) {
                        return <p className='text-md'><span className="font-bold text-md"></span> Instructor: {val.name} </p>
                        return;
                    }
                })}
                <div className="card-actions justify-end">
                    <button className="btn btn-success px-4 rounded-lg">Edit</button>
                    <button className="btn btn-error px-4 rounded-lg">Delete</button>
                </div>
            </div>
        </div>
    )
}

export default CourseCard
