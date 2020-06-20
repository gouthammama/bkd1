//--------------DATE-------------------
function gtime()
 {
     var today = new Date();                                                              //GETTING DATE FROM SYSTEM 
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();   
    document.getElementById("date").innerHTML = +dd + '-' + mm + '-' + yyyy;
}
//--------------DATE-------------------
//------------------SUBMIT FUNCTION----------------
function addinfo() {
    document.getElementById("tab_2").style.display = "block";
    var errorMsg = "";
    var date = document.getElementById("date").innerHTML;                                   //INITIALISING ERROR MESSAGE 
    var Fname = document.getElementById("txt1").value;                                      //ASSIGNING VALUES TO VARIABLES 

    if (Fname == "") {                                                                         
                                                                                                           
        errorMsg += "Please Enter First name<br />";                                                
    }                                                                                          
                                                                                                
    var Lname = document.getElementById("txt2").value;                                                          
                                                                                                        
    if (Lname == "") {

        errorMsg += "Please Enter Last name<br />";
    }
    var mal = document.getElementById("rd1");
    var fmal = document.getElementById("rd2");
    if ((mal.checked == false) && (fmal.checked == false)) {
        errorMsg += "Please Select Gender<br />";
    }
    var dob = document.getElementById("PickupDate").value;
    if (dob == "") {
        errorMsg += "Please Enter Date of Birth<br />";
    }
   
    if (dob != "") {
        //Required fields validation
        today = new Date();
        dd = today.getDate();
        mm = today.getMonth() + 1; //January is 0!
        yyyy = today.getFullYear();
        date_today = +yyyy + '-' + '0' + mm + '-' + dd;
        //alert(date_today);
        date_dob = dob;
        //alert(date_dob);
        x = date_today.split("-");
        //alert(x);
        y = date_dob.split("-");
        var a1 = x[0];                                       //reading current year
        var b1 = y[2];                                       //reading entered year in textbox


        if (b1 <= a1) {
            if (b1 == a1) {
                var c1 = x[1];
                var d1 = y[1];
                if (d1 <= c1) {
                    if (d1 == c1) {
                        var e1 = x[2];
                        var f1 = y[0];
                        if (f1 <= e1) {

                        }
                        else {

                            errorMsg += "Date of Birth should be less than Current Date<br/>";
                        }

                    }
                }
                else {
                    errorMsg += "Date of Birth should be less than Current Date<br/>";
                }

            }
            else {
                errorMsg += "Date of Birth should be less than Current Date<br/>";
            }
        }
    }

    var age = document.getElementById("txt3").value;
    if (age == "") {
        
    }
    else if (age >= 100) {
        errorMsg += " Enter Age between 0-100<br />";
    }
    var add = document.getElementById("txtarea").value;
    if (add == "") {
        
    }
    var phone = document.getElementById("txt4").value;
    if ((phone == "")||(parseFloat(phone)==0)) {
      
            errorMsg += "Please Enter Phonenumber<br />";
        }
   
    var Email = document.getElementById("txt5").value;
    var re = /^[a-zA-Z0-9_-]+@[a-zA-Z]+\.[a-zA-Z]{2,4}$/;
    if (Email != "") {
        if (re.test(Email)) {
           
        }
        else {
            errorMsg += "Please Enter valid email<br />";
        }
    }
    else {
        errorMsg += "Please Enter Email Address<br />";
    }
    var prt = document.getElementById("visitor").value;
    if (prt == "") {
        errorMsg += "Please Select a Problem<br />";
    }
    var pd = document.getElementById("Select1").value;
    if (pd == "") {
        errorMsg += "Please Select a Doctor<br />";
    }
    var des = document.getElementById("Textarea1").value;
    if (des == "") {
        errorMsg += "Please Enter Description<br />";
    }
    var rd1 = document.getElementById("Radio1");
    var rd2 = document.getElementById("Radio2");
    var rd3 = document.getElementById("Radio3");
    


    var ch1 = document.getElementById("chk1");
    var ch2 = document.getElementById("chk2");
    var ch3 = document.getElementById("chk3");
    if ((ch1.checked == false) && (ch2.checked == false) && (ch3.checked == false)) {
        errorMsg += "Please Select Contact Type<br />";
    }
    var ad = document.getElementById("datep2").value;
    if (ad == "") {
        errorMsg += "Please Enter Appointment Date<br />";
    }

    if (ad != "") {
        //Required fields validation
        today = new Date();
        dd = today.getDate();
        mm = today.getMonth() + 1; //January is 0!
        yyyy = today.getFullYear();
        date_today = +yyyy + '-' + '0' + mm + '-' + dd;
        //alert(date_today);
        date_dob = ad;
        //alert(date_dob);
        x = date_today.split("-");
        //alert(x);
        y = date_dob.split("-");
        var a1 = x[0];                                       //reading current year
        var b1 = y[2];                                       //reading entered year in textbox


        if (b1 >= a1) {
            if (b1 == a1) {
                var c1 = x[1];
                var d1 = y[1];
                if (d1 >= c1) {
                    if (d1 == c1) {
                        var e1 = x[2];
                        var f1 = y[0];
                        if (f1 >= e1) {

                        }
                        else {

                            errorMsg += "Appointment Date should be greater than Current Date<br/>";
                        }

                    }
                }
                else {
                    errorMsg += "Appointment Date should be greater than Current Date<br/>";
                }

            }
            else {
                errorMsg += "Appointment Date should be greater than Current Date<br/>";
            }

        }
    }
   
    if (errorMsg == "") {
        var roll = document.getElementById("rno").innerHTML;
        var date = document.getElementById("date").innerHTML;                           //ADDING INFORMATION TO GRID 
        var Fname = document.getElementById("txt1").value;
        var Lname = document.getElementById("txt2").value;
        var dob = document.getElementById("PickupDate").value;
        var age = document.getElementById("txt3").value;
        var add = document.getElementById("txtarea").value;
        var phone = document.getElementById("txt4").value;
        var Email = document.getElementById("txt5").value;
        var prt = document.getElementById("visitor").value;
        var pd = document.getElementById("Select1").value;
        var des = document.getElementById("Textarea1").value;
        var ad = document.getElementById("datep2").value;
        var mal = document.getElementById("rd1").checked;
        var fmal = document.getElementById("rd2").checked;
        var rd1 = document.getElementById("Radio1").checked;
        var rd2 = document.getElementById("Radio2").checked;
        var rd3 = document.getElementById("Radio3").checked;
        var ch1 = document.getElementById("chk1").checked;
        var ch2 = document.getElementById("chk2").checked;
        var ch3 = document.getElementById("chk3").checked;
        var table = document.getElementById("tab_2");
        var rowCount = table.rows.length;
        var row = table.insertRow(rowCount);
        var cell1 = row.insertCell(0);
        cell1.innerHTML = "<img src='images/Edit.gif' class='pointer' id='src_"+rowCount+"' onclick='javascript:return funedit(this)'>";
        var cell2 = row.insertCell(1);
        cell2.innerHTML = "<img src='images/Delete.gif' class='pointer' id='src_" + rowCount + "' onclick='javascript:return fundelete(this)'>";
        var cell3 = row.insertCell(2);
        cell3.innerHTML = roll;
        var cell4 = row.insertCell(3);
        cell4.align = "center";
        cell4.innerHTML = date;
        var cell5 = row.insertCell(4);
        cell5.innerHTML = Fname;
        var cell6 = row.insertCell(5);
        cell6.innerHTML = Lname;
        var cell7 = row.insertCell(6);
        if (mal == true) {
            cell7.innerHTML = document.getElementById("rd1").value;
        }
        else {
            cell7.innerHTML = document.getElementById("rd2").value;
        }
        var cell8 = row.insertCell(7);
        cell8.align = "center";
        cell8.innerHTML = dob;
        var cell9 = row.insertCell(8);
        cell9.align = "right";
        cell9.innerHTML = age;
        var cell10 = row.insertCell(9);
        cell10.innerHTML = add;
        var cell11 = row.insertCell(10);
        cell11.align = "right";
        cell11.innerHTML = phone;
        var cell12 = row.insertCell(11);
        cell12.innerHTML = Email;
        var cell13 = row.insertCell(12);
        cell13.innerHTML = prt;
        var cell14 = row.insertCell(13);
        cell14.innerHTML = pd;
        var cell15 = row.insertCell(14);
        cell15.innerHTML = des;
        var cell16 = row.insertCell(15);
        if (rd1 == true) {
            cell16.innerHTML = document.getElementById("Radio1").value;
        }
        else if (rd2 == true) {
            cell16.innerHTML = document.getElementById("Radio2").value;
        }

        else {
            cell16.innerHTML = document.getElementById("Radio3").value;
        }
        var cell17 = row.insertCell(16);
        if (ch1 == true) {
            cell17.innerHTML = document.getElementById("chk1").value;
        }
        if (ch2 == true) {
            cell17.innerHTML = cell17.innerHTML + " " + document.getElementById("chk2").value;
        }

        if (ch3 == true) {
            cell17.innerHTML =cell17.innerHTML+" "+ document.getElementById("chk3").value;
        }

        var cell18 = row.insertCell(17);
        cell18.align = "center";
        cell18.innerHTML = ad;

        document.getElementById("form1").reset();
        document.getElementById("lblErrorMsg").innerHTML = "";

        document.getElementById("rno").innerHTML = "VMH" + rowCount;

        document.getElementById("td1").innerHTML = "Available Records:" + (rowCount - 1);
        document.getElementById("tdbtn").innerHTML = "<input type='button' class='button' value='Submit' onclick='javascript:return addinfo()'>" + "<input type='button' class='button' value='clear' onclick='javascript:return funcancel()'>" + "<input type='button' class='button' value='cancel' onclick='javascript:return funcance()'>";
       
    }
    else {



        document.getElementById("lblErrorMsg").innerHTML = errorMsg;                //ASSIGNING ERROR MESSAGE TO  LABEL
    }

}
//------------------SUBMIT FUNCTION----------------

