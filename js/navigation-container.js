document.addEventListener('DOMContentLoaded', function () {
    let root = document.getElementsByClassName("navigation__btn")[0];

    root.addEventListener('click', function (e) {

        if (document.getElementsByClassName("navigation__container-links")[0].classList.contains("navigation__container-unactive")) {
            document.getElementsByClassName("navigation__container-links")[0].classList.remove("navigation__container-unactive");

        } else {
            document.getElementsByClassName("navigation__container-links")[0].classList.add("navigation__container-unactive");
        }

    });
    let root1 = document.getElementsByClassName("navigation__btn")[1];

    root1.addEventListener('click', function (e) {

        if (document.getElementsByClassName("navigation__container-links")[1].classList.contains("navigation__container-unactive")) {
            document.getElementsByClassName("navigation__container-links")[1].classList.remove("navigation__container-unactive");
            document.getElementsByClassName("navigation__container-links")[2].classList.add("navigation__container-unactive");

        } else {
            document.getElementsByClassName("navigation__container-links")[1].classList.add("navigation__container-unactive");
        }

    });
    let root2 = document.getElementsByClassName("navigation__btn")[2];

    root2.addEventListener('click', function (e) {

        if (document.getElementsByClassName("navigation__container-links")[2].classList.contains("navigation__container-unactive")) {
            document.getElementsByClassName("navigation__container-links")[2].classList.remove("navigation__container-unactive");
            document.getElementsByClassName("navigation__container-links")[1].classList.add("navigation__container-unactive");

        } else {
            document.getElementsByClassName("navigation__container-links")[2].classList.add("navigation__container-unactive");
        }

    });

});