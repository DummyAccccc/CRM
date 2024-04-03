import React from 'react'
import { Link } from 'react-router-dom'
import Courses from './Courses'

const Sidebar = () => {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                <Courses />
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                    <h1>Models</h1>
                    <li><Link>Courses</Link></li>
                    <li><Link>Instructor</Link></li>
                    <div className="divider"></div>

                    <h1>Features</h1>
                    <li><Link>Student Progress</Link></li>
                    <li><Link>Student Assessment</Link></li>
                    <li><Link>Payments</Link></li>
                    <li><Link>Feedback and Review</Link></li>
                    <div className="divider"></div>

                    <h1>Settings</h1>
                    <li><Link>Profile</Link></li>
                    <li><Link>Setting</Link></li>
                    <li><Link to="/">Logout</Link></li>
                </ul>

            </div>
        </div>
    )
}

export default Sidebar
