import React from 'react';
import './Services.css';

const Services = () => {
    return (
        <section className="service-one">
            <div className="auto-container">
                <div className="inner-container">
                    <div
                        className="service-one_pattern"
                        style={{ backgroundImage: 'url(assets/images/background/pattern-1.png)' }}
                    ></div>

                    <div className="sec-title title-anim light centered">
                        <div className="sec-title_title">OUR SERVICES</div>
                        <h2 className="sec-title_heading" style={{ color: '#222' }}>Explore Our Services</h2>
                    </div>

                    <div className="row clearfix">

                        {/* Service 1: Residential Construction */}
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="service-card wow fadeInUp" data-wow-delay="0ms">
                                <div className="service-card_image">
                                    <img src="assets/images/resource/about-context-1.jpg" alt="Residential Construction" />
                                </div>
                                <div className="service-card_content">
                                    <div className="service-card_icon flaticon-residential"></div>
                                    <h4 className="service-card_title">Residential Construction</h4>
                                    <div className="service-card_text">
                                        Quality residential construction with strong planning and reliable building solutions.
                                    </div>
                                    <a href="#" className="service-card_arrow"><i className="flaticon-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>

                        {/* Service 2: Project Management */}
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="service-card wow fadeInUp" data-wow-delay="150ms">
                                <div className="service-card_image">
                                    <img src="assets/images/resource/service-1.jpg" alt="Project Management" />
                                </div>
                                <div className="service-card_content">
                                    <div className="service-card_icon flaticon-parking"></div>
                                    <h4 className="service-card_title">Project Management</h4>
                                    <div className="service-card_text">
                                        Complete project management ensuring smooth execution and timely delivery.
                                    </div>
                                    <a href="#" className="service-card_arrow"><i className="flaticon-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>

                        {/* Service 3: Interior Solutions */}
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="service-card wow fadeInUp" data-wow-delay="300ms">
                                <div className="service-card_image">
                                    <img src="assets/images/resource/about-context-2.jpg" alt="Interior Solutions" />
                                </div>
                                <div className="service-card_content">
                                    <div className="service-card_icon flaticon-lobby"></div>
                                    <h4 className="service-card_title">Interior Solutions</h4>
                                    <div className="service-card_text">
                                        Creative interior solutions designed with comfort, style, and modern functionality.
                                    </div>
                                    <a href="#" className="service-card_arrow"><i className="flaticon-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>

                        {/* Service 4: Architecture */}
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="service-card wow fadeInUp" data-wow-delay="450ms">
                                <div className="service-card_image">
                                    <img src="assets/images/resource/service-2.jpg" alt="Architecture" />
                                </div>
                                <div className="service-card_content">
                                    <div className="service-card_icon flaticon-pool"></div>
                                    <h4 className="service-card_title">Architecture Design</h4>
                                    <div className="service-card_text">
                                        Professional architectural planning focused on design, safety, and efficiency.
                                    </div>
                                    <a href="#" className="service-card_arrow"><i className="flaticon-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
