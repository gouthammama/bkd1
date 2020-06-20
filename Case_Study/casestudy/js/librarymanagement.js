function funSubmit() {
    var errormsg = "";
    if (document.getElementById("txt_name").value!= "")       //Required fields validation
    {
        var vfirstname = document.getElementById("txt_name").value;
        vfirstname = vfirstname.replace(/^\s+|\s+$/g, "");
        document.getElementById("txt_name").value = vfirstname;
        if (document.getElementById("txt_name").value == "") {
            errormsg += "Please enter Name<br />";
        }
        else {
        }
                                      
    }
    else {
        errormsg += "Please enter Name<br />";
        //alert("enter firstname");
    }

    if ((document.getElementById("r_male").checked) || (document.getElementById("r_female").checked)) {

    }
    else {
        errormsg += "Please select Gender<br />";
        //alert("select gender");
    }

    if (document.getElementById("txt_dob").value != "") {
        var date1 = document.getElementById("txt_dob").value;   //reading entered year in textbox         //Required fields validation
        var today = new Date();                                          //reading current year  
        var dd = today.getDate();
        var mm = today.getMonth() + 1;                          
        var yyyy = today.getFullYear();
        var date_today = +yyyy + '-' + '0' + mm + '-' + dd;
        var date_dob = date1;
        var x = date_today.split("-");
        var y = date_dob.split("-");
        var a = x[0];                                       
        var b = y[0];                                       
        var age = a - b;
        if (age >= 18) {
            if (age == 18) {
                var c = x[1];
                var d = y[1];
                if (c >= d) {
                    if (c == d) {
                        var e = x[2];
                        var f = y[2];
                        if (e >= f) {
                        }
                        else {
                            errormsg += "Please enter Date of Birth such that Age should be greater than 18<br/>";
                        }
                    }
                    else {
                        errormsg += "Please enter Date of Birth such that Age should be greater than 18<br/>";
                    }
                }
                else {

                }
            }

        }
        else {
            errormsg += "Please enter Date of Birth such that Age should be greater than 18<br />";
        }

    }
    else {
        errormsg += "Please select Date of Birth<br />";
    }
    if ((document.getElementById("r_student").checked) || (document.getElementById("r_asstfaculty").checked) || (document.getElementById("r_seniorfaculty").value)) {

    }
    else {
        errormsg += "Please select Designation<br />";
        //alert("select designation");
    }


    if (document.getElementById("txt_memberid").value != "") {
        var vmemberid = document.getElementById("txt_memberid").value;
        vmemberid = vmemberid.replace(/^\s+|\s+$/g, "");
        document.getElementById("txt_memberid").value = vmemberid;
        if (document.getElementById("txt_memberid").value == "") {
            errormsg += "Please enter memberid<br />";
        }
        else {
        }

        //Required fields validation

    }
    else {
        errormsg += "Please enter Member Id<br />";
        //alert("Enter Memberid");
    }

    if (document.getElementById("txt_module").value != "") {
        var pno = document.getElementById("txt_module").value;
        var regPno = /^([+]91[-][1-9]{1}[0-9]{9,9})$/;
        if (regPno.test(pno)) {
            //alert("correct");
        }
        else {
            var regPno1 = /^([+]91[-][0]{10})$/
           errormsg += "Please enter valid Mobile No <br />";
        }

    }
    else {
        errormsg += "Please enter Mobile No<br />";
        //alert("Enter module");
    }


    if (document.getElementById("txt_emailid").value != "") {                 //validating email using regular expression
        var email = document.getElementById("txt_emailid").value;
        var valid1 = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
        if (valid1.test(email)) {
            //alert("correct");

        }
        else {
            errormsg += "Please enter valid Emailid <br />";
        }
    }
    else {
        errormsg += "Please enter Email Id<br />";
        //alert("Enter emailid");
    }

    if (document.getElementById("txtarea_address").value != "") {           //Required fields validation

    }
    else {
        errormsg += "Please enter Address<br />";
        //alert("Enter address");
    }

    if (document.getElementById("txt_issuedate").value != "") {

    }
    else {
        errormsg += "Please enter Issue Date<br />";
        //alert("select issudate");

    }

    if (document.getElementById("txt_year").value != "") {
        var txt_value = document.getElementById("txt_year").value;         //Year has only three values
        if ((txt_value == 1) || (txt_value == 2) || (txt_value == 3) || (txt_value == 4)) {
        }
        else {
            errormsg += "Please enter valid Year<br />";
        }
    }
    else {
        errormsg += "Please enter Year <br />";
        //alert("Enter year");
    }


    if (document.getElementById("sel_branch").selectedIndex !== 0) {
       }
    else {
        errormsg += "Please select Branch <br />";
        errormsg+="Please select Books<br />"
        //alert("Select any one");
    }

    if (document.getElementById("sel_branch").selectedIndex == 1) {
        if ((document.getElementById("chk_1").checked) || (document.getElementById("chk_2").checked)) {
        }
        else {
            errormsg += "Please select Books <br />";
   
        }
    }
    if (document.getElementById("sel_branch").selectedIndex == 2) {
        if ((document.getElementById("chk_3").checked) || (document.getElementById("chk_4").checked)) {
        }
        else {
            errormsg += "Please select Books <br />";

        }
    }
    if (document.getElementById("sel_branch").selectedIndex == 3) {
        if ((document.getElementById("chk_5").checked) || (document.getElementById("chk_6").checked)) {
        }
        else {
            errormsg += "Please select Books <br />";

        }
    }
    if (errormsg == "") {           // to insert into the grid after all validations
        document.getElementById("lbl1").innerHTML = "";
        var tab = document.getElementById("tbl_grid");
        var rc = tab.rows.length;
        //alert(rc);
        var row = tab.insertRow(rc);
        var rowid = rc + 1;
        cell0 = row.insertCell(0);
        cell0.innerHTML = "<img src='images/Edit.gif' align='middle' id='e_" + rowid + "' onclick='javascript:return funInsert(this)'/>";
        cell0.align = "center";

        cell1 = row.insertCell(1);
        cell1.align = "center";
        cell1.innerHTML = "<img src='images/Delete.gif' align='middle' id='d_" + rowid + "'onclick='javascript:return funDelete(this)'/>";
        cell2 = row.insertCell(2);

        cell2.align = "left";
        cell2.innerHTML = document.getElementById("txt_name").value;
        cell3 = row.insertCell(3);
        cell3.align = "left";
        if (document.getElementById("r_male").checked) {
            cell3.innerHTML = document.getElementById("r_male").value;
        }
        else {
            cell3.innerHTML = document.getElementById("r_female").value;
        }


        cell4 = row.insertCell(4);
        cell2.align = "center";
        cell4.innerHTML = document.getElementById("txt_dob").value;

        cell5 = row.insertCell(5);
        cell2.align = "left";
        if (document.getElementById("r_student").checked) {

            cell5.innerHTML = document.getElementById("r_student").value;
        }
        else {

            if (document.getElementById("r_asstfaculty").checked) {
                cell5.innerHTML = document.getElementById("r_asstfaculty").value;
            }
            else {
                cell5.innerHTML = document.getElementById("r_seniorfaculty").value;
            }
        }
        cell6 = row.insertCell(6);
        cell6.align = "left";
        cell6.innerHTML = document.getElementById("txt_memberid").value;


        cell7 = row.insertCell(7);
        cell7.align = "center";                                                          //cell[1-13] of the grid
        cell7.innerHTML = document.getElementById("txt_module").value;

        cell8 = row.insertCell(8);
        cell8.align = "left";
        cell8.innerHTML = document.getElementById("txt_emailid").value;


        cell9 = row.insertCell(9);
        cell9.align = "left";
        cell9.innerHTML = document.getElementById("txtarea_address").value;

        cell10 = row.insertCell(10);
        cell10.align = "center";
        cell10.innerHTML = document.getElementById("txt_issuedate").value;

        cell11 = row.insertCell(11);
        cell11.align = "right";
        cell11.innerHTML = document.getElementById("txt_year").value;


        cell12 = row.insertCell(12);
        cell12.align = "left";
        if (document.getElementById("sel_branch").selectedIndex == 1) {
            cell12.innerHTML = document.getElementById("op2").value;
            document.getElementById("chk_3").checked = false;
            document.getElementById("chk_4").checked = false;
            document.getElementById("chk_5").checked = false;
            document.getElementById("chk_6").checked = false;

            
            
        }
        else {
            if (document.getElementById("sel_branch").selectedIndex == 2) {
                cell12.innerHTML = document.getElementById("op3").value;
                document.getElementById("chk_1").checked = false;
                document.getElementById("chk_2").checked = false;
                document.getElementById("chk_5").checked = false;
                document.getElementById("chk_6").checked = false;

                
            }
            else {
                cell12.innerHTML = document.getElementById("op4").value;
                document.getElementById("chk_1").checked = false;
                document.getElementById("chk_2").checked = false;
                document.getElementById("chk_3").checked = false;
                document.getElementById("chk_4").checked = false;

            }
        }

        cell13 = row.insertCell(13);
        cell13.align = "left";
        var subject = "";
        for (var i = 1; i < 7; i++) {
        if (document.getElementById("chk_" + i).checked)
            {
        if(subject=="")
            {
        subject=document.getElementById("chk_"+i).value+" ";
            }
        else
            {
            subject+=document.getElementById("chk_"+i).value+" ";
            }
          }
}
cell13.innerHTML = subject;
 for (var i = 1; i < 7; i++)                                                //to check checkboxes checked or not.
         {
             document.getElementById("chk_" + i).checked = false;
             var subject = "";
        
       }

        document.getElementById("txt_name").value = "";
        document.getElementById("r_male").checked = true;
        document.getElementById("txt_dob").value = "";
        document.getElementById("r_student").checked = true;
        document.getElementById("txt_memberid").value = "";
        document.getElementById("txt_module").value = "";
        document.getElementById("txt_emailid").value = "";
        document.getElementById("txtarea_address").value = "";
        document.getElementById("txt_issuedate").value = "";
        document.getElementById("txt_year").value = "";
        document.getElementById("sel_branch").selectedIndex = "0";
        document.getElementById("tbl_cse").style.display = "none";
        document.getElementById("tbl_mca").style.display = "none";
        document.getElementById("tbl_ece").style.display = "none";
        document.getElementById("txt_books").innerHTML = "";
        var rowCount1 = document.getElementById("count_rec").innerHTML;
        var a = parseInt(rowCount1) + 1;
        document.getElementById("count_rec").innerHTML = a;
        document.getElementById("lbl1").innerHTML = "";
        }
    else {
         document.getElementById("lbl1").innerHTML = errormsg;
    }


}

