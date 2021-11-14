import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className="sticky-top">
            <div className="container-fluid ">
                <div className="row bg-dark shadow">
                    <ul className="nav">

                        <h4 className="nav-logo text-white py-2">News-Monk</h4>
                        <l1 className="nav-item ml-4">

                            <Link to="/home" className="nav-link  my-1">Home</Link>
                        </l1>
                        <l1 className="nav-item ml-4">
                            <Link to="/About" className="nav-link my-1">About</Link>
                        </l1>
                        <l1 className="nav-item ml-4">
                            <a href="#" className="nav-link my-1">Contact us</a>
                        </l1>
                    </ul>
                </div>
            </div>
        </div>
    )
}
