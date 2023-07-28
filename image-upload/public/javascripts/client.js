// var productImagePath = '';

var uploadProductImage = () => {
    // console.log($("input[name=prodImage]"));
    // var fileInfo = $("input[name=prodImage]")[0].files[0];
    // if (fileInfo == undefined) {
    //     $("#upload").show();
    // } else if (fileInfo.type == "image/jpeg" || fileInfo.type == "image/jpg" || fileInfo.type == "image/png" || fileInfo.type == "image/gif") {
        let uploadFile = $("input[name=prodImage]")[0].files[0] // file from input
        let formD = new FormData();
        formD.append("prodImage", uploadFile);
        console.log(formD);

        var imageUploadReq = $.ajax({
            url: '/upload/image',
            type: 'POST',
            data: formD,
            enctype: 'multipart/form-data',
            processData: false,
            contentType: false,
            dataType: 'JSON'
        });
        imageUploadReq.done((response) => {
            console.log("upload done");
            console.log(response);
            // productImagePath = response.file_path;
        });

    // } else {
    //     $("#imgValidation").show();
    // }

}


   