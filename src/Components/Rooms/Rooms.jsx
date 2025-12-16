import React from 'react';

const Rooms = () => {
    return (
        <section className="rooms-one">
            <div className="auto-container">
                <div className="row clearfix">

                    {/* Image Column */}
                    <div className="rooms-one_image-column col-lg-6 col-md-12 col-sm-12">
                        <div className="rooms-one_image">
                            <img src="assets/images/resource/room-1.jpg" alt="Premium Home Construction" loading="lazy" />
                            <div className="rooms-one_pattern" style={{ backgroundImage: 'url(assets/images/background/pattern-2.png)' }}></div>
                        </div>

                        {/* Feature One */}
                        <div className="room-feature_one">
                            <div className="room-feature_one-inner">
                                <div className="room-feature_one-icon flaticon-bed"></div>
                                <h3 className="room-feature_one-title">Luxury Homes</h3>
                                <div className="room-feature_one-text">
                                    We deliver elegant, high-quality homes with durable materials, modern architectural design, and attention to every small detail.
                                </div>
                            </div>
                        </div>

                        {/* Feature Two */}
                        <div className="room-feature_two">
                            <div className="room-feature_two-inner">
                                <div className="room-feature_two-icon flaticon-group"></div>
                                <h3 className="room-feature_two-title">Expert Team</h3>
                                <div className="room-feature_two-text">
                                    Our skilled construction team ensures precise planning, timely completion, and long-lasting results, while keeping client satisfaction as our top priority.
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Content Column */}
                    <div className="rooms-one_content-column col-lg-6 col-md-12 col-sm-12">
                        <div className="rooms-one_content">
                            <div className="sec-title">
                                <div className="sec-title_title">OUR PROJECTS</div>
                                <h2 className="sec-title_heading title-anim">
                                    Turning Your Dream Home Into Reality With Quality and Care
                                </h2>
                                <div className="sec-title_text">
                                    <p>
                                        From initial planning to final construction, we focus on quality, precision, and modern building techniques for every home we create, ensuring every detail meets the highest standards.
                                    </p>
                                    <p>
                                        Each project is handled with care by our expert team, providing durable, aesthetically pleasing, and fully functional homes, all tailored to the client’s unique requirements and vision.
                                    </p>
                                </div>
                            </div>
                            <div className="rooms-one_button">
                                <a href="room-detail.html" className="theme-btn btn-style-one">
                                    <span className="btn-wrap">
                                        <span className="text-one">Discover More<i className="fa-classic fa-solid fa-arrow-right"></i></span>
                                        <span className="text-two">Discover More<i className="fa-classic fa-solid fa-arrow-right"></i></span>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Rooms;
