import React, { useState } from 'react';
import classes from './Header.module.scss';
import Navbar from './Navbar';
import burgerDark from '../../assets/icons/burgerIconDark.svg';
import burgerLight from '../../assets/icons/burgerIconLight.svg';
import crossDark from '../../assets/icons/closeIconDark.svg'
import crossLight from '../../assets/icons/closeIconLight.svg'
import { Link } from 'react-router-dom';

const Header = ({ lightStyles }) => {
    const [menuActive, setMenuActive] = useState(false);

    return (
        <header className={lightStyles ? classes.headerContainerLight : classes.headerContainerDark}>
            <Link to={'/CozyHouse/'} className={classes.titleContainer}>
                <h2 className={lightStyles ? classes.titleLight : classes.titleDark}>Cozy House</h2>
                <h3 className={lightStyles ? classes.subtitleLight : classes.subtitleDark}>Shelter for pets in Boston</h3>
            </Link>
            <Navbar setMenuActive={setMenuActive} menuActive={menuActive} lightStyles={lightStyles} />
            <div onClick={() => setMenuActive(!menuActive)} className={classes.menuButtonSection}>
                { menuActive ?
                    <img className={classes.closeImg} src={lightStyles ? crossDark : crossLight} alt='close menu' /> :
                    <img src={lightStyles ? burgerDark : burgerLight} alt='menu' />
                }
            </div>
        </header>
    )
}

export default Header;