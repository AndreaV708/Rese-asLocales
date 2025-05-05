(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {

        // Dropdown con hover
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').hover(
                    function () {
                        $(this).addClass('show');
                        $(this).find('.dropdown-toggle').attr('aria-expanded', 'true');
                        $(this).find('.dropdown-menu').addClass('show');
                    },
                    function () {
                        $(this).removeClass('show');
                        $(this).find('.dropdown-toggle').attr('aria-expanded', 'false');
                        $(this).find('.dropdown-menu').removeClass('show');
                    }
                );
            } else {
                $('.navbar .dropdown').off('mouseenter mouseleave');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);

        // Carrusel de galería
        $('.owl-carousel').owlCarousel({
            loop: true,
            margin: 20,
            nav: true,
            dots: true,
            autoplay: true,
            autoplayTimeout: 4000,
            navText: [
                "<span class='btn btn-primary'>Anterior</span>",
                "<span class='btn btn-primary'>Siguiente</span>"
            ],
            responsive: {
                0: { items: 1 },
                576: { items: 2 },
                768: { items: 3 },
                992: { items: 3 }
            }
        });
        
    });

    //Filtro de busqueda y categoria
    const searchInput = document.getElementById('searchInput');
    const categoryFilter = document.getElementById('categoryFilter');
    const packageItems = document.querySelectorAll('.package-item');

    function filterPackages() {
        const search = searchInput.value.toLowerCase();
        const category = categoryFilter.value.toLowerCase();

        packageItems.forEach(item => {
            const title = item.querySelector('h5')?.innerText.toLowerCase();
            const type = item.getAttribute('data-type')?.toLowerCase();

            const matchesSearch = !search || (title && title.includes(search));
            const matchesCategory = !category || type === category;

            item.style.display = (matchesSearch && matchesCategory) ? '' : 'none';
        });
    }

    if (searchInput && categoryFilter) {
        searchInput.addEventListener('input', filterPackages);
        categoryFilter.addEventListener('change', filterPackages);
    }



    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Date and time picker
    $('.date').datetimepicker({
        format: 'L'
    });
    $('.time').datetimepicker({
        format: 'LT'
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        margin: 30,
        dots: true,
        loop: true,
        center: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


    
})(jQuery);

