// // validate form add emp
// $(document).ready(function() {
//     $("#formAdd").validate({
//         onfocusout: false,
//         rules: {
//             code: 'required',
//             full_name: 'required',
//             email: {
//                 required: true,
//                 email: true
//             },
//             tel: {
//                 required: true
//             }
//         },
//         messages: {
//             code: "Vui lòng nhập mã nhân viên",
//             full_name: "Vui lòng nhập họ tên nhân viên",
//             email: {
//                 required: "Vui lòng nhập email",
//                 email: "Vui lòng nhập đúng định dạng email"
//             },
//             tel: {
//                 required: "Vui lòng nhập số điện thoại nhân viên"
//             }
//         }
//     })
//     $("#code").on('focus', function() {
//         $('#code').addClass('inputfocus');
//         console.log($("#code").valid());
//         if ($('#code').valid() == false) {
//             $('#code').removeClass('inputfocus');
//             $('#code').addClass('invalid-input');
//             console.log("ok")
//         } else {
//             $('#code').addClass('inputfocus');
//         }
//         console.log($("#code").valid());
//     })
//     $("#formAdd").valid();
// })

// var dataInput = $('.infoinput input');
// $.each(dataInput, function(index, item) {
//     // console.log($(item));
//     $(item).focus(function() {
//         console.log(item)
//         fillInput(item);
//     })
// })

import Employee from './employee.js'

// js for select gender
var checkGender = false;
$('#findbygender, #gender').on('click', function() {
    checkGender = !checkGender;
    checkPosition = false;
    checkFormDepartment = false;
    checkStatus = false;
    if (checkGender == true) {
        showOption('.all-gender', function() {
            // $('.all-gender').siblings('.div-arrow').css({
            //     'background-color': '#fff',
            //     'border-right': '1px solid #01b075'
            // });
            chooseOption('#gender', '.genders', function(res) {
                $('#gender').data(res);
            });
        });
    } else {
        hideOption('.all-gender', function() {});
    }
    clickOutElement('#findbygender, #gender', function() {
        checkGender = false;
        hideOption('all-gender', function() {});
    })
    delOption('#gender', null);
})

// js for select department
var checkPosition = false;
$('#findbyposition, #position').on('click', function() {
    checkPosition = !checkPosition;
    checkGender = false;
    checkFormDepartment = false;
    checkStatus = false;
    chooseOption('#position', '.positions', function(res) {
        $('#position').data(res);
    });
    if (checkPosition == true) {
        showOption('.all-position', function() {});
    }
    if (checkPosition == false) {
        hideOption('.all-position', function() {});
    }
    clickOutElement('#findbyposition, #position', function() {
        checkPosition = false;
        hideOption('.all-position', function() {})
    });
    delOption('#position', null);
})

// js for select department
var checkFormDepartment = false;
$('#findbyformdepartment, #formdepartment').on('click', function() {
    checkFormDepartment = !checkFormDepartment;
    checkPosition = false;
    checkGender = false;
    checkStatus = false;
    chooseOption('#formdepartment', '.formdepartments', function(res) {
        $("#formdepartment").data(res);
    });
    if (checkFormDepartment == true) {
        showOption('.all-formdepartment', function() {});
    }
    if (checkFormDepartment == false) {
        hideOption('.all-formdepartment', function() {});
    }
    clickOutElement('#findbyformdepartment, #formdepartment', function() {
        checkFormDepartment = false;
        hideOption('.all-formdepartment', function() {})
    });
    delOption('#formdepartment', null);
})

// js for select department
var checkStatus = false;
$('#findbystatus, #status').on('click', function() {
    checkStatus = !checkStatus;
    checkPosition = false;
    checkGender = false;
    checkFormDepartment = false;
    chooseOption('#status', '.statuss', function(res) {
        $("#status").data(res);
    });
    if (checkStatus == true) {
        showOption('.all-status', function() {});
    }
    if (checkStatus == false) {
        hideOption('.all-status', function() {});
    }
    clickOutElement('#findbystatus, #status', function() {
        checkStatus = false;
        hideOption('.all-status', function() {})
    });
    delOption('#status', null);
})