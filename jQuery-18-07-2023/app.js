$(document).ready(function () {

    /*
    for ajax complete
    $(".trigger").on("click", function () {
        $(".result").load("ajax/test.html");
    });
    */

    /*
    for ajax error
    $("button.trigger").on("click", function () {
        $("div.result").load("ajax/missing.html");
    });
    */

    /*
    for ajaxsend event
    $(".trigger").on("click", function () {
        $(".result").load("ajax/test.html");
    });
    */

    /*
    for ajaxstart event
    $(".trigger").on("click", function () {
        $(".result").load("ajax/test.html");
    });
    */

    /*
    for ajaxstop event
    $(".trigger").on("click", function () {
        $(".result").load("ajax/test.html");
    });
    */

    /*
    for ajaxsuccess event
    $(".trigger").on("click", function () {
        $(".result").load("ajax/test.html");
    });
    */

});

/*
for ajax complete
$(document).on("ajaxComplete", function () {
    $(".log").text("Triggered ajaxComplete handler.");
});


$(document).on("ajaxComplete", function (event, xhr, settings) {
    if (settings.url === "ajax/test.html") {
        $(".log").text("Triggered ajaxComplete handler. The result is " +
            xhr.responseText);
    }
});
*/

/*
for ajaxError event
$(document).on("ajaxError", function () {
    $(".log").text("Triggered ajaxError handler.");
});

$(document).on("ajaxError", function (event, jqxhr, settings, thrownError) {
    if (settings.url == "ajax/missing.html") {
        $("div.log").text("Triggered ajaxError handler.");
    }
});

$(document).on("ajaxError", function (event, request, settings) {
    $("#msg").append("<li>Error requesting page " + settings.url + "</li>");
});
*/

/*
for ajaxsend event
$(document).on("ajaxSend", function () {
    $(".log").text("Triggered ajaxSend handler.");
});

$(document).on("ajaxSend", function (event, jqxhr, settings) {
    if (settings.url == "ajax/test.html") {
        $(".log").text("Triggered ajaxSend handler.");
    }
});
*/

/*
for ajaxstart event
$(document).on("ajaxStart", function () {
    $(".log").text("Triggered ajaxStart handler.");
});
*/

/*
for ajaxstop event
$(document).on("ajaxStop", function () {
    $(".log").text("Triggered ajaxStop handler.");
});
*/

/*
for ajaxsuccess event
$(document).on("ajaxSuccess", function () {
    $(".log").text("Triggered ajaxSuccess handler.");
});
*/