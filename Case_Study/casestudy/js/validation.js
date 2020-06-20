function validation() {
   
    var error = "";
    var firstname1 = document.getElementById("txt_firstname").value;
    var middlename1 = document.getElementById("txt_middlename").value;
    var lastname1 = document.getElementById("txt_lastname").value;


    var firstname2 = document.getElementById("Text1").value;
    var middlename2 = document.getElementById("Text2").value;
    var lastname2 = document.getElementById("Text3").value;

    var present = document.getElementById("txt_present").value;
    var permanent = document.getElementById("txt_permanent").value;

    var phone = document.getElementById("txt_phone").value;
    var email = document.getElementById("txt_email").value;

    var cgames = document.getElementById("chk_games").checked;
    var cmusic = document.getElementById("chk_music").checked;
    var cread = document.getElementById("chk_read").checked;
    var cdancing = document.getElementById("chk_dancing").checked;

    var vgames = document.getElementById("chk_games").value;
    var vmusic = document.getElementById("chk_music").value;
    var vread = document.getElementById("chk_read").value;
    var vdancing = document.getElementById("chk_dancing").value;

    var ctelugu = document.getElementById("chk_telugu").checked;
    var cenglish = document.getElementById("chk_english").checked;
    var chindi = document.getElementById("chk_hindi").checked;
    var cother = document.getElementById("chk_other").checked;



    var vtelugu = document.getElementById("chk_telugu").value;
    var venglish = document.getElementById("chk_english").value;
    var vhindi = document.getElementById("chk_hindi").value;
    var vother = document.getElementById("chk_other").value;

    var cmale = document.getElementById("radio_male").checked;
    var cfemale = document.getElementById("radio_female").checked;

    var vmale = document.getElementById("radio_male").value;
    var vfemale = document.getElementById("radio_female").value;

    var vselcourse = document.getElementById("sel_course").value;
 
    var vselsemister = document.getElementById("sel_semister").value;


    var selcourse = document.getElementById("sel_course").selectedIndex;
    var selsemister = document.getElementById("sel_semister").selectedIndex;

    var date1=document.getElementById("txt_dob").value;
    var date2 = document.getElementById("txt_dor").value;
    var lang_other = document.getElementById("txt_other").value;
   
   /* var result1 = date1.split("-");
    var vij1 = parseInt(result1[0]);
   
    
    alert(vij1);
    var result2 = date2.split("-");
    var vij2 = parseInt(result2[0]);
    if (vij2 >= vij1 + 5) {
    }
    else
        error += "Minimum age of student is 5 years<br/>";
        */

    if (date1!= "") {             //Required fields validation
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!
        var yyyy = today.getFullYear();
        var date_today = +yyyy + '-' + '0' + mm + '-' + dd;
        //alert(date_today);
        var date_dob =date1;
        //alert(date_dob);
        var x = date_today.split("-");
        //alert(x);
        var y = date_dob.split("-");
        var a = x[0];                                       //reading current year
        var b = y[0];                                       //reading entered year in textbox
        var age = a - b;
       // alert(age);
        //alert(c);
        if (age >= 18) {
            if (age == 18) {
              
                var c = x[1];
                var d = y[1];
                if (c >= d) {
                   
                    if (c==d) {
                        //alert("success");
                        var e = x[2];
                        var f = y[2];
                        if (e >= f) {
                        }
                        else {
                            error += "Date Of Birth Should Be Less Than Or Equal To 18 Years From Current Year<br />";
                        }
                    }
                    
                }
                else {
                    error += "Date Of Birth Should Be Less Than Or Equal To 18 Years From Current Year<br />";
                }
            }

        }
        else {
            error += "Date Of Birth Should Be Less Than Or Equal To 18 Years From Current Year<br />";
        }

    }
    if (date2 != "") {
        //Required fields validation
        today = new Date();
        dd = today.getDate();
        mm = today.getMonth() + 1; //January is 0!
        yyyy = today.getFullYear();
        date_today = +yyyy + '-' + '0' + mm + '-' + dd;
        //alert(date_today);
        date_dob = date2;
        //alert(date_dob);
        x = date_today.split("-");
        //alert(x);
        y = date_dob.split("-");
        var a1= x[0];                                       //reading current year
       var b1= y[0];                                       //reading entered year in textbox

       // alert(c);
        if (a1 >= b1) {
           // alert(a1);
           //alert(b1);
            if (b1 == a1) {
                var c1 = x[1];
                var d1 = y[1];
                if (c1 >= d1) {
                    //alert(c1);
                    //alert(d1);
                    if (d1 == c1) {
                        
                        var e1 = x[2];
                        var f1 = y[2];
                        if (e1 >= f1) {
                            //alert(e1);
                            //alert(f1);

                        }
                        else {
                           // alert(e1);
                            //alert(f1);
                            error += "Student Registration Date Should Be Greater Than Are Equal To Current Date<br />";
                        }

                    }
                }
                else {
                    error += "Student Registration Date Should Be Greater Than Are Equal To Current Date<br />";
                }

            }
            else {
                error += "Student Registration Date Should Be Greater Than Are Equal To Current Date<br />";
            }

        }
    }
    //alert("generally");
    
    
   /* if (date2 != "") {   
    alert("super");          //Required fields validation
       var today1 = new Date();
       var dd1 = today1.getDate();
       var mm1 = today1.getMonth() + 1; //January is 0!
       var yyyy1 = today1.getFullYear();
      var date_today1 = +yyyy1 + '-' + '0' + mm1 + '-' + dd1;
        alert(date_today1);
     var date_join = date2;
        alert(date_join);
      var g= date_today1.split("-");
        alert(g);
      var h= date_join.split("-");
       var y1 = g[0];                                       //reading current year
       var y2 = h[0];                                       //reading entered year in textbox
       
       alert(c);
       if (y2>= y1) {
            alert(y2);

            alert(y1);
            if (y2 == y1)
            { alert("same year");
            var m2=h[1];
            var m1=g[1];

            if(m2>=m1)
            {

            if(m2==m1)
            {alert("same month");
            var d1=g[2];
            var d2=h[2];
            if(d2>=d1)
            {
            alert("no problem");
            }
            else{
            error += "Student Registration Date Should Be Greater Than Are Equal To Current Date<br />";
            }

            }
            
            
            }
            error += "Student Registration Date Should Be Greater Than Are Equal To Current Date<br />";

        }
        else {
            error += "Student Registration Date Should Be Greater Than Are Equal To Current Date<br />";
        }
        
    }
   */
   

    if (firstname1 == "")
        error += "Please Enter Student Firstname<br/>"
    //if (middlename1 == "")
       // error += "Please Enter Student Middlename<br/>";
    if (lastname1 == "")
        error += "Please Enter Student lastname<br/>";

    if (firstname2 == "")
        error += "Please Enter Father Firstname<br/>"
   // if (middlename2 == "")
      //  error += "Please Enter Father Middlename<br/>";
    if (lastname2 == "")
        error += "Please Enter Father lastname<br/>";

    if (present == "")
        error += "Please Enter Present Address<br/>";
    if (permanent == "")
        error += "Please Enter Permanent Address<br/>";

    if (email == "")
        error += "Please Enter Email<br/>";
    if (phone == "")
        error += "Please Enter Phone Number<br/>";

    if ((cgames == false) && (cmusic == false) && (cread == false) && (cdancing == false))
        error += "Check Any One Option From Hobbies<br/>";


    if (cgames == true) 
    {
    var z="";
    z+=(vgames+"<br/>");
}
if (cmusic == true)
    z += (vmusic + "<br/>");
if (cread == true)
    z += (vread + "<br/>");
if (cdancing == true)
    z+=(vdancing+"<br/>");

    if ((ctelugu == false) && (cenglish == false) && (chindi == false) && (cother == false))
        error += "Check Any One Option From Languages<br/>";

         if (ctelugu == true) 
    {
    var y="";
    y+=(vtelugu+"<br/>");
}
if (cenglish == true)
    y += (venglish + "<br/>");
if (chindi == true)
    y += (vhindi + "<br/>");
if (cother == true) {
    y += (vother+" "+lang_other+" "+"<br/>");
}


    if ((cmale == false) && (cfemale == false))
        error += "Select Any Option From Gender<br/>";


         if (cmale== true) {
        var i =vmale;
    }
    else {
        var i = vfemale;
    }

    if (selcourse == 0)
        error += "Please Select Course Name<br/>";

    if (selsemister == 0)
        error += "Please Select Semister<br/>";
    if (date1 == "")
        error += "Please Enter Date Of Birth<br/>";
    if (date2 == "")
        error += "Please Enter Date Of Joining<br/>";
    if (cother == true) {
        if (lang_other == "")
            error += "Please Enter Other Language<br/>";
    }


    var textvalue = document.getElementById("txt_email").value;


    var valid1 = /^[A-Za-z0-9\._-]+@[A-Za-z]+.\w{2,4}$/;
    if (email != "") {
        if (valid1.test(textvalue)) {
        }
        else {

            error += "Invalid Email Address<br/>";
        }
    }
    if (phone != "") {
        if (phone.length < 10)
            error += "Invalid Phone Number<br/>";
    }




    if (error == "") {

       // var t1 = document.getElementById("tab2");
       // var rc = t1.rows.length;
       // var row = t1.insertRow(rc);
        //var records = document.getElementById("label_avi").innerHTML;
        //var records1 = parseInt(records);
        //records1 = records1 + 1;
        //alert(records);
        //document.getElementById("label_avi").innerHTML= records1;
        document.getElementById("lbl_error").innerHTML = "";
        
       
        var tab = document.getElementById("tab2");
        var rc = tab.rows.length;
        //alert(rc);
        var row = tab.insertRow(rc);
        var rowid = rc + 1;
        //document.getElementById("label_avi").innerHTML = rowid;

        var cell1 = row.insertCell(0);
        cell1.innerHTML = "<img src='images/Edit.gif' class='change' id='img_" + rowid + "' onclick='javascript:return funInsert(this)'>";

        var cell2 = row.insertCell(1);
        cell2.innerHTML = "<img src='images/Delete.gif' class='change' id='del_" + rowid + "'   onclick='javascript:return funDelete(this)'>";

        var cell3 = row.insertCell(2);
        cell3.innerHTML = firstname1 + " " + middlename1 + " " + lastname1;
        cell3.align = "left";

        var cell4 = row.insertCell(3);
        cell4.innerHTML = date1;
        cell4.align = "center";

        
       
        var cell5 = row.insertCell(4);
        cell5.innerHTML = i;
        cell5.align = "left";

        
        var cell6 = row.insertCell(5);
        cell6.innerHTML = firstname2 + " " + middlename2 + " " + lastname2;
        cell6.align = "left";


        var cell7 = row.insertCell(6);
        cell7.innerHTML = present;
        cell7.align = "left";

        var cell8 = row.insertCell(7);
        cell8.innerHTML = permanent;
        cell8.align = "left";

        var cell9 = row.insertCell(8);
        cell9.innerHTML = phone;
        cell9.align = "right";

        var cell10 = row.insertCell(9);
        cell10.innerHTML = email;
        cell10.align = "left";


        var cell11 = row.insertCell(10);
        cell11.innerHTML = z;


        var cell12 = row.insertCell(11);
        cell12.innerHTML = date2;
        cell12.align = "center";

        var cell13 = row.insertCell(12);
        cell13.innerHTML = vselcourse;


        var cell14 = row.insertCell(13);
        cell14.innerHTML = i;
        cell14.align = "left";


        var cell15 = row.insertCell(14);
        cell15.innerHTML = vselsemister;
        cell15.align = "left";


        var cell16 = row.insertCell(15);
        cell16.innerHTML = y;
        cell16.align = "left";



        document.getElementById("txt_firstname").value = "";
        document.getElementById("txt_middlename").value = "";
        document.getElementById("txt_lastname").value = "";

        document.getElementById("Text1").value = "";
        document.getElementById("Text2").value = "";
        document.getElementById("Text3").value = "";

        document.getElementById("txt_present").value = "";
        document.getElementById("txt_permanent").value = "";


        document.getElementById("txt_phone").value = "";
        document.getElementById("txt_email").value = "";

        document.getElementById("chk_games").checked = false;
        document.getElementById("chk_music").checked = false;
        document.getElementById("chk_read").checked = false;
        document.getElementById("chk_dancing").checked = false;

        document.getElementById("chk_telugu").checked = false;
        document.getElementById("chk_english").checked = false;
        document.getElementById("chk_hindi").checked = false;
        document.getElementById("chk_other").checked = false;

        document.getElementById("radio_male").checked = true;
        document.getElementById("radio_female").checked = false;


        document.getElementById("sel_course").selectedIndex = 0;
        document.getElementById("sel_semister").selectedIndex = 0;


        document.getElementById("txt_dob").value = "";
        document.getElementById("txt_dor").value = "";
        document.getElementById("txt_other").style.display = "none";

        document.getElementById("chk_address").checked = false;
        

        /*document.getElementById("lbl_error").innerHTML = "";
        var records = document.getElementById("label_avi").innerHTML;
        alert(records);
        var records1 = parseInt(records);
        records1 = records1 + 1;
        alert(records1);
        document.getElementById("label_avi").innerHTML= records1;*/
       var rowCount1 = document.getElementById("label_avi").innerHTML;
        //alert(rowCount1);
        var k541 = parseInt(rowCount1) + 1;
        document.getElementById("label_avi").innerHTML = k541;


    }
    else {
        document.getElementById("lbl_error").innerHTML = error;
    }


}