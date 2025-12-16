import React from 'react';
import './Services.css';

const Services = () => {

    const containerRef = React.useRef(null);

    React.useEffect(() => {
        let ctx;

        // Function to run animation setup
        const runAnimation = () => {
            if (!window.gsap || !window.ScrollTrigger) return;

            window.ScrollTrigger.refresh();

            // Use gsap.context for React-friendly cleanup
            ctx = window.gsap.context(() => {
                const containers = document.querySelectorAll('.service-card .img-reveal');

                containers.forEach((container) => {
                    let image = container.querySelector("img");

                    // Reset any problematic inline styles first
                    window.gsap.set(container, { clearProps: "all" });
                    window.gsap.set(image, { clearProps: "all" });

                    // Ensure initial state is set
                    window.gsap.set(container, { autoAlpha: 1, clipPath: "inset(100% 0 0 0)" });
                    window.gsap.set(image, { scale: 1.2 });

                    let tl = window.gsap.timeline({
                        scrollTrigger: {
                            trigger: container,
                            start: "top 90%", // Trigger slightly earlier to ensure visibility
                            end: "bottom top",
                            toggleActions: "play none none reverse", // Allow reverse on scroll up, play on scroll down
                            markers: false
                        }
                    });

                    tl.to(container, {
                        clipPath: "inset(0% 0 0 0)",
                        duration: 1.5, // Slightly slower for smoothness
                        ease: "power4.out",
                        overwrite: "auto"
                    })
                        .to(image, {
                            scale: 1,
                            duration: 1.5,
                            ease: "power4.out",
                            overwrite: "auto"
                        }, "<");
                });
            }, containerRef); // Scope to main section
        };

        // Run immediately if ready
        runAnimation();

        // Also run on window load to ensure images affect layout
        const handleLoad = () => {
            // Small delay to ensure layout is truly final
            setTimeout(() => {
                if (ctx) ctx.revert(); // Revert old before re-running
                runAnimation();
            }, 100);
        };

        window.addEventListener('load', handleLoad);

        // Backup timeout for fast loads or cached states
        const timeoutId = setTimeout(handleLoad, 1000);

        return () => {
            if (ctx) ctx.revert();
            window.removeEventListener('load', handleLoad);
            clearTimeout(timeoutId);
        };
    }, []);

    const services = [
        {
            title: "Residential Construction",
            icon: "flaticon-residential",
            image: "assets/images/resource/about-context-1.jpg",
            desc: "We specialize in building high-quality residential homes with precision planning, durable materials, and modern architectural designs tailored to your needs."
        },
        {
            title: "Project Management",
            icon: "flaticon-parking",
            image: "assets/images/resource/service-1.jpg",
            desc: "Our expert project management team ensures your construction project is delivered on time, within budget, and to the highest standards of safety and quality."
        },
        {
            title: "Interior Solutions",
            icon: "flaticon-lobby",
            image: "assets/images/resource/about-context-2.jpg",
            desc: "Transform your living spaces with our creative interior design solutions that combine aesthetic appeal with functional comfort and elegance."
        },
        {
            title: "Architecture Design",
            icon: "flaticon-pool",
            image: "assets/images/resource/service-2.jpg",
            desc: "Professional architectural planning focused on innovative design, structural integrity, and maximizing space efficiency for your dream property."
        },
        {
            title: "Renovation Services",
            icon: "flaticon-hotel-1", // Changed to valid icon
            image: "assets/images/resource/project-1.jpg",
            desc: "Revitalize your existing property with our comprehensive renovation services, turning outdated spaces into modern, energy-efficient environments."
        },
        {
            title: "Commercial Building",
            icon: "flaticon-hotel", // Changed to valid icon
            image: "assets/images/resource/service-1.jpg",
            desc: "We deliver robust and scalable commercial building solutions, from office complexes to retail centers, built to support your business growth."
        }
    ];

    return (
        <section className="service-one" ref={containerRef}>
            <div className="auto-container">
                <div className="inner-container">

                    <div className="sec-title title-anim light centered">
                        <div className="sec-title_title">OUR SERVICES</div>
                        <h2 className="sec-title_heading">Explore Our Services</h2>
                        <h3>Transforming Visions into Reality with Excellence</h3>
                    </div>

                    <div className="row clearfix">
                        {services.map((service, index) => (
                            <div key={index} className="col-lg-4 col-md-6 col-sm-12">
                                <div className="service-card wow fadeInUp" data-wow-delay={`${index * 150}ms`}>

                                    {/* Icon Top */}
                                    <div className="service-card_icon-box">
                                        <div className={`service-card_icon ${service.icon}`}></div>
                                    </div>

                                    {/* Content Middle */}
                                    <div className="service-card_content">
                                        <h4 className="service-card_title">{service.title}</h4>
                                        <div className="service-card_text">{service.desc}</div>
                                    </div>

                                    {/* Image Bottom */}
                                    <div className="service-card_image-box img-reveal">
                                        <img src={service.image} alt={service.title} loading="lazy" />
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
