

function fnAddBtnValidation() {
    var emp = document.getElementById("emp_name").value;
    var empno = document.getElementById("emp_id").value;
    var addr = document.getElementById("address_id").value;
    var dob = document.getElementById("dob_id").value;
    var desg = document.getElementById("desig_id").value;
    var loca = document.getElementById("wrklocaton").selectedIndex;
    var bassal = document.getElementById("basicsal_id").value;
    var grade = document.getElementById("grade_id").selectedIndex;
    var incent = document.getElementById("incentive_id").value;
    var dayshift = document.getElementById("chk1").checked;
    var ntshift = document.getElementById("chk2").checked;
    var ntallowtemp = document.getElementById("nightallw_id").value;
    var gend = "";
    var errormsg = ""
    var shiftday = "No";
    var shiftnight = "No";
    var ntallow = Math.round(parseFloat(ntallowtemp));
    var datecom = dob.split("-");




    if (emp == "") {
        errormsg += "Please Enter Employee Name <br/>"
    }
    if (empno == "") {
        errormsg += "Please Enter Employee Id <br/>"
    }
    if (addr == "") {
        errormsg += "Please Enter Employee Address<br/>"
    }
    if (dob != "") {
        today = new Date();
        dd = today.getDate();
        mm = today.getMonth() + 1; //January is 0!
        yyyy = today.getFullYear();
        var a = (yyyy - datecom[2]);

        if (a >= 18) {
            if (a == 18) {
                 if (datecom[1] <= mm) {
                if (mm == datecom[1]) {
                if (datecom[0] <= dd) {
                }
                else {
                errormsg += "Employee Date Of Birth should  be greater than or equal to 18 years<br/>"
                }

                }
                }
                else {
                errormsg += "Employee Date Of Birth should  be greater than or equal to 18 years<br/>"

                }
                
            }
        }
        else {
            errormsg += "Employee Date Of Birth should  be greater than or equal to 18 years<br/>";

        }

    }
    else {
        errormsg += "Please Enter Employee Date Of Birth<br/>"
    }

    if (desg == "") {
        errormsg += "Please Enter Employee Designation<br/>"
    }
    if (loca == 0) {
        errormsg += "Please Enter Employee WorkLocation<br/>"
    }
    if (bassal == "") {
        errormsg += "Please Enter Employee Basic Salary<br/>"
    }
    if (incent == "") {
        errormsg += "Please Enter Employee Incentives<br/>"
    }
    if (grade == 0) {
        errormsg += "Please Enter  Employee Grade<br/>"
    }
    if (document.getElementById("male_id").checked == false && document.getElementById("female_id").checked == false) {
        errormsg += "Please Enter  Employee Gender<br/>"
    }
    if (document.getElementById("male_id").checked == true) {
        gend = "Male";
    }
    if (document.getElementById("female_id").checked == true) {
        gend = "Female";
    }
    if (dayshift == false && ntshift == false) {
        errormsg += "Please Enter Employee Shift<br/>"
    }
    if (ntshift == true) {
        if (ntallowtemp == "") {
            errormsg += "Please Enter Employee Night Allowences<br/>"
        }
    }


    if (ntshift == true) {

        shiftnight = "Yes";
    }
    if (dayshift == true) {
        shiftday = "Yes";

    }
    if (document.getElementById("chk2").checked == false) {
        ntallow = 0;
    }


    if (errormsg == "") {
        var t1 = document.getElementById("table2");
        var rc = t1.rows.length;
        var row = t1.insertRow(rc);
        var records = document.getElementById("lbl_avl").innerHTML;
        var records1 = parseInt(records);
        records1 = records1 + 1;
        document.getElementById("lbl_avl").innerHTML = records1;


        var cell1 = row.insertCell(0);
        cell1.innerHTML = "<img src='images/Edit.gif' class='cursor' id='img_" + rc + "' onclick='javascript:return funInsert(this)'>";

        var cell2 = row.insertCell(1);
        cell2.innerHTML = "<img src='images/Delete.gif' class='cursor' id='del_" + rc + "'   onclick='javascript:return funDelete(this)'>";

        var cell3 = row.insertCell(2);
        cell3.innerHTML = emp;
        cell3.align = "left";

        var cell4 = row.insertCell(3);
        cell4.innerHTML = empno;
        cell4.align = "right";
        var cell5 = row.insertCell(4);
        cell5.innerHTML = addr;
        cell5.align = "left";
        //cell5.style.width = "bold";

        var cell6 = row.insertCell(5);
        cell6.innerHTML = gend;
        cell6.align = "left";

        var cell7 = row.insertCell(6);
        cell7.innerHTML = dob;
        cell7.align = "center"
        var cell8 = row.insertCell(7);
        cell8.innerHTML = desg;
        cell8.align = "left";
        var cell9 = row.insertCell(8);
        cell9.innerHTML = document.getElementById("wrklocaton").value;
        cell9.align = "left";
        var cell10 = row.insertCell(9);
        cell10.innerHTML = bassal;
        cell10.align = "right"


        var cell11 = row.insertCell(10);
        cell11.innerHTML = document.getElementById("grade_id").value;
        cell11.align = "left";


        var cell12 = row.insertCell(11);
        cell12.innerHTML = shiftday;
        cell12.align = "left";

        var cell13 = row.insertCell(12);
        cell13.innerHTML = shiftnight;
        cell13.align = "left";


        var cell14 = row.insertCell(13);
        cell14.innerHTML = ntallow;
        cell14.align = "right"


        var cell15 = row.insertCell(14);
        cell15.innerHTML = incent;
        cell15.align = "right"


        var cell16 = row.insertCell(15);
        cell16.innerHTML = document.getElementById("pf_lbl").innerHTML;
        cell16.align = "right"

        var cell17 = row.insertCell(16);
        cell17.innerHTML = document.getElementById("hra_lbl").innerHTML;
        cell17.align = "right"

        var cell18 = row.insertCell(17);
        cell18.innerHTML = document.getElementById("tax_lbl").innerHTML;
        cell18.align = "right"

        var cell19 = row.insertCell(18);
        cell19.innerHTML = document.getElementById("cca_lbl").innerHTML;
        cell19.align = "right"

        var cell20 = row.insertCell(19);
        cell20.innerHTML = document.getElementById("ded_lbl").innerHTML;
        cell20.align = "right"

        var cell21 = row.insertCell(20);
        cell21.innerHTML = document.getElementById("salery_lbl").innerHTML;
        cell21.align = "right"

        var emp = document.getElementById("emp_name").value = "";
        var empno = document.getElementById("emp_id").value = "";
        var addr = document.getElementById("address_id").value = "";
        var dob = document.getElementById("dob_id").value = "";
        var desg = document.getElementById("desig_id").value = "";
        var loca = document.getElementById("wrklocaton").selectedIndex = 0;
        var bassal = document.getElementById("basicsal_id").value = "";
        var grade = document.getElementById("grade_id").selectedIndex = 0;
        var incent = document.getElementById("incentive_id").value = "";
        var dayshift = document.getElementById("chk1").checked = false;
        var ntshift = document.getElementById("chk2").checked = false;
        var ntallowtemp = document.getElementById("nightallw_id").value = "";
        document.getElementById("male_id").checked = true;

        document.getElementById("pf_lbl").innerHTML = "";
        document.getElementById("hra_lbl").innerHTML = "";
        document.getElementById("cca_lbl").innerHTML = "";
        document.getElementById("tax_lbl").innerHTML = "";
        document.getElementById("ded_lbl").innerHTML = "";
        document.getElementById("salery_lbl").innerHTML = "";
        document.getElementById("errmsg").innerHTML = "";
        document.getElementById("trhide").style.display = "none";
       // document.getElementById("btnadd").style.display = "none";
        //document.getElementById("btnadd").innerHTML = "<input type='button' value='Update' id='up_" + rc + "' onclick='javascript:return Update(" + rc + ")'>";
    }
    else {
        document.getElementById("errmsg").innerHTML = errormsg;
    }

}

