import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/products">Products</NavLink>
            <NavLink to="/fragments">FragemnetsDemo</NavLink>
            <NavLink to="/parentComp">ParentComp</NavLink>
        </nav>
    );
};

export default Navbar;