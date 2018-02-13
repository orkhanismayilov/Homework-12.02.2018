$(document).ready(function () {
    // Portfolio Hover
    $("#portfolio .port_hover").hover(function () {
        $(this).find("div, i").fadeIn("fast");
    }, function () {
        $(this).find("div, i").fadeOut("fast");
    });
});