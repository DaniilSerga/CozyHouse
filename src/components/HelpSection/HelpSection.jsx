import React from 'react';
import classes from './HelpSection.module.scss';
import helpList from '../../constants/helpList';

const HelpSection = () => {
    return (
        <section className={classes.helpSectionContainer}>
            <h3 className={classes.title}>How you can help our shelter</h3>

            <div className={classes.helpList}>
                {
                    helpList.map(helpItem => {
                        return (
                            <figure className={classes.helpItem} key={helpItem.id}>
                                <div className={classes.iconContainer}>
                                    <img src={helpItem.img} alt={helpItem.description}/>
                                </div>
                                <figcaption>{helpItem.description}</figcaption>
                            </figure>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default HelpSection;