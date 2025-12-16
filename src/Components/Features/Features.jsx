import React, { useEffect, useRef } from 'react';
import './Features.css';

const Features = () => {
    const swiperRef = useRef(null);
    const sliderInstance = useRef(null);

    useEffect(() => {
        let intervalId = null;

        const initSlider = () => {
            // Safety check if component unmounted or already initialized
            if (!swiperRef.current || sliderInstance.current) return;

            if (window.Swiper) {
                console.log('Initializing Features Swiper (v6)');
                try {
                    sliderInstance.current = new window.Swiper(swiperRef.current, {
                        slidesPerView: 2,
                        centeredSlides: true,
                        spaceBetween: 30,
                        loop: true,
                        speed: 1000,
                        observer: true, // Important for React
                        observeParents: true,
                        autoplay: {
                            delay: 2500, // 2-3 seconds as requested
                            disableOnInteraction: false,
                            pauseOnMouseEnter: false, // Continue moving even on hover "atheyy pola move aakanum"
                        },
                        navigation: {
                            nextEl: '.features-carousel-next',
                            prevEl: '.features-carousel-prev',
                        },
                        breakpoints: {
                            0: { slidesPerView: 1 },
                            768: { slidesPerView: 1.5, centeredSlides: true },
                            1200: { slidesPerView: 2, centeredSlides: true }
                        },
                    });
                } catch (error) {
                    console.error("Swiper init error:", error);
                }
            }
        };

        const checkDependencies = () => {
            let attempt = 0;
            const maxAttempts = 50; // 5 seconds

            if (window.Swiper) {
                initSlider();
                return;
            }

            intervalId = setInterval(() => {
                attempt++;
                if (window.Swiper) {
                    clearInterval(intervalId);
                    initSlider();
                } else if (attempt >= maxAttempts) {
                    clearInterval(intervalId);
                    console.error("Swiper not available");
                }
            }, 100);
        };

        checkDependencies();

        return () => {
            if (intervalId) clearInterval(intervalId);
            if (sliderInstance.current) {
                sliderInstance.current.destroy();
                sliderInstance.current = null;
            }
        };
    }, []);

    return (
        <section className="features-one">
            {/* Background removed as requested */}
            <div className="auto-container">

                <div className="sec-title title-anim centered">
                    <div className="sec-title_title">OUR EXPERTISE</div>
                    <h2 className="sec-title_heading">Building & Interiors</h2>
                </div>

                <div className="features-carousel swiper-container" ref={swiperRef}>
                    <div className="swiper-wrapper">

                        {/* Slide 1 - Construction */}
                        <div className="swiper-slide">
                            <div className="feature-block_one">
                                <div className="feature-block_one-inner">
                                    <div className="feature-block_one-image">
                                        <img className="trans-500" src="assets/images/resource/about-context-1.jpg" alt="Building Construction" loading="lazy" />
                                        <div className="feature-block_one-content trans-500">
                                            <ul className="feature-block_one-icon">
                                                <li className="flaticon-residential"></li>
                                            </ul>
                                            <h3 className="feature-block_one-title"><a href="#">Building Construction</a></h3>
                                            <div className="feature-block_one-price">Premium <span>Quality</span></div>
                                            <a className="feature-block_one-arrow trans-500 flaticon-arrow-up" href="#"></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Slide 2 - Interior */}
                        <div className="swiper-slide">
                            <div className="feature-block_one">
                                <div className="feature-block_one-inner">
                                    <div className="feature-block_one-image">
                                        <img className="trans-500" src="assets/images/resource/about-context-2.jpg" alt="Home Interior" loading="lazy" />
                                        <div className="feature-block_one-content trans-500">
                                            <ul className="feature-block_one-icon">
                                                <li className="flaticon-lobby"></li>
                                            </ul>
                                            <h3 className="feature-block_one-title"><a href="#">Home Interior</a></h3>
                                            <div className="feature-block_one-price">Modern <span>Design</span></div>
                                            <a className="feature-block_one-arrow trans-500 flaticon-arrow-up" href="#"></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Slide 3 - Renovation */}
                        <div className="swiper-slide">
                            <div className="feature-block_one">
                                <div className="feature-block_one-inner">
                                    <div className="feature-block_one-image">
                                        <img className="trans-500" src="assets/images/resource/project-1.jpg" alt="Renovation" loading="lazy" />
                                        <div className="feature-block_one-content trans-500">
                                            <ul className="feature-block_one-icon">
                                                <li className="flaticon-residential"></li>
                                            </ul>
                                            <h3 className="feature-block_one-title"><a href="#">Renovation</a></h3>
                                            <div className="feature-block_one-price">Expert <span>Service</span></div>
                                            <a className="feature-block_one-arrow trans-500 flaticon-arrow-up" href="#"></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Slide 4 - Luxury Kitchen */}
                        <div className="swiper-slide">
                            <div className="feature-block_one">
                                <div className="feature-block_one-inner">
                                    <div className="feature-block_one-image">
                                        <img className="trans-500" src="assets/images/resource/service-1.jpg" alt="Modern Kitchen" loading="lazy" />
                                        <div className="feature-block_one-content trans-500">
                                            <ul className="feature-block_one-icon">
                                                <li className="flaticon-cutlery"></li>
                                            </ul>
                                            <h3 className="feature-block_one-title"><a href="#">Modern Kitchen</a></h3>
                                            <div className="feature-block_one-price">Elegant <span>Style</span></div>
                                            <a className="feature-block_one-arrow trans-500 flaticon-arrow-up" href="#"></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Slide 5 - Modern Villa */}
                        <div className="swiper-slide">
                            <div className="feature-block_one">
                                <div className="feature-block_one-inner">
                                    <div className="feature-block_one-image">
                                        <img className="trans-500" src="assets/images/resource/service-2.jpg" alt="Modern Villa" loading="lazy" />
                                        <div className="feature-block_one-content trans-500">
                                            <ul className="feature-block_one-icon">
                                                <li className="flaticon-residential"></li>
                                            </ul>
                                            <h3 className="feature-block_one-title"><a href="#">Luxury Villa</a></h3>
                                            <div className="feature-block_one-price">Dream <span>Home</span></div>
                                            <a className="feature-block_one-arrow trans-500 flaticon-arrow-up" href="#"></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="features-one-arrow">
                        <div className="features-carousel-prev trans-300 fas fa-arrow-left fa-fw"></div>
                        <div className="features-carousel-next trans-300 fas fa-arrow-right fa-fw"></div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Features;
