//onload operation is performed here 
function click() {
    document.getElementById("lblrecupdsuc").style.display = "none";
}

//validate the textbox value to accept alphanumeric values 
function validtxtvalue(evt) {
    var charcode = (evt.which) ? evt.which : event.keyCode;
    if ((charcode >= 97 && charcode <= 122) || (charcode >= 65 && charcode <= 90) || (charcode == 8) || (charcode == 9)) {
        return true;
    }
    else {
        return false;
    }
}

//validate the textbox only accepts numbers backslash and tab
function validmobilenum(evt) {
    var charcode = (evt.which) ? evt.which : event.keyCode;
    if ((charcode >= 48 && charcode <= 57) || (charcode == 8) || (charcode == 9)) {
        return true;
    }
    else {
        return false;
    }
}

//validate the text box accept alphanumeric and special charaters 
function validdatecanid(evt) {
    var charcode = (evt.which) ? evt.which : event.keyCode;
    if ((charcode >= 97 && charcode <= 122) || (charcode >= 65 && charcode <= 90) || (charcode >= 48 && charcode <= 57) || (charcode == 8) || (charcode == 9)) {
        return true;
    }
    else {
        return false;
    }
}

//click on submit perform some operation 
function clicksubmit() {

    var errormsg = "";
    var firstname = document.getElementById("firstnameid").value;
    if (firstname == "") {
        errormsg += "Please enter FirstName<br />";
    }
    var lanme = document.getElementById("lnameid").value;
    if (lanme == "") {
        errormsg += "Please enter LastName<br />";
    }


    var fathername = document.getElementById("fathernameid").value;
    var dateofbirth = document.getElementById("dofb").value;
  /*  var today = new Date();                                                              //GETTING DATE FROM SYSTEM 
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();
    var a = +dd + '-' + mm + '-' + yyyy;
    var dateofbirth = document.getElementById("dofb").value;
    if (dateofbirth == "") {
    }
    else if (dateofbirth >= a) {
        errormsg += "The Date Of Birth should be less than Current Date<br>";
    }*/
   if (dateofbirth != "") {
      
        var date1 = document.getElementById("dofb").value;            //Required fields validation
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!
        var yyyy = today.getFullYear();
        var date_today = +yyyy + '-' + '0' + mm + '-' + dd;
        var date_dob = date1;
        var x = date_today.split("-");
        var y = date_dob.split("-");
        var a = x[0];                                       //reading current year
        var b = y[0];                                       //reading entered year in textbox
        var age = a - b;
        if (age >= 15) {
            if (age == 15) {
                var c = x[1];
                var d = y[1];
                if (c >= d) {
                    if (c == d) {
                        var e = x[2];
                        var f = y[2];
                        if (e >= f) {
                        }
                        else {
                            errormsg += "Please select Date of Birth such that Age should be greater than 15<br/>";
                        }
                    }
                    else {
                        errormsg += "Please select Date of Birth such that Age should be greater than 15<br/>";
                    }
                }
                else {

                }
            }

        }
        else {
            errormsg += "Please select Date of Birth such that Age should be greater than 15<br />";
        }

    }
    else {
     
    }
    var mobilenum = document.getElementById("mbn").value;
    mobilenum = mobilenum.replace(/^0+|\s+$/g, "");
    document.getElementById("mbn").value = mobilenum;
    var mobilenum = document.getElementById("mbn").value;

    if (mobilenum == "")
    { }
    else {
        if ((mobilenum.length) <= 9) {
            errormsg += "Please enter 10 Digit Mobile Number<br />";
        }
    }
    var perofdisalty = document.getElementById("perofdisalty").value;
    if (perofdisalty == "select") {
        errormsg += "Please select Percentage of Disability <br />";
    }

    var genmale = document.getElementById("rad_male").checked;
    var genfemale = document.getElementById("rad_fem").checked;
    if (genmale == true) {
    }
   

    var qualification = document.getElementById("qualification").value;
    if (qualification == "select") {
        errormsg += "Please select Qualification<br />";
    }

    var address = document.getElementById("address").value;

    var clgname = document.getElementById("clgname").value;

    var candidateid = document.getElementById("candidateid").value;
 candidateid = candidateid.replace(/^0+|\s+$/g, "");
    document.getElementById("candidateid").value = candidateid;
    var candidateid = document.getElementById("candidateid").value;

    var chbeng = document.getElementById("chbenglish").checked;
    var chbtel = document.getElementById("chbtelugu").checked;
    var chbhin = document.getElementById("chbhindi").checked;


    var vallbl = document.getElementById("lblcount").innerHTML;
    if (errormsg == "") {

        var TABLE = document.getElementById("tabinner");
        var BODY = TABLE.getElementsByTagName('tbody')[0];
        var TR = document.createElement('tr');
        var TD = document.createElement('td');
        var rowCount = TABLE.rows.length;



        TD.innerHTML = "<img src='images/imgEdit.gif' alt='edit' class='img' id='ing_" + rowCount + "' onclick='javascript:editvalue(this)'/>";
        TR.appendChild(TD);


        var TD1 = document.createElement('td');
        TD1.innerHTML = "<img src='images/imgDelete.gif' alt='delete' class='img' id='ing_" + rowCount + "' onclick='javascript:deleteRow(this)'/>";
        TR.appendChild(TD1);

        var TD2 = document.createElement('td');
        TD2.align = "left";
        TD2.innerHTML = candidateid;
        TR.appendChild(TD2);

        var TD3 = document.createElement('td');
        TD3.align = "left";
        TD3.innerHTML = firstname;
        TR.appendChild(TD3);

        var TD4 = document.createElement('td');
        TD4.align = "left";
        TD4.innerHTML = lanme;
        TR.appendChild(TD4);

        var TD5 = document.createElement('td');
        TD5.align = "left";
        TD5.innerHTML = fathername;
        TR.appendChild(TD5);

        var TD6 = document.createElement('td');
        TD6.align = "center";
        TD6.innerHTML = dateofbirth;
        TR.appendChild(TD6);

        var TD7 = document.createElement('td');
        TD7.align = "right";
        TD7.innerHTML = perofdisalty;
        TR.appendChild(TD7);


        var TD8 = document.createElement('td');
        TD8.align = "left";
        
        if (genmale == true) {
            TD8.innerHTML = document.getElementById("rad_male").value;
            TR.appendChild(TD8);
        }
        else {
            TD8.innerHTML = document.getElementById("rad_fem").value;
            TR.appendChild(TD8);
        }




        var TD9 = document.createElement('td');
        TD9.align = "left";
        TD9.innerHTML = address;
        TR.appendChild(TD9);

        var TD10 = document.createElement('td');
        TD10.align = "left";
        TD10.innerHTML = qualification;
        TR.appendChild(TD10);



        var TD11 = document.createElement('td');
        TD11.align = "left";
        if ((chbeng == true) || (chbtel == true) || (chbhin == true)) {
            if (chbeng == true) {
                TD11.innerHTML = document.getElementById("chbenglish").value;
                TR.appendChild(TD11);
            }
            if (chbtel == true) {
                TD11.innerHTML = TD11.innerHTML + " " + document.getElementById("chbtelugu").value;
                TR.appendChild(TD11);
            }
            if (chbhin == true) {
                TD11.innerHTML = TD11.innerHTML + " " + document.getElementById("chbhindi").value;
                TR.appendChild(TD11);
            }
        }
        else {
            TD11.innerHTML = "";
            TR.appendChild(TD11);

        }
        /*if (chbeng == true) {
        TD11.innerHTML= document.getElementById("chbenglish").value;
        TR.appendChild(TD11);
        }
        if (chbtel == true) {
        TD11.innerHTML= TD11.innerHTML+" "+document.getElementById("chbtelugu").value;
        TR.appendChild(TD11);
        }
        if (chbhin == true) {
        TD11.innerHTML =  TD11.innerHTML+" "+document.getElementById("chbhindi").value;
        TR.appendChild(TD11);
        }*/
        var TD12 = document.createElement('td');
        TD12.align = "left";
        TD12.innerHTML = clgname;
        TR.appendChild(TD12);

        var TD13 = document.createElement('td');
        TD13.align = "right";
        TD13.innerHTML = mobilenum;
        TR.appendChild(TD13);

        BODY.appendChild(TR);

        document.getElementById("lblerrmsg").innerHTML = "";

        document.getElementById("lblcount").innerHTML = parseFloat(vallbl) + 1;

        document.getElementById("firstnameid").value = "";
        document.getElementById("lnameid").value = "";
        document.getElementById("fathernameid").value = "";
        document.getElementById("dofb").value = "";
        document.getElementById("mbn").value = "";
        document.getElementById("perofdisalty").value = "select";
        document.getElementById("rad_male").checked = true;
        document.getElementById("rad_fem").checked = false;
        document.getElementById("address").value = "";
        document.getElementById("qualification").value = "select";
        document.getElementById("clgname").value = "";
        document.getElementById("candidateid").value = "";
        document.getElementById("chbenglish").checked = false;
        document.getElementById("chbtelugu").checked = false;
        document.getElementById("chbhindi").checked = false;
        document.getElementById("lblrecupdsuc").style.display = "block";
    }

    else {
        document.getElementById("lblerrmsg").innerHTML = errormsg;
    }

    /* 
    document.getElementById("firstnameid").value = "";
    document.getElementById("lnameid").value = "";
    document.getElementById("fathernameid").value = "";
    document.getElementById("dofb").value = "";
    document.getElementById("mbn").value = "";
    document.getElementById("perofdisalty").value = "select";
    document.getElementById("rad_male").checked = false;
    document.getElementById("rad_fem").checked = false;
    document.getElementById("address").value = "";
    document.getElementById("qualification").value = "select";
    document.getElementById("clgname").value = "";
    document.getElementById("candidateid").value = "";
    document.getElementById("chbenglish").checked = false;
    document.getElementById("chbtelugu").checked = false;
    document.getElementById("chbhindi").checked=false;*/

}

