
import React from 'react';

const CTA = () => {
    return (
        <section className="cta-two">
            <div className="auto-container">
                <div className="inner-container">
                    <div className="curve-one"></div>
                    <div className="curve-two"></div>
                    <div className="image-layer" style={{ backgroundImage: 'url(assets/images/background/2.jpg)' }}></div>
                    <div className="d-flex justify-content-between align-items-center flex-wrap">
                        <h2 className="cta-two_title"> Trusted Building Construction <br /> & Project Management Experts</h2>
                        <div className="cta-two_button">
                            <a href="room-detail.html" className="theme-btn btn-style-two">
                                <span className="btn-wrap">
                                    <span className="text-one">Discover More <i className="fa-classic fa-solid fa-arrow-right"></i></span>
                                    <span className="text-two">Discover More <i className="fa-classic fa-solid fa-arrow-right"></i></span>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;
