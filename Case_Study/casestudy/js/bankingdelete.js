
                                                                    
function Delete(rowId)                                                              //Delete function
{
        //document.getElementById("button_reset").style.display = "none";                 
        var table = document.getElementById("table_2");                                //Extracting grid table by using grid table id 
        var rowCount = table.rows.length;
        var rowNumber = rowId.parentNode.parentNode.rowIndex;

            var agree = confirm("Are you sure you want to delete?");                    //Confirm box
            if (agree) {
                 if ((document.getElementById("text_accountnumber").value) != "") {

                    alert("Update record first");
                }
                else {
                    if (parseInt(document.getElementById("table_2").rows.length) > 0) {
                        document.getElementById("table_2").deleteRow(rowNumber);
                        document.getElementById("text_firstname").value = "";
                        document.getElementById("text_lastname").value = "";
                        document.getElementById("text_accountnumber").value = "";
                        document.getElementById("text_password").value = "";                //Assigning null values to all the fields
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
                        document.getElementById("lbl_update").innerHTML = "<input type='button'class='color_button' value='submit' id='up_' ' onclick='javascript:return Update()'>";    //Update button will change as Submit button
                        var count = document.getElementById("lbl_success").innerHTML;

                        var count1 = parseInt(count) - 1;                                       //Decrementing count value of total available records
                        document.getElementById("lbl_success").innerHTML = count1;


                        document.getElementById("lbl_errmsg").innerHTML = "";               //Assigning null to the error message label
                        //document.getElementById("button_clear").style.display = "block";
                    }
                }
                
            }
           /* else {

                //document.getElementById("button_clear").style.display = "none";
                //document.getElementById("button_reset").style.display = "block";
            }
            */

}








function Edit(rowId)                                                        //Edit function 
{
    
    if (document.getElementById("radio_nonsbi").checked == true) {

        document.getElementById("acc_hide").style.display = "block";
        document.getElementById("select_accountwith").style.display = "block";


    }

    

    // document.getElementById("button_reset").style.display = "block";
   
    //document.getElementById("button_clear").style.display = "block";         //Changing Clear button as Reset button

   
         var table_edit = document.getElementById("table_2");               //Extracting grid table by using grid table id
         var rowCount = table_edit.rows.length;
         var rowcount = rowId.parentNode.parentNode.rowIndex;

    //var agree = confirm("Are you sure you wish to edit?");
    //if (agree) {
         if (parseInt(document.getElementById("table_2").rows.length) > 0)  //if rowlength of the grid table is greater than zero then only statements will execute
        
        {






            document.getElementById("date-pick").innerHTML = table_edit.rows[rowcount].cells[2].innerHTML;
            document.getElementById("text_firstname").value = table_edit.rows[rowcount].cells[3].innerHTML;
            document.getElementById("text_lastname").value = table_edit.rows[rowcount].cells[4].innerHTML;              //Assigning grid table values to fields
            document.getElementById("text_accountnumber").value = table_edit.rows[rowcount].cells[5].innerHTML;
            document.getElementById("text_contactnumber").value = table_edit.rows[rowcount].cells[6].innerHTML;
            document.getElementById("text_email").value = table_edit.rows[rowcount].cells[7].innerHTML;
            var value_8 = table_edit.rows[rowcount].cells[8].innerHTML;
            if (value_8 == "Savings") 
            {
                document.getElementById("radio_savings").checked = true;
            }

            else {
                document.getElementById("radio_current").checked = true;                                    //Assigning grid table values to fields
            }

            document.getElementById("text_balance").value = table_edit.rows[rowcount].cells[9].innerHTML;

            var value_10 = table_edit.rows[rowcount].cells[10].innerHTML;

            if (value_10 == "HDFC") 
            
            {
                document.getElementById("select_accountwith").selectedIndex = 1;
                document.getElementById("acc_hide").style.display = "block";
                document.getElementById("select_accountwith").style.display = "block";
                document.getElementById("radio_nonsbi").checked = true;
            }

            if (value_10 == "ICICI") 
            
            {
                document.getElementById("radio_nonsbi").checked = true;
                 document.getElementById("acc_hide").style.display = "block";
              
                document.getElementById("select_accountwith").style.display = "block";
           
                document.getElementById("select_accountwith").selectedIndex = 2;
            }
            if (value_10 == "SBI") {

                document.getElementById("radio_sbi").checked = true;
                document.getElementById("acc_hide").style.display = "none";

                document.getElementById("select_accountwith").style.display = "none";
           
            }


            document.getElementById("text_accountnumbertwo").value = table_edit.rows[rowcount].cells[11].innerHTML;
            document.getElementById("text_amounttrasfer").value = table_edit.rows[rowcount].cells[12].innerHTML;

            var value_13 = table_edit.rows[rowcount].cells[14].innerHTML;
            if (value_13 == "Empty") 
            {

                document.getElementById("check_request").checked = false;
                document.getElementById("textarea_address").value = "";
            }


            else {

                document.getElementById("check_request").checked = true;
                document.getElementById("textarea_id").style.display = "block";
                document.getElementById("textarea_address").style.display = "block";
                //Assigning grid values to fields
            }
            if (table_edit.rows[rowcount].cells[14].innerHTML != "-") 
            {document.getElementById("check_request").checked = true;
                document.getElementById("textarea_address").value = table_edit.rows[rowcount].cells[14].innerHTML;
            }
            else 
            {   document.getElementById("check_request").checked = false;

                document.getElementById("textarea_address").value = "";
                document.getElementById("textarea_id").style.display = "none";
                document.getElementById("textarea_address").style.display = "none";

            }
            document.getElementById("text_password").value = table_edit.rows[rowcount].cells[15].innerHTML;


            document.getElementById("lbl_update").innerHTML = "<input type='button'class='color_button' value='Update' id='up_" + rowcount + "' onclick='javascript:return Update(" + rowcount + ")'>";
            document.getElementById("lbl_clear").innerHTML = "<input type='button'class='color_button' value='Reset' id='up_" + rowcount + "' onclick='javascript:return funreset1(" + rowcount + ")'>";

        }
   


}