/* function funDelete(obj) {
alert("happy");


var tab = document.getElementById("table2");
var len = tab.rows.length;
var x = obj.split("_");

rc = x[1];

tab.deleteRow(rc);
rc--;
len--;



var records = tab.rows(0).cells(1).innerHTML;
var records1 = parseInt(records);
records1 = records1 - 1;
       
tab.rows(0).cells(1).innerHTML = records1;


}
*/
function funDelete(rowId) {

    var table = document.getElementById("table2");
    var rowCount = table.rows.length;
    var rowNumber = rowId.parentNode.parentNode.rowIndex;
    var rc = rowNumber;
    var agree = confirm("Are you sure you wish to delete?");
    if (agree) {

        if (document.getElementById("dob_id").value != "") {

            alert("Update the record first");
        }
        else {


            if (parseInt(document.getElementById("table2").rows.length) > 0) {
                document.getElementById("table2").deleteRow(rowNumber);
                (document.getElementById("lbl_avl").innerHTML)--;
            }
        }
    }

   }

function funalphanumaric(evt) {
    var charcode = (evt.which) ? evt.which : evt.keyCode;
    if ((charcode >= 48 && charcode <= 57) || charcode == 8 || (charcode >= 65 && charcode <= 90) || (charcode >= 97 && charcode <= 122) || charcode == 46 || charcode == 64) {
        return true;
    }
    else {
        return false;
    }
}

