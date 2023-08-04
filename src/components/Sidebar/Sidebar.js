import React from 'react'
import './Sidebar.css';
import { Link, useMatch } from 'react-router-dom'

function Sidebar() {
    return (
        <div className='sidebar'>
            <ul>
                <li>
                    <Link to="/personalinfo" className={useMatch('/personalinfo') ? 'active' : ''}>Personal Info</Link>
                </li>
                <li>
                    <Link to="/educationinfo" className={useMatch('/educationinfo') ? 'active' : ''}>Education Info</Link>
                </li>
                <li>
                    <Link to="/workexperience" className={useMatch('/workexperience') ? 'active' : ''}>Work Experience</Link>
                </li>
                <li>
                    <Link to="/skills" className={useMatch('/skills') ? 'active' : ''}>Skills</Link>
                </li>
                <li>
                    <Link to="/projects" className={useMatch('/projects') ? 'active' : ''}>Projects</Link>
                </li>
                <li>
                    <Link to="/certification" className={useMatch('/certification') ? 'active' : ''}>Certification</Link>
                </li>
                <li>
                    <Link to="/awards" className={useMatch('/awards') ? 'active' : ''}>Awards & Achievements</Link>
                </li>
                <li>
                    <Link to="/hobbies" className={useMatch('/hobbies') ? 'active' : ''}>Hobbies</Link>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar