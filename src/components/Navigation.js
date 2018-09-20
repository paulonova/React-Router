import React from 'react'
import {NavLink} from 'react-router-dom'
import '../App.css';

const Navigation = () =>{
    
    return (
        <div className="links">
            <NavLink className="link" to="/">Home</NavLink>
            <NavLink className="link" to="/about">About</NavLink>
            <NavLink className="link" to="/contact">Contact</NavLink>
        </div>
    );
};

export default Navigation;