//click on Edit image buttion dynamically place in grid to edit the table values to fields of the form
/*   function editvalue(obj) {
document.getElementById("lblrecupdsuc").style.display="none";
var table = document.getElementById("tabinner");
var x = obj.split("_");
var y = x[1];
document.getElementById("firstnameid").value = table.rows[y].cells[3].innerHTML;
document.getElementById("lnameid").value = table.rows[y].cells[4].innerHTML;
document.getElementById("fathernameid").value = table.rows[y].cells[5].innerHTML;
document.getElementById("dofb").value = table.rows[y].cells[6].innerHTML;
document.getElementById("mbn").value=table.rows[y].cells[13].innerHTML;
document.getElementById("perofdisalty").value = table.rows[y].cells[7].innerHTML;
var rdbtn = table.rows[y].cells[8].innerHTML;
if (rdbtn == "Male") {
document.getElementById("rad_male").checked = true;
}
if (rdbtn == "Female") {
document.getElementById("rad_fem").checked = true;
}
document.getElementById("address").value = table.rows[y].cells[9].innerHTML;
document.getElementById("qualification").value = table.rows[y].cells[10].innerHTML;
document.getElementById("clgname").value=table.rows[y].cells[12].innerHTML;
document.getElementById("candidateid").value = table.rows[y].cells[2].innerHTML;
var chbopt = table.rows[y].cells[11].innerHTML;
if (chbopt.match("English")) {
document.getElementById("chbenglish").checked = true;
}
if(chbopt.match("Telugu"))
{
document.getElementById("chbtelugu").checked = true;
}
if(chbopt.match("Hindi")){
document.getElementById("chbhindi").checked = true;

}                                                 
}*/

