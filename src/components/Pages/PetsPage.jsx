import React from 'react';
import classes from './PetsPage.module.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Pagination from '../Pagination/PaginationSection';

const PetsPage = () => {
    return (
        <>
            <Header lightStyles/>
            <section className={classes.content}>
                <Pagination/>
            </section>
            <Footer/>
        </>
    )
}

export default PetsPage;