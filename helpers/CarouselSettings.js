export const SETTINGS = {
        dots: false,
        speed: 400,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        easing: "ease-out",
        swipe: true,
        touchMove: true,
        swipeToSlide: true,
        draggable: true,
        accessibility: true,
        responsive: [
            {
                breakpoint: 320,
                settings: { slidesToShow: 1 }
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 1 }
            },
            {
                breakpoint: 1024,
                settings: { slidesToShow: 3 }
            }
        ]
    };

