function init() {
    alert("Start your engines!");
    $('.active').click(function() {
        $(this).toggleClass();
        $(this).next().toggleClass('active');
        
    })
}

$(document).ready(function() {
    init();
})