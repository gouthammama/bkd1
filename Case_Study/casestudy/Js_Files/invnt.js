function submitData() {
    //debugger;
    var errmsg = "";
    //alert("Submit");
    var ptype = document.getElementById("sel_product").value;
    var pno = document.getElementById("txt_pno").value; //accepts only integers
    pno = pno.replace(/^0+|\s+$/g, "");
    document.getElementById("txt_pno").value = pno;
    var pname = document.getElementById("txt_pname").value; //accepts alphabates
    var stock = document.getElementById("txt_stock").value; //accepts only integers
    var sales = document.getElementById("sales").checked;
    var purchase = document.getElementById("purchase").checked;
    var odate = document.getElementById("txt_order").value;
    var ordrby = document.getElementById("txt_orderby").value; //accepts alphabates
    var sunit = document.getElementById("txt_salUnit").value; //accepts only numbers
    var srate = document.getElementById("txt_srate").value; //accepts only numbers
    var creditchk = document.getElementById("chk_1").checked;
    var cash = document.getElementById("cash").checked;
    var credit = document.getElementById("credit").checked;
    var neft = document.getElementById("neft").checked;
    var dd = document.getElementById("dd").checked;
    var wdate = document.getElementById("txt_war").value;

    var des = document.getElementById("des").value; //accepts all charachters

    //var regExp = /^([A-Za-z]|[ ]|[\.])+$/;
    //var regExp1 = /^([1-9]+|[\.]+?|[0-9])+$/;
    //var regExp2 = /^[0-9]+$/;
    //var regPname = pname.match(regExp);
    // var regPno = pno.match(regExp2);
    // var regstock = stock.match(regExp2);
    // var regsunit = sunit.match(regExp2);
    //var regsrate = srate.match(regExp1);
    var crecard = document.getElementById("txt_credit").value;
    crecard = crecard.replace(/^0+|\s+$/g, "");
    document.getElementById("txt_credit").value = crecard;
    //var myRegExp = /[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}/; //creditcard validations
    // var card = crecard.match(myRegExp);
    var ddd = document.getElementById("txt_dd").value;
    ddd = ddd.replace(/^0+|\s+$/g, "");
    document.getElementById("txt_dd").value = ddd;
    var nefnum = document.getElementById("txt_neft").value;
    nefnum = nefnum.replace(/^0+|\s+$/g, "");
    document.getElementById("txt_neft").value = nefnum;
        if (ptype == "Select") {
        errmsg += "Please Enter Product Type<br>";
    }
    if (pno == "") {
        errmsg += "Please Enter Product number<br>";
    }
    if (pname == "") {
        errmsg += "Please Enter Product name<br>";
    }
    if (stock == "") {
        errmsg += "Please Enter Total Stock value<br>";
    }
    if (sales == false && purchase == false) {
        errmsg += "Please Select Any one(stock/purchase)<br>";
    }
    if (odate == "") {
        errmsg += "Please Enter Order Date<br>";
    }

    if (sunit == "") {
        errmsg += "Please Enter Sales Unit value<br>";
    }
    if (srate == "") {
        errmsg += "Please Enter Sales rate<br>";
    }

    if (credit == true) {
        if (crecard == "") {

            errmsg += "Please Enter Creditcard Number<br>";
        }
    }
    if (neft == true) {
        if (nefnum == "") {
            errmsg += "Please Enter NEFT Number<br>";
        } 
    }
    if (dd == true) {

        if (ddd == "") {
            errmsg += "Please Enter DD number<br>";
        }
    }
    
    var errormsg = "";
    if (credit == true) {

        if (crecard.length == 16) {
        }
        else {
            errormsg += "Please Enter Valid Credit Card Number<br/>";
        }
    }
    if (neft == true) {
       // var neft = document.getElementById("txt_neft").value;
        if (nefnum.length == 10) {
            
        }
        else {
            errormsg += "Please Enter Valid NEFT number<br>";
        }
    }

    if (dd == true) {
        //var dd = document.getElementById("txt_dd").value;
        if (ddd.length == 6) {

        } else {
            errormsg += "Please Enter Valid DD number";
        }
    }
    if (wdate != "") {
        if (wdate < odate) {
            errormsg += "The Warranty Date Should be greater than Order Date";
        }
    }
    /*if (wdate < odate) {
        errormsg += "Please Select Warranty date should be greater than Order Date";
    }*/

    if (errmsg == "") {
        document.getElementById("lbl").innerHTML = "";
     
        if (errormsg == "") {                                          //&& errmsg == "")) {
            document.getElementById("lbl_err").innerHTML = "";
           
            if(errmsg=="" && errormsg==""){
            //document.getElementById("lbl").innerHTML = "";
            var table = document.getElementById("table_grid");
            var rowCount = table.rows.length;
            
            var row = table.insertRow(rowCount);
            cell0 = row.insertCell(0);
            cell0.innerHTML = "<img src='images/Edit.gif' class='buttonstyle1'id='img_" + rowCount + "' onclick='javascript:return funEdit(this)'>";
            cell1 = row.insertCell(1);
            cell1.innerHTML = "<img src='images/Delete.gif' class='buttonstyle1' id='img_" + rowCount + "' onclick='javascript:return funDelete(this)'>";
            cell2 = row.insertCell(2);
            cell2.align = "left";
            cell2.innerHTML = ptype;

            cell3 = row.insertCell(3);
            cell3.align = "right";
            cell3.innerHTML = pno;

            cell4 = row.insertCell(4);
            cell4.align = "left";
            cell4.innerHTML = pname;

            cell5 = row.insertCell(5);
            cell5.align = "right";
            cell5.innerHTML = stock;


            cell6 = row.insertCell(6);
            cell6.align = "center";
            cell6.innerHTML = odate;

            cell7 = row.insertCell(7);
            cell7.align = "left";
            cell7.innerHTML = ordrby;

            cell8 = row.insertCell(8);
            cell8.align = "right";
            cell8.innerHTML = sunit;

            cell9 = row.insertCell(9);
            cell9.align = "right";
            cell9.innerHTML = srate;

            cell10 = row.insertCell(10);
            cell10.align = "right";
            cell10.innerHTML = document.getElementById("lbl_bill").innerHTML;

            cell11 = row.insertCell(11);
            cell11.align = "right";
            cell11.innerHTML = document.getElementById("lbl_sunitaftr").innerHTML;

            cell12 = row.insertCell(12);
            cell12.align = "right";
            cell12.innerHTML = document.getElementById("lbl_bill").innerHTML;


            cell13 = row.insertCell(13);           
            cell13.align = "center";
            cell13.innerHTML = wdate;

            //alert(cash);
            cell14 = row.insertCell(14);
            if (cash == true) {
                document.getElementById("cash").checked = true;
                cell14.align = "left";
                cell14.innerHTML = document.getElementById("cash").value;

            } else { }
            //alert(credit);
            if (credit == true) {
                document.getElementById("credit").checked = true;
                cell14.align = "left";
                cell14.innerHTML = document.getElementById("credit").value;
            } else { }
            if (neft == true) {
                document.getElementById("neft").checked = true;
                cell14.align = "left";
                cell14.innerHTML = document.getElementById("neft").value;
                
            } else { }
            if (dd == true) {
                document.getElementById("dd").checked = true;
                cell14.align = "left";
                cell14.innerHTML = document.getElementById("dd").value;
            } else { }
           // var crecard = document.getElementById("txt_credit").value;
           // var ddd = document.getElementById("txt_dd").value;
           // var neftnum = document.getElementById("txt_neft").value;
            cell15 = row.insertCell(15);
            if (cash == true) {
                document.getElementById("cash").checked = true;
                cell15.align = "left";
                cell15.innerHTML = "-";
            }
            else {
                if (credit == true) {
                    document.getElementById("credit").checked = true;
                    if (crecard.length == 16) {
                        cell15.align = "right";
                        cell15.innerHTML = crecard;
                    }
                } else { }
                if (dd == true) {
                    document.getElementById("dd").checked = true;
                    cell15.align = "right";
                    cell15.innerHTML = ddd;
                } else { }
                if (neft == true) {
                    document.getElementById("neft").checked = true;
                    cell15.align = "right";
                    cell15.innerHTML = nefnum;
                }

            }

            cell16 = row.insertCell(16);
            cell16.align = "left";
            if (creditchk == true) {
                cell16.align = "left";
                cell16.innerHTML = "yes";
            }
            else {
                cell16.align = "left";
                cell16.innerHTML = "No";
            }
            cell17 = row.insertCell(17);
            cell17.align = "right";
            cell17.innerHTML = document.getElementById("lbl_bill").innerHTML;
            cell18 = row.insertCell(18);
            cell18.align = "left";
            cell18.innerHTML = des;


            document.getElementById("form2").reset();
            document.getElementById("lbl_bill").innerHTML = "";
            document.getElementById("lbl_sunitaftr").innerHTML = "";
            //cash.chcecked = false;
           // credit.checked = false;
           // neft.checked = false;
            //dd.checked = false;
            document.getElementById("lbl").innerHTML = "";
            (document.getElementById("lbl_avl").innerHTML)++;
          }else{}
        
     
        
        }else {
            document.getElementById("lbl_err").innerHTML = errormsg;
        }

  }else {
        document.getElementById("lbl").innerHTML = errmsg;
    }

    var cash = document.getElementById("cash").checked;
    //alert("cash" + cash);
    if (credit == true) {
        document.getElementById("lbl_mand").style.display = "block";
        document.getElementById("lbl_credit").style.display = "block";
        document.getElementById("txt_credit").style.display = "block";
        document.getElementById("lbl_mandneft").style.display = "none";
        document.getElementById("lbl_neft").style.display = "none";
        document.getElementById("txt_neft").style.display = "none";
        document.getElementById("lbl_mdd").style.display = "none";
        document.getElementById("lbl_dd").style.display = "none";
        document.getElementById("txt_dd").style.display = "none";
    } else {
        document.getElementById("lbl_mand").style.display = "none";
        document.getElementById("lbl_credit").style.display = "none";
        document.getElementById("txt_credit").style.display = "none";
    }

    //alert(neft);
    if (neft == true) {

        document.getElementById("lbl_mandneft").style.display = "block";
        document.getElementById("lbl_neft").style.display = "block";
        document.getElementById("txt_neft").style.display = "block";
        document.getElementById("lbl_mand").style.display = "none";
        document.getElementById("lbl_credit").style.display = "none";
        document.getElementById("txt_credit").style.display = "none";
        document.getElementById("lbl_mdd").style.display = "none";
        document.getElementById("lbl_dd").style.display = "none";
        document.getElementById("txt_dd").style.display = "none";


    } else {
        document.getElementById("lbl_mandneft").style.display = "none";
        document.getElementById("lbl_neft").style.display = "none";
        document.getElementById("txt_neft").style.display = "none";
    }
    //alert(dd);
    if (dd == true) {

        document.getElementById("lbl_mdd").style.display = "block";
        document.getElementById("lbl_dd").style.display = "block";
        document.getElementById("txt_dd").style.display = "block";
        document.getElementById("lbl_mand").style.display = "none";
        document.getElementById("lbl_credit").style.display = "none";
        document.getElementById("txt_credit").style.display = "none";
        document.getElementById("lbl_mandneft").style.display = "none";
        document.getElementById("lbl_neft").style.display = "none";
        document.getElementById("txt_neft").style.display = "none";


    } else {
        document.getElementById("lbl_mdd").style.display = "none";
        document.getElementById("lbl_dd").style.display = "none";
        document.getElementById("txt_dd").style.display = "none";

    }
    if (cash == true) {
        document.getElementById("lbl_mand").style.display = "none";
        document.getElementById("lbl_credit").style.display = "none";
        document.getElementById("txt_credit").style.display = "none";
        document.getElementById("lbl_mandneft").style.display = "none";
        document.getElementById("lbl_neft").style.display = "none";
        document.getElementById("txt_neft").style.display = "none";
        document.getElementById("lbl_mdd").style.display = "none";
        document.getElementById("lbl_dd").style.display = "none";
        document.getElementById("txt_dd").style.display = "none";

    }
    //document.getElementById("lbl_SAUsales").innerHTML = "";
    document.getElementById("lbl_SAUsales").innerHTML = "";
    document.getElementById("lblerr_TotalStock").innerHTML = "";
    document.getElementById("lblerr").innerHTML = "";
    document.getElementById("lbl_txterr").innerHTML = "";
}
function clr() {
    //debugger;
    document.getElementById("sel_product").value = "Select";
    document.getElementById("lbl").innerHTML = "";
    document.getElementById("lbl_err").innerHTML = "";
    document.getElementById("txt_pno").value = "";
    document.getElementById("txt_pname").value = "";
    document.getElementById("txt_stock").value = "";
    document.getElementById("txt_order").value = "";
    document.getElementById("txt_orderby").value = "";
    document.getElementById("lbl_err").value = "";
    document.getElementById("txt_salUnit").value = "";
    document.getElementById("txt_srate").value = "";
    document.getElementById("lbl_bill").innerHTML = "";
    document.getElementById("lbl_sunitaftr").innerHTML = "";
    document.getElementById("lbl_bill").innerHTML = "";
    document.getElementById("chk_1").checked = false;
    document.getElementById("txt_war").value = "";
    document.getElementById("des").value = "";
    document.getElementById("lblerr_TotalStock").innerHTML = "";
    document.getElementById("lblerr").innerHTML = "";
    document.getElementById("lbl_txterr").innerHTML = "";
    document.getElementById("txt_credit").value = "";

    document.getElementById("txt_neft").value = "";
    document.getElementById("lbl_SAUsales").innerHTML = "";
    document.getElementById("txt_dd").value = "";
    document.getElementById("lbl_mand").style.display = "none";
    document.getElementById("lbl_credit").style.display = "none";
    document.getElementById("txt_credit").style.display = "none";
    document.getElementById("lbl_mandneft").style.display = "none";
    document.getElementById("lbl_neft").style.display = "none";
    document.getElementById("txt_neft").style.display = "none";
    document.getElementById("lbl_mdd").style.display = "none";
    document.getElementById("lbl_dd").style.display = "none";
    document.getElementById("txt_dd").style.display = "none";
    document.getElementById("cash").checked = true;
    //var table = document.getElementById("table_grid");

}





