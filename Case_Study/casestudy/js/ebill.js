function funadd() {

    var table = document.getElementById("table1");
    var errormsg = "";
    document.getElementById("lblerror").innerHTML = "";

    var name = document.getElementById("txtname").value;
    var bno1 = document.getElementById("txtbno").value;
    var addr = document.getElementById("tareaaddr").value;
    var phase1 = document.getElementById("rbtn1").checked;
    var phase2 = document.getElementById("rbtn2").checked;
    var prevread = document.getElementById("txtprevread").value;
    var presread = document.getElementById("txtpresread").value;
    var units = document.getElementById("lblunits").innerHTML;
    var selcat = document.getElementById("selcat").value;
    var selvolt = document.getElementById("selvolt").value;
    var price = document.getElementById("lblprice").innerHTML;
    var date1 = document.getElementById("txtdate1").value;
    var date2 = document.getElementById("txtdate2").value;
    var arrear = document.getElementById("cbox1").checked;
    var dueamt = document.getElementById("txtdueamt").value;
    var date3 = document.getElementById("txtdate3").value;
    var fine = document.getElementById("lblfine").innerHTML;
    var billamt = document.getElementById("lblbillamt").innerHTML;
    var bno = parseInt(bno1);
    if (name == "") {
        errormsg += "Enter the Name of the Person<br/>";
    }
    if (bno1 == "") {
        errormsg += "Enter the Bill Number<br/>";
    }
     
    else if (bno == "0") {

        errormsg += "Bill number value should not be Zero<br/>";
        document.getElementById("txtbno").value = "";
    }
    else { }
    if (addr == "") {
        errormsg += "Enter the Address<br/>";
    }
    else if (addr.length > 257) {
        errormsg += "Address textarea accepts 256 characters only<br/>";
        document.getElementById("tareaaddr").value = "";
    }
    else { }
    if ((phase1 == false) && (phase2 == false)) {
        errormsg += "Select one Phase<br/>";
    }
    if (prevread == "") {
        errormsg += "Enter the Previous Reading<br/>";
    }
    if (presread == "") {
        errormsg += "Enter the Present Reading<br/>";
    }

    /*if ((prevread!="")&&(presread!="")) {
    errormsg += "Present Reading value should be less than the Previous Reading Value <br/>";
    //document.getElementById("txtpresread").value = "";
    }*/
    if ((phase1 == false) && (phase2 == false)) {

        document.getElementById("selvolt").disabled = true;
    }
    else {
        if ((selcat == "sel") && (selvolt == "select")) {
            errormsg += "Select Category<br/>";
        }
        else if (selcat == "sel") {
            errormsg += "Select any one Category Value<br/>";
        }
        else if (selvolt == "sel") {
            errormsg += "Select any one Voltage Value<br/>";
        }
        else {

        }
    }
    if (date1 == "") {
        errormsg += "Enter Bill issue Date<br/>";
    }

    if (date2 == "") {
        errormsg += "Enter Final Date to Pay<br/>";
    }
    if (date3 == "") {
        errormsg += "Enter Paid On<br/>";
    }
    /*if (price == "") {
    errormsg += "Price should not be blank<br/>";
    }*/
    if ((arrear == true) && (dueamt == "")) {
        document.getElementById("lblbillamt").innerHTML = "";
        errormsg += "Due amt should not be blank<br/>";
    }
    else {
        document.getElementById("lblbillamt").innerHTML = "";
        document.getElementById("txtdueamt").value = dueamt;
    }

    /*if (fine == "") {
    errormsg += "Fine should not be blank<br/>";
    }*/
    if ((billamt == "") && (price != "")) {
        errormsg += "Bill Amount Label is blank. Click Calculate<br/>";
    }


    if (errormsg == "") {

        var rows = table.rows.length;
        var row = table.insertRow(rows);
        var records = document.getElementById("lblar").innerHTML;
        var records1 = Number(records);
        records1 = records1 + 1;


        document.getElementById("lblar").innerHTML = records1;



        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
        var cell7 = row.insertCell(6);
        var cell8 = row.insertCell(7);
        var cell9 = row.insertCell(8);
        var cell10 = row.insertCell(9);
        var cell11 = row.insertCell(10);
        var cell12 = row.insertCell(11);
        var cell13 = row.insertCell(12);
        var cell14 = row.insertCell(13);
        var cell15 = row.insertCell(14);
        var cell16 = row.insertCell(15);
        var cell17 = row.insertCell(16);
        var cell18 = row.insertCell(17);
        var cell19 = row.insertCell(18);
        
        cell1.align = "center";
        cell2.align = "center";
        cell4.align = "right";
        cell7.align = "right";
        cell8.align = "right";
        cell9.align = "right";
        cell12.align = "right";
        cell13.align = "center";
        cell14.align = "center";
        cell16.align = "right";
        cell17.align = "right";
        cell18.align = "right";
        cell19.align = "center";

        //cell5.ItemStyle.Width = colWidth;
        //cell5.Width = Unit.Pixel(50);




        //cell1.innerHTML = "<img src='img/Edit.gif'  id='img_1' onclick='javascript:funedit(this);' >";
        //cell2.innerHTML = "<img src='img/Delete.gif' id='img_2' onclick='javascript:fundelete(this);' >";
        cell1.innerHTML = "<img src='images/Edit.gif' alt='edit' id='img_" + rows + "' onclick='javascript:funedit(this);' >";
        cell2.innerHTML = "<img src='images/Delete.gif' alt='delete' id='img_" + rows + "'onclick='javascript:fundelete(this);' >";
        cell3.innerHTML = name;
        cell4.innerHTML = bno;
        cell5.innerHTML = addr;
        if (phase1 == true) {
            cell6.innerHTML = document.getElementById("rbtn1").value;
        }
        else {
            cell6.innerHTML = document.getElementById("rbtn2").value;
        }
        cell7.innerHTML = prevread;
        cell8.innerHTML = presread;
        cell9.innerHTML = units;
        cell10.innerHTML = selcat;
        cell11.innerHTML = selvolt;
        cell12.innerHTML = price;
        cell13.innerHTML = date1;
        cell14.innerHTML = date2;
        cell15.innerHTML = arrear;
        if (dueamt == "") {
            cell16.innerHTML = "0";
        }
        else {
            cell16.innerHTML = dueamt;
        }
        if (fine == "") {
            cell17.innerHTML = "0";
        }
        else {
            cell17.innerHTML = fine;
        }
        cell18.innerHTML = billamt;
        cell19.innerHTML = date3;
        document.getElementById("txtname").value = "";
        document.getElementById("txtbno").value = "";
        document.getElementById("tareaaddr").value = "";
        document.getElementById("rbtn1").checked = false;
        document.getElementById("rbtn2").checked = false;
        document.getElementById("txtprevread").value = "";
        document.getElementById("txtpresread").value = "";
        document.getElementById("lblunits").innerHTML = "";
        for (i = 1; i <= 2; i++) {
            var x = document.getElementById("selcat");
            x.options[0] = new Option("---Select---", "select");
            x.options[1] = null;
            x.options[2] = null;
            x.options[3] = null;
            var n = document.getElementById("selvolt");
            n.options[0] = new Option("---Select---", "select");
            n.options[1] = null;
            n.options[2] = null;
            n.options[3] = null;
        }
        document.getElementById("selcat").selectedIndex = 0;
        document.getElementById("selvolt").selectedIndex = 0;
        /* if (document.getElementById("selcat").value == "select") {
        document.getElementById("selvolt").disabled = false;
        }
        else {
        document.getElementById("selvolt").disabled = true;
        }*/
        document.getElementById("lblprice").innerHTML = "";
        document.getElementById("txtdate1").value = "";
        document.getElementById("txtdate2").value = "";
        document.getElementById("cbox1").checked = false;
        document.getElementById("txtdueamt").value = "0";
        document.getElementById("dueamt").style.display = "none"
        document.getElementById("txtdueamt").style.display = "none";
        document.getElementById("txtdate3").value = "";
        document.getElementById("lblfine").innerHTML = "0";
        document.getElementById("fine").style.display = "none";
        document.getElementById("lblfine").style.display = "none";
        document.getElementById("lblbillamt").innerHTML = "";
    }
    else {
        document.getElementById("lblerror").innerHTML = errormsg;
    }
}









