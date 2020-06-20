function funSubmit() {
            //alert("hai");
            var err = "";
           // debugger;
            var name = document.getElementById("txt_passenger").value;
            var phno = document.getElementById("txt_phone").value;
            var address = document.getElementById("txtarea").value;
            var oneway = document.getElementById("rad_oneway").checked;
            var roundtrip = document.getElementById("rad_round").checked;
            var from = document.getElementById("sel_from").value;
            var to = document.getElementById("sel_to").value;
            var departure = document.getElementById("txt_dep").value;
           
            var ret = document.getElementById("txt_ret").value;
            
            var adults = document.getElementById("sel_adu").value;
            var childs = document.getElementById("sel_chi").value;
            var infants = document.getElementById("sel_infant").value;
            var cardno = document.getElementById("txt_cardno").value;

            //var billamount = document.getElementById("lbl_bill").innerHTML;

            document.getElementById("lbl_bill").innerHTML = (document.getElementById("sel_adu").value * 10000) + (document.getElementById("sel_chi").value * 8000) + (document.getElementById("sel_infant").value * 2000);




            if (name == "") {
                err += "Please Enter your Name<br>";
            }
            if (phno == "" ) {
                err += "Please Enter your phone number<br>";
            }
            else {
                if (phno == "0000000000") {
                    err += "Please enter valid phone number<br>";
                }
                if (phno.length != 10) {
                    err += "Phone number should be 10 digits<br>";
                }
            }
            if (address == "") {
                err += "Please Enter your Address<br>";
            }



            if (from == "Select") {
                err += "Please select your FROM Station<br>";
            }
            if (to == "Select") {
                err += "Please select your TO Station<br>";
            }



            if (departure != "") {
                //Required fields validation
                today = new Date();
                dd = today.getDate();
                mm = today.getMonth() + 1; //January is 0!
                yyyy = today.getFullYear();
                date_today = +yyyy + '-' + '0' + mm + '-' + dd;
                //alert(date_today);
                date_dob = departure;
                //alert(date_dob);
                x = date_today.split("-");
                //alert(x);
                y = date_dob.split("-");
                var a1 = x[0];                                       
                var b1 = y[0];                                       

                // alert(c);
                if (b1 >= a1) {
                    // alert(a);
                    // alert(b);
                    if (b1 == a1) {
                        var c1 = x[1];
                        var d1 = y[1];
                        if (d1 >= c1) {
                            if (d1 == c1) {
                                var e1 = x[2];
                                var f1 = y[2];
                                if (f1 >= e1) {

                                }
                                else {
                                    err += "Departure date  Should Be Greater Than Are Equal To Current Date<br />";
                                }

                            }
                        }
                        else {
                            err += "Departure date Should Be Greater Than Are Equal To Current Date<br />";
                        }

                    }
                    else {
                        err += "Departure date Should Be Greater Than Are Equal To Current Date<br />";
                    }

                }
            }
            else {
                err += "Please select Departure Date<br>";
            }


            if (document.getElementById("txt_ret").style.display == "block") {


                if (ret != "") {
                    //Required fields validation
                    today = new Date();
                    dd = today.getDate();
                    mm = today.getMonth() + 1; //January is 0!
                    yyyy = today.getFullYear();
                    date_today = +yyyy + '-' + '0' + mm + '-' + dd;
                    //alert(date_today);
                    date_dob = ret;
                    //alert(date_dob);
                    x = date_today.split("-");
                    //alert(x);
                    y = date_dob.split("-");
                    var a1 = x[0];                                       //reading current year
                    var b1 = y[0];                                       //reading entered year in textbox

                    // alert(c);
                    if (b1 >= a1) {
                        // alert(a);
                        // alert(b);
                        if (b1 == a1) {
                            var c1 = x[1];
                            var d1 = y[1];
                            if (d1 >= c1) {
                                if (d1 == c1) {
                                    var e1 = x[2];
                                    var f1 = y[2];
                                    if (f1 > e1) {

                                    }
                                    else {
                                        err += "Return date  Should Be Greater Than  Current Date<br />";
                                    }

                                }
                            }
                            else {
                                err += "Return date Should Be Greater Than Current Date<br />";
                            }

                        }
                        else {
                            err += "Return date Should Be Greater Than Current Date<br />";
                        }

                    }
                }
                else {
                    err += "Please select return date<br>";
                }



                x = departure.split("-");
                //alert(x);
                y = ret.split("-");
                var a1 = x[0];                                     
                var b1 = y[0];                                      

                // alert(c);
                if (b1 >= a1) {
                    // alert(a);
                    // alert(b);
                    if (b1 == a1) {
                        var c1 = x[1];
                        var d1 = y[1];
                        if (d1 >= c1) {
                            if (d1 == c1) {
                                var e1 = x[2];
                                var f1 = y[2];
                                if (f1 > e1) {

                                }
                                else {
                                    err += "Return date  Should Be Greater Than  Departure Date<br />";
                                }

                            }
                        }
                        else {
                            err += "Return date Should Be Greater Than Departure Date<br />";
                        }

                    }
                    else {
                        err += "Return date Should Be Greater Than Departure Date<br />";
                    }

                }
            }






            
               
                   

            if (cardno == "") {
                err += "Please Enter your card number<br>";
            }
            else {
                if (cardno.length == 16) { }
                else {
                    err += "Credit Card number should be 16 digits";
                }
            }

            if (document.getElementById("sel_from").value == "Select" || document.getElementById("sel_to").value == "Select") {
                err += "please select from and to places<br>";
            }
            else if (document.getElementById("sel_from").value == document.getElementById("sel_to").value) {
                err += "Choose different from and to places<br>";
            }

            if (document.getElementById("sel_card").value == "Select") {
                err += "Please select card type<br>";
            }

            if (adults == "0" && childs == "0" && infants == "0") {
                err += "Please select at least one passenger";
            }




            document.getElementById("lbl_err").innerHTML = err;
            
   


            if (err == "") {

                var tab = document.getElementById("tbl_grid");
                var rc = tab.rows.length;
                //alert(rc);
                var row = tab.insertRow(rc);
                cell0 = row.insertCell(0);
                cell0.innerHTML = "<img src='images/Edit.gif' class='cursor1' id='img_" + rc + "' onclick='javascript:return funInsert(this)'>";
                cell1 = row.insertCell(1);
                cell1.innerHTML = "<img src='images/Delete.gif' class='cursor1' id='del_" + rc + "'   onclick='javascript:return funDelete(this)'>";
                cell2 = row.insertCell(2);
                cell2.innerHTML = document.getElementById("txt_passenger").value;
                cell2.align="left";

                cell3 = row.insertCell(3);
                cell3.innerHTML = document.getElementById("txt_phone").value;
                 cell3.align="right";


                cell4 = row.insertCell(4);
                cell4.innerHTML = document.getElementById("txtarea").value;
                cell4.align="left";
                if (oneway == true) {


                    cell5 = row.insertCell(5);
                    cell5.innerHTML = document.getElementById("rad_oneway").value;
                    cell5.align="left";
                }
                if (roundtrip == true) {


                    cell5 = row.insertCell(5);
                    cell5.innerHTML = document.getElementById("rad_round").value;
                   cell5.align="left";
                }

                cell6 = row.insertCell(6);
                cell6.innerHTML = document.getElementById("sel_from").value;
                cell6.align="left";

                cell7 = row.insertCell(7);
                cell7.innerHTML = document.getElementById("sel_to").value;
                cell7.align="left";

                cell8 = row.insertCell(8);
                cell8.innerHTML = document.getElementById("txt_dep").value;
                cell8.align="center";

                cell9 = row.insertCell(9);
                cell9.innerHTML = document.getElementById("txt_ret").value;
                cell9.align="center";

         
                cell10 = row.insertCell(10);
                cell10.innerHTML = document.getElementById("sel_adu").value;
                cell10.align="right";
                
                cell11 = row.insertCell(11);
                cell11.innerHTML = document.getElementById("sel_chi").value;
                cell11.align="right";
                  
                cell12 = row.insertCell(12);
                cell12.innerHTML = document.getElementById("sel_infant").value;
                cell12.align="right";

                cell13 = row.insertCell(13);
                cell13.innerHTML = document.getElementById("txt_cardno").value;
                cell13.align="right";

                cell14 = row.insertCell(14);
                cell14.innerHTML = document.getElementById("lbl_bill").innerHTML;
                cell14.align="right";

                (document.getElementById("lbl_rec").innerHTML)++;


                document.getElementById("txt_passenger").value = "";
                document.getElementById("txt_phone").value = "";
                document.getElementById("txtarea").value = "";
                document.getElementById("sel_from").value = "Select";
                document.getElementById("sel_to").value = "Select";
                document.getElementById("txt_dep").value = "";
                document.getElementById("txt_ret").value = "";
                document.getElementById("sel_adu").value = "0";
                document.getElementById("sel_chi").value = "0";
                document.getElementById("sel_infant").value = "0";
                document.getElementById("txt_cardno").value = "";
                document.getElementById("sel_card").value = "Select";
                document.getElementById("lbl_bill").innerHTML = "0";
                document.getElementById("rad_oneway").checked = true;

                //document.getElementById("lbl_err").style.display = "block";
                


            }
            else {

            }

                
                document.getElementById("tbl_grid").style.display = "block";

        }
        function funBlur() {
            if (document.getElementById("rad_oneway").checked == true) {
                document.getElementById("txt_ret").style.display = "none";
                document.getElementById("ret").style.display = "none";
                document.getElementById("imgret").style.display = "none";
                document.getElementById("color1").style.display = "none";
            }
        }
        function funBlur1() {
            if (document.getElementById("rad_round").checked == true) {
                document.getElementById("txt_ret").style.display = "block";
                document.getElementById("ret").style.display = "block";
                document.getElementById("imgret").style.display = "block";
		document.getElementById("color1").style.display = "block";
            }
        }


        function funInsert(rowId) {
            //alert("hai");


            document.getElementById("lbl_err").innerHTML = "";
            //document.getElementById("btn_submit").style.display = "none";

            document.getElementById("lbl_update").style.display = "block";
            //document.getElementById("btn_submit").style.diplay = "none";
            //document.getElementById("btn_clear").style.diplay = "none";
            document.getElementById("lbl_clr").style.display="block";


















            var tab = document.getElementById("tbl_grid");
            var rowCount = tab.rows.length;
            var rowNumber = rowId.parentNode.parentNode.rowIndex;

            document.getElementById("txt_passenger").value = tab.rows[rowNumber].cells[2].innerHTML;
            document.getElementById("txt_phone").value = tab.rows[rowNumber].cells[3].innerHTML;
            document.getElementById("txtarea").value = tab.rows[rowNumber].cells[4].innerHTML;

            if (tab.rows[rowNumber].cells[5].innerHTML == "One Way") {
                document.getElementById("rad_oneway").checked = true;
            }
            if (tab.rows[rowNumber].cells[5].innerHTML == "Round Trip") {
                document.getElementById("rad_round").checked = true;
            }


            document.getElementById("sel_from").value = tab.rows[rowNumber].cells[6].innerHTML;
            document.getElementById("sel_to").value = tab.rows[rowNumber].cells[7].innerHTML;
            document.getElementById("txt_dep").value = tab.rows[rowNumber].cells[8].innerHTML;
            document.getElementById("txt_ret").value = tab.rows[rowNumber].cells[9].innerHTML;
            document.getElementById("sel_adu").value = tab.rows[rowNumber].cells[10].innerHTML;
            document.getElementById("sel_chi").value = tab.rows[rowNumber].cells[11].innerHTML;
            document.getElementById("sel_infant").value = tab.rows[rowNumber].cells[12].innerHTML;
            document.getElementById("txt_cardno").value = tab.rows[rowNumber].cells[13].innerHTML;

            document.getElementById("lbl_update").innerHTML = "<input type='button' style='background-color:#3149EF' value='update' id='up_" + rowNumber + "' onclick='javascript:return funUpdat(" + rowNumber + ");'>";

            document.getElementById("lbl_clr").innerHTML = "<input type='button' style='background-color:#3149EF' value='reset' id='res_" + rowNumber + "' onclick='javascript:return funReset(" + rowNumber + ");'>";




        }
        function funDelete(rowId) {
            //debugger;
            //alert(rowId);
            var table = document.getElementById("tbl_grid");
            var rc = table.rows.length;
            var rowNumber = rowId.parentNode.parentNode.rowIndex;
            //alert(rowNumber);
            var agree = confirm("Are you sure you wish to delete?");
            if (agree) {
                if (parseInt(document.getElementById("tbl_grid").rows.length) > 0) {
                    document.getElementById("tbl_grid").deleteRow(rowNumber);
                }
            }


            document.getElementById("txt_passenger").value = "";
            document.getElementById("txt_phone").value = "";
            document.getElementById("txtarea").value = "";
            document.getElementById("sel_from").value = "Select";
            document.getElementById("sel_to").value = "Select";
            document.getElementById("txt_dep").value = "";
            document.getElementById("txt_ret").value = "";
            document.getElementById("sel_adu").value = "0";
            document.getElementById("sel_chi").value = "0";
            document.getElementById("sel_infant").value = "0";
            document.getElementById("txt_cardno").value = "";
            document.getElementById("sel_card").value = "Select";

            document.getElementById("lbl_err").innerHTML = "";

            (document.getElementById("lbl_rec").innerHTML)--;



            document.getElementById("lbl_update").innerHTML = "<input type='button' value='Submit' style='background-color:#3149EF'  onclick='javascript:return funSubmit();'>";
            document.getElementById("lbl_err").innerHTML = "";

            document.getElementById("lbl_clr").innerHTML = "<input type='button' style='background-color:#3149EF' value='Clear'  onclick='javascript:return funClear();'>";

             







        }


        function keyPress(evt) {
            var char = (evt.which) ? evt.which : evt.keyCode;
            if ((char >= 65 && char <= 90) || (char >= 97 && char <= 122) || (char == 8) || (char == 9) || (char == 32) ||(char==127)) {

                return true;
            }
            else {
                return false;
            }
        }
        function keyNumeric(evt) {
            var char = (evt.which) ? evt.which : evt.keyCode;
            if ((char >= 48 && char <= 57) || (char == 8)|| (char == 9) || (char == 32)|| (char==127)) {

                return true;
            }
            else {
                return false;
            }
        }
        function funDate(evt) {
            var char = (evt.which) ? evt.which : evt.keyCode;
            if (char >= 0 && char <= 255) {
                return true;
            }
            else {
                return false;
            }
        }
        function funClear() {


            //alert("goutham");
            document.getElementById("txt_passenger").value = "";
            document.getElementById("txt_phone").value = "";
            document.getElementById("txtarea").value = "";
            document.getElementById("rad_oneway").checked = true;
            document.getElementById("sel_from").value = "Select";
            document.getElementById("sel_to").value = "Select";
            document.getElementById("txt_dep").value = "";
            document.getElementById("txt_ret").value = "";
            document.getElementById("sel_adu").value = "0";
            document.getElementById("sel_chi").value = "0";
            document.getElementById("sel_infant").value = "0";
            document.getElementById("txt_cardno").value = "";
            document.getElementById("lbl_bill").innerHTML = "0";
            document.getElementById("lbl_err").innerHTML = "";
            
            document.getElementById("tbl_grid").style.display = "block";
            var x=document.getElementById("tbl_grid");
            x.align="center";



            // document.getElementById("lbl_update").innerHTML = "<input type='button' value='Submit' id='sub_" + rc + "' onclick='javascript:return funSubmit()'>";



        }
        function funCancel() {
            
            //document.getElementById("tbl_grid").style.display = "none";
            document.getElementById("lbl_err").innerHTML = "";
document.getElementById("lbl_update").innerHTML = "<input type='button' value='Submit' style='background-color:#3149EF'  onclick='javascript:return funSubmit();'>";


        }



        function funUpdat(rowId) {

            document.getElementById("lbl_err").innerHTML = "";
            var err = "";
            //document.getElementById("btn_submit").style.display = "block";

            var name = document.getElementById("txt_passenger").value;
            var phno = document.getElementById("txt_phone").value;
            var address = document.getElementById("txtarea").value;
            var oneway = document.getElementById("rad_oneway").checked;
            var roundtrip = document.getElementById("rad_round").checked;
            var from = document.getElementById("sel_from").value;
            var to = document.getElementById("sel_to").value;
            var departure = document.getElementById("txt_dep").value;
            var ret = document.getElementById("txt_ret").value;
            var adults = document.getElementById("sel_adu").value;
            var childs = document.getElementById("sel_chi").value;
            var infants = document.getElementById("sel_infant").value;
            var cardno = document.getElementById("txt_cardno").value;
            //var billamount = document.getElementById("lbl_bill").innerHTML;

            document.getElementById("lbl_bill").innerHTML = (document.getElementById("sel_adu").value * 10000) + (document.getElementById("sel_chi").value * 8000) + (document.getElementById("sel_infant").value * 2000);

            if (name == "") {
                err += "Name field should not be empty<br>";
            }
            if (phno == "") {
                err += "Phone Number should not be empty<br>";
            }
            else {
                if (phno.length != 10) {
                    err += "Phone number should be 10 digits<br>";
                }
            }
            if (address == "") {
                err += "Address should not be empty<br>";
            }



            if (from == "Select") {
                err += "Please select your FROM Station<br>";
            }
            if (to == "Select") {
                err += "Please select your TO Station<br>";
            }
            if (departure != "") {
                //Required fields validation
                today = new Date();
                dd = today.getDate();
                mm = today.getMonth() + 1; //January is 0!
                yyyy = today.getFullYear();
                date_today = +yyyy + '-' + '0' + mm + '-' + dd;
                //alert(date_today);
                date_dob = departure;
                //alert(date_dob);
                x = date_today.split("-");
                //alert(x);
                y = date_dob.split("-");
                var a1 = x[0];                                       //reading current year
                var b1 = y[0];                                       //reading entered year in textbox

                // alert(c);
                if (b1 >= a1) {
                    // alert(a);
                    // alert(b);
                    if (b1 == a1) {
                        var c1 = x[1];
                        var d1 = y[1];
                        if (d1 >= c1) {
                            if (d1 == c1) {
                                var e1 = x[2];
                                var f1 = y[2];
                                if (f1 >= e1) {

                                }
                                else {
                                    err += "Departure date  Should Be Greater Than Are Equal To Current Date<br />";
                                }

                            }
                        }
                        else {
                            err += "Departure date Should Be Greater Than Are Equal To Current Date<br />";
                        }

                    }
                    else {
                        err += "Departure date Should Be Greater Than Are Equal To Current Date<br />";
                    }

                }
            }
            else {
                err += "Please select Return Date<br>";
            }


            if (document.getElementById("txt_ret").style.display == "block") {


                if (ret != "") {
                    //Required fields validation
                    today = new Date();
                    dd = today.getDate();
                    mm = today.getMonth() + 1; //January is 0!
                    yyyy = today.getFullYear();
                    date_today = +yyyy + '-' + '0' + mm + '-' + dd;
                    //alert(date_today);
                    date_dob = ret;
                    //alert(date_dob);
                    x = date_today.split("-");
                    //alert(x);
                    y = date_dob.split("-");
                    var a1 = x[0];                                       //reading current year
                    var b1 = y[0];                                       //reading entered year in textbox

                    // alert(c);
                    if (b1 >= a1) {
                        // alert(a);
                        // alert(b);
                        if (b1 == a1) {
                            var c1 = x[1];
                            var d1 = y[1];
                            if (d1 >= c1) {
                                if (d1 == c1) {
                                    var e1 = x[2];
                                    var f1 = y[2];
                                    if (f1 > e1) {

                                    }
                                    else {
                                        err += "Return date  Should Be Greater Than  Current Date<br />";
                                    }

                                }
                            }
                            else {
                                err += "Return date Should Be Greater Than Current Date<br />";
                            }

                        }
                        else {
                            err += "Return date Should Be Greater Than Current Date<br />";
                        }

                    }
                }
                else {
                    err += "Please select return date<br>";
                }



                x = departure.split("-");
                //alert(x);
                y = ret.split("-");
                var a1 = x[0];
                var b1 = y[0];

                // alert(c);
                if (b1 >= a1) {
                    // alert(a);
                    // alert(b);
                    if (b1 == a1) {
                        var c1 = x[1];
                        var d1 = y[1];
                        if (d1 >= c1) {
                            if (d1 == c1) {
                                var e1 = x[2];
                                var f1 = y[2];
                                if (f1 > e1) {

                                }
                                else {
                                    err += "Return date  Should Be Greater Than  Departure Date<br />";
                                }

                            }
                        }
                        else {
                            err += "Return date Should Be Greater Than Departure Date<br />";
                        }

                    }
                    else {
                        err += "Return date Should Be Greater Than Departure Date<br />";
                    }

                }
            }







            if (cardno == "") {
                err += "Please Enter your card number<br>";
            }
            else {
                if (cardno.length == 16) { }
                else {
                    err += "Credit Card number should be 16 digits";
                }
            }

            if (document.getElementById("sel_from").value == "Select" || document.getElementById("sel_to").value == "Select") {
                err += "please select from and to places";
            }
            else if (document.getElementById("sel_from").value == document.getElementById("sel_to").value) {
                err += "Choose different from and to places";
            }


	








            document.getElementById("lbl_err").innerHTML = err;



            if (err == "") {

                var table = document.getElementById("tbl_grid");
                //debugger;
                //var rowNumber = rowId.parentNode.parentNode.rowIndex
                var rowNumber = parseInt(rowId); //.parentNode.parentNode.rowIndex;

                table.rows[rowNumber].cells[2].innerHTML = document.getElementById("txt_passenger").value;
                table.rows[rowNumber].cells[3].innerHTML = document.getElementById("txt_phone").value;
                table.rows[rowNumber].cells[4].innerHTML = document.getElementById("txtarea").value;
                if (oneway == true) {



                    table.rows[rowNumber].cells[5].innerHTML = document.getElementById("rad_oneway").value;
                }
                if (roundtrip == true) {



                    table.rows[rowNumber].cells[5].innerHTML = document.getElementById("rad_round").value;
                }


                table.rows[rowNumber].cells[6].innerHTML = document.getElementById("sel_from").value;
                table.rows[rowNumber].cells[7].innerHTML = document.getElementById("sel_to").value;
                table.rows[rowNumber].cells[8].innerHTML = document.getElementById("txt_dep").value;
                table.rows[rowNumber].cells[9].innerHTML = document.getElementById("txt_ret").value;
                table.rows[rowNumber].cells[10].innerHTML = document.getElementById("sel_adu").value;
                table.rows[rowNumber].cells[11].innerHTML = document.getElementById("sel_chi").value;
                table.rows[rowNumber].cells[12].innerHTML = document.getElementById("sel_infant").value;
                table.rows[rowNumber].cells[13].innerHTML = document.getElementById("txt_cardno").value;
                table.rows[rowNumber].cells[14].innerHTML = document.getElementById("lbl_bill").innerHTML;

                //(document.getElementById("lbl_rec").innerHTML)++;

                
                document.getElementById("txt_passenger").value = "";
                document.getElementById("txt_phone").value = "";
                document.getElementById("txtarea").value = "";
                document.getElementById("rad_oneway").checked = true;
                document.getElementById("sel_from").value = "Select";
                document.getElementById("sel_to").value = "Select";
                document.getElementById("txt_dep").value = "";
                document.getElementById("txt_ret").value = "";
                document.getElementById("sel_adu").value = "0";
                document.getElementById("sel_chi").value = "0";
                document.getElementById("sel_infant").value = "0";
                document.getElementById("txt_cardno").value = "";
                document.getElementById("lbl_bill").innerHTML = "0";
                //
                
                //

                document.getElementById("tbl_grid").style.display = "block";



                document.getElementById("lbl_update").style.display = "block";
                document.getElementById("lbl_clr").style.display = "block";
                //document.getElementById("btn_clear").style.display = "block";




               document.getElementById("lbl_update").innerHTML = "<input type='button' value='Submit' style='background-color:#3149EF'  onclick='javascript:return funSubmit();'>";
               document.getElementById("lbl_err").innerHTML = ""; 

                document.getElementById("lbl_clr").innerHTML = "<input type='button' style='background-color:#3149EF' value='Clear'  onclick='javascript:return funClear();'>";

                // document.getElementById("lbl_err").style.display = "none";
                 //document.getElementById("form2").reset();
                 


            }
           

            else {
                document.getElementById("lbl_err").innerHTML = err;
                //document.getElementById("lbl_update").style.display = "block";
                //document.getElementById("lbl_clr").style.display = "block";

                //document.getElementById("lbl_update").innerHTML = "<input type='button' value='Submit' style='background-color:#3149EF'  onclick='javascript:return funSubmit();'>";


                  //document.getElementById("lbl_clr").innerHTML = "<input type='button' style='background-color:#3149EF' value='Clear'  onclick='javascript:return funClear();'>";

               








            }


            







        }


        function funBill() {

            document.getElementById("lbl_bill").innerHTML = (document.getElementById("sel_adu").value * 10000) + (document.getElementById("sel_chi").value * 8000) + (document.getElementById("sel_infant").value * 2000);



        }

        function funReset(rowId) {

            var oneway = document.getElementById("rad_oneway").checked;
            var roundtrip = document.getElementById("rad_round").checked;




            var table = document.getElementById("tbl_grid");





            //debugger;
            //var rowNumber = rowId.parentNode.parentNode.rowIndex
            var rowNumber = parseInt(rowId); //.parentNode.parentNode.rowIndex;

          document.getElementById("txt_passenger").value=  table.rows[rowNumber].cells[2].innerHTML ;
          document.getElementById("txt_phone").value = table.rows[rowNumber].cells[3].innerHTML;
          document.getElementById("txtarea").value = table.rows[rowNumber].cells[4].innerHTML;

          if (table.rows[rowNumber].cells[5].innerHTML == "One Way") {
              document.getElementById("rad_oneway").checked = true;
          }
          if (table.rows[rowNumber].cells[5].innerHTML == "Round Trip") {
              document.getElementById("rad_round").checked = true;
          }

            document.getElementById("sel_from").value= table.rows[rowNumber].cells[6].innerHTML;
            document.getElementById("sel_to").value= table.rows[rowNumber].cells[7].innerHTML ;
            document.getElementById("txt_dep").value= table.rows[rowNumber].cells[8].innerHTML ;
            document.getElementById("txt_ret").value= table.rows[rowNumber].cells[9].innerHTML;
            document.getElementById("sel_adu").value= table.rows[rowNumber].cells[10].innerHTML;
            document.getElementById("sel_chi").value= table.rows[rowNumber].cells[11].innerHTML;
            document.getElementById("sel_infant").value= table.rows[rowNumber].cells[12].innerHTML;
            document.getElementById("txt_cardno").value= table.rows[rowNumber].cells[13].innerHTML;
            document.getElementById("lbl_bill").innerHTML=table.rows[rowNumber].cells[14].innerHTML;

            (document.getElementById("lbl_rec").innerHTML)++;


        /*    document.getElementById("txt_passenger").value = "";
            document.getElementById("txt_phone").value = "";
            document.getElementById("txtarea").value = "";
            document.getElementById("rad_oneway").checked = true;
            document.getElementById("sel_from").value = "Select";
            document.getElementById("sel_to").value = "Select";
            document.getElementById("txt_dep").value = "";
            document.getElementById("txt_ret").value = "";
            document.getElementById("sel_adu").value = "0";
            document.getElementById("sel_chi").value = "0";
            document.getElementById("sel_infant").value = "0";
            document.getElementById("txt_cardno").value = "";
            document.getElementById("lbl_bill").innerHTML = "0";
            document.getElementById("lbl_err").innerHTML = "";



            */
        }