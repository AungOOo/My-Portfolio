$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });
    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });
    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // Timeline animation code directly here (no DOMContentLoaded wrapper)
    $(document).ready(function() {
        // Sticky navbar and scroll-up button toggle
        $(window).scroll(function() {
            if (this.scrollY > 20) {
                $('.navbar').addClass("sticky");
            } else {
                $('.navbar').removeClass("sticky");
            }

            if (this.scrollY > 500) {
                $('.scroll-up-btn').addClass("show");
            } else {
                $('.scroll-up-btn').removeClass("show");
            }
        });

        // Scroll-up button click
        $('.scroll-up-btn').click(function() {
            $('html').animate({ scrollTop: 0 });
            $('html').css("scrollBehavior", "auto");
        });

        // Smooth scroll on menu item click
        $('.navbar .menu li a').click(function() {
            $('html').css("scrollBehavior", "smooth");
        });

        // Toggle menu/navbar
        $('.menu-btn').click(function() {
            $('.navbar .menu').toggleClass("active");
            $('.menu-btn i').toggleClass("active");
        });

        // Timeline scroll animation
        $(window).on('scroll', function () {
            $('.timeline-item').each(function () {
                const elementTop = $(this).offset().top;
                const scrollTop = $(window).scrollTop();
                const windowHeight = $(window).height();

                if (elementTop < scrollTop + windowHeight - 100) {
                    $(this).addClass('show');
                }
            });
        });

        // Trigger once on page load
        $(window).trigger('scroll');
    });

});
