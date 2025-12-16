import React from 'react';
import './ColorSwitcher.css';

const ColorSwitcher = () => {
    return (
        <div className="color-palate">
            <div className="color-trigger">
                <i className="fa fa-solid fa-gear fa-fw"></i>
            </div>
            <div className="color-palate-inner">
                <div className="color-palate-head">
                    <h6>Choose Options</h6>
                </div>

                {/* Colors */}
                <div className="various-color clearfix">
                    <div className="colors-list">
                        <span className="palate default-color active" data-theme-file="assets/css/color-themes/default-color.css"></span>
                        <span className="palate blue-color" data-theme-file="assets/css/color-themes/blue-color.css"></span>
                        <span className="palate olive-color" data-theme-file="assets/css/color-themes/olive-color.css"></span>
                        <span className="palate orange-color" data-theme-file="assets/css/color-themes/orange-color.css"></span>
                        <span className="palate purple-color" data-theme-file="assets/css/color-themes/purple-color.css"></span>
                        <span className="palate green-color" data-theme-file="assets/css/color-themes/green-color.css"></span>
                        <span className="palate brown-color" data-theme-file="assets/css/color-themes/brown-color.css"></span>
                        <span className="palate yellow-color" data-theme-file="assets/css/color-themes/yellow-color.css"></span>
                    </div>
                </div>

                <h6>RTL Version</h6>
                <ul className="rtl-version option-box">
                    <li className="rtl">RTL Version</li>
                    <li>LTR Version</li>
                </ul>

                <h6>Want Sticky Header</h6>
                <ul className="header-version option-box">
                    <li className="box">No</li>
                    <li>Yes</li>
                </ul>

                <h6>Dark Verion</h6>
                <ul className="dark-version option-box">
                    <li className="box">Yes</li>
                    <li>No</li>
                </ul>

                <div className="purchase-box">
                    You will find much more options for colors and styling in admin panel. This color picker is used only for demonstation purposes.
                    <a href="#" className="theme-btn btn-style-one">
                        <span className="btn-wrap">
                            <span className="text-one">buy now</span>
                            <span className="text-two">buy now</span>
                        </span>
                    </a>
                </div>

            </div>
        </div>
    );
};

export default ColorSwitcher;
