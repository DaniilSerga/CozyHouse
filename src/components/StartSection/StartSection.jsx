import React from 'react';
import classes from './StartSection.module.scss';
import puppy from '../../assets/images/startPagePuppy.webp';

const StartSection = () => {
    return(
        <section className={classes.startScreenContainer}>
            <div className={classes.contentWrapper}>
                <div className={classes.contentContainer}>
                    <article className={classes.content}>
                        <h3>Not only people need a house</h3>
                        <h1>We offer to give a chance to a little and nice puppy with an extremely wide and open heart. He or she will love you more than anybody else in the world, you will see!</h1>
                        <button>Make a friend</button>
                    </article>
                    <img src={puppy} alt='Start screen puppy'/>
                </div>
            </div>
        </section>
    )
}

export default StartSection;