function onlyalphabets(evt) {
    var code = (evt.which) ? (evt.which) : evt.keyCode;
    if (((code >= 65) && (code <= 90)) || ((code >= 97) && (code <= 122)) || (code == 46) || (code == 8) || (code == 9) || (code == 32)) {
        return true;
    }
    else {
        return false;
    }
}









function onlynumbers(evt) {
    var code = (evt.which) ? (evt.which) : evt.keyCode;
    if (((code >= 48) && (code <= 57)) || (code == 9) || (code == 8)) {
        return true;
    }
    else {
        return false;
    }
}







function fununits() {

    var errormsg = "";
    document.getElementById("lblerror").innerHTML = "";
    var prevread1 = document.getElementById("txtprevread").value;
    var presread1 = document.getElementById("txtpresread").value;
    document.getElementById("lblunits").innerHTML = "";
    if (presread1 == "") {
        errormsg += "Enter Present Reading Value<br/>";
        document.getElementById("lblerror").innerHTML = errormsg;
    }
    else if (prevread1 == "") {
        errormsg += "Enter Previous Reading Value<br/><br/>";
        document.getElementById("lblerror").innerHTML = errormsg;
        document.getElementById("txtpresread").value = "";
    }



    else {
        /*if ((presread1 == "") || (prevread1 == "")) {
        errormsg += "Enter values in Present Reading and Previous Reading<br/>";
        document.getElementById("lblerror").innerHTML = errormsg;
        document.getElementById("txtprevread").value = "";
        document.getElementById("txtpresread").value = "";
        }
        else {*/
        document.getElementById("lblerror").innerHTML = "";

        var prevread = Number(prevread1);
        var presread = Number(presread1);

        /*var prevread = int.Parse(presread1);
        var presread = int.Parse(presread1);*/
        if (presread <= prevread) {
            document.getElementById("lblunits").innerHTML = "";
            errormsg += "The Present Reading Value should be greater than the Previous Reading value<br/>";
            document.getElementById("lblerror").innerHTML = errormsg;
            document.getElementById("txtpresread").value = "";
        }
        else {
            var units = presread - prevread;
            document.getElementById("lblunits").innerHTML = units;
        }
    }
}










function funradio() {
    document.getElementById("lblerror").innerHTML = "";
    document.getElementById("lblbillamt").innerHTML = "";
    document.getElementById("selvolt").disabled = true;
    document.getElementById("lblprice").innerHTML = "";

    for (i = 1; i <= 2; i++) {
        var x = document.getElementById("selcat");
        x.options[0] = new Option("---Select---", "select");
        x.options[1] = null;
        x.options[2] = null;
        x.options[3] = null;
        var n = document.getElementById("selvolt");
        n.options[0] = new Option("---Select---", "select");
        n.options[1] = null;
        n.options[2] = null;
        n.options[3] = null;
    }

    var r2 = document.getElementById("rbtn2").checked;
    var r1 = document.getElementById("rbtn1").checked;

    if ((r1 == true) && (r2 == false)) {
        var sp = document.getElementById("selcat");
        sp.options[0] = new Option("---select---", "sel");
        sp.options[1] = new Option("cat1-1", "cat11");
        sp.options[2] = new Option("cat1-2", "cat12");
        sp.options[3] = new Option("cat1-3", "cat13");
    }

    else {
        var mp = document.getElementById("selcat");
        mp.options[0] = new Option("---select---", "sel");
        mp.options[1] = new Option("cat3-1", "cat31");
        mp.options[2] = new Option("cat3-2", "cat32");
        mp.options[3] = new Option("cat3-3", "cat33");
    }
}









