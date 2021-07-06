$(document).ready(function() {
    Draggable(".add-item");
})

function Draggable(_selector) {
    $(_selector).draggable();
}