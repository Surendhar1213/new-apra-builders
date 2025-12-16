import React from 'react';
import MobileMenu from '../MobileMenu/MobileMenu';
import './Header.css';

import editLogo1 from '../../assets/Myimages/edit-logo-1.png';

const Header = () => {
    return (
        <header className="main-header header-style-one">

            {/* Header Lower */}
            <div className="header-lower">
                <div className="auto-container">
                    <div className="inner-container">
                        <div className="d-flex justify-content-between align-items-center">

                            {/* Logo Box */}
                            <div className="logo-box">
                                <div className="logo"><a href="/"><img src={editLogo1} alt="" title="APRA HOME" /></a></div>
                            </div>

                            <div className="header-navbar d-flex justify-content-between align-items-center">
                                <div className="nav-outer d-flex flex-wrap">
                                    {/* Main Menu */}
                                    <nav className="main-menu navbar-expand-md">
                                        <div className="navbar-header">
                                            {/* Toggle Button */}
                                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                                <span className="icon-bar"></span>
                                                <span className="icon-bar"></span>
                                                <span className="icon-bar"></span>
                                            </button>
                                        </div>

                                        <div className="navbar-collapse collapse clearfix" id="navbarSupportedContent">
                                            <ul className="navigation clearfix">
                                                <li className=" has-mega-menu"><a href="#">Home</a>
                                                </li>
                                                <li className=""><a href="#">About us</a></li>
                                                <li className=""><a href="#">Services</a></li>
                                                <li className=""><a href="#">project</a></li>
                                                <li className=""><a href="#">Contact us</a></li>
                                            </ul>
                                        </div>
                                    </nav>
                                </div>

                                {/* Main Menu End*/}
                                <div className="outer-box d-flex align-items-center flex-wrap">

                                    {/* Search Btn */}
                                    <div className="search-box-btn trans-500 search-box-outer"><span className="icon fa fa-search"></span></div>

                                    {/* About Widget */}
                                    <span className="about-widget">
                                        <span className="hamburger">
                                            <span className="top-bun"></span>
                                            <span className="meat"></span>
                                            <span className="bottom-bun"></span>
                                        </span>
                                    </span>

                                    {/* Button Box */}
                                    <div className="main-header_button">
                                        <a href="contact.html" className="theme-btn btn-style-one">
                                            <span className="btn-wrap">
                                                <span className="text-one">book now <i className="fa-classic fa-solid fa-arrow-right"></i></span>
                                                <span className="text-two">book now <i className="fa-classic fa-solid fa-arrow-right"></i></span>
                                            </span>
                                        </a>
                                    </div>

                                    {/* Mobile Navigation Toggler */}
                                    <div className="mobile-nav-toggler"><span className="icon flaticon-menu-1"></span></div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Header Lower */}

            <MobileMenu />

        </header>
    );
};

export default Header;
