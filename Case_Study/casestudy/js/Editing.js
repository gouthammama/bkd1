function funInsert(eve) {
    document.getElementById("lbl_error").innerHTML = "";
 
    var tab = document.getElementById("tab2");
    //var x = obj.split("_");
    //var rc = x[1];
    var rc= eve.parentNode.parentNode.rowIndex;

    var name1 = tab.rows[rc].cells[2].innerHTML;

    var sand = name1.split(" ");
    var a = sand[0];
    var b = sand[1];
    var c = sand[2];

    var name2 = tab.rows[rc].cells[5].innerHTML;

    var sand1 = name2.split(" ");
    var d = sand1[0];
    var e = sand1[1];
    var f = sand1[2];


    var other_lang = tab.rows[rc].cells[15].innerHTML;
    var text_language = other_lang.split(" ");
    var txtbox_otherlanguage = text_language[1];
   // alert(txtbox_otherlanguage);

    /*var first = name1.split("-");
    var second = name1.split("_");
    var critical1=name1.indexOf("-");
    var critical2 = name1.indexOf("_");
    var middle = name1.substring(critical1 + 1, critical2);
  
    var a = first[0];
    var b = middle;
    var c = second[1];
   
   

    var name2=tab.rows[rc].cells[5].innerHTML;
    var first1 = name2.split("-");
    var second1 = name2.split("_");
    var critical3=name2.indexOf("-");
    var critical4 = name2.indexOf("_");
    var middle1 = name2.substring(critical1 + 1, critical2);

    var d=first1[0];
    var e=middle1;
    var f=second1[1];*/

    var radio1 = tab.rows[rc].cells[4].innerHTML;
    if (radio1 == "female")
        document.getElementById("radio_female").checked = true;
    else
        document.getElementById("radio_male").checked = true;


    var chkbox1 = tab.rows[rc].cells[10].innerHTML;

    if ((chkbox1).match("Playing Games"))
        document.getElementById("chk_games").checked = true;

    if ((chkbox1).match("Listening Music"))
        document.getElementById("chk_music").checked = true;

    if ((chkbox1).match("Reading"))
        document.getElementById("chk_read").checked = true;

    if ((chkbox1).match("Dancing"))
        document.getElementById("chk_dancing").checked = true;


    var chkbox2 = tab.rows[rc].cells[15].innerHTML;

    if ((chkbox2).match("Telugu"))
        document.getElementById("chk_telugu").checked = true;

    if ((chkbox2).match("English"))
        document.getElementById("chk_english").checked = true;

    if ((chkbox2).match("Hindi"))
        document.getElementById("chk_hindi").checked = true;

    if ((chkbox2).match("other")) {
        document.getElementById("chk_other").checked = true;
        document.getElementById("txt_other").style.display = "block";

        document.getElementById("txt_other").value= txtbox_otherlanguage;

    }





    document.getElementById("txt_firstname").value = a;
    document.getElementById("txt_middlename").value = b;
    document.getElementById("txt_lastname").value = c;
    document.getElementById("txt_dob").value = tab.rows[rc].cells[3].innerHTML;
    //document.getElementById("").value = tab.rows[rc].cells[4].innerHTML;
    document.getElementById("Text1").value=d;
   document.getElementById("Text2").value=e;
  document.getElementById("Text3").value=f;

    document.getElementById("txt_present").value = tab.rows[rc].cells[6].innerHTML;
    document.getElementById("txt_permanent").value = tab.rows[rc].cells[7].innerHTML;
    document.getElementById("txt_phone").value = tab.rows[rc].cells[8].innerHTML;
    document.getElementById("txt_email").value = tab.rows[rc].cells[9].innerHTML;
    //document.getElementById("").value = tab.rows[rc].cells[10].innerHTML;
    document.getElementById("txt_dor").value = tab.rows[rc].cells[11].innerHTML;
    document.getElementById("sel_course").value = tab.rows[rc].cells[12].innerHTML;
    //document.getElementById("").value = tab.rows[rc].cells[13].innerHTML;
    document.getElementById("sel_semister").value = tab.rows[rc].cells[14].innerHTML;
    if (tab.rows[rc].cells[6].innerHTML == tab.rows[rc].cells[7].innerHTML) {
        document.getElementById("chk_address").checked = true;

    }

    /*document.getElementById("btn_add").value="Update";
    document.getElementById("btn_add").onclick = "kek()";
    function kek() {


       


    }*/
    document.getElementById("btn_add").style.display = "none";
    document.getElementById("btn_clear").style.display = "none";
    document.getElementById("lbl_update").style.display = "block";
    document.getElementById("lbl_Reset").style.display = "block";

    
    document.getElementById("lbl_update").innerHTML = "<input type='button' value='Update' class='color_button' id='up_" + rc + "' onclick='javascript:return Update(" + rc + ")'>";
   
    document.getElementById("lbl_Reset").innerHTML = "<input type='button' id='btn_reset' class='color_button' value='Reset' onclick='javascript:funReset(" + rc + ")'/>";
 


}
function Update(eve) {

    //alert("kk");
    /*var tab = document.getElementById("tab2");
    var len = tab.rows.length;
    var x = obj.split("_");

    rc = x[1];

    tab.deleteRow(parseInt(rc));
    

   // rc--;
    //len--
    //alert("success");


    validation();*/
    document.getElementById("lbl_error").innerHTML = "";

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

    var date1 = document.getElementById("txt_dob").value;
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

    if (date1 != "") {             //Required fields validation
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!
        var yyyy = today.getFullYear();
        var date_today = +yyyy + '-' + '0' + mm + '-' + dd;
        //alert(date_today);
        var date_dob = date1;
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
                //alert("vastunda");
                var c = x[1];
                var d = y[1];
                if (c >= d) {
                    // alert("vastundi");
                    if (c == d) {
                        //alert("success");
                        var e = x[2];
                        var f = y[2];
                        if (e >= f) {
                        }
                        else {
                            error += "Date Of Birth Should Be Less Than Or Equal To 18 Years From Current Year<br/>";
                        }
                    }

                }
                else {
                    error += "Date Of Birth Should Be Less Than Or Equal To 18 Years From Current Year<br/>";
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
        var a1 = x[0];                                       //reading current year
        var b1 = y[0];                                       //reading entered year in textbox

        // alert(c);
        if (a1 >= b1) {
            // alert(a);
            // alert(b);
            if (b1 == a1) {
                var c1 = x[1];
                var d1 = y[1];
                if (c1 >= d1) {
                    if (d1 == c1) {
                        var e1 = x[2];
                        var f1 = y[2];
                        if (e1 >= f1) {

                        }
                        else {
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

    //alert(c);
    /*
    if (date2 != "") {             //Required fields validation
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

    }*/



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


    if (cgames == true) {
        var z = "";
        z += (vgames + "<br/>");
    }
    if (cmusic == true)
        z += (vmusic + "<br/>");
    if (cread == true)
        z += (vread + "<br/>");
    if (cdancing == true)
        z += (vdancing + "<br/>");

    if ((ctelugu == false) && (cenglish == false) && (chindi == false) && (cother == false))
        error += "Check Any One Option From Languages<br/>";

    if (ctelugu == true) {
        var y = "";
        y += (vtelugu + "<br/>");
    }
    if (cenglish == true)
        y += (venglish + "<br/>");
    if (chindi == true)
        y += (vhindi + "<br/>");
    if (cother == true)
        y += (vother+" "+lang_other +" "+ "<br/>");


    if ((cmale == false) && (cfemale == false))
        error += "Select Any Option From Gender<br/>";


    if (cmale == true) {
        var i = vmale;
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
        //alert("first part");

        // var t1 = document.getElementById("tab2");
        // var rc = t1.rows.length;
        // var row = t1.insertRow(rc);
        //var records = document.getElementById("label_avi").innerHTML;
        //var records1 = parseInt(records);
        //records1 = records1 + 1;
        //alert(records);
        //document.getElementById("label_avi").innerHTML= records1;
        document.getElementById("lbl_error").innerHTML = "";

        var tab= document.getElementById("tab2");
        var rowid = parseInt(eve);
        //alert(rowid);
        

        tab.rows[rowid].cells[6].innerHTML = document.getElementById("txt_present").value
       // alert("partially1");


        tab.rows[rowid].cells[0].innerHTML = "<img src='images/Edit.gif' class='change' id='img_" + rowid + "' onclick='javascript:return funInsert(this)'>";
        //alert("partially2");
        tab.rows[rowid].cells[1].innerHTML = "<img src='images/Delete.gif' class='change' id='del_" + rowid + "'   onclick='javascript:return funDelete(this)'>";
        tab.rows[rowid].cells[2].innerHTML = firstname1 + " " + middlename1 + " " + lastname1;
        tab.rows[rowid].cells[3].innerHTML = date1;
        tab.rows[rowid].cells[4].innerHTML = i;
        //alert("partially3");
        tab.rows[rowid].cells[5].innerHTML = firstname2 + " " + middlename2 + " " + lastname2;
        tab.rows[rowid].cells[6].innerHTML = present;
        tab.rows[rowid].cells[7].innerHTML = permanent;
        tab.rows[rowid].cells[8].innerHTML = phone;
        tab.rows[rowid].cells[9].innerHTML = email;
        tab.rows[rowid].cells[10].innerHTML = z;
        tab.rows[rowid].cells[11].innerHTML = date2;
        tab.rows[rowid].cells[12].innerHTML = vselcourse;
        tab.rows[rowid].cells[13].innerHTML = i;
        tab.rows[rowid].cells[14].innerHTML = vselsemister;
        tab.rows[rowid].cells[15].innerHTML = y;
        //alert("second part");
       // var tab = document.getElementById("tab2");
       // var rc = tab.rows.length;
        //alert(rc);
        //var row = tab.insertRow(rc);
        //var rowid = rc + 1;
        // document.getElementById("label_avi").innerHTML = row;
        //tab.rows[rowid].cells[0].innerHTML = "<img src='images/Edit.gif' id='img_" + rowid + "' onclick='javascript:return funInsert(this)'>";
       /* var cell1 = row.insertCell(0);
        cell1.innerHTML = "<img src='images/Edit.gif' id='img_" + rowid + "' onclick='javascript:return funInsert(this)'>";

        var cell2 = row.insertCell(1);
        cell2.innerHTML = "<img src='images/Delete.gif' id='del_" + rowid + "'   onclick='javascript:return funDelete(this)'>";

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
        cell16.align = "left";*/



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

        document.getElementById("lbl_error").innerHTML = "";
       // alert("Third part");
        //var records = document.getElementById("label_avi").innerHTML;
       // alert(records);
       // var records1 = parseInt(records);
       // records1 = records1 + 1;
        //alert(records1);
        //document.getElementById("label_avi").innerHTML = records1;
        document.getElementById("btn_add").style.display = "block";
        document.getElementById("lbl_update").style.display = "none";
        document.getElementById("lbl_Reset").style.display = "none";
        document.getElementById("btn_clear").style.display = "block";
       // document.getElementById("btn_add").innerHTML = "<input type='button' value='Add' class='button' id='sub_" + rc + "' onclick='javascript:return validation(this.id)'>";
        //document.getElementById("form1").reset();

        //document.getElementById("btn_clear").innerHTML = "<input type='button' value='clear' class='button' onclick='javascript:clearsallvalues()'>";
        //alert("finishing touch");

    }
    else {
        document.getElementById("lbl_error").innerHTML = error;
    }

















/*

  
    var records = document.getElementById("label_avi").innerHTML;
    //alert(records);
    document.getElementById("label_avi").innerHTML= parseInt(records) - 1;


    document.getElementById("lbl_update").innerHTML = "<input type='button' value='Add' class='button' id='sub_" + rc + "' onclick='javascript:return validation(this.id)'>";
    document.getElementById("form1").reset();

    document.getElementById("lbl_Reset").innerHTML = "<input type='button' value='clear' class='button' onclick='javascript:clearsallvalues()'>";
*/

}

function funDelete(rowId) 
{
   // alert(rowId);
    var table = document.getElementById("tab2");
    var rowCount = table.rows.length;
    var rowNumber = rowId.parentNode.parentNode.rowIndex;
    //alert(rowNumber);
    var agree = confirm("Are you sure you wish to delete?");
    if (agree) {
        //alert(document.getElementById("txt_phone").value);
        //alert("hai");
        //alert(table.rows[rowNumber].cells[8].innerHTML);
    if((document.getElementById("txt_phone").value) !="")
    {
    alert("Please Update the record");
    }
    else{
        if (parseInt(document.getElementById("tab2").rows.length) > 0) {
            document.getElementById("tab2").deleteRow(rowNumber);
            var records = document.getElementById("label_avi").innerHTML;
            var records1 = parseInt(records);
            records1 = records1 - 1;

            document.getElementById("label_avi").innerHTML = records1;
            
            }
        }
    }

    /*var records = document.getElementById("label_avi").innerHTML;
    var records1 = parseInt(records);
    records1 = records1 - 1;

    document.getElementById("label_avi").innerHTML = records1;
    clearsallvalues();*/
}




/*function funDelete(obj) {
    


    var tab = document.getElementById("tab2");
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


}*/
function funReset(eve) {
    //alert("calling reset");
    var tab = document.getElementById("tab2");
   // var x = obj.split("_");
    //var rc = x[1];
    var rowCount = tab.rows.length;
    var rc = parseInt(eve);
    

    var name1 = tab.rows[rc].cells[2].innerHTML;

    var sand = name1.split(" ");
    var a = sand[0];
    var b = sand[1];
    var c = sand[2];

    var name2 = tab.rows[rc].cells[5].innerHTML;

    var sand1 = name2.split(" ");
    var d = sand1[0];
    var e = sand1[1];
    var f = sand1[2];


    var other_lang = tab.rows[rc].cells[15].innerHTML;
    var text_language = other_lang.split(" ");
    var txtbox_otherlanguage = text_language[1];

    /*var first = name1.split("-");
    var second = name1.split("_");
    var critical1=name1.indexOf("-");
    var critical2 = name1.indexOf("_");
    var middle = name1.substring(critical1 + 1, critical2);
  
    var a = first[0];
    var b = middle;
    var c = second[1];
   
   

    var name2=tab.rows[rc].cells[5].innerHTML;
    var first1 = name2.split("-");
    var second1 = name2.split("_");
    var critical3=name2.indexOf("-");
    var critical4 = name2.indexOf("_");
    var middle1 = name2.substring(critical1 + 1, critical2);

    var d=first1[0];
    var e=middle1;
    var f=second1[1];*/

    var radio1 = tab.rows[rc].cells[4].innerHTML;
    if (radio1 == "female")
        document.getElementById("radio_female").checked = true;
    else
        document.getElementById("radio_male").checked = true;


    var chkbox1 = tab.rows[rc].cells[10].innerHTML;

    if ((chkbox1).match("Playing Games"))
        document.getElementById("chk_games").checked = true;

    if ((chkbox1).match("Listening Music"))
        document.getElementById("chk_music").checked = true;

    if ((chkbox1).match("Reading"))
        document.getElementById("chk_read").checked = true;

    if ((chkbox1).match("Dancing"))
        document.getElementById("chk_dancing").checked = true;


    var chkbox2 = tab.rows[rc].cells[15].innerHTML;

    if ((chkbox2).match("Telugu"))
        document.getElementById("chk_telugu").checked = true;

    if ((chkbox2).match("English"))
        document.getElementById("chk_english").checked = true;

    if ((chkbox2).match("Hindi"))
        document.getElementById("chk_hindi").checked = true;

    if ((chkbox2).match("other")) {
        document.getElementById("chk_other").checked = true;
        document.getElementById("txt_other").style.display = "block";
        document.getElementById("txt_other").value = txtbox_otherlanguage;



    }



    document.getElementById("txt_firstname").value = a;
    document.getElementById("txt_middlename").value = b;
    document.getElementById("txt_lastname").value = c;
    document.getElementById("txt_dob").value = tab.rows[rc].cells[3].innerHTML;
    //document.getElementById("").value = tab.rows[rc].cells[4].innerHTML;
    document.getElementById("Text1").value = d;
    document.getElementById("Text2").value = e;
    document.getElementById("Text3").value = f;

    document.getElementById("txt_present").value = tab.rows[rc].cells[6].innerHTML;
    document.getElementById("txt_permanent").value = tab.rows[rc].cells[7].innerHTML;
    document.getElementById("txt_phone").value = tab.rows[rc].cells[8].innerHTML;
    document.getElementById("txt_email").value = tab.rows[rc].cells[9].innerHTML;
    //document.getElementById("").value = tab.rows[rc].cells[10].innerHTML;
    document.getElementById("txt_dor").value = tab.rows[rc].cells[11].innerHTML;
    document.getElementById("sel_course").value = tab.rows[rc].cells[12].innerHTML;
    //document.getElementById("").value = tab.rows[rc].cells[13].innerHTML;
    document.getElementById("sel_semister").value = tab.rows[rc].cells[14].innerHTML;
    if (tab.rows[rc].cells[6].innerHTML == tab.rows[rc].cells[7].innerHTML) {
        document.getElementById("chk_address").checked = true;

    }

    /*document.getElementById("btn_add").value="Update";
    document.getElementById("btn_add").onclick = "kek()";
    function kek() {


       


    }*/


   
}


