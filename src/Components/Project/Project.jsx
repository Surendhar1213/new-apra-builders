
import React, { useEffect, useRef } from 'react';

const Project = () => {
    const sliderRef1 = useRef(null);
    const sliderRef2 = useRef(null);
    const swiperInstance1 = useRef(null);
    const swiperInstance2 = useRef(null);

    useEffect(() => {
        let intervalId = null;

        const initSliders = () => {
            if (!sliderRef1.current || !sliderRef2.current) return;
            // Prevent double init
            if (swiperInstance1.current || swiperInstance2.current) return;

            if (window.Swiper) {
                try {
                    // Common config used in script.js for .project-slider
                    const config = {
                        loop: true,
                        autoplay: {
                            delay: 6000,
                            disableOnInteraction: false,
                        },
                        spaceBetween: 24,
                        centeredSlides: true,
                        speed: 1500, // Matching others
                        observer: true,
                        observeParents: true,
                        breakpoints: {
                            0: { slidesPerView: 1 },
                            475: { slidesPerView: 1 },
                            767: { slidesPerView: 1.5 },
                            992: { slidesPerView: 1.8 },
                            1199: { slidesPerView: 2 },
                            1299: { slidesPerView: 2.5 },
                            1399: { slidesPerView: 3 },
                            1499: { slidesPerView: 3.5 },
                        },
                    };

                    // Initialize first slider
                    swiperInstance1.current = new window.Swiper(sliderRef1.current, config);

                    // Initialize second slider (RTL)
                    swiperInstance2.current = new window.Swiper(sliderRef2.current, config);

                    // Handle generic resize restart logic from script.js
                    window.addEventListener("resize", () => {
                        if (swiperInstance1.current && swiperInstance1.current.autoplay) {
                            swiperInstance1.current.autoplay.start();
                        }
                        if (swiperInstance2.current && swiperInstance2.current.autoplay) {
                            swiperInstance2.current.autoplay.start();
                        }
                    });

                } catch (error) {
                    console.error("Project Swiper init error:", error);
                }
            }
        };

        const checkDependencies = () => {
            let attempt = 0;
            const maxAttempts = 50;
            if (window.Swiper) {
                initSliders();
                return;
            }
            intervalId = setInterval(() => {
                attempt++;
                if (window.Swiper) {
                    clearInterval(intervalId);
                    initSliders();
                } else if (attempt >= maxAttempts) {
                    clearInterval(intervalId);
                }
            }, 100);
        };

        checkDependencies();

        return () => {
            if (intervalId) clearInterval(intervalId);
            if (swiperInstance1.current) {
                swiperInstance1.current.destroy();
                swiperInstance1.current = null;
            }
            if (swiperInstance2.current) {
                swiperInstance2.current.destroy();
                swiperInstance2.current = null;
            }
        };
    }, []);

    return (
        <section className="project-one">
            <div className="auto-container">

                <div className="sec-title title-anim centered">
                    <div className="sec-title_title">OUR PROJECTS</div>
                    <h2 className="sec-title_heading text_invert">Premiere Construction <br /> & Interior Gallery</h2>
                </div>

                <div className="case-one__slider-inner">
                    <div className="swiper project-slider" ref={sliderRef1}>
                        <div className="swiper-wrapper">

                            <div className="swiper-slide">
                                <div className="project-block_one">
                                    <div className="content">
                                        <div className="title-info">
                                            <p className="sub-title">Modern Living</p>
                                            <h3 className="title">Luxury Villa</h3>
                                        </div>
                                        <a href="project-detail.html" className="icon"><i className="flaticon-arrow-up"></i></a>
                                    </div>
                                    <div className="image">
                                        <img src="assets/images/gallery/villa.png" alt="Luxury Villa" loading="lazy" />
                                    </div>
                                </div>
                            </div>

                            <div className="swiper-slide">
                                <div className="project-block_one">
                                    <div className="content">
                                        <div className="title-info">
                                            <p className="sub-title">Interior Design</p>
                                            <h3 className="title">Modern Kitchen</h3>
                                        </div>
                                        <a href="project-detail.html" className="icon"><i className="flaticon-arrow-up"></i></a>
                                    </div>
                                    <div className="image">
                                        <img src="assets/images/gallery/kitchen.png" alt="Modern Kitchen" loading="lazy" />
                                    </div>
                                </div>
                            </div>

                            <div className="swiper-slide">
                                <div className="project-block_one">
                                    <div className="content">
                                        <div className="title-info">
                                            <p className="sub-title">Renovation</p>
                                            <h3 className="title">Home Makeover</h3>
                                        </div>
                                        <a href="project-detail.html" className="icon"><i className="flaticon-arrow-up"></i></a>
                                    </div>
                                    <div className="image">
                                        <img src="assets/images/gallery/renovation.png" alt="Home Makeover" loading="lazy" />
                                    </div>
                                </div>
                            </div>

                            <div className="swiper-slide">
                                <div className="project-block_one">
                                    <div className="content">
                                        <div className="title-info">
                                            <p className="sub-title">Construction</p>
                                            <h3 className="title">Building Project</h3>
                                        </div>
                                        <a href="project-detail.html" className="icon"><i className="flaticon-arrow-up"></i></a>
                                    </div>
                                    <div className="image">
                                        <img src="assets/images/gallery/construction.png" alt="Building Project" loading="lazy" />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="swiper project-slider" dir="rtl" ref={sliderRef2}>
                        <div className="swiper-wrapper">

                            <div className="swiper-slide">
                                <div className="project-block_one style-2 active">
                                    <div className="content">
                                        <div className="title-info">
                                            <p className="sub-title">Interior</p>
                                            <h3 className="title">Luxury Interior</h3>
                                        </div>
                                        <a href="project-detail.html" className="icon"><i className="flaticon-arrow-up"></i></a>
                                    </div>
                                    <div className="image">
                                        <img src="assets/images/gallery/interior.png" alt="Luxury Interior" loading="lazy" />
                                    </div>
                                </div>
                            </div>

                            <div className="swiper-slide">
                                <div className="project-block_one style-2">
                                    <div className="content">
                                        <div className="title-info">
                                            <p className="sub-title">Architecture</p>
                                            <h3 className="title">Villa Design</h3>
                                        </div>
                                        <a href="project-detail.html" className="icon"><i className="flaticon-arrow-up"></i></a>
                                    </div>
                                    <div className="image">
                                        <img src="assets/images/gallery/villa.png" alt="Villa Design" loading="lazy" />
                                    </div>
                                </div>
                            </div>

                            <div className="swiper-slide">
                                <div className="project-block_one style-2">
                                    <div className="content">
                                        <div className="title-info">
                                            <p className="sub-title">Kitchen</p>
                                            <h3 className="title">Modular Setup</h3>
                                        </div>
                                        <a href="project-detail.html" className="icon"><i className="flaticon-arrow-up"></i></a>
                                    </div>
                                    <div className="image">
                                        <img src="assets/images/gallery/kitchen.png" alt="Modular Setup" loading="lazy" />
                                    </div>
                                </div>
                            </div>

                            <div className="swiper-slide">
                                <div className="project-block_one style-2">
                                    <div className="content">
                                        <div className="title-info">
                                            <p className="sub-title">Renovation</p>
                                            <h3 className="title">Full Renovation</h3>
                                        </div>
                                        <a href="project-detail.html" className="icon"><i className="flaticon-arrow-up"></i></a>
                                    </div>
                                    <div className="image">
                                        <img src="assets/images/gallery/renovation.png" alt="Full Renovation" loading="lazy" />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Project;
