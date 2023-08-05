import React from 'react'
import styles from './Sidebar.module.css';
import { Link, useMatch } from 'react-router-dom'

function Sidebar() {
    return (
        <div className='sidebar'>
            <ul className={styles.ul}>
                <li>
                    <Link to="/personalinfo" className={`${styles.a} ${useMatch('/personalinfo') ? styles.active : ''}`}>Personal Info</Link>
                </li>
                <li>
                    <Link to="/educationinfo" className={`${styles.a} ${useMatch('/educationinfo') ? styles.active : ''}`}>Education Info</Link>
                </li>
                <li>
                    <Link to="/workexperience" className={`${styles.a} ${useMatch('/workexperience') ? styles.active : ''}`}>Work Experience</Link>
                </li>
                <li>
                    <Link to="/skills" className={`${styles.a} ${useMatch('/skills') ? styles.active : ''}`}>Skills</Link>
                </li>
                <li>
                    <Link to="/projects" className={`${styles.a} ${useMatch('/projects') ? styles.active : ''}`}>Projects</Link>
                </li>
                <li>
                    <Link to="/certification" className={`${styles.a} ${useMatch('/certification') ? styles.active : ''}`}>Certification</Link>
                </li>
                <li>
                    <Link to="/awards" className={`${styles.a} ${useMatch('/awards') ? styles.active : ''}`}>Awards & Achievements</Link>
                </li>
                <li>
                    <Link to="/hobbies" className={`${styles.a} ${useMatch('/hobbies') ? styles.active : ''}`}>Hobbies</Link>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar