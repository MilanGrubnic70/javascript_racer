function init() {
    var FirstPlayerPosition = 1;
    var SecondPlayerPosition = 1;

    function update_player_1(n) {
        FirstPlayerPosition += n;
        $('td.active').toggleClass();
        $("tr#1stPlayerLane td:nth-child(" + FirstPlayerPosition + ")").addClass("active");
    }

    function update_player_2(n) {
        SecondPlayerPosition += n;
        $('tr#2ndPlayerLane td.active').toggleClass();
        $("tr#2ndPlayerLane td:nth-child(" + SecondPlayerPosition + ")").addClass("active");
    }

    $(document).on('keyup', function(event) {
        console.log(event.which);

        if (event.which == 81) {
            update_player_1(1);
        }

        if (event.which == 80) {
            update_player_2(1);
        }


    })











}

$(document).ready(function() {
    init();
})