//***************************function to populate values from grid to input fields********************

function funInsert(eve) {
    var table1 = document.getElementById("tbl_grid");
    var rowNumber = eve.parentNode.parentNode.rowIndex;
    var val1 = document.getElementById("txt_memberid").value;
    var val2 = document.getElementById("txt_name").value;
    var a = (val1 !== "") && (val2 !== "");
    var b=table1.rows[rowNumber].cells[6].innerHTML;
    if (a)
     {
        alert("Please update the previous record");
    }
    else {
        document.getElementById("lbl1").innerHTML = "";
        var table1 = document.getElementById("tbl_grid");
        var rowCount = table1.rows.length;
        var rowid = eve.parentNode.parentNode.rowIndex;
        var tabrow = table1.rows[rowid];
        document.getElementById("txt_name").value = table1.rows[rowid].cells[2].innerHTML;
        if (tabrow.cells[3].innerHTML == "Male") {
            document.getElementById("r_male").checked = true;
        }
        else {
            document.getElementById("r_female").checked = true;
        }
        document.getElementById("txt_dob").value = tabrow.cells[4].innerHTML;
        if (tabrow.cells[5].innerHTML == "Student") {
            document.getElementById("r_student").checked = true;
        }
        else if (tabrow.cells[5].innerHTML == "AsstFaculty") {
            document.getElementById("r_asstfaculty").checked = true;
        }
        else {
            document.getElementById("r_seniorfaculty").checked = true;
        }
        document.getElementById("txt_memberid").value = tabrow.cells[6].innerHTML;
        document.getElementById("txt_module").value = tabrow.cells[7].innerHTML;
        document.getElementById("txt_emailid").value = tabrow.cells[8].innerHTML;
        document.getElementById("txtarea_address").value = tabrow.cells[9].innerHTML;
        document.getElementById("txt_issuedate").value = tabrow.cells[10].innerHTML;
        document.getElementById("txt_year").value = tabrow.cells[11].innerHTML;
        document.getElementById("sel_branch").value = tabrow.cells[12].innerHTML;
        var txt_val = tabrow.cells[13].innerHTML;
        var first = txt_val.split(" ");
        var second = first.length;
        if (document.getElementById("sel_branch").selectedIndex == "1") {
            document.getElementById("tbl_cse").style.display = "block";
            document.getElementById("tbl_mca").style.display = "none";
            document.getElementById("tbl_ece").style.display = "none";
            if ((first[0] == "OS") && (first[1] == "JAVA")) {
                document.getElementById("chk_1").checked = true;
                document.getElementById("chk_2").checked = true;
            }
            else {
                if (first[0] == "OS") {
                    document.getElementById("chk_1").checked = true;

                }
                if (first[0] == "JAVA") {
                    document.getElementById("chk_2").checked = true;
                }
            }
        }
        if (document.getElementById("sel_branch").selectedIndex == "2") {
            document.getElementById("tbl_cse").style.display = "none";
            document.getElementById("tbl_mca").style.display = "block";
            document.getElementById("tbl_ece").style.display = "none";
            
            if ((first[0] == "C++") && (first[1] == "OR")) {
                document.getElementById("chk_3").checked = true;
                document.getElementById("chk_4").checked = true;
            }
            else {
                if (first[0] == "C++") {
                    document.getElementById("chk_3").checked = true;

                }

                if (first[0] == "OR") {
                    document.getElementById("chk_4").checked = true;
                }
            }
        }
        if (document.getElementById("sel_branch").selectedIndex == "3") {
            document.getElementById("tbl_cse").style.display = "none";
            document.getElementById("tbl_mca").style.display = "none";
            document.getElementById("tbl_ece").style.display = "block";                  //based on branch corresponding subjects will be displayed
            if ((first[0] == "OS") && (first[1] == "C")) {
                document.getElementById("chk_5").checked = true;
                document.getElementById("chk_6").checked = true;
            }
            else {
                if (first[0] == "OS") {
                    document.getElementById("chk_5").checked = true;

                }

                if (first[0] == "C") {
                    document.getElementById("chk_6").checked = true;
                }
            }
        }
        
        document.getElementById("td_submit").innerHTML = "<input type='button' id='btn_update' class='buttonstyle' value='Update' onclick='javascript:return funUpdate(" + rowid + ")'/>";
        document.getElementById("td_clear").innerHTML = "<input type='button' id='btn_reset' class='buttonstyle' value='Reset' onclick='javascript:funReset(" + rowid + ")'/>";
    }
    }


