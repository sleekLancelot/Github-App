import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ title, icon }) => {
    return (
        <nav className='navbar bg-dark'>
            <i className={icon}></i>
            <h1>
                {title}
            </h1>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
            </ul>
        </nav>
    );
}

Navbar.defaultProps = {
    title: 'GitHub Finder',
    icon: 'fab fa-github-square fa-4x'
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}

export default Navbar;
