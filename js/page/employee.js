// js data table 
var listEmployee = [];

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

    $('#table-body').on('click', 'tr', function() {
        $(this).siblings().removeClass("choose-option");
        $(this).addClass("choose-option");
    })

    // show form add employee
    $('.btn-add-emp').on("click", function() {
        $('.add-item').css('display', 'flex');
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

})


//js for select department
var checkDepartment = false;
$('#findbydepartment').on('click', function() {
    checkDepartment = !checkDepartment;
    checkJob = false;
    chooseOption('department', 'departments', checkDepartment);
    $('#findbydepartment').parent().css('border', '1px solid #01b075');
    $('#findbydepartment').css('border-right', '1px solid #01b075');
    $('#findbyjob').parent().css('border', '1px solid #bbbbbb');
    $('#findbyjob').css('border-right', '1px solid #bbbbbb');
    if (checkDepartment == true) {
        checkJobFalse();
        checkDepartmentTrue();
    } else {
        checkDepartmentFalse();
    }
    if (checkJob == true) {
        checkDepartmentFalse();
        checkJobTrue();
    } else {
        checkJobFalse();
    }
})

$('#findbydepartment').on('blur', function() {
    checkDepartmentFalse();
})

//js for select job
var checkJob = false;
$('#findbyjob').on('click', function() {
    $('.all-department').css('visibility', 'visible');
    checkJob = !checkJob;
    checkDepartment = false;
    chooseOption('job', 'jobs', checkJob);
    $('#findbyjob').parent().css('border', '1px solid #01b075');
    $('#findbyjob').css('border-right', '1px solid #01b075');
    $('#findbydepartment').parent().css('border', '1px solid #bbbbbb');
    $('#findbydepartment').css('border-right', '1px solid #bbbbbb');
    if (checkJob == true) {
        checkDepartmentFalse();
        checkJobTrue();
    } else {
        checkJobFalse();
    }
    if (checkDepartment == true) {
        checkJobFalse();
        checkDepartmentTrue();
    } else {
        checkDepartmentFalse();
    }
})


/**
 * To css and show the option
 * Author: PTDuyen
 */
function checkDepartmentTrue() {
    $('.department-down').css('font-size', '0');
    $('.department-up').css('font-size', '12px');
    $('.all-department').css('visibility', 'visible');
    $('.all-job').css('visibility', 'hidden');
    $('.arrow-department').css('background-color', '#bbb');
}

/**
 * To css and show the option of department
 * Author: PTDuyen
 */
function checkDepartmentTrue() {
    $('.department-down').css('font-size', '0');
    $('.department-up').css('font-size', '12px');
    $('.all-department').css('visibility', 'visible');
    $('.all-job').css('visibility', 'hidden');
    $('.arrow-department').css('background-color', '#bbb');
}

/**
 * To hide the option of department
 * Author: PTDuyen
 */
function checkDepartmentFalse() {
    $('.department-down').css('font-size', '12px');
    $('.department-up').css('font-size', '0');
    $('.all-department').css('visibility', 'hidden');
    $('.arrow-department').css('background-color', '#fff');
}

/**
 * To css and show the option of position
 * Author: PTDuyen
 */
function checkJobTrue() {
    $('.job-down').css('font-size', '0');
    $('.job-up').css('font-size', '12px');
    $('.all-job').css('visibility', 'visible');
    $('.all-department').css('visibility', 'hidden');
    $('.arrow-job').css('background-color', '#bbb');

}

/**
 * To hide the option of position
 * Author: PTDuyen
 */
function checkJobFalse() {
    $('.job-down').css('font-size', '12px');
    $('.job-up').css('font-size', '0');
    $('.all-job').css('visibility', 'hidden');
    $('.arrow-job').css('background-color', '#fff');

}


/** Find the max code of employees
 *  Author: PTDuyen
 */
function findMaxCode() {
    console.log(listEmployee);
    let max_code = 0;
    for (let i = 0; i < listEmployee.length; i++) {
        if (parseInt(listEmployee[i].EmployeeCode.substr(2)) > max_code) {
            max_code = parseInt(listEmployee[i].EmployeeCode.substr(2));
        }
    }
    return max_code;
}



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
        "employeeCode": $('#code').value,
        "firstName": "string",
        "lastName": "string",
        "fullName": $('#full_name').value,
        "gender": $('#gender').value,
        "dateOfBirth": "2000-07-05T04:00:25.541Z",
        "phoneNumber": $('#tel').value,
        "email": $('#email').value,
        "address": "string",
        "identityNumber": $('#identity').value,
        "identityDate": $('#date_identity').value,
        "identityPlace": $('#address_identity').value,
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
        "positionName": $('#position').value,
        "departmentCode": "string",
        "departmentName": $('#department').value,
        "qualificationName": "string"
    };
    $.ajax({
        type: 'POST',
        url: 'http://cukcuk.manhnv.net/v1/Employees',
        contentType: 'application/json',
        crossDomain: 'true',
        data: employee.stringify,
        dataType: 'jsonp',
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