function funvolt() {
    var errormsg = "";

    document.getElementById("lblbillamt").innerHTML = "";
    document.getElementById("lblerror").innerHTML = "";
    var r1 = document.getElementById("rbtn1").checked;
    var r2 = document.getElementById("rbtn2").checked;
    var prevread1 = document.getElementById("txtprevread").value;
    var presread1 = document.getElementById("txtpresread").value;
    var prevread = Number(prevread1);
    var presread = Number(presread1);

    /*var prevread = int.Parse(presread1);
    var presread = int.Parse(presread1);*/

    if (prevread == "") {
        errormsg += "Previous Reading should not be empty.<br/>";
        document.getElementById("lblerror").innerHTML = errormsg;
    }
    else if (presread == "") {
        errormsg += "Present Reading should not be empty<br/>";
        document.getElementById("lblerror").innerHTML = errormsg;
    }
    else if (presread <= prevread) {
        document.getElementById("lblunits").innerHTML = "";
        errormsg += "The Present Reading Value should be greater than the Previous Reading value<br/>";
        document.getElementById("lblerror").innerHTML = errormsg;
        document.getElementById("txtpresread").value = "";
    }
    else {
        if ((r1 == false) && (r2 == false)) {
            errormsg += "Select Phase<br/>";
            document.getElementById("lblerror").innerHTML = errormsg;
            document.getElementById("selvolt").disabled = true;
        }
        else {
            document.getElementById("selvolt").disabled = false;
            document.getElementById("lblprice").innerHTML = "";
            for (i = 1; i <= 2; i++) {
                var n = document.getElementById("selvolt");
                n.options[0] = new Option("---Select---", "select");
                n.options[1] = null;
                n.options[2] = null;
                n.options[3] = null;
            }
            if (document.getElementById("selcat").value == "cat11") {
                var s1 = document.getElementById("selvolt");
                s1.options[0] = new Option("---select---", "sel");
                s1.options[1] = new Option("cat11-1", "cat111");
                s1.options[2] = new Option("cat11-2", "cat112");
                s1.options[3] = new Option("cat11-3", "cat113");
            }
            else if (document.getElementById("selcat").value == "cat12") {
                var vs1 = document.getElementById("selvolt");
                vs1.options[0] = new Option("---select---", "sel");
                vs1.options[1] = new Option("cat12-1", "cat121");
                vs1.options[2] = new Option("cat12-2", "cat122");
                vs1.options[3] = new Option("cat12-3", "cat123");
            }
            else if (document.getElementById("selcat").value == "cat13") {
                var vz1 = document.getElementById("selvolt");
                vz1.options[0] = new Option("---select---", "sel");
                vz1.options[1] = new Option("cat13-1", "cat131");
                vz1.options[2] = new Option("cat13-2", "cat132");
                vz1.options[3] = new Option("cat13-3", "cat133");
            }
            else if (document.getElementById("selcat").value == "cat31") {
                var w1 = document.getElementById("selvolt");
                w1.options[0] = new Option("---select---", "sel");
                w1.options[1] = new Option("cat31-1", "cat311");
                w1.options[2] = new Option("cat31-2", "cat312");
                w1.options[3] = new Option("cat31-3", "cat313");
            }
            else if (document.getElementById("selcat").value == "cat32") {
                var w2 = document.getElementById("selvolt");
                w2.options[0] = new Option("---select---", "sel");
                w2.options[1] = new Option("cat32-1", "cat321");
                w2.options[2] = new Option("cat32-2", "cat322");
                w2.options[3] = new Option("cat32-3", "cat323");
            }
            else if (document.getElementById("selcat").value == "cat33") {
                var w3 = document.getElementById("selvolt");
                w3.options[0] = new Option("---select---", "sel");
                w3.options[1] = new Option("cat33-1", "cat331");
                w3.options[2] = new Option("cat33-2", "cat331");
                w3.options[3] = new Option("cat33-3", "cat331");
            }

            else if (document.getElementById("selcat").value == "sel") {
                document.getElementById("selvolt").disabled = true;
            }
            else { }
        }
        document.getElementById("lblerror").innerHTML = errormsg;
    }
}






function funprice() {
    document.getElementById("lblerror").innerHTML = "";
    document.getElementById("lblbillamt").innerHTML = "";
    var selvolt = document.getElementById("selvolt").value;

    if (selvolt == "select") {
        document.getElementById("lblprice").innerHTML = "";
    }
    else {
        if ((selvolt == "cat111") || (selvolt == "cat121") || (selvolt == "cat131") || (selvolt == "cat311") || (selvolt == "cat321") || (selvolt == "cat331")) {
            document.getElementById("lblprice").innerHTML = "2";
        }
        else if ((selvolt == "cat112") || (selvolt == "cat122") || (selvolt == "cat132") || (selvolt == "cat312") || (selvolt == "cat322") || (selvolt == "cat332")) {
            document.getElementById("lblprice").innerHTML = "3";
        }
        else if ((selvolt == "cat113") || (selvolt == "cat123") || (selvolt == "cat133") || (selvolt == "cat313") || (selvolt == "cat323") || (selvolt == "cat333")) {
            document.getElementById("lblprice").innerHTML = "4";
        }
        else {
            document.getElementById("lblprice").innerHTML = "";
        }
    }
}






function fundiffdate() {
    document.getElementById("txtdate3").value = "";
    document.getElementById("lblbillamt").innerHTML = "";
    document.getElementById("txtdueamt").value = "0";
    document.getElementById("lblfine").innerHTML = "0";
    document.getElementById("lblfine").style.display = "none";
    document.getElementById("lblerror").innerHTML = "";
    var date1 = document.getElementById("txtdate1").value;
    var date2 = document.getElementById("txtdate2").value;
    var one_day = 1000 * 60 * 60 * 24;
    var errormsg = "";
    var x = date1.split("-");
    var y = date2.split("-");
    var date11 = new Date(x[2], (x[1] - 1), x[0]);
    var date21 = new Date(y[2], (y[1] - 1), y[0]);
    var month1 = x[1] - 1;
    var month2 = y[1] - 1;
    var datediff = Math.ceil((date21.getTime() - date11.getTime()) / (one_day));
    if (datediff == "15")
    { }
    else {
        errormsg += "The date difference between then Bill Issue date and the Final date should be 15 days<br/>";
        document.getElementById("lblerror").innerHTML = errormsg;
        document.getElementById("txtdate2").value = "";
    }
}





function funhide() {
    document.getElementById("dueamt").style.display = "none";
    document.getElementById("txtdueamt").style.display = "none";
    document.getElementById("fine").style.display = "none";
    document.getElementById("lblfine").style.display = "none";
    document.getElementById("txtdueamt").value = "";
    document.getElementById("lblfine").value = "0";
}





function fundueamt() {
    document.getElementById("lblbillamt").innerHTML = "";
    var arrear = document.getElementById("cbox1").checked;
    if (arrear == true) {
        document.getElementById("txtdueamt").value = "";
        document.getElementById("dueamt").style.display = "block";
        document.getElementById("txtdueamt").style.display = "block";
    }
    else {
        document.getElementById("dueamt").style.display = "none";
        document.getElementById("txtdueamt").style.display = "none";
    }
}





