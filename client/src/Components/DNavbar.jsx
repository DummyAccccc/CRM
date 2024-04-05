import React from 'react'

const DNavbar = (props) => {
    return (

        <div className="navbar bg-base-100">
            <div className="flex-1 hidden lg:block">
                <a className="btn btn-ghost text-xl">{props.role.role} Dashboard</a>
            </div>
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">Welcome {props.role.company}</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Courses</a></li>
                    <li><a>Instructor</a></li>
                    <li><a>Students</a></li>
                    <li><a>Payments</a></li>
                    <li>
                        <details>
                            <summary>
                                Profile
                            </summary>
                            <ul className="p-2 bg-base-100 rounded-t-none">
                                <li><a>Settings</a></li>
                                <li><a>Logout</a></li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default DNavbar
