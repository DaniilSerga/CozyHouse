import React, { useRef } from 'react';
import classes from './Navbar.module.css';
import { BrowserRouter, Link, NavLink, Route, Routes } from 'react-router-dom';
import PetsPage from '../OurPetsPage/PetsPage';
import StartPage from '../StartPage';

const Navbar = ({...props}) => {
    return(
        <div className={classes.navbarContainer}>
            <ul className={classes.navMenu}>
                <li> 
                    <div className={classes.linkContainer}>
                        <a href={'/'}>About the shelter</a> 
                    </div>
                </li>
                <li> 
                    <div className={classes.linkContainer}>
                        <a href={'/ourPets'}>Our pets</a> 
                    </div>
                </li>
                <li> 
                    <div className={classes.linkContainer}>
                        <a href='/'>Help the shelter</a> 
                    </div>
                </li>
                <li>
                    <div className={classes.linkContainer}>
                        <a href='/'>Contacts</a> 
                    </div> 
                </li>
            </ul>
        </div>
    )
}

export default Navbar;