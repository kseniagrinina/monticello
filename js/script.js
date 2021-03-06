$(document).ready(function () {
    $('.header-slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        vertical: true,
        verticalSwiping: true,
        speed: 1000,
    });



    $('.news-slider').slick({
        arrows: true,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1340,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });


    const nav = document.getElementById('nav');
    $('.js--section-projects').waypoint(function (direction) {
        if (direction == 'down') {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '70px;'
    });


    // Select all links with hashes
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 500, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });


});



function initMap() {
    const options = {
        zoom: 10,
        center: { lat: 40.7128, lng: -74.0060 }
    }
    const map = new google.maps.Map(document.getElementById("map"), options);
    const marker = new google.maps.Marker({
        position: { lat: 40.6782, lng: -73.9442 },
        map: map,
        icon: '../img/marker.svg'
    });

    const infoWindow = new google.maps.InfoWindow({
        content: '<h4>91 Nolan Extensions Suite 670</h4>'
    });

    marker.addListener("click", function () {
        infoWindow.open(map, marker);
    })
};
