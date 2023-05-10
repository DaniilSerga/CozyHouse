import React from 'react';
import classes from './Carousel.module.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PetCard from '../Cards/PetCard';

const Carousel = ({petsList}) => {
    const slider = React.useRef(null);

    const settings = {
        className: classes.slickSlider,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
          {
            breakpoint: 1300,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
            }
          },
          {
            breakpoint: 1060,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 720,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

    return (
        <div className={classes.sliderContainer}>
            <button className={classes.prevButton} onClick={() => slider?.current?.slickPrev()}>&larr;</button>
            <Slider ref={slider} {...settings}>
                {
                    petsList.map(pet => {
                        return (
                          <>
                            <div className={classes.listItemWrapper}>
                              <PetCard pet={pet}/>
                            </div>
                          </>
                        )
                    })
                }
            </Slider>
            <button className={classes.nextButton} onClick={() => slider?.current?.slickNext()}>&rarr;</button>
        </div>
    )
}

export default Carousel;