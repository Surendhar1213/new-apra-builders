import React from 'react';
import './About.css';

const About = () => {
    return (
        <section className="about-one">
            <div className="auto-container">
                <div className="row clearfix">

                    {/* Column */}
                    <div className="column col-xl-7 col-lg-12 col-md-12 col-sm-12">
                        <div className="about-one_rotate-title">APRA HOME'S</div>
                        <div className="about-one_content">
                            <div className="sec-title">
                                <div className="sec-title_title">About Us</div>
                                <h2 className="sec-title_heading title-anim">We Will Build Your Home Perfect With Our Strong Experience.</h2>
                                <div className="sec-title_text">
                                    We provide reliable home construction with careful planning, quality materials, and skilled execution for lasting strength. From initial design to final completion, we focus on safety, durability, and client satisfaction. <br />
                                    Our experienced team ensures transparent process, timely delivery, and professional workmanship for every project.
                                </div>                            </div>
                            <div className="about-one_button">
                                <a href="about.html" className="theme-btn btn-style-one">
                                    <span className="btn-wrap">
                                        <span className="text-one">Discover More<i className="fa-classic fa-solid fa-arrow-right"></i></span>
                                        <span className="text-two">Discover More<i className="fa-classic fa-solid fa-arrow-right"></i></span>
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div className="about-two_counter-outer">
                            <div className="row clearfix">

                                {/* Counter Block One */}
                                <div className="counter-block_one col-lg-4 col-md-4 col-sm-6">
                                    <div className="counter-block_one-inner">
                                        <div className="counter-block_one-icon"><i className="icon trans-500 flaticon-residential"></i></div>
                                        <div className="count-box"><span className="count-text" data-speed="3000" data-stop="400">0</span>+</div>
                                    </div>
                                    <strong>Completed Projects</strong>
                                    <div className="counter-block_one-text">Homes Successfully Build</div>

                                </div>

                                {/* Counter Block One */}
                                <div className="counter-block_one col-lg-4 col-md-4 col-sm-6">
                                    <div className="counter-block_one-inner">
                                        <div className="counter-block_one-icon"><i className="icon trans-500 flaticon-lobby"></i></div>
                                        <div className="count-box"><span className="count-text" data-speed="3000" data-stop="400">0</span>+</div>
                                    </div>
                                    <strong>Quality Service</strong>
                                    <div className="counter-block_one-text">Professional Workmanship</div>
                                </div>

                                {/* Counter Block One */}
                                <div className="counter-block_one col-lg-4 col-md-4 col-sm-6">
                                    <div className="counter-block_one-inner">
                                        <div className="counter-block_one-icon"><i className="icon trans-500 flaticon-parking"></i></div>
                                        <div className="count-box"><span className="count-text" data-speed="3000" data-stop="100">0</span>%</div>
                                    </div>
                                    <strong>On-Time Delivery</strong>
                                    <div className="counter-block_one-text">Project Completion</div>
                                </div>

                            </div>
                        </div>
                    </div>
                    {/* Column */}
                    <div className="column col-xl-5 col-lg-12 col-md-8 col-sm-12">
                        <div className="about-one_image-outer">
                            <div className="about-one_image img-reveal">
                                <img src="/assets/images/resource/about-context-1.jpg" alt="Building Construction" style={{ width: '370px', height: '566px', objectFit: 'cover' }} />
                            </div>
                            <div className="about-one_image-two img-reveal_two">
                                <img src="/assets/images/resource/project-1.jpg" alt="Home Construction" style={{ width: '325px', height: '288px', objectFit: 'cover' }} />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
