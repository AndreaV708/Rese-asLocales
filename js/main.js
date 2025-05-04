(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
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

