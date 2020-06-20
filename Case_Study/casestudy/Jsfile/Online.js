 window.onload = function () {
        
        }
 /*$(document).ready(function () {

            $("#txtD1").datepick({ dateFormat: 'm/dd/yyyy' });
        });*/
  $(document).ready(function () {

            $("#txtD2").datepick({ dateFormat: 'm/dd/yyyy' });
        });
var count;
       
        function funAdd() {
            msg = "";
            var tb1 = document.getElementById("rd2").checked;
            if (tb1 == true) {
                var tb2 = document.getElementById("txtCD").value;
                if (tb2 == "") {
                    msg += "Please Enter Credit Card<br>";
                }
            
            }
            document.getElementById("tbl1").style.display = "block";
            var txtBNObj = document.getElementById("txtBN").value;
            var jan = txtBNObj;
          
            document.getElementById("txtBN").value = jan;
            
            var val1 = document.getElementById("txt1").value;
            if (val1 == "") {
                msg += "Please Enter Consumer No<br>";
            }
            var val2 = document.getElementById("txt2").value;
            if (val2 == "") {
                msg += "Please Enter Consumer Name<br>";
            }
            var val3 = document.getElementById("txtP").value;
            if (val3 == "") {
               // msg += "Please Enter Phone Number<br>";
            } else {
                if (val3.length == 10) {
                } else {

                    msg += "Please Enter Phone Number 10 digits only<br>";
                }
            }
            var val4 = document.getElementById("txtA").value;
            if (val4 == "") {
                msg += "Please Enter Address<br>";
            }
            var val5 = document.getElementById("txtD1").value;
            if (val5 == "") {

                //msg += "Please Enter Date of Booking<br>";
            }
            var val6 = document.getElementById("txtD2").value;
            if (val6 == "") {

                //msg += "Please Enter Date of Delivery<br>";
            }
            
            var val7 = document.getElementById("chk1").checked;
            var val8 = document.getElementById("chk2").checked;
            /*if (val7 == true || val8 == true) {
            } else {
                msg += "Please Checked Preferable Timing<br>";
            }*/
            var val9 = document.getElementById("sel").value;
            if (val9 == "Select") {
                msg += "Please Select type of customer<br>";
            }
            var val10 = document.getElementById("rd1").checked;
            var val11 = document.getElementById("rd2").checked;
            if (val10 == true || val11 == true) {
            } else {
                msg += "Please Checked payment Mode<br>";

            }
            
            var val12 = document.getElementById("txtBN").value;
            if (val12 == "") {
                msg += "Please Enter Booking Number<br>";
            }
            var val13 = document.getElementById("txtD").value;
            var val5 = document.getElementById("txtD1").value;
            var date1 = val5;
            //alert(date1);
            var date2 = val6;
            var date3 = val13;
            var val6 = document.getElementById("txtD2").value;
            if (val6 == "") {

                msg += "Please Enter Date of Delivery<br>";
            }
           
            if (val6 != "") {
                //Required fields validation
                today = new Date();
                dd = today.getDate();
                mm = today.getMonth() + 1; //January is 0!
                yyyy = today.getFullYear();
                date_today = +'0' + mm + '/' + dd + '/' + yyyy;
                //alert(date_today);
                //alert("ok");
                date_dob = val6;
                //alert(date_dob);
                x = date_today.split("/");
                //alert(x);
                y = date_dob.split("/");
                var a1 = x[2];                                       //reading current year
                var b1 = y[2];                                       //reading entered year in textbox


                if (b1 >= a1) {
                    //alert(a1);
                    //alert(b1);
                    if (b1 == a1) {
                        var c1 = x[0];
                        var d1 = y[0];
                        if (d1 >= c1) {
                            //alert(c1);
                            //alert(d1);
                            if (d1 == c1) {

                                var e1 = x[1];
                                var f1 = y[1];
                                var f2 = parseInt(f1);
                                if (f2 >= e1) {
                                    //alert(e1);
                                    //alert(f1);

                                }
                                else {
                                    // alert(e1);
                                    //alert(f1);

                                    msg += "Delivery Date should be greater than Booking Date<br>";
                                }

                            }
                        }
                        else {
                            msg += "Delivery Date should be greater than Booking Date<br>";
                            
                        }

                    }
                }
                    else {
                        msg += "Delivery Date should be greater than Booking Date<br>";

                        
                    }

                
            }
            
    





           /* else {
                if (date1 < date2) {
                } else {
                    msg += "Delivery Date should be greater than Booking Date<br>";

                }
            }*/
            document.getElementById("lblmsg").innerHTML = msg;
            if (msg == "") {
                document.getElementById("txtP").value = "";
                var table = document.getElementById("tbl1");
                var rowCnt = table.rows.length;
                var row = table.insertRow(rowCnt);
                var cell1 = row.insertCell(0);
                cell1.innerHTML = "<img src='Images/imgEdit.gif' id='img_" + rowCnt + "'  onclick='javascript:return funEdit(this)'>";
                var cell2 = row.insertCell(1);
                cell2.innerHTML = "<img src='Images/imgDelete.gif' id='del_" + rowCnt + "'  onclick='javascript:return funDelete(this)'>";

                var cell3 = row.insertCell(2);
                cell3.innerHTML = document.getElementById("txt1").value;
                
		cell3.align = "right";
                document.getElementById("txt1").value = "";
                var cell4 = row.insertCell(3);
                
                cell4.innerHTML = document.getElementById("txt2").value;
		cell4.align = "left";
                document.getElementById("txt2").value = "";
                var cell5 = row.insertCell(4);
                cell5.innerHTML = document.getElementById("txtA").value;
		cell5.align = "left";
                document.getElementById("txtA").value = "";
                var cell6 = row.insertCell(5);
                
                cell6.innerHTML = document.getElementById("txtD1").value;
		cell6.align = "center";
                document.getElementById("txtD1").value = "";
                var cell7 = row.insertCell(6);
                
                cell7.innerHTML = document.getElementById("txtD2").value;
		cell7.align = "center";
                document.getElementById("txtD2").value = "";
                var cell8 = row.insertCell(7);
                cell8.innerHTML = document.getElementById("sel").value;
                document.getElementById("sel").value = "Select";
                if (val10 == true) {
                    var cell9 = row.insertCell(8);
                    cell9.innerHTML = document.getElementById("rd1").value;
			cell9.align = "left";
                    //document.getElementById("rd1").value = false;
                }
                else {
                    var cell9 = row.insertCell(8);
                    cell9.innerHTML = document.getElementById("rd2").value;
			cell9.align = "left";
                    //document.getElementById("rd2").value = false;
                }

                var cell10 = row.insertCell(9);
                cell10.innerHTML = document.getElementById("txtBN").value;
		cell10.align = "right";
                //document.getElementById("txtBN").value = "";
		if (val7 == true && val8 == true) {
		    var c1 = document.getElementById("chk1").value;
		    var c2 = document.getElementById("chk2").value;
		    var c3 = (c1 + "," + c2);
		    var cell11 = row.insertCell(10);
		    cell11.innerHTML = c3
		    cell11.align = "left";
		    c3 = "";
		    document.getElementById("chk1").checked = false;
		    document.getElementById("chk2").checked = false;
		}
		else if (val7 == true) {
		    var cell11 = row.insertCell(10);
		    cell11.innerHTML = document.getElementById("chk1").value;
		    //document.getElementById("chk1").value = false;
		    document.getElementById("chk1").checked = false;
		} else {
		    var cell11 = row.insertCell(10);
		    cell11.innerHTML = document.getElementById("chk2").value;
		    //document.getElementById("chk2").value = false;
		    document.getElementById("chk2").checked = false;
		}
          if (document.getElementById("txtCD").value == "") {
               var cell12 = row.insertCell(11);
               cell12.innerHTML = "-";
               document.getElementById("txtCD").value = "";
               }
                else {
                    var cell12 = row.insertCell(11);
                    cell12.innerHTML = document.getElementById("txtCD").value;
			        cell12.align = "right";
                    document.getElementById("txtCD").value = "";
                }
                
                jan++;
                document.getElementById("txtBN").value = jan;
                document.getElementById("rd1").checked = true;
                if (document.getElementById("rd1").checked == true) {
                    document.getElementById("table1").style.display = "none";
                }
                else {
                    document.getElementById("table1").style.display = "block";

                }
                document.getElementById("lblA").innerHTML = --rowCnt;
            }
            
        }

        function funHide() {

           
            if (document.getElementById("rd2").checked == true) {
                document.getElementById("table1").style.display = "block";
            }
            else {
                document.getElementById("table1").style.display = "none";

            }

        }
        function funEdit(rowId) {

            document.getElementById("lblUpdate").style.display = "block"
            document.getElementById("btnadd").style.display = "none";
            document.getElementById("btnclear").style.display = "none";
            document.getElementById("lblreset").style.display = "block";
            var table = document.getElementById("tbl1");
            var x = table.rows.length;

            var rowCnt = rowId.parentNode.parentNode.rowIndex;

            document.getElementById("txt1").value = table.rows[rowCnt].cells[2].innerHTML;
            document.getElementById("txt2").value = table.rows[rowCnt].cells[3].innerHTML;
            document.getElementById("txtA").value = table.rows[rowCnt].cells[4].innerHTML;
            document.getElementById("txtD1").value = table.rows[rowCnt].cells[5].innerHTML;
            document.getElementById("txtD2").value = table.rows[rowCnt].cells[6].innerHTML;
          
            document.getElementById("sel").value = table.rows[rowCnt].cells[7].innerHTML;
            if (table.rows[rowCnt].cells[8].innerHTML == "Cash") {
                document.getElementById("rd1").checked = true;
            }
            if (table.rows[rowCnt].cells[8].innerHTML == "Credit") {
                document.getElementById("rd2").checked = true;
            }

            document.getElementById("txtBN").value = table.rows[rowCnt].cells[9].innerHTML;
            //alert(table.rows[rowCnt].cells[10].innerHTML);
            if (table.rows[rowCnt].cells[10].innerHTML == "Morning") {
                document.getElementById("chk1").checked = true;
            }
            else if (table.rows[rowCnt].cells[10].innerHTML == "Evening") {
                document.getElementById("chk2").checked = true;
            }
            else {
                document.getElementById("chk1").checked = true;
                document.getElementById("chk2").checked = true;
            }

           




            document.getElementById("txtCD").value = table.rows[rowCnt].cells[11].innerHTML;
            if (document.getElementById("rd2").checked == true) {
                document.getElementById("table1").style.display = "block";
            }
            else {
                document.getElementById("table1").style.display = "none";

            }
            document.getElementById("lblUpdate").innerHTML = "<input type='button' style='background-color: #3149EF' value='Update' id='Up_" + rowCnt + "'onclick='javascript:return funUpdat(" + rowCnt + ");'>";
            document.getElementById("lblreset").innerHTML = "<input type='button' style='background-color: #3149EF' value='Reset' id='Up_" + rowCnt + "'onclick='javascript:return funreset(" + rowCnt + ");'>";
            document.getElementById("lblmsg").innerHTML = "";
        }
        function funDelete(rowId) {
            if (document.getElementById("lblUpdate").style.display == "block") {
                alert("Please first update the record");
            }
            else {

                var table = document.getElementById("tbl1");
                var rowCount = table.rows.length;
                var rowNumber = rowId.parentNode.parentNode.rowIndex;
                // alert(rowNumber);
                var agree = confirm("Are you sure you wish to delete?");
                if (agree) {
                    if (parseInt(document.getElementById("tbl1").rows.length) > 0) {
                        document.getElementById("tbl1").deleteRow(rowNumber);
                        (document.getElementById("lblA").innerHTML)--;
                    }
                    
                } 
            }
                
            }
            
      
        function funCan() {
            document.getElementById("lblmsg").innerHTML = "";
            //document.getElementById("btnadd").value = "Add";
            document.getElementById("txt1").value = "";
            document.getElementById("txt2").value = "";
            document.getElementById("txtP").value = "";
            document.getElementById("txtA").value = "";
            document.getElementById("txtD1").value = "";
            document.getElementById("txtD2").value = "";
            document.getElementById("chk1").checked = false;
            document.getElementById("chk2").checked = false;
            document.getElementById("sel").value = "Select";
            document.getElementById("rd1").checked = true;
            document.getElementById("rd2").checked = false;
            //document.getElementById("txtBN").value = "";
            document.getElementById("table1").style.display = "none";
            document.getElementById("txtCD").value = "";
            document.getElementById("tbl1").style.display = "block";
            var table = document.getElementById("tbl1");
            var rowCnt = table.rows.length;
            var row = table.insertRow(rowCnt);
            //document.getElementById("lblUpdate").innerHTML = "<input type='button' style='background-color: #3149EF' value='Add' id='sub_" + rowCnt + "' onclick='javascript:return funAdd()'>";
           
        }
        function funhide() {
            var textbox = document.getElementById("txtD");
            var date = new Date();
            textbox.value = 1 + date.getMonth() + "/" + date.getDate() + "/" + date.getFullYear();
            var txtBNObj = document.getElementById("txtBN");
            if (txtBNObj.value == "")
             {
               
                txtBNObj.value = 100
            }
            
            if (document.getElementById("rd1").checked == true) {
                document.getElementById("table1").style.display = "none";
            }
        }
        function funV(event) {
            var msg = "";
            var charcode = (event.which) ? event.which : event.keyCode;
            //alert(charcode);

            if ((charcode >= 48 && charcode <= 57) || charcode == 8 || charcode == 37 || charcode == 39 || charcode == 9 || charcode == 46) {
                return true;
            }
            else {
                return false;
            }
        }
        function funV1(event) {
            var charcode = (event.which) ? event.which : event.keyCode;
            if ((charcode >= 65 && charcode <= 90) || (charcode >= 97 && charcode <= 122) || charcode == 8 || charcode == 46) {
                            return true;
            }
            else {
                return false;
            }
        }

        function funUpdat(rowId) {
            msg = "";
            
            
            var tb1 = document.getElementById("rd2").checked;
            if (tb1 == true) {
                var tb2 = document.getElementById("txtCD").value;
                if (tb2 == "") {
                    msg += "Please Enter Credit Card<br>";
                }
            
            }

            var txtBNObj = document.getElementById("txtBN").value;
            var jan = txtBNObj;
          
            document.getElementById("txtBN").value = jan;
            
            var val1 = document.getElementById("txt1").value;
            if (val1 == "") {
                msg += "Please Enter Consumer No<br>";
            }
            var val2 = document.getElementById("txt2").value;
            if (val2 == "") {
                msg += "Please Enter Consumer Name<br>";
            }
           /* var val3 = document.getElementById("txtP").value;
            if (val3 == "") {
                msg += "Please Enter Phone Number<br>";
            } else {
                if (val3.length == 10) {
                } else {

                    msg += "Please Enter Phone Number 10 digits only<br>";
                }
            }*/
            var val4 = document.getElementById("txtA").value;
            if (val4 == "") {
                msg += "Please Enter Address<br>";
            }
            var val5 = document.getElementById("txtD1").value;
            if (val5 == "") {

                msg += "Please Enter Date of Booking<br>";
            }
            var val6 = document.getElementById("txtD2").value;
            if (val6 == "") {

                msg += "Please Enter Date of Delivery<br>";
            }
            
            var val7 = document.getElementById("chk1").checked;
            var val8 = document.getElementById("chk2").checked;
            if (val7 == true || val8 == true) {
            } else {
                msg += "Please Checked Preferable Timing<br>";
            }
            var val9 = document.getElementById("sel").value;
            if (val9 == "Select") {
                msg += "Please Select type of customer<br>";
            }
            var val10 = document.getElementById("rd1").checked;
            var val11 = document.getElementById("rd2").checked;
            if (val10 == true || val11 == true) {
            } else {
                msg += "Please Checked payment Mode<br>";

            }
            
            var val12 = document.getElementById("txtBN").value;
            if (val12 == "") {
                msg += "Please Enter Booking Number<br>";
            }
            var val13 = document.getElementById("txtD").value;
            if (val6 == "") {

                msg += "Please Enter Date of Delivery<br>";
            }

            if (val6 != "") {
                //Required fields validation
                today = new Date();
                dd = today.getDate();
                mm = today.getMonth() + 1; //January is 0!
                yyyy = today.getFullYear();
                date_today = +'0' + mm + '/' + dd + '/' + yyyy;
                //alert(date_today);
                //alert("ok");
                date_dob = val6;
                //alert(date_dob);
                x = date_today.split("/");
                //alert(x);
                y = date_dob.split("/");
                var a1 = x[2];                                       //reading current year
                var b1 = y[2];                                       //reading entered year in textbox


                if (b1 >= a1) {
                    //alert(a1);
                    //alert(b1);
                    if (b1 == a1) {
                        var c1 = x[0];
                        var d1 = y[0];
                        if (d1 >= c1) {
                            //alert(c1);
                            //alert(d1);
                            if (d1 == c1) {

                                var e1 = x[1];
                                var f1 = y[1];
                                var f2 = parseInt(f1);
                                if (f2 >= e1) {
                                    //alert(e1);
                                    //alert(f1);

                                }
                                else {
                                    // alert(e1);
                                    //alert(f1);

                                    msg += "Delivery Date should be greater than Booking Date<br>";
                                }

                            }
                        }
                        else {
                            msg += "Delivery Date should be greater than Booking Date<br>";

                        }

                    }
                }
                else {
                    msg += "Delivery Date should be greater than Booking Date<br>";


                }


            }
            
            /*var date1 = val5;
            //alert(date1);
            var date2 = val6;
            var date3 = val13;
            if (date1 < date2)  {
            } else {
                msg += "Delivery Date should be greater than Booking Date<br>";

            }*/
            
            document.getElementById("lblmsg").innerHTML = msg;
            if (msg == "") {
                document.getElementById("btnadd").style.display = "block";
                var table = document.getElementById("tbl1");

                var rowNumber = parseInt(rowId);

                table.rows[rowNumber].cells[2].innerHTML = document.getElementById("txt1").value;
                document.getElementById("txt1").value = "";
                table.rows[rowNumber].cells[3].innerHTML = document.getElementById("txt2").value;
                document.getElementById("txt2").value = "";
                table.rows[rowNumber].cells[4].innerHTML = document.getElementById("txtA").value;
                document.getElementById("txtA").value = "";
                table.rows[rowNumber].cells[5].innerHTML = document.getElementById("txtD1").value;
                document.getElementById("txtD1").value = "";
                table.rows[rowNumber].cells[6].innerHTML = document.getElementById("txtD2").value;
                document.getElementById("txtD2").value = "";
                table.rows[rowNumber].cells[7].innerHTML = document.getElementById("sel").value;
                document.getElementById("sel").value = "Select";
                document.getElementById("txtP").value = "";
                if (val10 == true) {
                    table.rows[rowNumber].cells[8].innerHTML = document.getElementById("rd1").value;

                    //document.getElementById("rd1").value = false;
                }
                else {
                    table.rows[rowNumber].cells[8].innerHTML = document.getElementById("rd2").value;

                    //document.getElementById("rd2").value = false;
                }

                //var cell10 = row.insertCell(9);
                //cell10.innerHTML = document.getElementById("txtBN").value;
                //document.getElementById("txtBN").value = "";
                if (val7 == true && val8 == true) {
                    var c1 = document.getElementById("chk1").value;
                    var c2 = document.getElementById("chk2").value;
                    var c3 = (c1 + "," + c2);

                    table.rows[rowNumber].cells[10].innerHTML = c3
                   
                    c3 = "";
                    document.getElementById("chk1").checked = false;
                    document.getElementById("chk2").checked = false;
                }
                else if (val7 == true) {
                    
                    table.rows[rowNumber].cells[10].innerHTML = document.getElementById("chk1").value;
                    //document.getElementById("chk1").value = false;
                    document.getElementById("chk1").checked = false;
                } else {
                    
                    table.rows[rowNumber].cells[10].innerHTML = document.getElementById("chk2").value;
                    //document.getElementById("chk2").value = false;
                    document.getElementById("chk2").checked = false;
                }
                if (document.getElementById("txtCD").value == "") {
                    table.rows[rowNumber].cells[11].innerHTML = "-"
                    document.getElementById("txtCD").value = "";

                }
                else {

                    table.rows[rowNumber].cells[11].innerHTML = document.getElementById("txtCD").value;
                    document.getElementById("txtCD").value = "";
                }

                jan++;
                document.getElementById("txtBN").value = jan;
                document.getElementById("rd1").checked = true;
                if (document.getElementById("rd1").checked == true) {
                    document.getElementById("table1").style.display = "none";
                }
                else {
                    document.getElementById("table1").style.display = "block";

                }
                document.getElementById("lblUpdate").style.display = "none";
                document.getElementById("lblreset").style.display = "none";
                document.getElementById("btnclear").style.display = "block";
                //document.getElementById("lblA").innerHTML = --rowCnt;
                //document.getElementById("lblUpdate").innerHTML = "<input type='button' style='background-color: #3149EF' value='Add' id='sub' onclick='javascript:return funAdd()'>";
                document.getElementById("lblreset").innerHTML = "<input type='button' style='background-color: #3149EF' value='Reset' id='reset' onclick='javascript:return funCan()'>";

           
            }
            else {

                document.getElementById("lblmsg").innerHTML = msg;
            }
        }

      



        function funreset(rowId) {
            var rowCnt = parseInt(rowId);
            var table = document.getElementById("tbl1");
            document.getElementById("txt1").value = table.rows[rowCnt].cells[2].innerHTML;
            document.getElementById("txt2").value = table.rows[rowCnt].cells[3].innerHTML;
            document.getElementById("txtA").value = table.rows[rowCnt].cells[4].innerHTML;
            document.getElementById("txtD1").value = table.rows[rowCnt].cells[5].innerHTML;
            document.getElementById("txtD2").value = table.rows[rowCnt].cells[6].innerHTML;
            document.getElementById("sel").value = table.rows[rowCnt].cells[7].innerHTML;
            if (table.rows[rowCnt].cells[8].innerHTML == "Cash") {
                document.getElementById("rd1").checked = true;
            }
            if (table.rows[rowCnt].cells[8].innerHTML == "Credit") {
                document.getElementById("rd2").checked = true;
            }

            document.getElementById("txtBN").value = table.rows[rowCnt].cells[9].innerHTML;

            if (table.rows[rowCnt].cells[10].innerHTML == "Morning") {
                document.getElementById("chk1").checked = true;
            }
            else if (table.rows[rowCnt].cells[10].innerHTML == "Evening") {
                document.getElementById("chk2").checked = true;
            }
            else {
                document.getElementById("chk1").checked = true;
                document.getElementById("chk2").checked = true;
            }




            document.getElementById("txtCD").value = table.rows[rowCnt].cells[11].innerHTML;
            if (document.getElementById("rd2").checked == true) {
                document.getElementById("table1").style.display = "block";
            }
            else {
                document.getElementById("table1").style.display = "none";

            }
        }
        function funFocus() {
            var textbox1 = document.getElementById("txtD1");
            var date = new Date();
            textbox1.value = 1 + date.getMonth() + "/" + date.getDate() + "/" + date.getFullYear();
        }