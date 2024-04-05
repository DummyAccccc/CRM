import React from 'react'
import DNavbar from './DNavbar'
import DSidebar from './DSidebar'
import { useLocation } from 'react-router-dom';
import Courses from './Courses';


const Dashboard = () => {
    const location = useLocation();

    const data = location.state
    return (
        <>
            <DNavbar role={data} />
            <Courses />

           

        </>
    )
}

export default Dashboard
