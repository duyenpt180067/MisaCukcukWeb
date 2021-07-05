// js data table - new
var listEmployee = [];

$(document).ready(function() {
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
    loadData()

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
    $('#findbydepartment').css('border', '1px solid #01b075');
    $('#findbyjob').css('border', '1px solid #bbbbbb');
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

//js for select department
var checkJob = false;
$('#findbyjob').on('click', function() {
    checkJob = !checkJob;
    checkDepartment = false;
    $('#findbyjob').css('border', '1px solid #01b075');
    $('#findbydepartment').css('border', '1px solid #bbbbbb');
    if (checkJob == true) {
        checkJobTrue();
        checkDepartmentFalse();
    } else {
        checkJobFalse();
    }
})

// show form add employee
$('.btn-add-emp').on("click", function() {
    $('.add-item').css('display', 'flex');
    let max_code = findMaxCode(this.listEmployee) + 1;
    $('#code').attr('value', "NV" + max_code.toString());
    // console.log($('#code').value);
});
// close form add-emp
$('.btn-close-add').on("click", function() {
    $('.add-item').css('display', 'none');
});

function checkDepartmentTrue() {
    $('.department-down').css('display', 'none');
    $('.department-up').css('display', 'block');
    $('.all-company').css('visibility', 'visible');
    $('.all-job').css('visibility', 'hidden');
    $('.arrow-department').css('background-color', '#bbb');
}

function checkDepartmentFalse() {
    $('.department-down').css('display', 'block');
    $('.department-up').css('display', 'none');
    $('.all-company').css('visibility', 'hidden');
    $('.arrow-department').css('background-color', '#fff');
}

function checkJobTrue() {
    $('.job-down').css('display', 'none');
    $('.job-up').css('display', 'block');
    $('.all-job').css('visibility', 'visible');
    $('.all-company').css('visibility', 'hidden');
    $('.arrow-job').css('background-color', '#bbb');

}

function checkJobFalse() {
    $('.job-down').css('display', 'block');
    $('.job-up').css('display', 'none');
    $('.all-job').css('visibility', 'hidden');
    $('.arrow-job').css('background-color', '#fff');

}

//find the max code of employees -new
function findMaxCode() {
    console.log(listEmployee);
    let max_code = 0;
    for (let i = 0; i < listEmployee.length; i++) {
        if (listEmployee[i].EmployeeCode.substr(2) > max_code) {
            max_code = listEmployee[i].EmployeeCode.substr(2);
        }
    }
    return max_code;
}

// load data
function loadData() {
    //get all information of employees
    $.get({
        url: "http://cukcuk.manhnv.net/v1/Employees",
        success: function(employees) {
            listEmployee = employees;
            console.log(listEmployee);
            let tbody = document.getElementById('table-body');
            for (let i = 0; i < employees.length; i++) {
                let newRow = tbody.insertRow(tbody.rows.length);
                newRow.innerHTML =
                    '<td>' + employees[i].EmployeeCode + '</td>' +
                    '<td>' + employees[i].FullName + '</td>' +
                    '<td>' + employees[i].Gender + '</td>' +
                    '<td>' + employees[i].DateOfBirth + '</td>' +
                    '<td>' + employees[i].PhoneNumber + '</td>' +
                    '<td>' + employees[i].Email + '</td>' +
                    '<td>' + employees[i].PositionName + '</td>' +
                    '<td>' + employees[i].DepartmentName + '</td>' +
                    '<td>' + employees[i].Salary + '</td>' +
                    '<td>' + employees[i].WorkStatus + '</td>';
            }
        }
    })
}

function setHeader(xhr) {

    xhr.setRequestHeader('Authorization', token);
}

function doLogin() {
    if (token == '') {
        token = google.accounts.user.login(scope);
    } else {
        alert('already logged');
    }
}


function doCheck() {
    token = google.accounts.user.checkLogin(scope);
    return token;
}
// save data
function saveEmployee() {
    let date = new Date();
    console.log(date);
    $.ajax({
        type: 'POST',
        url: 'http://cukcuk.manhnv.net/v1/Employees',
        contentType: 'application/json',
        crossDomain: 'true',
        data: {
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
        },
        dataType: 'jsonp',
        success: function(data) {
            loadData();
            location.reload();
            console.log(data);
        },
        error: function() { alert('Failed!'); },
        beforeSend: setHeader
    })
}

// save data - new
$('.save').on('click', function() {
    saveEmployee();
})