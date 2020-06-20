
//************************Function Submit************************************************

function funSubmit() {
    document.getElementById("errmsg").innerHTML = "";
    var err = "";

    //alert("hai");
    var cname = document.getElementById("custNm").value;
    //alert(cname);
    if (cname == "") {
        err += "Please Enter Customer Name <br/>";
        //alert(err);
    }
    /* var cadd = document.getElementById("arAdd").value;
    if (cadd == "") {
    err += "Please enter your address <br/>";
    }*/
    var cpn = document.getElementById("phnNum").value;
    if (cpn == "") {
        err += "Please Enter Phone Number<br/>";
    }
    else if (cpn.length != 10) {
        err += "Please Enter Valid Phone Number<br/>";
    }
    var card = document.getElementById("cCard").checked;
    var len = document.getElementById("txt").value;
    //alert(len);

    if (card == true) {

        if (len == "") {
            err += "Please Enter Credit Card Number <br/>";
        }
        else if (len.length != 16) {
            err += "Please Enter Valid Credit Card Number <br/>";
        }

    }
    var cheque = document.getElementById("cheq").checked;
    var len1 = document.getElementById("txt1").value;
    if (cheque == true) {
        if (len1 == "") {
            err += "Please Enter Cheque Number <br/>";
        }
        else if (len1.length != 10) {
            err += "Please Enter Valid Cheque Number <br/>";
        }
    }
    var cmp = document.getElementById("sel1").value;
    if (cmp == "Select") {
        err += "Please Select Company Name <br/>";
    }
    var mod = document.getElementById("sel2").value;
    if (mod == "Select") {
        err += "Please Select Model <br/>";
    }
    var col = document.getElementById("sel3").value;
    if (col == "Select") {
        err += "Please Select Color <br/>";
    }
    var book = document.getElementById("txtDOB").innerHTML;
    if (book == "") {
        err += "Please Enter the Date Of Booking <br/>";
    }
    var delivery = document.getElementById("PickupDate").value;
    if (delivery == "") {
        err += "Please Enter the Date Of Delivery <br/>";
    }
    var cash = document.getElementById("radCsh").checked;
    var cheque = document.getElementById("cheq").checked;
    var card = document.getElementById("cCard").checked;
    //var data1 = document.getElementById("txt").value;
    //var data2 = document.getElementById("txt1").value;
    if ((cash == false) && (card == false) && (cheque == false)) {
        err += "Please select the Payment-Mode <br/>";
    } /*
    else if ((card == true)&&(data1=="")) {
    err += "Please enter your Credit Card Number <br/>";
    }
    else if ((cheque == true) && (data2 == "")) {
    err += "Please enter your Cheque Number <br/>";
    }*/
    var paid = document.getElementById("txtAdv").value;
    var cost = document.getElementById("txtCstBk").value;
    paid = Number(paid);
    cost = Number(cost);
    if (paid == "") {
        err += "Please Enter the Advance Paid <br/>";
    }
    else if (paid < 500) {
        err += "Please pay the Advance more than 500.<br/>";
    }
    else if (paid > cost) {
    err += "Advance paid must not be greater than Cost of Bike <br/>";
    }
    /*else if (paid == cost) {
    document.getElementById("txtBal").value = 0;
    }*/
    
    var lblrec = document.getElementById("lblavailabrec").innerHTML;
    if (err == "") {
        var value_check = document.getElementById("accChk").checked;
        if (value_check == true) {

            var i = "Yes";
        }

        else {

            i = "No";
        }
        var d = document.getElementById("radCsh").value;
        var e = document.getElementById("cCard").value;
        var f = document.getElementById("cheq").value;
        if (document.getElementById("radCsh").checked == true) {
            var g = d;
            //alert(g);
        }
        else if (document.getElementById("cCard").checked == true) {
            g = e;
        }
        else {
            g = f;
        }

        var table = document.getElementById("tabTar")
        //var table = document.getElementById("tableValues")

        var rowCount = table.rows.length;
        var row = table.insertRow(rowCount);

        var cell1 = row.insertCell(0);
        cell1.innerHTML = "<img src='images/Edit.gif' id='img_" + rowCount + "'onclick='javascript:return funedit(this);'  />";
        var cell2 = row.insertCell(1);
        cell2.innerHTML = "<img src='images/Delete.gif' id='img_" + rowCount + "'onclick='javascript:return fundelete(this);'  />";
        var cell3 = row.insertCell(2);
        cell3.innerHTML = document.getElementById("custNm").value;
        cell3.align = "left";
        var cell4 = row.insertCell(3);
        cell4.innerHTML = document.getElementById("arAdd").value;
        cell4.align = "left";
        var cell5 = row.insertCell(4);
        cell5.innerHTML = document.getElementById("phnNum").value;
        cell5.align = "right";
        var cell6 = row.insertCell(5);
        cell6.innerHTML = document.getElementById("sel1").value;
        cell6.align = "left";
        var cell7 = row.insertCell(6);
        cell7.innerHTML = document.getElementById("sel2").value;
        cell7.align = "left";
        var cell8 = row.insertCell(7);
        cell8.innerHTML = document.getElementById("sel3").value;
        cell8.align = "left";
        var cell9 = row.insertCell(8);
        cell9.innerHTML = i;
        cell9.align = "left";
        var cell10 = row.insertCell(9);
        cell10.innerHTML = document.getElementById("txtDOB").innerHTML;
        cell10.align = "center";
        var cell11 = row.insertCell(10);
        cell11.innerHTML = document.getElementById("PickupDate").value;
        cell11.align = "center";
        var cell12 = row.insertCell(11);
        cell12.innerHTML = g;
        cell12.align = "left";
        var cell13 = row.insertCell(12);
        cell13.innerHTML = document.getElementById("txtCstBk").value;
        cell13.align = "right";
        var cell14 = row.insertCell(13);
        cell14.innerHTML = document.getElementById("txtAdv").value;
        cell14.align = "right";
        var cell15 = row.insertCell(14);
        cell15.innerHTML = document.getElementById("txtBal").value;
        cell15.align = "right";
        if (document.getElementById("id2").style.display == "block") {
            var cell16 = row.insertCell(15);
            document.getElementById("ccno").style.display = "block";
            cell16.innerHTML = document.getElementById("txt").value;
            cell16.align = "right";
        }
        else if (document.getElementById("id4").style.display == "block") {
            var cell16 = row.insertCell(15);
            document.getElementById("ccno").style.display = "block";
            cell16.innerHTML = document.getElementById("txt1").value; //"cno"
            cell16.align = "right";
        }
        else {
            var cell16 = row.insertCell(15);
            document.getElementById("ccno").style.display = "block";
            cell16.innerHTML = "-";
            cell16.align = "center";
        }







        /*else if(document.getElementById("id4").style.display == "block") {
        var cell16 = row.insertCell(15);
        document.getElementById("cno").style.display = "block";
        cell16.innerHTML = document.getElementById("txt1").value;
        }
        else if (document.getElementById("id2").style.display == "block") {
        var cell16 = row.insertCell(15);
        cell16.innerHTML = document.getElementById("txt").value; //"cno"
        }*/

        document.getElementById("lblavailabrec").innerHTML = parseInt(lblrec) + 1;

        document.getElementById("custNm").value = ""; //i
        document.getElementById("arAdd").value = "";
        document.getElementById("phnNum").value = "";
        document.getElementById("sel1").selectedIndex = 0;
        document.getElementById("sel2").selectedIndex = 0;
        document.getElementById("sel3").selectedIndex = 0;
        //document.getElementById("txtDOB").value = "";
        document.getElementById("PickupDate").value = "";
        document.getElementById("txtCstBk").value = "";
        document.getElementById("txtAdv").value = "";
        document.getElementById("txtBal").value = "";
        document.getElementById("txt").value = "";
        document.getElementById("txt1").value = "";
        document.getElementById("radCsh").checked = true;
        document.getElementById("cCard").checked = false;
        document.getElementById("cheq").checked = false;
        document.getElementById("accChk").checked = false;
        document.getElementById("id1").style.display = "none";
        document.getElementById("id2").style.display = "none";
        document.getElementById("txt").style.display = "none";
        document.getElementById("id3").style.display = "none";
        document.getElementById("id4").style.display = "none";
        document.getElementById("txt1").style.display = "none";
        for (i = 1; i <= 2; i++) {
            var n = document.getElementById("sel2");
            n.options[0] = new Option("Select", "Select");
            n.options[1] = null;
            n.options[2] = null;
            n.options[3] = null;
            var m = document.getElementById("sel3");
            m.options[0] = new Option("Select", "Select");
            m.options[1] = null;
            m.options[2] = null;
            m.options[3] = null;
        }
    }
    else {
        document.getElementById("errmsg").innerHTML = err;
    }
}
// ************************* Function Show *********************************************
function show() {

    if (document.getElementById("cCard").checked == true) {
        document.getElementById("id1").style.display = "block";
        document.getElementById("id2").style.display = "block";
        document.getElementById("txt").style.display = "block";
        document.getElementById("id3").style.display = "none";
        document.getElementById("id4").style.display = "none";
        document.getElementById("txt1").style.display = "none";

    }
    else if (document.getElementById("cheq").checked == true) {
        document.getElementById("id3").style.display = "block";
        document.getElementById("id4").style.display = "block";
        document.getElementById("txt1").style.display = "block";
        document.getElementById("id1").style.display = "none";
        document.getElementById("id2").style.display = "none";
        document.getElementById("txt").style.display = "none";

    }

    else {
        document.getElementById("id1").style.display = "none";
        document.getElementById("id2").style.display = "none";
        document.getElementById("txt").style.display = "none";
        document.getElementById("id3").style.display = "none";
        document.getElementById("id4").style.display = "none";
        document.getElementById("txt1").style.display = "none";
    }
}
// ************ Function used to display current date when page is loaded ***********************************
function addDate() {//onload function
    date = new Date();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var year = date.getFullYear();

    document.getElementById("txtDt").innerHTML = day + '-' + month + '-' + year;
    document.getElementById("txtDOB").innerHTML = day + '-' + month + '-' + year;
    document.getElementById("id1").style.display = "none";
    document.getElementById("id2").style.display = "none";
    document.getElementById("txt").style.display = "none";
    document.getElementById("id3").style.display = "none";
    document.getElementById("id4").style.display = "none";
    document.getElementById("txt1").style.display = "none";
}
/*function disable() {//onload function
date = new Date();
var month = date.getMonth() + 1;
var day = date.getDate();
var year = date.getFullYear();


document.getElementById("txtDt").value = year + '-' + month + '-' + day;
document.getElementById("txtDOB").value = year + '-' + month + '-' + day;
}*/
// ***************** Functions Used to populate dynamic changes in Select Box *******************************



