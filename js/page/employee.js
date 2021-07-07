var defaultDepartment = $("#department").val();
var defaultJob = $("#job").val();
var listEmployee = [];
var _urlGetAll = "http://cukcuk.manhnv.net/v1/Employees";
var _urlNewCode = "http://cukcuk.manhnv.net/v1/Employees/NewEmployeeCode";
var newCode;

$(document).ready(function() {
    //Take data from API to table employee
    let employee = new Employee();
    employee.loadEmployee();

    // Take data from url Employee new code

    // loadData(_urlNewCode, function(code) {
    //     newCode = code;
    // })

    // css when dblclick tr
    $('#table-body').on('dblclick', 'tr', function() {
        $(this).siblings().removeClass("choose-option");
        $(this).addClass("choose-option");
    })

    // show form add employee
    $('.btn-add-emp').on("click", function() {
        $('.add-item').css('display', 'flex');
        $('.add-item form #code').val('NV-' + newCode);
        $('#code').focus();
        $('#code').addClass('inputfocus');
        setTabIndex();
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
                $('.all-department').siblings('.div-arrow').css({
                    'background-color': '#bbb',
                    'border-right': '1px solid #01b075'
                });
            });
        }
        if (checkDepartment == false) {
            hideOption('.all-department', function() {
                $('.all-department').siblings('.div-arrow').css({
                    'background-color': '#fff',
                    'border-right': '1px solid #bbb'
                });
            });
        }
        clickOutElement('#findbydepartment, #department', function() {
            checkDepartment = false;
            hideOption('.all-department', function() {
                $('.all-department').siblings('.div-arrow').css({
                    'background-color': '#fff',
                    'border-right': '1px solid #bbb'
                });
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
                $('.all-job').siblings('.div-arrow').css({
                    'background-color': '#bbb',
                    'border-right': '1px solid #01b075'
                });
            });
        }
        if (checkJob == false) {
            hideOption('.all-job', function() {
                $('.all-job').siblings('.div-arrow').css({
                    'background-color': '#fff',
                    'border-right': '1px solid #bbb'
                });
            });
        }
        clickOutElement('#findbyjob , #job', function() {
            checkJob = false;
            hideOption('.all-job', function() {
                $('.all-job').siblings('.div-arrow').css({
                    'background-color': '#fff',
                    'border-right': '1px solid #bbb'
                });
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


// /** Find the max code of employees
//  *  Author: PTDuyen
//  */
// function findMaxCode() {
//     console.log(listEmployee);
//     let max_code = 0;
//     for (let i = 0; i < listEmployee.length; i++) {
//         if (parseInt(listEmployee[i].code.substr(3)) > max_code) {
//             max_code = parseInt(listEmployee[i].code.substr(3));
//         }
//     }
//     return max_code;
// }

class Employee {
    constructor() {
        this.code;
        this.fullName;
        this.genderName;
        this.dateOfBirth;
        this.phoneNumber;
        this.email;
        this.positionName;
        this.departmentName;
        this.salary;
        this.workStatus;
    }

    /**
     * Format data
     * Author: PTDuyen
     * Create: 7/7/2021
     */
    formatData(emp) {
        let e = new Employee();
        e.code = (emp.EmployeeCode) ? emp.EmployeeCode : 'Không xác định';
        e.fullName = (emp.FullName) ? emp.FullName : 'Không xác định';
        e.genderName = (emp.GenderName) ? emp.GenderName : 'Khác';
        //format date
        e.dateOfBirth = (emp.DateOfBirth) ? emp.DateOfBirth.substr(0, 10) : "";
        e.phoneNumber = (emp.PhoneNumber) ? emp.PhoneNumber : 'Không xác định';
        e.email = (emp.Email) ? emp.Email : 'Không xác định';
        e.positionName = (emp.PositionName) ? emp.PositionName : 'Không xác định';
        e.departmentName = (emp.DepartmentName) ? emp.DepartmentName : 'Không xác định';
        //format salary
        e.salary = (emp.Salary) ? parseFloat(emp.Salary, 10).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() : 'Không xác định';
        e.workStatus = (emp.WorkStatus) ? emp.WorkStatus : 'Không xác định';
        return e;
    }

    /**
     * Load employee to table
     * Author: PTDuyen
     * Create: 7/7/2021
     */
    loadEmployee() {
        let me = this;
        let list = [];
        loadData(_urlGetAll, function(listEmp) {
            $.each(listEmp, function(index, _emp) {
                list.push(me.formatData(_emp));
            })
            loadTable(list);
        })
    }

    // /**
    //  * Take new employee code
    //  * Author: PTDuyen
    //  * Create: 7/7/2021
    //  */
    // loadNewCode() {
    // }
}