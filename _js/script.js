function init() {
    var FirstPlayerPosition = 1;
    var SecondPlayerPosition = 1;




    function update_player(n) {
        FirstPlayerPosition += n;
        x = $('td.active');
        x.toggleClass();
        $("tr td:nth-child(" + FirstPlayerPosition + ")").addClass("active");

    }











    $(document).on('keyup', function(event) {
        console.log(event.which);

        if (event.which == 81) {
            update_player(1);
        }


    })











}

$(document).ready(function() {
    init();
})