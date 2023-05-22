import React from 'react';
import classes from './Carousel.module.scss';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PetCard from '../Cards/PetCard';
import arrowIcon from '../../assets/icons/arrow.svg';

const Carousel = ({petsList}) => {
    const slider = React.useRef(null);

    const settings = {
        className: classes.slickSlider,
        dots: false,
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 4000,
        swipeToSlide: true,
        slidesToShow: 4,
        pauseOnHover: true,
        responsive: [
          {
            breakpoint: 1380,
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 1060,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
            }
          }
        ]
      };

    return (
        <div className={classes.sliderContainer}>
            <button className={classes.prevButton} onClick={() => slider?.current?.slickPrev()}>
              <img src={arrowIcon} alt='arrow back'/>
            </button>
            <Slider ref={slider} {...settings}>
                {
                    petsList.map(pet => {
                        return (
                          <div key={pet.id}>
                            <div key={pet.id} className={classes.listItemWrapper}>
                              <PetCard pet={pet}/>
                            </div>
                          </div>
                        )
                    })
                }
            </Slider>
            <button className={classes.nextButton} onClick={() => slider?.current?.slickNext()}>
              <img src={arrowIcon} alt='arrow next'/>
            </button>
        </div>
    )
}

export default Carousel;