//***********************Function for Reset**************************


    function funReset(eve) {
    document.getElementById("lbl1").innerHTML = "";
    var table1 = document.getElementById("tbl_grid");
    var rowCount = table1.rows.length;
    var rowid = parseInt(eve);
    var tabrow = table1.rows[rowid];
     document.getElementById("txt_name").value = table1.rows[rowid].cells[2].innerHTML;
    if (tabrow.cells[3].innerHTML == "Male") {
        document.getElementById("r_male").checked = true;
    }
    else {
        document.getElementById("r_female").checked = true;
    }
    document.getElementById("txt_dob").value = tabrow.cells[4].innerHTML;
    if (tabrow.cells[5].innerHTML == "Student") {
        document.getElementById("r_student").checked = true;
    }
    else if (tabrow.cells[5].innerHTML == "AsstFaculty") {
        document.getElementById("r_asstfaculty").checked = true;
    }
    else {
        document.getElementById("r_seniorfaculty").checked = true;
    }
    document.getElementById("txt_memberid").value = tabrow.cells[6].innerHTML;
    document.getElementById("txt_module").value = tabrow.cells[7].innerHTML;
    document.getElementById("txt_emailid").value = tabrow.cells[8].innerHTML;
    document.getElementById("txtarea_address").value = tabrow.cells[9].innerHTML;
    document.getElementById("txt_issuedate").value = tabrow.cells[10].innerHTML;
    document.getElementById("txt_year").value = tabrow.cells[11].innerHTML;
    document.getElementById("sel_branch").value = tabrow.cells[12].innerHTML;
    var txt_val = tabrow.cells[13].innerHTML;
    var first = txt_val.split(" ");
    var second = first.length;
    document.getElementById("tbl_cse").style.display = "none";
    document.getElementById("tbl_mca").style.display = "none";
    document.getElementById("tbl_ece").style.display = "none";
    for (var i = 1; i < 7; i++)                                                //to uncheck all checkboxes.
    {
        document.getElementById("chk_" + i).checked = false;
        var subject = "";

    }
    if (document.getElementById("sel_branch").selectedIndex == "1") {
        document.getElementById("tbl_cse").style.display = "block";
        document.getElementById("tbl_mca").style.display = "none";
        document.getElementById("tbl_ece").style.display = "none";
        if ((first[0] == "OS") && (first[1] == "JAVA")) {
            document.getElementById("chk_1").checked = true;
            document.getElementById("chk_2").checked = true;
        }
        else {
            if (first[0] == "OS") {
                document.getElementById("chk_1").checked = true;

            }
            if (first[0] == "JAVA") {
                document.getElementById("chk_2").checked = true;
            }
        }
    }
   
    if (document.getElementById("sel_branch").selectedIndex == "2") {
        document.getElementById("tbl_cse").style.display = "none";
        document.getElementById("tbl_mca").style.display = "block";
        document.getElementById("tbl_ece").style.display = "none";
        

        if ((first[0] == "C++") && (first[1] == "OR")) {
            document.getElementById("chk_3").checked = true;
            document.getElementById("chk_4").checked = true;
        }
        else {
            if (first[0] == "C++") {
                document.getElementById("chk_3").checked = true;

            }

            if (first[0] == "OR") {
                document.getElementById("chk_4").checked = true;
            }
        }
    }
   
    if (document.getElementById("sel_branch").selectedIndex == "3") {
                                                                        //based on branch corresponding subjects should be displayed
        document.getElementById("tbl_cse").style.display = "none";
        document.getElementById("tbl_mca").style.display = "none";
        document.getElementById("tbl_ece").style.display = "block";
        
        if ((first[0] == "OS") && (first[1] == "C")) {
            document.getElementById("chk_5").checked = true;
            document.getElementById("chk_6").checked = true;
        }
        else {
            if (first[0] == "OS") {
                document.getElementById("chk_5").checked = true;

            }

            if (first[0] == "C") {
                document.getElementById("chk_6").checked = true;
            }
        }
    }
       

    
}



