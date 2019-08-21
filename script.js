// $('.owl-main').owlCarousel({
//     loop: true,
//     margin: 10,
//     nav: true,
//     lazyLoad: true,
//     navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
//     // autoplay: true,
//     dots: true,
//     items: 1
// })

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
    lazyLoad: true,
    responsiveClass: true,
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
    lazyLoad: true,
    items: 1
})

$('.owl-articles').owlCarousel({
    loop: true,
    margin: 15,
    autoplay: true,
    lazyLoad: true,
    items: 1,
    responsiveClass: true,
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









$(document).ready(function () {
    var time = 5; // time in seconds

    var $progressBar,
        $bar,
        $elem,
        isPause,
        tick,
        percentTime;
    function progressBar(elem) {
        $elem = elem;
        buildProgressBar();
        start();
    }


    function buildProgressBar() {
        $progressBar = $("<div>", {
            id: "progressBar"
        });
        $bar = $("<div>", {
            id: "bar"
        });
        $progressBar.append($bar).appendTo($(".owl-main .owl-dots .active"));
    }
    function moved() {
        $("#progressBar").remove();
        buildProgressBar();
        clearTimeout(tick);
        start();
    }
    var owl = $(".owl-main");

    owl.owlCarousel({
        autoplayHoverPause: true,
        onInitialized: progressBar,
        onTranslate: moved,
        loop: true,
        nav: true,
        navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
        responsive: {
            0: {
                items: 1
            }
        }
    });
    function interval() {
        if (isPause === false) {
            percentTime += 1 / time;
            //reset timer
            $("#bar").css({
                width: percentTime + "%"
            });
            //if percentTime is equal or greater than 100
            if (percentTime >= 100) {
                //slide to next item 
                console.log(true);
                $(".owl-main").trigger('next.owl.carousel');
            }
        }
    }
    function start() {

        percentTime = 0;
        isPause = false;
        //run interval every 10 miliseconds
        tick = setInterval(interval, 10);
    };
    owl.on('mouseover', function () {
        isPause = true;
    });
    owl.on('mouseout', function () {
        isPause = false;
    });

});