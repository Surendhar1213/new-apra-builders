import React from 'react';

const SearchPopup = () => {
    return (
        <div className="search-popup">
            <div className="color-layer"></div>
            <button className="close-search"><span className="fa-xmark"></span></button>
            <form method="post" action="https://expert-themes.com/html/roisk/blog.html">
                <div className="form-group">
                    <input type="search" name="search-field" placeholder="Search Here" required="" />
                    <button className="fa fa-solid fa-magnifying-glass fa-fw" type="submit"></button>
                </div>
            </form>
        </div>
    );
};

export default SearchPopup;