//***********************Function for Update**************************

function funUpdate(eve) {
    document.getElementById("lbl1").innerHTML = "";
    var errormsg = "";
    if (document.getElementById("txt_name").value != "") {
        var vfirstname = document.getElementById("txt_name").value;
        vfirstname = vfirstname.replace(/^\s+|\s+$/g, "");
        document.getElementById("txt_name").value = vfirstname;
        if (document.getElementById("txt_name").value == "") {
            errormsg += "Please enter Name<br />";
        }
        else {
        }

        //Required fields validation
                                
    }
    else {
        errormsg += "Please enter Name<br />";
        //alert("enter firstname");
    }

    if ((document.getElementById("r_male").checked) || (document.getElementById("r_female").checked)) {

    }
    else {
        errormsg += "Please select Gender<br />";
        //alert("select gender");
    }

    if (document.getElementById("txt_dob").value != "") {
        var date1 = document.getElementById("txt_dob").value;            //Required fields validation
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1; 
        var yyyy = today.getFullYear();
        var date_today = +yyyy + '-' + '0' + mm + '-' + dd;
        var date_dob = date1;
        var x = date_today.split("-");
        var y = date_dob.split("-");
        var a = x[0];                                       //reading current year
        var b = y[0];                                       //reading entered year in textbox
        var age = a - b;
        if (age >= 18) {
            if (age == 18) {
                var c = x[1];
                var d = y[1];
                if (c >= d) {
                    if (c == d) {
                        var e = x[2];
                        var f = y[2];
                        if (e >= f) {
                        }
                        else {
                            errormsg += "Please enter Date of Birth such that Age should be greater than 18<br/>";
                        }
                    }
                    else {
                        errormsg += "Please enter Date of Birth such that Age should be greater than 18<br/>";
                    }
                }
                else {

                }
            }

        }
        else {
            errormsg += "Please enter Date of Birth such that Age should be greater than 18<br />";
        }

    }
    else {
        errormsg += "Please select Date of Birth<br />";
    }

    if (document.getElementById("txt_memberid").value != "") {
        var vmemberid = document.getElementById("txt_memberid").value;
        vmemberid = vmemberid.replace(/^\s+|\s+$/g, "");
        document.getElementById("txt_memberid").value = vmemberid;
        if (document.getElementById("txt_memberid").value == "") {
            errormsg += "Please enter memberid<br />";
        }
        else {
        }
                                                                     //Required fields validation

    }
    else {
        errormsg += "Please enter Member Id<br />";
        //alert("Enter Memberid");
    }

    if (document.getElementById("txt_module").value != "") {
        var pno = document.getElementById("txt_module").value;
        var regPno = /^([+]91[-][1-9]{1}[0-9]{9,9})$/;
        if (regPno.test(pno)) {
            //alert("correct");
        }
        else {
         errormsg += "Please enter valid Mobile No <br />";
        }

    }
    else {
        errormsg += "Please enter Mobile No<br />";
        //alert("Enter module");
    }
    
    if (document.getElementById("txt_emailid").value != "") {                 //validating email using regular expression
        var email = document.getElementById("txt_emailid").value;
        var valid1 = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
        if (valid1.test(email)) {
            //alert("correct");

        }
        else {
            errormsg += "Please enter valid Email Id <br />";
        }
    }
    else {
        errormsg += "Please enter Email Id<br />";
        //alert("Enter emailid");
    }

    if (document.getElementById("txtarea_address").value != "") {           //Required fields validation

    }
    else {
        errormsg += "Please enter Address<br />";
        //alert("Enter address");
    }

    if (document.getElementById("txt_issuedate").value != "") {

    }
    else {
        errormsg += "Please enter Issue Date<br />";
        //alert("select issudate");

    }

    if (document.getElementById("txt_year").value != "") {
        var txt_value = document.getElementById("txt_year").value;         //Year has only three values
        if ((txt_value == 1) || (txt_value == 2) || (txt_value == 3) || (txt_value == 4)) {
        }
        else {
            errormsg += "Please enter valid Year<br />";
        }
    }
    else {
        errormsg += "Please enter Year <br />";
        //alert("Enter year");
    }


    if (document.getElementById("sel_branch").selectedIndex !== 0) {
    }
    else {
        errormsg += "Please select Branch <br />";
        errormsg += "Please select Books<br />"
        //alert("Select any one");
    }

    if (document.getElementById("sel_branch").selectedIndex == 1) {
        if ((document.getElementById("chk_1").checked) || (document.getElementById("chk_2").checked)) {
        }
        else {
            errormsg += "Please select Books <br />";

        }
    }
    if (document.getElementById("sel_branch").selectedIndex == 2) {
        if ((document.getElementById("chk_3").checked) || (document.getElementById("chk_4").checked)) {
        }
        else {
            errormsg += "Please select Books <br />";

        }
    }
    if (document.getElementById("sel_branch").selectedIndex == 3) {
        if ((document.getElementById("chk_5").checked) || (document.getElementById("chk_6").checked)) {
        }
        else {
            errormsg += "Please select Books <br />";

        }
    }
    if (errormsg == "") {           // to insert into the grid after all validations
        var subject = "";
        var table = document.getElementById("tbl_grid");
        var rowid = parseInt(eve);
        table.rows[rowid].cells[0].innerHTML = "<img src='images/Edit.gif' align='middle' id='e_" + rowid + "' onclick='javascript:funInsert(this)'/>";
        table.rows[rowid].cells[1].innerHTML = "<img src='images/Delete.gif' align='middle' id='d_" + rowid + "'onclick='javascript:funDelete(this)'/>";
        table.rows[rowid].cells[2].innerHTML = document.getElementById("txt_name").value;
        if (document.getElementById("r_male").checked) {
            table.rows[rowid].cells[3].innerHTML = document.getElementById("r_male").value;
        }
        else {
            table.rows[rowid].cells[3].innerHTML = document.getElementById("r_female").value;
        }


        table.rows[rowid].cells[4].innerHTML = document.getElementById("txt_dob").value;

        if (document.getElementById("r_student").checked) {

            table.rows[rowid].cells[5].innerHTML = document.getElementById("r_student").value;
        }
        else {

            if (document.getElementById("r_asstfaculty").checked) {
                table.rows[rowid].cells[5].innerHTML = document.getElementById("r_asstfaculty").value;
            }
            else {
                table.rows[rowid].cells[5].innerHTML = document.getElementById("r_seniorfaculty").value;
            }
        }
        table.rows[rowid].cells[6].innerHTML = document.getElementById("txt_memberid").value;


        table.rows[rowid].cells[7].innerHTML = document.getElementById("txt_module").value;

        table.rows[rowid].cells[8].innerHTML = document.getElementById("txt_emailid").value;


        table.rows[rowid].cells[9].innerHTML = document.getElementById("txtarea_address").value;

        table.rows[rowid].cells[10].innerHTML = document.getElementById("txt_issuedate").value;

        table.rows[rowid].cells[11].innerHTML = document.getElementById("txt_year").value;


        if (document.getElementById("sel_branch").selectedIndex == 1) {
            table.rows[rowid].cells[12].innerHTML = document.getElementById("op2").value;
            document.getElementById("chk_3").checked = false;
            document.getElementById("chk_4").checked = false;
            document.getElementById("chk_5").checked = false;
            document.getElementById("chk_6").checked = false;

        }
        else {
            if (document.getElementById("sel_branch").selectedIndex == 2) {
                table.rows[rowid].cells[12].innerHTML = document.getElementById("op3").value;
                document.getElementById("chk_1").checked = false;
                document.getElementById("chk_2").checked = false;
                document.getElementById("chk_5").checked = false;
                document.getElementById("chk_6").checked = false;


            }
            else {
                table.rows[rowid].cells[12].innerHTML = document.getElementById("op4").value;
                document.getElementById("chk_1").checked = false;
                document.getElementById("chk_2").checked = false;
                document.getElementById("chk_3").checked = false;
                document.getElementById("chk_4").checked = false;


            }
        }

        var subject = "";
        for (var i = 1; i < 7; i++) {
            if (document.getElementById("chk_" + i).checked) {
                if (subject == "") {
                    subject = document.getElementById("chk_" + i).value + " ";
                }
                else {
                    subject += document.getElementById("chk_" + i).value + " ";
                }
            }
        }
        table.rows[rowid].cells[13].innerHTML = subject;
        for (var i = 1; i < 7; i++)                                                //to check checkboxes checked or not.
        {
            document.getElementById("chk_" + i).checked = false;
            var subject = "";

        }


        document.getElementById("txt_name").value = "";
        document.getElementById("r_male").checked = true;
        document.getElementById("txt_dob").value = "";
        document.getElementById("r_student").checked = true;
        document.getElementById("txt_memberid").value = "";
        document.getElementById("txt_module").value = "";
        document.getElementById("txt_emailid").value = "";
        document.getElementById("txtarea_address").value = "";
        document.getElementById("txt_issuedate").value = "";
        document.getElementById("txt_year").value = "";
        document.getElementById("sel_branch").selectedIndex = "0";
        document.getElementById("tbl_cse").style.display = "none";
        document.getElementById("tbl_mca").style.display = "none";
        document.getElementById("tbl_ece").style.display = "none";
        document.getElementById("txt_books").innerHTML = "";
     
        document.getElementById("td_submit").innerHTML = "<input type='button' class='buttonstyle' id='btn_submit' value='Submit' onclick='javascript:return funSubmit()'/>";
        document.getElementById("td_clear").innerHTML = "<input type='button'  class='buttonstyle' id='btn_clear' value='Clear' onclick='javascript:return funClear()'/>";
        
    }
    else
        document.getElementById("lbl1").innerHTML = errormsg;

  }

 

