$('.owl-main').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
    autoplay: true,
    items: 1
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