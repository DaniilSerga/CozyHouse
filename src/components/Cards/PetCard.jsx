import React from 'react';
import classes from './PetCard.module.css';

const PetCard = ({pet}) => {
    return (
        <div className={classes.cardContainer}>
            <img src={pet.img} alt='pet'/>
            <p>{pet.name}</p>
            <button className={classes.learnMoreButton}>
                Learn more
            </button>
        </div>
    )
}

export default PetCard;