import React from 'react';
import classes from './PetsSection.module.css';
import petsList from '../../constants/petsList';
import Carousel from './Carousel';

const PetsSection = () => {
    return(
        <div className={classes.petsSection}>
            <div className={classes.header}>
                <h3>Our friends who <br/> are looking for a house</h3>
            </div>
            <div className={classes.sliderSection}>
                { petsList &&
                    <Carousel petsList={petsList}></Carousel>
                }
            </div>
            <button className={classes.footerButton}>Get to know the rest</button>
        </div>
    )
}

export default PetsSection;