//------------------EDIT FUNCTION------------------
function funedit(rowId) {
    document.getElementById("tab_2").style.display = "block";
    var table = document.getElementById("tab_2");
    var rowCount = table.rows.length;
    var rc = rowId.parentNode.parentNode.rowIndex;

    var agree = confirm("Are you sure you wish to edit?");
    if (agree) {
        if (parseInt(document.getElementById("tab_2").rows.length) > 0) {


            document.getElementById("rno").innerHTML = table.rows[rc].cells[2].innerHTML;
            document.getElementById("date").innerHTML = table.rows[rc].cells[3].innerHTML;
            document.getElementById("txt1").value = table.rows[rc].cells[4].innerHTML;
            document.getElementById("txt2").value = table.rows[rc].cells[5].innerHTML;
            document.getElementById("PickupDate").value = table.rows[rc].cells[7].innerHTML;
            document.getElementById("txt3").value = table.rows[rc].cells[8].innerHTML;
            document.getElementById("txtarea").value = table.rows[rc].cells[9].innerHTML;
            document.getElementById("txt4").value = table.rows[rc].cells[10].innerHTML;
            document.getElementById("txt5").value = table.rows[rc].cells[11].innerHTML;
            document.getElementById("visitor").value = table.rows[rc].cells[12].innerHTML;
            document.getElementById("Select1").value = table.rows[rc].cells[13].innerHTML;
            document.getElementById("Textarea1").value = table.rows[rc].cells[14].innerHTML;
            document.getElementById("datep2").value = table.rows[rc].cells[17].innerHTML;
            var a = table.rows[rc].cells[6].innerHTML;
            if (a == "Male") {
                document.getElementById("rd1").checked = true;
            }
            else {
                document.getElementById("rd2").checked = true;
            }
            var b = table.rows[rc].cells[15].innerHTML;
            if (b == "Morning") {
                document.getElementById("Radio1").checked = true;
            }
            else if (b == "Afternoon") {
                document.getElementById("Radio2").checked = true;
            }
            else {
                document.getElementById("Radio2").checked = true;
            }
            var c = table.rows[rc].cells[16].innerHTML;
            if (c.match("Email")) {
                document.getElementById("chk1").checked = true;
            }
            if (c.match("Phone")) {
                document.getElementById("chk2").checked = true;
            }
            if (c.match("VideoChat")) {
                document.getElementById("chk3").checked = true;
            }
        }
        document.getElementById("tdbtn").innerHTML = "<input type='button' class='button' value='Update' onclick='javascript:return update(" + rc + ")'>" + "<input type='button' class='button' value='Reset' onclick='javascript:return funreset(" + rc + ")'>" + "<input type='button' class='button' value='cancel' onclick='javascript:return funcance()'>";
    }
    document.getElementById("lblErrorMsg").innerHTML = "";
}
//------------------EDIT FUNCTION------------------

