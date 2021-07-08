//js for btn reload
$('.reload').on('click', function() {
    location.reload();
})

// $('*').click(function() {
//     $('*').tooltip('hide');
// })

/**------------------------
 * Show option to select
 * Author: PTDuyen
 */
function showOption(select_option, _function) {
    var _option = $(select_option);
    $('.select-option').slideUp(300);
    _option.slideDown(300);
    _option.siblings('.div-arrow').children('.fa-chevron-down').css('font-size', '0');
    _option.siblings('.div-arrow').children('.fa-chevron-up').css('font-size', '12px');
    // _option.siblings('.div-arrow').css({
    //     'background-color': '#bbb',
    //     'border-right': '1px solid #01b075'
    // });
    _option.parent().css('border', '1px solid #01b075');
    _function();
}

/**------------------------
 * Hide option to select
 * Author: PTDuyen
 */
function hideOption(select_option, _function) {
    var _option = $(select_option);
    _option.slideUp(300);
    _option.siblings('.div-arrow').children('.fa-chevron-up').css('font-size', '0');
    _option.siblings('.div-arrow').children('.fa-chevron-down').css('font-size', '12px');
    // _option.siblings('.div-arrow').css({
    //     'background-color': '#fff',
    //     'border-right': '1px solid #bbb'
    // });
    _option.parent().css('border', '1px solid #bbb');
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
        hideOption('.select-option', function() {})
    })
}

// /**
//  * Check value input to show x 
//  * Author: PTDuyen
//  * Create: 8/7/2021
//  */
// function fillInput(_selector, _function) {
//     console.log($(_selector).val() != null)
//     if ($(_selector).val() != undefined) {
//         $(_selector).siblings(".xselect").css('visibility', 'visible');
//         delOption(_selector, undefined);
//     }else{
//         _function();
//     }
// }

/**------------------------
 * Click out the element having selector is _selector and do the _function
 * Author: PTDuyen
 */
function clickOutElement(_selector, _function) {
    $(document).click(function(event) {
        var $target = $(event.target);
        if (!$target.closest(_selector).length && !$target.closest($(_selector).children()).length &&
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

/**-------------------------
 * Load data to table
 * Author: PTDuyen
 * Create 7/7/2021
 */
function loadTable(listObj) {
    $.each(listObj, function(index, obj) {
        // get element of th
        var thData = $('table thead tr th');
        var tr = $(`<tr></tr>`);
        // map td with th 
        $.each(thData, function(index, _item) {

            var fieldName = $(_item).attr('fieldName');
            var value = obj[fieldName]

            if (fieldName.includes("date")) {
                var td = $(`<td style="text-align: center;"></td>`);
                td.append(value);
            } else if (fieldName == "salary") {
                var td = $(`<td style="text-align: end;"></td>`);
                td.append(value);
            } else {
                var td = $(`<td></td>`);
                td.append(value);
            }
            tr.append(td);
            $("tbody").append(tr);
        })
    })
}

/**
 * Validate Form 
 * Author: PTDuyen
 * Create: 8/7/2021
 */
function validateForm() {
    var formInput = $('form div input');
    var email = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    var phone = /^\d{10}$/;

    $.each(formInput, function(index, _input) {
        // if ($(_input).attr('type') == "number") {
        //     $(_input).addEventListener("keypress", function(evt) {
        //         if (evt.which != 8 && evt.which != 0 && evt.which < 48 || evt.which > 57) {
        //             // 0 for null values
        //             // 8 for backspace 
        //             // 48-57 for 0-9 numbers
        //             evt.preventDefault();
        //         }
        //     });
        // }
        $(_input).on('focus', function() {
            // if ($(_input).parent().attr('class', 'find-select')) {
            //     $(_input).parent().addClass('input-focus');
            // } else
        })
        if ($(_input).attr('validate')) {
            var validate = $(_input).attr('validate');
            $(_input).on('focus', function() {
                if ($(_input).val() != undefined) {
                    $(_input).siblings(".xselect").css('visibility', 'visible');
                    delOption(_input, undefined);
                    if ($(_input).attr('fieldName') == "Email") {
                        if (email.test($(_input).val()) == false) {
                            console.log("ok")
                            $(_input).attr('data-original-title', 'Vui lòng nhập đúng định dạng email!');
                            $(_input).tooltip('show');
                        } else {
                            $(_input).attr('data-original-title', null);
                            $(_input).tooltip('hide');
                        }
                    } else if ($(_input).attr('fieldName') == "PhoneNumber") {
                        if (!phone.test($(_input).val())) {
                            $(_input).attr('data-original-title', "Vui lòng nhập đúng định dạng số điện thoại");
                            $(_input).tooltip('show');
                        } else {
                            $(_input).tooltip('hide');
                        }
                    }
                } else {

                }
            })
            $(_input).attr('title')
            console.log(validate);
        }
    })
}

/**
 * Double Click to show data detail
 * Author: PTDuyen 
 */
function loadDetail() {}

//To move the add-form
$(document).ready(function() {
    Draggable(".add-emp");
})

function Draggable(_selector) {
    $(_selector).draggable();
}