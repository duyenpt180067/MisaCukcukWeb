//js to show option
var checkCompany = false; // option is not show
$('.name-company').on('blur', function() {
    checkCompany = false;
    $('.company-up').css('font-size', '0');
    $('.company-down').css('font-size', '12px');
})
$('.name-company').on('click', function() {
    checkCompany = !checkCompany;
    if (checkCompany == true) { // show option
        $('.company-down').css('font-size', '0');
        $('.company-up').css('font-size', '12px');
    } else { // not show option
        $('.company-up').css('font-size', '0');
        $('.company-down').css('font-size', '12px');
    }
})