import React, { useEffect, useState } from 'react';
import classes from './Carousel.module.scss';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PetCard from '../Cards/PetCard';
import arrowIcon from '../../assets/icons/arrow.svg';
import sliderSettings from '../../constants/sliderSettings';

const Carousel = ({ petsList }) => {
    const slider = React.useRef(null);

    const [settings, setSettings] = useState();

    useEffect(() => {
        sliderSettings.className = classes.slickSlider;
        setSettings(sliderSettings);
    }, [])

    return (
        <div className={classes.sliderContainer}>
            <button className={classes.prevButton} onClick={() => slider?.current?.slickPrev()}>
                <img src={arrowIcon} alt='arrow back' />
            </button>

            { settings &&
                <Slider ref={slider} {...sliderSettings}>
                    {
                        petsList.map(pet => {
                            return (
                                <div key={pet.id}>
                                    <div key={pet.id} className={classes.listItemWrapper}>
                                        <PetCard pet={pet} />
                                    </div>
                                </div>
                            )
                        })
                    }
                </Slider>
            }

            <button className={classes.nextButton} onClick={() => slider?.current?.slickNext()}>
                <img src={arrowIcon} alt='arrow next' />
            </button>
        </div>
    )
}

export default Carousel;