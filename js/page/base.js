/**-------------------------
 * Load data of employees
 * Author: PTDuyen
 * 5/7/2021
 */
var listEmployee = [];

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


/** Find the max code of employees
 *  Author: PTDuyen
 */
function findMaxCode() {
    console.log(listEmployee);
    let max_code = 0;
    for (let i = 0; i < listEmployee.length; i++) {
        if (parseInt(listEmployee[i].EmployeeCode.substr(3)) > max_code) {
            max_code = parseInt(listEmployee[i].EmployeeCode.substr(3));
        }
    }
    return max_code;
}