/*function funcal() {
var errormsg = "";
document.getElementById("lblerror").innerHTML = "";
var date1 = document.getElementById("txtdate1").value;
var date2 = document.getElementById("txtdate2").value;
var date3 = document.getElementById("txtdate3").value;
    
if (date1 == "") {
errormsg += "Bill Issue Date should not be blank<br/>";
document.getElementById("lblerror").innerHTML = errormsg;
}
else if (date2 == "") {
errormsg += "Final Date to Pay Date should not be blank<br/>";
document.getElementById("lblerror").innerHTML = errormsg;
}
else if (date3 == "") {
errormsg += "Paid on Date value should not be blank<br/>";
document.getElementById("lblerror").innerHTML = errormsg;
}
else {
var units1 = document.getElementById("lblunits").innerHTML;
var price1 = document.getElementById("lblprice").innerHTML;
var fine1 = document.getElementById("lblfine").innerHTML;
var dueamt1 = document.getElementById("txtdueamt").value;

if (fine1 == "") {
fine1 = "0";
}
if (dueamt1 == "") {
dueamt1 = "0";
}
if ((units1 == "")&&(price1 == "")) {
errormsg += "The Units field label and Price per Unit label should not be empty<br/>";
document.getElementById("lblerror").innerHTML = errormsg;
}
else if (units1 == "") {
errormsg += "The Units field label should not be empty<br/>";
document.getElementById("lblerror").innerHTML = errormsg;
}
else if (price1 == "") {
errormsg += "The Price per Unit field label should not be empty<br/>";
document.getElementById("lblerror").innerHTML = errormsg;
}
else {
var units = Number(units1);
var price = Number(price1);
var fine = Number(fine1);
var dueamt = Number(dueamt1);
var total = ((units * price) + fine + dueamt);
document.getElementById("lblbillamt").innerHTML = total;
}
} 
}*/










function funcal() {
    var errormsg = "";
    document.getElementById("lblerror").innerHTML = "";
    var units1 = document.getElementById("lblunits").innerHTML;
    var price1 = document.getElementById("lblprice").innerHTML;
    var fine1 = document.getElementById("lblfine").innerHTML;
    var dueamt1 = document.getElementById("txtdueamt").value;
    var arrear = document.getElementById("cbox1").checked;
    var presread=document.getElementById("txtpresread").value;
    if (fine1 == "") {
        fine1 = "0";
    }

   
    if ((arrear == true) && (dueamt1 == "")) {
        document.getElementById("lblbillamt").innerHTML = "";
        errormsg += "Due amt should not be blank<br/>";
        document.getElementById("lblerror").innerHTML = errormsg;
    }
    else {

        document.getElementById("lblbillamt").innerHTML = "";
        document.getElementById("txtdueamt").value = dueamt1;

        if ((units1 == "") && (price1 == "")) {
            errormsg += "The Units field label and Price per Unit label should not be empty<br/>";
            document.getElementById("lblerror").innerHTML = errormsg;
        }
        else if (presread == "") {
            errormsg += "Present Reading should not be empty<br/>";
            document.getElementById("lblerror").innerHTML = errormsg;
         }
        else if (units1 == "") {
            errormsg += "The Units field label should not be empty<br/>";
            document.getElementById("lblerror").innerHTML = errormsg;
        }
        else if (price1 == "") {
            errormsg += "The Price per Unit field label should not be empty<br/>";
            document.getElementById("lblerror").innerHTML = errormsg;
        }
        else {
            var date1 = document.getElementById("txtdate1").value;
            var date2 = document.getElementById("txtdate2").value;
            var date3 = document.getElementById("txtdate3").value;

            if (date1 == "") {
                errormsg += "Bill Issue Date should not be blank<br/>";
                document.getElementById("lblerror").innerHTML = errormsg;
            }
            else if (date2 == "") {
                errormsg += "Final Date to Pay Date should not be blank<br/>";
                document.getElementById("lblerror").innerHTML = errormsg;
            }
            else if (date3 == "") {
                errormsg += "Paid on Date value should not be blank<br/>";
                document.getElementById("lblerror").innerHTML = errormsg;
            }
            else {
                var units = Number(units1);
                var price = Number(price1);
                var fine = Number(fine1);
                var dueamt = Number(dueamt1);
                var total = ((units * price) + fine + dueamt);
                document.getElementById("lblbillamt").innerHTML = total;
            }
        }
    }
}











function funfine() {
    var errormsg = "";
    document.getElementById("lblerror").innerHTML = "";
    var date1 = document.getElementById("txtdate1").value;
    var date2 = document.getElementById("txtdate2").value;
    var date3 = document.getElementById("txtdate3").value;
    if (date3 == "") {
        errormsg += "Paid on Date value should not be blank<br/>";
        document.getElementById("lblerror").innerHTML = errormsg;
    }
    else if ((date2 == "") && (date1 == "")) {
        errormsg += "Bill Issue Date and Final Date to Pay Date should not be blank<br/>";
        document.getElementById("txtdate3").value = "";
        document.getElementById("lblerror").innerHTML = errormsg;
    }
    else if (date1 == "") {
        errormsg += "Bill Issue Date should not be blank<br/>";
        document.getElementById("txtdate3").value = "";
        document.getElementById("lblerror").innerHTML = errormsg;
    }
    else if (date2 == "") {
        errormsg += "Final Date to Pay Date should not be blank<br/>";
        document.getElementById("txtdate3").value = "";
        document.getElementById("lblerror").innerHTML = errormsg;
    }

    else {
        document.getElementById("lblbillamt").innerHTML = "";
        var one_day = 1000 * 60 * 60 * 24;

        var x = date1.split("-");
        var y = date2.split("-");
        var z = date3.split("-");

        var date11 = new Date(x[2], (x[1] - 1), x[0]);
        var date21 = new Date(y[2], (y[1] - 1), y[0]);
        var date31 = new Date(z[2], (z[1] - 1), z[0]);

        var month1 = x[1] - 1;
        var month2 = y[1] - 1;
        var month3 = z[1] - 1;

        var datediff1 = Math.ceil((date31.getTime() - date21.getTime()) / (one_day));
        var datediff2 = Math.ceil((date31.getTime() - date11.getTime()) / (one_day));

        if (datediff1 >= "1") {
            document.getElementById("fine").style.display = "block";
            document.getElementById("lblfine").style.display = "block";
            document.getElementById("lblfine").innerHTML = "50";
        }
        else if (datediff2 <= "-1") {
            errormsg += "Paid On date should not be less than the issue date<br/>";

            document.getElementById("fine").style.display = "none";
            document.getElementById("lblfine").style.display = "none";
            document.getElementById("lblfine").innerHTML = "0";
            document.getElementById("txtdate3").value = "";
            document.getElementById("lblerror").innerHTML = errormsg;
        }
        else {
            document.getElementById("fine").style.display = "none";
            document.getElementById("lblfine").style.display = "none";
            document.getElementById("lblfine").innerHTML = "0";
        }

    }
}






