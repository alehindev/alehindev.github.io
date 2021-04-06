$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__burger, .sidebar, .header__tel').toggleClass('active');
        $('body').toggleClass('lock');
    });
});