function funalphaonly(evt) {
    var charcode = (evt.which) ? evt.which : evt.keyCode;
    if (charcode == 32 || charcode == 8 || (charcode >= 65 && charcode <= 90) || (charcode >= 97 && charcode <= 122) || charcode == 46) {
        return true;
    }
    else {
        return false;
    }
}

function funnumbersonly(evt) {

    var charcode = (evt.which) ? evt.which : evt.keyCode;
    if ((charcode >= 48 && charcode <= 57) || charcode == 8 || charcode == 46) {
        return true;
    }
    else {
        return false;

    }
}

function funsalery() {
    var bassal = document.getElementById("basicsal_id").value;
    var grade = document.getElementById("grade_id").selectedIndex;
    var incent = document.getElementById("incentive_id").value;
    var house = bassal / 10;
    var houseallw = Math.round(parseFloat(house) * 100) / 100;
    document.getElementById("hra_lbl").innerHTML = houseallw;
    var tempcca = bassal - bassal * (65 / 100);
    var cca = Math.round(parseFloat(tempcca) * 100) / 100;
    document.getElementById("cca_lbl").innerHTML = cca;
    var temppf = bassal - bassal * (70 / 100);
    var pf = Math.round(parseFloat(temppf) * 100) / 100;
    document.getElementById("pf_lbl").innerHTML = pf;
    var temptax = bassal / 10;
    var tax = Math.round(parseFloat(temptax) * 100) / 100;
    document.getElementById("tax_lbl").innerHTML = tax;

    var deductiontemp = parseFloat(tax) + parseFloat(pf);
    var deduction = Math.round(parseFloat(deductiontemp));
    document.getElementById("ded_lbl").innerHTML = deduction;





    var ntallowtemp = document.getElementById("nightallw_id").value;
    var ntallow = Math.round(parseFloat(ntallowtemp));

    if (document.getElementById("chk2").checked == false) {
        var totalsaltemp = parseFloat(houseallw) + parseFloat(bassal) + parseFloat(cca) + parseFloat(incent) - parseFloat(deduction);
    }
    else {
        var totalsaltemp = parseFloat(houseallw) + parseFloat(bassal) + parseFloat(cca) + parseFloat(incent) + parseFloat(ntallow) - parseFloat(deduction);
    }

    var totalsal = Math.round(parseFloat(totalsaltemp));
    document.getElementById("salery_lbl").innerHTML = totalsal;

}
function funclear() {
    var emp = document.getElementById("emp_name").value = "";
    var empno = document.getElementById("emp_id").value = "";
    var addr = document.getElementById("address_id").value = "";
    var dob = document.getElementById("dob_id").value = "";
    var desg = document.getElementById("desig_id").value = "";
    var loca = document.getElementById("wrklocaton").selectedIndex = 0;
    var bassal = document.getElementById("basicsal_id").value = "";
    var grade = document.getElementById("grade_id").selectedIndex = 0;
    var incent = document.getElementById("incentive_id").value = "";
    var dayshift = document.getElementById("chk1").checked = false;
    var ntshift = document.getElementById("chk2").checked = false;
    document.getElementById("male_id").checked = false;
    document.getElementById("female_id").checked = false;
    document.getElementById("wrklocaton").value = "";
    document.getElementById("grade_id").value = "";
    document.getElementById("pf_lbl").innerHTML = "";
    document.getElementById("hra_lbl").innerHTML = "";
    document.getElementById("cca_lbl").innerHTML = "";
    document.getElementById("tax_lbl").innerHTML = "";
    document.getElementById("ded_lbl").innerHTML = "";
    document.getElementById("salery_lbl").innerHTML = "";
    document.getElementById("errmsg").innerHTML = "";
}
function funnightallownce() {
    var boxvar = document.getElementById("chk2").checked;
    if (boxvar == true) {
        document.getElementById("trhide").style.display = "block";
    }
    else {
        document.getElementById("trhide").style.display = "none";
    }
}

