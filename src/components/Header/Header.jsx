import React from 'react';
import classes from './Header.module.css';
import Navbar from './Navbar';

const Header = (isLightMode) => {
    return (
        <div className={classes.headerContainer}>
            <div className={classes.titleContainer}>
                <h1 className={classes.titleDark}>Cozy House</h1>
                <h2 className={classes.subtitleDark}>Shelter for pets in Boston</h2>
            </div>
            <Navbar/>
        </div>
    )
}

export default Header;