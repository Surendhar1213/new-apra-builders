import React, { useEffect, useRef } from 'react';

const Testimonial = () => {
    const swiperRef = useRef(null);
    const sliderInstance = useRef(null);

    useEffect(() => {
        let intervalId = null;

        const initSlider = () => {
            if (!swiperRef.current || sliderInstance.current) return;

            if (window.Swiper) {
                try {
                    // Config from script.js for .two-item_carousel
                    sliderInstance.current = new window.Swiper(swiperRef.current, {
                        slidesPerView: 2,
                        spaceBetween: 30,
                        loop: true,
                        speed: 1500,
                        observer: true,
                        observeParents: true,
                        autoplay: {
                            delay: 6000,
                            enabled: true,
                            disableOnInteraction: false,
                        },
                        navigation: {
                            nextEl: '.two-item_carousel-next',
                            prevEl: '.two-item_carousel-prev',
                        },
                        pagination: {
                            el: ".two-item_carousel-pagination",
                            clickable: true,
                        },
                        breakpoints: {
                            0: { slidesPerView: 1 },
                            576: { slidesPerView: 1 },
                            768: { slidesPerView: 1 },
                            992: { slidesPerView: 2 },
                            1200: { slidesPerView: 2 },
                            1600: { slidesPerView: 2 },
                        },
                    });
                } catch (error) {
                    console.error("Testimonial Swiper init error:", error);
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
        <section className="testimonial-one" style={{ backgroundImage: 'url(assets/images/background/pattern-4.png)' }}>
            <div className="auto-container">

                <div className="sec-title title-anim centered">
                    <div className="sec-title_title">TESTIMONIALS</div>
                    <h2 className="sec-title_heading text_invert">our Client Feedback</h2>
                </div>

                <div className="two-item_carousel swiper-container" ref={swiperRef}>
                    <div className="swiper-wrapper">

                        <div className="swiper-slide">
                            <div className="testimonial-block_one">
                                <div className="testimonial-block_one-inner">
                                    <div className="testimonial-block_one-text">There are many variations of passages of Lorem Ipsum available,  by injected humour There are many variations of type and scrambled it to make passages of Lorem Ipsum available.</div>
                                    <div className="testimonial-block_one-info">
                                        <div className="testimonial-block_one-author">
                                            <div className="testimonial-block_one-quote flaticon-quotation"></div>
                                            <img src="assets/images/resource/author-1.jpg" alt="" loading="lazy" />
                                        </div>
                                        <strong>Browfish Hells</strong>
                                        Founder, Masir
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="swiper-slide">
                            <div className="testimonial-block_one">
                                <div className="testimonial-block_one-inner">
                                    <div className="testimonial-block_one-text">There are many variations of passages of Lorem Ipsum available,  by injected humour There are many variations of type and scrambled it to make passages of Lorem Ipsum available.</div>
                                    <div className="testimonial-block_one-info">
                                        <div className="testimonial-block_one-author">
                                            <div className="testimonial-block_one-quote flaticon-quotation"></div>
                                            <img src="assets/images/resource/author-2.jpg" alt="" loading="lazy" />
                                        </div>
                                        <strong>Middiel Maker</strong>
                                        Founder, Masir
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="swiper-slide">
                            <div className="testimonial-block_one">
                                <div className="testimonial-block_one-inner">
                                    <div className="testimonial-block_one-text">There are many variations of passages of Lorem Ipsum available,  by injected humour There are many variations of type and scrambled it to make passages of Lorem Ipsum available.</div>
                                    <div className="testimonial-block_one-info">
                                        <div className="testimonial-block_one-author">
                                            <div className="testimonial-block_one-quote flaticon-quotation"></div>
                                            <img src="assets/images/resource/author-1.jpg" alt="" />
                                        </div>
                                        <strong>Browfish Hells</strong>
                                        Founder, Masir
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="swiper-slide">
                            <div className="testimonial-block_one">
                                <div className="testimonial-block_one-inner">
                                    <div className="testimonial-block_one-text">There are many variations of passages of Lorem Ipsum available,  by injected humour There are many variations of type and scrambled it to make passages of Lorem Ipsum available.</div>
                                    <div className="testimonial-block_one-info">
                                        <div className="testimonial-block_one-author">
                                            <div className="testimonial-block_one-quote flaticon-quotation"></div>
                                            <img src="assets/images/resource/author-2.jpg" alt="" loading="lazy" />
                                        </div>
                                        <strong>Middiel Maker</strong>
                                        Founder, Masir
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

export default Testimonial;