function bill() {
    var srate = document.getElementById("txt_srate").value;
    srate = srate.replace(/^0+|\s+$/g, "");
    document.getElementById("txt_srate").value = srate;
    var sunit = document.getElementById("txt_salUnit").value;
    sunit = sunit.replace(/^0+|\s+$/g, "");
    document.getElementById("txt_salUnit").value = sunit;
    var bill = parseFloat((srate) * (sunit));
    document.getElementById("lbl_bill").innerHTML = parseFloat(bill).toFixed(2);
}

function stockAftrSales() {
    var errmsg = "";
    var stock = document.getElementById("txt_stock").value;

    var sunit = document.getElementById("txt_salUnit").value;
    stock = stock.replace(/^0+|\s+$/g, "");
    sunit = sunit.replace(/^0+|\s+$/g, "");
    document.getElementById("txt_stock").value = stock;
    document.getElementById("txt_salUnit").value = sunit;
        var saftr = stock - sunit;
    if (saftr > 0) {
        document.getElementById("lbl_sunitaftr").innerHTML = saftr;
        document.getElementById("lbl_SAUsales").innerHTML = "";
    } else {
        errmsg += "(Total Stock Unit value should be greater than(>) Sales Unit value)";
        document.getElementById("lbl_SAUsales").innerHTML = errmsg;
        document.getElementById("lbl_sunitaftr").innerHTML = 0.0;
    }
}


