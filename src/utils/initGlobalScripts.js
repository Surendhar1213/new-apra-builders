
export const initGlobalScripts = ($) => {
    "use strict";

    // Hoteling STYLE PRELOADER ANIMATION
    const tl = gsap.timeline({
        onComplete: () => {
            if (document.querySelector(".preloader.hoteling")) {
                gsap.to(".preloader.hoteling", {
                    y: "-100%", duration: 1, ease: "power4.inOut", onComplete: () => {
                        const preloader = document.querySelector(".preloader.hoteling");
                        if (preloader) preloader.style.display = "none";
                    }
                });
            }
        }
    });

    if (document.querySelector(".preloader-logo")) {
        tl.to(".preloader-logo", { opacity: 1, y: -10, duration: 1, ease: "power2.out" });
    }
    if (document.querySelector(".preloader-text")) {
        tl.to(".preloader-text", { opacity: 1, y: -10, duration: 0.8, ease: "power2.out" }, "-=0.3");
    }
    if (document.querySelector(".loading-bar span")) {
        tl.to(".loading-bar span", { width: "100%", duration: 2, ease: "power2.inOut" });
    }
    tl.to(".preloader-logo, .preloader-text, .loading-bar", { opacity: 0, y: -40, duration: 0.8, ease: "power2.in" });


    //Update Header Style and Scroll to Top
    function headerStyle() {
        if ($('.main-header').length) {
            var windowpos = $(window).scrollTop();
            var siteHeader = $('.main-header');
            var scrollLink = $('.scroll-to-top');

            var HeaderHight = $('.main-header').height();
            if (windowpos >= HeaderHight) {
                siteHeader.addClass('fixed-header');
                scrollLink.fadeIn(300);
            } else {
                siteHeader.removeClass('fixed-header');
                scrollLink.fadeOut(300);
            }

        }
    }

    headerStyle();


    //Submenu Dropdown Toggle
    if ($('.main-header li').length) {
        // cleanup previous appends if re-running
        $('.main-header li.dropdown .dropdown-btn').remove();
        $('.main-header li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');

        //Dropdown Button
        $('.main-header li.dropdown .dropdown-btn').off('click').on('click', function () {
            $(this).prev('ul').slideToggle(500);
        });

        //Disable dropdown parent link
        $('.navigation li.dropdown > a').off('click').on('click', function (e) {
            e.preventDefault();
        });

        //Disable dropdown parent link
        $('.main-header .navigation li.dropdown > a,.hidden-bar .side-menu li.dropdown > a').off('click').on('click', function (e) {
            e.preventDefault();
        });

        $('.main-menu .navigation > li .mega-menu-bar > .column > ul').addClass('first-ul');
        $('.main-header .main-menu .navigation > li > ul').addClass('last-ul');

        $('.xs-sidebar-group .close-button').on('click', function (e) {
            $('.xs-sidebar-group.info-group').removeClass('isActive');
        });

        $('.about-widget').on('click', function (e) {
            $('.about-sidebar').addClass('active');
        });

        $('.about-sidebar .close-button').on('click', function (e) {
            $('.about-sidebar').removeClass('active');
        });

        $('.about-sidebar .gradient-layer').on('click', function (e) {
            $('.about-sidebar').removeClass('active');
        });
    }


    //Mobile Nav Hide Show
    if ($('.mobile-menu').length) {
        var mobileMenuContent = $('.main-header .nav-outer .main-menu').html();
        $('.mobile-menu .menu-box .menu-outer').empty().append(mobileMenuContent);
        $('.sticky-header .main-menu').empty().append(mobileMenuContent);

        //Hide / Show Submenu
        $('.mobile-menu .navigation > li.dropdown > .dropdown-btn').off('click').on('click', function (e) {
            e.preventDefault();
            var target = $(this).parent('li').children('ul');
            var target1 = $(this).parent('li').children('div.mega-menu');

            if ($(target).is(':visible')) {
                $(this).parent('li').removeClass('open');
                $(target).slideUp(500);
                $(this).parents('.navigation').children('li.dropdown').removeClass('open');
                $(this).parents('.navigation').children('li.dropdown > ul.last-ul').slideUp(500);
                return false;
            } else {
                $(this).parents('.navigation').children('li.dropdown').removeClass('open');
                $(this).parents('.navigation').children('li.dropdown').children('ul.last-ul').slideUp(500);
                $(this).parent('li').toggleClass('open');
                $(this).parent('li').children('ul.last-ul').slideToggle(500);
            }
            if ($(target1).is(':visible')) {
                $(this).parent('li').removeClass('open');
                $(target1).slideUp(500);
                $(this).parents('.navigation').children('li.dropdown').removeClass('open');
                $(this).parents('.navigation').children('li.dropdown > .mega-menu').slideUp(500);
            } else {
                $(this).parents('.navigation').children('li.dropdown').removeClass('open');
                $(this).parents('.navigation').children('li.dropdown').children('.mega-menu').slideUp(500);
                $('.first-ul').css('display', 'block');
                $(this).parent('li').toggleClass('open');
                $(this).parent('li').children('.mega-menu').slideToggle(500);
            }
        });

        //3rd Level Nav
        $('.mobile-menu .navigation > li.dropdown > ul  > li.dropdown > .dropdown-btn').off('click').on('click', function (e) {
            e.preventDefault();
            var targetInner = $(this).parent('li').children('ul');

            if ($(targetInner).is(':visible')) {
                $(this).parent('li').removeClass('open');
                $(targetInner).slideUp(500);
                $(this).parents('.navigation > ul').find('li.dropdown').removeClass('open');
                $(this).parents('.navigation > ul').find('li.dropdown > ul').slideUp(500);
                return false;
            } else {
                $(this).parents('.navigation > ul').find('li.dropdown').removeClass('open');
                $(this).parents('.navigation > ul').find('li.dropdown > ul').slideUp(500);
                $(this).parent('li').toggleClass('open');
                $(this).parent('li').children('ul').slideToggle(500);
            }
        });

        //Menu Toggle Btn
        $('.mobile-nav-toggler').on('click', function () {
            $('body').addClass('mobile-menu-visible');
        });

        //Menu Toggle Btn
        $('.mobile-menu .menu-backdrop,.mobile-menu .close-btn').on('click', function () {
            $('body').removeClass('mobile-menu-visible');
            $('.mobile-menu .navigation > li').removeClass('open');
            $('.mobile-menu .navigation li ul').slideUp(0);
        });

        $(document).keydown(function (e) {
            if (e.keyCode == 27) {
                $('body').removeClass('mobile-menu-visible');
                $('.mobile-menu .navigation > li').removeClass('open');
                $('.mobile-menu .navigation li ul').slideUp(0);
            }
        });
    }

    // Folks animation
    let endTl = gsap.timeline({
        repeat: -1,
        delay: 0.5,
        scrollTrigger: {
            trigger: '.up-down_animation',
            start: 'bottom 100%-=50px'
        }
    });
    gsap.set('.up-down_animation', {
        opacity: 0
    });
    gsap.to('.up-down_animation', {
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.up-down_animation',
            start: 'bottom 100%-=50px',
            once: true
        }
    });
    if (document.querySelector(".up-down_animation")) {
        let mySplitText = new SplitText(".up-down_animation", { type: "" });
        let chars = mySplitText.chars;

        endTl.to(chars, {
            duration: 0.5,
            scaleY: 0.6,
            ease: "power3.out",
            stagger: 0.04,
            transformOrigin: 'center bottom'
        });
        endTl.to(chars, {
            yPercent: -20,
            ease: "elastic",
            stagger: 0.03,
            duration: 0.8
        }, 0.5);
        endTl.to(chars, {
            scaleY: 1,
            ease: "elastic.out(2.5, 0.2)",
            stagger: 0.03,
            duration: 1.5
        }, 0.5);
        endTl.to(chars, {
            ease: "power2.out",
            stagger: 0.03,
            duration: 0.3
        }, 0.5);
        endTl.to(chars, {
            yPercent: 0,
            ease: "back",
            stagger: 0.03,
            duration: 0.8
        }, 0.7);
        endTl.to(chars, {
            duration: 1.4,
            stagger: 0.05
        });
    }

    //Add One Page nav
    if ($('.scroll-nav').length) {
        $('.scroll-nav ul').onePageNav();
    }

    //Custom Scroll Linsk / Sidebar
    if ($('.scroll-nav li a').length) {
        $(".scroll-nav li a").on('click', function (e) {
            e.preventDefault();
            $('body').removeClass('mobile-menu-visible');
        });
    }

    //Header Search
    if ($('.search-box-outer').length) {
        $('.search-box-outer').on('click', function () {
            $('body').addClass('search-active');
        });
        $('.close-search').on('click', function () {
            $('body').removeClass('search-active');
        });
    }

    //Jquery Spinner / Quantity Spinner
    if ($('.qty-spinner').length) {
        $("input.qty-spinner").TouchSpin({
            verticalbuttons: true
        });
    }

    //Custom Seclect Box
    if ($('.custom-select-box').length) {
        $('.custom-select-box').selectmenu().selectmenu('menuWidget').addClass('overflow');
    }

    // Title Animation
    let splitTitleLines = gsap.utils.toArray(".title-anim");

    splitTitleLines.forEach(splitTextLine => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: splitTextLine,
                start: 'top 90%',
                end: 'bottom 60%',
                scrub: false,
                markers: false,
                toggleActions: 'play none none none'
            }
        });

        const itemSplitted = new SplitText(splitTextLine, { type: "words, lines" });
        gsap.set(splitTextLine, { perspective: 400 });
        itemSplitted.split({ type: "lines" })
        tl.from(itemSplitted.lines, { duration: 1, delay: 0.3, opacity: 0, rotationX: -80, force3D: true, transformOrigin: "top center -50", stagger: 0.1 });
    });

    // Main Slider handled in Hero.jsx
    // if (window.Swiper && document.querySelector('.main-slider')) { ... }

    // Two Items Slider
    if (window.Swiper && document.querySelector('.two-item_carousel')) {
        var slider = new window.Swiper('.two-item_carousel', {
            slidesPerView: 2,
            spaceBetween: 30,
            loop: true,
            autoplay: {
                enabled: true,
                delay: 6000
            },
            navigation: {
                nextEl: '.two-item_carousel-next',
                prevEl: '.two-item_carousel-prev',
                clickable: true,
            },
            pagination: {
                el: ".two-item_carousel-pagination",
                clickable: true,
            },
            speed: 1500,
            breakpoints: {
                '1600': { slidesPerView: 2 },
                '1200': { slidesPerView: 2 },
                '992': { slidesPerView: 2 },
                '768': { slidesPerView: 1 },
                '576': { slidesPerView: 1 },
                '0': { slidesPerView: 1 },
            },
        });
    }

    // Features Slider
    if (window.Swiper && document.querySelector('.features-carousel')) {
        var slider = new window.Swiper('.features-carousel', {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            autoplay: {
                enabled: true,
                delay: 6000
            },
            navigation: {
                nextEl: '.features-carousel-next',
                prevEl: '.features-carousel-prev',
                clickable: true,
            },
            pagination: {
                el: ".features-carousel-pagination",
                clickable: true,
            },
            speed: 1500,
            breakpoints: {
                '1600': { slidesPerView: 1 },
                '1200': { slidesPerView: 1 },
                '992': { slidesPerView: 1 },
                '768': { slidesPerView: 1 },
                '576': { slidesPerView: 1 },
                '0': { slidesPerView: 1 },
            },
        });
    }

    // Instagram Slider
    if (window.Swiper && document.querySelector('.instagram-one_carousel')) {
        var slider = new window.Swiper('.instagram-one_carousel', {
            slidesPerView: 5,
            spaceBetween: 0,
            loop: true,
            autoplay: {
                enabled: true,
                delay: 6000
            },
            navigation: {
                nextEl: '.instagram-one_next-arrow',
                prevEl: '.instagram-one_prev-arrow',
                clickable: true,
            },
            pagination: {
                el: ".instagram-one_carousel-pagination",
                clickable: true,
            },
            speed: 500,
            breakpoints: {
                '1600': { slidesPerView: 5 },
                '1200': { slidesPerView: 5 },
                '992': { slidesPerView: 4 },
                '768': { slidesPerView: 4 },
                '576': { slidesPerView: 3 },
                '0': { slidesPerView: 2 },
            },
        });
    }

    // Team Slider
    if (window.Swiper && document.querySelector('.team-carousel')) {
        var slider = new window.Swiper('.team-carousel', {
            slidesPerView: 3,
            spaceBetween: 0,
            loop: true,
            centeredSlides: true,
            autoplay: {
                enabled: true,
                delay: 6000
            },
            navigation: {
                nextEl: '.team-carousel-next',
                prevEl: '.team-carousel-prev',
                clickable: true,
            },
            pagination: {
                el: ".team-carousel-pagination",
                clickable: true,
            },
            speed: 800,
            breakpoints: {
                '1500': { slidesPerView: 3 },
                '1400': { slidesPerView: 3 },
                '1300': { slidesPerView: 3, spaceBetween: 20 },
                '1210': { slidesPerView: 3, spaceBetween: 20, centeredSlides: false },
                '992': { slidesPerView: 3, spaceBetween: 20, centeredSlides: false },
                '768': { slidesPerView: 2, spaceBetween: 20, centeredSlides: false },
                '576': { slidesPerView: 1, spaceBetween: 20, centeredSlides: false },
                '0': { slidesPerView: 1, spaceBetween: 20, centeredSlides: false },
            },
        });
    }

    // Project Slider
    if (window.Swiper && document.querySelector('.project-slider')) {
        var caseSlider = new window.Swiper(".project-slider", {
            loop: true,
            autoplay: true,
            spaceBetween: 24,
            centeredSlides: true,
            speed: 6000,
            autoplay: {
                delay: 0,
                disableOnInteraction: false,
            },
            breakpoints: {
                475: { slidesPerView: 1 },
                767: { slidesPerView: 1.5 },
                992: { slidesPerView: 1.8 },
                1199: { slidesPerView: 2 },
                1299: { slidesPerView: 2.5 },
                1399: { slidesPerView: 3 },
                1499: { slidesPerView: 3.5 },
            },
        });
        window.addEventListener("resize", () => {
            if (caseSlider.autoplay) {
                caseSlider.autoplay.start();
            }
        });
    }

    // News Block One
    if (document.querySelectorAll('.news-block_one').length) {
        const newsBlocks = document.querySelectorAll('.news-block_one');

        function handleActiveClass() {
            if (window.innerWidth <= 1140) {
                // Small screens: add 'active' to all
                newsBlocks.forEach(block => block.classList.add('active'));
            } else {
                // Larger screens: only first active by default
                newsBlocks.forEach(block => block.classList.remove('active'));
                if (newsBlocks.length) {
                    newsBlocks[0].classList.add('active');
                }

                // Add hover effect
                newsBlocks.forEach(block => {
                    block.addEventListener('mouseenter', () => {
                        newsBlocks.forEach(b => b.classList.remove('active'));
                        block.classList.add('active');
                    });
                });
            }
        }

        // Run on load
        handleActiveClass();

        // Run on window resize
        window.addEventListener('resize', handleActiveClass);
    }

    //Date Picker
    if ($('.datepicker').length) {
        $('.datepicker').datepicker();
    }

    // Image Reveal Animation  used
    let imgs_reveal = document.querySelectorAll(".img-reveal");
    imgs_reveal.forEach((container) => {
        let image = container.querySelector("img");
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: container,
                toggleActions: "restart none none reset"
            }
        });

        tl.set(container, { autoAlpha: 1 });
        tl.from(container, 1.5, {
            xPercent: -100,
            ease: Power2.out
        });
        tl.from(image, 1.5, {
            xPercent: 100,
            scale: 1.3,
            delay: -1.5,
            ease: Power2.out
        });
    });

    // Accordion Box
    if ($('.accordion-box').length) {
        $(".accordion-box").on('click', '.acc-btn', function () {

            var outerBox = $(this).parents('.accordion-box');
            var target = $(this).parents('.accordion');
            var accContent = $(this).next('.acc-content');

            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
                target.removeClass('active-block');
                accContent.slideUp(300);
            } else {
                $(outerBox).find('.accordion .acc-btn').removeClass('active');
                $(outerBox).children('.accordion').removeClass('active-block');
                $(outerBox).find('.accordion .acc-content').slideUp(300);

                $(this).addClass('active');
                target.addClass('active-block');
                accContent.slideDown(300);
            }
        });
    }

    let imgs_reveal_two = document.querySelectorAll(".img-reveal_two");

    imgs_reveal_two.forEach((container) => {
        let image = container.querySelector("img");
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: container,
                toggleActions: "restart none none reset"
            }
        });

        tl.set(container, { autoAlpha: 1 });
        tl.from(container, 1.5, {
            xPercent: 100,
            ease: Power2.out
        });
        tl.from(image, 1.5, {
            xPercent: -100,
            scale: 1.3,
            delay: -1.5,
            ease: Power2.out
        });
    });

    // Helper function to move image
    function followImageCursor(event, item, childIndex) {
        const contentBox = item.getBoundingClientRect();
        const dx = event.clientX - contentBox.x;
        const dy = event.clientY - contentBox.y;
        item.children[childIndex].style.transform = `translate(${dx}px, ${dy}px)`;
    }

    // Debounce function
    function debounce(fn, delay) {
        let frame;
        return function (...args) {
            cancelAnimationFrame(frame);
            frame = requestAnimationFrame(() => fn.apply(this, args));
        };
    }

    // Apply for .service-block_two-inner
    document.querySelectorAll(".service-block_two-inner").forEach((item) => {
        item.addEventListener(
            "mousemove",
            debounce((event) => followImageCursor(event, item, 3), 16)
        );
    });

    //Progress Bar
    if ($('.progress-line').length) {
        $('.progress-line').appear(function () {
            var el = $(this);
            var percent = el.data('width');
            $(el).css('width', percent + '%');
        }, { accY: 0 });
    }

    //Fact Counter + Text Count
    if ($('.count-box').length) {
        $('.count-box').appear(function () {
            var $t = $(this),
                n = $t.find(".count-text").attr("data-stop"),
                r = parseInt($t.find(".count-text").attr("data-speed"), 10);

            if (!$t.hasClass("counted")) {
                $t.addClass("counted");
                $({
                    countNum: $t.find(".count-text").text()
                }).animate({
                    countNum: n
                }, {
                    duration: r,
                    easing: "linear",
                    step: function () {
                        $t.find(".count-text").text(Math.floor(this.countNum));
                    },
                    complete: function () {
                        $t.find(".count-text").text(this.countNum);
                    }
                });
            }
        }, { accY: 0 });
    }

    if ($('.clock-wrapper').length) {
        (function () {
            var now = new Date(),
                hourDeg = now.getHours() / 12 * 360 + now.getMinutes() / 60 * 30,
                minuteDeg = now.getMinutes() / 60 * 360 + now.getSeconds() / 60 * 6,
                secondDeg = now.getSeconds() / 60 * 360,
                stylesDeg = [
                    "@-webkit-keyframes rotate-hour{from{transform:rotate(" + hourDeg + "deg);}to{transform:rotate(" + (hourDeg + 360) + "deg);}}",
                    "@-webkit-keyframes rotate-minute{from{transform:rotate(" + minuteDeg + "deg);}to{transform:rotate(" + (minuteDeg + 360) + "deg);}}",
                    "@-webkit-keyframes rotate-second{from{transform:rotate(" + secondDeg + "deg);}to{transform:rotate(" + (secondDeg + 360) + "deg);}}",
                    "@-moz-keyframes rotate-hour{from{transform:rotate(" + hourDeg + "deg);}to{transform:rotate(" + (hourDeg + 360) + "deg);}}",
                    "@-moz-keyframes rotate-minute{from{transform:rotate(" + minuteDeg + "deg);}to{transform:rotate(" + (minuteDeg + 360) + "deg);}}",
                    "@-moz-keyframes rotate-second{from{transform:rotate(" + secondDeg + "deg);}to{transform:rotate(" + (secondDeg + 360) + "deg);}}"
                ].join("");
            document.getElementById("clock-animations").innerHTML = stylesDeg;
        })();
    }

    // CURSOR
    var cursor = $(".cursor"),
        follower = $(".cursor-follower");
    var posX = 0, posY = 0, mouseX = 0, mouseY = 0;

    TweenMax.to({}, 0.016, {
        repeat: -1,
        onRepeat: function () {
            posX += (mouseX - posX) / 9;
            posY += (mouseY - posY) / 9;
            TweenMax.set(follower, { css: { left: posX - 12, top: posY - 12 } });
            TweenMax.set(cursor, { css: { left: mouseX, top: mouseY } });
        }
    });

    $(document).on("mousemove", function (e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    //circle
    $(".theme-btn, a").on("mouseenter", function () {
        cursor.addClass("active");
        follower.addClass("active");
    });
    $(".theme-btn, a").on("mouseleave", function () {
        cursor.removeClass("active");
        follower.removeClass("active");
    });

    // LightBox Image
    if ($('.lightbox-image').length) {
        $('.lightbox-image').magnificPopup({
            type: 'image',
            gallery: { enabled: true }
        });
    }

    // LightBox Video
    if ($('.lightbox-video').length) {
        $('.lightbox-video').magnificPopup({
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            iframe: {
                patterns: {
                    youtube: {
                        index: 'youtube.com',
                        id: 'v=',
                        src: 'https://www.youtube.com/embed/%id%'
                    },
                },
                srcAction: 'iframe_src',
            },
            fixedContentPos: false
        });
    }

    // Scroll to a Specific Div
    if ($('.scroll-to-target').length) {
        $(".scroll-to-target").on('click', function () {
            var target = $(this).attr('data-target');
            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 1500);
        });
    }

    // Elements Animation
    if ($('.wow').length) {
        var wow = new WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            mobile: true,
            live: true
        }
        );
        wow.init();
    }

    // Scroll Header Event
    $(window).on('scroll', function () {
        headerStyle();
    });

};
