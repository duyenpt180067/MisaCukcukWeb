/** Load data
 *  Author: PTDuyen (7/7/2021)
 */
function loadData(_url, _function) {
    $.ajax({
        url: _url,
        method: 'GET',
        // data:"",
        // contentType:"application/json",
        // dataType:"json" - tham do truyen len
        success: function(res) {
            _function(res);
        },
        error: function(res) {
            alert('fail!');
        }
    })
}
/** Post data
 *  Author: PTDuyen (7/7/2021)
 */
function postData(_url, data) {
    $.ajax({
        url: _url,
        method: 'POST',
        data: JSON.stringify(data),
        contentType: "application/json",
        // - tham do truyen len
        // dataType: "json",
        success: function() {
            console.log("ok");
        },
        error: function() {
            alert('fail!');
        }
    })
}

/** Put data
 *  Author: PTDuyen (7/7/2021)
 */
function putData(_url, id, data) {
    let _urlPut = _url + id;
    $.ajax({
        url: _urlPut,
        type: 'PUT',
        data: JSON.stringify(data),
    }).done(function(_data) {
        console.log(_data);
    }).fail(function(error) {
        console.log(error);
    })

}

function loadDataForm(obj, _selectorForm) {
    var dataInput = $(_selectorForm).find("input");
    $.each(dataInput, function(index, input) {
        var fieldName = $(input).attr('fieldName');
        for (var key in obj) {
            if (fieldName == key) {
                $(input).val(obj[key]);
            }
        }
    });
}


/** Take data from form has _selector
 *  Author: PTDuyen (7/7/2021)
 */
function dataForm(_selector, obj) {
    var inputs = $(_selector).find('input');
    $.each(inputs, function(index, input) {
        var name = $(input).attr('fieldName') + '';
        var fieldName = name[0].toLowerCase() + name.substr(1, );
        if (fieldName.toLowerCase() == "gendername") {
            // deledobj.genderName
            switch ($(input).val().toLowerCase()) {
                case "nam":
                    obj.gender = 1;
                    break;
                case "nữ":
                    obj.gender = 0;
                    break;
                default:
                    obj.gender = 3;
                    break;
            }
        } else if (fieldName.toLowerCase() == "departmentname") {
            obj.departmentId = $(input).data().DepartmentId;
            // delete obj.positionName;
        } else if (fieldName.toLowerCase() == "positionname") {
            obj.positionId = $(input).data().PositionId;
        } else if (fieldName.toLowerCase().includes("date")) {
            // console.log($(input).val());

            var d = $(input).val() + '';
            var date = d.split("-");
            var dateFormat = new Date(date[2], date[0] - 1, date[1]);
            // console.log(d, "  : ", date, "   : " + dateFormat);
            // let date = new Date($(input).value);
            obj[fieldName] = dateFormat;
        } else if (fieldName.toLowerCase() == "workstatus") {
            switch ($(input).val().toLowerCase()) {
                case "đang làm việc":
                    obj.workStatus = 1;
                    break;
                default:
                    obj.workStatus = 0;
                    break;
            }
        } else {
            obj[fieldName] = $(input).val();
        }

    })
    return obj;
}