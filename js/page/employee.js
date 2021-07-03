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
    $('#findbydepartment').css({ 'border-color': '#01b075' });
    $('#findbyjob').css({ 'border-color': '#bbb' });
    if (checkDepartment == true) {
        checkDepartmentTrue();
        checkJobFalse();
    } else {
        checkDepartmentFalse();
    }
})

//js for select department
var checkJob = false;
$('#findbyjob').on('click', function() {
    checkJob = !checkJob;
    $('#findbyjob').css({ 'border-color': '#01b075' });
    $('#findbydepartment').css({ 'border-color': '#bbb' });
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
    $('#arrow-department').css('background-image', 'url(../../lib/icon/up.png)')
    $('.all-company').css('visibility', 'visible');
}

function checkDepartmentFalse() {
    $('#arrow-department').css('background-image', 'url(../../lib/icon/down.png)')
    $('.all-company').css('visibility', 'hidden');
}

function checkJobTrue() {
    $('#arrow-job').css('background-image', 'url(../../lib/icon/up.png)')
    $('.all-job').css('visibility', 'visible');
}

function checkJobFalse() {
    $('#arrow-job').css('background-image', 'url(../../lib/icon/down.png)')
    $('.all-job').css('visibility', 'hidden');
}