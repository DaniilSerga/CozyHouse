import React, { useState, useEffect, useMemo } from 'react';
import classes from './Carousel.module.css';
import petsList from '../../constants/petsList';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = ({petsList}) => {
    const slider = React.useRef(null);

    const settings = {
        className: classes.slickSlider,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
            }
          },
          {
            breakpoint: 1120,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 800,
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
                          <div className={classes.listItemWrapper}>
                            <div className={classes.listItemContainer}>
                                <img src={pet.img} alt='pet'/>
                                <p>{pet.name}</p>
                                <button className={classes.learnMoreButton}>Learn more</button>
                            </div>
                          </div>
                        )
                    })
                }
            </Slider>
            <button className={classes.nextButton} onClick={() => slider?.current?.slickNext()}>&rarr;</button>
        </div>
    )
}

const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <button
        className={classes.nextButton}
        onClick={onClick}
      >
        &rarr;
      </button>
    );
  }
  
const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <button
      className={classes.prevButton}
      onClick={onClick}
    >
        &larr;
    </button>
  );
}

export default Carousel;