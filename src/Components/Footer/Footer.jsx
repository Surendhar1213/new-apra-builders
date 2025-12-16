import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    // Array of Construction & Interior Images
    // Using high-quality visuals for building/home/interior
    const footerImages = [
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=400&auto=format&fit=crop", // Modern Apartment (Light)
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=400&auto=format&fit=crop", // Villa Pool (Teal/Blue vibe)
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=400&auto=format&fit=crop", // Living Room
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=400&auto=format&fit=crop", // Construction Site
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=400&auto=format&fit=crop", // Kitchen / Interior
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop"      // Modern Architecture
    ];

    return (
        <footer className="main-footer" id="footer">
            <div className="footer-pattern-layer"></div>

            <div className="auto-container">
                <div className="widgets-section">
                    <div className="row clearfix">

                        {/* Column 1: Logo & About */}
                        <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                            <div className="footer-widget logo-widget">
                                <div className="footer-logo">
                                    <h3 className="widget-title">APRA HOME</h3>
                                    <span className="sub-title">Building Construction</span>
                                </div>
                                <div className="footer-text">
                                    Our company specializes in electrical wiring and repair. We carry out any projects with our hearts and are not afraid of difficulties!
                                </div>
                                <div className="widget-title-small">ABOUT MORE</div>
                                <div className="footer-social">
                                    <a href="#"><FaFacebookF /></a>
                                    <a href="#"><FaInstagram /></a>
                                    <a href="#"><FaTwitter /></a>
                                    <a href="#"><FaLinkedinIn /></a>
                                </div>
                            </div>
                        </div>

                        {/* Column 2: Pages */}
                        <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                            <div className="footer-widget links-widget">
                                <h3 className="widget-title">PAGES</h3>
                                <ul className="user-links">
                                    <li><a href="#home">Home</a></li>
                                    <li><a href="#about">About Us</a></li>
                                    <li><a href="#services">Services</a></li>
                                    <li><a href="#project">Project</a></li>
                                    <li><a href="#footer">Contact Us</a></li>
                                </ul>
                            </div>
                        </div>

                        {/* Column 3: Recent Projects */}
                        <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                            <div className="footer-widget news-widget">
                                <h3 className="widget-title">RECENT PROJECTS</h3>
                                <div className="news-post">
                                    <div className="post-inner">
                                        <div className="image">
                                            <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=100&auto=format&fit=crop" alt="" />
                                        </div>
                                        <div className="content">
                                            <div className="date">24 JUNE 2025</div>
                                            <h4><a href="#">Modern Villa Interior Renovation</a></h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="news-post">
                                    <div className="post-inner">
                                        <div className="image">
                                            <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=100&auto=format&fit=crop" alt="" />
                                        </div>
                                        <div className="content">
                                            <div className="date">24 SEP 2025</div>
                                            <h4><a href="#">Luxury Apartment Complex Design</a></h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Column 4: Services */}
                        <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                            <div className="footer-widget links-widget">
                                <h3 className="widget-title">SERVICES</h3>
                                <ul className="user-links">
                                    <li><a href="#">Building Construction</a></li>
                                    <li><a href="#">Interior Design</a></li>
                                    <li><a href="#">Home Renovation</a></li>
                                    <li><a href="#">Architecture Design</a></li>
                                    <li><a href="#">Material Supply</a></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Bottom Infinite Marquee Image Strip (Inside Auto Container) */}
                <div className="footer-image-strip">
                    <div className="marquee-track">
                        {/* Render Loop 1 */}
                        {footerImages.map((src, index) => (
                            <div className="image-item" key={`orig-${index}`}>
                                <img src={src} alt={`Footer Gallery ${index}`} />
                            </div>
                        ))}
                        {/* Render Loop 2 (Duplicate for Seamless Scroll) */}
                        {footerImages.map((src, index) => (
                            <div className="image-item" key={`dup-${index}`}>
                                <img src={src} alt={`Footer Gallery ${index}`} />
                            </div>
                        ))}
                    </div>
                </div>

            </div>

            <div className="footer-bottom">
                <div className="auto-container">
                    <div className="inner-container">
                        <div className="copyright-text">COPYRIGHT &copy; 2025 - ALL RIGHTS RESERVED BY <a href="#">APRA CONSTRUCTION</a></div>
                        <div className="footer-nav">
                            <ul>
                                <li><a href="#">Terms & Conditions</a></li>
                                <li><a href="#">Privacy & Policy</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
