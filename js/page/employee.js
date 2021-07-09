import Department from "./department.js";

var defaultDepartment = $("#department").val();
var defaultJob = $("#job").val();
var listEmployee = [];
var _urlEmployee = "http://cukcuk.manhnv.net/v1/Employees";
var _urlNewCode = "http://cukcuk.manhnv.net/v1/Employees/NewEmployeeCode";
var newCode;

$(document).ready(function() {
    //js for btn reload
    $('.reload').on('click', function() {
        listEmployee = [];
        $('tbody').empty();
        employee.loadEmployee();
        checkDepartment = false;
        checkJob = false;
        $("#department").val(defaultDepartment);
        $("#job").val(defaultJob);
        $("#department, #job").siblings('.xselect').css('visibility', 'hidden');
        $("#department, #job").siblings('.select-option').children().removeClass('choose-option');
        $("#department, #job").siblings('.select-option').find('i').css('visibility', 'hidden');
    })

    //Take data from API to table employee
    let employee = new Employee();
    employee.loadEmployee();
    let department = new Department();

    // css when dblclick tr and put data
    $('#table-body').on('dblclick', 'tr', function() {
        $(this).siblings().removeClass("choose-option");
        $(this).addClass("choose-option");
        let obj = $(this).data();
        loadDataForm(obj, "#formAdd");
        $('.add-item').css('display', 'flex');
        $('.save').addClass('update');
        $('.update').removeClass('save');
        validateForm();
        $(".update").on('click', function() {
            let emp = new Employee();
            emp.putEmployee(obj.EmployeeId, obj);
            console.log($(this).data());
        })

    })

    // show form add employee
    $('.btn-add-emp').on("click", function() {
        $('.add-item').css('display', 'flex');
        $('.add-item form #code').val('NV-' + newCode);
        $('#code').focus();
        $('#code').addClass('input-focus');
        validateForm();
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
        chooseOption('#department', '.departments', function(res) {
            // console.log(id);
            listEmployee = [];
            $('tbody').empty();
            loadData(_urlEmployee, function(listEmp) {
                $.each(listEmp, function(index, _emp) {
                    if (_emp.DepartmentId === res.DepartmentId)
                        listEmployee.push(employee.formatData(_emp));
                })
                loadTable(listEmployee);
                console.log(listEmployee);
            })
        });
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
        chooseOption('#job', '.jobs', function(res) {
            $('#job').data(res);
        })
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

    loadData(_urlNewCode, function(code) {
        newCode = code;
    })
    $(".save").on('click', function() {
        let emp = new Employee();
        // emp = dataForm("#formAdd", emp);
        // console.log(emp);
        emp.postEmployee();
    })
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

export default class Employee {
    constructor(employeeCode, fullName, gender, dateOfBirth, phoneNumber, email, positionName, departmentName, salary, workStatus) {
        this.employeeCode = employeeCode;
        this.fullName = fullName;
        this.genderName = gender;
        this.dateOfBirth = dateOfBirth;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.positionName = positionName;
        this.departmentName = departmentName;
        this.salary = salary;
        this.workStatus = workStatus;
    }

    /**
     * Format data
     * Author: PTDuyen
     * Create: 7/7/2021
     */
    formatData(emp) {
        // let e = new Employee();
        emp.EmployeeCode = (emp.EmployeeCode) ? emp.EmployeeCode : 'Không xác định';
        emp.FullName = (emp.FullName) ? emp.FullName : 'Không xác định';
        emp.GenderName = (emp.GenderName) ? emp.GenderName : 'Không xác định';
        //format date
        emp.DateOfBirth = (emp.DateOfBirth) ? emp.DateOfBirth.substr(0, 10) : ""; // tolocalDateString("en-GB")
        emp.PhoneNumber = (emp.PhoneNumber) ? emp.PhoneNumber : 'Không xác định';
        emp.Email = (emp.Email) ? emp.Email : 'Không xác định';
        emp.PositionName = (emp.PositionName) ? emp.PositionName : 'Không xác định';
        emp.DepartmentName = (emp.DepartmentName) ? emp.DepartmentName : 'Không xác định';
        //format salary
        emp.Salary = (emp.Salary) ? parseFloat(emp.Salary, 10).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() : 'Không xác định';
        emp.WorkStatus = (emp.WorkStatus) ? emp.WorkStatus : 'Không xác định';
        return emp;
    }

    /**
     * Load employee to table
     * Author: PTDuyen
     * Create: 7/7/2021
     */
    loadEmployee() {
        let me = this;
        let list = [];
        loadData(_urlEmployee, function(listEmp) {
            $.each(listEmp, function(index, _emp) {
                list.push(me.formatData(_emp));
            })
            loadTable(list);
        })
    }

    /**
     * Post employee
     * Author: PTDuyen(8/7/2021)
     */
    postEmployee() {
        let emp = new Employee();
        emp = dataForm("#formAdd", emp);
        delete emp.genderName;
        delete emp.positionName;
        delete emp.departmentName;
        console.log(emp);
        postData(_urlEmployee, emp);
    }
    putEmployee(id) {
        let emp = new Employee();
        emp = dataForm("#formAdd", emp);
        delete emp.genderName;
        delete emp.positionName;
        delete emp.departmentName;
        putData(_urlEmployee, id, emp);
    }
}