function editvalue(obj) {

    document.getElementById("lblrecupdsuc").style.display = "none";
    var table = document.getElementById("tabinner");
    var rowCount = table.rows.length;
    var rowNumber = obj.parentNode.parentNode.rowIndex;

    if (parseInt(document.getElementById("tabinner").rows.length) > 0) {

        document.getElementById("firstnameid").value = table.rows[rowNumber].cells[3].innerHTML;
        document.getElementById("lnameid").value = table.rows[rowNumber].cells[4].innerHTML;
        document.getElementById("fathernameid").value = table.rows[rowNumber].cells[5].innerHTML;

        document.getElementById("dofb").value = table.rows[rowNumber].cells[6].innerHTML;
        document.getElementById("mbn").value = table.rows[rowNumber].cells[13].innerHTML;
        document.getElementById("perofdisalty").value = table.rows[rowNumber].cells[7].innerHTML;
        var rdbtn = table.rows[rowNumber].cells[8].innerHTML;
        if (rdbtn == "Male") {
            document.getElementById("rad_male").checked = true;
        }
        if (rdbtn == "Female") {
            document.getElementById("rad_fem").checked = true;
        }
        document.getElementById("address").value = table.rows[rowNumber].cells[9].innerHTML;
        document.getElementById("qualification").value = table.rows[rowNumber].cells[10].innerHTML;

        document.getElementById("clgname").value = table.rows[rowNumber].cells[12].innerHTML;
        document.getElementById("candidateid").value = table.rows[rowNumber].cells[2].innerHTML;
        var chbopt = table.rows[rowNumber].cells[11].innerHTML;
        /* if (chbopt.match("English") || chbopt.match("Telugu") || chbopt.match("Hindi")) {
        if (chbopt.match("English")) {
        document.getElementById("chbenglish").checked = true;
        }
        else {
        document.getElementById("chbenglish").checked = false;
        }
        if (chbopt.match("Telugu")) {
        document.getElementById("chbtelugu").checked = true;
        }
        else {
        document.getElementById("chbtelugu").checked = false;
        }
        if (chbopt.match("Hindi")) {
        document.getElementById("chbhindi").checked = true;
        }
        else {
        document.getElementById("chbhindi").checked = false;
        }
        }*/
        if (chbopt.match("English") || chbopt.match("Telugu") || chbopt.match("Hindi")) {
            if (chbopt.match("English")) {
                document.getElementById("chbenglish").checked = true;
            }
            else {
                document.getElementById("chbenglish").checked = false;
            }
            if (chbopt.match("Telugu")) {
                document.getElementById("chbtelugu").checked = true;
            }
            else {
                document.getElementById("chbtelugu").checked = false;
            }
            if (chbopt.match("Hindi")) {
                document.getElementById("chbhindi").checked = true;
            }
            else {
                document.getElementById("chbhindi").checked = false;
            }
        }
        else {
            document.getElementById("chbenglish").checked = false;
            document.getElementById("chbtelugu").checked = false;
            document.getElementById("chbhindi").checked = false;
        }


    }
    document.getElementById("lblerrmsg").innerHTML = "";
    document.getElementById("lblchange").innerHTML = "<input type='button' value='Update' class='clsbutton' id='uda-' onclick='javascript:return update(" + rowNumber + ")'>";
    document.getElementById("lblchange1").innerHTML = "<input type='button' value='Reset' class='clsbutton' id='uda-' onclick='javascript:return clickreset(" + rowNumber + ")'>";
}

