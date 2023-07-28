var imagePath = "";
var detailsJSON = {};

var submit = () => {
    var userDetails = {};
    //     userDetails.firstName = firstName;
    //     userDetails.lastName = lastName;
    //     userDetails.email = email;
    //     userDetails.mob_no = mob_no;

    // validation 

    var firstName = $("#firstName").val();
    if (firstName.length == 0) {
        $(".f_nameValidation").show();
    } else {
        $(".f_nameValidation").hide();
    }

    var lastName = $("#lastName").val();
    if (lastName.length == 0) {
        $(".l_nameValidation").show();
    } else {
        $(".l_nameValidation").hide();
    }

    var email = $("#email").val();
    if (email.length == 0) {
        $(".emailEmptyValidation").show();
    } else {
        $(".emailEmptyValidation").hide();
    }

    var mob_no = $("#mob_no").val();
    if (mob_no.length == 0) {
        $(".mobEmptyValidation").show();
    } else {
        $(".mobEmptyValidation").hide();
    }

    var Post = document.querySelector("#post").value;
    if (Post == "postAppFor") {
        $(".postValidation").show();
    } else {
        $(".postValidation").hide();
    }

    var bld_group = document.querySelector("#bld_group").value;
    if (bld_group == "Blood") {
        $(".bloodValidation").show();
    } else {
        $(".bloodValidation").hide();
    }

    var NCC = myFunc();
    console.log(NCC);

    var dateOfBirth = $("#date").val();
    if (dateOfBirth == "") {
        $(".dateEmptyValidation").show();
    } else {
        $(".dateEmptyValidation").hide();
    }

    var gender = $("input:radio[name=gender]:checked").val();

    // console.log(document.querySelector("#date").value)

    var qualification = $("#qualification").val();
    if (qualification == "quali") {
        $(".qualiValidation").show();
    } else {
        $(".qualiValidation").hide();
    }

    // if($(".f_nameValidation").show() || $(".l_nameValidation").show() || $(".emailEmptyValidation").show() || $(".mobEmptyValidation").show() || $(".postValidation").show() || $(".bloodValidation").show() || $(".dateEmptyValidation").show() || $(".qualiValidation").show()) {
    //     $(".mainValidation").show();
    // } else {
    //     $(".mainValidation").hide();
    //     userDetails.firstName = firstName;
    //     userDetails.lastName = lastName;
    //     userDetails.email = email;
    //     userDetails.mob_no = mob_no;
    //     userDetails.Post = Post;
    //     userDetails.bld_group = bld_group;
    //     userDetails.NCC = NCC;
    //     userDetails.dateOfBirth = dateOfBirth;
    //     userDetails.gender = gender; 
    //     userDetails.qualification = qualification;
    //     $.ajax({
    //         url: "/addData",
    //         type: "POST",
    //         data: userDetails,
    //         dataType: "JSON",
    //     }).done((response) => {
    //         console.log("Data saved successfully")
    //         console.log(response);
    //     }).fail((response) => {
    //         console.log("error while saving");
    //         console.log(response);
    //     })


        userDetails.firstName = firstName;
        userDetails.lastName = lastName;
        userDetails.email = email;
        userDetails.mob_no = mob_no;
        userDetails.Post = Post;
        userDetails.bld_group = bld_group;
        userDetails.NCC = NCC;
        userDetails.dateOfBirth = dateOfBirth;
        userDetails.gender = gender; 
        userDetails.qualification = qualification;
        $.ajax({
            url: "/addData",
            type: "POST",
            data: userDetails,
            dataType: "JSON",
        }).done(function (response) {
            console.log("Data saved successfully")
            console.log(response);
            alert("Data saved successfully");
        }).fail(function (response) {
            console.log("error while saving");
            console.log(response);
        })

    }
   

    // var uploadFormData = $.ajax({
    //     url: "/addData",
    //     type: "post",
    //     data: userDetails,
    //     dataType: "json"
    // });

    //     uploadFormData.done((response) => {
    //         console.log("upload done");
    //         console.log(response);
    //     }).fail((response) => {
    //         console.log(response);
    //     })


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
    // var mobRegex = /^[0-9]{10}$/;
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
    console.log(dateB);
    // var dateD = new Date(dateB)
    // console.log(typeof(dateD), dateD)
    // console.log(typeof(dateB))
    if (dateB == "") {
        $(".dateEmptyValidation").show();
    } else {
        $(".dateEmptyValidation").hide();
    }
}

document.addEventListener('DOMContentLoaded', () => {

    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();

    if (dd < 10) {
        dd = '0' + dd;
    }

    if (mm < 10) {
        mm = '0' + mm;
    }

    today = yyyy + '-' + mm + '-' + dd;

    document.getElementById("date").setAttribute("max", today);
});

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
    // e.preventDefault();
    // return false;
    //   }
    e.preventDefault();
    try {
    } catch (e) {
        throw new Error(e.message);
    }
    return false;
}

var uploadImage = (event) => {
    let compFileInfo = $("input[name=imageUpload]");
    var fileInfo = $("input[name=imageUpload]")[0].files[0];
    if (fileInfo == undefined) {
        $(".imageEmpty").show();
        return false;
    } else {
        $(".imageEmpty").hide();
        let formData = new FormData();
        formData.append("prodImage", fileInfo);
        let imageUploadReq = $.ajax({
            url: "/addImage",
            type: "POST",
            data: formData,
            enctype: "multipart/form-data",
            processData: false,
            contentType: false,
            dataType: "JSON",
            success: function (response) {
                console.log(response);
                console.log("image upload successfully");
            }
        });

        // imageUploadReq.done((response) => {
        //     console.log("upload done");
        //     console.log(response);
        // })
        // $("#imageSuccess").show();
        // $("#formFile").val('');
    }

}