//***********************************Function for Clear*************************
  function funClear() {
       //To clear all fields
    document.getElementById("txt_name").value = "";
    document.getElementById("r_male").checked = true;
    document.getElementById("txt_dob").value = "";
    document.getElementById("r_student").checked = true;
    document.getElementById("txt_memberid").value = "";
    document.getElementById("txt_module").value = "";
    document.getElementById("txt_emailid").value = "";
    document.getElementById("txtarea_address").value = "";
    document.getElementById("txt_issuedate").value = "";
    document.getElementById("txt_year").value = "";
    document.getElementById("sel_branch").selectedIndex = "0";
    document.getElementById("tbl_cse").style.display = "none";
    document.getElementById("tbl_mca").style.display = "none";
    document.getElementById("tbl_ece").style.display = "none";
    document.getElementById("txt_books").innerHTML = "";
    for (var i = 1; i < 7; i++) {
        document.getElementById("chk_" + i).checked = false;
        var subject = "";

    }
    document.getElementById("lbl1").innerHTML = "";

}



function funDelete(eve) {
    var a = document.getElementById("txt_memberid").value;
    if (a == "")                                                  //Code for deleting a row in grid
     {
        var table = document.getElementById("tbl_grid")
        var rowCount = table.rows.length;
        var avaliable_record = document.getElementById("count_rec").innerHTML;
        var rowNumber = eve.parentNode.parentNode.rowIndex;
        var agree = confirm("Are you sure you wish to delete?");
        if (agree)
         {

            if (parseInt(document.getElementById("tbl_grid").rows.length) > 0) 
            {
                document.getElementById("tbl_grid").deleteRow(rowNumber);
                document.getElementById("count_rec").innerHTML = parseInt(avaliable_record) - 1;
            }
    
         }

     }   
   else
         {
             alert("please update the record first");
          }

    }