//click update button 

function update(obj) {
    var errormsg = "";

    var firstname = document.getElementById("firstnameid").value;
    if (firstname == "") {
        errormsg += "Please Enter FirstName<br />";
    }
    var lanme = document.getElementById("lnameid").value;
    if (lanme == "") {
        errormsg += "Please Enter Last Name<br />";
    }


    var fathername = document.getElementById("fathernameid").value;

    /*var today = new Date();                                                              //GETTING DATE FROM SYSTEM 
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();
    var a = +dd + '-' + mm + '-' + yyyy;
    var dateofbirth = document.getElementById("dofb").value;
    if (dateofbirth == "") {
    }
    else if (dateofbirth > a) {
        errormsg += "The Date Of Birth should be less than Current Date<br>";
    }*/



    var dateofbirth = document.getElementById("dofb").value;

    if (dateofbirth != "") {

        var date1 = document.getElementById("dofb").value;            //Required fields validation
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!
        var yyyy = today.getFullYear();
        var date_today = +yyyy + '-' + '0' + mm + '-' + dd;
        var date_dob = date1;
        var x = date_today.split("-");
        var y = date_dob.split("-");
        var a = x[0];                                       //reading current year
        var b = y[0];                                       //reading entered year in textbox
        var age = a - b;
        if (age >= 15) {
            if (age == 15) {
                var c = x[1];
                var d = y[1];
                if (c >= d) {
                    if (c == d) {
                        var e = x[2];
                        var f = y[2];
                        if (e >= f) {
                        }
                        else {
                            errormsg += "Please enter Date of Birth such that Age should be greater than 15<br/>";
                        }
                    }
                    else {
                        errormsg += "Please enter Date of Birth such that Age should be greater than 15<br/>";
                    }
                }
                else {

                }
            }

        }
        else {
            errormsg += "Please enter Date of Birth such that Age should be greater than 15<br />";
        }

    }
    else {

    }
    

    var mobilenum = document.getElementById("mbn").value;
mobilenum = mobilenum.replace(/^0+|\s+$/g, "");
    document.getElementById("mbn").value = mobilenum;
    var mobilenum = document.getElementById("mbn").value;

    if (mobilenum == "") {
    }
    else {
        if ((mobilenum.length) <= 9) {
            errormsg += "Please Enter 10 Digit Mobile Number<br />";
        }
    }
    var perofdisalty = document.getElementById("perofdisalty").value;
    if (perofdisalty == "select") {
        errormsg += "Please Select Any Percentage of Disability Option in Dropdown Box<br />";
    }

    var qualification = document.getElementById("qualification").value;
    if (qualification == "select") {
        errormsg += "Please Select Any Qualification Option in Dropdown Box<br />";
    }

    var address = document.getElementById("address").value;

    var clgname = document.getElementById("clgname").value;

    var candidateid = document.getElementById("candidateid").value;
 candidateid = candidateid.replace(/^0+|\s+$/g, "");
    document.getElementById("candidateid").value = candidateid;
    var candidateid = document.getElementById("candidateid").value;

    var chbeng = document.getElementById("chbenglish").checked;
    var chbtel = document.getElementById("chbtelugu").checked;
    var chbhin = document.getElementById("chbhindi").checked;

    if (errormsg == "") {
        var table = document.getElementById("tabinner");
        var rowCount = table.rows.length;
        var rowNumber = parseInt(obj);
        table.rows[rowNumber].cells[2].innerHTML = document.getElementById("candidateid").value;
        table.rows[rowNumber].cells[3].innerHTML = document.getElementById("firstnameid").value;
        table.rows[rowNumber].cells[4].innerHTML = document.getElementById("lnameid").value;
        table.rows[rowNumber].cells[5].innerHTML = document.getElementById("fathernameid").value;
        table.rows[rowNumber].cells[6].innerHTML = document.getElementById("dofb").value;

        table.rows[rowNumber].cells[7].innerHTML = document.getElementById("perofdisalty").value;
        var rd = document.getElementById("rad_male").checked;
        var rd1 = document.getElementById("rad_fem").checked;
        if (rd == true) {
            table.rows[rowNumber].cells[8].innerHTML = document.getElementById("rad_male").value;
        }
        if (rd1 == true) {
            table.rows[rowNumber].cells[8].innerHTML = document.getElementById("rad_fem").value;
        }

        table.rows[rowNumber].cells[9].innerHTML = document.getElementById("address").value;
        table.rows[rowNumber].cells[10].innerHTML = document.getElementById("qualification").value;
        if ((chbeng == true) || (chbtel == true) || (chbhin == true)) {
            if (chbeng == true) {
                table.rows[rowNumber].cells[11].innerHTML = document.getElementById("chbenglish").value;
            }
            if (chbtel == true) {
                table.rows[rowNumber].cells[11].innerHTML = table.rows[rowNumber].cells[11].innerHTML + " " + document.getElementById("chbtelugu").value;
            }
            if (chbhin == true) {
                table.rows[rowNumber].cells[11].innerHTML = table.rows[rowNumber].cells[11].innerHTML + " " + document.getElementById("chbhindi").value;
            }
        }
        else {
            table.rows[rowNumber].cells[11].innerHTML = "";
        }
        table.rows[rowNumber].cells[12].innerHTML = document.getElementById("clgname").value;
        table.rows[rowNumber].cells[13].innerHTML = document.getElementById("mbn").value;

        document.getElementById("lblchange").innerHTML = "<input type='button' value='Submit' class='clsbutton' id='uda-' onclick='javascript:return clicksubmit(this)'>";
        document.getElementById("lblchange1").innerHTML = "<input type='button' value='Clear' class='clsbutton' id='uda-' onclick='javascript:return clickclear()'>";
        document.getElementById("firstnameid").value = "";
        document.getElementById("lnameid").value = "";
        document.getElementById("fathernameid").value = "";
        document.getElementById("dofb").value = "";
        document.getElementById("mbn").value = "";
        document.getElementById("perofdisalty").value = "select";
        document.getElementById("rad_male").checked =  true;
        document.getElementById("rad_fem").checked = false;
        document.getElementById("address").value = "";
        document.getElementById("qualification").value = "select";
        document.getElementById("clgname").value = "";
        document.getElementById("candidateid").value = "";
        document.getElementById("chbenglish").checked = false;
        document.getElementById("chbtelugu").checked = false;
        document.getElementById("chbhindi").checked = false;
        document.getElementById("lblerrmsg").innerHTML = "";
    }
    else {
        document.getElementById("lblerrmsg").innerHTML = errormsg;
    }

}
//click on delete image button to delete the table corresponding table row 
/*  function deleteRow(obj) {
document.getElementById("lblrecupdsuc").style.display="none";
var vallbl = document.getElementById("lblcount").innerHTML;
var table = document.getElementById("tabinner");
var rowCount = table.rows.length;
var x = obj.split("_");
var y = x[1];
table.deleteRow(y);
document.getElementById("lblcount").innerHTML = parseFloat(vallbl) -1;
}*/
/*function deleteRow(obj) {
document.getElementById("lblrecupdsuc").style.display="none";
var vallbl = document.getElementById("lblcount").innerHTML;
var table = document.getElementById("tabinner");
var rowCount = table.rows.length;
var rowNumber = obj.parentNode.parentNode.rowIndex;
            
if (parseInt(document.getElementById("tabinner").rows.length) > 0) {
document.getElementById("tabinner").deleteRow(rowNumber);
}
           
document.getElementById("lblcount").innerHTML = parseFloat(vallbl) -1;
}*/