function funInsert(rowId) {
    document.getElementById("errmsg").innerHTML = "";
    var tab = document.getElementById("table2");
    var rowcount = tab.rows.length;
    var rc = rowId.parentNode.parentNode.rowIndex;
    var emp = document.getElementById("emp_name").value = tab.rows[rc].cells[2].innerHTML;
    var empno = document.getElementById("emp_id").value = tab.rows[rc].cells[3].innerHTML;
    var addr = document.getElementById("address_id").value = tab.rows[rc].cells[4].innerHTML;
    var dob = document.getElementById("dob_id").value = tab.rows[rc].cells[6].innerHTML;
    var desg = document.getElementById("desig_id").value = tab.rows[rc].cells[7].innerHTML;
    var loca = document.getElementById("wrklocaton").value = tab.rows[rc].cells[8].innerHTML;
    var bassal = document.getElementById("basicsal_id").value = tab.rows[rc].cells[9].innerHTML;
    var grade = document.getElementById("grade_id").selectedIndex = tab.rows[rc].cells[10].innerHTML;
    var incent = document.getElementById("incentive_id").value = tab.rows[rc].cells[14].innerHTML;
    document.getElementById("pf_lbl").innerHTML = tab.rows[rc].cells[15].innerHTML;
    document.getElementById("hra_lbl").innerHTML = tab.rows[rc].cells[16].innerHTML;
    document.getElementById("cca_lbl").innerHTML = tab.rows[rc].cells[18].innerHTML;
    document.getElementById("tax_lbl").innerHTML = tab.rows[rc].cells[17].innerHTML;
    document.getElementById("ded_lbl").innerHTML = tab.rows[rc].cells[19].innerHTML;
    document.getElementById("salery_lbl").innerHTML = tab.rows[rc].cells[20].innerHTML;
    document.getElementById("nightallw_id").value = tab.rows[rc].cells[13].innerHTML;
   
    document.getElementById("btnAdd").style.display = "none";
    document.getElementById("lblUpdate").style.display = "block";

    
    document.getElementById("lblUpdate").innerHTML = "<input type='button'  class='Buttons' value='Update' id='Up_" + rc + "'onclick='javascript:return funUpdat(" + rc + ");'>";
    document.getElementById("lblchange1").innerHTML = "<input type='button'  class='Buttons' value='Reset'  id='uda-' onclick='javascript:return clickreset(" + rc + ")'>";
    if (tab.rows[rc].cells[5].innerHTML == "Female") {

        document.getElementById("female_id").checked = true

    }
    else {
        document.getElementById("male_id").checked = true;
    }

    document.getElementById("wrklocaton").value = tab.rows[rc].cells[8].innerHTML;
    document.getElementById("grade_id").value = tab.rows[rc].cells[10].innerHTML;

    if (tab.rows[rc].cells[11].innerHTML == "Yes") {

        document.getElementById("chk1").checked = true;
        document.getElementById("trhide").style.display = "none";

    }
    if (tab.rows[rc].cells[12].innerHTML == "Yes") {

        document.getElementById("chk2").checked = true;
        document.getElementById("trhide").style.display = "block";

    }




}
function funUpdat(rowId) {

    document.getElementById("errmsg").innerHTML = "";

    var errormsg = "";

    var tab = document.getElementById("table2");

    var rc = parseInt(rowId);

    var emp = document.getElementById("emp_name").value;
    var empno = document.getElementById("emp_id").value;
    var addr = document.getElementById("address_id").value;
    var dob = document.getElementById("dob_id").value;
    var desg = document.getElementById("desig_id").value;
    var loca = document.getElementById("wrklocaton").selectedIndex;
    var bassal = document.getElementById("basicsal_id").value;
    var grade = document.getElementById("grade_id").selectedIndex;
    var incent = document.getElementById("incentive_id").value;
    var dayshift = document.getElementById("chk1").checked;
    var ntshift = document.getElementById("chk2").checked;
    var ntallowtemp = document.getElementById("nightallw_id").value;
    var gend = "";

    var shiftday = "No";
    var shiftnight = "No";
    var ntallow = Math.round(parseFloat(ntallowtemp));
    var datecom = dob.split("-");


    if (emp == "") {
        errormsg += "Please Enter Employee Name <br/>"
    }
    if (empno == "") {
        errormsg += "Please Enter Employee Id <br/>"
    }
    if (addr == "") {
        errormsg += "Please Enter Employee Address<br/>"
    }

    if (dob != "") {
        today = new Date();
        dd = today.getDate();
        mm = today.getMonth() + 1; //January is 0!
        yyyy = today.getFullYear();
        var a = (yyyy - datecom[2]);

        if (a >= 18) {
            if (a == 18) {
                if (datecom[1] <= mm) {
                    if (mm == datecom[1]) {
                        if (datecom[0] <= dd) {
                        }
                        else {
                            errormsg += "Employee Date Of Birth should  be greater than or equal to 18 years<br/>"
                        }

                    }
                }
                else {
                    errormsg += "Employee Date Of Birth should  be greater than or equal to 18 years<br/>"

                }

            }
        }
        else {
            errormsg += "Employee Date Of Birth should  be greater than or equal to 18 years<br/>";

        }

    }
    else {
        errormsg += "Please Enter Employee Date Of Birth<br/>"
    }

    if (desg == "") {
        errormsg += "Please Enter Employee Designation<br/>"
    }
    if (loca == 0) {
        errormsg += "Please Enter Work Location<br/>"
    }
    if (bassal == "") {
        errormsg += "Please Enter Employee Basic Salary<br/>"
    }
    if (incent == "") {
        errormsg += "Please Enter Employee Incentives<br/>"
    }
    if (grade == 0) {
        errormsg += "Please Enter  Employee Grade<br/>"
    }
    if (document.getElementById("male_id").checked == false && document.getElementById("female_id").checked == false) {
        errormsg += "Please Enter  Employee Gender<br/>"
    }
    if (document.getElementById("male_id").checked == true) {
        gend = "Male";
    }
    if (document.getElementById("female_id").checked == true) {
        gend = "Female";
    }
    if (dayshift == false && ntshift == false) {
        errormsg += "Please Enter Shift<br/>"
    }
    if (ntshift == true) {
        if (ntallowtemp == "") {
            errormsg += "Please Enter Employee Night Allowences<br/>"
        }
    }


    if (ntshift == true) {

        shiftnight = "Yes";
    }
    if (dayshift == true) {
        shiftday = "Yes";

    }
    if (document.getElementById("chk2").checked == false) {
        ntallow = 0;
    }


    if (errormsg == "") {

        tab.rows[rc].cells[2].innerHTML = emp;
        tab.rows[rc].cells[3].innerHTML = empno;
        tab.rows[rc].cells[4].innerHTML = addr;
        tab.rows[rc].cells[5].innerHTML = gend;
        tab.rows[rc].cells[6].innerHTML = dob;
        tab.rows[rc].cells[7].innerHTML = desg;
        tab.rows[rc].cells[8].innerHTML = document.getElementById("wrklocaton").value;
        tab.rows[rc].cells[9].innerHTML = bassal;

        tab.rows[rc].cells[10].innerHTML = document.getElementById("grade_id").value;
        tab.rows[rc].cells[11].innerHTML = shiftday;
        tab.rows[rc].cells[12].innerHTML = shiftnight;

        tab.rows[rc].cells[13].innerHTML = ntallow;

        tab.rows[rc].cells[14].innerHTML = incent;
        tab.rows[rc].cells[15].innerHTML = document.getElementById("pf_lbl").innerHTML;
        tab.rows[rc].cells[16].innerHTML = document.getElementById("hra_lbl").innerHTML;
        tab.rows[rc].cells[17].innerHTML = document.getElementById("tax_lbl").innerHTML;
        tab.rows[rc].cells[18].innerHTML = document.getElementById("cca_lbl").innerHTML;
        tab.rows[rc].cells[19].innerHTML = document.getElementById("ded_lbl").innerHTML;

        tab.rows[rc].cells[20].innerHTML = document.getElementById("salery_lbl").innerHTML;
        document.getElementById("lblUpdate").style.display = "none";
        document.getElementById("btnAdd").style.display = "block";

        //document.getElementById("lblUpdate").innerHTML = "<input type='button'  class='Buttons' value='Add' id='Up_" + rc + " 'onclick='javascript:fnAddBtnValidation();'>";
        document.getElementById("lblchange1").innerHTML = "<input type='button'  class='Buttons' value='Clear'  id='uda-' onclick='javascript:return funclear();'>";
        document.getElementById("errmsg").innerHTML = "";
        document.getElementById("emp_name").value = "";
        document.getElementById("emp_id").value = "";
        document.getElementById("address_id").value = "";
        document.getElementById("dob_id").value = "";
        var desg = document.getElementById("desig_id").value = "";
        var loca = document.getElementById("wrklocaton").selectedIndex = 0;
        var bassal = document.getElementById("basicsal_id").value = "";
        var grade = document.getElementById("grade_id").selectedIndex = 0;
        var incent = document.getElementById("incentive_id").value = "";
        var dayshift = document.getElementById("chk1").checked = false;
        var ntshift = document.getElementById("chk2").checked = false;
        var ntallowtemp = document.getElementById("nightallw_id").value = "";
        document.getElementById("male_id").checked = true;

        document.getElementById("pf_lbl").innerHTML = "";
        document.getElementById("hra_lbl").innerHTML = "";
        document.getElementById("cca_lbl").innerHTML = "";
        document.getElementById("tax_lbl").innerHTML = "";
        document.getElementById("ded_lbl").innerHTML = "";
        document.getElementById("salery_lbl").innerHTML = "";
        document.getElementById("errmsg").innerHTML = "";
        document.getElementById("trhide").style.display = "none";
        document.getElementById("errmsg").innerHTML = "";

    }
    else {
        document.getElementById("errmsg").innerHTML = errormsg;

    }



}

