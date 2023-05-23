import React from 'react';
import classes from './Preloader.module.scss';
import loadingIcon from '../../assets/loadingIcon.svg';

const Preloader = () => {
    return (
        <section className={classes.preloaderContainer}>
            <img src={loadingIcon} alt={'loading'}/>
        </section>
    )
}

export default Preloader;