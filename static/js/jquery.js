$(document).ready(function () {

    $('.navbar-header').mouseenter(function () {
        $(this).animate({"padding": "10px 20px"});
        $('.navbar-inverse').css({"background-color": "rgba(255,255,255,0.4)"});
        $('.nav-governor').css({"color": "#333"});
        $('.menu > li > a').animate({"padding": "10px 40px"});
        $('ul.menu').animate({"font-size": "18px"});
        $('a.navbar-brand').animate({"font-size": "20px"});
    });
    $('.navbar-header').mouseleave(function () {
        $(this).animate({"padding": "5px 20px"});
        $('.navbar-inverse').css({"background-color": "rgba(255,255,255,0.8)"});
        $('.nav-governor').css({"color": "#adadad"});
        $('.menu > li > a').animate({"padding": "0px"});
        $('ul.menu').animate({"font-size": "14px"});
        $('a.navbar-brand').animate({"font-size": "18px"});
    });

});