function dis() {

    //document.getElementById("cash").checked = true;
    document.getElementById("lbl_mand").style.display = "none";
    document.getElementById("lbl_credit").style.display = "none";
    document.getElementById("txt_credit").style.display = "none";
    document.getElementById("lbl_mandneft").style.display = "none";
    document.getElementById("lbl_neft").style.display = "none";
    document.getElementById("txt_neft").style.display = "none";
    document.getElementById("lbl_mdd").style.display = "none";
    document.getElementById("lbl_dd").style.display = "none";
    document.getElementById("txt_dd").style.display = "none";

}
function funDisplay() {

    var credit = document.getElementById("credit").checked;
    var neft = document.getElementById("neft").checked;
    var dd = document.getElementById("dd").checked;
    //dd = dd.replace(/^0+|\s+$/g, "");
   
    var cash = document.getElementById("cash").checked;
    if (cash == true) {
        document.getElementById("lbl_mand").style.display = "none";
        document.getElementById("lbl_credit").style.display = "none";
        document.getElementById("txt_credit").style.display = "none";
        document.getElementById("lbl_mandneft").style.display = "none";
        document.getElementById("lbl_neft").style.display = "none";
        document.getElementById("txt_neft").style.display = "none";
        document.getElementById("lbl_mdd").style.display = "none";
        document.getElementById("lbl_dd").style.display = "none";
        document.getElementById("txt_dd").style.display = "none";

    }
    if (credit == true) {
        document.getElementById("lbl_mand").style.display = "block";
        document.getElementById("lbl_credit").style.display = "block";
        document.getElementById("txt_credit").style.display = "block";
        document.getElementById("lbl_mandneft").style.display = "none";
        document.getElementById("lbl_neft").style.display = "none";
        document.getElementById("txt_neft").style.display = "none";
        document.getElementById("lbl_mdd").style.display = "none";
        document.getElementById("lbl_dd").style.display = "none";
        document.getElementById("txt_dd").style.display = "none";
    }


    if (neft == true) {
      
        document.getElementById("lbl_mandneft").style.display = "block";
        document.getElementById("lbl_neft").style.display = "block";
        document.getElementById("txt_neft").style.display = "block";
        document.getElementById("lbl_mand").style.display = "none";
        document.getElementById("lbl_credit").style.display = "none";
        document.getElementById("txt_credit").style.display = "none";
        document.getElementById("lbl_mdd").style.display = "none";
        document.getElementById("lbl_dd").style.display = "none";
        document.getElementById("txt_dd").style.display = "none";


    }


    if (dd == true) {
        
        document.getElementById("lbl_mdd").style.display = "block";
        document.getElementById("lbl_dd").style.display = "block";
        document.getElementById("txt_dd").style.display = "block";
        document.getElementById("lbl_mand").style.display = "none";
        document.getElementById("lbl_credit").style.display = "none";
        document.getElementById("txt_credit").style.display = "none";
        document.getElementById("lbl_mandneft").style.display = "none";
        document.getElementById("lbl_neft").style.display = "none";
        document.getElementById("txt_neft").style.display = "none";


    }

}