//------------------DELETE FUNCTION----------------
function fundelete(rowId) {
    document.getElementById("tab_2").style.display = "block";
    var table = document.getElementById("tab_2");
    var rowCount = table.rows.length;
    var rowNumber = rowId.parentNode.parentNode.rowIndex;
    
    var agree = confirm("Are you sure you wish to delete?");
    if (agree) {
        if (parseInt(document.getElementById("tab_2").rows.length) > 0) {
            document.getElementById("tab_2").deleteRow(rowNumber);
        }
    }
    document.getElementById("form1").reset();
    document.getElementById("lblErrorMsg").innerHTML = "";
    document.getElementById("tdbtn").innerHTML = "<input type='button' class='button' value='Submit' onclick='javascript:return addinfo()'>" + "<input type='button' class='button' value='clear' onclick='javascript:return funcancel()'>" + "<input type='button' class='button' value='cancel' onclick='javascript:return funcance()'>";
    document.getElementById("td1").innerHTML = "Available Records:" + (rowCount - 3);
}
//------------------DELETE FUNCTION----------------

//------------------FUNCTION ACCEPTS NUMBERS ONLY----------
    function funisNumberKey(evt) {

        var num2 = (evt.which) ? evt.which : evt.keyCode;


        if ((num2 >= 48 && num2 <= 57) || (num2 == 9) || (num2 == 8)) {
            return true;
        }
        else {
            alert('Enter Numbers only!');
            return false;
        }
    }
