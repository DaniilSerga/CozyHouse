import React, { useState } from 'react';
import classes from './Header.module.css';
import Navbar from './Navbar';
import burger from '../../assets/icons/burgerIcon.svg';
import cross from '../../assets/icons/closeIcon.svg';

const Header = ({lightStyles}) => {
    const [menuActive, showMenu] = useState(false);

    return (
        <div className={classes.headerContainer}>
            <div className={classes.titleContainer}>
                <h1 className={lightStyles ? lightStyles.titleLight : classes.titleDark}>Cozy House</h1>
                <h2 className={lightStyles ? lightStyles.subtitleLight : classes.subtitleDark}>Shelter for pets in Boston</h2>
            </div>
            <Navbar menuActive={menuActive} lightStyles={lightStyles}/>
            <div onClick={() => showMenu(!menuActive)} className={classes.menuButtonSection}>
                { menuActive ?
                    <img className={classes.closeImg} src={cross} alt='close menu'/> :
                    <img src={burger} alt='menu'/>
                }
            </div>
        </div>
    )
}

export default Header;