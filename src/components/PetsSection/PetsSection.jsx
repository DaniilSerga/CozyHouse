import React from 'react';
import classes from './PetsSection.module.css';
import petsList from '../../constants/petsList';
import rightArrow from '../../assets/icons/rightArrow.png';

const PetsSection = () => {
    return(
        <div className={classes.petsSection}>
            <div className={classes.header}>
                <h3>Our friends who <br/> are looking for a house</h3>
            </div>
            <div className={classes.sliderSection}>
                <button className={classes.perviousPetButton}>
                    &larr;
                </button>
                <ul className={classes.slider}>
                    {
                        petsList.map(pet => {
                            return (
                                <li className={classes.listItemContainer}>
                                    <img src={pet.img} alt='pet'/>
                                    <p>{pet.name}</p>
                                    <button className={classes.learnMoreButton}>Learn more</button>
                                </li>
                            )
                        })
                    }
                </ul>
                <button className={classes.nextPetButton}>
                    &rarr;
                </button>
            </div>
        </div>
    )
}

export default PetsSection;