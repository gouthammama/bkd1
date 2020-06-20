 
        function gtime() {                  /**********Dispalys the time when web page is onloaded**********/
            var today = new Date();
            var dd = today.getDate();
            var mm = today.getMonth() + 1;
            var yyyy = today.getFullYear();
            document.getElementById("indate").value = dd + '-' + mm + '-' + yyyy;
         
                }

       function addVal(){                           //*******************For adding the customer details**************************//
               
            var errorMsg = "";
      
            var customername = document.getElementById("cn").value;
            if (customername == "") 
            {
              errorMsg += "Please Enter Customer Name<br/>";
            }
            var customerid = document.getElementById("ci").value;
            var gender = document.getElementById("gender").value;
            var male = document.getElementById("m").checked;
            var female = document.getElementById("f").checked;
             if ((male = false) && (female = false))
            {
            errorMsg += "please enter gender<br/>";
            }
            var address = document.getElementById("address").value;

            var state = document.getElementById("sel").selectedIndex;
             if (document.getElementById("sel").selectedIndex == 0)
             {
                errorMsg += "Please Select State Name<br/>";
             }

            var telugu = document.getElementById("t").checked;
             var english = document.getElementById("e").checked;
             var hindi = document.getElementById("h").checked;

             /*  if ((telugu == false) && (hindi == false) && (english == false)) 
             {
             errorMsg += "plese select language<br/>";
             }*/

            var passportnum = document.getElementById("p").value;
            if (passportnum == "") {
                errorMsg += "Please Enter Passport Number<br/>";

            } else {
                var plen = document.getElementById("p").value;
                if (plen.length != 9) {
                    errorMsg += "Please Enter 9 Digit Passport Number<br>";
                }
            }
            var mobile = document.getElementById("mbn").value;
            if (mobile == "") 
            {
              errorMsg += "Please Enter Mobile Number<br/>";

          } else            
            {
                var mlen = document.getElementById("mbn").value;
               
            if (mlen.length != 10)
                  {
                errorMsg += "Please Enter 10 Digit Mobile Number<br>";
                 }
        }
       
           /* if (mlen == "0000000000") {

                alert("wrong number");
            }*/
            var pne = document.getElementById("phn").value;

            if (pne.length != 10) {
                errorMsg += "Please Enter Phone Number<br/>";
            }
          
            var indate = document.getElementById("indate").value;
            var outdate = document.getElementById("PickupDate").value;
            if (outdate == "") 
         {
            errorMsg += "Please Enter Check Out Date<br/>";

         }
            var indate = document.getElementById("indate").value;

            var outdate = document.getElementById("PickupDate").value;
            var idate = indate.split("-");
            var day1 = idate[0];
            var month1 = idate[1];
            var year1 = idate[2];
            var odate = outdate.split("-");
            var day2 = odate[0];
            var month2 = odate[1];
            var year2 = odate[2];
            if (parseFloat(year2) > parseFloat(year1)) 
            {

                errorMsg += "Duration Should Be Less Than One Year(365days).<br/> Please Re Enter The ChekOut Date<br/>";
            
            }
           
             var duration = document.getElementById("duration").innerHTML;
             var roomtype = document.getElementById("sel2").selectedIndex;
            if (roomtype == 0) 
            {
                errorMsg += "Please Select Room Type<br/>";
            
            } if (roomtype == 1)
             {

            document.getElementById("lbl").innerHTML = "1000";
            
            }
            var romnum = document.getElementById("sel3").selectedIndex;

            if (romnum == 0)
             {
                errorMsg += "Please Select Room Number <br/>";
             
            }
            var bf = document.getElementById("bf").checked;
            var lunch = document.getElementById("lunch").checked;
            var dinner = document.getElementById("dinner").checked;
            var snacks = document.getElementById("snacks").checked;
            var paper = document.getElementById("paper").checked;
        
            var total = document.getElementById("total").value;
           
        
            var advanceperiod = document.getElementById("ap").value;
            if (advanceperiod == "")
             {
                errorMsg += "Please Pnter Advance Paid<br/>";
             
            }

            var balance = document.getElementById("bal").value;
            var total = document.getElementById("total").value;

            var advanceperiod = document.getElementById("ap").value;

            var balance = document.getElementById("bal").value;

            document.getElementById("bal").value = total - advanceperiod;
            if (document.getElementById("bal").value < 0) 
            {

                document.getElementById("bal").value = "0";

            }
        
            var vallbl = document.getElementById("lblcount").innerHTML;

             if (errorMsg == "") 
            {
                var table = document.getElementById("tblgrid");
                var rowCount = table.rows.length;
                var row = table.insertRow(rowCount);
                var cell1 = row.insertCell(0);
                cell1.align = "center";
                cell1.width = "25px";
                cell1.innerHTML = "<img src='images/Edit.gif' class='img'alt='edit'id='img_" + rowCount + "' onclick='return editvalue(this)'/>";
                
                var cell2 = row.insertCell(1);
                cell2.align = "center";
                cell1.width = "25px";
                cell2.innerHTML = "<img src='images/imgDelete.gif' class='img' alt='delete' id='dlt_" + rowCount + "' onclick='return funDelete(this)'/>";
                var cell3 = row.insertCell(2);
                var customername = document.getElementById("cn").value;
                cell3.align = "left";
                cell3.className = "lblfont";
                cell3.innerHTML = customername;
              
                var cell4 = row.insertCell(3);
                var customerid = document.getElementById("ci").innerHTML;
                cell4.align = "right";
                cell4.className = "lblfont";
                cell4.innerHTML = customerid;
                var cell5 = row.insertCell(4);
                cell5.align = "right";
                var male = document.getElementById("m").checked;

                if (male == true) 
                {
                    cell5.align = "left";
                    cell5.className = "lblfont";
                    cell5.innerHTML = document.getElementById("m").value;
                   
                }
                else if (female == true)
                 {
                    cell5.align = "left";
                    cell5.className = "lblfont";
                    cell5.innerHTML = document.getElementById("f").value;
                }

                var cell6 = row.insertCell(5);
                var address = document.getElementById("address").value;
                cell6.align = "left";
                cell6.width = "100%";
                cell6.className = "lblfont";
                cell6.innerHTML = address;

                var cell7 = row.insertCell(6);
                cell7.className = "lblfont";
                var state = document.getElementById("sel").selectedIndex;
                if (document.getElementById("sel").selectedIndex != 0)
                 {
                    if (document.getElementById("sel").selectedIndex == 1) {
                        cell7.align = "left";
                        cell7.className = "lblfont";
                        cell7.innerHTML = document.getElementById("a").value;
                    } 
                    else if (document.getElementById("sel").selectedIndex == 2)
                     {
                         cell7.align = "left";
                         cell7.className = "lblfont";
                        cell7.innerHTML = document.getElementById("mp").value;
                    }
                }

                var cell8 = row.insertCell(7);
                cell8.className = "lblfont";
                var language = document.getElementById("lan").value;
                if (telugu == true) {
                    cell8.className = "lblfont";
                    cell8.innerHTML = document.getElementById("t").value;
                }
                 if (hindi == true) {
                     cell8.className = "lblfont";
                    cell8.innerHTML = document.getElementById("h").value;
                }
                if (english == true) {
                    cell8.className = "lblfont";
                    cell8.innerHTML = document.getElementById("e").value;
                }
                if ((english == true) && (hindi == true)) {
                    cell8.className = "lblfont";
                    cell8.innerHTML = document.getElementById("e").value + "<br/>" + document.getElementById("h").value;
                }
                if ((english == true) && (telugu == true)) {
                    cell8.className = "lblfont";
                    cell8.innerHTML = document.getElementById("e").value + "<br/>" + document.getElementById("t").value;
                }
                if ((hindi == true) && (telugu == true)) {
                    cell8.className = "lblfont";
                    cell8.innerHTML = document.getElementById("h").value + "<br/>" + document.getElementById("t").value;
                }
                if ((hindi == true) && (telugu == true)&&(english==true)) {
                    cell8.className = "lblfont";
                    cell8.innerHTML = document.getElementById("h").value + "<br/>" + document.getElementById("t").value + "<br/>" + document.getElementById("e").value;
                }
                var cell9 = row.insertCell(8);
                var passportnum = document.getElementById("p").value;
                cell9.align = "right";
                cell9.className = "lblfont";
                cell9.innerHTML = passportnum;
                var cell10 = row.insertCell(9);
                var mobile = document.getElementById("mbn").value;
                cell10.align = "right";
                cell10.className = "lblfont";
                cell10.innerHTML = mobile;
                var cell11 = row.insertCell(10);
                var pne = document.getElementById("phn").value;
                cell11.align = "right";
                cell11.className = "lblfont";
                cell11.innerHTML = pne;
                var cell12 = row.insertCell(11);
                var indate = document.getElementById("indate").value;
                cell12.align = "center";
                cell12.className = "lblfont";
                cell12.innerHTML = indate;
                var cell13 = row.insertCell(12);
                var outdate = document.getElementById("PickupDate").value;
                cell13.align = "center";
                cell13.className = "lblfont";
                cell13.innerHTML = outdate;
                var cell14 = row.insertCell(13);
                var duration = document.getElementById("duration").innerHTML;
                cell14.align = "right";
                cell14.className = "lblfont";
               cell14.innerHTML = duration;
                var cell15 = row.insertCell(14);
                var roomtype = document.getElementById("sel2").selectedIndex;
                if (document.getElementById("sel2").selectedIndex != 0)
                 {
                    if (document.getElementById("sel2").selectedIndex == 1) {
                        cell15.align = "right";
                       // cell15.width = "200px";
                        cell15.className = "lblfont";
                        cell15.innerHTML = document.getElementById("single").value;
                    } 
                    else if (document.getElementById("sel2").selectedIndex == 2) 
                    {
                        cell15.align = "right";
                        cell15.className = "lblfont";
                        cell15.innerHTML = document.getElementById("double").value;
                    }
                }
                var cell16 = row.insertCell(15);
                var romnum = document.getElementById("sel3").selectedIndex;
                if (document.getElementById("sel2").selectedIndex != 0)
                 {
                    if (document.getElementById("sel2").selectedIndex == 1) {
                        cell16.align = "right";
                        cell16.className = "lblfont";
                        cell16.innerHTML = document.getElementById("1").value;
                    } 
                    else if (document.getElementById("sel2").selectedIndex == 2)
                     {
                         cell16.align = "right"; 
                         cell16.className = "lblfont";
                        cell16.innerHTML = document.getElementById("2").value;
                    }
                }

                var cell17 = row.insertCell(16);
                var facilities = document.getElementById("facilities").value;
                var bf = document.getElementById("bf").checked;
                             
                if (bf == true) {
                    cell17.className = "lblfont";
                    cell17.innerHTML = document.getElementById("bf").value;
                }
                var lunch = document.getElementById("lunch").checked;
                var dinner = document.getElementById("dinner").checked;
                var snacks = document.getElementById("snacks").checked;
                var paper = document.getElementById("paper").checked;
                var bf2 = document.getElementById("bf").value;
                var lunch2 = document.getElementById("lunch").value;
                var dinner2 = document.getElementById("dinner").value;
                var snacks2 = document.getElementById("snacks").value;
                var paper2 = document.getElementById("paper").value;
                if (lunch == true) {
                    cell17.className = "lblfont";
                    cell17.innerHTML = document.getElementById("lunch").value;
                }
                if (dinner == true) {
                    cell17.className = "lblfont";
                    cell17.innerHTML = document.getElementById("dinner").value;
                }
                if (snacks == true) {
                    cell17.className = "lblfont";
                    cell17.innerHTML = document.getElementById("snacks").value;
                }
                if (paper == true) {
                    cell17.className = "lblfont";
                    cell17.innerHTML = document.getElementById("paper").value;
                }
                if ((lunch == true) && (dinner == true)) {
                    cell17.className = "lblfont";
                    cell17.innerHTML =dinner2+""+lunch2;
                }
                if ((lunch == true) && (snacks == true)) {
                    cell17.className = "lblfont";
                    cell17.innerHTML = snacks2 + "" + lunch2;
                }
                if ((lunch == true) && (paper == true)) {
                    cell17.className = "lblfont";
                    cell17.innerHTML = paper2+ "" + lunch2;
                }
                if ((lunch == true) && (bf == true)) {
                    cell17.className = "lblfont";
                    cell17.innerHTML = bf2 + "" + lunch2;
                }
                if ((snacks == true) && (dinner == true)) {
                    cell17.className = "lblfont";
                    cell17.innerHTML = dinner2 + "" + snacks2;
                }
                if ((paper == true) && (dinner == true)) {
                    cell17.className = "lblfont";
                    cell17.innerHTML = dinner2 + "" + paper2;
                }
                if ((bf == true) && (dinner == true)) {
                    cell17.className = "lblfont";
                    cell17.innerHTML = dinner2 + "" + bf2;
                }
                if ((bf == true) && (dinner == true) && (lunch == true)) {
                    cell17.className = "lblfont";
                    cell17.innerHTML = dinner2 + "<br/>" + lunch2 + "<br/>" + bf2;
                }
                if ((bf == true) && (dinner == true) && (lunch == true) && (snacks == true)) {
                    cell17.className = "lblfont";
                    cell17.innerHTML = dinner2 + "<br/>" + lunch2 + "<br/>" + snacks2 + "<br/>" + bf2;
                }
                if ((bf == true) && (dinner == true) && (lunch == true) && (snacks == true) && (paper == true)) {
                    cell17.className = "lblfont";
                    cell17.innerHTML = dinner2 + "<br/>" + lunch2 + "<br/>" + snacks2 + "<br/>" + paper2 + "<br/>" + bf2;
                }
          
                var cell18 = row.insertCell(17);
                var total = document.getElementById("total").value;
                cell18.align = "right";
                cell18.className = "lblfont";
                cell18.innerHTML = total;

                var cell19 = row.insertCell(18);
                var advanceperiod = document.getElementById("ap").value;
                cell19.align = "right";
                cell19.className = "lblfont";
                cell19.innerHTML = advanceperiod;

                var cell20 = row.insertCell(19);
                var balance = document.getElementById("bal").value;
                cell20.align = "right";
                cell20.className = "lblfont";
                cell20.innerHTML = balance;
                document.getElementById("cn").value = "";
                var a = document.getElementById("ci").innerHTML;
                document.getElementById("ci").innerHTML =parseFloat(a)+1; 
                document.getElementById("m").checked = true;
                document.getElementById("f").checked = "";
                document.getElementById("address").value = "";
                document.getElementById("sel").selectedIndex = "";
                document.getElementById("lan").value = "";
                document.getElementById("t").checked = true;
                document.getElementById("e").checked = "";
                document.getElementById("h").checked = "";
                document.getElementById("p").value = "";
                document.getElementById("mbn").value = "";
                document.getElementById("phn").value = "";
                document.getElementById("PickupDate").value = "";
                document.getElementById("sel2").selectedIndex = "";
                document.getElementById("sel3").selectedIndex = "";
                document.getElementById("facilities").value = "";
                document.getElementById("bf").checked = true;
                document.getElementById("lunch").checked = "";
                document.getElementById("dinner").checked = "";
                document.getElementById("snacks").checked = "";
                document.getElementById("paper").checked = "";
                document.getElementById("total").value = "";
                document.getElementById("ap").value = "";
                document.getElementById("bal").value = "";
                document.getElementById("duration").innerHTML = "";
                document.getElementById("lbl").innerHTML = "";
                document.getElementById("lblErrorMsg").innerHTML = "";
                document.getElementById("lblcount").innerHTML = parseFloat(vallbl) + 1;
            }
            else {

                document.getElementById("lblErrorMsg").innerHTML = errorMsg;
            }

        }

       function clearVal()                                 //********************To clear the cusomer details****************************//
         {

            document.getElementById("cn").value = "";
            document.getElementById("ci").value="";
            //document.getElementById("m").checked = "";
            document.getElementById("f").checked = "";
            document.getElementById("address").value = "";
            document.getElementById("sel").selectedIndex = "";
            document.getElementById("lan").value = "";
          //  document.getElementById("t").checked = "";
            document.getElementById("e").checked = "";
            document.getElementById("h").checked = "";
            document.getElementById("p").value = "";
            document.getElementById("mbn").value = "";
            document.getElementById("phn").value = "";
            document.getElementById("PickupDate").value = "";
            document.getElementById("sel2").selectedIndex = "";
            document.getElementById("sel3").selectedIndex = "";
            document.getElementById("facilities").value = "";
           // document.getElementById("bf").checked = "";
            document.getElementById("lunch").checked = "";
            document.getElementById("dinner").checked = "";
            document.getElementById("snacks").checked = "";
            document.getElementById("paper").checked = "";
            document.getElementById("total").value = "";
            document.getElementById("ap").value = "";
            document.getElementById("bal").value = "";
            document.getElementById("duration").innerHTML = "";
            document.getElementById("lbl").innerHTML = "";
            document.getElementById("lblErrorMsg").innerHTML = "";
        }
    

        function editvalue(eve) {                               //*****************To edit any other information of the customer details into database*******************************//
                                     
    var table = document.getElementById("tblgrid");
    var y = eve.parentNode.parentNode.rowIndex;
   
    if (parseInt(document.getElementById("tblgrid").rows.length) > 0) {
        
        document.getElementById("cn").value = table.rows[y].cells[2].innerHTML;
        document.getElementById("ci").innerHTML = table.rows[y].cells[3].innerHTML;
        var radio = table.rows[y].cells[4].innerHTML;
        if (radio == "Male")
        { document.getElementById("m").checked = true; }
        if (radio == "Female")
        { document.getElementById("f").checked = true; }
        document.getElementById("address").value = table.rows[y].cells[5].innerHTML;
        document.getElementById("sel").value = table.rows[y].cells[6].innerHTML;
        var lan = table.rows[y].cells[7].innerHTML;
        if (lan.match("Telugu"))
        { document.getElementById("t").checked = true; }
        if (lan.match("English"))
        { document.getElementById("e").checked = true; }
        if (lan.match("Hindi"))
        { document.getElementById("h").checked = true; }

        document.getElementById("p").value = table.rows[y].cells[8].innerHTML;
        document.getElementById("phn").value = table.rows[y].cells[10].innerHTML;
        document.getElementById("mbn").value = table.rows[y].cells[9].innerHTML;
        document.getElementById("indate").value = table.rows[y].cells[11].innerHTML;
        document.getElementById("PickupDate").value = table.rows[y].cells[12].innerHTML;
        document.getElementById("duration").innerHTML = table.rows[y].cells[13].innerHTML;
        document.getElementById("sel2").value = table.rows[y].cells[14].innerHTML;
        document.getElementById("sel3").value = table.rows[y].cells[15].innerHTML;
        var fac = table.rows[y].cells[16].innerHTML;
        if (fac.match("Lunch"))
        { document.getElementById("lunch").checked = true; }
        if (fac.match("Dinner"))
        { document.getElementById("dinner").checked = true; }

        if (fac.match("Breakfast"))
        { document.getElementById("bf").checked = true; }

        if (fac.match("Snacks"))
        { document.getElementById("snacks").checked = true; }
        if (fac.match("Paper"))
        { document.getElementById("paper").checked = true; }


        document.getElementById("total").value = table.rows[y].cells[17].innerHTML;
        document.getElementById("ap").value = table.rows[y].cells[18].innerHTML;
        document.getElementById("bal").value = table.rows[y].cells[19].innerHTML;
      
        document.getElementById("lblErrorMsg").innerHTML = "";
    }
    document.getElementById("addb").innerHTML = "<input type='button' class='button' id='btn_update' value='Update' onclick='javascript:return funUpdate(" + y + ")'/>";
    document.getElementById("clear2").innerHTML = "<input type='button' class='button' id='btn_reset' value='Reset' onclick='javascript:funReset(" + y + ")'/>"

        }

        function funReset(eve) {
            var table = document.getElementById("tblgrid");
            var y = parseInt(eve);
            document.getElementById("cn").value = table.rows[y].cells[2].innerHTML;
            document.getElementById("ci").innerHTML = table.rows[y].cells[3].innerHTML;
            var radio = table.rows[y].cells[4].innerHTML;
            if (radio == "Male")
            { document.getElementById("m").checked = true; }
            if (radio == "Female")
            { document.getElementById("f").checked = true; }
            document.getElementById("address").value = table.rows[y].cells[5].innerHTML;
            document.getElementById("sel").value = table.rows[y].cells[6].innerHTML;
           
           
            var chbopt = table.rows[y].cells[7].innerHTML;
            if (chbopt.match("English") || chbopt.match("Telugu") || chbopt.match("Hindi")) {
                if (chbopt.match("English")) {
                    document.getElementById("e").checked = true;
                }
                else {
                    document.getElementById("e").checked = false;
                }
                if (chbopt.match("Telugu")) {
                    document.getElementById("t").checked = true;
                }
                else {
                    document.getElementById("t").checked = false;
                }
                if (chbopt.match("Hindi")) {
                    document.getElementById("h").checked = true;
                }
                else {
                    document.getElementById("h").checked = false;
                }
            }
            else {
                document.getElementById("e").checked = false;
                document.getElementById("t").checked = false;
                document.getElementById("h").checked = false;
            }

       
            document.getElementById("p").value = table.rows[y].cells[8].innerHTML;
            document.getElementById("phn").value = table.rows[y].cells[10].innerHTML;
            document.getElementById("mbn").value = table.rows[y].cells[9].innerHTML;
          //  document.getElementById("indate").value = table.rows[y].cells[11].innerHTML;
            document.getElementById("PickupDate").value = table.rows[y].cells[12].innerHTML;
            document.getElementById("duration").innerHTML = table.rows[y].cells[13].innerHTML;
            document.getElementById("sel2").value = table.rows[y].cells[14].innerHTML;
            document.getElementById("sel3").value = table.rows[y].cells[15].innerHTML;
        

            var fac = table.rows[y].cells[16].innerHTML;
            if (fac.match("Lunch"))
            { document.getElementById("lunch").checked = true; }
            if (fac.match("Dinner"))
            { document.getElementById("dinner").checked = true; }

            if (fac.match("Breakfast"))
            { document.getElementById("bf").checked = true; }

            if (fac.match("Snacks"))
            { document.getElementById("snacks").checked = true; }
            if (fac.match("Paper"))
            { document.getElementById("paper").checked = true; }

            var fac = table.rows[y].cells[16].innerHTML;
            if ((fac.match("Lunch")) || (fac.match("Dinner")) || (fac.match("Breakfast")) || (fac.match("Snacks")) || (fac.match("Paper"))) {
                if (fac.match("Lunch")) {
                    document.getElementById("lunch").checked = true;
                }
                else {
                    document.getElementById("lunch").checked = false;
                }
                if (fac.match("Dinner")) {
                    document.getElementById("dinner").checked = true;
                }
                else {
                    document.getElementById("dinner").checked = false;
                }
                if (fac.match("Breakfast")) {
                    document.getElementById("bf").checked = true;
                }
                else {
                    document.getElementById("bf").checked = false;
                }
                if (fac.match("Snacks")) {
                    document.getElementById("snacks").checked = true;
                }
                else {
                    document.getElementById("snacks").checked = false;
                }
                if (fac.match("Paper")) {
                    document.getElementById("paper").checked = true;
                }
                else {
                    document.getElementById("paper").checked = false;
                }
            }
            else {
                document.getElementById("lunch").checked = false;
                document.getElementById("dinner").checked = false;
                document.getElementById("bf").checked = false;
                document.getElementById("snacks").checked = false;
                document.getElementById("paper").checked = false;
            }


            document.getElementById("total").value = table.rows[y].cells[17].innerHTML;
            document.getElementById("ap").value = table.rows[y].cells[18].innerHTML;
            document.getElementById("bal").value = table.rows[y].cells[19].innerHTML;

           
            document.getElementById("lblErrorMsg").innerHTML = "";
           
        }


      function funUpdate(eve) {
 
          var errorMsg = "";
       var customername = document.getElementById("cn").value;
       if (customername == "") {
           errorMsg += "please enter Customer Name<br/>";
       }
       var customerid = document.getElementById("ci").value;
       var gender = document.getElementById("gender").value;
       var male = document.getElementById("m").checked;
       var female = document.getElementById("f").checked;
     
       var state = document.getElementById("sel").selectedIndex;
       if (document.getElementById("sel").selectedIndex == 0) {
           errorMsg += "Please Select State Name<br/>";
       }

       var telugu = document.getElementById("t").checked;
       var english = document.getElementById("e").checked;
       var hindi = document.getElementById("h").checked;

   
       var passportnum = document.getElementById("p").value;
       if (passportnum == "") {
           errorMsg += "Please Enter Passport Number<br/>";

       } else {
           var plen = document.getElementById("p").value;
           if (plen.length != 9) {
               errorMsg += "Please Enter 9 Passport Number<br>";
           }
       }
       var mobile = document.getElementById("mbn").value;
       if (mobile == "") {
           errorMsg += "Please Enter mobile number<br/>";

       } else {
           var mlen = document.getElementById("mbn").value;
           if (mlen.length != 10) {
               errorMsg += "Please Enter 10 digit Mobile Number<br>";
           }
       }

       var pne = document.getElementById("phn").value;

       if (pne.length != 10) {
           errorMsg += "Please Enter 10 digit Phone Number<br>";
       } 
       var indate = document.getElementById("indate").value;
       var outdate = document.getElementById("PickupDate").value;
       if (outdate == "") {
           errorMsg += "Please Enter Outdate<br/>";

       }
       var indate = document.getElementById("indate").value;

       var outdate = document.getElementById("PickupDate").value;
       var idate = indate.split("-");
       var idate2 = idate[0];
       var odate = outdate.split("-");
       var odate2 = odate[0];
     //  document.getElementById("duration").innerHTML = (odate2 - idate2);
       var duration = document.getElementById("duration").innerHTML;
       var roomtype = document.getElementById("sel2").selectedIndex;
       if (roomtype == 0) {
           errorMsg += "Please Select Room Type<br/>";

       } if (roomtype == 1) {

           document.getElementById("lbl").innerHTML = "1000";

       }
       var romnum = document.getElementById("sel3").selectedIndex;

       if (romnum == 0) {
           errorMsg += "Please Select Room Number <br/>";

       }
       var bf = document.getElementById("bf").checked;
       var lunch = document.getElementById("lunch").checked;
       var dinner = document.getElementById("dinner").checked;
       var snacks = document.getElementById("snacks").checked;
       var paper = document.getElementById("paper").checked;

       var total = document.getElementById("total").value;

     
       var advanceperiod = document.getElementById("ap").value;
       if (advanceperiod == "") {
           errorMsg += "Please Enter Advance Paid<br/>";

       }

       var balance = document.getElementById("bal").value;
 
       var vallbl = document.getElementById("lblcount").innerHTML;
       if (errorMsg == "")
        {
           var vallbl = document.getElementById("lblcount").innerHTML;



           var table = document.getElementById("tblgrid");
          
           var y = parseInt(eve);
           table.rows[y].cells[2].innerHTML = document.getElementById("cn").value;
           table.rows[y].cells[3].innerHTML = document.getElementById("ci").innerHTML;
       
           if (document.getElementById("m").checked == true) {
             
               table.rows[y].cells[4].innerHTML = document.getElementById("m").value;
            }
           if (document.getElementById("f").checked == true) {
            

               table.rows[y].cells[4].innerHTML = document.getElementById("f").value;
            }
          
           table.rows[y].cells[5].innerHTML = document.getElementById("address").value;
           table.rows[y].cells[6].innerHTML = document.getElementById("sel").value;

         
           table.rows[y].cells[7].innerHTML = "";
           if ((document.getElementById("t").checked == true) || (document.getElementById("e").checked == true) || (document.getElementById("h").checked == true)) {
               if (document.getElementById("t").checked == true) {
                   table.rows[y].cells[7].innerHTML = "";
                   table.rows[y].cells[7].innerHTML = table.rows[y].cells[7].innerHTML + " " + document.getElementById("t").value;
                
               }
               if (document.getElementById("e").checked == true) {
                   table.rows[y].cells[7].innerHTML = table.rows[y].cells[7].innerHTML + " " + document.getElementById("e").value;
                 
               }
               if (document.getElementById("h").checked == true) {
                   table.rows[y].cells[7].innerHTML = table.rows[y].cells[7].innerHTML + " " + document.getElementById("h").value;
                 
               }
           }
           else {
               table.rows[y].cells[7].innerHTML = "";
           }
           table.rows[y].cells[8].innerHTML = document.getElementById("p").value;
           table.rows[y].cells[10].innerHTML = document.getElementById("phn").value;
           table.rows[y].cells[9].innerHTML = document.getElementById("mbn").value;
           table.rows[y].cells[11].innerHTML = document.getElementById("indate").value;
           table.rows[y].cells[12].innerHTML = document.getElementById("PickupDate").value;
           table.rows[y].cells[13].innerHTML = document.getElementById("duration").innerHTML;
           table.rows[y].cells[14].innerHTML = document.getElementById("sel2").value;
           table.rows[y].cells[15].innerHTML = document.getElementById("sel3").value;
        
           var fac = table.rows[y].cells[16].innerHTML;
           table.rows[y].cells[16].innerHTML = "";
           if ((document.getElementById("lunch").checked == true) || (document.getElementById("bf").checked == true) || (document.getElementById("dinner").checked == true) || (document.getElementById("snacks").checked == true) || (document.getElementById("paper").checked == true)) {
               if (document.getElementById("bf").checked == true) {
                   table.rows[y].cells[16].innerHTML = "";
                   table.rows[y].cells[16].innerHTML = table.rows[y].cells[16].innerHTML + " " + document.getElementById("bf").value;
                  
               }
               if (document.getElementById("lunch").checked == true) {
                  
                   table.rows[y].cells[16].innerHTML = table.rows[y].cells[16].innerHTML + " " + document.getElementById("lunch").value;
                   
               }
               if (document.getElementById("dinner").checked == true) {
                  
                   table.rows[y].cells[16].innerHTML = table.rows[y].cells[16].innerHTML + " " + document.getElementById("dinner").value;
                   
               }
               if (document.getElementById("snacks").checked == true) {
                  
                   table.rows[y].cells[16].innerHTML = table.rows[y].cells[16].innerHTML + " " + document.getElementById("snacks").value;
                  
               }
               if (document.getElementById("paper").checked == true) {
                  
                   table.rows[y].cells[16].innerHTML = table.rows[y].cells[16].innerHTML + " " + document.getElementById("paper").value;
                 
               }
           }
           else {
               table.rows[y].cells[16].innerHTML = "";
           }
          


           table.rows[y].cells[17].innerHTML = document.getElementById("total").value;
           table.rows[y].cells[18].innerHTML = document.getElementById("ap").value;
           table.rows[y].cells[19].innerHTML = document.getElementById("bal").value;
           document.getElementById("cn").value = "";
           var a = document.getElementById("ci").innerHTML;
          document.getElementById("ci").innerHTML = parseFloat(a)+1;
           document.getElementById("m").checked = true;
           document.getElementById("f").checked = "";
           document.getElementById("address").value = "";
           document.getElementById("sel").selectedIndex = "";
           document.getElementById("lan").value = "";
           document.getElementById("t").checked = true;
           document.getElementById("e").checked = "";
           document.getElementById("h").checked = "";
           document.getElementById("p").value = "";
           document.getElementById("mbn").value = "";
           document.getElementById("phn").value = "";
          // document.getElementById("indate").value = "";
           document.getElementById("PickupDate").value = "";
           document.getElementById("sel2").selectedIndex = "";
           document.getElementById("sel3").selectedIndex = "";
           document.getElementById("facilities").value = "";
           document.getElementById("bf").checked = true;
           document.getElementById("lunch").checked = "";
           document.getElementById("dinner").checked = "";
           document.getElementById("snacks").checked = "";
           document.getElementById("paper").checked = "";
           document.getElementById("total").value = "";
           document.getElementById("ap").value = "";
           document.getElementById("bal").value = "";
           document.getElementById("duration").innerHTML = "";
           document.getElementById("lbl").innerHTML = "";
           document.getElementById("lblErrorMsg").innerHTML = "";
           document.getElementById("addb").innerHTML = "<input type='button'class='button' id='add' value='Add' onclick='javascript:return addVal(this)'/>";
           document.getElementById("clear2").innerHTML = "<input type='button' class='button' id='clear' value='Clear' onclick='javascript:clearVal()'/>"

           }
       else {

           document.getElementById("lblErrorMsg").innerHTML = errorMsg;
       }
   }
   
    
     function namevalidation(evt)
         {
             var errorMsg = "";
             document.getElementById("lblErrorMsg").innerHTML = "";
             var charCode = (evt.which) ? evt.which : evt.keyCode;
            if (((charCode <= 122) && (charCode >= 97)) || ((charCode <= 90) && (charCode >= 65)) || (charCode == 46) || (charCode == 8)||(charCode==32)||(charCode==9))
             {
                return true;
            }
            else {
                errorMsg += "Please Enter Only  Alphabets<br/>";
                document.getElementById("lblErrorMsg").innerHTML = errorMsg;
                return false;
            }

        }
        function numvalidation(evt)
         {
            var errorMsg = "";
            document.getElementById("lblErrorMsg").innerHTML = "";
            var charCode = (evt.which) ? evt.which : evt.keyCode;
            if (((charCode <= 57) && (charCode >= 48))||((charCode==8)||(charCode==9)))
             {
                return true;
            }
            else
             {
                errorMsg += "Please Enter Only Numeric Values ";
                document.getElementById("lblErrorMsg").innerHTML = errorMsg;
                return false;

            }


        }

        function passVal(evt) {


            var errorMsg = "";
            document.getElementById("lblErrorMsg").innerHTML = "";
            var charCode = (evt.which) ? evt.which : evt.keyCode;
            if (((charCode <= 57) && (charCode >= 48)) || ((charCode <= 122) && (charCode >= 97)) || ((charCode <= 90) && (charCode >= 65)) || (charCode == 9)||(charCode==8)) {
                return true;
            }
            else {
                errorMsg += "Please Enter Only  Alphanumeric Values <br/>";
                document.getElementById("lblErrorMsg").innerHTML = errorMsg;
                return false;
            }

        }




        function funDelete(rowId) {

            var vallbl = document.getElementById("lblcount").innerHTML;
            var table = document.getElementById("tblgrid");
            var rowCount = table.rows.length;
            var y = rowId.parentNode.parentNode.rowIndex;
          
           /* if (document.getElementById("cn").value == table.rows[y].cells[2].innerHTML) {
                alert("Please Update This Record");
            }
            else {*/

                var agree = confirm("Are you sure you wish to delete?");
                if (agree) {
                    if (parseInt(document.getElementById("tblgrid").rows.length) > 0) {
                        document.getElementById("tblgrid").deleteRow(y);
                    }
                }
              
                document.getElementById("lblcount").innerHTML = parseFloat(vallbl) - 1;
                if (document.getElementById("lblcount").innerHTML < 0) {
                    document.getElementById("lblcount").innerHTML = "0";
                }
                var ci = document.getElementById("ci").innerHTML;
        
                if (parseInt(document.getElementById("tblgrid").rows.length) == 2) {
                    document.getElementById("ci").innerHTML = "500";
                }
                clearVal();
                // alert("mhahd");
                //funReset(+y+);
                // alert(reset);
                document.getElementById("addb").innerHTML = "<input type='button'class='button' id='add' value='Add' onclick='javascript:return addVal(this)'/>";
                document.getElementById("clear2").innerHTML = "<input type='button' class='button' id='btn_reset' value='Clear' onclick='javascript:clearvalue()'/>"



               
            }
  

   
         function duration() {
           //  debugger;
            // alert("hai");
             var indate = document.getElementById("indate").value;
         
            var outdate = document.getElementById("PickupDate").value;
      
            var idate = indate.split("-");
            var day1 = idate[0];
//alert(day1);

            var month1 = idate[1];
            //alert(month1);

            var year1 = idate[2];
           // alert(year1);
          
            var odate = outdate.split("-");
            var day2 = odate[0];
           // alert(day2);



            var month2 = odate[1];
           // alert(month2);

            var year2 = odate[2];
           // alert(year2);
           /* if (parseFloat(day2) >parseFloat(day1)) {

               // alert("this month.......");
                document.getElementById("duration").innerHTML = (day2 - day1);
              //  alert(document.getElementById("duration").value);
            
            }*/

            if ((parseFloat(day2) > parseFloat(day1)) && (parseFloat(month1) == parseFloat(month2)))
             {
                 ///alert("hai152525");
                document.getElementById("duration").innerHTML = (parseFloat(day2) - parseFloat(day1));

            }

            if ((parseFloat(day2) > parseFloat(day1)) && (parseFloat(month2) > parseFloat(month1)))
             {
             
                month2 = month2 - month1;
             
                day3 = month2 * 30;
              
                day4 = parseInt(day2) + day3;

             
                document.getElementById("duration").innerHTML = (parseFloat(day4) -parseFloat(day1));

            }
            if ((parseFloat(day1) >parseFloat(day2)) && (parseFloat(month2) >parseFloat(month1))) {
            
                month2 = month2 - month1;
            
                day3 = month2 * 30;
            
                day4 = parseInt(day2) + day3;

           
                document.getElementById("duration").innerHTML = (parseFloat(day4) -parseFloat(day1));

            } 

            if (parseFloat(day1) >parseFloat(day2))
            {
              
              day2 = parseInt(day2) + 30;
         
             if (parseFloat(month1) >parseFloat(month2))
              {
                 month2 = month2 + 12 - month1;
                 
                 day2 = day2 + (month2 * 30);
             
                     duration=day2-day1;
            document.getElementById("duration").innerHTML = (parseFloat(day2) -parseFloat(day1));
                  
                    
             }

             }
             if((parseFloat(day1) >parseFloat(day2))&& (parseFloat(month2) >parseFloat(month1)))
                         {
             
                 day2 = parseInt(day2) + 30;
              
                 month2 = month2 - month1;
             
                 day3 = month2 * 30;
              
                 day4 = parseInt(day2) + day3;
                 document.getElementById("duration").innerHTML = (day4 - day1);

             }
             if ((parseFloat(day1) ==parseFloat(day2)) && (parseFloat(month2) >parseFloat(month1))) {
              
                 month2 = month2 - month1;
              
                 day2 = month2 * 30;
                
                 document.getElementById("duration").innerHTML = day2;

             }
             if ((parseFloat(day1) ==parseFloat(day2)) && (parseFloat(month2) <parseFloat(month1))) {
                 month2 = month2 + 12 - month1;
              
                 day2 = (month2 * 30);
                
                 document.getElementById("duration").innerHTML = day2;
                
             }                  
     
             if (parseFloat(year2) >parseFloat(year1)) {
                // alert("re reneval the customer application<br/> only one year is limited");

                 document.getElementById("duration").innerHTML = "0";

             }
         
            var roomtype = document.getElementById("sel2").selectedIndex;

            if (roomtype == 1) 
            {

                document.getElementById("lbl").innerHTML = "1000";

            }
             else if (roomtype == 2)
              {

                document.getElementById("lbl").innerHTML = "2000";

            }
            var cost = document.getElementById("lbl").innerHTML;

            var duration = document.getElementById("duration").innerHTML;
            if ((day1 == day2) && (month1 == month2)) {
                document.getElementById("duration").innerHTML ="1";
                if (duration == 0) {

                    document.getElementById("total").value = document.getElementById("lbl").innerHTML;

                } else {
                    document.getElementById("total").value = (duration * cost);
                }
            }
            document.getElementById("total").value = (duration * cost);
        }
    
        function bale() 
        {
         
            var total = document.getElementById("total").value;
    
            var advanceperiod = document.getElementById("ap").value;
       
            var balance = document.getElementById("bal").value;
         
            document.getElementById("bal").value = total - advanceperiod;
            if (document.getElementById("bal").value < 0) 
            {

                document.getElementById("bal").value = "0";
            
            }

        }
       

