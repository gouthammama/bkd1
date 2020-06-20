function alphanumeric(event) {


    var charcode = event.which ? event.which : event.keyCode;
    if (((charcode >= 48) && (charcode <= 57)) || (charcode == 8) || (charcode == 46) || (charcode == 9) || ((charcode >= 65) && (charcode <= 90)) || ((charcode >= 97) && (charcode <= 122)))
        return true;
    else
        return false;
}
function numbersonly(event) {
   
    var charcode = event.which ? event.which : event.keyCode;
    if ((charcode >= 48) && (charcode <= 57) || (charcode == 8)|| (charcode == 9)||(charcode==46)||(charcode==37)||(charcode==39))
        return true;
    else
        return false;

}
/*function email() {

    var textvalue = document.getElementById("txt_email").value;
   

    var valid1 = /^[A-Za-z0-9\._-]+@[A-Za-z]+.\w{2,4}.\w{2,3}$/;
    if (valid1.test(textvalue)) {
    }
    else {

        alert("Invalid email address");
    }


}*/
function sameaddress() {


    if (document.getElementById("chk_address").checked == true) {

        var present = document.getElementById("txt_present").value;
        document.getElementById("txt_permanent").innerHTML = present;
    }
    else {
        document.getElementById("txt_permanent").innerHTML="";

    }

}
function other_languages() {
    if (document.getElementById("chk_other").checked == true) {

        document.getElementById("txt_other").style.display = "block";
        document.getElementById("txt_other").value = "";
    }
    else {
        document.getElementById("txt_other").style.display = "none";

    }



}