//------------------FUNCTION ACCEPTS NUMBERS ONLY----------

    //---------------------RESET FUNCTION --------------------  
 function funreset(rowId) {
     document.getElementById("tab_2").style.display = "block";
     var table = document.getElementById("tab_2");

     var rc = parseInt(rowId);

     if (parseInt(document.getElementById("tab_2").rows.length) > 0) {


         document.getElementById("rno").innerHTML = table.rows[rc].cells[2].innerHTML;
         document.getElementById("date").innerHTML = table.rows[rc].cells[3].innerHTML;
         document.getElementById("txt1").value = table.rows[rc].cells[4].innerHTML;
         document.getElementById("txt2").value = table.rows[rc].cells[5].innerHTML;
         document.getElementById("PickupDate").value = table.rows[rc].cells[7].innerHTML;
         document.getElementById("txt3").value = table.rows[rc].cells[8].innerHTML;
         document.getElementById("txtarea").value = table.rows[rc].cells[9].innerHTML;
         document.getElementById("txt4").value = table.rows[rc].cells[10].innerHTML;
         document.getElementById("txt5").value = table.rows[rc].cells[11].innerHTML;
         document.getElementById("visitor").value = table.rows[rc].cells[12].innerHTML;
         document.getElementById("Select1").value = table.rows[rc].cells[13].innerHTML;
         document.getElementById("Textarea1").value = table.rows[rc].cells[14].innerHTML;
         document.getElementById("datep2").value = table.rows[rc].cells[17].innerHTML;
         var a = table.rows[rc].cells[6].innerHTML;
         if (a == "Male") {
             document.getElementById("rd1").checked = true;
         }
         else {
             document.getElementById("rd2").checked = true;
         }
         var b = table.rows[rc].cells[15].innerHTML;
         if (b == "Morning") {
             document.getElementById("Radio1").checked = true;
         }
         else if (b == "Afternoon") {
             document.getElementById("Radio2").checked = true;
         }
         else {
             document.getElementById("Radio2").checked = true;
         }
         var c = table.rows[rc].cells[16].innerHTML;
         if (c.match("Email")) {
             document.getElementById("chk1").checked = true;
         }
         else {
             document.getElementById("chk1").checked = false;
         }
         if (c.match("Phone")) {
             document.getElementById("chk2").checked = true;
         }
         else {
             document.getElementById("chk2").checked = false;
         }
         if (c.match("VideoChat")) {
             document.getElementById("chk3").checked = true;
         }
         else {
             document.getElementById("chk3").checked = false;
         }
     }
        document.getElementById("lblErrorMsg").innerHTML = "";
    }

    //---------------------RESET FUNCTION --------------------

    function funcance() {
        alert("Do you want to go to home page");
        document.getElementById("form1").reset();
        document.getElementById("lblErrorMsg").innerHTML = "";
        document.getElementById("tab_2").style.display = "none";

    }
    //----------------------FUNCTION ACCEPTS CHARACTERS ONLY---------
    function funisNumberKey2(evt) {
        var num2 = (evt.which) ? evt.which : evt.keyCode;


        if ((num2 >= 97 && num2 <= 122) || (num2 == 32) || (num2 >= 65 && num2 <= 90) || (num2 == 46) || (num2 == 9) || (num2 == 8)) {
            return true;
        }
        else {
            alert("Enter only alphabets");
            return false;
        }
    }
    //----------------------FUNCTION ACCEPTS CHARACTERS ONLY---------

    //---------------------CLEAR FUNCTION --------------------
    function funcancel() {
        document.getElementById("tab_2").style.display = "block";
        document.getElementById("form1").reset();
        document.getElementById("lblErrorMsg").innerHTML = "";
    }
    //---------------------CLEAR FUNCTION --------------------
    function update(rowId) {
        document.getElementById("tab_2").style.display = "block";
        var errorMsg = "";
        document.getElementById("lblErrorMsg").innerHTML = "";
        var table = document.getElementById("tab_2");
        var rc = parseInt(rowId);
        var roll = document.getElementById("rno").innerHTML;
        var date = document.getElementById("date").innerHTML;
        var Fname = document.getElementById("txt1").value;                      //ASSIGNING VALUES TO VARIABLES 
        if (Fname == "") {

            errorMsg += "Please Enter First name<br />";
        }

        var Lname = document.getElementById("txt2").value;

        if (Lname == "") {

            errorMsg += "Please Enter Last name<br />";
        }
        var mal = document.getElementById("rd1");
        var fmal = document.getElementById("rd2");
        if ((mal.checked == false) && (fmal.checked == false)) {
            errorMsg += "Please Select Gender<br />";
        }
        var dob = document.getElementById("PickupDate").value;
        if (dob == "") {
            errorMsg += "Please Enter Date of Birth<br />";
        }

        if (dob != "") {
            //Required fields validation
            today = new Date();
            dd = today.getDate();
            mm = today.getMonth() + 1; //January is 0!
            yyyy = today.getFullYear();
            date_today = +yyyy + '-' + '0' + mm + '-' + dd;
            //alert(date_today);
            date_dob = dob;
            //alert(date_dob);
            x = date_today.split("-");
            //alert(x);
            y = date_dob.split("-");
            var a1 = x[0];                                       //reading current year
            var b1 = y[2];                                       //reading entered year in textbox


            if (b1 <= a1) {
                if (b1 == a1) {
                    var c1 = x[1];
                    var d1 = y[1];
                    if (d1 <= c1) {
                        if (d1 == c1) {
                            var e1 = x[2];
                            var f1 = y[0];
                            if (f1 <= e1) {

                            }
                            else {

                                errorMsg += "Date of Birth should be less than Current Date<br/>";
                            }

                        }
                    }
                    else {
                        errorMsg += "Date of Birth should be less than Current Date<br/>";
                    }

                }
                else {
                    errorMsg += "Date of Birth should be less than Current Date<br/>";
                }
            }
        }
        var age = document.getElementById("txt3").value;
        if (age == "") {
           
        }
        else if (age >= 150) {
            errorMsg += " Enter Age between 0-100<br />";
        }
        var add = document.getElementById("txtarea").value;
        if (add == "") {
           
        }
        var phone = document.getElementById("txt4").value;
        var re = /^[0-9]{10}$/;
        if (phone != "") {
            if (re.test(phone)) {
                //return true;
            }
            else {
                errorMsg += "Enter Ten Digit Phonenumber<br />";
                //return false;
            }
        }
        else {
            errorMsg += "Please Enter Phonenumber<br />";
        }
        var Email = document.getElementById("txt5").value;
        var re = /^[a-zA-Z0-9_-]+@[a-zA-Z]+\.[a-zA-Z]{2,4}$/;
        if (Email != "") {
            if (re.test(Email)) {

            }
            else {
                errorMsg += "Please Enter valid email<br />";
            }
        }
        else {
            errorMsg += "Please Enter Email Address<br />";
        }
        var prt = document.getElementById("visitor").value;
        if (prt == "") {
            errorMsg += "Please Select a Problem<br />";
        }
        var pd = document.getElementById("Select1").value;
        if (pd == "") {
            errorMsg += "Please Select a Doctor<br />";
        }
        var des = document.getElementById("Textarea1").value;
        if (des == "") {
            errorMsg += "Please Enter Description<br />";
        }
        var rd1 = document.getElementById("Radio1");
        var rd2 = document.getElementById("Radio2");
        var rd3 = document.getElementById("Radio3");
      
        var ch1 = document.getElementById("chk1");
        var ch2 = document.getElementById("chk2");
        var ch3 = document.getElementById("chk3");
        if ((ch1.checked == false) && (ch2.checked == false) && (ch3.checked == false)) {
            errorMsg += "Please Select Contact Type<br />";
        }
        var ad = document.getElementById("datep2").value;
        if (ad == "") {
            errorMsg += "Please Enter Appointment Date<br />";
        }

        if (ad != "") {
            //Required fields validation
            today = new Date();
            dd = today.getDate();
            mm = today.getMonth() + 1; //January is 0!
            yyyy = today.getFullYear();
            date_today = +yyyy + '-' + '0' + mm + '-' + dd;
            //alert(date_today);
            date_dob = ad;
            //alert(date_dob);
            x = date_today.split("-");
            //alert(x);
            y = date_dob.split("-");
            var a1 = x[0];                                       //reading current year
            var b1 = y[2];                                       //reading entered year in textbox


            if (b1 >= a1) {
                if (b1 == a1) {
                    var c1 = x[1];
                    var d1 = y[1];
                    if (d1 >= c1) {
                        if (d1 == c1) {
                            var e1 = x[2];
                            var f1 = y[0];
                            if (f1 >= e1) {

                            }
                            else {

                                errorMsg += "Appointment Date should be greater than Current Date<br/>";
                            }

                        }
                    }
                    else {
                        errorMsg += "Appointment Date should be greater than Current Date<br/>";
                    }

                }
                else {
                    errorMsg += "Appointment Date should be greater than Current Date<br/>";
                }

            }
        }

        if (errorMsg == "") {

            table.rows[rc].cells[2].innerHTML = document.getElementById("rno").innerHTML;
            table.rows[rc].cells[3].innerHTML = document.getElementById("date").innerHTML;
            table.rows[rc].cells[4].innerHTML = document.getElementById("txt1").value;
            table.rows[rc].cells[5].innerHTML = document.getElementById("txt2").value;
            table.rows[rc].cells[7].innerHTML = document.getElementById("PickupDate").value;
            table.rows[rc].cells[8].innerHTML = document.getElementById("txt3").value;
            table.rows[rc].cells[9].innerHTML = document.getElementById("txtarea").value;
            table.rows[rc].cells[10].innerHTML = document.getElementById("txt4").value;
            table.rows[rc].cells[11].innerHTML = document.getElementById("txt5").value;
            table.rows[rc].cells[12].innerHTML = document.getElementById("visitor").value;
            table.rows[rc].cells[13].innerHTML = document.getElementById("Select1").value;
            table.rows[rc].cells[14].innerHTML = document.getElementById("Textarea1").value;
            table.rows[rc].cells[17].innerHTML = document.getElementById("datep2").value;
            if (mal.checked == true) {
                table.rows[rc].cells[6].innerHTML = document.getElementById("rd1").value;
            }
            else {
                table.rows[rc].cells[6].innerHTML = document.getElementById("rd2").value;
            }
            if (rd1.checked == true) {
                table.rows[rc].cells[15].innerHTML = document.getElementById("Radio1").value;
            }
            else if (rd2.checked == true) {
                table.rows[rc].cells[15].innerHTML = document.getElementById("Radio2").value;
            }

            else {
                table.rows[rc].cells[15].innerHTML = document.getElementById("Radio3").value;
            }
            table.rows[rc].cells[16].innerHTML = "";
            if (ch1.checked == true) {
                table.rows[rc].cells[16].innerHTML = document.getElementById("chk1").value;
            }
            if (ch2.checked == true) {
                table.rows[rc].cells[16].innerHTML = table.rows[rc].cells[16].innerHTML + " " + document.getElementById("chk2").value;
            }

            if (ch3.checked == true) {
                table.rows[rc].cells[16].innerHTML = table.rows[rc].cells[16].innerHTML + " " + document.getElementById("chk3").value;
            }
            document.getElementById("form1").reset();
            document.getElementById("tdbtn").innerHTML = "<input type='button' class='button' value='Submit' onclick='javascript:return addinfo()'>" + "<input type='button' class='button' value='clear' onclick='javascript:return funcancel()'>" + "<input type='button' class='button' value='cancel' onclick='javascript:return funcance()'>";
            var rowCount = table.rows.length;
            document.getElementById("rno").innerHTML = "VMH" + (rowCount-1);

        }
        else {



            document.getElementById("lblErrorMsg").innerHTML = errorMsg;
        }
    }