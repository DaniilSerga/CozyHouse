import React, { useState } from 'react';
import classes from './Header.module.css';
import Navbar from './Navbar';
import burgerDark from '../../assets/icons/burgerIconDark.svg';
import burgerLight from '../../assets/icons/burgerIconLight.svg';
import crossDark from '../../assets/icons/closeIconDark.svg'
import crossLight from '../../assets/icons/closeIconLight.svg'

const Header = ({ lightStyles }) => {
    const [menuActive, showMenu] = useState(false);

    return (
        <div className={lightStyles ? classes.headerWrapperLight : classes.headerWrapperDark}>
            <header className={lightStyles ? classes.headerContainerLight : classes.headerContainerDark}>
                <div className={classes.titleContainer}>
                    <h1 className={lightStyles ? classes.titleLight : classes.titleDark}>Cozy House</h1>
                    <h2 className={lightStyles ? classes.subtitleLight : classes.subtitleDark}>Shelter for pets in Boston</h2>
                </div>
                <Navbar menuActive={menuActive} lightStyles={lightStyles} />
                <div onClick={() => showMenu(!menuActive)} className={classes.menuButtonSection}>
                    {menuActive ?
                        <img className={classes.closeImg} src={lightStyles ? crossDark : crossLight} alt='close menu' /> :
                        <img src={lightStyles ? burgerDark : burgerLight} alt='menu' />
                    }
                </div>
            </header>
        </div>
    )
}

export default Header;