function funreset() {
    document.getElementById("selvolt").disabled = true;
    document.getElementById("lblprice").innerHTML = "";
    document.getElementById("lblunits").innerHTML = "";
    document.getElementById("lblfine").innerHTML = "0";
    document.getElementById("lblbillamt").innerHTML = "0";
    document.getElementById("dueamt").style.display = "none";
    document.getElementById("txtdueamt").style.display = "none";
    document.getElementById("fine").style.display = "none";
    document.getElementById("lblfine").style.display = "none";
}






/*function fundelete(obj) {
var table = document.getElementById("table1");
var rows = table.rows.length;
var row = table.insertRow(rows);


        
        
var x = obj.split("_");
var rc = x[1];
        
table.deleteRow(rc);
rc--;
rows--;



var records = document.getElementById("lblar").innerHTML;
var records1 = Number(records);
records1 = records1 - 1;

document.getElementById("lblar").innerHTML = records1;
       
}*/

function fundelete(rowId) {

    var table = document.getElementById("table1");
    var rowCount = table.rows.length;
    var rowNumber = rowId.parentNode.parentNode.rowIndex;
    //alert(rowNumber);
    if (document.getElementById("lblupdate").style.display == "block") {
        alert("Update the Existing Record");
    }
    else {

        var agree = confirm("Are you sure you wish to delete?");
        if (agree) {
            if (Number(document.getElementById("table1").rows.length) > 0) {
                document.getElementById("table1").deleteRow(rowNumber);
                var records = document.getElementById("lblar").innerHTML;
                var records1 = Number(records);
                records1 = records1 - 1;
                document.getElementById("lblar").innerHTML = records1;
            }
            else {
                records1 = records1;
                document.getElementById("lblar").innerHTML = records1;
            }
        }
    }
}