function Update(rowId)                                                                                      //Update function
{


    //document.getElementById("button_reset").style.display = "none";                                     //Hide reset button
   
    
    
     var table = document.getElementById("table_2");
     var rc = parseInt(rowId);




    // valid1();
    document.getElementById("lbl_errmsg").innerHTML = "";                                       //Assigning null value to error message label


    var errmsg = "";

    var value_date = document.getElementById("date-pick").value;
    if (value_date == "") {

        errmsg += "please select date<br />";

    }

    var value_first = document.getElementById("text_firstname").value;
    if (value_first == "") {
        errmsg += "please enter your first name <br />";
    }


    var value_last = document.getElementById("text_lastname").value;
    if (value_last == "") {
        errmsg += "please enter your last name <br />";

    }

    var value_accountnumber = document.getElementById("text_accountnumber").value;
    if (value_accountnumber == "") {

        errmsg += "please enter your accountnumber <br />";

    }

    else {

        var value_accountnumber_len = value_accountnumber.length;
        if (value_accountnumber_len < 11) {

            errmsg += "Invalid account number <br />";
        }
    }

    var value_password = document.getElementById("text_password").value;
    if (value_password == "") {

        errmsg += "please enter your password <br />";
    }

    else {
        var value_password_len = value_password.length;
        if (value_password_len < 8) {
            errmsg += "password should contain minium 8 characters<br />";

        }
    }

    var value_contact = document.getElementById("text_contactnumber").value;
    if (value_contact == "") {

        errmsg += "please enter your contact number <br />";
    }

    var value_contact_len = value_contact.length;
    if (value_contact_len < 10) {

        errmsg += "Invalid phone number<br />";

    }

    var value_email = document.getElementById("text_email").value;
    if (value_email == "") {

        errmsg += "please enter your mail id <br />";

    }
    else {
        var valid1 = /^[A-Za-z0-9\._-]+@[A-Za-z]+.\w{1,8}$/;
        if (valid1.test(value_email)) {

        }

        else {

            errmsg += "Invalid email address <br />";
        }
    }

    var value_typeofaccount = document.getElementById("radio_savings").value;

    var value_typeofaccount1 = document.getElementById("radio_current").value;

    if (document.getElementById("radio_savings").checked == true) {


        var i = value_typeofaccount;
    }


    else {

        i = value_typeofaccount1;
    }




    if (document.getElementById("radio_nonsbi").checked == true) {

        var value_select = document.getElementById("select_accountwith").selectedIndex;
        if (value_select == 0) {

            errmsg += "please select your account with value<br />";

        }
    }

    var value_accountnumbertwo = document.getElementById("text_accountnumbertwo").value;
    if (value_accountnumbertwo == "") {
        errmsg += "please enter your account number<br />";

    }
    var value_accountnumbertwo_len = value_accountnumbertwo.length;
    if (value_accountnumbertwo_len < 11) {

        errmsg += "Invalid account number<br /> ";
    }


    var value_transfer = document.getElementById("text_amounttrasfer").value;
    var value_available = document.getElementById("text_balance").value;
   

    if (value_transfer == "") {

        errmsg += "please enter amount which is to be trasfered <br />";

    }

    

    else if (parseInt(value_transfer) < parseInt(value_available)) {

        if (value_transfer < 500) {


            errmsg += "Amount transfer should be above 500";
        }
        else {
           
        }
    }
    else {
        errmsg += "Not having sufficient balance in your account";
    }






    if (document.getElementById("check_request").checked == true) {
        var value_textarea = document.getElementById("textarea_address").value;
        if (value_textarea == "") {

            errmsg += "please enter you address";
        }

    }
    else {

        value_textarea = "Empty";

    }
    var check_value = document.getElementById("check_request");
    if (check_value.checked == true) {

        var check_truevalue = "Yes";
    }
    else {
        document.getElementById("textarea_address").value = "Empty";
        check_truevalue = "No";

    }

   
    //else {

      //  errmsg += "please select if your address is changed";
   // }


    var value_select1 = document.getElementById("select_accountwith").value;


    if (errmsg == "") 
    {

        document.getElementById("textarea_id").style.display = "none";
        document.getElementById("textarea_address").style.display = "none";

        
        table.rows[rc].cells[2].innerHTML = document.getElementById("date-pick").innerHTML;             //Assigning field values to grid column labels
        table.rows[rc].cells[3].innerHTML = document.getElementById("text_firstname").value;
        table.rows[rc].cells[4].innerHTML = document.getElementById("text_lastname").value;
        table.rows[rc].cells[5].innerHTML = document.getElementById("text_accountnumber").value;
        table.rows[rc].cells[6].innerHTML = document.getElementById("text_contactnumber").value;
        table.rows[rc].cells[7].innerHTML = document.getElementById("text_email").value;

        if (document.getElementById("radio_savings").checked == true) {
            table.rows[rc].cells[8].innerHTML = "Savings";
        }

        if (document.getElementById("radio_current").checked == true) {
            table.rows[rc].cells[8].innerHTML = "Current";
        }
        
        table.rows[rc].cells[9].innerHTML = document.getElementById("text_balance").value;

        if (document.getElementById("radio_sbi").checked == true) {
            table.rows[rc].cells[10].innerHTML = "SBI";


        }
        if (document.getElementById("radio_nonsbi").checked == true) {
            if (document.getElementById("select_accountwith").selectedIndex == 1) {
                table.rows[rc].cells[10].innerHTML = "HDFC";

            }
            else

                table.rows[rc].cells[10].innerHTML = "ICICI";

        }
        
        
        table.rows[rc].cells[11].innerHTML = document.getElementById("text_accountnumbertwo").value;
        table.rows[rc].cells[12].innerHTML = document.getElementById("text_amounttrasfer").value;
        table.rows[rc].cells[13].innerHTML = document.getElementById("check_request").checked;

                                                                                                //Assigning field values to grid column labels
        if (document.getElementById("check_request").checked == true) {
            if (document.getElementById("textarea_address").value != "") {
                table.rows[rc].cells[14].innerHTML = document.getElementById("textarea_address").value;
            }
            }
            if (document.getElementById("check_request").checked == false) {
       
             {
                 table.rows[rc].cells[14].innerHTML = "-";
            }
        }
        table.rows[rc].cells[15].innerHTML = document.getElementById("text_password").value;
        document.getElementById("lbl_update").innerHTML = "<input type='button'class='color_button' value='Submit' id='sub_"+rc+"' onclick='javascript:valid1()'>";      //changing update button as submit button 
        document.getElementById("lbl_clear").innerHTML = "<input type='button'class='color_button' value='Clear' id='up_" + rc + "' onclick='javascript:return clr()'>";
        //document.getElementById("lbl_reset").style.display = "none";
        document.getElementById("form1").reset();

        var count = document.getElementById("lbl_success").innerHTML;
       
        var count1 = parseInt(count);
        document.getElementById("lbl_success").innerHTML = count1;

        //document.getElementById("button_clear").style.display = "block";

    }

    else {
        document.getElementById("lbl_errmsg").innerHTML = errmsg;                                   //Assigning error messages to error message label
    }





}

