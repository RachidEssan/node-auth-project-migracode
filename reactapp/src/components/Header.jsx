import React from 'react';
import logo from '../logo.png';

function Header() {
    return ( 
        <div className="header">
            <img className="logo" src={logo} alt="Logo" />
            <h1 className="title">
                Welcome to our identity confirmation website!
            </h1>
        </div>
     );
}

export default Header;