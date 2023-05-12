import React, { useEffect, useState, useRef } from 'react';
import classes from './PaginationSection.module.css';
import petsList from '../../constants/petsList';
import PetCard from '../Cards/PetCard';
import ReactPaginate from "react-paginate";

const PaginationSection = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(8);
    const [displayedPets, setDisplayedPets] = useState(
        petsList.slice(0, itemsPerPage)
    )

    const [pagesCount, setPagesCount] = useState(
        Math.ceil(petsList.length / itemsPerPage)
    )

    const firstPageButton = useRef(null);
    const lastPageButton = useRef(null);
    const reactPaginateRef = useRef(null);

    useEffect(() => {
        const getItemsPerPageAmount = () => {
            if (window.innerWidth >= 1280) {
                return 8;
            } else if (window.innerWidth >= 640) {
                return 6;
            } else {
                return 3;
            }
        }

        setItemsPerPage(getItemsPerPageAmount());

        window.addEventListener('resize', () => {
            setItemsPerPage(getItemsPerPageAmount())
        })
    }, []);

    useEffect(() => {
        console.log(itemsPerPage);
        setPagesCount(
            Math.ceil(petsList.length / itemsPerPage)
        )

        const startIndex = currentPage * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;

        setDisplayedPets(
            petsList.slice(startIndex, endIndex)
        )
    }, [itemsPerPage])

    useEffect(() => {
        const startIndex = currentPage * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;

        setDisplayedPets(
            petsList.slice(startIndex, endIndex)
        )
    }, [currentPage, itemsPerPage])

    useEffect(() => {
        if (currentPage === 0) {
            firstPageButton.current.className = classes.disabledButton;
        } else {
            firstPageButton.current.className = classes.firstPageButton;
        }
    }, [currentPage]);

    useEffect(() => {
        if (currentPage === pagesCount - 1  ) {
            lastPageButton.current.className = classes.disabledButton;
        } else {
            lastPageButton.current.className = classes.lastPageButton;
        }
    }, [currentPage, pagesCount]);

    const handleGoToFirstPage = () => {
        setCurrentPage(0);
        reactPaginateRef.current?.forcePage(0);
    }

    const handleGoToLastPage = () => {
        setCurrentPage(pagesCount - 1);
        reactPaginateRef.current?.forcePage(pagesCount - 1);
    };

    const handlePageClick = ({ selected: selectedPage }) => {
        setCurrentPage(selectedPage);
    };

    return (
        <div className={classes.carouselContainer}>
            <h3 className={classes.title}>Our friends who <br/> are looking for a house</h3>
            <div className={classes.itemsContainer}>
                {
                    displayedPets.map(pet => {
                        return <PetCard key={pet.id} pet={pet} />
                    })
                }
            </div>

            <div className={classes.paginationWrapper}>
                <button ref={firstPageButton} className={classes.firstPageButton}
                    onClick={handleGoToFirstPage}>
                    {'<<'}
                </button>
                <ReactPaginate
                    className={classes.paginationButtonsWrapper}
                    pageCount={pagesCount}
                    marginPagesDisplayed={0}
                    pageRangeDisplayed={0}
                    onPageChange={handlePageClick}
                    containerClassName={classes.paginationContainer}
                    
                    nextLinkClassName={classes.nextLinkContainer}
                    previousLinkClassName={classes.previousLinkContainer}
                    
                    pageLinkClassName={classes.pageContainer}
                    pageLinkBuilder={(pageNumber) => (
                        <div className={classes.pageContainer}>{pageNumber + 1}</div>
                    )}
                    previousLabel={
                        <button className={classes.prevButton}>
                            {'<'}
                        </button>}
                    nextLabel={
                        <button className={classes.nextButton}>
                            {'>'}
                        </button>}
                    forcePage={currentPage}
                    disabledLinkClassName={classes.disabledLink}
                />
                <button ref={lastPageButton} className={classes.lastPageButton}
                    onClick={handleGoToLastPage}>
                    {'>>'}
                </button>
            </div>
        </div>
    )
}

export default PaginationSection;