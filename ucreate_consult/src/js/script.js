/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles', 'assets/particlesjs-config.json', function () { });

new WOW().init();

$(document).ready(function () {

    $(window).scroll(function () {
        if ($(window).scrollTop() > 1) {
            $('.header').addClass('header_fixed');
        } else {
            $('.header').removeClass('header_fixed');
        }
    });

    $('.popup_btn').magnificPopup({
        type: 'inline',

        fixedContentPos: false,
        fixedBgPos: true,

        overflowY: 'auto',

        closeBtnInside: true,
        preloader: false,

        midClick: true,
        removalDelay: 300,
        mainClass: 'popup_zoom_in'
    });

    $('.partners_slider').slick({
        autoplay: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

});