function funValidation() {
    for (i = 1; i <= 2; i++) {
        var n = document.getElementById("sel2");
        n.options[0] = new Option("Select", "Select");
        n.options[1] = null;
        n.options[2] = null;
        n.options[3] = null;
        var m = document.getElementById("sel3");
        m.options[0] = new Option("Select", "Select");
        m.options[1] = null;
        m.options[2] = null;
        m.options[3] = null;
    }
    if (document.getElementById("sel1").value == "Hero Honda") {
        var a = document.getElementById("sel2");
        a.options[0] = new Option("Select", "Select");
        a.options[1] = new Option("CBZ", "CBZ");
        a.options[2] = new Option("Splender", "Splender");
        a.options[3] = new Option("Passion", "Passion");
    }
    else if (document.getElementById("sel1").value == "Yamaha") {
        var w = document.getElementById("sel2");
        w.options[0] = new Option("Select", "Select");
        w.options[1] = new Option("R15", "R15");
        w.options[2] = new Option("Libero", "Libero");
        w.options[3] = new Option("Crux", "Crux");
    }
    else if (document.getElementById("sel1").value == "Bajaj") {
        var m = document.getElementById("sel2");
        m.options[0] = new Option("Select", "Select");
        m.options[1] = new Option("Discover", "Discover");
        m.options[2] = new Option("Chetak", "Chetak");
        m.options[3] = new Option("Pulsar", "Pulsar");
    }

    else { }
}
function funValidation1() {
    for (i = 1; i <= 2; i++) {
        var n = document.getElementById("sel3");
        n.options[0] = new Option("Select", "Select");
        n.options[1] = null;
        n.options[2] = null;
        n.options[3] = null;
    }
    if (document.getElementById("sel2").value == "CBZ") {
        var s1 = document.getElementById("sel3");
        s1.options[0] = new Option("Select", "Select");
        s1.options[1] = new Option("Black", "Black");
        s1.options[2] = new Option("Blue", "Blue");
        s1.options[3] = new Option("Red", "Red");
    }
    else if (document.getElementById("sel2").value == "Splender") {
        var vs1 = document.getElementById("sel3");
        vs1.options[0] = new Option("Select", "Select");
        vs1.options[1] = new Option("Black", "Black");
        vs1.options[2] = new Option("Blue", "Blue");
        vs1.options[3] = new Option("Red", "Red");
    }
    else if (document.getElementById("sel2").value == "Passion") {
        var vz1 = document.getElementById("sel3");
        vz1.options[0] = new Option("Select", "Select");
        vz1.options[1] = new Option("Black", "Black");
        vz1.options[2] = new Option("Blue", "Blue");
        vz1.options[3] = new Option("Red", "Red");
    }
    else if (document.getElementById("sel2").value == "R15") {
        var w1 = document.getElementById("sel3");
        w1.options[0] = new Option("Select", "Select");
        w1.options[1] = new Option("Black", "Black");
        w1.options[2] = new Option("Blue", "Blue");
        w1.options[3] = new Option("Red", "Red");
    }
    else if (document.getElementById("sel2").value == "Libero") {
        var w2 = document.getElementById("sel3");
        w2.options[0] = new Option("Select", "Select");
        w2.options[1] = new Option("Black", "Black");
        w2.options[2] = new Option("Blue", "Blue");
        w2.options[3] = new Option("Red", "Red");
    }
    else if (document.getElementById("sel2").value == "Crux") {
        var w3 = document.getElementById("sel3");
        w3.options[0] = new Option("Select", "Select");
        w3.options[1] = new Option("Black", "Black");
        w3.options[2] = new Option("Blue", "Blue");
        w3.options[3] = new Option("Red", "Red");
    }
    else if (document.getElementById("sel2").value == "Discover") {
        var m1 = document.getElementById("sel3");
        m1.options[0] = new Option("Select", "Select");
        m1.options[1] = new Option("Black", "Black");
        m1.options[2] = new Option("Blue", "Blue");
        m1.options[3] = new Option("Red", "Red");
    }
    else if (document.getElementById("sel2").value == "Chetak") {
        var m2 = document.getElementById("sel3");
        m2.options[0] = new Option("Select", "Select");
        m2.options[1] = new Option("Black", "Black");
        m2.options[2] = new Option("Blue", "Blue");
        m2.options[3] = new Option("Red", "Red");
    }
    else if (document.getElementById("sel2").value == "Pulsar") {
        var m3 = document.getElementById("sel3");
        m3.options[0] = new Option("Select", "Select");
        m3.options[1] = new Option("Black", "Black");
        m3.options[2] = new Option("Blue", "Blue");
        m3.options[3] = new Option("Red", "Red");
    }

    else { }

}

