import React from "react";
import classes from './PageNotFound.module.css';
import { Link } from "react-router-dom";
import dogPicture from '../../assets/images/donation-dog.webp';

const PageNotFound = () => {
    return (
        <div className={classes.pageContainer}>
            <img src={dogPicture} alt='error page'/>
            <h3 className={classes.header}>Oops, something went wrong</h3>
            <Link className={classes.link} to={'/CozyHouse/home'}>Go back</Link>
        </div>
    )
}

export default PageNotFound;