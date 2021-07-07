import React from 'react';
import {Link ,NavLink } from 'react-router-dom';


const Nav = () => {

    return (
        <div className='navbar'>
            <div className='container'>

                <a href="/" className='logo'>Logo</a>

                <ul className='nav_link'>
                    <NavLink exact to="/">Home</NavLink>
                    <NavLink to="/about">about</NavLink>
                    <NavLink to="/items">items</NavLink>
                    <NavLink to="/blog">Blog</NavLink>
                </ul>
            </div>
        </div>
    )

}

export default Nav