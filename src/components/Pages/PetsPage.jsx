import React from 'react';
import classes from './PetsPage.module.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Pagination from '../Pagination/PaginationSection';

const PetsPage = () => {
    return (
        <div className={classes.petsPageContainer}>
            <Header lightStyles/>
            <div className={classes.content}>
                <Pagination/>
            </div>
            <Footer/>
        </div>
    )
}

export default PetsPage;