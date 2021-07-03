//js toggle
var check = true;
$('.toggle-icon').on("click", function() {
    check = !check;
    console.log(check);
    if ($(window).width() >= 900) {
        if (check == true) { //show navbar
            $(".nav-item-text").css('display', 'flex');
            $('.navbarweb').css({
                'width': '225px',
                'transition': '100ms'
            });
            $('.content').css('width', 'calc(100% - 226px)');
            $('.content').css('left', '226px');
            $('.logo-site').css('border-bottom', 'none');
        } else {
            if (check == false) { // not show navbar
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
    } else {
        if (check == true) { // not show navbar 
            $(".nav-item-text").css('display', 'none');
            $('.logo-site').css('border-bottom', '1px solid #e5e5e5');
            $('.navbarweb').css({
                'width': '51px',
                'background': '#fff',
                'transition': '200ms'
            });
            $('.content').css('width', 'calc(100% - 51px)');
            $('.content').css('left', '51px');
            $('.content').css('display', 'block');
        } else { // show navbar
            $('.navbarweb').css({
                'width': '100%',
                'background-color': 'aliceblue',
                'position': 'absolute',
                'z-index': '1',
                'transition': '200ms'
            });
            $(".nav-item-text").css('display', 'flex');
        }
    }
})

$('.nav-item-icon').on('click', function() {
    $(".nav-item-text").css('display', 'flex');
    $('.navbarweb').css('width', '225px');
    $('.content').css('width', 'calc(100% - 226px)');
    $('.content').css('left', '226px');
    $('.logo-site').css('border-bottom', 'none');
})