var deleteUser = (e) => {

    console.log(e.srcElement.id)
    id = e.srcElement.id;
        $.ajax({
            type: "get",
            url: `/delete/${id}`,
        }).done(function (response) {
            console.log(response);
            location.reload();
        }).fail(function (response) {
            console.log(response.responseText);
        })
}


