// import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <div>
                <img src={logo} alt="" />

            </div>

            <div className='nav-Items'>
                <a href="/Shop">Shop</a>
                <a href="/Orders">Orders</a>
                <a href="/Inventory">Inventory</a>
                <a href="/Login">Login</a>
            </div>

        </div>
    );
};

export default Header;