function funEdit(rowId) {

    var tab = document.getElementById("table_grid");
    var rowCount = tab.rows.length;
    var rowNumber = rowId.parentNode.parentNode.rowIndex;

    document.getElementById("sel_product").value = tab.rows[rowNumber].cells[2].innerHTML;
    document.getElementById("txt_pno").value = tab.rows[rowNumber].cells[3].innerHTML;
    document.getElementById("txt_pname").value = tab.rows[rowNumber].cells[4].innerHTML;
    document.getElementById("txt_stock").value = tab.rows[rowNumber].cells[5].innerHTML;
    document.getElementById("txt_order").value = tab.rows[rowNumber].cells[6].innerHTML;
    document.getElementById("txt_orderby").value = tab.rows[rowNumber].cells[7].innerHTML;
    document.getElementById("txt_salUnit").value = tab.rows[rowNumber].cells[8].innerHTML;
    document.getElementById("txt_srate").value = tab.rows[rowNumber].cells[9].innerHTML;
    document.getElementById("lbl_bill").innerHTML = tab.rows[rowNumber].cells[10].innerHTML;
    document.getElementById("lbl_sunitaftr").innerHTML = tab.rows[rowNumber].cells[11].innerHTML;
    document.getElementById("lbl_bill").value = tab.rows[rowNumber].cells[12].innerHTML;
    document.getElementById("txt_war").value = tab.rows[rowNumber].cells[13].innerHTML;
    var cash1 = tab.rows[rowNumber].cells[14].innerHTML;
    //alert(cash1);
    var text = tab.rows[rowNumber].cells[15].innerHTML;
    //alert(text);
    if (cash1 == "Cash") {
        document.getElementById("cash").checked = true;
        document.getElementById("lbl_mand").style.display = "none";
        document.getElementById("lbl_credit").style.display = "none";
        document.getElementById("txt_credit").style.display = "none";
        document.getElementById("lbl_mandneft").style.display = "none";
        document.getElementById("lbl_neft").style.display = "none";
        document.getElementById("txt_neft").style.display = "none";
        document.getElementById("lbl_mdd").style.display = "none";
        document.getElementById("lbl_dd").style.display = "none";
        document.getElementById("txt_dd").style.display = "none";
    }
    if (cash1 == "Credit") {
        document.getElementById("credit").checked = true;
        
        document.getElementById("lbl_mand").style.display = "block";
        document.getElementById("lbl_credit").style.display = "block";
        document.getElementById("txt_credit").style.display = "block";
        document.getElementById("lbl_mandneft").style.display = "none";
        document.getElementById("lbl_neft").style.display = "none";
        document.getElementById("txt_neft").style.display = "none";
        document.getElementById("lbl_mdd").style.display = "none";
        document.getElementById("lbl_dd").style.display = "none";
        document.getElementById("txt_dd").style.display = "none";
        document.getElementById("txt_credit").value = text;
    }
    if (cash1 == "NEFT") {
        
        document.getElementById("neft").checked = true;
        document.getElementById("txt_neft").value = text;
        document.getElementById("lbl_mandneft").style.display = "block";
        document.getElementById("lbl_neft").style.display = "block";
        document.getElementById("txt_neft").style.display = "block";
        document.getElementById("lbl_mand").style.display = "none";
        document.getElementById("lbl_credit").style.display = "none";
        document.getElementById("txt_credit").style.display = "none";
        document.getElementById("lbl_mdd").style.display = "none";
        document.getElementById("lbl_dd").style.display = "none";
        document.getElementById("txt_dd").style.display = "none";
        //alert(document.getElementById("txt_neft").value);

    }
    if (cash1 == "DD") {
        document.getElementById("dd").checked = true;
        document.getElementById("lbl_mdd").style.display = "block";
        document.getElementById("lbl_dd").style.display = "block";
        document.getElementById("txt_dd").style.display = "block";
        document.getElementById("lbl_mand").style.display = "none";
        document.getElementById("lbl_credit").style.display = "none";
        document.getElementById("txt_credit").style.display = "none";
        document.getElementById("lbl_mandneft").style.display = "none";
        document.getElementById("lbl_neft").style.display = "none";
        document.getElementById("txt_neft").style.display = "none";

        document.getElementById("txt_dd").value = text;
    }
    
    /*var text = tab.rows[rowNumber].cells[15].innerHTML;
    //alert(text);
   var credit = document.getElementById("credit").checked;
   var neft = document.getElementById("neft").checked;
   var dd = document.getElementById("dd").checked;
   var cash = document.getElementById("cash").checked;
   alert(credit);
    if (credit == true) {
        document.getElementById("txt_credit").value = text;
    }
    alert(neft);
    if (neft == true) {
        document.getElementById("txt_neft").value = text;
    }
    alert(dd);
    if (dd == true) {
        document.getElementById("txt_dd").value = text;
    }
    alert(cash);
    if (cash == true) {
    }*/
    var chk = tab.rows[rowNumber].cells[16].innerHTML;
    if (chk == "yes") {
        document.getElementById("chk_1").checked = true;
    }
    else {

        document.getElementById("chk_1").checked = true;
    }
    document.getElementById("des").value = tab.rows[rowNumber].cells[18].innerHTML;
    document.getElementById("lbl").innerHTML = "";
    document.getElementById("update").style.display = "block";
    document.getElementById("btn_submit").style.display = "none";
    document.getElementById("btn_clr").style.display = "none";
    document.getElementById("lbl_clr").style.display = "block";
    document.getElementById("update").innerHTML = "<input type='button' class='buttonstyle' id='up" + rowCount + "' value='update' onclick='javascript:funUpdate(" + rowNumber + ")'/>";
    document.getElementById("lbl_clr").innerHTML = "<input type='button' id='clr_" + rowCount + "' value='Reset' class='buttonstyle' onclick='funReset(" + rowNumber + ")'/>"


}
function funReset(rowId) {


    var tab = document.getElementById("table_grid");
    var rowNumber = parseInt(rowId);
    document.getElementById("sel_product").value = tab.rows[rowNumber].cells[2].innerHTML;
    document.getElementById("txt_pno").value = tab.rows[rowNumber].cells[3].innerHTML;
    document.getElementById("txt_pname").value = tab.rows[rowNumber].cells[4].innerHTML;
    document.getElementById("txt_stock").value = tab.rows[rowNumber].cells[5].innerHTML;
    document.getElementById("txt_order").value = tab.rows[rowNumber].cells[6].innerHTML;
    document.getElementById("txt_orderby").value = tab.rows[rowNumber].cells[7].innerHTML;
    document.getElementById("txt_salUnit").value = tab.rows[rowNumber].cells[8].innerHTML;
    document.getElementById("txt_srate").value = tab.rows[rowNumber].cells[9].innerHTML;
    document.getElementById("lbl_bill").innerHTML = tab.rows[rowNumber].cells[10].innerHTML;
    document.getElementById("lbl_sunitaftr").innerHTML = tab.rows[rowNumber].cells[11].innerHTML;
    document.getElementById("lbl_bill").value = tab.rows[rowNumber].cells[12].innerHTML;
    document.getElementById("txt_war").value = tab.rows[rowNumber].cells[13].innerHTML;
    var cash1 = tab.rows[rowNumber].cells[14].innerHTML;
    var text = tab.rows[rowNumber].cells[15].innerHTML;
    //alert(cash1);
    if (cash1 == "Cash") {
        document.getElementById("cash").checked = true;
         document.getElementById("lbl_mand").style.display = "none";
        document.getElementById("lbl_credit").style.display = "none";
        document.getElementById("txt_credit").style.display = "none";
        document.getElementById("lbl_mandneft").style.display = "none";
        document.getElementById("lbl_neft").style.display = "none";
        document.getElementById("txt_neft").style.display = "none";
        document.getElementById("lbl_mdd").style.display = "none";
        document.getElementById("lbl_dd").style.display = "none";
        document.getElementById("txt_dd").style.display = "none";
    }
    if (cash1 == "Credit") {
        document.getElementById("credit").checked = true;
        document.getElementById("lbl_mand").style.display = "block";
        document.getElementById("lbl_credit").style.display = "block";
        document.getElementById("txt_credit").style.display = "block";
        document.getElementById("lbl_mandneft").style.display = "none";
        document.getElementById("lbl_neft").style.display = "none";
        document.getElementById("txt_neft").style.display = "none";
        document.getElementById("lbl_mdd").style.display = "none";
        document.getElementById("lbl_dd").style.display = "none";
        document.getElementById("txt_dd").style.display = "none";
        document.getElementById("txt_credit").value = text;
    }
    if (cash1 == "NEFT") {

        document.getElementById("neft").checked = true;
        document.getElementById("lbl_mandneft").style.display = "block";
        document.getElementById("lbl_neft").style.display = "block";
        document.getElementById("txt_neft").style.display = "block";
        document.getElementById("lbl_mand").style.display = "none";
        document.getElementById("lbl_credit").style.display = "none";
        document.getElementById("txt_credit").style.display = "none";
        document.getElementById("lbl_mdd").style.display = "none";
        document.getElementById("lbl_dd").style.display = "none";
        document.getElementById("txt_dd").style.display = "none";
        document.getElementById("txt_neft").value = text;
        //alert(document.getElementById("txt_neft").value);

    }
    if (cash1 == "DD") {
        document.getElementById("dd").checked = true;
        document.getElementById("lbl_mdd").style.display = "block";
        document.getElementById("lbl_dd").style.display = "block";
        document.getElementById("txt_dd").style.display = "block";
        document.getElementById("lbl_mand").style.display = "none";
        document.getElementById("lbl_credit").style.display = "none";
        document.getElementById("txt_credit").style.display = "none";
        document.getElementById("lbl_mandneft").style.display = "none";
        document.getElementById("lbl_neft").style.display = "none";
        document.getElementById("txt_neft").style.display = "none";
        document.getElementById("txt_dd").value = text;
    }
    
    var chk = tab.rows[rowNumber].cells[16].innerHTML;
    if (chk == "yes") {
        document.getElementById("chk_1").checked = true;
    }
    else {

        document.getElementById("chk_1").checked = true;
    }
    document.getElementById("des").value = tab.rows[rowNumber].cells[18].innerHTML;
    document.getElementById("lbl").innerHTML = "";
    document.getElementById("lbl_SAUsales").innerHTML = "";

}

