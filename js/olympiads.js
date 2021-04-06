ShowETournament();

$("#btn-1").click(function () {
    if ($("#btn-1").hasClass("button_clicked") == false) {
        $("#btn-1").addClass("button_clicked");
        $("#btn-2").removeClass("button_clicked");
        $("#btn-3").removeClass("button_clicked");
        $(".content__title").text("турнир европы");
        ShowETournament();
    }
});

$("#btn-2").click(function () {
    if ($("#btn-2").hasClass("button_clicked") == false) {
        $("#btn-1").removeClass("button_clicked");
        $("#btn-2").addClass("button_clicked");
        $("#btn-3").removeClass("button_clicked");
        $(".content__title").text("Кубок Математического Тигра");
        ShowTiger();
    }
});

$("#btn-3").click(function () {
    if ($("#btn-3").hasClass("button_clicked") == false) {
        $("#btn-1").removeClass("button_clicked");
        $("#btn-2").removeClass("button_clicked");
        $("#btn-3").addClass("button_clicked");
        $(".content__title").text("Олимпиада «Умосфера»");
        ShowUmosfera();
    }
});

function ShowETournament() {
    $(".etournament").show();
    $(".tiger").hide();
    $(".umosfera").hide();
}

function ShowTiger() {
    $(".etournament").hide();
    $(".tiger").show();
    $(".umosfera").hide();
}

function ShowUmosfera() {
    $(".etournament").hide();
    $(".tiger").hide();
    $(".umosfera").show();
}