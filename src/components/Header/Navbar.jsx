import React from 'react';
import classes from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return(
        <div className={classes.navbarContainer}>
            <NavLink className={({isActive}) => isActive ? classes.activeLink : classes.link} to={'/'}>About the shelter</NavLink> 
            <NavLink className={({isActive}) => isActive ? classes.activeLink : classes.link} to={'/pets'}>Our pets</NavLink> 
            <NavLink className={({isActive}) => isActive ? classes.activeLink : classes.link} to={'/help'}>Help the shelter</NavLink> 
            <NavLink className={({isActive}) => isActive ? classes.activeLink : classes.link} to={'/contacts'}>Contacts</NavLink> 
        </div>
    )
}

export default Navbar;