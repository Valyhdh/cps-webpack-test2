
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

Swiper.use([ Navigation, Pagination])

window.addEventListener('DOMContentLoaded', () => {

    const resizableSwiper1 = (breakpoint, swiperClass, swiperSettings, callback) => {
        let swiper;

        breakpoint = window.matchMedia(breakpoint);

        const enableSwiper = function (className, settings) {
            swiper = new Swiper(className, settings);

            if (callback) {
                callback(swiper);
            }
        }

        const checker = function () {
            if (breakpoint.matches) {
                return enableSwiper(swiperClass, swiperSettings);
            } else {
                if (swiper !== undefined) swiper.destroy(true, true);
                return;
            }
        };

        breakpoint.addEventListener('change', checker);
        checker();
    }

    const someFunc = (instance) => {
        if (instance) {
            instance.lifespan('slideChange', function (e) {
                
            });
        }
    };

    resizableSwiper1(
        '(max-width: 767px)',
        '.swiper-brend',
        {
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                320: {
                    slidesPerView: 1.2,
                },
                350: {
                    slidesPerView: 1.3,
                },
                380: {
                    slidesPerView: 1.4,
                },
                410: {
                    slidesPerView: 1.5,
                },
                440: {
                    slidesPerView: 1.6,
                },
                470: {
                    slidesPerView: 1.7,
                },
                500: {
                    slidesPerView: 1.9,
                },
                530: {
                    slidesPerView: 2.0,
                },
                560: {
                    slidesPerView: 2.1,
                },
                590: {
                    slidesPerView: 2.2,
                },
                610: {
                    slidesPerView: 2.3,
                },
                640: {
                    slidesPerView: 2.4,
                },
                670: {
                    slidesPerView: 2.5,
                },
                700: {
                    slidesPerView: 2.6,
                },
                730: {
                    slidesPerView: 2.7,
                },
                760: {
                    slidesPerView: 2.8,
                },

            },
            slidesOffsetAfter: 75,
            spaceBerween: 20,
        },
        someFunc
    );
});


window.addEventListener('DOMContentLoaded', () => {

    const resizableSwiper2 = (breakpoint, swiperClass, swiperSettings, callback) => {
        let swiper;

        breakpoint = window.matchMedia(breakpoint);

        const enableSwiper = function (className, settings) {
            swiper = new Swiper(className, settings);

            if (callback) {
                callback(swiper);
            }
        }

        const checker = function () {
            if (breakpoint.matches) {
                return enableSwiper(swiperClass, swiperSettings);
            } else {
                if (swiper !== undefined) swiper.destroy(true, true);
                return;
            }
        };

        breakpoint.addEventListener('change', checker);
        checker();
    }

    const someFunc = (instance) => {
        if (instance) {
            instance.lifespan('slideChange', function (e) {
                
            });
        }
    };

    resizableSwiper2(
        '(max-width: 767px)',
        '.swiper-technic',
        {
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                320: {
                    slidesPerView: 1.2,
                },
                350: {
                    slidesPerView: 1.3,
                },
                380: {
                    slidesPerView: 1.4,
                },
                410: {
                    slidesPerView: 1.5,
                },
                440: {
                    slidesPerView: 1.6,
                },
                470: {
                    slidesPerView: 1.7,
                },
                500: {
                    slidesPerView: 1.9,
                },
                530: {
                    slidesPerView: 2.0,
                },
                560: {
                    slidesPerView: 2.1,
                },
                590: {
                    slidesPerView: 2.2,
                },
                610: {
                    slidesPerView: 2.3,
                },
                640: {
                    slidesPerView: 2.4,
                },
                670: {
                    slidesPerView: 2.5,
                },
                700: {
                    slidesPerView: 2.6,
                },
                730: {
                    slidesPerView: 2.7,
                },
                760: {
                    slidesPerView: 2.8,
                },

            },
            slidesOffsetAfter: 75,
            spaceBerween: 20,
        },
        someFunc
    );
});

window.addEventListener('DOMContentLoaded', () => {

    const resizableSwiper3 = (breakpoint, swiperClass, swiperSettings, callback) => {
        let swiper;

        breakpoint = window.matchMedia(breakpoint);

        const enableSwiper = function (className, settings) {
            swiper = new Swiper(className, settings);

            if (callback) {
                callback(swiper);
            }
        }

        const checker = function () {
            if (breakpoint.matches) {
                return enableSwiper(swiperClass, swiperSettings);
            } else {
                if (swiper !== undefined) swiper.destroy(true, true);
                return;
            }
        };

        breakpoint.addEventListener('change', checker);
        checker();
    }

    const someFunc = (instance) => {
        if (instance) {
            instance.lifespan('slideChange', function (e) {
                
            });
        }
    };

    resizableSwiper3(
        '(max-width: 767px)',
        '.swiper-price',
        {
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                320: {
                    slidesPerView: 1.2,
                },
                350: {
                    slidesPerView: 1.3,
                },
                380: {
                    slidesPerView: 1.4,
                },
                410: {
                    slidesPerView: 1.5,
                },
                440: {
                    slidesPerView: 1.6,
                },
                470: {
                    slidesPerView: 1.7,
                },
                500: {
                    slidesPerView: 1.9,
                },
                530: {
                    slidesPerView: 2.0,
                },
                560: {
                    slidesPerView: 2.1,
                },
                590: {
                    slidesPerView: 2.2,
                },
                610: {
                    slidesPerView: 2.3,
                },
                640: {
                    slidesPerView: 2.4,
                },
                670: {
                    slidesPerView: 2.5,
                },
                700: {
                    slidesPerView: 2.6,
                },
                730: {
                    slidesPerView: 2.7,
                },
                760: {
                    slidesPerView: 2.8,
                },

            },
            slidesOffsetAfter: 75,
            spaceBerween: 20,
        },
        someFunc
    );
});