/*
function funValidation() 
{
var b = document.getElementById("sel2").selectedIndex;
//var b = document.getElementById("selDist").value;
//alert(document.getElementById("selState").value);
if (a == "ap") {
var k = document.getElementById("selDist").options.length;
for (var i = 0; i <= k; i++) {
document.getElementById("selDist").options.remove(i);
}
oNewOption = new Option();
oNewOption.text = "Kakinada";
oNewOption.value = "1";
document.getElementById("selDist").add(oNewOption, 0);
//alert(document.getElementById("selDist").options.length);
oNewOption = new Option();
oNewOption.text = "Vijayawada";
oNewOption.value = "2";
document.getElementById("selDist").add(oNewOption, 1);
}
else {
var k = document.getElementById("selDist").options.length;
for (var i = 0; i <= k; i++) {
document.getElementById("selDist").options.remove(i);
}
oNewOption = new Option();
oNewOption.text = "ABCE";
oNewOption.value = "3";
document.getElementById("selDist").add(oNewOption, 0);
oNewOption = new Option();
oNewOption.text = "ABPE";
oNewOption.value = "4";
document.getElementById("selDist").add(oNewOption, 1);
}
}
function funValidation1() {
//alert("hai");
var b = document.getElementById("selDist").selectedIndex;
//alert(b);
if (b == "0") {
var k = document.getElementById("selDist").options.length;
for (var i = 0; i <= k; i++) {
document.getElementById("selTown").options.remove(i);
}
oNewOption = new Option();
oNewOption.text = "town1";
oNewOption.value = "1";
document.getElementById("selTown").add(oNewOption, 0);
oNewOption = new Option();
oNewOption.text = "town2";
oNewOption.value = "2";
document.getElementById("selTown").add(oNewOption, 1);
}
else if (b == "1") {
var k = document.getElementById("selDist").options.length;
for (var i = 0; i <= k; i++) {
document.getElementById("selTown").options.remove(i);
}
oNewOption = new Option();
oNewOption.text = "town3";
oNewOption.value = "1";
document.getElementById("selTown").add(oNewOption, 0);
oNewOption = new Option();
oNewOption.text = "town 4";
oNewOption.value = "2";
document.getElementById("selTown").add(oNewOption, 1);
}
}   



*/
// *********************** Functions used to display cost of bike dynamically based on options selected in select boxes *****************
function funCost() {
    if (document.getElementById("sel1").selectedIndex == 1) {
        if (document.getElementById("sel2").selectedIndex == 1) {
            if (document.getElementById("sel3").selectedIndex == 1) {
                document.getElementById("txtCstBk").value = 50000;
            }
            if (document.getElementById("sel3").selectedIndex == 2) {
                document.getElementById("txtCstBk").value = 48000;
            }
            if (document.getElementById("sel3").selectedIndex == 3) {
                document.getElementById("txtCstBk").value = 51000;
            }
        }

        if (document.getElementById("sel2").selectedIndex == 2) {
            if (document.getElementById("sel3").selectedIndex == 1) {
                document.getElementById("txtCstBk").value = 50000;
            }
            if (document.getElementById("sel3").selectedIndex == 2) {
                document.getElementById("txtCstBk").value = 75000;
            }
            if (document.getElementById("sel3").selectedIndex == 3) {
                document.getElementById("txtCstBk").value = 62000;
            }
        }
        if (document.getElementById("sel2").selectedIndex == 3) {
            if (document.getElementById("sel3").selectedIndex == 1) {
                document.getElementById("txtCstBk").value = 50000;
            }
            if (document.getElementById("sel3").selectedIndex == 2) {
                document.getElementById("txtCstBk").value = 60000;
            }
            if (document.getElementById("sel3").selectedIndex == 3) {
                document.getElementById("txtCstBk").value = 52000;
            }
        }
    }
    if (document.getElementById("sel1").selectedIndex == 2) {
        if (document.getElementById("sel2").selectedIndex == 1) {
            if (document.getElementById("sel3").selectedIndex == 1) {
                document.getElementById("txtCstBk").value = 50000;
            }
            if (document.getElementById("sel3").selectedIndex == 2) {
                document.getElementById("txtCstBk").value = 48000;
            }
            if (document.getElementById("sel3").selectedIndex == 3) {
                document.getElementById("txtCstBk").value = 51000;
            }
        }

        if (document.getElementById("sel2").selectedIndex == 2) {
            if (document.getElementById("sel3").selectedIndex == 1) {
                document.getElementById("txtCstBk").value = 50000;
            }
            if (document.getElementById("sel3").selectedIndex == 2) {
                document.getElementById("txtCstBk").value = 75000;
            }
            if (document.getElementById("sel3").selectedIndex == 3) {
                document.getElementById("txtCstBk").value = 62000;
            }
        }
        if (document.getElementById("sel2").selectedIndex == 3) {
            if (document.getElementById("sel3").selectedIndex == 1) {
                document.getElementById("txtCstBk").value = 50000;
            }
            if (document.getElementById("sel3").selectedIndex == 2) {
                document.getElementById("txtCstBk").value = 60000;
            }
            if (document.getElementById("sel3").selectedIndex == 3) {
                document.getElementById("txtCstBk").value = 52000;
            }
        }
    }
    if (document.getElementById("sel1").selectedIndex == 3) {
        if (document.getElementById("sel2").selectedIndex == 1) {
            if (document.getElementById("sel3").selectedIndex == 1) {
                document.getElementById("txtCstBk").value = 50000;
            }
            if (document.getElementById("sel3").selectedIndex == 2) {
                document.getElementById("txtCstBk").value = 48000;
            }
            if (document.getElementById("sel3").selectedIndex == 3) {
                document.getElementById("txtCstBk").value = 51000;
            }
        }
        if (document.getElementById("sel2").selectedIndex == 2) {
            if (document.getElementById("sel3").selectedIndex == 1) {
                document.getElementById("txtCstBk").value = 50000;
            }
            if (document.getElementById("sel3").selectedIndex == 2) {
                document.getElementById("txtCstBk").value = 75000;
            }
            if (document.getElementById("sel3").selectedIndex == 3) {
                document.getElementById("txtCstBk").value = 62000;
            }
        }
        if (document.getElementById("sel2").selectedIndex == 3) {
            if (document.getElementById("sel3").selectedIndex == 1) {
                document.getElementById("txtCstBk").value = 50000;
            }
            if (document.getElementById("sel3").selectedIndex == 2) {
                document.getElementById("txtCstBk").value = 60000;
            }
            if (document.getElementById("sel3").selectedIndex == 3) {
                document.getElementById("txtCstBk").value = 52000;
            }
        }
    }
}

