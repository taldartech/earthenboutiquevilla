$(document).ready(function() {
    "use strict";
    /*masonry*/
    $('#container').each(function() {
        $('#container').masonry();
    });

    /*lightbox*/
    $('.lightbox').each(function() {
        $('.lightbox').littleLightBox();
    });
    /*menu-dropdow*/
    $('.navbar a.dropdown-toggle').on('click', function(e) {
        var $el = $(this);
        var $parent = $(this).offsetParent(".dropdown-menu");
        $(this).parent("li").toggleClass('open');

        if (!$parent.parent().hasClass('nav')) {
            $el.next().css({
                "top": $el[0].offsetTop,
                "left": $parent.outerWidth() - 4
            });
        }

        $('.nav li.open').not($(this).parents("li")).removeClass("open");

        return false;
    });
    /*end/menu-dropdow*/
    /*owlCarousel-header*/
    $('#index12').owlCarousel({
        loop: true,
        nav: true,
        autoplay: true,
        autoplayTimeout: 9000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    $('#index122').owlCarousel({
        loop: true,
        nav: true,
        margin: 30,
        autoplay: true,
        autoplayTimeout: 9000,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });
    $('#index121').owlCarousel({
        loop: true,
        nav: true,
        autoplay: true,
        autoplayTimeout: 9000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    /*end-owlCarousel-header*/

    /* Modal-video*/
    $(".btn-play").on("click", function(event) {
        var target = $(this).attr('href'),
            url = $(target).data('video');

        var has_query_string = url.split('?', url);
        if (typeof has_query_string[1] == 'string') {
            url += '&' + $(target).data('query-string');
        } else {
            url += '?' + $(target).data('query-string');
        }
        $(target).find('iframe').attr('src', url);

        $(target).addClass('opened');
        $(target).on("click", function() {
            $(this).removeClass('opened').attr('src', '');
        });

        event.preventDefault();
    });
    /*end/modal video*/

    /*  Show/hidden-password*/

    $(".toggle-password").on("click", function() {

        $(this).toggleClass("fa-eye fa-eye-slash");
        var input = $($(this).attr("data-toggle"));
        if (input.attr("type") == "password") {
            input.attr("type", "text");
        } else {
            input.attr("type", "password");
        }
    });

    /* end/ Show/hidden-password*/

    /*check-uot*/
    $('.dropdown-menu li').on("click", function() {
        $('#selected').text($(this).text());
        $('li ').removeClass("active");
        $(this).addClass("active");
    });
    $('.dropdown-menu li').on("click", function() {
        $('#selected1').text($(this).text());
        $('li ').removeClass("active");
        $(this).addClass("active");
    });

    /*end/check-uot*/

    /*countdown*/
    function makeTimer() {

        var endTime = new Date("23 Oct 2018 9:56:00 GMT+01:00");
        endTime = (Date.parse(endTime) / 1000);

        var now = new Date();
        now = (Date.parse(now) / 1000);

        var timeLeft = endTime - now;

        var days = Math.floor(timeLeft / 86400);
        var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
        var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
        var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

        if (hours < "10") {
            hours = "0" + hours;
        }
        if (minutes < "10") {
            minutes = "0" + minutes;
        }
        if (seconds < "10") {
            seconds = "0" + seconds;
        }

        $("#days").html(days + "<span>Days</span>");
        $("#hours").html(hours + "<span>Hours</span>");
        $("#minutes").html(minutes + "<span>Minutes</span>");
        $("#seconds").html(seconds + "<span>Seconds</span>");

    }
    setInterval(function() {
        makeTimer();
    }, 1000);
    /*end/countdown*/

    /*select*/
    aweSelect();

    function aweSelect() {
        $('.awe-select').each(function(index, el) {
            $(this).selectpicker();
        });

    }

    /*end/select*/

    /*scroll-header*/
    var stickyNav = $('header').offset().top;
    $(window).scroll(function() {
        if ($(window).scrollTop() > stickyNav) {
            $('header').addClass('header-top-sky');
        } else {
            $('header').removeClass('header-top-sky');
        }
    });
    /*end/scroll-header*/

    /*datepicker*/
    $(function() {
        $('#datepicker').each(function() {
            $(this).datepicker({
                autoclose: true,
                todayHighlight: true
            }).datepicker('update', new Date());
        });
        $('#datepickeri').each(function() {
            $(this).datepicker({
                autoclose: true,
                todayHighlight: true
            }).datepicker('update', new Date());
        });

        $('#datepicker1').each(function() {
            $("#datepicker1").datepicker({
                dateFormat: 'mm/dd/yy',
                changeMonth: true,
                changeYear: true,
                yearRange: '-100y:c+nn',
                maxDate: '-1d'
            });
        });

        $('#datepicker2').each(function() {
            $("#datepicker2").datepicker({
                dateFormat: 'mm/dd/yy',
                changeMonth: true,
                changeYear: true,
                yearRange: '-100y:c+nn',
                maxDate: '-1d'
            });
        });

    });

    /*end/datepicker*/

    /*STATISTICS Count Number*/
    StatisticsCount();

    function StatisticsCount() {
        if ($('.item .count').length) {

            $('.item').appear(function() {

                var count_element = $('.count', this).html();
                $(".count", this).countTo({
                    from: 0,
                    to: count_element,
                    speed: 2000,
                    refreshInterval: 50,
                });
            });
        }
    }

    /*click-hamburger*/

    $(".navbar-toggle").on("click", function() {
            $(this).toggleClass("hamburger-icon");
        })
        /*end/hamburger*/

    var day, month, year;

    /*owlCarousel-events*/
    $('#events').owlCarousel({
        loop: true,
        nav: true,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 9000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1200: {
                items: 3
            }
        }
    });
    $('#events-v2').owlCarousel({
        loop: true,
        nav: true,
        margin: 30,
        autoplay: true,
        autoplayTimeout: 9000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
    $('#events-v3').owlCarousel({
        loop: true,
        nav: true,
        margin: 30,
        autoplay: true,
        autoplayTimeout: 9000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 2
            }
        }
    });
    /*end-owlCarousel-events*/

    /*owlCarousel-testimonials*/
    $('#testimonials').owlCarousel({
        loop: true,
        nav: true,
        margin: 30, // autoplay:true,
        // autoplayTimeout:9000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    /*end-owlCarousel-testimonials*/
    /*owlCarousel-rooms*/
    $('#rooms').owlCarousel({
        loop: true,
        nav: true,
        margin: 0,
        /* autoplay: true,
        autoplayTimeout: 12000,*/
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    /*end-owlCarousel-rooms*/
    $('ul li a').on("click", function() {
        $('li a').removeClass("active");
        $(this).addClass("active");
    });
    /*scroll-top*/
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });
    //Click event to scroll to top
    $('.scrollToTop').on("click", function() {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
    (function($) {
        /* Gallery Isotope */
        function GalleryIsotope() {
            if ($('.gallery').length) {
                $('.gallery').each(function(index, el) {
                    var $this = $(this),
                        $isotope = $this.find('.gallery-isotope'),
                        $filter = $this.find('.gallery-cat');

                    if ($isotope.length) {
                        var isotope_run = function(filter) {
                            $isotope.isotope({
                                itemSelector: '.item-isotope',
                                filter: filter,
                                percentPosition: true,
                                masonry: {
                                    columnWidth: '.item-size'
                                },
                                transitionDuration: '0.6s',
                                hiddenStyle: {
                                    opacity: 0
                                },
                                visibleStyle: {
                                    opacity: 1
                                }
                            });
                        }

                        $filter.on('click', 'a', function(event) {
                            event.preventDefault();
                            $(this).parents('ul').find('.active').removeClass('active');
                            $(this).parent('li').addClass('active');
                            isotope_run($(this).attr('data-filter'));
                        });

                        isotope_run('*');
                    }
                });
            }
        }

        $(window).load(function() {
            $('#preloader').delay(1000).fadeOut('400', function() {
                $(this).fadeOut()
            });
            $('body').append('<div class="awe-popup-overlay" id="awe-popup-overlay"></div><div class="awe-popup-wrap" id="awe-popup-wrap"><div class="awe-popup-content"></div><span class="awe-popup-close" id="awe-popup-close"></div>');
            GalleryIsotope();
        });

    })(jQuery);


    /*datepicker*/
    $(".carousel-search li a").on("click", function() {
        var selText = $(this).text();
        $(this).parents('.btn-group').find('.dropdown-toggle').html(selText);
    });
    /*end/datepicker*/
    /*rooms-detail*/
    $('.gallery3').each(function() {
        $(this).vitGallery({
            debag: true,
            thumbnailMargin: 37,
            fullscreen: true
        });
    });
    $('.gallery1').each(function() {
        $(this).vitGallery({
            controls: 'points',
            transition: 'crossfade',
            autoplay: false,
            fullscreen: true
        });
    });
    $('.gallery2').each(function() {
        $(this).vitGallery({
            controls: 'points',
            transition: 'slide-blur',
            autoplay: false,
            fullscreen: true,
            thumnailAnimationSpeed: 500,
            animateSpeed: 500,
        });
    });

});