/*function deleteRow(obj) {

    document.getElementById("lblrecupdsuc").style.display= "none";
    var vallbl = document.getElementById("lblcount").innerHTML;
    var table = document.getElementById("tabinner");
    var rowCount = table.rows.length;
    var rowNumber = obj.parentNode.parentNode.rowIndex;
    if ((document.getElementById("candidateid").value) == (table.rows[rowNumber].cells[2].innerHTML)) {
        alert("Please the update the corresponding record");
    }
    else {

        if (parseInt(document.getElementById("tabinner").rows.length) > 0) {
            document.getElementById("tabinner").deleteRow(rowNumber);
        }

        document.getElementById("lblcount").innerHTML = parseFloat(vallbl) - 1;
    }
}*/

function deleteRow(obj) {
    document.getElementById("lblrecupdsuc").style.display = "none";
    var vallbl = document.getElementById("lblcount").innerHTML;
    var table = document.getElementById("tabinner");
    var rowCount = table.rows.length;
    var rowNumber = obj.parentNode.parentNode.rowIndex;
    var agree = confirm("Are you sure you wish to delete?");
    if (agree) {
        if (parseInt(document.getElementById("tabinner").rows.length) > 0) {
            document.getElementById("tabinner").deleteRow(rowNumber);
        }
        document.getElementById("lblcount").innerHTML = parseFloat(vallbl) - 1;
    }
  

    document.getElementById("lblerrmsg").innerHTML = "";
    document.getElementById("firstnameid").value = "";
    document.getElementById("lnameid").value = "";
    document.getElementById("fathernameid").value = "";
    document.getElementById("dofb").value = "";
    document.getElementById("mbn").value = "";
    document.getElementById("perofdisalty").value = "select";
    document.getElementById("rad_male").checked = true;
    document.getElementById("rad_fem").checked = false;
    document.getElementById("address").value = "";
    document.getElementById("qualification").value = "select";
    document.getElementById("clgname").value = "";
    document.getElementById("candidateid").value = "";
    document.getElementById("chbenglish").checked = false;
    document.getElementById("chbtelugu").checked = false;
    document.getElementById("chbhindi").checked = false;
    document.getElementById("lblchange1").innerHTML = "<input type='button' value='Clear' class='clsbutton' id='uda-' onclick='javascript:return clickclear()'>";
    document.getElementById("lblchange").innerHTML = "<input type='button' value='Submit' class='clsbutton' id='uda-' onclick='javascript:return clicksubmit(this)'>";
}

