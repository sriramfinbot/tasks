var loadFields = (event) => {
    let imageUploadReq = $.ajax({
        url: "/showData",
        type: "get",
        processData: false,
        contentType: false,
        dataType: "JSON"
    }).done(function (response) {
        console.log(response);
    }).fail(function (response) {
        console.log(response);
        console.log(response.responseText);
        alert("Data saved successfully")
    })
}