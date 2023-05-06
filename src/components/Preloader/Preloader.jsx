import React from 'react';
import classes from './Preloader.module.css';
import loadingIcon from '../../assets/loadingIcon.svg';

const Preloader = () => {
    return (
        <div className={classes.preloaderContainer}>
            <img src={loadingIcon} alt={'loading'}/>
        </div>
    )
}

export default Preloader;