function num_validation(evt) {                          // Textbox only allows  numerics
    var code = (evt.which) ? evt.which : evt.keyCode;
    if (((code < 58) && (code > 47)) || (code == 8) || (code == 9) || (code == 32)) {
        return true;
    }
    else {
        return false;
    }

}

function num_mobile(evt) {                          // Textbox only allows  numerics
    var code = (evt.which) ? evt.which : evt.keyCode;
    if (((code < 58) && (code > 47)) || (code == 8) || (code == 9) || (code == 32) || (code == 43) || (code == 45)) {
        return true;
    }
    else {
        return false;
    }
    

}



function alphanumeric_validation(evt) {                 //to allow alphanumeric vales
    var code = (evt.which) ? evt.which : evt.keyCode;
    if (((code < 57) && (code > 47)) || ((code < 123) && (code > 96)) || ((code < 91) && (code > 64)) || (code == 46) || (code == 8) || (code == 9)||(code==32)) {
        return true;
    }

    else {
        return false;
    }

}

function funStartTime() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();
    document.getElementById("txt_issuedate").value = +yyyy + '-' + '0' + mm + '-' + dd;
    
}

function show_table() {                                 //to show books on selection of branch
    var branch_value=document.getElementById("sel_branch").selectedIndex;
    if (branch_value == 0) {
        document.getElementById("tbl_cse").style.display = "none";
        document.getElementById("tbl_mca").style.display = "none";
        document.getElementById("tbl_ece").style.display = "none";
    }
    if (branch_value == 1) 
    {
        document.getElementById("tbl_cse").style.display = "block";
        document.getElementById("tbl_mca").style.display = "none";
        document.getElementById("tbl_ece").style.display = "none";
    
    }
    if (branch_value == 2) {
        document.getElementById("tbl_cse").style.display = "none";
        document.getElementById("tbl_mca").style.display = "block";
        document.getElementById("tbl_ece").style.display = "none";

    }
    if (branch_value == 3) {
        document.getElementById("tbl_cse").style.display = "none";
        document.getElementById("tbl_mca").style.display = "none";
        document.getElementById("tbl_ece").style.display = "block";

    }  
}

