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

    $('.js--nav-icon').click(function () {
        const nav = $('.js--main-nav');
        const icon = $('.js--nav-icon i')
        nav.slideToggle(200);
        if (icon.hasClass('fa-bars')) {
            icon.addClass('fa-times');
            icon.removeClass('fa-bars');
        } else {
            icon.addClass('fa-bars');
            icon.removeClass('fa-times');
        };


    });


    // const nav = document.getElementById('nav');
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



    // document.getElementById(‘modalNewYork’)  = $(‘#modalNewYork’)


    const modalNewYork = document.getElementById('modalNewYork');
    const modalBtnNewYork = document.getElementById('modalBtnNewYork');
    const closeBtn = document.getElementsByClassName('closeBtn')[0];

    modalBtnNewYork.addEventListener('click', openModalNewYork);
    closeBtn.addEventListener('click', closeModal);
    window.addEventListener('click', outsideClick);

    function openModalNewYork() {
        modalNewYork.style.display = 'block';
    }

    function closeModal() {
        modalNewYork.style.display = 'none';
    }

    function outsideClick(e) {
        if (e.target == modalNewYork) {
            modalNewYork.style.display = 'none';
        }
    }
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

