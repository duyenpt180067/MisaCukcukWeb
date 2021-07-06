var defaultDepartment = $("#department").val();
var defaultJob = $("#job").val();
$(document).ready(function() {
    //Load data from API to table employee
    loadData();
    // validate form add emp
    // $('#formAdd').validate({
    //     rules: {
    //         code: "required",
    //         full_name: "required",
    //         email: {
    //             required: true,
    //             email: true
    //         },
    //         tel: "required"
    //     },
    //     messages: {
    //         code: "Vui lòng nhập mã nhân viên",
    //         full_name: "Vui lòng nhập họ tên nhân viên",
    //         email: {
    //             required: "Vui lòng nhập email",
    //             email: "Vui lòng nhập đúng định dạng email"
    //         },
    //         tel: "Vui lòng nhập số điện thoại nhân viên"
    //     }
    // })

    $('#table-body').on('dblclick', 'tr', function() {
        $(this).siblings().removeClass("choose-option");
        $(this).addClass("choose-option");
    })

    clickOutElement('#table-tbody tr', function() {
        $(this).removeClass("choose-option");
    })

    // show form add employee
    $('.btn-add-emp').on("click", function() {
        $('.add-item').css('display', 'flex');
        $('.add-item form #code').val('NV-' + parseInt(findMaxCode() + 1));
    });
    // close form add-emp
    $('.btn-close-add').on("click", function() {
        $('.add-item').css('display', 'none');
    });

    //js for input
    $('.findid input').on("focus", function() {
        $('.findid').css('border', '1px solid #01b075');
    })
    $('.findid input').on("blur", function() {
        $('.findid').css('border', '1px solid #bbbbbb');
    })


    // js for select department
    var checkDepartment = false;
    $('#findbydepartment, #department').on('click', function() {
        checkDepartment = !checkDepartment;
        checkJob = false;
        chooseOption('#department', '.departments');
        if (checkDepartment == true) {
            showOption('.all-department', function() {
                $('.arrow-department').css('background-color', '#bbb');
                $('#findbydepartment').parent().css('border', '1px solid #01b075');
                $('#findbydepartment').css('border-right', '1px solid #01b075');
            });
        }
        if (checkDepartment == false) {
            hideOption('.all-department', function() {
                $('.arrow-department').css('background-color', '#bbb');
                $('#findbydepartment').parent().css('border', '1px solid #bbb');
                $('#findbydepartment').css('border-right', '1px solid #bbb');
            });
        }
        clickOutElement('#findbydepartment, #department', function() {
            checkDepartment = false;
            hideOption('.all-department', function() {
                $('.arrow-department').css('background-color', '#fff');
                $('#findbydepartment').parent().css('border', '1px solid #bbb');
                $('#findbydepartment').css('border-right', '1px solid #bbb');
            })
        });
        delOption('#department', defaultDepartment);
    })

    //js for select job
    var checkJob = false;
    $('#findbyjob , #job').on('click', function() {
        checkJob = !checkJob;
        checkDepartment = false;
        chooseOption('#job', '.jobs')
        if (checkJob == true) {
            showOption('.all-job', function() {
                $('.arrow-job').css('background-color', '#bbb');
                $('#findbyjob').parent().css('border', '1px solid #01b075');
                $('#findbyjob').css('border-right', '1px solid #01b075');
            });
        }
        if (checkJob == false) {
            hideOption('.all-job', function() {
                $('.arrow-job').css('background-color', '#bbb');
                $('#findbyjob').parent().css('border', '1px solid #bbb');
                $('#findbyjob').css('border-right', '1px solid #bbb');
            });
        }
        clickOutElement('#findbyjob , #job', function() {
            checkJob = false;
            hideOption('.all-job', function() {
                $('.arrow-job').css('background-color', '#fff');
                $('#findbyjob').parent().css('border', '1px solid #bbb');
                $('#findbyjob').css('border-right', '1px solid #bbb');
            })
        });
        delOption('#job', defaultJob);
    })
})

// save data
function saveEmployee() {
    let date = new Date();
    console.log(date);
    let employee = {
        "createdDate": date,
        "createdBy": "string",
        "modifiedDate": date,
        "modifiedBy": "string",
        "employeeId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "employeeCode": $('#code').val(),
        "firstName": "string",
        "lastName": "string",
        "fullName": $('#full_name').val(),
        "gender": $('#gender').val(),
        "dateOfBirth": "2000-07-05T04:00:25.541Z",
        "phoneNumber": $('#tel').val(),
        "email": $('#email').val(),
        "address": "string",
        "identityNumber": $('#identity').val(),
        "identityDate": $('#date_identity').val(),
        "identityPlace": $('#address_identity').val(),
        "joinDate": date,
        "martialStatus": 0,
        "educationalBackground": 0,
        "qualificationId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "departmentId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "positionId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "workStatus": 0,
        "personalTaxCode": "string",
        "salary": 1000,
        "positionCode": "string",
        "positionName": $('#position').val(),
        "departmentCode": "string",
        "departmentName": $('#department').val(),
        "qualificationName": "string"
    };
    $.ajax({
        type: "POST",
        url: "http://cukcuk.manhnv.net/v1/Employees",
        // crossDomain: 'true',
        data: employee,
        processData: false, // tell jQuery not to process the data
        contentType: false,
        success: function(data) {
            loadData();
            location.reload();
            console.log(data);
        },
        error: function() { alert('Failed!'); },
        // beforeSend: setHeader
    })
}

// save data 
$('.save').on('click', function() {
    saveEmployee();
})