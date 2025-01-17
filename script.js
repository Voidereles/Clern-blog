



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
    var time = 5555; // time in seconds

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

    $('.owl-articles').owlCarousel({
        loop: true,
        margin: 15,
        autoplay: true,
        lazyLoad: true,
        autoplayHoverPause: true,
        dots: false,
        items: 1,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,

                dots: false
            },

            600: {
                items: 2
            }
        }
    })

    $('.owl-instagram').owlCarousel({
        loop: true,
        autoplay: true,
        lazyLoad: true,
        items: 1,
        nav: false,
        autoplayHoverPause: true,
        dots: false,
        responsiveClass: true,
        responsive: {
            1200: {
                items: 4,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            0: {
                items: 1,
                nav: false
            }
        }
    })

    $('.owl-tips').owlCarousel({
        loop: true,
        margin: 15,
        autoplay: true,
        autoplayHoverPause: true,
        lazyLoad: true,
        dots: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            992: {
                items: 3,
                nav: false
            }
        }
    })



    var owl = $(".owl-main");

    owl.owlCarousel({
        autoplayHoverPause: true,
        onInitialized: progressBar,
        onTranslate: moved,
        loop: true,
        nav: true,
        navText: [" <img src='images/svg/light-arrow-left.svg' class='fa fa-chevron-left'>", " <img src='images/svg/light-arrow-right.svg' class='fa fa-chevron-right'>"],
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