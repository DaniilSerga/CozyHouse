import React from "react";
import classes from './PageNotFound.module.scss';
import { Link } from "react-router-dom";
import dogPicture from '../../assets/images/donationDog.webp';

const PageNotFound = () => {
    return (
        <div className={classes.pageContainer}>
            <img src={dogPicture} alt='error page'/>
            <h3 className={classes.header}>Oops, something went wrong</h3>
            <div className={classes.linkContainer}>
                <Link className={classes.link} to={'/CozyHouse/'}>Go back</Link>
            </div>
        </div>
    )
}

export default PageNotFound;