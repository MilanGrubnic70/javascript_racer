function init() {
    var FirstPlayerPosition = 0;
    var SecondPlayerPosition = 0;




    function update_player(n) {
        FirstPlayerPosition += n;
        x = $('td.active');
        // console.log(next);
        x.toggleClass();
        // $('td.active').next().toggleClass('.active');
        // x: child('.active').toggleClass();

        $("td.active").next().addClass("active");
        // $( "td" ).sibling().addClass( "active" );

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