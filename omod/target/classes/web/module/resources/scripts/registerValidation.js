/**
 * Created by steve_w on 09/06/14.
 */

 function isFnameValid() {
    var val = 0;
     if (document.soddoReg.fname.value.trim() === "") {
         document.getElementById("fname_error").innerHTML = "<br> *Required Field";
         val = 1;
     }
    else{
         document.getElementById("fname_error").innerHTML = "";
     }
    return val;
 }
function isMnameValid() {
    var val = 0;
    if (document.soddoReg.mname.value.trim() === "") {
        document.getElementById("mname_error").innerHTML = "<br> *Required Field";
        val = 1;
    }
    else{
        document.getElementById("mname_error").innerHTML = "";
    }
    return val;
}
function isLnameValid() {
    var val = 0;
    if (document.soddoReg.lname.value.trim() === "") {
        document.getElementById("lname_error").innerHTML = "<br> *Required Field";
        val = 1;
    }
    else{
        document.getElementById("lname_error").innerHTML = "";
    }
    return val;
}
function isFthnameValid() {
    var val = 0;
    if (document.soddoReg.fthname.value.trim() === "") {
        document.getElementById("fthname_error").innerHTML = "<br> *Required Field";
        val = 1;
    }
    else{
        document.getElementById("fthname_error").innerHTML = "";
    }
    return val;
}
function isGnameValid() {
    var val = 0;
    if (document.soddoReg.gname.value.trim() === "") {
        document.getElementById("gname_error").innerHTML = "<br> *Required Field";
        val = 1;
    }
    else{
        document.getElementById("gname_error").innerHTML = "";
    }
    return val;
}
function isTelValid() {
    var val = 0;
    if (document.soddoReg.tel.value.trim() === "") {
        document.getElementById("tel_error").innerHTML = "<br> *Required Field";
        val = 1;
    }
    else{
        document.getElementById("tel_error").innerHTML = "";
    }
    return val;
}
function isGenderValid() {
    var val = 0;
    if (document.soddoReg.gender.value.trim() === "") {
        document.getElementById("gender_error").innerHTML = "<br> *Required Field";
        val = 1;
    }
    else{
        document.getElementById("gender_error").innerHTML = "";
    }
    return val;
}
function isRegionValid() {
    var val = 0;
    if (document.soddoReg.region.value.trim() === "") {
        document.getElementById("region_error").innerHTML = "<br> *Required Field";
        val = 1;
    }
    else{
        document.getElementById("region_error").innerHTML = "";
    }
    return val;
}
function isWoredaValid() {
    var val = 0;
    if (document.soddoReg.woreda.value.trim() === "") {
        document.getElementById("woreda_error").innerHTML = "<br> *Required Field";
        val = 1;
    }
    else{
        document.getElementById("woreda_error").innerHTML = "";
    }
    return val;
}
function isKetenaValid() {
    var val = 0;
    if (document.soddoReg.ketena.value.trim() === "") {
        document.getElementById("ketena_error").innerHTML = "<br> *Required Field";
        val = 1;
    }
    else{
        document.getElementById("ketena_error").innerHTML = "";
    }
    return val;
}
function isZoneValid() {
    var val = 0;
    if (document.soddoReg.zone.value.trim() === "") {
        document.getElementById("zone_error").innerHTML = "<br> *Required Field";
        val = 1;
    }
    else{
        document.getElementById("zone_error").innerHTML = "";
    }
    return val;
}
function isKebeleValid() {
    var val = 0;
    if (document.soddoReg.kebele.value.trim() === "") {
        document.getElementById("kebele_error").innerHTML = "<br> *Required Field";
        val = 1;
    }
    else{
        document.getElementById("kebele_error").innerHTML = "";
    }
    return val;
}
function isSubcityValid() {
    var val = 0;
    if (document.soddoReg.subcity.value.trim() === "") {
        document.getElementById("subcity_error").innerHTML = "<br> *Required Field";
        val = 1;
    }
    else{
        document.getElementById("subcity_error").innerHTML = "";
    }
    return val;
}
function validate(){
var valTotal = isFnameValid() + isMnameValid() + isLnameValid()  + isTelValid() + isGenderValid() +
                 isRegionValid()  + isZoneValid();
    if(valTotal >= 1){
        alert("Please input the required fields before submitting form");
    }
}



