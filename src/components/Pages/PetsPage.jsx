import React from 'react';
import classes from './PetsPage.module.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import PetsPageCarousel from '../PetsSection/PaginationSection';

const PetsPage = () => {
    return (
        <div className={classes.petsPageContainer}>
            <Header lightStyles={true}/>
            <div className={classes.content}>
                <PetsPageCarousel/>
            </div>
            <Footer/>
        </div>
    )
}

export default PetsPage;