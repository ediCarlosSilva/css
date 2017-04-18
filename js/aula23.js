$(document).ready(function() {
    $("#menu li ul").hide();
    $("#menu li").hover(
        function() { $(this).children("ul").show(); },
        function() { $(this).children("ul").hide(); }
    );
});