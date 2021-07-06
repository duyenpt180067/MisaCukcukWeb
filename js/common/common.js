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
function chooseOption(id_select, name_option) {
    $(name_option).on('click', function() {
        // _check = false;
        $(this).siblings().removeClass("choose-option");
        $(this).addClass("choose-option");
        $(this).siblings().children().css('visibility', 'hidden');
        $(this).children().css('visibility', 'visible');
        $(id_select).val($(this).text());
        $(id_select).next().css('visibility', 'visible');
        $(this).parent().css('visibility', 'hidden');
        $(this).parent().next().children().first().css('font-size', '12px');
        $(this).parent().next().children().last().css('font-size', '0');

    })
    return false;
}

/**------------------------
 * Click out the element having selector is _selector and do the _function
 * Author: PTDuyen
 */
function clickOutElement(_selector, _function) {
    $(document).click(function(event) {
        var $target = $(event.target);
        if (!$target.closest(_selector).length &&
            $(_selector).is(":visible")) {
            _function();
        }
    });
}


/**------------------------
 * delete the option
 * Author: PTDuyen
 */
function delOption(id_select, defaultValue) {
    $(id_select).next().click(function() {
        $(id_select).val(defaultValue);
        $(id_select).next().css('visibility', 'hidden');
    })
}