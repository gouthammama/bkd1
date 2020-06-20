   
        function funValidations() {
          //  debugger;
            var errmsg = "";
            var vCompanyAddress = document.getElementById("id_Company").value;
            var vCustomer = document.getElementById("id_Customer").value;
            var Gender_M = document.getElementById("id_Gender_M").checked;
            var Gender_F = document.getElementById("id_Gender_F").checked;

            var vProduct_Selectbox = document.getElementById("id_Product").selectedIndex;
            var vStartDate_TextBox = document.getElementById("id_StartDate").value;
            var vDeliveryAddress_Textarea = document.getElementById("id_Delivery").value;
            var vDeliveryDate_TextBox = document.getElementById("id_DeliveryDate").value;
            var vIVRecord = document.getElementById("id_Record").checked;
            var vWeight = document.getElementById("id_Weight").value;
            var vDiscount = document.getElementById("id_Discount").value;
            var vCardNumber = document.getElementById("id_cardNumber").value;

            if (vCompanyAddress == "")
                errmsg += "Please Enter Company Address<br>";


            if (vCustomer == "")
                errmsg += "Please Fill Name of the Customer<br>";

            if (((Gender_M == false) && (Gender_F == false)))
                errmsg += "Please Select Gender<br>";

            if (vProduct_Selectbox == "0")
                errmsg += "Please Choose Product<br>";

            if (vStartDate_TextBox == "")
                errmsg += "Please Enter Start Date<br>";

            if (vDeliveryAddress_Textarea == "")
                errmsg += "Please Enter Delivery Address<br>";

            if (vDeliveryDate_TextBox == "")
                errmsg += "Please Enter Delivery Date<br>";

        /*    if (vIVRecord == "")
                errmsg += "Please Select Individual Vehicle Record<br>";  */

            if (vWeight == "")
                errmsg += "Please Enter Weight<br>";

       /*     if (vDiscount == "")
                errmsg += "Please Enter Discount Value<br>";   */

            if (vCardNumber == "")
                //errmsg += "Please Enter Credit Card Number<br>";      
          { }
         else {
                     var myRegExp = /^[0-9]{4,4}\s[0-9]{4,4}\s[0-9]{4,4}\s[0-9]{4,4}$/; //creditcard validations

            var crecard = document.getElementById("id_cardNumber").value;

            var card = crecard.match(myRegExp);
            if (card == null) {
                errmsg += "Please Enter Card Number in given foramt<br>";
            }

}
            if (document.getElementById("id_StartDate").value > document.getElementById("id_DeliveryDate").value) {
                errmsg += "Delivery date should be greater than Start date<br>";

            }
    /*        var myRegExp = /^[0-9]{4,4}\s[0-9]{4,4}\s[0-9]{4,4}\s[0-9]{4,4}$/; //creditcard validations

            var crecard = document.getElementById("id_cardNumber").value;

            var card = crecard.match(myRegExp);
            if (card == null) {
                errmsg += "Please Enter 16 Digits<br>";
            }
            else { }    */

            var lblavailablerec = document.getElementById("label1").innerHTML;

            if (errmsg == "") {


                var vCustomer = document.getElementById("id_Customer").value;
                // var vCompanyAddress_Textarea = document.getElementById("id_Company").value;
                var Gender_M = document.getElementById("id_Gender_M").checked;
                var Gender_F = document.getElementById("id_Gender_F").checked;

                var vProduct_Selectbox = document.getElementById("id_Product").value;
                var vStartDate_TextBox = document.getElementById("id_StartDate").value;
                var vDeliveryAddress_Textarea = document.getElementById("id_Delivery").value;
                var vDeliveryDate_TextBox = document.getElementById("id_DeliveryDate").value;
                var vIVRecord = document.getElementById("id_Record").checked;
                if (vIVRecord == true) {
                    vIVRecord = "Yes";
                }
                else { vIVRecord="No"}

                var vCost = document.getElementById("lbl1").innerHTML;

                var vWeight = document.getElementById("id_Weight").value;
                var vDiscount = document.getElementById("id_Discount").value;
                var vCardNumber = document.getElementById("id_cardNumber").value;
                var vTotalCost = document.getElementById("id_TotalCost").innerHTML;
                


                //document.getElementById("id_Label").innerHTML = "";
                vTableObject = document.getElementById("table_Grid");
                vRowLength = vTableObject.rows.length;
                vNewRow = vTableObject.insertRow(vRowLength);
                var vNewCell_E = vNewRow.insertCell(0);
                vNewCell_E.align = "middle";
                vNewCell_E.innerHTML = "<img src='images/Edit.gif' id='img_" +vRowLength+"' class='changeImage' onclick='javascript:return funEdit(this)'>";


                var vNewCell_D = vNewRow.insertCell(1);
                vNewCell_D.align = "middle";
                vNewCell_D.innerHTML = "<img src='images/Delete.gif' id='del_" + vRowLength + "' class='changeImage' onclick='javascript:return funDelete(this)'/>";

               vNewCell_1 = vNewRow.insertCell(2);
               vNewCell_1.innerHTML = document.getElementById("id_Customer").value;



                if (Gender_M == true) {
                   vNewCell_2 = vNewRow.insertCell(3);
                    vNewCell_2.innerHTML = document.getElementById("id_Gender_M").value;
                }
                else 
                {
                    vNewCell_2 = vNewRow.insertCell(3);
                    vNewCell_2.innerHTML = document.getElementById("id_Gender_F").value;
                }
                vNewCell_3 = vNewRow.insertCell(4);
                vNewCell_3.innerHTML = vProduct_Selectbox;

                vNewCell_4 = vNewRow.insertCell(5);
                vNewCell_4.align = "center";
                vNewCell_4.innerHTML = vStartDate_TextBox;

                 vNewCell_5 = vNewRow.insertCell(6);
                vNewCell_5.innerHTML = vDeliveryAddress_Textarea;

                vNewCell_6 = vNewRow.insertCell(7);
                vNewCell_6.align = "center";
                vNewCell_6.innerHTML = vDeliveryDate_TextBox;

                vNewCell_7 = vNewRow.insertCell(8);
                vNewCell_7.innerHTML = vIVRecord;

                vNewCell_8 = vNewRow.insertCell(9);
                vNewCell_8.align = "right";
                vNewCell_8.innerHTML = vCost;

                vNewCell_9 = vNewRow.insertCell(11);
                vNewCell_9.align = "right";
                vNewCell_9.innerHTML = vDiscount;

                vNewCell_10 = vNewRow.insertCell(10);
                vNewCell_10.align = "right";
                vNewCell_10.innerHTML = vWeight;

                vNewCell_11 = vNewRow.insertCell(12);
                vNewCell_11.align = "right";
                vNewCell_11.innerHTML = vTotalCost;

                 vNewCell_12 = vNewRow.insertCell(13);
                 vNewCell_12.innerHTML = vCardNumber;
                 vNewCell_12.align = "right";
                 document.getElementById("label1").innerHTML = parseFloat(lblavailablerec) + 1;


                 //Clear aftr submition
                 document.getElementById("id_Customer").value = "";
                 var Gender_M = document.getElementById("id_Gender_M").checked = true;

                 document.getElementById("id_Product").selectedIndex = "Select";
                 // document.getElementById("id_StartDate").value = "";
                 document.getElementById("id_Delivery").value = "";
                 document.getElementById("id_DeliveryDate").value = "";
                 document.getElementById("id_Record").checked = false;
                 document.getElementById("lbl1").innerHTML = "";
                 document.getElementById("id_Weight").value = "";
                 document.getElementById("id_Discount").value = "";
                 document.getElementById("id_TotalCost").innerHTML = "";
                 document.getElementById("id_cardNumber").value = "";
                 document.getElementById("id_Label").innerHTML = "";
            }
            else {
                document.getElementById("id_Label").innerHTML = errmsg;
            }

           
           
                       
        }





        function AllowAlphabetsAndNumeric(evt) {
            //alert("Hai");
          //  debugger;
           // document.getElementById("id_Label").innerHTML = "onkeypress event fired..!";
            var charCode = (evt.which) ? evt.which : event.keyCode;
            if (navigator.appName == "Netscape") {
                if ((charCode < 48) || (charCode > 57 && charCode < 65) || (charCode > 90 && charCode < 97) || (charCode > 122) ||                (charCode == 32)) {
                    if (charCode != 8) {
                        charCode = 0;
                        return false;
                    }
                    else {
                        return true;
                    }
                }
            }
            else {
                if ((event.keyCode < 48) || (event.keyCode > 57 && event.keyCode < 65) || (event.keyCode > 90 && event.keyCode < 97) ||                   (event.keyCode > 122) || (event.keyCode = 32)) {
                    if (event.keyCode != 13) {
                        event.keyCode = 0;
                        return false;
                    }
                    else {
                        return true;
                    }
                }
            } //end else
        } //end function

