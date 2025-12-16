import React from 'react';
import './Preloader.css';

const Preloader = () => {
    return (
        <div className="preloader hoteling">
            <div className="preloader-content">
                <div className="preloader-text preloader-logo">Apra Home</div>
                <div className="loading-bar"><span></span></div>
            </div>
        </div>
    );
};

export default Preloader;