function funedit(rowId) {

    if (document.getElementById("lblupdate").style.display == "block")
    { alert("Update the Existing Record"); }
    else {

        var table = document.getElementById("table1");
        var rowCount = table.rows.length;
        var rowNumber = rowId.parentNode.parentNode.rowIndex;



        table.rows[rowNumber].cells[1].disabled = true;
        document.getElementById("txtname").value = table.rows[rowNumber].cells[2].innerHTML;
        document.getElementById("txtbno").value = table.rows[rowNumber].cells[3].innerHTML;
        document.getElementById("tareaaddr").value = table.rows[rowNumber].cells[4].innerHTML;

        if (table.rows[rowNumber].cells[5].innerHTML == "Single phase") {
            document.getElementById("rbtn1").checked = true;
            var r1 = document.getElementById("rbtn1").checked;
            var r2 = document.getElementById("rbtn2").checked;
        }
        else {
            document.getElementById("rbtn2").checked = true;
            var r2 = document.getElementById("rbtn2").checked;
            var r1 = document.getElementById("rbtn1").checked;
        }


        document.getElementById("txtprevread").value = table.rows[rowNumber].cells[6].innerHTML;
        document.getElementById("txtpresread").value = table.rows[rowNumber].cells[7].innerHTML;
        document.getElementById("lblunits").innerHTML = table.rows[rowNumber].cells[8].innerHTML;


        if ((r1 == true) && (r2 == false)) {
            var sp = document.getElementById("selcat");
            sp.options[0] = new Option("---select---", "sel");
            sp.options[1] = new Option("cat1-1", "cat11");
            sp.options[2] = new Option("cat1-2", "cat12");
            sp.options[3] = new Option("cat1-3", "cat13");
        }

        else {
            var mp = document.getElementById("selcat");
            mp.options[0] = new Option("---select---", "sel");
            mp.options[1] = new Option("cat3-1", "cat31");
            mp.options[2] = new Option("cat3-2", "cat32");
            mp.options[3] = new Option("cat3-3", "cat33");
        }





        if (table.rows[rowNumber].cells[9].innerHTML == "cat11") {
            var s1 = document.getElementById("selvolt");
            s1.options[0] = new Option("---select---", "sel");
            s1.options[1] = new Option("cat11-1", "cat111");
            s1.options[2] = new Option("cat11-2", "cat112");
            s1.options[3] = new Option("cat11-3", "cat113");
        }
        else if (table.rows[rowNumber].cells[9].innerHTML == "cat12") {
            var vs1 = document.getElementById("selvolt");
            vs1.options[0] = new Option("---select---", "sel");
            vs1.options[1] = new Option("cat12-1", "cat121");
            vs1.options[2] = new Option("cat12-2", "cat122");
            vs1.options[3] = new Option("cat12-3", "cat123");
        }
        else if (table.rows[rowNumber].cells[9].innerHTML == "cat13") {
            var vz1 = document.getElementById("selvolt");
            vz1.options[0] = new Option("---select---", "sel");
            vz1.options[1] = new Option("cat13-1", "cat131");
            vz1.options[2] = new Option("cat13-2", "cat132");
            vz1.options[3] = new Option("cat13-3", "cat133");
        }
        else if (table.rows[rowNumber].cells[9].innerHTML == "cat31") {
            var w1 = document.getElementById("selvolt");
            w1.options[0] = new Option("---select---", "sel");
            w1.options[1] = new Option("cat31-1", "cat311");
            w1.options[2] = new Option("cat31-2", "cat312");
            w1.options[3] = new Option("cat31-3", "cat313");
        }
        else if (table.rows[rowNumber].cells[9].innerHTML == "cat32") {
            var w2 = document.getElementById("selvolt");
            w2.options[0] = new Option("---select---", "sel");
            w2.options[1] = new Option("cat32-1", "cat321");
            w2.options[2] = new Option("cat32-2", "cat322");
            w2.options[3] = new Option("cat32-3", "cat323");
        }
        else if (table.rows[rowNumber].cells[9].innerHTML == "cat33") {
            var w3 = document.getElementById("selvolt");
            w3.options[0] = new Option("---select---", "sel");
            w3.options[1] = new Option("cat33-1", "cat331");
            w3.options[2] = new Option("cat33-2", "cat331");
            w3.options[3] = new Option("cat33-3", "cat331");
        }
        else { }








        if ((r1 == true) && (table.rows[rowNumber].cells[9].innerHTML == "cat11")) {
            document.getElementById("selcat").value = "cat11";
        }
        else if ((r1 == true) && (table.rows[rowNumber].cells[9].innerHTML == "cat12")) {
            document.getElementById("selcat").value = "cat12";
        }
        else if ((r1 == true) && (table.rows[rowNumber].cells[9].innerHTML == "cat13")) {
            document.getElementById("selcat").value = "cat13";
        }
        else if ((r2 == true) && (table.rows[rowNumber].cells[9].innerHTML == "cat31")) {
            document.getElementById("selcat").value = "cat31";
        }
        else if ((r2 == true) && (table.rows[rowNumber].cells[9].innerHTML == "cat32")) {
            document.getElementById("selcat").value = "cat32";
        }
        else if ((r2 == true) && (table.rows[rowNumber].cells[9].innerHTML == "cat33")) {
            document.getElementById("selcat").value = "cat33";
        }
        else { }



        if (table.rows[rowNumber].cells[10].innerHTML == "cat111") {
            document.getElementById("selvolt").value = "cat111";
        }
        else if (table.rows[rowNumber].cells[10].innerHTML == "cat112") {
            document.getElementById("selvolt").value = "cat112";
        }
        else if (table.rows[rowNumber].cells[10].innerHTML == "cat113") {
            document.getElementById("selvolt").value = "cat113";
        }
        else if (table.rows[rowNumber].cells[10].innerHTML == "cat121") {
            document.getElementById("selvolt").value = "cat121";
        }
        else if (table.rows[rowNumber].cells[10].innerHTML == "cat122") {
            document.getElementById("selvolt").value = "cat122";
        }
        else if (table.rows[rowNumber].cells[10].innerHTML == "cat123") {
            document.getElementById("selvolt").value = "cat123";
        }
        else if (table.rows[rowNumber].cells[10].innerHTML == "cat131") {
            document.getElementById("selvolt").value = "cat131";
        }
        else if (table.rows[rowNumber].cells[10].innerHTML == "cat132") {
            document.getElementById("selvolt").value = "cat132";
        }
        else if (table.rows[rowNumber].cells[10].innerHTML == "cat133") {
            document.getElementById("selvolt").value = "cat133";
        }
        else if (table.rows[rowNumber].cells[10].innerHTML == "cat311") {
            document.getElementById("selvolt").value = "cat311";
        }
        else if (table.rows[rowNumber].cells[10].innerHTML == "cat312") {
            document.getElementById("selvolt").value = "cat312";
        }
        else if (table.rows[rowNumber].cells[10].innerHTML == "cat313") {
            document.getElementById("selvolt").value = "cat313";
        }
        else if (table.rows[rowNumber].cells[10].innerHTML == "cat321") {
            document.getElementById("selvolt").value = "cat321";
        }
        else if (table.rows[rowNumber].cells[10].innerHTML == "cat322") {
            document.getElementById("selvolt").value = "cat322";
        }
        else if (table.rows[rowNumber].cells[10].innerHTML == "cat323") {
            document.getElementById("selvolt").value = "cat323";
        }
        else if (table.rows[rowNumber].cells[10].innerHTML == "cat331") {
            document.getElementById("selvolt").value = "cat331";
        }
        else if (table.rows[rowNumber].cells[10].innerHTML == "cat332") {
            document.getElementById("selvolt").value = "cat332";
        }
        else if (table.rows[rowNumber].cells[10].innerHTML == "cat333") {
            document.getElementById("selvolt").value = "cat333";
        }

        else { }

        /*if ((table.rows[rowNumber].cells[9].innerHTML == "cat11") && (document.getElementById("rbtn1").checked == true)) {
        document.getElementById("selcat").value = "cat11";
        }
        else if ((table.rows[rowNumber].cells[9].innerHTML == "cat31") && (document.getElementById("rbtn2").checked == true))
        { document.getElementById("selcat").value="cat31"; }
        else { }
        document.getElementById("selcat").value = table.rows[rowNumber].cells[9].innerHTML;
        document.getElementById("selvolt").value = table.rows[rowNumber].cells[10].innerHTML;
        alert(document.getElementById("selcat").selectedIndex);*/


        document.getElementById("lblprice").innerHTML = table.rows[rowNumber].cells[11].innerHTML;
        document.getElementById("txtdate1").value = table.rows[rowNumber].cells[12].innerHTML;
        document.getElementById("txtdate2").value = table.rows[rowNumber].cells[13].innerHTML;
        if (table.rows[rowNumber].cells[14].innerHTML == "true") {
            document.getElementById("cbox1").checked = true;
            document.getElementById("dueamt").style.display = "block";
            document.getElementById("txtdueamt").style.display = "block";
            document.getElementById("txtdueamt").value = table.rows[rowNumber].cells[15].innerHTML;
        }
        else {
            document.getElementById("cbox1").checked = false;
            document.getElementById("dueamt").style.display = "none";
            document.getElementById("txtdueamt").style.display = "none";
            document.getElementById("txtdueamt").value = table.rows[rowNumber].cells[15].innerHTML;
        }
        document.getElementById("txtdueamt").value = table.rows[rowNumber].cells[15].innerHTML;
        document.getElementById("lblfine").innerHTML = table.rows[rowNumber].cells[16].innerHTML;
        document.getElementById("lblbillamt").innerHTML = "";
        document.getElementById("txtdate3").value = table.rows[rowNumber].cells[18].innerHTML;
        document.getElementById("lblerror").innerHTML = "";
        document.getElementById("lblupdate").style.display = "block";
        document.getElementById("btnadd").style.display = "none";

        document.getElementById("lblreset").style.display = "block";
        document.getElementById("btnclear").style.display = "none";

        var x = "<input type='button' id='btnupdate' class='button' value='Update' onclick='javascript:funupdate(" + rowNumber + ");'/>";
        document.getElementById("lblupdate").innerHTML = x;
        var y = "<input type='button' id='btnreset' class='button' value='Reset' onclick='javascript:funreset1(" + rowNumber + ");'/>";
        document.getElementById("lblreset").innerHTML = y;
    }
}

