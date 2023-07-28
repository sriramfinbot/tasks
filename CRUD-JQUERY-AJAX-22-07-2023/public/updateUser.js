
var validateEmail = (email) => {
    var mail = document.querySelector("#email").value;
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (mail.match(validRegex)) {
        document.querySelector(".emailValidation").style.display = "none";
    } else {
        document.querySelector(".emailValidation").style.display = "block";
        $(".emailEmptyValidation").hide();

    }
}

var mobileNumber = (mob) => {
    var number = document.querySelector("#mob_no").value;
    var mobRegex = /^\d{10}$/;
    if (number.match(mobRegex)) {
        document.querySelector(".mobValidation").style.display = "none";
    } else {
        document.querySelector(".mobValidation").style.display = "block";
        $(".mobEmptyValidation").hide();
    }
}


function myFunc() {
    let arr = [];
    let checkboxes = document.querySelectorAll("input[type='checkbox']:checked");
    checkboxes.forEach((item) => {
        arr.push(item.value)
    })
    if (arr.length == 0) {
        arr[0] = "No";
    }
    return arr;
}

var f_NameBlur = (event) => {
    var f_name = $("#firstName").val();
    if (f_name.length == 0) {
        $(".f_nameValidation").show();
    } else {
        $(".f_nameValidation").hide();
    }
}

var l_NameBlur = (event) => {
    var l_name = $("#lastName").val();
    if (l_name.length == 0) {
        $(".l_nameValidation").show();
    } else {
        $(".l_nameValidation").hide();
    }
}

var emailBlur = (event) => {
    var emailB = $("#email").val();
    if (emailB.length == 0) {
        $(".emailEmptyValidation").show();
    } else {
        $(".emailEmptyValidation").hide();
    }
}

var mobBlur = (event) => {
    var mobB = $("#email").val();
    if (mobB.length == 0) {
        $(".mobEmptyValidation").show();
    } else {
        $(".mobEmptyValidation").hide();
    }
}

var postBlur = (event) => {
    var postB = $("#post").val();
    if (postB == "postAppFor") {
        $(".postValidation").show();
    } else {
        $(".postValidation").hide();
    }
}

var bloodBlur = (event) => {
    var bloodB = $("#bld_group").val();
    if (bloodB == "Blood") {
        $(".bloodValidation").show();
    } else {
        $(".bloodValidation").hide();
    }
}

var qualiBlur = (event) => {
    var qualiB = $("#qualification").val();
    if (qualiB == "quali") {
        $(".qualiValidation").show();
    } else {
        $(".qualiValidation").hide();
    }
}

var dateBlur = (event) => {
    var dateB = $("#date").val();
    if (dateB == "") {
        $(".dateEmptyValidation").show();
    } else {
        $(".dateEmptyValidation").hide();
    }
}


var imageUploading = (event) => {
    var fileInfo = $("input[name=imageUpload]")[0].files[0];
    var fileType = fileInfo.type;
    if (fileType.includes("image")) {
        $(".imageValidation").hide();
        $(".imageEmpty").hide();
    } else {
        $(".imageValidation").show();
    }
}

function mySubmitFunction(e) {
    e.preventDefault();
    try {
    } catch (e) {
        throw new Error(e.message);
    }
    return false;
}

var updateUser = (event) => {
    var id = $(".idElement").attr("id");
    console.log(id);
    var fileInfo = $("input[name=imageUpload]")[0].files[0];
    firstName = $("#firstName").val();
    lastName = $("#lastName").val();
    email = $("#email").val();
    mob_no = $("#mob_no").val();
    Post = $("#post").val();
    bld_group = $("#bld_group").val();
    NCC = myFunc();
    dateOfBirth = $("#date").val();
    gender = $("input:radio[name=gender]:checked").val();
    qualification = $("#qualification").val();

    if (firstName.length == 0) {
        $(".f_nameValidation").show();
        return false;
    } else {
        $(".f_nameValidation").hide();
    }

    if (lastName.length == 0) {
        $(".l_nameValidation").show();
        return false;
    } else {
        $(".l_nameValidation").hide();
    }

    if (email.length == 0) {
        $(".emailEmptyValidation").show();
        return false;
    } else {
        $(".emailEmptyValidation").hide();
    }

    if (mob_no.length == 0) {
        $(".mobEmptyValidation").show();
        return false;
    } else {
        $(".mobEmptyValidation").hide();
    }

    if (Post == "postAppFor") {
        $(".postValidation").show();
        return false;
    } else {
        $(".postValidation").hide();
    }

    if (bld_group == "Blood") {
        $(".bloodValidation").show();
        return false;
    } else {
        $(".bloodValidation").hide();
    }

    if (dateOfBirth == "") {
        $(".dateEmptyValidation").show();
        return false;
    } else {
        $(".dateEmptyValidation").hide();
    }

    if (qualification == "quali") {
        $(".qualiValidation").show();
        return false;
    } else {
        $(".qualiValidation").hide();
    }

    let formData = new FormData();

    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("email", email);
    formData.append("mob_no", mob_no);
    formData.append("Post", Post);
    formData.append("bld_group", bld_group);
    formData.append("NCC", NCC);
    formData.append("dateOfBirth", dateOfBirth);
    formData.append("gender", gender);
    formData.append("qualification", qualification);

    // hide every error 
    $(".imageEmpty").hide();
    $(".mainValidation").hide();
    $(".f_nameValidation").hide();
    $(".l_nameValidation").hide();
    $(".emailEmptyValidation").hide();
    $(".mobEmptyValidation").hide();
    $(".postValidation").hide();
    $(".bloodValidation").hide();
    $(".dateEmptyValidation").hide();
    $(".qualiValidation").hide();

    if (fileInfo == undefined) {

    }
    else {
        formData.append("prodImage", fileInfo);
    }

    $.ajax({
        type: "POST",
        url: `/edit/${id}`,
        data: formData,
        enctype: "multipart/form-data",
        processData: false,
        contentType: false,
        dataType: "JSON"
    }).done(function (response) {
        console.log(response);
    }).fail(function (response) {
        console.log(response);
        alert("Data updated successfully");
        window.location.href = "http://localhost:8080/show"
    }).always(function () {
        $("#firstName").val("");
        $("#lastName").val("");
        $("#email").val("");
        $("#mob_no").val("");
        $('#post').prop('selectedIndex',0);
        $('#bld_group').prop('selectedIndex',0);
        $("#date").val("");
        $('#qualification').prop('selectedIndex',0);
        $("input[name=imageUpload]").val("");
        $("#male").prop("checked", true);
        $("#Female").prop("checked", false);
        $("#A").prop('checked', false);
        $("#B").prop('checked', false);
        $("#C").prop('checked', false);
        $(".file-ip-1-preview").hide();
        $("img").hide();
    })

}