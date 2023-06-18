import React from "react"
import '../index.css'

export default function Navbar(props) {
    return (
        <>
            <div className="navbar">
                <div className="nav-items">
                    <ul>
                        <li className="nav-item" id="title">{props.title}</li>
                        <li className="nav-item">Home</li>
                        <li className="nav-item">About</li>
                        <li className="nav-item">Work</li>
                        <li className="nav-item">Pricing</li>
                        <li className="nav-item" id="blog">Blog</li>
                    </ul>
                </div>
            </div>
            <hr />
        </>
    )
}