//Function Accept Numbers only
        function funNum(evt) {

            var charCode = (evt.which) ? evt.which : event.keyCode;
            if ((charCode >= 48 && charCode <= 57) || (charCode == 32) || (charCode == 9) || (charCode == 8)) {
                return true;
            }
            else {
                return false;
            }
        }



            function funWeight(evt) {
                var num2 = (evt.which) ? evt.which : evt.keyCode;


                if ((num2 >= 48 && num2 <= 57) || (num2 == 9) || (num2 == 8)) {
                    return true;
                }
                else {
                    alert('Enter Numbers only!');
                    return false;
                }
            }


            function funEdit(obj) {
                // debugger;

                var table = document.getElementById("table_Grid");
                var rowCount = table.rows.length;
                var rowNumber = obj.parentNode.parentNode.rowIndex;
                 var agree = confirm("Are you sure you wish to Edit?");
                 if (agree) {
                     if (parseInt(document.getElementById("table_Grid").rows.length) > 0) {
                        // alert("");
                         document.getElementById("id_Customer").value = table.rows[rowNumber].cells[2].innerHTML;

                         var chbox = table.rows[rowNumber].cells[3].innerHTML;
                         if (chbox == "Male") {
                             document.getElementById("id_Gender_M").checked = true;
                         }
                         else {
                             document.getElementById("id_Gender_F").checked = true;
                         }

                         document.getElementById("id_Product").value = table.rows[rowNumber].cells[4].innerHTML;
                         document.getElementById("id_StartDate").value = table.rows[rowNumber].cells[5].innerHTML;
                         document.getElementById("id_Delivery").value = table.rows[rowNumber].cells[6].innerHTML;
                         document.getElementById("id_DeliveryDate").value = table.rows[rowNumber].cells[7].innerHTML;

                         document.getElementById("lbl1").innerHTML = table.rows[rowNumber].cells[9].innerHTML;

                         document.getElementById("id_Discount").value = table.rows[rowNumber].cells[11].innerHTML;
                         document.getElementById("id_Weight").value = table.rows[rowNumber].cells[10].innerHTML;
                         document.getElementById("id_TotalCost").innerHTML = table.rows[rowNumber].cells[12].innerHTML;

                         document.getElementById("id_cardNumber").value = table.rows[rowNumber].cells[13].innerHTML;


                         var vIVRecord1 = table.rows[rowNumber].cells[8].innerHTML;
                         if (vIVRecord1 == "Yes") {
                             document.getElementById("id_Record").checked = true;
                         }
                     }
                        document.getElementById("lblchange").innerHTML = "<input type='button' value='Update' class='button' id='uda-' onblur='javascript:return funBlur()' onclick='javascript:return update(" + rowNumber + ")'>";
                        document.getElementById("id_Clear").innerHTML = "<input type='button' value='Reset' class='button' id='uda1-' onclick='javascript:return funReset(" + rowNumber + ")'>";
                        document.getElementById("id_Label").innerHTML = "";
                 }
                
            }



            function update(obj) {


            var errmsg = "";
            var vCompanyAddress = document.getElementById("id_Company").value;
            var vCustomer = document.getElementById("id_Customer").value;
            var Gender_M = document.getElementById("id_Gender_M").checked;
            var Gender_F = document.getElementById("id_Gender_F").checked;

            var vProduct_Selectbox = document.getElementById("id_Product").selectedIndex;
            var vStartDate_TextBox = document.getElementById("id_StartDate").value;
            var vDeliveryAddress_Textarea = document.getElementById("id_Delivery").value;
            var vDeliveryDate_TextBox = document.getElementById("id_DeliveryDate").value;
            var vIVRecord = document.getElementById("id_Record").checked;
            var vIv = document.getElementById("id_Record").value;
        /*    if (vIVRecord == "Yes") {
                vIVRecord = true;
            }
            else {vIVRecord = false; }  */
            var vCostForItem=document.getElementById("lbl1").innerHTML;
            var vWeight = document.getElementById("id_Weight").value;
            var vDiscount = document.getElementById("id_Discount").value;
            var vTotalcost=document.getElementById("id_TotalCost").innerHTML;
            var vCardNumber = document.getElementById("id_cardNumber").value;

            if (vCompanyAddress == "")
                errmsg += "Please Enter Company Address<br>";


            if (vCustomer == "")
                errmsg += "Please Fill Name of the Customer<br>";

            if (((Gender_M == false) && (Gender_F == false)))
                errmsg += "Please Select Gender<br>";

            if (vProduct_Selectbox == "0")
                errmsg += "Please Choose Product<br>";

            if (vStartDate_TextBox == "")
                errmsg += "Please Enter Start Date<br>";

            if (vDeliveryAddress_Textarea == "")
                errmsg += "Please Enter Delivery Address<br>";

            if (vDeliveryDate_TextBox == "")
                errmsg += "Please Enter Delivery Date<br>";

        /*    if (vIVRecord == "")
                errmsg += "Please Select Individual Vehicle Record<br>";   */

            if (vWeight == "")
                errmsg += "Please Enter Weight<br>";

    /*        if (vDiscount == "")
                errmsg += "Please Enter Discount Value<br>";   */

              if (vCardNumber == "")
                //errmsg += "Please Enter Credit Card Number<br>";      
          { }
         else {
                     var myRegExp = /^[0-9]{4,4}\s[0-9]{4,4}\s[0-9]{4,4}\s[0-9]{4,4}$/; //creditcard validations

            var crecard = document.getElementById("id_cardNumber").value;

            var card = crecard.match(myRegExp);
            if (card == null) {
                errmsg += "Please Enter 16 Digits<br>";
            }
}

  /*           if (vCardNumber == "")
                errmsg += "Please Enter Credit Card Number<br>";     */

            if (document.getElementById("id_StartDate").value > document.getElementById("id_DeliveryDate").value) {
                errmsg += "Delivery date should be greater than Start date<br>";

            }
     /*       var myRegExp = /^[0-9]{4,4}\s[0-9]{4,4}\s[0-9]{4,4}\s[0-9]{4,4}$/; //creditcard validations

            var crecard = document.getElementById("id_cardNumber").value;

            var card = crecard.match(myRegExp);
            if (card == null) {
                errmsg += "Please Enter 16 Digits<br>";
            }
            else { }     */

            var lblavailablerec = document.getElementById("label1").innerHTML;

            if (errmsg == "") {

         
                var table = document.getElementById("table_Grid");
                var rowCount = table.rows.length;
                var rowNumber = parseInt(obj);
               // alert(rowNumber);
                table.rows[rowNumber].cells[2].innerHTML = document.getElementById("id_Customer").value;
                var Gender_M = document.getElementById("id_Gender_M").checked;
                var Gender_F = document.getElementById("id_Gender_F").checked;
                if (Gender_M == true) {
                    table.rows[rowNumber].cells[3].innerHTML= document.getElementById("id_Gender_M").value;
                }
                else {
                    table.rows[rowNumber].cells[3].innerHTML = document.getElementById("id_Gender_F").value;
                }

                table.rows[rowNumber].cells[4].innerHTML = document.getElementById("id_Product").value;
                table.rows[rowNumber].cells[5].innerHTML = document.getElementById("id_StartDate").value;
                table.rows[rowNumber].cells[6].innerHTML = document.getElementById("id_Delivery").value;
                table.rows[rowNumber].cells[7].innerHTML = document.getElementById("id_DeliveryDate").value;
                var vIVRecord = document.getElementById("id_Record").checked;
                //var vIv = document.getElementById("id_Record").value;
                if (vIVRecord == true) {
                    table.rows[rowNumber].cells[8].innerHTML = "Yes";
                }
                else {
                    table.rows[rowNumber].cells[8].innerHTML = "No";
                }

               // table.rows[rowNumber].cells[8].innerHTML = document.getElementById("id_Record").value;  
                table.rows[rowNumber].cells[9].innerHTML = document.getElementById("lbl1").innerHTML;
                table.rows[rowNumber].cells[11].innerHTML = document.getElementById("id_Discount").value;
                table.rows[rowNumber].cells[10].innerHTML = document.getElementById("id_Weight").value;
                table.rows[rowNumber].cells[12].innerHTML = document.getElementById("id_TotalCost").innerHTML;
                table.rows[rowNumber].cells[13].innerHTML = document.getElementById("id_cardNumber").value;

                document.getElementById("lblchange").innerHTML = "<input type='button' value='Submit' class='button' id='uda-' onblur='javascript:return funBlur()' onclick='javascript:return funValidations(this)'>";
                document.getElementById("id_Clear").innerHTML = "<input type='button' value='Clear' class='button' id='uda1-' onclick='javascript:return funClear()'>";
                document.getElementById("id_Customer").value = "";
                // var vCompanyAddress_Textarea = document.getElementById("id_Company").value;
                var Gender_M = document.getElementById("id_Gender_M").checked = true;

                document.getElementById("id_Product").selectedIndex = "Select";
                // document.getElementById("id_StartDate").value = "";
                document.getElementById("id_Delivery").value = "";
                document.getElementById("id_DeliveryDate").value = "";
                document.getElementById("id_Record").checked = false;
                document.getElementById("lbl1").innerHTML = "";
                document.getElementById("id_Weight").value = "";
                document.getElementById("id_Discount").value = "";
                document.getElementById("id_TotalCost").innerHTML = "";
                document.getElementById("id_cardNumber").value = "";
                document.getElementById("id_Label").innerHTML = "";

           

             }
            else {
                document.getElementById("id_Label").innerHTML = errmsg;
            }
        }
            


        function funReset(eve) {


            var table = document.getElementById("table_Grid");
            var rowCount = table.rows.length;
            var rowNumber = parseInt(eve);
            // alert(rowNumber);
            if (parseInt(document.getElementById("table_Grid").rows.length) > 0) {
                // alert("");
                document.getElementById("id_Customer").value = table.rows[rowNumber].cells[2].innerHTML;

                var chbox = table.rows[rowNumber].cells[3].innerHTML;
                if (chbox == "Male") {
                    document.getElementById("id_Gender_M").checked = true;
                }
                else {
                    document.getElementById("id_Gender_F").checked = true;
                }

                document.getElementById("id_Product").value = table.rows[rowNumber].cells[4].innerHTML;
                document.getElementById("id_StartDate").value = table.rows[rowNumber].cells[5].innerHTML;
                document.getElementById("id_Delivery").value = table.rows[rowNumber].cells[6].innerHTML;
                
                document.getElementById("id_DeliveryDate").value = table.rows[rowNumber].cells[7].innerHTML;


                var a = table.rows[rowNumber].cells[8].innerHTML;
                if (a == "Yes") {
                    document.getElementById("id_Record").checked = true;
                }
                else {
                    document.getElementById("id_Record").checked = false;
                }
                
                document.getElementById("lbl1").innerHTML = table.rows[rowNumber].cells[9].innerHTML;

                document.getElementById("id_Weight").value = table.rows[rowNumber].cells[10].innerHTML;
                document.getElementById("id_Discount").value = table.rows[rowNumber].cells[11].innerHTML;
                document.getElementById("id_TotalCost").value = table.rows[rowNumber].cells[12].innerHTML;

                document.getElementById("id_cardNumber").value = table.rows[rowNumber].cells[13].innerHTML;


                var vIVRecord1 = table.rows[rowNumber].cells[8].innerHTML;
                if (vIVRecord1 == "true") {
                    document.getElementById("id_Record").checked = true;
                }
            }
                   document.getElementById("id_Label").innerHTML = "";
        }



            function funClear() {
                document.getElementById("id_Customer").value = "";
                // var vCompanyAddress_Textarea = document.getElementById("id_Company").value;
                var Gender_M = document.getElementById("id_Gender_M").checked = true;

                document.getElementById("id_Product").selectedIndex = "Select";
               // document.getElementById("id_StartDate").value = "";
                 document.getElementById("id_Delivery").value = "";
                document.getElementById("id_DeliveryDate").value = "";
                document.getElementById("id_Record").checked = false;
                document.getElementById("lbl1").innerHTML="";
                 document.getElementById("id_Weight").value = "";
                document.getElementById("id_Discount").value = "";
                 document.getElementById("id_cardNumber").value = "";
                 document.getElementById("id_TotalCost").innerHTML = "";
                 document.getElementById("id_Label").innerHTML = "";
             }


             function funStartTime() {
                 var today = new Date();
                 var dd = today.getDate();
                 var mm = today.getMonth() + 1; //January is 0!
                 var yyyy = today.getFullYear();
                 document.getElementById("id_StartDate").value = +yyyy + '-' + '0' + mm + '-' + '0' + dd;
             }



 /*            function funDelete(obj) {
                 debugger;
                 //   alert(rowId);
                 var lblavailablerec = document.getElementById("label1").innerHTML;
                 var table = document.getElementById("table_Grid");
                 var rowCount = table.rows.length;
                 var rowNumber = obj.parentNode.parentNode.rowIndex;
                // alert(rowNumber);
                 var agree = confirm("Are you sure you wish to delete?");
                 if (agree) {
                     if (parseInt(document.getElementById("table_Grid").rows.length) > 0) {
                         document.getElementById("table_Grid").deleteRow(rowNumber);
                         document.getElementById("label1").innerHTML = parseFloat(lblavailablerec) - 1;

                     }

                 }
                 
             }  */

    function funDelete(obj) {


            var lblavailablerec = document.getElementById("label1").innerHTML;
            var table = document.getElementById("table_Grid");
         var rowCount = table.rows.length;
           var rowNumber = obj.parentNode.parentNode.rowIndex;
           var agree = confirm("Are you sure you wish to delete?");
                 if (agree) {
        if ((document.getElementById("id_cardNumber").value) == (table.rows[rowNumber].cells[13].innerHTML)) {
            alert("Please the update the record");
        }
        else {

            if (parseInt(document.getElementById("table_Grid").rows.length) > 0) {
                document.getElementById("table_Grid").deleteRow(rowNumber);
                 document.getElementById("label1").innerHTML = parseFloat(lblavailablerec) - 1;
            }
}
            
        }

    }  



                 function funDiscount() {
                     //  alert("Hai");
                     if (document.getElementById("id_Product").value == "Select") {
                         document.getElementById("lbl1").innerHTML = "";
                     }

                     if (document.getElementById("id_Product").value == "Anchor")
                     {
                     document.getElementById("lbl1").innerHTML=100;
                     
                     }
                    if (document.getElementById("id_Product").value == "Colgate")
                          {
                     document.getElementById("lbl1").innerHTML=200;

                 }

                 if (document.getElementById("id_Product").value == "pepsodent") {
                     document.getElementById("lbl1").innerHTML = 300;
                     
                 }

             }
             

             function funBlur() {

                     var vCostForItem = document.getElementById("lbl1").innerHTML;
                     var vWeight = document.getElementById("id_Weight").value;
                     var vDiscount = document.getElementById("id_Discount").value;
                     if (vDiscount > 100) {
                         alert("Discount value not exceed the 100");
                     }
                     else {
                         var vTotalCost = eval(vCostForItem * vWeight-vCostForItem * vWeight * (vDiscount / 100));
                         document.getElementById("id_TotalCost").innerHTML = vTotalCost;
                     }
                 }


                 function max(evt) {

                     var num2 = (evt.which) ? evt.which : evt.keyCode;


                     if ((num2 >= 65 && num2 <= 90) || (num2 >= 97 && num2 <= 122)||(num2 == 9) || (num2 == 8)) {
                         return true;
                     }
                     else {
                        
                         return false;
                     }

                 }

                 function funCancel() {

                     window.close();
                 }

   