function funclear() {
    var emp = document.getElementById("emp_name").value = "";
    var empno = document.getElementById("emp_id").value = "";
    var addr = document.getElementById("address_id").value = "";
    var dob = document.getElementById("dob_id").value = "";
    var desg = document.getElementById("desig_id").value = "";
    var loca = document.getElementById("wrklocaton").selectedIndex = 0;
    var bassal = document.getElementById("basicsal_id").value = "";
    var grade = document.getElementById("grade_id").selectedIndex = 0;
    var incent = document.getElementById("incentive_id").value = "";
    var dayshift = document.getElementById("chk1").checked = false;
    var ntshift = document.getElementById("chk2").checked = false;
    var ntallowtemp = document.getElementById("nightallw_id").value = "";
    document.getElementById("male_id").checked = true;
    document.getElementById("female_id").checked = false;

    document.getElementById("pf_lbl").innerHTML = "";
    document.getElementById("hra_lbl").innerHTML = "";
    document.getElementById("cca_lbl").innerHTML = "";
    document.getElementById("tax_lbl").innerHTML = "";
    document.getElementById("ded_lbl").innerHTML = "";
    document.getElementById("salery_lbl").innerHTML = "";
    document.getElementById("errmsg").innerHTML = "";
    document.getElementById("trhide").style.display = "none";
}
function clickreset(rowId) {


    var rc = parseInt(rowId);
    var errormsg = "";
    document.getElementById("errmsg").innerHTML = "";
    var tab = document.getElementById("table2");



    /* var loca = document.getElementById("wrklocaton").selectedIndex;
    var grade = document.getElementById("grade_id").selectedIndex;
            
    var dayshift = document.getElementById("chk1").checked;
    var ntshift = document.getElementById("chk2").checked;
    var ntallowtemp = ;
    var gend = "";
    var errormsg = "";
    var shiftday = "No";
    var shiftnight = "No";
    var ntallow = Math.round(parseFloat(ntallowtemp));*/


    document.getElementById("emp_name").value = tab.rows[rc].cells[2].innerHTML;
    document.getElementById("emp_id").value = tab.rows[rc].cells[3].innerHTML;
    document.getElementById("address_id").value = tab.rows[rc].cells[4].innerHTML;

    document.getElementById("dob_id").value = tab.rows[rc].cells[6].innerHTML;
    document.getElementById("desig_id").value = tab.rows[rc].cells[7].innerHTML;
    document.getElementById("basicsal_id").value = tab.rows[rc].cells[9].innerHTML;

    document.getElementById("grade_id").value = tab.rows[rc].cells[10].innerHTML;
    shiftday = tab.rows[rc].cells[11].innerHTML;
    shiftnight = tab.rows[rc].cells[12].innerHTML;

    document.getElementById("nightallw_id").value = tab.rows[rc].cells[13].innerHTML;

    document.getElementById("incentive_id").value = tab.rows[rc].cells[14].innerHTML;
    document.getElementById("pf_lbl").innerHTML = tab.rows[rc].cells[15].innerHTML;
    document.getElementById("hra_lbl").innerHTML = tab.rows[rc].cells[16].innerHTML;
    document.getElementById("tax_lbl").innerHTML = tab.rows[rc].cells[17].innerHTML;
    document.getElementById("cca_lbl").innerHTML = tab.rows[rc].cells[18].innerHTML;
    document.getElementById("ded_lbl").innerHTML = tab.rows[rc].cells[19].innerHTML;
    document.getElementById("wrklocaton").value = tab.rows[rc].cells[8].innerHTML;
    document.getElementById("grade_id").value = tab.rows[rc].cells[10].innerHTML;

    document.getElementById("salery_lbl").innerHTML = tab.rows[rc].cells[20].innerHTML;
    gend = tab.rows[rc].cells[5].innerHTML;
    if (tab.rows[rc].cells[5].innerHTML == "Female") {

        document.getElementById("female_id").checked = true

    }
    else {
        document.getElementById("male_id").checked = true;
    }



    if (tab.rows[rc].cells[11].innerHTML == "Yes") {

        document.getElementById("chk1").checked = true;
        document.getElementById("trhide").style.display = "none";

    }
    if (tab.rows[rc].cells[12].innerHTML == "Yes") {

        document.getElementById("chk2").checked = true;
        document.getElementById("trhide").style.display = "block";

    }
    if (tab.rows[rc].cells[12].innerHTML == "No") {

        document.getElementById("chk2").checked = false;
        document.getElementById("trhide").style.display = "none";

    }



    document.getElementById("errmsg").innerHTML = "";


}

function funalign() {
    var browserName = navigator.appName;
    if (browserName == "Netscape") {
        document.getElementById("NightAllowance").style.width = "254px"
    }
    else {
        document.getElementById("NightAllowancetxt").style.width = "359px"
    }
}

//NightAllowance
//style="width:390px"