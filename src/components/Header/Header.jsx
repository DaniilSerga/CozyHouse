import React from 'react';
import classes from './Header.module.css';
import Navbar from './Navbar';

const Header = ({lightStyles}) => {
    return (
        <div className={classes.headerContainer}>
            <div className={classes.titleContainer}>
                <h1 className={lightStyles ? lightStyles.titleLight : classes.titleDark}>Cozy House</h1>
                <h2 className={lightStyles ? lightStyles.subtitleLight : classes.subtitleDark}>Shelter for pets in Boston</h2>
            </div>
            <Navbar lightStyles={lightStyles}/>
        </div>
    )
}

export default Header;