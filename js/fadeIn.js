function addClassNameListener(elemId) {
    var elem = document.getElementById(elemId);
    var lastClassName = elem.className;
    window.setInterval(function () {
        var className = elem.className;
        if (className !== lastClassName) {
            if (className > lastClassName) {
                fadeIn(elem);
            } else {
                let info = elem.querySelector(".intro-offer");
                info.classList.remove("act");
            }
            lastClassName = className;
        }
    }, 100);
}

addClassNameListener(1);
addClassNameListener(2);
addClassNameListener(3);
addClassNameListener(4);
function fadeIn(elem) {
    let info = elem.querySelector(".intro-offer");
    info.classList.add("act");
}