function funupdate(rowId) {

    var errormsg = "";
    document.getElementById("lblerror").innerHTML = "";
    var table = document.getElementById("table1");
    /*var rowCount = table.rows.length;
    var rowNumber = rowId.parentNode.parentNode.rowIndex;*/
    var rowNo = Number(rowId);

    var name = document.getElementById("txtname").value;
    var bno1 = document.getElementById("txtbno").value;
    var addr = document.getElementById("tareaaddr").value;
    var phase1 = document.getElementById("rbtn1").checked;
    var phase2 = document.getElementById("rbtn2").checked;
    var prevread1 = document.getElementById("txtprevread").value;
    var presread1 = document.getElementById("txtpresread").value;
    var units = document.getElementById("lblunits").innerHTML;
    var selcat = document.getElementById("selcat").value;
    var selvolt = document.getElementById("selvolt").value;
    var price = document.getElementById("lblprice").innerHTML;
    var date1 = document.getElementById("txtdate1").value;
    var date2 = document.getElementById("txtdate2").value;
    var arrear = document.getElementById("cbox1").checked;
    var dueamt = document.getElementById("txtdueamt").value;
    var date3 = document.getElementById("txtdate3").value;
    var fine = document.getElementById("lblfine").innerHTML;
    var billamt = document.getElementById("lblbillamt").innerHTML;
    var prevread = Number(prevread1);
    var presread = Number(presread1);
    var bno = parseInt(bno1);
    if (name == "") {
        errormsg += "Enter the Name of the Person<br/>";
    }
    if (bno1 == "") {
        errormsg += "Enter the Bill Number<br/>";
    }

    else if (bno == "0") {

        errormsg += "Bill number value should not be Zero<br/>";
        document.getElementById("txtbno").value = "";
    }
    else { }
    if (addr == "") {
        errormsg += "Enter the Address<br/>";
    }
    else if (addr.length > 257) {
        errormsg += "Address textarea accepts 256 characters only<br/>";
        document.getElementById("tareaaddr").value = "";
    }
    else { }
    if (prevread == "") {
        errormsg += "Enter the Previous Reading<br/>";
    }
    if (presread == "") {
        errormsg += "Enter the Present Reading<br/>";
    }
    if (prevread > presread) {
        errormsg += "Previous Reading should not be greater than the Present Reading<br/>";
        document.getElementById("txtprevread").value = "";
        document.getElementById("txtpresread").value = "";
        document.getElementById("lblunits").value = "";
    }
    if (units == "") {
        errormsg += "Present Reading value should be less than the Previous Reading Value <br/>";
        //document.getElementById("txtpresread").value = "";
    }
    if (selcat == "select") {
        errormsg += "Select any one Category<br/>";
    }
    if (selvolt == "select") {
        errormsg += "Select any one voltage<br/>";
    }
    if (date1 == "") {
        errormsg += "Enter Bill issue Date<br/>";
    }

    if (date2 == "") {
        errormsg += "Enter Final Date to Pay<br/>";
    }
    if (date3 == "") {
        errormsg += "Enter Paid On<br/>";
    }
    if (price == "") {
        errormsg += "Price should not be blank<br/>";
    }

    /*if ((arrear == true) && ((dueamt == "") || (dueamt == "0"))) {
        errormsg += "Due amt should not be blank<br/>";
    }
    else if ((dueamt !== "0") && (dueamt != "") && (arrear != false)) {
        document.getElementById("txtdueamt").value = dueamt;
    }
    else {
        document.getElementById("txtdueamt").value = "0";
    }*/
    if ((arrear == true) && (dueamt == "")) {
        document.getElementById("lblbillamt").innerHTML = "";
        errormsg += "Due amt should not be blank<br/>";
    }
    else {
        document.getElementById("lblbillamt").innerHTML = "";
        document.getElementById("txtdueamt").value = dueamt;
    }

    /*if (arrear == false)
    {
    document.getElementById("txtdueamt").value="0";
    }*/

    if (fine == "") {
        errormsg += "Fine should not be blank<br/>";
    }
    if ((billamt == "") && (price != "")) {
        errormsg += "Bill Amount label is blank. Click Calculate<br/>";
    }

    if ((rowNo - document.getElementById("lblar").innerHTML) == "1") {

    }
    else {
        var x = (rowNo - document.getElementById("lblar").innerHTML);
        for (i = 1; i < x; i++) {
            rowNo--;
        }

    }
    rowNumber = Number(rowNo);
    if (errormsg == "") {


        table.rows[rowNumber].cells[2].innerHTML = name;
        table.rows[rowNumber].cells[3].innerHTML = bno;
        table.rows[rowNumber].cells[4].innerHTML = addr;
        if (phase1 == true) {
            table.rows[rowNumber].cells[5].innerHTML = document.getElementById("rbtn1").value;
        }
        else {
            table.rows[rowNumber].cells[5].innerHTML = document.getElementById("rbtn2").value;
        }
        table.rows[rowNumber].cells[6].innerHTML = prevread;
        table.rows[rowNumber].cells[7].innerHTML = presread;
        table.rows[rowNumber].cells[8].innerHTML = units;
        table.rows[rowNumber].cells[9].innerHTML = selcat;
        table.rows[rowNumber].cells[10].innerHTML = selvolt;
        table.rows[rowNumber].cells[11].innerHTML = price;
        table.rows[rowNumber].cells[12].innerHTML = date1;
        table.rows[rowNumber].cells[13].innerHTML = date2;
        table.rows[rowNumber].cells[14].innerHTML = arrear;
        if (dueamt == "") {
            table.rows[rowNumber].cells[15].innerHTML = "0";
        }
        else {
            table.rows[rowNumber].cells[15].innerHTML = dueamt;
        }
        if (fine == "") {
            table.rows[rowNumber].cells[16].innerHTML = "0";
        }
        else {
            table.rows[rowNumber].cells[16].innerHTML = fine;
        }
        table.rows[rowNumber].cells[17].innerHTML = billamt;
        table.rows[rowNumber].cells[18].innerHTML = date3;

        document.getElementById("lblupdate").style.display = "none";
        document.getElementById("btnadd").style.display = "block";

        document.getElementById("lblreset").style.display = "none";
        document.getElementById("btnclear").style.display = "block";
        //document.getElementById("lbladdupdate").innerHTML = "<input type='button' id='btnadd' class='button' value='Add' onclick='javascript:funadd();'/>";

        //form1.reset();
        for (i = 1; i <= 2; i++) {
            var x = document.getElementById("selcat");
            x.options[0] = new Option("---Select---", "select");
            x.options[1] = null;
            x.options[2] = null;
            x.options[3] = null;
            var n = document.getElementById("selvolt");
            n.options[0] = new Option("---Select---", "select");
            n.options[1] = null;
            n.options[2] = null;
            n.options[3] = null;
        }
        document.getElementById("selcat").selectedIndex = 0;
        document.getElementById("selvolt").selectedIndex = 0;
        document.getElementById("selvolt").disabled = true;
        document.getElementById("lblprice").innerHTML = "";
        document.getElementById("lblfine").innerHTML = "0";
        document.getElementById("lblbillamt").innerHTML = "";
        document.getElementById("lblunits").innerHTML = "";
        document.getElementById("txtname").value = "";
        document.getElementById("txtbno").value = "";
        document.getElementById("tareaaddr").value = "";
        document.getElementById("rbtn1").checked = false;
        document.getElementById("rbtn2").checked = false;
        document.getElementById("txtprevread").value = "";
        document.getElementById("txtpresread").value = "";

        document.getElementById("txtdate1").value = "";
        document.getElementById("txtdate2").value = "";
        document.getElementById("cbox1").checked = false;
        if (dueamt != "")
        { }
        else {
            document.getElementById("txtdueamt").value = "0";
        }
        document.getElementById("txtdate3").value = "";
        document.getElementById("selvolt").disabled = true;



        document.getElementById("dueamt").style.display = "none";
        document.getElementById("txtdueamt").style.display = "none";
        document.getElementById("fine").style.display = "none";
        document.getElementById("lblfine").style.display = "none";

    }
    else {
        document.getElementById("lblerror").innerHTML = errormsg;
    }

}


