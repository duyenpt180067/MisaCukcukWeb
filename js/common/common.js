//js for btn reload
$('.reload').on('click', function() {
    location.reload();
})

/**------------------------
 * Choose option to select
 * Author: PTDuyen
 * id_select is id of div select-option
 * name_option is class of div option
 */
function chooseOption(id_select, name_option, _check) {
    _check = true;
    $('.' + name_option).on('click', function() {
        $(this).siblings().removeClass("choose-option");
        $(this).addClass("choose-option");
        $(this).siblings().children().css('visibility', 'hidden');
        $(this).children().css('visibility', 'visible');
        $('#' + id_select).val($(this).text());
        $(this).parent().css('visibility', 'hidden');
        $(this).parent().next().children().first().css('font-size', '12px');
        $(this).parent().next().children().last().css('font-size', '0');
        _check = false;

        console.log("   ok");
    })
}