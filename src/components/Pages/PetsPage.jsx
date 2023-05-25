import React, { useEffect } from 'react';
import classes from './PetsPage.module.scss';
import Pagination from '../Pagination/PaginationSection';
import { useOutletContext } from 'react-router-dom';

const PetsPage = () => {
    const [, setIsLight] = useOutletContext();

    useEffect(() => {
        setIsLight(true);
    })

    return (
        <>
            <section className={classes.content}>
                <Pagination/>
            </section>
        </>
    )
}

export default PetsPage;