//********************************* Function which allows Numbers only **********************
function numberValidation(event) {
    var err = "";
    var charcode = event.which ? event.which : event.keyCode;
    if (((charcode >= 48) && (charcode <= 57)) || (charcode == 8) || (charcode == 9)) {
        return true;
    }
    else {
        err += "please enter numbers only <br/>";
        return false;
    }
    document.getElementById("errmsg").innerHTML = err;
}
// ********** Function used to display Remaining Balance in text box dynamically based on value entered in Advance paid
function balance() {
    var a = document.getElementById("txtCstBk").value;
    var b = document.getElementById("txtAdv").value;
    a = Number(a);
    b = Number(b);
    // var c = document.getElementById("txtBal").value;
    if ((b >= 500) && (b <= a)) {
        var c = a - b;
        document.getElementById("txtBal").value = c;
    }
}
// ********** Function used to enter only alphabets and some special characters into text box****************
function alphabets(evt) {
    var num2 = (evt.which) ? evt.which : evt.keyCode;
    var err = ""
    if ((num2 >= 97 && num2 <= 122) || (num2 == 32) || (num2 >= 65 && num2 <= 90) || (num2 == 46) || (num2 == 9) || (num2 == 8)) {
        return true;
    }
    else {
        //alert("Enter only alphabets");
        err += "Please enter alphabets only <br/>";
        return false;
    }
    document.getElementById("errmsg").innerHTML = err;
}
// ********************** Function Clear() **************************************
function funClear() {
    //alert("hai");
    document.getElementById("custNm").value = ""; //i
    document.getElementById("arAdd").value = "";
    document.getElementById("phnNum").value = "";
    document.getElementById("sel1").value = "Select";
    document.getElementById("sel2").selectedIndex = 0;
    document.getElementById("sel3").selectedIndex = 0;
    document.getElementById("radCsh").checked = true;
    document.getElementById("cCard").checked = false;
    document.getElementById("cheq").checked = false;
    document.getElementById("accChk").checked = false;
    //document.getElementById("txtDOB").innerHTML = "";
    document.getElementById("PickupDate").value = "";
    document.getElementById("txtCstBk").value = "";
    document.getElementById("txtAdv").value = "";
    document.getElementById("txtBal").value = "";
    document.getElementById("txt").value = "";
    document.getElementById("txt1").value = "";
    document.getElementById("errmsg").innerHTML = "";
    document.getElementById("id1").style.display = "none";
    document.getElementById("id2").style.display = "none";
    document.getElementById("txt").style.display = "none";
    document.getElementById("id3").style.display = "none";
    document.getElementById("id4").style.display = "none";
    document.getElementById("txt1").style.display = "none";

}
// ****************************** Function Clear ***********************************************
function funCancel() {
    document.getElementById("custNm").value = ""; //i
    document.getElementById("arAdd").value = "";
    document.getElementById("phnNum").value = "";
    document.getElementById("sel1").value = "Select";
    document.getElementById("sel2").value = "Select";
    document.getElementById("sel3").value = "Select";
    document.getElementById("radCsh").checked = false;
    document.getElementById("cCard").checked = false;
    document.getElementById("cheq").checked = false;
    document.getElementById("accChk").checked = false;
    document.getElementById("txtDOB").innerHTML = "";
    document.getElementById("PickupDate").value = "";
    document.getElementById("txtCstBk").value = "";
    document.getElementById("txtAdv").value = "";
    document.getElementById("txtBal").value = "";
    /* var table = document.getElementById("tabTar");
    var rowCount = table.rows.length;
    document.getElementById("td1").innerHTML = "Available Records:" + (rowCount - 3);
    var len = table.rows.length;
    var i = obj.lastIndexOf("_");
    var rowid = obj.substring(i + 1, obj.length);

    table.deleteRow(rowid);
    rowid--;
    len--;*/
    document.getElementById("errmsg").innerHTML = "";
}
//*********************** Function used to delete the data in the grid labels ****************************************
function fundelete(obj) {
    var lblrec = document.getElementById("lblavailabrec").innerHTML;
    var table = document.getElementById("tabTar");
    var rowCount = table.rows.length;
    var rowNumber = obj.parentNode.parentNode.rowIndex;
    var a = document.getElementById("custNm").value;
    var agree = confirm("Are you sure you wish to delete?");
    if (agree) {
        if (a == "") {
            if (parseInt(document.getElementById("tabTar").rows.length) > 0) {
                document.getElementById("tabTar").deleteRow(rowNumber);
                document.getElementById("lblavailabrec").innerHTML = parseInt(lblrec) - 1;
            }
        }
        else {

            alert("Please Update the record first");
        }


    }


}
// ********************* Function used to compare dates *******************************
/*function funComp() {
    //debugger;
    //alert("jhi");
    var err = "";
    var a = document.getElementById("txtDOB").value.split('-');
    var b = document.getElementById("PickupDate").value.split('-');
    //var db1 = new Date(a[0]);
    var db = new Date(a[2], a[1], a[0] + 10);
    var dod = new Date(b[2], b[1], b[0]);
    //alert(db);
    //alert(dod);
    if (db < dod) {

        err += "Date of Delivery should be 10 days greater than Date Of Booking <br/>";
    }
    document.getElementById("errmsg").innerHTML = err;
}*/
// *********************** Function used to edit the row present in the grid table ************************
function funedit(obj) {
    //document.getElementById("lblupdate").style.display = "block";
    //document.getElementById("btnSub").style.display = "none";
    //debugger;
    //alert("hai");
    document.getElementById("errmsg").innerHTML = "";
    var table = document.getElementById("tabTar");
    var rowCount = table.rows.length;
    var rowNumber = obj.parentNode.parentNode.rowIndex;
    document.getElementById("custNm").value = table.rows[rowNumber].cells[2].innerHTML;
    document.getElementById("arAdd").value = table.rows[rowNumber].cells[3].innerHTML;
    document.getElementById("phnNum").value = table.rows[rowNumber].cells[4].innerHTML;
    
    
    
    document.getElementById("sel1").value = table.rows[rowNumber].cells[5].innerHTML;
    funValidation();
    
    
    document.getElementById("sel2").value = table.rows[rowNumber].cells[6].innerHTML;
    
    funValidation1();
    
    document.getElementById("sel3").value = table.rows[rowNumber].cells[7].innerHTML;
    //document.getElementById("txtarea").value = table.rows[rowNumber].cells[9].innerHTML;
    document.getElementById("txtDOB").innerHTML = table.rows[rowNumber].cells[9].innerHTML;
    document.getElementById("PickupDate").value = table.rows[rowNumber].cells[10].innerHTML;
    var a = table.rows[rowNumber].cells[11].innerHTML;
    //alert(a);
    if (a == "Cash") {
        document.getElementById("radCsh").checked = true;
    }
    else if (a == "Credit Card") {
        document.getElementById("cCard").checked = true;
    }
    else {
        document.getElementById("cheq").checked = true;
    }
    var b = table.rows[rowNumber].cells[8].innerHTML;
    if (b == "Accessories") {
        document.getElementById("accChk").checked = true;
    }
    document.getElementById("txtCstBk").value = table.rows[rowNumber].cells[12].innerHTML;
    //document.getElementById("Select1").value = table.rows[rowNumber].cells[13].innerHTML;
    document.getElementById("txtAdv").value = table.rows[rowNumber].cells[13].innerHTML;
    document.getElementById("txtBal").value = table.rows[rowNumber].cells[14].innerHTML;


    if (document.getElementById("cCard").checked == true) {
        document.getElementById("id1").style.display = "block";
        document.getElementById("id2").style.display = "block";
        document.getElementById("txt").style.display = "block";
        document.getElementById("txt1").style.display = "none";
        document.getElementById("id3").style.display = "none";
        document.getElementById("id4").style.display = "none";
        document.getElementById("txt").value = table.rows[rowNumber].cells[15].innerHTML;
    }
    else if (document.getElementById("cheq").checked == true) {

        document.getElementById("id1").style.display = "none";
        document.getElementById("id2").style.display = "none";
        document.getElementById("txt").style.display = "none";
        document.getElementById("txt1").style.display = "block";
        document.getElementById("id3").style.display = "block";
        document.getElementById("id4").style.display = "block";
        document.getElementById("txt1").value = table.rows[rowNumber].cells[15].innerHTML;
    }
   

    /*var table = document.getElementById("tabTar");
    //var rowCount = table.rows.length;
    // document.getElementById("td1").innerHTML = "Available Records:" + (rowCount - 3);
    var len = table.rows.length;
    var i = obj.lastIndexOf("_");
    var rowid = obj.substring(i + 1, obj.length);
       
        
    table.deleteRow(rowid); */
    //alert("hai");
    document.getElementById("td3").innerHTML = "<input type='button' class='style' value='Update' onclick='javascript:update(" + rowNumber + ")'>";
    document.getElementById("td4").innerHTML = "<input type='button' value='Reset' class='style' onclick='javascript:funreset(" + rowNumber + ")'>";
}
//var num_days = (((diff / 1000) / 60) / 60) / 24;
// ******************** Function used to edit the records present in the Grid Table *******************************
function update(rowId) {
    //alert("");
    //debugger;
    document.getElementById("errmsg").innerHTML = "";
    var table = document.getElementById("tabTar");
    var rowNumber = parseInt(rowId);
    var err = "";
    //alert("hai");
    var cname = document.getElementById("custNm").value;
    //alert(cname);
    if (cname == "") {
        err += "Please Enter Customer Name <br/>";
        //alert(err);
    }
    /*var cadd = document.getElementById("arAdd").value;
    if (cadd == "") {
    err += "Please Enter Your Address <br/>";
    }*/
    var cpn = document.getElementById("phnNum").value;
    if (cpn == "") {
        err += "Please Enter Phone Number<br/>";
    }
    else if (cpn.length != 10) {
        err += "Please Enter Valid Phone Number<br/>";
    }


    var card = document.getElementById("cCard").checked;
    var len = document.getElementById("txt").value;
    if (card == true) {
        if (len == "") {
            err += "Please Enter Credit Card Number <br/>";
        }
        else if (len.length != 16) {
            err += "Please Enter Valid Credit Card Number <br/>";
        }
    }
    var cheque = document.getElementById("cheq").checked;
    var len1 = document.getElementById("txt1").value;
    if (cheque == true) {
        if (len1 == "") {
            err += "Please Enter Cheque Number <br/>";
        }
        else if (len1.length != 10) {
            err += "Please Enter Valid Cheque Number <br/>";
        }
    }
    var cmp = document.getElementById("sel1").value;
    if (cmp == "Select") {
        err += "Please Select Company Name <br/>";
    }
    var mod = document.getElementById("sel2").value;
    if (mod == "Select") {
        err += "Please Select Model <br/>";
    }
    var col = document.getElementById("sel3").value;
    if (col == "Select") {
        err += "Please Select Color <br/>";
    }
    var book = document.getElementById("txtDOB").innerHTML;
    if (book == "") {
        err += "Please enter the Date of booking <br/>";
    }
    var delivery = document.getElementById("PickupDate").value;
    if (delivery == "") {
        err += "Please Enter the Date Of Delivery <br/>";
    }
    var cash = document.getElementById("radCsh").checked;
    var card = document.getElementById("cCard").checked;
    var cheque = document.getElementById("cheq").checked;
    if ((cash == false) && (card == false) && (cheque = false)) {
        err += "Please select the Payment-Mode <br/>";
    }
    var paid = document.getElementById("txtAdv").value;
    var cost = document.getElementById("txtCstBk").value;
    paid=Number(paid);
    cost=Number(cost);
    if (paid == "") {
        err += "Please Enter the Amount Paid <br/>";
    }
    else if (paid <= 500) {
        err += "Please pay the Advance more than 500.<br/>";
    }
    else if (paid > cost) {
        err += "Advance paid must not be greater than Cost of Bike <br/>"
    }
    if (err == "") {

        table.rows[rowNumber].cells[2].innerHTML = document.getElementById("custNm").value;
        table.rows[rowNumber].cells[3].innerHTML = document.getElementById("arAdd").value;
        table.rows[rowNumber].cells[4].innerHTML = document.getElementById("phnNum").value;
        table.rows[rowNumber].cells[5].innerHTML = document.getElementById("sel1").value;
        table.rows[rowNumber].cells[6].innerHTML = document.getElementById("sel2").value;
        table.rows[rowNumber].cells[7].innerHTML = document.getElementById("sel3").value;
        //document.getElementById("txtarea").value = table.rows[rowNumber].cells[9].innerHTML;
        var value_check = document.getElementById("accChk").checked;
        if (value_check == true) {

            table.rows[rowNumber].cells[8].innerHTML = "Yes";
        }

        else {

            table.rows[rowNumber].cells[8].innerHTML = "No";
        }
        table.rows[rowNumber].cells[9].innerHTML = document.getElementById("txtDOB").innerHTML;
        table.rows[rowNumber].cells[10].innerHTML = document.getElementById("PickupDate").value;

        var d = document.getElementById("radCsh").value;
        var e = document.getElementById("cCard").value;
        var f = document.getElementById("cheq").value;
        if (document.getElementById("radCsh").checked == true) {
            table.rows[rowNumber].cells[11].innerHTML = "Cash";
            //alert(g);
        }
        else if (document.getElementById("cCard").checked == true) {
            table.rows[rowNumber].cells[11].innerHTML = "Credit Card";
        }
        else {
            table.rows[rowNumber].cells[11].innerHTML = "Cheque";
        }
       // document.getElementById("txtCstBk").value = table.rows[rowNumber].cells[12].innerHTML;
        //document.getElementById("Select1").value = table.rows[rowNumber].cells[13].innerHTML;
       // document.getElementById("txtAdv").value = table.rows[rowNumber].cells[13].innerHTML;
        // document.getElementById("txtBal").value = table.rows[rowNumber].cells[14].innerHTML;
        table.rows[rowNumber].cells[12].innerHTML = document.getElementById("txtCstBk").value;
        table.rows[rowNumber].cells[13].innerHTML = document.getElementById("txtAdv").value;
        table.rows[rowNumber].cells[14].innerHTML = document.getElementById("txtBal").value;

        if (document.getElementById("cCard").checked == true) {

            table.rows[rowNumber].cells[15].innerHTML = document.getElementById("txt").value;
        }
        else if (document.getElementById("cheq").checked == true) {

            table.rows[rowNumber].cells[15].innerHTML = document.getElementById("txt1").value;
        }
        else if (document.getElementById("radCsh").checked == true) {

            table.rows[rowNumber].cells[15].innerHTML = "-";
            table.rows[rowNumber].cells[15].align = "center";
        }
        //alert("hai");
        document.getElementById("form1").reset();
        /* document.getElementById("custNm").value = ""; //i
        document.getElementById("arAdd").value = "";
        document.getElementById("phnNum").value = "";
        document.getElementById("sel1").value = "Select";
        document.getElementById("sel2").selectedIndex = 0;
        document.getElementById("sel3").selectedIndex = 0;
        document.getElementById("radCsh").checked = false;
        document.getElementById("cCard").checked = false;
        document.getElementById("cheq").checked = false;
        document.getElementById("accChk").checked = false;
        document.getElementById("txtDOB").value = "";
        document.getElementById("PickupDate").value = "";
        document.getElementById("txtCstBk").value = "";
        document.getElementById("txtAdv").value = "";
        document.getElementById("txtBal").value = "";
        document.getElementById("txt").value = "";
        document.getElementById("txt1").value = "";
        document.getElementById("errmsg").innerHTML = "";
        document.getElementById("id1").style.display = "none";
        document.getElementById("id2").style.display = "none";
        document.getElementById("txt").style.display = "none";
        document.getElementById("id3").style.display = "none";
        document.getElementById("id4").style.display = "none";
        document.getElementById("txt1").style.display = "none";*/
        document.getElementById("td3").innerHTML = "<input type='button' class='style' value='Submit' onclick='javascript:return funSubmit()'>";
        document.getElementById("td4").innerHTML = "<input type='button' class='style' value='Clear' onclick='javascript:return funClear()'>";
        document.getElementById("txt").style.display = "none";
        document.getElementById("txt1").style.display = "none";
        document.getElementById("id1").style.display = "none";
        document.getElementById("id2").style.display = "none";
        document.getElementById("id3").style.display = "none";
        document.getElementById("id4").style.display = "none";
        for (i = 1; i <= 2; i++) {
            var n = document.getElementById("sel2");
            n.options[0] = new Option("Select", "Select");
            n.options[1] = null;
            n.options[2] = null;
            n.options[3] = null;
            var m = document.getElementById("sel3");
            m.options[0] = new Option("Select", "Select");
            m.options[1] = null;
            m.options[2] = null;
            m.options[3] = null;
        }
    }
    else {
        document.getElementById("errmsg").innerHTML = err;
    }
}
// **************************** Function used to reset the Fields in the Screen **************************
function funreset(eve) {
    var table1 = document.getElementById("tabTar")
    //var table = document.getElementById("tableValues")

    var rowCount = table1.rows.length;

    var rowid = parseInt(eve);
    var tabrow = table1.rows[rowid];
    //alert("hi1");
    document.getElementById("custNm").value = table1.rows[rowid].cells[2].innerHTML;
    document.getElementById("arAdd").value = table1.rows[rowid].cells[3].innerHTML;
    document.getElementById("phnNum").value = table1.rows[rowid].cells[4].innerHTML;
    document.getElementById("sel1").value = table1.rows[rowid].cells[5].innerHTML;
    document.getElementById("sel2").value = table1.rows[rowid].cells[6].innerHTML;
    document.getElementById("sel3").value = table1.rows[rowid].cells[7].innerHTML;
    //document.getElementById("accChk").value = table1.rows[rowid].cells[8].innerHTML;
    document.getElementById("txtDOB").innerHTML = table1.rows[rowid].cells[9].innerHTML;
    document.getElementById("PickupDate").value = table1.rows[rowid].cells[10].innerHTML;

    if (tabrow.cells[11].innerHTML == "Cash") {
        document.getElementById("radCsh").checked = true;
        document.getElementById("txt").style.display = "none";
        document.getElementById("txt1").style.display = "none";
        document.getElementById("id1").style.display = "none";
        document.getElementById("id2").style.display = "none";
        document.getElementById("id3").style.display = "none";
        document.getElementById("id4").style.display = "none";
    }
    else if (tabrow.cells[11].innerHTML == "Credit Card") {
        document.getElementById("cCard").checked = true;
    }
    else {
        document.getElementById("cheq").checked = true;
    }
    if (tabrow.cells[8].innerHTML == "Yes") {
        document.getElementById("accChk").checked = true;
    }
    else {
        document.getElementById("accChk").checked = false;
    }

    document.getElementById("txtCstBk").value = table1.rows[rowid].cells[12].innerHTML;
    document.getElementById("txtAdv").value = table1.rows[rowid].cells[13].innerHTML;
    document.getElementById("txtBal").value = table1.rows[rowid].cells[14].innerHTML;
    document.getElementById("txt").value = table1.rows[rowid].cells[15].innerHTML;
    document.getElementById("txt1").value = table1.rows[rowid].cells[15].innerHTML;

}
function accrate() {
    //alert("hai");
    var f = document.getElementById("sel1").value;
    var d = document.getElementById("sel2").value;
    var e = document.getElementById("sel3").value;
    //alert(f);

    if ((f == "Select") && (d == "Select") && (e == "Select")) {
        g = document.getElementById("accChk").checked;
        if (g == true) {
            document.getElementById("txtCstBk").value = 0;
        }
        else {
            document.getElementById("txtCstBk").value = "";
        }
    }
    var a = document.getElementById("txtCstBk");
    var b = 2000;
    if (document.getElementById("accChk").checked == true) 
    {        
            var c = parseInt(a.value, 10) + parseInt(b, 10);
            // alert(c);
            a.value = c;
    }
    else if (document.getElementById("accChk").checked == false) 
    {
        c = parseInt(a.value, 10) - parseInt(b, 10);
        a.value = c;
    }
    
}
/*function assign() {

    document.getElementById("txtAdv").value = "";
}*/