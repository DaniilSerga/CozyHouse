import React, { useEffect, useState } from 'react';
import classes from './PetsPageCarousel.module.css';
import petsList from '../../constants/petsList';
import Slider from 'react-slick';
import { Pagination, PaginationItem } from '@mui/material';
import PetCard from '../Cards/PetCard';

const PetsPageCarousel = () => {
    const [pagesAmn, setPagesAmn] = useState(0);
    const [page, setPage] = useState(1);
    const [pets, setPets] = useState([]);
    const [itemsPerPage, setItemsPerPage] = useState(2);

    // TODO Refactoring and optimization required
    useEffect(() => {
        window.addEventListener('resize', () => {
            setItemsPerPage(getItemsPerPage(window.innerWidth));
        });
    }, [])

    useEffect(() => {
        setPage(1);
        setPagesAmn(Math.ceil(petsList.length / itemsPerPage));
        setPets(getCurrentData());
    }, [itemsPerPage])

    useEffect(() => {
        setPets(getCurrentData());
    }, [page])

    const getCurrentData = () => {
        const start = (page - 1) * itemsPerPage;
        const end = start + itemsPerPage;

        return petsList.slice(start, end);
    }

    const getItemsPerPage = (width) => {
        if (width >= 1200) {
            return 8;
        } else if (width >= 900) {
            return 6;
        } else {
            return 3;
        }
    }

    return (
        <div className={classes.carouselSectionContainer}>
            <h3 className={classes.title}>Our friends who <br/> are looking for a house</h3>
            <div className={classes.cardsContainer}>
                {
                    pets.map(pet => {
                        return (
                            <div className={classes.cardWrapper} key={pet.id}>
                                <PetCard pet={pet}/>
                            </div>
                        )
                    })
                }
            </div>
            
            <Pagination 
                count={pagesAmn}
                page={page}
                showLastButton={true}
                showFirstButton={true}
                onChange={(_, pageNum) => setPage(pageNum)}
                />
        </div>
    )
}

export default PetsPageCarousel;