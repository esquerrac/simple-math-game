$(document).ready(function () {
    $("#header").html("<h1>Let's practice some math!</h1>");
    $("#firstNumber").val(0);
    $("#plusMinus").text("?");
    $("#secondNumber").val(0);
    $("#equals").text("?");
    $("#solution").val(0);
});
$("#additionButton").click(createAddition);
$("#subtractionButton").click(createSubtraction);

function createAddition(event) {
    $("#header").html("<h1>Let's practice some math!</h1>");
    $("#solution").val("?");
    $("#firstNumber").val(Math.floor(Math.random() * 9) + 1);
    $("#secondNumber").val(Math.floor(Math.random() * 9));
    if (parseInt($("#firstNumber").val()) + parseInt($("#secondNumber").val()) > 10) {
        createAddition();
    }
    $("#plusMinus").text("+");
    $("#equals").text("=");
    $("#solveAddition").removeClass("hidden");
    $("#solveSubtraction").addClass("hidden");
}
;

function createSubtraction(event) {
    $("#header").html("<h1>Let's practice some math!</h1>");
    $("#solution").val("?");
    $("#firstNumber").val(Math.floor(Math.random() * 9) + 1);
    $("#secondNumber").val(Math.floor(Math.random() * 9));
    if (parseInt($("#firstNumber").val()) - parseInt($("#secondNumber").val()) < 0) {
        createSubtraction();
    }
    $("#plusMinus").text("-");
    $("#equals").text("=");
    $("#solveAddition").addClass("hidden");
    $("#solveSubtraction").removeClass("hidden");
}

$("#solveAddition").click(function () {
    if ($("#solution").val() == parseInt($("#firstNumber").val()) + parseInt($("#secondNumber").val())) {
        $("#header").html('<h1>You did it!  Great job!</h1>');
        right();
        stopRight()
    } else {
        $("#header").html('<h1>Uh oh!  Try again!</h1>');
        wrong();
        stopWrong();
    }
});
$("#solveSubtraction").click(function () {
    if ($("#solution").val() == parseInt($("#firstNumber").val()) - parseInt($("#secondNumber").val())) {
        $("#header").html('<h1>You did it!  Great job!</h1>');
        right();
        stopRight()
    } else {
        $("#header").html('<h1>Uh oh!  Try again!</h1>');
        wrong();
        stopWrong()
    }
});
var flashGreen;
var flashRed;
var count;

function right() {
    count = 0;
    flashGreen = setInterval(function () {
        if (count % 2 === 0 && count < 10) {
            $(".btn").removeClass("btn-light");
            $(".btn").addClass("btn-success");
            count++;
        } else if (count % 2 === 1 && count < 10) {
            $(".btn").removeClass("btn-success");
            $(".btn").addClass("btn-light");
            count++;
        } else if (count === 10) {
            $(".btn").addClass("btn-light");
            count = 10
        }
    }, 250);
};

function wrong(){
    count = 0;
    flashRed = setInterval(function () {
        if (count % 2 === 0 && count < 10) {
            $(".btn").removeClass("btn-light");
            $(".btn").addClass("btn-danger");
            count++;
        } else if (count % 2 === 1 && count < 10) {
            $(".btn").removeClass("btn-danger");
            $(".btn").addClass("btn-light");
            ;
            count++;
        } else if (count === 10) {
            $(".btn").addClass("btn-light");
            count = 10;
        }

    }, 250);
};

function stopRight() {
    setTimeout(function () {
        clearInterval(flashGreen);
        count = 0;
    }, 2000);
}

function stopWrong() {
    setTimeout(function () {
        clearInterval(flashRed);
        count = 0;
    }, 2000);
}
