$('.owl-main').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
    autoplay: true,
    dots: true,
    items: 1
})

$('.owl-instagram').owlCarousel({
    loop: true,
    autoplay: true,
    items: 1,
    lazyLoad: true,
    nav: false,
    dots: false,
    loop: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        600: {
            items: 3,
            nav: false
        },
        992: {
            items: 4,
            nav: true,
            loop: false
        }
    }
})

$('.owl-tips').owlCarousel({
    loop: true,
    margin: 15,
    autoplay: true,
    responsive: {
        0: {
            items: 1,
            nav: false,
            loop: true,
        },
        600: {
            items: 2,
            nav: false,
            loop: true
        },
        992: {
            items: 3,
            nav: false,
            loop: true
        }
    }
})

$('.owl-video').owlCarousel({
    loop: true,
    margin: 15,
    autoplay: true,
    items: 1
})

$('.owl-articles').owlCarousel({
    loop: true,
    margin: 15,
    autoplay: true,
    items: 1,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        992: {
            items: 2,
            nav: false
        }
    }
})



$('input').focus(function () {
    $(this).parents('.form-group').addClass('focused');
});

$('input').blur(function () {
    var inputValue = $(this).val();
    if (inputValue == "") {
        $(this).removeClass('filled');
        $(this).parents('.form-group').removeClass('focused');
    } else {
        $(this).addClass('filled');
    }
})