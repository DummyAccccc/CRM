import React, { useState } from 'react'
import DNavbar from './DNavbar'
import { useLocation } from 'react-router-dom';
import Courses from './Courses';
import Instructor from './Instructor';
import { useEffect } from 'react';



const Dashboard = () => {
    const [activeUser, setActiveUser] = useState([]);
    const location = useLocation();
    const data = location.state
    data ?
        useEffect(() => {

        }, [data]) : "";
    return (
        <>

            <DNavbar role={activeUser} />
            <Courses />

            <Instructor />

        </>
    )
}

export default Dashboard