import React from "react"
import '../index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear, faBell } from "@fortawesome/free-solid-svg-icons";



const gear = <FontAwesomeIcon icon={faGear} style={{color:'white'}}/>
const bell = <FontAwesomeIcon icon={faBell} style={{color: 'white'}}/>

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
                <div>
                    <div className="icons">
                        {gear}
                        {bell}
                    </div>
                    <img src="https://images.unsplash.com/photo-1619895862022-09114b41f16f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="profile picture" id="profile-picture" />
                </div>
            </div>
            <hr />
        </>
    )
}
