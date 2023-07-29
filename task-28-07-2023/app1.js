"use strict";


var submit = (e) => {
    // returning values from each input
    var email = document.querySelector("#email").value;
    var firstName = document.querySelector("#firstName").value;
    var lastName = document.querySelector("#lastName").value;
    var qualification = document.querySelector("#Qualification").value;
    var bld_group = document.querySelector("#blood_group").value;
    var gender = document.querySelector("input[name=exampleRadios]:checked").value;
    var NSS = document.querySelector("#flexSwitchCheckChecked").checked;
    var NSSPref = "";
    if (NSS == true) {
        NSSPref = "Yes";
    } else {
        NSSPref = "No";
    }
    var JobCityArr = myFunc();


    var t_body = document.querySelector("#table");

    var tr = document.createElement("div");
    tr.setAttribute("class", "container-fluid border border-dark border-1 m-1 row");

    var tdEmail = document.createElement("div");
    tdEmail.setAttribute("class", "col-2")
    tr.append(tdEmail);
    var tdFName = document.createElement("div");
    tdFName.setAttribute("class", "col-1")
    tr.append(tdFName);
    var tdLName = document.createElement("div");
    tdLName.setAttribute("class", "col-1")
    tr.append(tdLName);
    var tdQal = document.createElement("div");
    tdQal.setAttribute("class", "col-1")
    tr.append(tdQal);
    var tdBld_grp = document.createElement("div");
    tdBld_grp.setAttribute("class", "col-2")
    tr.append(tdBld_grp);
    var tdGender = document.createElement("div");
    tdGender.setAttribute("class", "col-1")
    tr.append(tdGender);
    var tdNSSPref = document.createElement("div");
    tdNSSPref.setAttribute("class", "col-2")
    tr.append(tdNSSPref);
    var tdJobCity = document.createElement("div");
    tdJobCity.setAttribute("class", "col-2")
    tr.append(tdJobCity);

    JobCityArr.forEach((item) => {
        let divCity =
            document.createElement("div");
        divCity.innerText = item;
        tdJobCity.appendChild(divCity);
    })


    tdEmail.innerHTML = email;
    tdFName.innerHTML = firstName;
    tdLName.innerHTML = lastName;
    tdQal.innerHTML = qualification;
    tdBld_grp.innerHTML = bld_group;
    tdGender.innerHTML = gender;
    tdNSSPref.innerHTML = NSSPref;
    tdJobCity.innerHTML = JobCityArr;
    t_body.append(tr);

    $("#email").val("");
    $("#firstName").val("");
    $("#lastName").val("");
    $("#Qualification").val($("#Qualification option[selected]").val());
    $("#blood_group").val($("#blood_group option[selected]").val());
    $("input[name=exampleRadios]").attr('checked', false);
    
    for (const checkbox of document.querySelectorAll('#inlineCheckbox')) {
        //iterating over all matched elements
        
        checkbox.checked = true //for selection
        checkbox.checked = false //for unselection
        }
}

function myFunc() {
    let arr = [];
    let checkboxes = document.querySelectorAll("input[id=inlineCheckbox]:checked");
    checkboxes.forEach((item) => {
        console.log(item);
        arr.push(item.value)
    })
    if (arr.length == 0) {
        arr[0] = "No";
        console.log(arr);
    }
    return arr;
}