function fundate(evt) {


    var code = (evt.which) ? (evt.which) : evt.keyCode;

    if (code == 9) {
        return true;
    }
    else {
        return false;
    }
}





function funreset1(rowId) {

    var rowNumber = Number(rowId);
    var errormsg = "";
    document.getElementById("lblerror").innerHTML = "";
    var table = document.getElementById("table1");
    document.getElementById("txtname").value = table.rows[rowNumber].cells[2].innerHTML;
    document.getElementById("txtbno").value = table.rows[rowNumber].cells[3].innerHTML;
    document.getElementById("tareaaddr").value = table.rows[rowNumber].cells[4].innerHTML;

    if (table.rows[rowNumber].cells[5].innerHTML == "Single phase") {
        document.getElementById("rbtn1").checked = true;
    }
    else {
        document.getElementById("rbtn2").checked = true;
    }
    document.getElementById("txtprevread").value = table.rows[rowNumber].cells[6].innerHTML;
    document.getElementById("txtpresread").value = table.rows[rowNumber].cells[7].innerHTML;
    document.getElementById("lblunits").innerHTML = table.rows[rowNumber].cells[8].innerHTML;
    if (table.rows[rowNumber].cells[9].innerHTML != "select") {
        document.getElementById("selcat").value = table.rows[rowNumber].cells[9].innerHTML;
    }
    if (table.rows[rowNumber].cells[10].innerHTML != "select") {
        document.getElementById("selvolt").disabled = false;
        document.getElementById("selvolt").value = table.rows[rowNumber].cells[10].innerHTML;
    }

    document.getElementById("lblprice").innerHTML = table.rows[rowNumber].cells[11].innerHTML;
    document.getElementById("txtdate1").value = table.rows[rowNumber].cells[12].innerHTML;
    document.getElementById("txtdate2").value = table.rows[rowNumber].cells[13].innerHTML;
    if (table.rows[rowNumber].cells[14].innerHTML == "true") {
        document.getElementById("cbox1").checked = true;
        document.getElementById("dueamt").style.display = "block";
        document.getElementById("txtdueamt").style.display = "block";
        document.getElementById("txtdueamt").value = table.rows[rowNumber].cells[15].innerHTML;
    }
    else {
        document.getElementById("cbox1").checked = false;
        document.getElementById("dueamt").style.display = "none";
        document.getElementById("txtdueamt").style.display = "none";
        document.getElementById("txtdueamt").value = table.rows[rowNumber].cells[15].innerHTML;
    }
    document.getElementById("txtdueamt").value = table.rows[rowNumber].cells[15].innerHTML;
    document.getElementById("lblfine").innerHTML = table.rows[rowNumber].cells[16].innerHTML;
    document.getElementById("lblbillamt").innerHTML = "";
    document.getElementById("txtdate3").value = table.rows[rowNumber].cells[18].innerHTML;
    document.getElementById("lblerror").innerHTML = "";
}





function funblank() {
    document.getElementById("txtdate2").value = "";
    document.getElementById("txtdate3").value = "";
document.getElementById("lblerror").innerHTML="";
    var date1 = document.getElementById("txtdate1").value;
    var today = new Date();
    var datet = today.getDate();
    var montht = today.getMonth() + 1;
    var yeart = today.getYear();
    var date2 = (datet + "-" + montht + "-" + yeart);



    
    var one_day = 1000 * 60 * 60 * 24;
    var errormsg = "";
    var x = date1.split("-");
    var y = date2.split("-");
    var date11 = new Date(x[2], (x[1] - 1), x[0]);
    var date21 = new Date(y[2], (y[1] - 1), y[0]);
    var month1 = Number(x[1] - 1);
    var month2 = Number(y[1] - 1);
    var datediff = Math.ceil((date11.getTime() - date21.getTime()) / (one_day));
    
    if (datediff >= 0) {
        document.getElementById("lblerror").innerHTML = "";
        var prevread1 = document.getElementById("txtprevread").value;
        var presread1 = document.getElementById("txtpresread").value;
        var prevread = Number(prevread1);
        var presread = Number(presread1);
        if (prevread > presread)
        { }
        else if (prevread == "") { }
        else {
            document.getElementById("txtdate2").value = "";
            document.getElementById("txtdate3").value = "";
        }
        document.getElementById("lblfine").style.display = "none";
        document.getElementById("lblfine").value = "0";
        document.getElementById("fine").style.display = "none";
        document.getElementById("lblbillamt").innerHTML = "";
    }
    else {
        errormsg += "Bill Issue date should not be less than the today date<br/>";
        document.getElementById("lblerror").innerHTML = errormsg;
        document.getElementById("txtdate1").value = "";
    }
}





function funcalculate() {
    document.getElementById("lblerror").innerHTML = "";
    document.getElementById("lblbillamt").innerHTML = "";
    var prevread1 = document.getElementById("txtprevread").value;
    var presread1 = document.getElementById("txtpresread").value;
    var prevread = Number(prevread1);
    var presread = Number(presread1);
    var errormsg = "";

    if (prevread == "") {
        errormsg += "Previous Reading should not be empty<br/>";
        document.getElementById("lblerror").innerHTML = errormsg;
        document.getElementById("txtpresread").value = "";
        document.getElementById("lblunits").innerHTML = "";
    }
}


function funbillamt() {
    document.getElementById("lblbillamt").innerHTML = "";
}