function funDelete(rowId) {
    if (document.getElementById("update").style.display == "block") {
        alert("Please Update Current Record");
    }

    else {
        var table = document.getElementById("table_grid");
        var rowCount = table.rows.length;
        var rowNumber = rowId.parentNode.parentNode.rowIndex;

        var agree = confirm("Are you sure you wish to delete?");
        if (agree) {
            if (parseInt(document.getElementById("table_grid").rows.length) > 0) {
                document.getElementById("table_grid").deleteRow(rowNumber);
                (document.getElementById("lbl_avl").innerHTML)--;
            }
        }
    }
}



function funUpdate(rowId) {

    var errmsg = "";


    var ptype = document.getElementById("sel_product").value;
    var pno = document.getElementById("txt_pno").value; //accepts only integers

    pno = pno.replace(/^0+|\s+$/g, "");
    document.getElementById("txt_pno").value = pno;
    var pname = document.getElementById("txt_pname").value; //accepts alphabates
    var stock = document.getElementById("txt_stock").value; //accepts only integers
    var sales = document.getElementById("sales").checked;
    var purchase = document.getElementById("purchase").checked;
    var odate = document.getElementById("txt_order").value;
    var ordrby = document.getElementById("txt_orderby").value; //accepts alphabates
    var sunit = document.getElementById("txt_salUnit").value; //accepts only numbers
    var srate = document.getElementById("txt_srate").value; //accepts only numbers
    var creditchk = document.getElementById("chk_1").checked;
    var cash = document.getElementById("cash").checked;
    var credit = document.getElementById("credit").checked;
    var neft = document.getElementById("neft").checked;
    var dd = document.getElementById("dd").checked;
    var wdate = document.getElementById("txt_war").value;
    var des = document.getElementById("des").value; //accepts all charachters

    // var regExp = /^([A-Za-z]|[ ]|[\.])+$/;
    //var regExp1 = /^([1-9]+|[\.]+?|[0-9])+$/;
    //var regExp2 = /^[0-9]+$/;
    //var regPname = pname.match(regExp);
    //var regPno = pno.match(regExp2);
    // var regstock = stock.match(regExp2);
    //var regsunit = sunit.match(regExp2);
    //var regsrate = srate.match(regExp1);
    var crecard = document.getElementById("txt_credit").value;
    crecard = crecard.replace(/^0+|\s+$/g, "");
    document.getElementById("txt_credit").value = crecard;
    //var myRegExp = /[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}/; //creditcard validations
    // var card = crecard.match(myRegExp);
    var ddd = document.getElementById("txt_dd").value;
    ddd = ddd.replace(/^0+|\s+$/g, "");
    document.getElementById("txt_dd").value = ddd;
    var nefnum = document.getElementById("txt_neft").value;
    nefnum = nefnum.replace(/^0+|\s+$/g, "");
    document.getElementById("txt_neft").value = nefnum;
    if (ptype == "Select") {
        errmsg += "Please Enter Product Type<br>";
    }
    if (pno == "") {
        errmsg += "Please Enter Product number<br>";
    }
    if (pname == "") {
        errmsg += "Please Enter Product name<br>";
    }
    if (stock == "") {
        errmsg += "Please Enter Stock value<br>";
    }
    if (sales == false && purchase == false) {
        errmsg += "Please Select Any one(stock/purchase)<br>";
    }
    if (odate == "") {
        errmsg += "Please Enter Order Date<br>";
    }

    if (sunit == "") {
        errmsg += "Please Enter Sales Unit value<br>";
    }
    if (srate == "") {
        errmsg += "Please Enter Sales rate<br>";
    }

    if (credit == true) {
        if (crecard == "") {

            errmsg += "Please Enter Creditcard Number<br>";
        }
    }
    if (neft == true) {
        if (nefnum == "") {
            errmsg += "Please Enter NEFT Number<br>";
        }
    }
    if (dd == true) {

        if (ddd == "") {
            errmsg += "Please Enter DD number<br>";
        }
    }

    var errormsg = "";
    if (credit == true) {

        if (crecard.length == 16) {
        }
        else {
            errormsg += "Please Enter Valid Credit Card Number<br/>";
        }
    }
    if (neft == true) {
        // var neft = document.getElementById("txt_neft").value;
        if (nefnum.length == 10) {
        }
        else {
            errormsg += "Please Enter Valid NEFT number<br>";
        }
    }

    if (dd == true) {
        //var dd = document.getElementById("txt_dd").value;
        if (ddd.length == 6) {

        } else {
            errormsg += "Please Enter Valid DD number";
        }
    } 
    if (wdate != "") {
        if (wdate < odate) {
            errormsg += "The Warranty Date Should be greater than Order Date";
        }
    }

    if (errmsg == "") {
        document.getElementById("lbl").innerHTML = "";

        if (errormsg == "") {                                          //&& errmsg == "")) {
            document.getElementById("lbl_err").innerHTML = "";

            if (errmsg == "" && errormsg == "") {




                var table = document.getElementById("table_grid");
                var rowNumber = parseInt(rowId); //.parentNode.parentNode.rowIndex;
                table.rows[rowNumber].cells[2].innerHTML = ptype;
                table.rows[rowNumber].cells[3].innerHTML = pno;
                table.rows[rowNumber].cells[4].innerHTML = pname;
                table.rows[rowNumber].cells[5].innerHTML = stock;
                table.rows[rowNumber].cells[6].innerHTML = odate;
                table.rows[rowNumber].cells[7].innerHTML = ordrby
                table.rows[rowNumber].cells[8].innerHTML = sunit
                table.rows[rowNumber].cells[9].innerHTML = srate;
                table.rows[rowNumber].cells[10].innerHTML = document.getElementById("lbl_bill").innerHTML
                table.rows[rowNumber].cells[11].innerHTML = document.getElementById("lbl_sunitaftr").innerHTML;
                table.rows[rowNumber].cells[12].innerHTML = document.getElementById("lbl_bill").innerHTML;
                table.rows[rowNumber].cells[13].innerHTML = wdate;
                if (cash == true) {
                    table.rows[rowNumber].cells[14].innerHTML = document.getElementById("cash").value;

                } else { }
                if (credit == true) {
                    table.rows[rowNumber].cells[14].innerHTML = document.getElementById("credit").value;
                } else { }
                if (neft == true) {
                    table.rows[rowNumber].cells[14].innerHTML = document.getElementById("neft").value;
                } else { }
                if (dd == true) {
                    table.rows[rowNumber].cells[14].innerHTML = document.getElementById("dd").value;
                } else { }
                //var crecard = document.getElementById("txt_credit").value;
                //var ddd = document.getElementById("txt_dd").value;
                //var neftnum = document.getElementById("txt_neft").value;

                if (cash == true) {
                    table.rows[rowNumber].cells[15].innerHTML = "-";
                }
                else {
                    if (credit == true) {
                        document.getElementById("credit").checked = true;
                        table.rows[rowNumber].cells[15].innerHTML = crecard;

                    } else { }
                    if (dd == true) {
                        document.getElementById("dd").chcecked = true;
                        table.rows[rowNumber].cells[15].innerHTML = ddd;
                    } else { }
                    if (neft == true) {
                        document.getElementById("neft").checked = true;
                        table.rows[rowNumber].cells[15].innerHTML = nefnum;
                    }
                }

                if (creditchk == true) {
                    table.rows[rowNumber].cells[16].innerHTML = "yes";
                }
                else {
                    table.rows[rowNumber].cells[16].innerHTML = "No";
                }

                table.rows[rowNumber].cells[17].innerHTML = document.getElementById("lbl_bill").innerHTML;

                table.rows[rowNumber].cells[18].innerHTML = des;


                document.getElementById("form2").reset();
                document.getElementById("lbl_bill").innerHTML = "";
                document.getElementById("lbl_sunitaftr").innerHTML = "";
                //cash.chcecked = false;
                //credit.checked = false;
                // neft.checked = false;
                //dd.checked = false;
                document.getElementById("lbl").innerHTML = "";

                var len = table.rows.length;
                document.getElementById("update").style.display = "none";
                document.getElementById("lbl_clr").style.display = "none";
                document.getElementById("btn_submit").style.display = "block";
                document.getElementById("btn_clr").style.display = "block";

            } else {
                document.getElementById("update").style.display = "block";
                document.getElementById("lbl_clr").style.display = "block";
                document.getElementById("btn_clr").style.display = "none";
                document.getElementById("btn_clr").style.display = "none";

            }


        } else {
            document.getElementById("lbl_err").innerHTML = errormsg;
            document.getElementById("update").style.display = "block";
            document.getElementById("lbl_clr").style.display = "block";
            document.getElementById("btn_clr").style.display = "none";
            document.getElementById("btn_clr").style.display = "none";
        }

    } else {
        document.getElementById("lbl").innerHTML = errmsg;
        document.getElementById("update").style.display = "block";
        document.getElementById("lbl_clr").style.display = "block";
        document.getElementById("btn_clr").style.display = "none";
        document.getElementById("btn_clr").style.display = "none";
    }
    var cash = document.getElementById("cash").checked;

    if (credit == true) {
        document.getElementById("lbl_mand").style.display = "block";
        document.getElementById("lbl_credit").style.display = "block";
        document.getElementById("txt_credit").style.display = "block";
        document.getElementById("lbl_mandneft").style.display = "none";
        document.getElementById("lbl_neft").style.display = "none";
        document.getElementById("txt_neft").style.display = "none";
        document.getElementById("lbl_mdd").style.display = "none";
        document.getElementById("lbl_dd").style.display = "none";
        document.getElementById("txt_dd").style.display = "none";
    } else {
        document.getElementById("lbl_mand").style.display = "none";
        document.getElementById("lbl_credit").style.display = "none";
        document.getElementById("txt_credit").style.display = "none";
    }


    if (neft == true) {

        document.getElementById("lbl_mandneft").style.display = "block";
        document.getElementById("lbl_neft").style.display = "block";
        document.getElementById("txt_neft").style.display = "block";
        document.getElementById("lbl_mand").style.display = "none";
        document.getElementById("lbl_credit").style.display = "none";
        document.getElementById("txt_credit").style.display = "none";
        document.getElementById("lbl_mdd").style.display = "none";
        document.getElementById("lbl_dd").style.display = "none";
        document.getElementById("txt_dd").style.display = "none";


    } else {
        document.getElementById("lbl_mandneft").style.display = "none";
        document.getElementById("lbl_neft").style.display = "none";
        document.getElementById("txt_neft").style.display = "none";
    }

    if (dd == true) {

        document.getElementById("lbl_mdd").style.display = "block";
        document.getElementById("lbl_dd").style.display = "block";
        document.getElementById("txt_dd").style.display = "block";
        document.getElementById("lbl_mand").style.display = "none";
        document.getElementById("lbl_credit").style.display = "none";
        document.getElementById("txt_credit").style.display = "none";
        document.getElementById("lbl_mandneft").style.display = "none";
        document.getElementById("lbl_neft").style.display = "none";
        document.getElementById("txt_neft").style.display = "none";


    } else {
        document.getElementById("lbl_mdd").style.display = "none";
        document.getElementById("lbl_dd").style.display = "none";
        document.getElementById("txt_dd").style.display = "none";

    }
    if (cash == true) {
        document.getElementById("lbl_mand").style.display = "none";
        document.getElementById("lbl_credit").style.display = "none";
        document.getElementById("txt_credit").style.display = "none";
        document.getElementById("lbl_mandneft").style.display = "none";
        document.getElementById("lbl_neft").style.display = "none";
        document.getElementById("txt_neft").style.display = "none";
        document.getElementById("lbl_mdd").style.display = "none";
        document.getElementById("lbl_dd").style.display = "none";
        document.getElementById("txt_dd").style.display = "none";

    }
    document.getElementById("lbl_SAUsales").innerHTML = "";
    document.getElementById("lblerr_TotalStock").innerHTML = "";
    document.getElementById("lblerr").innerHTML = "";
    document.getElementById("lbl_txterr").innerHTML = "";
}



