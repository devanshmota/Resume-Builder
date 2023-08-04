import React from 'react'
import './Header.css';
import { Link, useMatch } from 'react-router-dom';

function Header() {
    return (
        <div className='Header'>
            <header className='main_header'>
                <ul>
                    <li><Link to="/" className={useMatch('/') ? 'active' : ''}>Preview</Link></li>
                    <li><Link to="/personalinfo">Edit</Link></li>
                    <li><Link to="/export" className={useMatch('/export') ? 'active' : ''}>Export</Link></li>
                </ul>
            </header>
        </div>
    )
}

export default Header