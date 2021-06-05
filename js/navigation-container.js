document.addEventListener('DOMContentLoaded', function () {
    let elem = document.getElementById("nav__btn");
    elem.addEventListener('click', function (e) {

        if (document.getElementsByClassName("navigation__container-links")[0].classList.contains("navigation__container-unactive")) {
            document.getElementsByClassName("navigation__container-links")[0].classList.remove("navigation__container-unactive");
        } else {
            document.getElementsByClassName("navigation__container-links")[0].classList.add("navigation__container-unactive");
        }

    });


});