function AcceptsNumOnly(event) {
    var errmsg = "";
    var num = (event.which) ? event.which : event.keyCode;
    if (((num >= 48) && (num <= 57)) || (num == 8) || (num == 46) || (num == 9)) {
        document.getElementById("lblerr_TotalStock").innerHTML = "";
        return true;
    }
    else {
        errmsg += "<b>This Field accepts only numbers</b>";
        document.getElementById("lblerr_TotalStock").innerHTML = errmsg;
        return false;
    }
}




function AcceptsNumbers(event) {
    var errmsg = "";
    var num = (event.which) ? event.which : event.keyCode;
    if (((num >= 48) && (num <= 57)) || (num == 8) || (num == 127) || (num == 9)) {
        document.getElementById("lblerr").innerHTML = "";
        return true;
    }
    else {
        errmsg += "<b>This Field accepts only numbers</b>";
        document.getElementById("lblerr").innerHTML = errmsg;
        return false;
    }
}
function AcceptsTextOnly(event) {
    //alert(event);
    var errmsg = "";
    var txt = (event.which) ? event.which : event.keyCode;
    //alert(txt);
    if (((txt >= 65) && (txt <= 90)) || ((txt >= 97) && (txt <= 122)) || (txt == 32) || (txt == 8) || (txt == 9) || (txt == 127) || (txt == 46)) {
        document.getElementById("lbl_txterr").innerHTML = "";
        return true;
    }
    else {
        errmsg += "<b>This Field accepts only Alphabates</b>";
        document.getElementById("lbl_txterr").innerHTML = errmsg;
        return false;
    }
}