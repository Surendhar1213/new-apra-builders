import React from 'react';

const AboutSidebar = () => {
    return (
        <div className="about-sidebar">
            <div className="gradient-layer"></div>
            {/* Close Button */}
            <div className="close-sidebar-widget close-button">
                <span className="fa-solid fa-xmark fa-fw"></span>
            </div>
            <div className="sidebar-inner">
                <div className="upper-box">
                    <div className="image">
                        <img src="/assets/images/resource/about-1.jpg" alt="" />
                    </div>
                    <div className="content-box">
                        <h3>About <span>Roisk</span></h3>
                        <div className="text">Sigh sang nay sex high yet door game. She dissimilar was favourable unreserved nay expression contrasted saw. Past her find she like bore pain open. Am if number no up period.</div>
                        <ul className="about-sidebar_list">
                            <li>Resturent & Bar</li>
                            <li>Swimming Pool</li>
                            <li>Party Planning</li>
                            <li>Conference Room</li>
                            <li>Coctail Party Houses</li>
                        </ul>
                    </div>
                </div>
                {/* Social Box */}
                <div className="social-box">
                    <a href="https://facebook.com/"><i className="fa-brands fa-facebook-f"></i></a>
                    <a href="https://twitter.com/"><i className="fa-brands fa-x-twitter"></i></a>
                    <a href="https://youtube.com/"><i className="fa-brands fa-youtube"></i></a>
                    <a href="https://instagram.com/"><i className="fa-brands fa-instagram"></i></a>
                </div>
            </div>
        </div>
    );
};

export default AboutSidebar;
