function valid1() 
{


    document.getElementById("lbl_errmsg").innerHTML = "";
    document.getElementById("acc_hide").style.display = "none"

    document.getElementById("select_accountwith").style.display = "none"
    document.getElementById("textarea_id").style.display = "none";
    document.getElementById("textarea_address").style.display = "none";
   // document.getElementById("button_reset").style.display = "none";
    //document.getElementById("button_clear").style.display = "block";



var errmsg = "";
                                                                                    //date field validation
var value_date = document.getElementById("date-pick").innerHTML;
if (value_date == "") 
{

    errmsg += "please select date<br />";

}
                                                                                     //first name field validation
    var value_first = document.getElementById("text_firstname").value;
    if (value_first == "") 
    {
        errmsg += "Please Enter Your FirstName <br />";
    }

                                                                                     //last name field name validation 
    var value_last = document.getElementById("text_lastname").value;
    if (value_last == "") 
    {
        errmsg += "Please Enter Your LastName <br />";

    }
                                                                                    //account number field validation 
    var value_accountnumber = document.getElementById("text_accountnumber").value;
    if (value_accountnumber == "") 
    {

        errmsg += "Please Enter Your Account Number <br />";

    }
    
    else 
    {

        var value_accountnumber_len = value_accountnumber.length;
        if (value_accountnumber_len < 11) 
        {

            errmsg += "Invalid Account Number <br />";
        }
        if (value_accountnumber == "00000000000") {

            errmsg += "Invalid Account Number<br />";

        }
    }
                                                                                    //password field validation 
    var value_password = document.getElementById("text_password").value;
    if (value_password == "") 
    {

        errmsg += "Please Enter Your Password <br />";
    }

    else
     {
        var value_password_len = value_password.length;
        if (value_password_len < 8) {
            errmsg += "Password should contain minium 8 characters<br />";

        }
    }

                                                                                                //contact number validation 

    var value_contact = document.getElementById("text_contactnumber").value;
    if (value_contact == "") {

        errmsg += "Please Enter Your Contact Number <br />";
    }
    else
     {
        var value_contact_len = value_contact.length;
        if (value_contact_len < 10) {

            errmsg += "Invalid Phone Number<br />";

        }
        if (value_contact == "0000000000") 
        {

            errmsg += "Invalid Phone  Number<br />";

        }
    }
                                                                                                //email id field validation

    var value_email = document.getElementById("text_email").value;
    if (value_email == "") 
    {

        errmsg += "Please Enter Your Email id <br />";

    }
    else {
        var valid1 = /^[A-Za-z0-9\._-]+@[A-Za-z]+.\w{1,8}$/;
        if (valid1.test(value_email)) {
            
        }
       
        else {

            errmsg += "Invalid Email id <br />";
        }
    }

                                                                                        //type of account validation 
    var value_typeofaccount = document.getElementById("radio_savings").value; 

    var value_typeofaccount1 = document.getElementById("radio_current").value;

    if (document.getElementById("radio_savings").checked == true)
     {


        var i = value_typeofaccount; 
    }


    else {

        i = value_typeofaccount1;
    }

    

                                                                                         //account with validation

    
    
    if (document.getElementById("radio_nonsbi").checked == true)
     {
        var value_select = document.getElementById("select_accountwith").selectedIndex;
        if (value_select == 0) {

            errmsg += "Please Select Your Account With Value<br />";

        }

    }

                                                                                             //to account number valdation 
    var value_accountnumbertwo = document.getElementById("text_accountnumbertwo").value;
    if (value_accountnumbertwo == "") {
        errmsg += "Please Enter Your Account Number<br />";

    }
    else {
        var value_accountnumbertwo_len = value_accountnumbertwo.length;
        if (value_accountnumbertwo_len < 11) {

            errmsg += "Invalid Account Number<br /> ";
        }
        if (value_accountnumbertwo == "00000000000") {

            errmsg += "Invalid Account Number<br />";

        }
  
    }

                                                                                            //transfr amount should be greater than available amount
    var value_accountnumber = document.getElementById("text_accountnumber").value;
   
    var value_accountnumbertwo = document.getElementById("text_accountnumbertwo").value;

    if (parseInt(value_accountnumber) == parseInt(value_accountnumbertwo))                  //From account number and To account number validation 
    {

        errmsg += "Transactions Cannot be Done with in the Same Account<br />";
    }

    //var value_select1 = document.getElementById("select_accountwith").value;

    if (document.getElementById("select_accountwith").selectedIndex == 1) {
        var value_select1 = "HDFC";
    }
    if (document.getElementById("select_accountwith").selectedIndex == 2) {
        value_select1 = "ICICI";
    }
    if (document.getElementById("radio_sbi").checked == true) {

        value_select1 = "SBI";
    }
    
    
                                                                                     //amount to trasfer validation 
var value_transfer = document.getElementById("text_amounttrasfer").value;
var value_available = document.getElementById("text_balance").value;


if (value_transfer == "") {

    errmsg += "Please Enter Amount To  Trasfere Value <br />";

}


else if (parseInt(value_transfer) < parseInt(value_available))
 {
   
    if (value_transfer < 500) {


        errmsg += "Amount Transfer Should Not Below 500";
    }
    else {
       
    }
}
else {
    errmsg += "Not Having Sufficient Balance In Your Account";
}     
   


                                                                                //Text area validation

if (document.getElementById("check_request").checked == true) {
    var value_textarea = document.getElementById("textarea_address").value;
    if (value_textarea == "") {

        errmsg += "Please Enter Your Address";
    }

}
else {
    value_textarea = "-";
}
                                                                                //Change for address
var check_value = document.getElementById("check_request");
if (check_value.checked == true) {

    var check_truevalue = "true";
}
if (check_value.checked == false)
 {
     check_truevalue = "false";

}

//else 
//{

  //  errmsg += "please select if your Address is changed";
//}
if (document.getElementById("radio_nonsbi").checked == true) {
    document.getElementById("acc_hide").style.display = "block";

    document.getElementById("select_accountwith").style.display = "block";
    document.getElementById("select_accountwith").selectedIndex = 0;

}
/*if (document.getElementById("radio_sbi").checked == true) {

    document.getElementById("select_accountwith").selectedIndex = 0;

}*/
if (document.getElementById("check_request").checked == true) {

    document.getElementById("textarea_id").style.display = "block";
    document.getElementById("textarea_address").style.display = "block";

}

if (errmsg == "") 
{

    document.getElementById("textarea_id").style.display = "none";
    document.getElementById("textarea_address").style.display = "none";

   
    var table2 = document.getElementById("table_2");
    var rowcount = table2.rows.length;
    var row = table2.insertRow(rowcount);

    var cell1 = row.insertCell(0);
    cell1.align = "center";
    cell1.innerHTML = "<img src='Images/Edit.gif' id='edit_"+rowcount+"' class='change' onclick='javascript:return Edit(this)'/>";


    var cell2 = row.insertCell(1);
    cell2.align = "center";
    cell2.innerHTML = "<img src='Images/Delete.gif' id='delete_"+rowcount+"' class='change' onclick='javascript:return Delete(this)'/>";


    var cell3 = row.insertCell(2);
    cell3.align = "center";
    cell3.innerHTML = value_date;

    var cell4 = row.insertCell(3);
    cell4.align = "left";
    cell4.innerHTML = value_first;

    var cell5 = row.insertCell(4);
    cell5.align = "left";
    cell5.innerHTML = value_last;

    var cell6 = row.insertCell(5);
    cell6.align = "right";
    cell6.innerHTML = value_accountnumber;


    var cell7 = row.insertCell(6);
    cell7.align = "right";
    cell7.innerHTML = value_contact;

    var cell8 = row.insertCell(7);
    cell8.align = "left";
    cell8.innerHTML = value_email;

    var cell9 = row.insertCell(8);
    cell9.align = "left";
    cell9.innerHTML = i;


    var cell10 = row.insertCell(9);
    cell10.align = "right";
    cell10.innerHTML = value_available;

    var cell11 = row.insertCell(10);
    cell11.align = "left";
    cell11.innerHTML = value_select1;

    var cell12 = row.insertCell(11);
    cell12.align = "right";
    cell12.innerHTML = value_accountnumbertwo;

    var cell13 = row.insertCell(12);
    cell13.align = "right";
    cell13.innerHTML = value_transfer;

    var cell14 = row.insertCell(13);
    cell14.align = "left";
    cell14.innerHTML = check_truevalue;

    var cell15 = row.insertCell(14);
    cell15.align = "center";
    cell15.innerHTML = value_textarea;

    var cell16 = row.insertCell(15);
    cell16.align = "left";
    cell16.innerHTML = value_password;


     document.getElementById("text_firstname").value = "";
    document.getElementById("text_lastname").value = "";
    document.getElementById("text_accountnumber").value = "";
    document.getElementById("text_password").value = "";
    document.getElementById("text_contactnumber").value = "";
    document.getElementById("text_email").value = "";
    document.getElementById("radio_savings").checked = true;
    document.getElementById("text_balance").value = "";
    document.getElementById("radio_sbi").checked = true;
    document.getElementById("select_accountwith").selectedIndex = "0";
    document.getElementById("text_accountnumbertwo").value = "";
    document.getElementById("text_amounttrasfer").value = "";
    document.getElementById("check_request").checked = false;
    document.getElementById("textarea_address").value = "";


  var table4 = document.getElementById("table_2");
    var count =document.getElementById("lbl_success").innerHTML; 
   
    var count1 = parseInt(count) + 1;
    document.getElementById("lbl_success").innerHTML = count1;

    
}

else 
{
    document.getElementById("lbl_errmsg").innerHTML = errmsg;
}

}


