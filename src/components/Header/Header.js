import React from 'react'
import styles from './Header.module.css';
import { Link, useMatch } from 'react-router-dom';

function Header() {
    return (
        <div className='Header'>
            <header className='main_header'>
                <ul className={styles.ul}>
                    <li><Link to="/" className={`${styles.a} ${useMatch('/') ? styles.active : ''}`}>Preview</Link></li>
                    <li><Link to="/personalinfo" className={`${styles.a} ${useMatch('/personalinfo') ? styles.active : ''}`}>Edit</Link></li>
                    <li><Link to="/export" className={`${styles.a} ${useMatch('/export') ? styles.active : ''}`}>Export</Link></li>
                </ul>
            </header>
        </div>
    )
}

export default Header