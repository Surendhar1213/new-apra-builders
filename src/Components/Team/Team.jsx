import React, { useEffect, useRef } from 'react';

const Team = () => {
    const swiperRef = useRef(null);
    const sliderInstance = useRef(null);

    useEffect(() => {
        let intervalId = null;

        const initSlider = () => {
            if (!swiperRef.current || sliderInstance.current) return;

            if (window.Swiper) {
                try {
                    // Config from script.js for .team-carousel
                    sliderInstance.current = new window.Swiper(swiperRef.current, {
                        slidesPerView: 3,
                        spaceBetween: 0,
                        loop: true,
                        centeredSlides: true,
                        speed: 800,
                        observer: true,
                        observeParents: true,
                        autoplay: {
                            delay: 6000,
                            enabled: true,
                            disableOnInteraction: false,
                        },
                        navigation: {
                            nextEl: '.team-carousel-next',
                            prevEl: '.team-carousel-prev',
                        },
                        pagination: {
                            el: ".team-carousel-pagination",
                            clickable: true,
                        },
                        breakpoints: {
                            0: { slidesPerView: 1, spaceBetween: 20, centeredSlides: false },
                            576: { slidesPerView: 1, spaceBetween: 20, centeredSlides: false },
                            768: { slidesPerView: 2, spaceBetween: 20, centeredSlides: false },
                            992: { slidesPerView: 3, spaceBetween: 20, centeredSlides: false },
                            1210: { slidesPerView: 3, spaceBetween: 20, centeredSlides: false },
                            1300: { slidesPerView: 3, spaceBetween: 20 },
                            1400: { slidesPerView: 3 },
                            1500: { slidesPerView: 3 },
                        },
                    });
                } catch (error) {
                    console.error("Team Swiper init error:", error);
                }
            }
        };

        const checkDependencies = () => {
            let attempt = 0;
            const maxAttempts = 50;
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
        <section className="team-one">
            <div className="auto-container">

                <div className="sec-title title-anim centered">
                    <div className="sec-title_title">OUR CURRENT PROJECT</div>
                    <h2 className="sec-title_heading text_invert"> Our Ongoing <br /> Construction Project</h2>
                </div>

                <div className="team-carousel swiper-container" ref={swiperRef}>
                    <div className="swiper-wrapper">

                        <div className="swiper-slide">
                            <div className="team-block_one trans-900">
                                <div className="team-block_one-inner">
                                    <div className="team-block_one-plus trans-300 flaticon-plus"></div>
                                    <div className="team-block_one-image">
                                        <img
                                            src="assets/images/resource/project-1.jpg"
                                            alt="Foundation Phase"
                                            loading="lazy"
                                            style={{ width: "430px", height: "527px", objectFit: "cover" }}
                                        />
                                        <div className="team-block_one-content trans-900">
                                            <h3 className="team-block_one-title">Foundation Phase</h3>
                                            <div className="team-block_one-designation">SITE PREPARATION</div>
                                        </div>
                                        <div className="team-block_one-overlay overlay-layer">
                                            <h3 className="team-block_one-title"><a href="project-detail.html">Foundation Phase</a></h3>
                                            <div className="team-block_one-designation">SITE PREPARATION</div>
                                            <div className="team-block_one-text">Laying the groundwork for a solid structure with precision engineering and high-quality materials.</div>
                                            <a className="team-block_one-more" href="project-detail.html">Read More <span className="fa-classic fa-solid fa-angles-right"></span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="swiper-slide">
                            <div className="team-block_one trans-900">
                                <div className="team-block_one-inner">
                                    <div className="team-block_one-plus trans-300 flaticon-plus"></div>
                                    <div className="team-block_one-image">
                                        <img
                                            src="assets/images/resource/about-context-1.jpg"
                                            alt="Interior Finishing"
                                            loading="lazy"
                                            style={{ width: "430px", height: "527px", objectFit: "cover" }}
                                        />
                                        <div className="team-block_one-content trans-900">
                                            <h3 className="team-block_one-title">Interior Finishing</h3>
                                            <div className="team-block_one-designation">LUXURY DESIGN</div>
                                        </div>
                                        <div className="team-block_one-overlay overlay-layer">
                                            <h3 className="team-block_one-title"><a href="project-detail.html">Interior Finishing</a></h3>
                                            <div className="team-block_one-designation">LUXURY DESIGN</div>
                                            <div className="team-block_one-text">Focusing on the finer details, ensuring every corner meets our high standards of luxury and design.</div>
                                            <a className="team-block_one-more" href="project-detail.html">Read More <span className="fa-classic fa-solid fa-angles-right"></span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="swiper-slide">
                            <div className="team-block_one trans-900">
                                <div className="team-block_one-inner">
                                    <div className="team-block_one-plus trans-300 flaticon-plus"></div>
                                    <div className="team-block_one-image">
                                        <img
                                            src="assets/images/resource/about-context-2.jpg"
                                            alt="Structural Frame"
                                            loading="lazy"
                                            style={{ width: "430px", height: "527px", objectFit: "cover" }}
                                        />
                                        <div className="team-block_one-content trans-900">
                                            <h3 className="team-block_one-title">Structural Frame</h3>
                                            <div className="team-block_one-designation">CONSTRUCTION</div>
                                        </div>
                                        <div className="team-block_one-overlay overlay-layer">
                                            <h3 className="team-block_one-title"><a href="project-detail.html">Structural Frame</a></h3>
                                            <div className="team-block_one-designation">CONSTRUCTION</div>
                                            <div className="team-block_one-text">Building the core framework that defines the durability and safety of the modern home.</div>
                                            <a className="team-block_one-more" href="project-detail.html">Read More <span className="fa-classic fa-solid fa-angles-right"></span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="team-one-arrow">
                        <div className="team-carousel-prev trans-300 fas fa-arrow-left fa-fw"></div>
                        <div className="team-carousel-next trans-300 fas fa-arrow-right fa-fw"></div>
                    </div>

                </div>

                <div className="lower-box text-center">
                    <div className="lower-text">View all <a href="projects.html">Ongoing Projects</a></div>
                </div>

            </div>
        </section>
    );
};

export default Team;
