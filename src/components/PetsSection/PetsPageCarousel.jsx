import React from 'react';
import classes from './PetsPageCarousel.module.css';
import petsList from '../../constants/petsList';

const PetsPageCarousel = () => {
    return (
        <div className={classes.carouselSectionContainer}>
            <h3>Our friends who <br/> are looking for a house</h3>
            <div className={classes.carouselContainer}>
                {
                    petsList.map(pet => {
                        return (
                            <div className={classes.listItemContainer}>
                                <img src={pet.img} alt='pet'/>
                                <p>{pet.name}</p>
                                <button className={classes.learnMoreButton}>Learn more</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default PetsPageCarousel;