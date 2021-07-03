//js toggle
var check = true;
$('.toggle-icon').on("click", function() {
    check = !check;
    console.log(check);
    if (check == true) {
        $(".nav-item-text").css('display', 'block');
        $('.navbarweb').css('width', '225px');
        $('.content').css('width', 'calc(100% - 226px)');
        $('.content').css('left', '226px');
        $('.logo-site').css('border-bottom', 'none');
    } else {
        if (check == false) {
            $(".nav-item-text").css('display', 'none');
            $('.logo-site').css('border-bottom', '1px solid #e5e5e5');
            $('.navbarweb').css('width', '51px');
            $('.content').css('width', 'calc(100% - 51px)');
            $('.content').css('left', '51px');
        }
    }
})

$('.nav-item-icon').on('click', function() {
    $(".nav-item-text").css('display', 'block');
    $('.navbarweb').css('width', '225px');
    $('.content').css('width', 'calc(100% - 226px)');
    $('.content').css('left', '226px');
    $('.logo-site').css('border-bottom', 'none');
})