//js for btn reload
$('.reload').on('click', function() {
    location.reload();
})

/**------------------------
 * Show option to select
 * Author: PTDuyen
 */
function showOption(select_option, _function) {
    var _option = $(select_option);
    $('select-option').slideUp();
    _option.slideDown();
    _option.next().children('.fa-chevron-down').css('font-size', '0');
    _option.next().children('.fa-chevron-up').css('font-size', '12px');
    _function();
}

/**------------------------
 * Hide option to select
 * Author: PTDuyen
 */
function hideOption(select_option, _function) {
    var _option = $(select_option);
    _option.slideUp();
    _option.next().children().first().css('font-size', '12px');
    _option.next().children().last().css('font-size', '0');
    _function();
}

/**------------------------
 * Choose option to select
 * Author: PTDuyen
 * id_select is id of div select-option
 * name_option is className of div option
 */
function chooseOption(id_select, name_option) {
    $(name_option).on('click', function() {
        // _check = false;
        $(this).siblings().removeClass("choose-option");
        $(this).addClass("choose-option");
        $(this).siblings().children('i').css('visibility', 'hidden');
        let select_option = $(this).parent().attr('class');
        $(this).children().css('visibility', 'visible');
        $(id_select).val($(this).text());
        $(id_select).next().css('visibility', 'visible');
        hideOption(select_option, function() {})
    })
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
 * delete the option of select has id is id_select
 * Author: PTDuyen
 */
function delOption(id_select, defaultValue) {
    $(id_select).siblings('.xselect').click(function() {
        $(id_select).val(defaultValue);
        $(id_select).siblings('.xselect').css('visibility', 'hidden');
        $(id_select).siblings('.select-option').children().removeClass('choose-option');
        $(id_select).siblings('.select-option').find('i').css('visibility', 'hidden');
    })
}

//To move the add-form
$(document).ready(function() {
    Draggable(".add-emp");
})

function Draggable(_selector) {
    $(_selector).draggable();
}