const SETTINGS = {
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

export default SETTINGS;