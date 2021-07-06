$(document).ready(function() {
    var checkNavbar = true;
    if ($(window).width() >= 900) {
        checkNavbar = true;
    } else {
        checkNavbar = false;
    }
    $('.toggle-icon').on("click", function() {
        checkNavbar = !checkNavbar;
        // console.log(checkNavbar);

        if (checkNavbar == true) { //show navbar
            $(".nav-item-text").css('display', 'flex');
            $('.navbarweb').css({
                'width': '225px',
                'transition': '100ms'
            });
            $('.content').css('width', 'calc(100% - 226px)');
            $('.content').css('left', '226px');
            $('.logo-site').css('border-bottom', 'none');
        } else {
            if (checkNavbar == false) { // not show navbar
                $('.navbarweb').css({
                    'width': '51px',
                    'transition': '100ms'
                });
                $(".nav-item-text").css('display', 'none');
                $('.logo-site').css('border-bottom', '1px solid #e5e5e5');
                $('.content').css('width', 'calc(100% - 51px)');
                $('.content').css('left', '51px');
            }
        }

        //js nav-item-icon
        // $('.nav-item-icon').on('click', function() {
        //     $(".nav-item-text").css('display', 'flex');
        //     $('.navbarweb').css('width', '225px');
        //     $('.content').css('width', 'calc(100% - 226px)');
        //     $('.content').css('left', '226px');
        //     $('.logo-site').css('border-bottom', 'none');
        // })
    })
})