import React from 'react';
import classes from './StartPage.module.css';
import StartSection from './StartSection/StartSection';
import AboutSection from './AboutSection/AboutSection';
import PetsSection from './PetsSection/PetsSection';
import HelpSection from './HelpSection/HelpSection';
import DonationSection from './DonationSection/DonationSection';
import Header from './Header/Header';

const StartPage = () => {
    return (
        <div className={classes.startPageContainer}>
            <StartSection/>
            <AboutSection/>
            <PetsSection/>
            <HelpSection/>
            <DonationSection/>
        </div>
    )
}

export default StartPage;