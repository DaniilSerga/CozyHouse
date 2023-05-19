import React from 'react';
import classes from './Carousel.module.scss';
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
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 4000,
        swipeToSlide: true,
        slidesToShow: 3,
        pauseOnHover: true,
        responsive: [
          {
            breakpoint: 1060,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
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
                          <div key={pet.id}>
                            <div key={pet.id} className={classes.listItemWrapper}>
                              <PetCard pet={pet}/>
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

export default Carousel;