import React from 'react';
import {Menudata} from '../data'

const Navbar = () => {
    return(
        <nav className='app-navbar'>
            <h1>LOGO</h1>
            <ul className='navbar-items'>
                {Menudata.map((item) => {
                    return(
                        <li>
                            <a href={item.url} className="nav-links">{item.title}</a>
                        </li>
                    )
                })}
            </ul>

        </nav>
    )
};

export default Navbar;