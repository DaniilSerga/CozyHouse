import React, { useEffect, useState } from 'react';
import classes from './Navbar.module.scss';
import { NavLink } from 'react-router-dom';

const Navbar = ({lightStyles, menuActive, setMenuActive}) => {
    const [style, setStyle] = useState(classes.navbarContainerDark);

    useEffect(() => {
        if (menuActive) {
            setStyle(
                lightStyles ? 
                [classes.navbarContainerLight, classes.menuMobileLight].join(' ') :
                [classes.navbarContainerDark, classes.menuMobileDark].join(' ')
            )
        } else {
            setStyle(
                lightStyles ?
                    classes.navbarContainerLight :
                    classes.navbarContainerDark
            )
        }
    }, [menuActive, lightStyles])

    return(
        <nav className={style}>
            <NavLink 
                to={'/CozyHouse/'} 
                onClick={() => setMenuActive(!menuActive)}
                className={({isActive}) => isActive ? classes.activeLink : classes.link}>
                    About the shelter
            </NavLink> 
            <NavLink 
                to={'/CozyHouse/pets'} 
                onClick={() => setMenuActive(!menuActive)}
                className={({isActive}) => isActive ? classes.activeLink : classes.link}>
                    Our pets
            </NavLink> 
            <NavLink 
                to={'/CozyHouse/help'} 
                onClick={() => setMenuActive(!menuActive)}
                className={({isActive}) => isActive ? classes.activeLink : classes.link}>
                    Help the shelter
            </NavLink> 
            <NavLink 
                to={'/CozyHouse/contacts'} 
                onClick={() => setMenuActive(!menuActive)}
                className={({isActive}) => isActive ? classes.activeLink : classes.link}>
                    Contacts
            </NavLink> 
        </nav>
    )
}

export default Navbar;