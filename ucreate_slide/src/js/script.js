/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'assets/particlesjs-config.json', function () { });

$(document).ready(function () {

    $(window).scroll(function () { 
        if ($(window).scrollTop() > 1) {
            $('.header').addClass('shrink');
        } else {
            $('.header').removeClass('shrink');
        }
    });

    $('#fullpage').fullpage({
        //options here
        autoScrolling: true,
        scrollHorizontally: true,
        navigation: true,
        scrollBar: true
    });

    $('.popup-with-zoom-anim').magnificPopup({
        type: 'inline',

        fixedContentPos: false,
        fixedBgPos: true,

        overflowY: 'auto',

        closeBtnInside: true,
        preloader: false,

        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-zoom-in'
    });

    $('.responsive').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

});