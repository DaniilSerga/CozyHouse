import React, { useEffect } from "react";
import classes from './PageNotFound.module.scss';
import { Link, useOutletContext } from "react-router-dom";
import dogPicture from '../../assets/images/donationDog.webp';

const PageNotFound = () => {
    const [, setIsLight] = useOutletContext();

    useEffect(() => {
        setIsLight(true);
    })

    return (
        <section className={classes.pageContainer}>
            <img src={dogPicture} alt='error page'/>
            <h3 className={classes.header}>Oops, something went wrong</h3>
            <div className={classes.linkContainer}>
                <Link className={classes.link} to={'/CozyHouse/'}>Go back</Link>
            </div>
        </section>
    )
}

export default PageNotFound;