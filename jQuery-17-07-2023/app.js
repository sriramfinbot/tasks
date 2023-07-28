var hello = () => {
    console.log($("#king").val())
    console.log(document.querySelector(".abc").innerHTML);
}

$(document).ready(function () {
    // $("#sriram").click(function(){
    //     $(".divclass").hide()
    // })

    $("#sriram").click(function () {
        alert("this is srirams laptop")
        console.log("hi")
    })

    $("#sriram1").focus(function () {
        console.log("Hello guys you are focused");
    })

    $("#sriram2").focus(function () {
        console.log("Hello guys you are changed");
    })

    $("#sriram3").focus(function () {
        console.log("Hello guys you are blurred");
    })

    $(".mouse").mouseover(function () {
        // alert("mouse over event fired");
        console.log("mouse over is happening")
    })

    $(".multiple").on("mouseover mouseout", function () {
        $(this).toggleClass("intro");
    })

    // console.log($("li").children());
    // console.log($("li").find("hello5"));
    // console.log($(".hello3").siblings());
    // console.log($(".hello3").next());
    // console.log($(".hello3").prev());
    // console.log($(".hello3").prevAll());
    // console.log($(".hello3").nextAll());
    // console.log($(".hello1").nextUntil(".hello5"));
    // console.log($(".hello6").prevUntil(".hello2"));

    // console.log($(".class6").parentsUntil(".class2"))
    // console.log($(".class6").parents());
    // console.log($(".class6").parent())

    $(".sriram3").hide();
    $(".sriram4").show();
    $(".sriram5").text("added through js by jquery")
    $(".sriram5").html("added <i>through</i> <u>js</u> by <b>jquery</b>")

    $(".btn").click(function () {
        $(".sriram8").toggleClass("sriram7");
    })

    $(".attrBtn").click(function(){
        $(".sriram10").removeAttr("class")
    })

    // var a = $(".sriram11").val();
    // console.log(a)
    
    $(".sriram12").val("hello sriram");

    $(".sriram13").css("color","green")

    $(".sriram14").css({
        color: "pink",
        'font-size': "29px"
    })

    $(".attrButton").click(function(){
        $(".sriram15").attr("class", "attr15")
        console.log($(".sriram14").attr("class"))
    })

    $(".ol123").append("<li>hello appended</li>")

    $(".hello23").before("<li>li1</li>") 
    $(".hello23").after("<li>sriram</li>")   

    // console.log($("input:checked"))

    var countChecked = function() {
        var n = $("input:checked").length;
        // console.log(n);
        $(".checkCount").text( n + (n === 1 ? " is" : " are") + " checked");
    }
    countChecked();
    $("input[type = checkbox]").on("click", countChecked);

    // console.log($('input:disabled').length)

    // console.log($("h4, .abc, span, #pqr"))

    // console.log($("span:last-of-type"))

    // console.log($("div:hidden").text())

    // console.log($("span:gt(5)"))

    // console.log($("div:first-of-type"));

    // console.log($("li:eq(2)"))

    // console.log($("div>span"));
    
    // console.log($("div:odd"));

    // console.log($("tr:even"));

    // console.log($("tr:odd"));

    // console.log($("a[target!="_blank"]")) doubt

    // console.log($("li:first"))

    // console.log($("div.abc"))

    // console.log($("#sriram123"))

    // console.log($(".hello4"))

    // console.log($("#sriram1"))

    // console.log($("*"))
})

function enable_disable() {
    $("input").prop('disabled', true)
}

