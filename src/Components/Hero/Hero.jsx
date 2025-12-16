import React, { useEffect, useRef } from 'react';
import './Hero.css';

const Hero = () => {
    const swiperRef = useRef(null);
    const sliderInstance = useRef(null);

    useEffect(() => {
        let intervalId = null;

        // Function to initialize Swiper
        const initSlider = () => {
            if (window.Swiper && swiperRef.current && !sliderInstance.current) {
                console.log("Initializing Swiper...");
                sliderInstance.current = new window.Swiper(swiperRef.current, {
                    slidesPerView: 1,
                    spaceBetween: 0,
                    effect: 'fade', // Often used in hero sliders
                    fadeEffect: {
                        crossFade: true
                    },
                    loop: true,
                    autoplay: {
                        delay: 6000,
                        disableOnInteraction: false,
                    },
                    navigation: {
                        nextEl: '.main-slider-next',
                        prevEl: '.main-slider-prev',
                    },
                    pagination: {
                        el: ".slider-one_pagination",
                        clickable: true,
                        renderBullet: function (index, className) {
                            let formattedIndex = (index + 1).toString().padStart(2, '0');
                            return '<span class="' + className + '">' + formattedIndex + "</span>";
                        },
                    },
                    speed: 1500,
                    breakpoints: {
                        1600: { slidesPerView: 1 },
                        1200: { slidesPerView: 1 },
                        992: { slidesPerView: 1 },
                        768: { slidesPerView: 1 },
                        576: { slidesPerView: 1 },
                        0: { slidesPerView: 1 },
                    },
                    on: {
                        init: function () {
                            console.log("Swiper initialized!");
                        },
                    }
                });
            }
        };

        // Function to initialize Animations
        const initAnimations = () => {
            const container = swiperRef.current;
            if (window.gsap && container) {
                const elements = container.querySelectorAll(".up-down_animation");

                elements.forEach(el => {
                    el.style.opacity = 1; // Start visible just in case

                    if (window.SplitText) {
                        window.gsap.killTweensOf(el);

                        let mySplitText = new window.SplitText(el, { type: "chars" });
                        let chars = mySplitText.chars;

                        let endTl = window.gsap.timeline({
                            repeat: -1,
                            repeatDelay: 0.5,
                            yoyo: true
                        });

                        endTl.from(chars, {
                            duration: 0.5,
                            scaleY: 0,
                            y: 50,
                            transformOrigin: "50% 100%",
                            stagger: 0.05,
                            opacity: 0,
                            ease: "back.out(1.7)"
                        })
                            .to(chars, {
                                y: -10,
                                color: "#ffaa17",
                                duration: 0.5,
                                ease: "power1.inOut",
                                stagger: 0.05
                            }, ">1")
                            .to(chars, {
                                y: 0,
                                color: "transparent",
                                duration: 0.5,
                                ease: "power1.inOut",
                                stagger: 0.05
                            });
                    }
                });
            }
        };

        const showTextFallback = () => {
            if (swiperRef.current) {
                const elements = swiperRef.current.querySelectorAll(".up-down_animation");
                elements.forEach(el => el.style.opacity = 1);
            }
        };

        // polling for dependencies
        const checkDependencies = () => {
            let attempt = 0;
            let swiperInitialized = false;
            let gsapInitialized = false;
            const maxAttempts = 50; // 5 seconds

            intervalId = setInterval(() => {
                attempt++;

                // Init Swiper
                if (window.Swiper && !swiperInitialized) {
                    initSlider();
                    swiperInitialized = true;
                }

                // Init GSAP
                if (window.gsap && window.SplitText && !gsapInitialized) {
                    initAnimations();
                    gsapInitialized = true;
                }

                // If both ready, stop polling
                if (swiperInitialized && gsapInitialized) {
                    clearInterval(intervalId);
                }

                // Timeout
                if (attempt >= maxAttempts) {
                    clearInterval(intervalId);
                    if (!swiperInitialized) console.error("Swiper not found after 5 seconds");
                    if (!gsapInitialized) {
                        console.warn("GSAP/SplitText not found, using fallback");
                        showTextFallback();
                    }
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
            // Optional: Kill GSAP tweens if needed
            if (window.gsap && swiperRef.current) {
                const elements = swiperRef.current.querySelectorAll(".up-down_animation");
                elements.forEach(el => window.gsap.killTweensOf(el));
            }
        };
    }, []);

    return (
        <section className="slider-one">
            <div className="slider-one_pattern" style={{ backgroundImage: 'url(/assets/images/main-slider/pattern-1.png)' }}></div>
            <div className="slider-one_dotted" style={{ backgroundImage: 'url(/assets/images/main-slider/dotted.png)' }}></div>

            <div className="main-slider swiper-container" ref={swiperRef}>
                <div className="swiper-wrapper">

                    {/* Slide 1: Construction */}
                    <div className="swiper-slide">
                        <div className="slider-one_big-title"><span className="up-down_animation">Construction</span></div>
                        <div className="slider-one_image-layer" style={{ backgroundImage: 'url(/assets/images/main-slider/hero-construction.jpg)' }}></div>
                        <div className="auto-container">
                            {/* Content Column */}
                            <div className="slider-one_content">
                                <div className="slider-one_content-inner">
                                    <div className="slider-one_title trans-900">APRA HOME</div>
                                    <h1 className="slider-one_heading trans-900">Building Your Dream Reality</h1>
                                    <div className="slider-one_text trans-900">
                                        From foundation to finish, we deliver high-quality construction with precision, modern techniques, and unwavering durable materials.
                                    </div>
                                    <div className="slider-one_button trans-900 d-flex align-items-center flex-wrap">
                                        <a href="room-detail.html" className="theme-btn btn-style-two">
                                            <span className="btn-wrap">
                                                <span className="text-one">Start Project <i className="fa-classic fa-solid fa-arrow-right"></i></span>
                                                <span className="text-two">Start Project <i className="fa-classic fa-solid fa-arrow-right"></i></span>
                                            </span>
                                        </a>
                                        <div className="slider-one_video trans-900">
                                            <a href="https://www.youtube.com/watch?v=kxPCFljwJws" className="lightbox-video play-box"><span className="fa fa-play trans-300"></span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Slide 2: Completed Home */}
                    <div className="swiper-slide">
                        <div className="slider-one_big-title"><span className="up-down_animation">APRA Home</span></div>
                        <div className="slider-one_image-layer" style={{ backgroundImage: 'url(/assets/images/main-slider/hero-exterior.jpg)' }}></div>
                        <div className="auto-container">
                            {/* Content Column */}
                            <div className="slider-one_content">
                                <div className="slider-one_content-inner">
                                    <div className="slider-one_title trans-900">Apra Homes</div>
                                    <h1 className="slider-one_heading trans-900">Architectural Masterpiece</h1>
                                    <div className="slider-one_text trans-900">Experience the pinnacle of modern living with our award-winning architectural designs and sustainable home solutions.</div>
                                    <div className="slider-one_button trans-900 d-flex align-items-center flex-wrap">
                                        <a href="room-detail.html" className="theme-btn btn-style-two">
                                            <span className="btn-wrap">
                                                <span className="text-one">View Projects <i className="fa-classic fa-solid fa-arrow-right"></i></span>
                                                <span className="text-two">View Projects <i className="fa-classic fa-solid fa-arrow-right"></i></span>
                                            </span>
                                        </a>
                                        <div className="slider-one_video trans-900">
                                            <a href="https://www.youtube.com/watch?v=kxPCFljwJws" className="lightbox-video play-box"><span className="fa fa-play trans-300"></span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Slide 3: Interior */}
                    <div className="swiper-slide">
                        <div className="slider-one_big-title"><span className="up-down_animation">APRA HOME</span></div>
                        <div className="slider-one_image-layer" style={{ backgroundImage: 'url(/assets/images/main-slider/hero-interior.jpg)' }}></div>
                        <div className="auto-container">
                            {/* Content Column */}
                            <div className="slider-one_content">
                                <div className="slider-one_content-inner">
                                    <div className="slider-one_title trans-900">APRA HOMES</div>
                                    <h1 className="slider-one_heading trans-900">Designed for Comfort & Style</h1>
                                    <div className="slider-one_text trans-900">Transform your living space with our bespoke interior design services, blending comfort with contemporary elegance.</div>
                                    <div className="slider-one_button trans-900 d-flex align-items-center flex-wrap">
                                        <a href="room-detail.html" className="theme-btn btn-style-two">
                                            <span className="btn-wrap">
                                                <span className="text-one">Discover More <i className="fa-classic fa-solid fa-arrow-right"></i></span>
                                                <span className="text-two">Discover More <i className="fa-classic fa-solid fa-arrow-right"></i></span>
                                            </span>
                                        </a>
                                        <div className="slider-one_video trans-900">
                                            <a href="https://www.youtube.com/watch?v=kxPCFljwJws" className="lightbox-video play-box"><span className="fa fa-play trans-300"></span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Slider One Arrows */}
                <div className="slider-one-arrow">
                    <div className="main-slider-prev trans-300 fas fa-arrow-left fa-fw"></div>
                    <div className="main-slider-next trans-300 fas fa-arrow-right fa-fw"></div>
                </div>

            </div>

            {/* Slider One Socials */}
            <div className="slider-one_socials">
                <a href="https://facebook.com/"><i className="fa-brands fa-facebook-f"></i></a>
                <a href="https://twitter.com/"><i className="fa-brands fa-x-twitter"></i></a>
                <a href="https://youtube.com/"><i className="fa-brands fa-youtube"></i></a>
                <a href="https://instagram.com/"><i className="fa-brands fa-instagram"></i></a>
            </div>

        </section>
    );
};

export default Hero;
