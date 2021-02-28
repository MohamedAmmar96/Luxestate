$(window).on('load', function() {

    $(".loading-overlay .loading-overlay-box").fadeOut(500,
        function() {
            $(this).parent().fadeOut(500);
            $("body").removeClass("overflow")
        });
})


var wow = new WOW();
wow.init();

$(document).ready(function() {

    $(".nav-link").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {
                window.location.hash = hash;
            });
        }
    });


    $(".scroll").click(function() {
        $('html, body').animate({
            scrollTop: $("#statistics").offset().top
        }, 800);
    });

    $('.statistic-counter').each(function() {
        var myCounter = $(this),
            countTo = myCounter.attr('count');

        $({ countNum: myCounter.text() }).animate({
                countNum: countTo
            },

            {
                duration: 4000,
                easing: 'linear',
                step: function() {
                    myCounter.text(Math.floor(this.countNum));
                },
                complete: function() {
                    myCounter.text(this.countNum);
                }
            });
    });

    if ($(window).width() <= 991) {
        $(".apartments .apartments-box").addClass("owl-carousel owl-theme");
        $(".apartments-box .small-item").removeClass("owl-carousel");
        $('.apartments .owl-carousel').owlCarousel({
            loop: true,
            autoplay: true,
            autoplayTimeout: 4000,
            margin: 0,
            // rtl: true,
            responsiveClass: true,
            nav: false,
            dots: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2,
                    // margin: 10,
                }
            }
        })
    } else {
        $(".apartments-box .small-item").removeClass("owl-carousel");
        $(".apartments-box .small-item").removeClass("owl-carousel");
    };

    // Footer Section Start --------------------------------------------------------------------------------------------------------------------
    // To Toggle Between Footer Slide Menus
    if ($(window).width() <= 991) {
        $('.collapse[data-parent="#parent"]').on('show.bs.collapse', function() {
            $('.collapse[data-parent="#parent"]').not(this).collapse('hide');
        });
    } else {
        $(".slide-list").addClass("in")
        $('.footer-link').on('click', function(e) {
            e.stopPropagation();
        });
    }
    //This is To Change between footer collapse link ----------------------------------------------------------------
    // First Collapse ---------------------------
    $(".first .footer-heading .footer-link").click(function() {
        var x = $(".first .slide-list")
        if (x.hasClass("collapse")) {
            $(".first .footer-heading .footer-link").addClass("minus")
                //----
            $(".second .footer-heading .footer-link").removeClass("minus")
            $(".third .footer-heading .footer-link").removeClass("minus")
            $(".last .footer-heading .footer-link").removeClass("minus")

        }
    });
    $(".first .footer-heading .footer-link").click(function() {
        var x = $(".first .slide-list")
        if (x.hasClass("in")) {
            $(".first .footer-heading .footer-link").removeClass("minus")
            $(".first .footer-heading .footer-link").addClass("plus")
        }
    });

    // Second Collapse ---------------------------
    $(".second .footer-heading .footer-link").click(function() {
        var x = $(".second .slide-list")
        if (x.hasClass("collapse")) {
            $(".second .footer-heading .footer-link").addClass("minus")
            $(".first .footer-heading .footer-link").removeClass("minus")
            $(".third .footer-heading .footer-link").removeClass("minus")
            $(".last .footer-heading .footer-link").removeClass("minus")
        }
    });
    $(".second .footer-heading .footer-link").click(function() {
        var x = $(".second .slide-list")
        if (x.hasClass("in")) {
            $(".second .footer-heading .footer-link").removeClass("minus")
            $(".second .footer-heading .footer-link").addClass("plus")
        }
    });

    // Third Collapse ---------------------------
    $(".third .footer-heading .footer-link").click(function() {
        var x = $(".third .slide-list")
        if (x.hasClass("collapse")) {
            $(".third .footer-heading .footer-link").addClass("minus")
            $(".first .footer-heading .footer-link").removeClass("minus")
            $(".second .footer-heading .footer-link").removeClass("minus")
            $(".last .footer-heading .footer-link").removeClass("minus")
        }
    });
    $(".third .footer-heading .footer-link").click(function() {
        var x = $(".third .slide-list")
        if (x.hasClass("in")) {
            $(".third .footer-heading .footer-link").removeClass("minus")
            $(".third .footer-heading .footer-link").addClass("plus")
        }
    });

    // Last Collapse ---------------------------
    $(".last .footer-heading .footer-link").click(function() {
        var x = $(".last .slide-list")
        if (x.hasClass("collapse")) {
            $(".last .footer-heading .footer-link").addClass("minus")
            $(".first .footer-heading .footer-link").removeClass("minus")
            $(".second .footer-heading .footer-link").removeClass("minus")
            $(".third .footer-heading .footer-link").removeClass("minus")
        }
    });
    $(".last .footer-heading .footer-link").click(function() {
        var x = $(".last .slide-list")
        if (x.hasClass("in")) {
            $(".last .footer-heading .footer-link").removeClass("minus")
            $(".last .footer-heading .footer-link").addClass("plus")
        }
    });
    // if ($(window).width() <= 991) {
    //     $(".overlay-box").unwrap();
    // }


    // This is To Open search Box
    $(".search").click(function() {
        $("body").toggleClass("overflow");
        $(".overlay-box").slideToggle(300);
        $(".search .search-icon").toggleClass("open-search close-search")
        $(".search-box").fadeToggle(500);
        $(".main-title").fadeToggle(500);
        $(this).toggleClass("btn-loc");
    });

    $(".overlay-box").click(function() {
        $("body").toggleClass("overflow");
        $(".search .search-icon").toggleClass("open-search close-search")
        $(".search-box").fadeToggle(500);
        $(".main-title").fadeToggle(500);
        $(".overlay-box").slideUp(500);
        $(".search").toggleClass("btn-loc");
    });


    //This is to Open Side Menu in Small Screens
    $(".menu").click(function() {
        $("body").addClass("overflow")
        $(".menu .menu-icon").removeClass("open-menu")
        $(".menu .menu-icon").addClass("close-menu")
        $(".mo-nav").addClass("menu-open");
        $(".overlay-box2").fadeIn(500);
    });
    $(".nav-link,.close,.overlay-box2").click(function() {
        $("body").removeClass("overflow")
        $(".menu .menu-icon").addClass("open-menu")
        $(".menu .menu-icon").removeClass("close-menu")
        $(".mo-nav").removeClass("menu-open");
        $(".overlay-box2").fadeOut(500);
    });
});