//click on clear button to clear all the fields of form
function clickclear() {
    document.getElementById("lblrecupdsuc").style.display = "none";
    document.getElementById("lblerrmsg").innerHTML = "";
    document.getElementById("firstnameid").value = "";
    document.getElementById("lnameid").value = "";
    document.getElementById("fathernameid").value = "";
    document.getElementById("dofb").value = "";
    document.getElementById("mbn").value = "";
    document.getElementById("perofdisalty").value = "select";
    document.getElementById("rad_male").checked =  true;
    document.getElementById("rad_fem").checked = false;
    document.getElementById("address").value = "";
    document.getElementById("qualification").value = "select";
    document.getElementById("clgname").value = "";
    document.getElementById("candidateid").value = "";
    document.getElementById("chbenglish").checked = false;
    document.getElementById("chbtelugu").checked = false;
    document.getElementById("chbhindi").checked = false;
}
//click on reset button  reload the update record

function clickreset(obj) {
    //document.getElementById("lblchange1").innerHTML = "<input type='button' value='Clear' class='button' id='uda-' onclick='javascript:return clickclear()'>";
    document.getElementById("lblrecupdsuc").style.display = "none";
    var table = document.getElementById("tabinner");
    //var rowCount = table.rows.length;
    //alert(rowCount);
    //var rowNumber = obj.parentNode.parentNode.rowIndex;
    rowNumber = parseInt(obj);

    if (parseInt(document.getElementById("tabinner").rows.length) > 0) {
        document.getElementById("firstnameid").value = table.rows[rowNumber].cells[3].innerHTML;
        document.getElementById("lnameid").value = table.rows[rowNumber].cells[4].innerHTML;
        document.getElementById("fathernameid").value = table.rows[rowNumber].cells[5].innerHTML;
        document.getElementById("mbn").value = table.rows[rowNumber].cells[13].innerHTML;
        document.getElementById("dofb").value = table.rows[rowNumber].cells[6].innerHTML;
        document.getElementById("perofdisalty").value = table.rows[rowNumber].cells[7].innerHTML;
        var rdbtn = table.rows[rowNumber].cells[8].innerHTML;
        if (rdbtn == "Male") {
            document.getElementById("rad_male").checked = true;
        }
        if (rdbtn == "Female") {
            document.getElementById("rad_fem").checked = true;
        }
        document.getElementById("address").value = table.rows[rowNumber].cells[9].innerHTML;
        document.getElementById("qualification").value = table.rows[rowNumber].cells[10].innerHTML;
        document.getElementById("clgname").value = table.rows[rowNumber].cells[12].innerHTML;
        document.getElementById("candidateid").value = table.rows[rowNumber].cells[2].innerHTML;
        var chbopt = table.rows[rowNumber].cells[11].innerHTML;
        if (chbopt.match("English") || chbopt.match("Telugu") || chbopt.match("Hindi")) {
            if (chbopt.match("English")) {
                document.getElementById("chbenglish").checked = true;
            }
            else {
                document.getElementById("chbenglish").checked = false;
            }
            if (chbopt.match("Telugu")) {
                document.getElementById("chbtelugu").checked = true;
            }
            else {
                document.getElementById("chbtelugu").checked = false;
            }
            if (chbopt.match("Hindi")) {
                document.getElementById("chbhindi").checked = true;
            }
            else {
                document.getElementById("chbhindi").checked = false;
            }
        }
        else {
            document.getElementById("chbenglish").checked = false;
            document.getElementById("chbtelugu").checked = false;
            document.getElementById("chbhindi").checked = false;
        }
    }
    document.getElementById("lblerrmsg").innerHTML = "";
}