function clr() {

   
    document.getElementById("text_firstname").value = "";
    document.getElementById("text_lastname").value = "";
    document.getElementById("text_accountnumber").value = "";
    document.getElementById("text_password").value = "";
    document.getElementById("text_contactnumber").value = "";
    document.getElementById("text_email").value = "";
    document.getElementById("radio_savings").checked = true;
    document.getElementById("text_balance").value = "";
    document.getElementById("radio_nonsbi").checked = true;
    document.getElementById("acc_hide").style.display = "block"

    document.getElementById("select_accountwith").style.display = "block"
    
    document.getElementById("select_accountwith").selectedIndex = "0";
    document.getElementById("text_accountnumbertwo").value = "";
    document.getElementById("text_amounttrasfer").value = "";
    document.getElementById("check_request").checked = false;
    document.getElementById("textarea_address").style.display = "none";
    document.getElementById("textarea_address").value = "";


    document.getElementById("lbl_errmsg").innerHTML = "";


}




function show() 
{

    if (document.getElementById("check_request").checked == true) {
        document.getElementById("textarea_id").style.display = "block";
        document.getElementById("textarea_address").style.display = "block";





    }
    else 
    {
        document.getElementById("textarea_id").style.display = "none";
        document.getElementById("textarea_address").style.display = "none";
    }



}