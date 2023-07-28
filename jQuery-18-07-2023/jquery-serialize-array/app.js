// $(document).ready(function () {

//     $("form").on("submit", function (event) {
//         console.log($(this).serializeArray());
//         event.preventDefault();
//     });
// })


$(document).ready(function () {
    function showValues() {
        var fields = $(":input").serializeArray();
        $("#results").empty();
        jQuery.each(fields, function (i, field) {
            $("#results").append(field.value + " ");
        });
    }

    $(":checkbox, :radio").on("click", showValues);
    $("select").on("change", showValues);
    showValues();
})