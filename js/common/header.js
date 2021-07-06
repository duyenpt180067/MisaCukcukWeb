//js to show option of company - header-left
var checkCompany = false; // option is not show
$('.company').on('click', function() {
    checkCompany = !checkCompany;
    chooseOption('#company', '.companies');
    if (checkCompany == true) { // show option
        $('.company-down').css('font-size', '0');
        $('.company-up').css('font-size', '12px');
        $('.all-company').css('visibility', 'visible');

    } else { // not show option
        $('.company-up').css('font-size', '0');
        $('.company-down').css('font-size', '12px');
        $('.all-company').css('visibility', 'hidden');
    }
    clickOutElement('.company', function() {
        checkCompany = false;
        $('.company-up').css('font-size', '0');
        $('.company-down').css('font-size', '12px');
        $('.all-company').css('visibility', 'hidden');
    })
})