function funreset1(rowId) {

    var rowNumber = parseInt(rowId);
    var errormsg = "";
    document.getElementById("lbl_errmsg").innerHTML = "";
    var table = document.getElementById("table_2");
    //document.getElementById("date-pick").value = table.rows[rowNumber].cells[2].innerHTML;
    document.getElementById("text_firstname").value = table.rows[rowNumber].cells[3].innerHTML;
    document.getElementById("text_lastname").value = table.rows[rowNumber].cells[4].innerHTML;
    document.getElementById("text_accountnumber").value = table.rows[rowNumber].cells[5].innerHTML;

    
    document.getElementById("text_contactnumber").value = table.rows[rowNumber].cells[6].innerHTML;
    document.getElementById("text_email").value = table.rows[rowNumber].cells[7].innerHTML;
    if (table.rows[rowNumber].cells[8].innerHTML == "Savings") {
        document.getElementById("radio_savings").checked = true;
    }
    else {
        document.getElementById("radio_current").checked = true;
    }
    
    document.getElementById("text_balance").value = table.rows[rowNumber].cells[9].innerHTML;

    if (table.rows[rowNumber].cells[10].innerHTML == "HDFC") {
        document.getElementById("select_accountwith").value = table.rows[rowNumber].cells[10].innerHTML;
    }

    if (table.rows[rowNumber].cells[10].innerHTML == "ICICI") {
        document.getElementById("select_accountwith").value = table.rows[rowNumber].cells[10].innerHTML;
    }

    /*if (table.rows[rowNumber].cells[10].innerHTML != "select") {
        document.getElementById("selvolt").disabled = false;
        document.getElementById("selvolt").value = table.rows[rowNumber].cells[10].innerHTML;
    }*/

    document.getElementById("text_accountnumbertwo").value = table.rows[rowNumber].cells[11].innerHTML;
    document.getElementById("text_amounttrasfer").value = table.rows[rowNumber].cells[12].innerHTML;
   // document.getElementById("txtdate2").value = table.rows[rowNumber].cells[13].innerHTML;
    if (table.rows[rowNumber].cells[13].innerHTML == "true") {
        document.getElementById("check_request").checked = true;
        document.getElementById("textarea_address").style.display = "block";
        document.getElementById("textarea_id").style.display = "block";
        document.getElementById("textarea_address").value = table.rows[rowNumber].cells[14].innerHTML;
    }
    else {
        document.getElementById("check_request").checked = false;
        document.getElementById("textarea_address").style.display = "none";
        document.getElementById("textarea_id").style.display = "none";
        document.getElementById("textarea_address").value = table.rows[rowNumber].cells[14].innerHTML;
    
         }
    document.getElementById("text_password").value = table.rows[rowNumber].cells[15].innerHTML;
   /* document.getElementById("lblfine").innerHTML = table.rows[rowNumber].cells[16].innerHTML;
    document.getElementById("lblbillamt").innerHTML = "";
    document.getElementById("txtdate3").value = table.rows[rowNumber].cells[18].innerHTML;
    document.getElementById("lblerror").innerHTML = "";*/
}
