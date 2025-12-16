
import React from 'react';

const Team = () => {
    return (
        <section className="team-one">
            <div className="auto-container">

                <div className="sec-title title-anim centered">
                    <div className="sec-title_title">OUR Expert Team</div>
                    <h2 className="sec-title_heading text_invert">Our Motivated <br /> Hotel Staff</h2>
                </div>

                <div className="team-carousel swiper-container">
                    <div className="swiper-wrapper">

                        <div className="swiper-slide">
                            <div className="team-block_one trans-900">
                                <div className="team-block_one-inner">
                                    <div className="team-block_one-plus trans-300 flaticon-plus"></div>
                                    <div className="team-block_one-image">
                                        <img src="assets/images/resource/team-1.jpg" alt="" />
                                        <div className="team-block_one-content trans-900">
                                            <h3 className="team-block_one-title">Iliena Brown</h3>
                                            <div className="team-block_one-designation">BUILDING MANAGER</div>
                                        </div>
                                        <div className="team-block_one-overlay overlay-layer">
                                            <h3 className="team-block_one-title"><a href="team-detail.html">Iliena Brown</a></h3>
                                            <div className="team-block_one-designation">BUILDING MANAGER</div>
                                            <div className="team-social_box">
                                                <a href="https://facebook.com/"><i className="fa-brands fa-facebook-f"></i></a>
                                                <a href="https://x.com/"><i className="fa-brands fa-x-twitter"></i></a>
                                                <a href="https://youtube.com/"><i className="fa-brands fa-youtube"></i></a>
                                                <a href="https://instagram.com/"><i className="fa-brands fa-instagram"></i></a>
                                            </div>
                                            <div className="team-block_one-text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</div>
                                            <a className="team-block_one-more" href="team-detail.html">Read More <span className="fa-classic fa-solid fa-angles-right"></span></a>
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
                                        <img src="assets/images/resource/team-2.jpg" alt="" />
                                        <div className="team-block_one-content trans-900">
                                            <h3 className="team-block_one-title">Danial Frankie</h3>
                                            <div className="team-block_one-designation">CEO & FOUNDER</div>
                                        </div>
                                        <div className="team-block_one-overlay overlay-layer">
                                            <h3 className="team-block_one-title"><a href="team-detail.html">Danial Frankie</a></h3>
                                            <div className="team-block_one-designation">CEO & FOUNDER</div>
                                            <div className="team-social_box">
                                                <a href="https://facebook.com/"><i className="fa-brands fa-facebook-f"></i></a>
                                                <a href="https://x.com/"><i className="fa-brands fa-x-twitter"></i></a>
                                                <a href="https://youtube.com/"><i className="fa-brands fa-youtube"></i></a>
                                                <a href="https://instagram.com/"><i className="fa-brands fa-instagram"></i></a>
                                            </div>
                                            <div className="team-block_one-text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</div>
                                            <a className="team-block_one-more" href="team-detail.html">Read More <span className="fa-classic fa-solid fa-angles-right"></span></a>
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
                                        <img src="assets/images/resource/team-3.jpg" alt="" />
                                        <div className="team-block_one-content trans-900">
                                            <h3 className="team-block_one-title">Micheal Baker</h3>
                                            <div className="team-block_one-designation">GENERAL MANAGER</div>
                                        </div>
                                        <div className="team-block_one-overlay overlay-layer">
                                            <h3 className="team-block_one-title"><a href="team-detail.html">Micheal Baker</a></h3>
                                            <div className="team-block_one-designation">GENERAL MANAGER</div>
                                            <div className="team-social_box">
                                                <a href="https://facebook.com/"><i className="fa-brands fa-facebook-f"></i></a>
                                                <a href="https://x.com/"><i className="fa-brands fa-x-twitter"></i></a>
                                                <a href="https://youtube.com/"><i className="fa-brands fa-youtube"></i></a>
                                                <a href="https://instagram.com/"><i className="fa-brands fa-instagram"></i></a>
                                            </div>
                                            <div className="team-block_one-text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</div>
                                            <a className="team-block_one-more" href="team-detail.html">Read More <span className="fa-classic fa-solid fa-angles-right"></span></a>
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
                    <div className="lower-text">More of our <a href="team.html">Team member</a></div>
                </div>

            </div>
        </section>
    );
};

export default Team;
