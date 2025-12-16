
import React from 'react';

const Video = () => {
    return (
        <section className="cta-one" style={{ backgroundImage: 'url(assets/images/background/1.jpg)' }}>
            <div className="cta-one_pattern overlay-layer" style={{ backgroundImage: 'url(assets/images/background/pattern-3.png)' }}></div>
            <div className="auto-container">
                <h2 className="cta-one_heading title-anim">Ensuring Safe Experience <br /> From Desing to Installation</h2>
                <div className="cta-one_styled">ROISK</div>
                <a href="https://www.youtube.com/watch?v=kxPCFljwJws" className="lightbox-video cta-one_play"><span className="fa fa-play trans-300"></span></a>
            </div>
        </section>
    );
};

export default Video;
