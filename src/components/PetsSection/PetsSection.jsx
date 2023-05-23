import React from 'react';
import classes from './PetsSection.module.scss';
import petsList from '../../constants/petsList';
import Carousel from './Carousel';
import { Link } from 'react-router-dom';

const PetsSection = () => {
    return(
        <section className={classes.petsSection}>
            <div className={classes.header}>
                <h3 className={classes.title}>Our friends who <br/> are looking for a house</h3>
            </div>
            <div className={classes.sliderSection}>
                { petsList &&
                    <Carousel petsList={petsList}></Carousel>
                }
            </div>
            <Link to={'/CozyHouse/pets'} className={classes.footerButton}>Get to know the rest</Link>
        </section>
    )
}

export default PetsSection;