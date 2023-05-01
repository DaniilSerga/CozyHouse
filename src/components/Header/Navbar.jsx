import React, { useEffect, useState } from 'react';
import classes from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = ({lightStyles, menuActive}) => {
    const [style, setStyle] = useState(classes.navbarContainerDark);
    
    useEffect(() => {
        if (menuActive) {
            setStyle(
                lightStyles ? 
                [lightStyles.navbarContainerLight, classes.menuMobile].join(' ') :
                [classes.navbarContainerDark, classes.menuMobile].join(' ')
            )
        } else {
            setStyle(
                lightStyles ?
                    lightStyles.navbarContainerLight :
                    classes.navbarContainerDark
            )
        }
    }, [menuActive])

    return(
        <div className={style}>
            <NavLink className={({isActive}) => isActive ? classes.activeLink : classes.link} to={'/CozyHouse/'}>About the shelter</NavLink> 
            <NavLink className={({isActive}) => isActive ? classes.activeLink : classes.link} to={'/CozyHouse/pets'}>Our pets</NavLink> 
            <NavLink className={({isActive}) => isActive ? classes.activeLink : classes.link} to={'/CozyHouse/help'}>Help the shelter</NavLink> 
            <NavLink className={({isActive}) => isActive ? classes.activeLink : classes.link} to={'/CozyHouse/contacts'}>Contacts</NavLink> 
        </div>
    )
}

export default Navbar;