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
function postData(_url, data, _function) {
    $.ajax({
        url: _url,
        method: 'POST',
        data: data,
        contentType: "application/json",
        // - tham do truyen len
        dataType: "json",
        success: function(res) {
            _function(res);
        },
        error: function(res) {
            alert('fail!');
        }
    })
}