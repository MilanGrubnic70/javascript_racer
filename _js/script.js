function init() {
    alert("Start your engines!");
    $('.active').click(function() {
        $(this).toggleClass();
    })
}

$(document).ready(function() {
    init();
})