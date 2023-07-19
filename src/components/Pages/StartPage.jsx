import React, { useEffect } from 'react';
import StartSection from '../StartSection/StartSection';
import AboutSection from '../AboutSection/AboutSection';
import PetsSection from '../PetsSection/PetsSection';
import HelpSection from '../HelpSection/HelpSection';
import DonationSection from '../DonationSection/DonationSection';
import { useOutletContext } from 'react-router-dom';

const StartPage = () => {
    const [, setIsLight] = useOutletContext();

    useEffect(() => {
        setIsLight(false);
    })

    return (
        <>
            <StartSection />
            <AboutSection />
            <PetsSection />
            <HelpSection />
            <DonationSection />
        </>
    )
}

export default StartPage;