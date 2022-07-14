import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.png';

function Header() {
    return ( 
        <div className="header">
            <Link exacte to="/"><img className="logo" src={logo} alt="Logo" /></Link>
            <h1 className="title">
                Welcome to our identity confirmation website!
            </h1>
        </div>
     );
}

export default Header;