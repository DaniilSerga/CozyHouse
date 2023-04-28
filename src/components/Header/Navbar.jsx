import React from 'react';
import classes from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = ({lightStyles}) => {
    return(
        <div className={lightStyles ? lightStyles.navbarContainerLight : classes.navbarContainerDark}>
            <NavLink className={({isActive}) => isActive ? classes.activeLink : classes.link} to={'/CozyHouse/'}>About the shelter</NavLink> 
            <NavLink className={({isActive}) => isActive ? classes.activeLink : classes.link} to={'/CozyHouse/pets'}>Our pets</NavLink> 
            <NavLink className={({isActive}) => isActive ? classes.activeLink : classes.link} to={'/CozyHouse/help'}>Help the shelter</NavLink> 
            <NavLink className={({isActive}) => isActive ? classes.activeLink : classes.link} to={'/CozyHouse/contacts'}>Contacts</NavLink> 
        </div>
    )
}

export default Navbar;