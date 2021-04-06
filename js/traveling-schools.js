"use strict";
$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__burger, .sidebar, .header__tel').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

if ($("#btn-winter-school").hasClass("nav-btn_clicked") || $("#btn-summer-school").hasClass("nav-btn_clicked") || $("#btn-spring-school").hasClass("nav-btn_clicked") == false) {
    ShowDefault();
}

$('#btn-winter-school').click(function () {
    if ($("#btn-winter-school").hasClass("nav-btn_clicked") == false) {
        $("#btn-winter-school").addClass("nav-btn_clicked");
        $("#btn-summer-school").removeClass("nav-btn_clicked");
        $("#btn-spring-school").removeClass("nav-btn_clicked");
        ShowWinterSchool()
    }
});
$('#btn-summer-school').click(function () {
    if ($("#btn-summer-school").hasClass("nav-btn_clicked") == false) {
        $("#btn-winter-school").removeClass("nav-btn_clicked");
        $("#btn-summer-school").addClass("nav-btn_clicked");
        $("#btn-spring-school").removeClass("nav-btn_clicked");
        ShowSummerSchool();
    }
});
$('#btn-spring-school').click(function () {
    if ($("#btn-spring-school").hasClass("nav-btn_clicked") == false) {
        $("#btn-winter-school").removeClass("nav-btn_clicked");
        $("#btn-summer-school").removeClass("nav-btn_clicked");
        $("#btn-spring-school").addClass("nav-btn_clicked");
        ShowSummerSchool();
    }
});



function ShowDefault() {
    $('.traveling-schools').show();
    $('.winter-school').hide();
    $('.summer-school').hide();
    $('.spring-school').hide();
}
function ShowWinterSchool() {
    $('.winter-school').show();
    $('.traveling-schools').hide();
    $('.summer-school').hide();
    $('.spring-school').hide();
}
function ShowSummerSchool() {
    $('.winter-school').hide();
    $('.traveling-schools').hide();
    $('.summer-school').show();
    $('.spring-school').hide();
}
function ShowSpringSchool() {
    $('.winter-school').hide();
    $('.traveling-schools').hide();
    $('.summer-school').hide();
    $('.spring-school').show();
}