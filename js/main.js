$(function () {
    $('.menu__slider').slick({
        dots: true,
        arrows: false,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        dotsClass: 'slick-dots__menu'
    });

    $('.menu-list__slider').slick({
        dots: true,
        arrows: false,
        speed: 500,
        dotsClass: 'slick-dots__menu-list'
    });

    $("#scroll").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1000);
    });
});
