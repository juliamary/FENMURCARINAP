(function() {

    $(".owl-carousel").owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:3,
                nav:true,
                loop: false
            },
            600:{
                items:4,
                nav:true,
                loop: false
            },
            992:{
                items:3,
                nav:true,
                loop:false
            }
        }
    });

    $(".owl-carousel2").owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true,
                loop: false
            }
        }
    });

})();