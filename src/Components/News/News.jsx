
import React from 'react';

const News = () => {
    return (
        <section className="blog-one">
            <div className="auto-container">

                <div className="sec-title title-anim centered">
                    <div className="sec-title_title">our blog</div>
                    <h2 className="sec-title_heading text_invert">Watch Latest News</h2>
                </div>

                <div className="inner-container">
                    <div className="row clearfix">

                        <div className="news-block_one active trans-500">
                            <div className="news-block_one-inner">
                                <div className="news-block_one-image">
                                    <img src="assets/images/resource/news-1.jpg" alt="" />
                                    <a className="news-block_one-card" href="blog-detail.html">
                                        <span className="wa_magnetic_btn_2 fa-classic fa-solid fa-eye"></span>
                                    </a>
                                </div>
                                <div className="news-block_one-content">
                                    <div className="news-block_one-date">June 10, 2025</div>
                                    <h3 className="news-block_one-title"><a href="blog-detail.html">Acceptance Middletons Me Discretion Boisterous</a></h3>
                                </div>
                            </div>
                        </div>

                        <div className="news-block_one trans-500">
                            <div className="news-block_one-inner">
                                <div className="news-block_one-image">
                                    <img src="assets/images/resource/news-2.jpg" alt="" />
                                    <a className="news-block_one-card" href="blog-detail.html">
                                        <span className="wa_magnetic_btn_2 fa-classic fa-solid fa-eye"></span>
                                    </a>
                                </div>
                                <div className="news-block_one-content">
                                    <div className="news-block_one-date">June 10, 2025</div>
                                    <h3 className="news-block_one-title"><a href="blog-detail.html">Top 10 Summer Season Hotels by Forbes</a></h3>
                                </div>
                            </div>
                        </div>

                        <div className="news-block_one trans-500">
                            <div className="news-block_one-inner">
                                <div className="news-block_one-image">
                                    <img src="assets/images/resource/news-3.jpg" alt="" />
                                    <a className="news-block_one-card" href="blog-detail.html">
                                        <span className="wa_magnetic_btn_2 fa-classic fa-solid fa-eye"></span>
                                    </a>
                                </div>
                                <div className="news-block_one-content">
                                    <div className="news-block_one-date">June 10, 2025</div>
                                    <h3 className="news-block_one-title"><a href="blog-detail.html">Disclosing the Secrets of Success in Roisk.</a></h3>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default News;
