import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const InstructorTable = (props) => {

    // const [id, setId] = useState("");
    const data = props.data
    const navigate = useNavigate();

    const handleAssign = (data) => {
        navigate('/dashboard/assigncourse', {
            state: {
                name: data.name,
                email: data.email
            }
        })
    }
    return (
        <>
            <div className="overflow-x-auto w-full border-2 border-slate-700 rounded-lg px-4 py-2 bg-slate-700">
                <h1 className='text-2xl py-2'>Instructor Table</h1>
                <table className="table table-zebra text-xl">
                    {/* head */}
                    <thead>
                        <tr className='text-xl'>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((val, i) => {
                            // const id = val._id;
                            // setId(val._id)
                            return <tr>
                                <th>{i + 1}</th>
                                <td>{val.name}</td>
                                <td>{val.email}</td>
                                <td>
                                    <button onClick={() => handleAssign(val)} className='btn btn-primary'>Assign Course</button>
                                </td>
                            </tr>
                        })}


                    </tbody>
                </table>
            </div></>
    )
}

export default InstructorTable
