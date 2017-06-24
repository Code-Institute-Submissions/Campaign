$(document).ready(function () {

    // Hover over the header and it grows and changes colour.
    // Also, the main body background color darkens
    // so that you can see the transparent header clearly when scrolled down.
    $('.navbar-header').mouseenter(function () {
        $(this).animate({"padding": "10px 20px"});
        $('.navbar-inverse').addClass('header-hover1');
        $('.nav-governor').addClass('header-hover2');
        $('ul.menu').animate({"font-size": "18px"});
        $('a.navbar-brand').animate({"font-size": "20px"});
        $('.container').animate({"opacity": "0.4"});
    });
    $('.navbar-header').mouseleave(function () {
        $(this).animate({"padding": "5px 20px"});
        $('.navbar-inverse').removeClass('header-hover1');
        $('.nav-governor').removeClass('header-hover2');
        $('ul.menu').animate({"font-size": "14px"});
        $('a.navbar-brand').animate({"font-size": "18px"});
        $('.container').animate({"opacity": "1"})
    });

    // Hover over each different 'Aim' title and it shows more information
    $('.non-hovered').mouseenter(function () {
        $('.non-hovered').addClass("hidebox");
        $('.hovered').removeClass("hidebox");
    });
    $('.hovered').mouseleave(function () {
        $('.hovered').addClass("hidebox");
        $('.non-hovered').removeClass("hidebox");
    });
    $('.hovered').click(function () {
        $('.hovered').addClass("hidebox");
        $('.non-hovered').removeClass("hidebox");
    });

});
