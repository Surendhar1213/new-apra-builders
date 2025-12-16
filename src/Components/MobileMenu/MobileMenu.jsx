import React from 'react';

const MobileMenu = () => {
    return (
        <div className="mobile-menu">
            <div className="menu-backdrop"></div>
            <div className="close-btn"><span className="icon fa-xmark"></span></div>

            <nav className="menu-box">
                <div className="nav-logo"><a href="/"><img src="/assets/images/mobile-logo.png" alt="" title="" /></a></div>
                <div className="menu-outer">{/* Here Menu Will Come Automatically Via Javascript / Same Menu as in Header */}</div>
            </nav>
        </div>
    );
};

export default MobileMenu;
