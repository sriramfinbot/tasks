$(document).ready(function () {
    function showValues() {
        var str = $("form").serialize();
        $("#results").text(str);
    }
    $("input[type='checkbox'], input[type='radio']").on("click", showValues);
    $("select").on("change", showValues);
    showValues();
})