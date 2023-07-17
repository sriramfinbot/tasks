var save = () => {

    var userDetails = {};
    var formData = new FormData();
    userDetails.firstName = $("input[name=firstName]").val();
    userDetails.lastName = $("input[name=lastName]").val();
    userDetails.email = $("input[name=email]").val();
    userDetails.mob_no = $("input[name=mob_no]").val();
    // userDetails.photo = $("input[name=photo]")[0].files[0];
    userDetails.photo = $("input[name=photo]")
    console.log(userDetails.photo);
    // formData.append(userDetails);
    formData.set("userDetails", userDetails);


    console.log(userDetails);
    var uploadReq = $.ajax({
        url: "/add",
        type: "POST",
        data: formData,
        enctype: "multipart/form-data",
        processData: true,
        contentType: true,
        dataType: 'JSON'
    });
    uploadReq.done((response) => {
        console.log("upload done");
    })
}