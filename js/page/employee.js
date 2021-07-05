// js data table 
var listEmployee = [];

$(document).ready(function() {
    //Load data from API to table employee
    loadData();
    // validate form add emp
    $('#formAdd').validate({
        rules: {
            code: "required",
            full_name: "required",
            email: {
                required: true,
                email: true
            },
            tel: "required"
        },
        messages: {
            code: "Vui lòng nhập mã nhân viên",
            full_name: "Vui lòng nhập họ tên nhân viên",
            email: {
                required: "Vui lòng nhập email",
                email: "Vui lòng nhập đúng định dạng email"
            },
            tel: "Vui lòng nhập số điện thoại nhân viên"
        }
    })

})


//js for input
$('.findid input').on("focus", function() {
    $('.findid').css('border', '1px solid #01b075');
})
$('.findid input').on("blur", function() {
    $('.findid').css('border', '1px solid #bbbbbb');
})

//js for btn reload
$('.reload').on('click', function() {
    location.reload();
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
        checkDepartmentTrue();
        checkJobFalse();
    } else {
        checkDepartmentFalse();
    }
})

$('#findbydepartment').on('blur', function() {
    checkDepartmentFalse();
})

//js for select job
var checkJob = false;
$('#findbyjob').on('click', function() {
    $('.all-company').css('visibility', 'visible');
    checkJob = !checkJob;
    checkDepartment = false;
    chooseOption('job', 'jobs', checkJob);
    $('#findbyjob').parent().css('border', '1px solid #01b075');
    $('#findbyjob').css('border-right', '1px solid #01b075');
    $('#findbydepartment').parent().css('border', '1px solid #bbbbbb');
    $('#findbydepartment').css('border-right', '1px solid #bbbbbb');
    if (checkJob == true) {
        checkJobTrue();
        checkDepartmentFalse();
    } else {
        checkJobFalse();
    }
    console.log("job" + checkJob);
    console.log("department" + checkDepartment);
})

// show form add employee
$('.btn-add-emp').on("click", function() {
    $('.add-item').css('display', 'flex');
});
// close form add-emp
$('.btn-close-add').on("click", function() {
    $('.add-item').css('display', 'none');
});


/**
 * To css and show the option
 * Author: PTDuyen
 */
function checkDepartmentTrue() {
    $('.department-down').css('font-size', '0');
    $('.department-up').css('font-size', '12px');
    $('.all-company').css('visibility', 'visible');
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
    $('.all-company').css('visibility', 'visible');
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
    $('.all-company').css('visibility', 'hidden');
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
    $('.all-company').css('visibility', 'hidden');
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

/**------------------------
 * Choose option to select
 * Author: PTDuyen
 * id_select is id of div select-option
 * name_option is class of div option
 */
function chooseOption(id_select, name_option, _check) {
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
    })
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

/**-------------------------
 * Load data of employees
 * Author: PTDuyen
 * 5/7/2021
 */
function loadData() {
    //get all information of employees from API
    $.get({
        url: "http://cukcuk.manhnv.net/v1/Employees",
        // data:"",
        // contentType:"application/json",
        // dataType:"json" - tham do truyen len
        success: function(employees) {
            listEmployee = employees;
            console.log(listEmployee);
            let tbody = document.getElementById('table-body');

            for (let i = 0; i < employees.length; i++) {
                // Xu ly du lieu
                //1. ngay/thang/nam
                let date = (employees[i].DateOfBirth != null) ? employees[i].DateOfBirth.substr(0, 10) : "";
                //2. Dinh dang tien te
                let salary = employees[i].Salary;
                // new row
                let newRow = tbody.insertRow(tbody.rows.length);
                newRow.innerHTML =
                    '<td>' + employees[i].EmployeeCode + '</td>' +
                    '<td>' + employees[i].FullName + '</td>' +
                    '<td>' + employees[i].Gender + '</td>' +
                    '<td>' + date + '</td>' +
                    '<td>' + employees[i].PhoneNumber + '</td>' +
                    '<td>' + employees[i].Email + '</td>' +
                    '<td>' + employees[i].PositionName + '</td>' +
                    '<td>' + employees[i].DepartmentName + '</td>' +
                    '<td>' + employees[i].Salary + '</td>' +
                    '<td>' + employees[i].WorkStatus + '</td>';
            }
        },
        error: function(res) {
            alert("Fail!");
        }
    })
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