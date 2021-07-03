// js table
// $('#table').DataTable({
//     "scrollX": true
// });


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