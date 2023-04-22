import React from 'react';
import classes from './Navbar.module.css';

const Navbar = () => {
    return(
        <div className={classes.navbarContainer}>
            <ul className={classes.navMenu}>
                <li> 
                    <div className={classes.linkContainer}>
                        <a href=''>About the shelter</a> 
                    </div>
                </li>
                <li> 
                    <div className={classes.linkContainer}>
                        <a href=''>Our pets</a> 
                    </div>
                </li>
                <li> 
                    <div className={classes.linkContainer}>
                        <a href=''>Help the shelter</a> 
                    </div>
                </li>
                <li>
                    <div className={classes.linkContainer}>
                        <a href=''>Contacts</a> 
                    </div> 
                </li>
            </ul>
        </div>
    )
}

export default Navbar;