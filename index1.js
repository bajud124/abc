$(document).ready(function () {
    $('.trending-project').owlCarousel({
        loop: true,
        margin: 10,
        navText: ['<img class="arrow-left" src="images/arrow-toggle.png" >', '<img class="arrow-right" src="images/arrow-toggle.png" />'],
        responsiveClass: false,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 2,
                nav: true
            },
            1000: {
                items: 4,
                nav: true,
                loop: true
            }
        }
    });
    $('.feature-destination').owlCarousel({
        loop: true,
        margin: 10,
        navText: ['<img class="arrow-left" src="images/arrow-toggle.png" >', '<img class="arrow-right" src="images/arrow-toggle.png" />'],
        responsiveClass: false,
        responsive: {
            0: {
                items: 2,
                nav: true
            },
            600: {
                items: 3,
                nav: true
            },
            1000: {
                items: 6,
                nav: true,
                loop: true
            }
        }
    });
    $('.affordable-project').owlCarousel({
        loop: true,
        margin: 10,
        navText: ['<img class="arrow-left" src="images/arrow-toggle.png" >', '<img class="arrow-right" src="images/arrow-toggle.png" />'],
        responsiveClass: false,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 3,
                nav: true
            },
            1000: {
                items: 5,
                nav: true,
                loop: true
            }
        }
    });
});