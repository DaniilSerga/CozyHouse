import React from 'react';
import classes from './StartSection.module.css';
import Header from '../Header/Header';
import puppy from '../../assets/images/startPagePuppy.webp';

const StartSection = () => {
    return(
        <div className={classes.startScreenContainer}>
            <Header/>
            <div className={classes.contentContainer}>
                <div className={classes.content}>
                    <h3>Not only people need a house</h3>
                    <p>We offer to give a chance to a little and nice puppy with an extremely wide and open heart. He or she will love you more than anybody else in the world, you will see!</p>
                    <button>Make a friend</button>
                </div>
                <img src={puppy} alt='Start screen puppy'/>
            </div>
        </div>
    )
}

export default StartSection;