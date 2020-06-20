function gettime() {
    var today = new Date();
    var dd = today.getDate();
    var months = new Array(12);
    months[0] = "Jan";
    months[1] = "Feb";
    months[2] = "Mar";
    months[3] = "Apr";
    months[4] = "May";
    months[5] = "Jun";
    months[6] = "Jul";
    months[7] = "Aug";
    months[8] = "Sep";
    months[9] = "Oct";
    months[10] = "Nov";
    months[11] = "Dec";

    var month_value = today.getMonth();  //January is 0!
    var yyyy = today.getFullYear();
    document.getElementById("date").value = +dd + '-' + months[month_value] + '-' + yyyy;

    //selectbox validation to display options in ascending order.
    /* var listItem = document.getElementById('accountwith').getElementsByTagName('option');
    var listLength = listItem.length;
    var list = [];
    for (var i = 0; i < listLength; i++) {
    list[i] = listItem[i].firstChild.nodeValue;
    list.sort();
    }
    for (var i = 0; i < listLength; i++) {
    listItem[i].firstChild.nodeValue = list[i];
    } */
}

function Numberonkey(evt) {
    var charcode = (evt.which) ? evt.which : event.keyCode;
    if ((charcode >= 48 && charcode <= 57) || (charcode == 8) || (charcode == 9)) {
        return true;
    }
    else {
        return false;
    }
}
//FirstName, LastName, ToFirstName, ToLastName validations, this fields allows alphanumeric and special characters.
function namefields(evt) {
    var charcode = (evt.which) ? evt.which : event.keyCode;
    if ((charcode >= 97 && charcode <= 122) || (charcode == 8) || (charcode == 9) || (charcode >= 35 && charcode <= 40) || (charcode == 32)) {
        return true;
    }
    else if ((charcode >= 65 && charcode <= 90)) {
        return true;
    }
    else {
        return false;
    }
}

//Account Balance validation for AccountType Savings.
function acuntbalanceonchange() {
    var errmsg = "";
    var _accountnumber = document.getElementById("accountnumber").value;
    if (_accountnumber == "") {
        errmsg += "Please enter Account Number.<br />";
    }
    else {
        var _regaccountnumber = /^\d{12}$/;
        if (_regaccountnumber.test(_accountnumber)) {
            var _accounttypesavings = document.getElementById("accounttypesavings").checked;
            if (_accounttypesavings == true) {
                document.getElementById("accountbalance").innerHTML = "10000";
            }
        }
        else {
            errmsg += "Account Number must be 12 digits.<br/>";
        }

    }
    if (errmsg != "") {
        document.getElementById("lblerr").innerHTML = errmsg;
    }
    else {


        document.getElementById("lblerr").innerHTML = "";
    }

}

//Account Balance validation for AccountType Current.
function acuntcurrent() {
    var errmsg = "";
    var _accountnumber = document.getElementById("accountnumber").value;
    if (_accountnumber == "") {
        errmsg += "Please enter Account Number.<br />";
    }
    else {
        var _regaccountnumber = /^\d{12}$/;
        if (_regaccountnumber.test(_accountnumber)) {
            var _accounttypecurrent = document.getElementById("accounttypecurrent").checked;
            if (_accounttypecurrent == true) {
                document.getElementById("accountbalance").innerHTML = "50000";
            }
        }
        else {
            errmsg += "Account Number must be 12 digits.<br/>";
        }


    }
    if (errmsg != "") {
        document.getElementById("lblerr").innerHTML = errmsg;
    }
    else {


        document.getElementById("lblerr").innerHTML = "";
    }
}

//E-MailId validaion onblur event.
function email(obj) {
    var errmsg = "";
    var _emailid = document.getElementById("emailid").value;
    if (_emailid == "") {

    }
    else {
        //Regular Expression to allow alphanumeric and special characters.
        var _regemailid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (_emailid.match(_regemailid)) {
        }
        else {
            errmsg += "Invalid E-Mail Format.<br />";
        }
    }
    if (errmsg != "") {
        document.getElementById("lblerr").innerHTML = errmsg;
    }
    else {


        document.getElementById("lblerr").innerHTML = "";
    }
}

//Mandatory field validations , this validations are executed by clicking Submit Button.
function submitbutton(obj) {

    //FirstName alidation.

    var errmsg = "";
    var _firstname = document.getElementById("firstname").value;
    if (_firstname == "") {
        errmsg += "Please enter First Name.<br />";
    }
    else {
        var _firstname = document.getElementById("firstname").value;
        _firstname = _firstname.replace(/^\s+|\s+$/g, "");
        document.getElementById("firstname").value = _firstname;
    }

    //LastName validation.
    var _lastname = document.getElementById("lastname").value;
    if (_lastname == "") {

    }
    else {
        var _lastname = document.getElementById("lastname").value;
        _lastname = _lastname.replace(/^\s+|\s+$/g, "");
        document.getElementById("lastname").value = _lastname;
    }

    //Account Number validation.
    var _accountnumber = document.getElementById("accountnumber").value;
    if (_accountnumber == "") {
        errmsg += "Please enter Account Number.<br />";
    }
    else {
        var _accountnumber = document.getElementById("accountnumber").value;
        _accountnumber = _accountnumber.replace(/^0+|\s+$/g, "");
         document.getElementById("accountnumber").value = _accountnumber;
        var _regaccountnumber = /^\d{12}$/;
        if (_regaccountnumber.test(_accountnumber)) {

        }
        else {
            errmsg += "Account Number must be 12 digits.<br/>";
        }
    }


    //Contact Number validation.
    var _contactnumber = document.getElementById("contactnumber").value;
    if (_contactnumber == "") {

    }
    else {
        var _contactnumber = document.getElementById("contactnumber").value;
        _contactnumber = _contactnumber.replace(/^0+|\s+$/g, "");
        document.getElementById("contactnumber").value = _contactnumber;
        var _regcontactnumber = /^\d{10}$/;
        if (_regcontactnumber.test(_contactnumber)) {

        }
        else {
            errmsg += "Contact Number Must be 10 digits.<br/>";
        }
    }


    //E-MailId validation.
    var _emailid = document.getElementById("emailid").value;
    if (_emailid == "") {

    }

    //Address validation.
    var _address = document.getElementById("address").value;

    //Account Type Required field validation.
    var _accounttypesavings = document.getElementById("accounttypesavings").checked;
    var _accounttypecurrent = document.getElementById("accounttypecurrent").checked;
    if (((_accounttypesavings == true) || (_accounttypecurrent == true))) {

    }
    else {
        errmsg += "Please select Account Type.<br />";
    }

    //Transferto validations.
    //ToName valdation.
    var _transferfirstname = document.getElementById("tfirstname").value;
    if (_transferfirstname == "") {
        errmsg += "Please enter First Name in TransferTo section.<br />";
    }
    else {
        var _transferfirstname = document.getElementById("tfirstname").value;
        _transferfirstname = _transferfirstname.replace(/^\s+|\s+$/g, "");
        document.getElementById("tfirstname").value = _transferfirstname;
    }

    var _transferlastname = document.getElementById("tlastname").value;
    if (_transferlastname == "") {

    }
    else {
        var _transferlastname = document.getElementById("tlastname").value;
        _transferlastname = _transferlastname.replace(/^\s+|\s+$/g, "");
        document.getElementById("tlastname").value = _transferlastname;
    }
    //TransferTo AccountNumber required field validation.
    var _accountnumber = document.getElementById("accountnumber").value;
    var _transferaccountnumber = document.getElementById("taccountnumber").value;
    if (_transferaccountnumber == "") {
        errmsg += "Please enter  Account Number in TransferTo section.<br />";
    }
    else {
        var _transferaccountnumber = document.getElementById("taccountnumber").value;
        _transferaccountnumber = _transferaccountnumber.replace(/^0+|\s+$/g, "");
        document.getElementById("taccountnumber").value = _transferaccountnumber;
        var _regtransferaccountnumber = /^\d{12}$/;
        if (_regtransferaccountnumber.test(_transferaccountnumber)) {
            if (parseFloat(_transferaccountnumber) == parseFloat(_accountnumber)) {
                errmsg += "To Account Number and Account Number should not be same.<br/>";
            }
            else {

            }
        }
        else {
            errmsg += "Transfer Account Number must be 12 digits.<br/>";
        }
    }


    //Account with validatoins.
    var _accountwith = document.getElementById("accountwith").selectedIndex;
    if (_accountwith == 0) {
        errmsg += "Please select Accountwith details<br />";
    }

    //Amoount to be Transfer validation.
    var _amounttobetransfer = document.getElementById("amounttobetransfer").value;
    if (_amounttobetransfer == "") {
        errmsg += "Please enter Amount to Transfer.<br />"
    }
    else {
        //trim function to trim zero in amount to transfer text field.
        var _amounttobetransfer = document.getElementById("amounttobetransfer").value;
        _amounttobetransfer = _amounttobetransfer.replace(/^0+|\s+$/g, "");
        document.getElementById("amounttobetransfer").value = _amounttobetransfer;
        if (_amounttobetransfer >= 100) {
            var _amounttobetransfer = document.getElementById("amounttobetransfer").value;
            var _accountbalance = document.getElementById("accountbalance").innerHTML;
            if (parseFloat(_accountbalance) < parseFloat(_amounttobetransfer)) {
                errmsg += "Insufficient Account Balance.<br/>";
            }
        }
        else {
            errmsg += "Transaction is not possible Minimum Amount to Transfer is 100.<br/>";
        }
    }


    //ToContactNumber validation.
    var _transfercontactnumber = document.getElementById("tcontactnumber").value;

    if (_transfercontactnumber == "") {

    }
    else {
        var _transfercontactnumber = document.getElementById("tcontactnumber").value;
        _transfercontactnumber = _transfercontactnumber.replace(/^0+|\s+$/g, "");
        document.getElementById("tcontactnumber").value = _transfercontactnumber;
        var _regtcontactnumber = /^\d{10}$/;
        if (_regtcontactnumber.test(_transfercontactnumber)) {

        }
        else {
            errmsg += "To Contact Number Must be 10 digits.<br/>";
        }
    }

    //Requestfor validation.
    var _checkbook = document.getElementById("checkbook").checked;
    var _creditcard = document.getElementById("creditcard").checked;
    var _loans = document.getElementById("loans").checked;
    /*if (((_checkbook == false) && (_creditcard == false) && (_loans == false))) {
    
    }*/


    var _avaialbelrecords = document.getElementById("availablerecords").innerHTML;

    //Errormsg validation.
    if (errmsg != "") {
        document.getElementById("lblerr").innerHTML = errmsg;
    }
    else {

        var TABLE = document.getElementById("Mob_Bankingdetails");
        var BODY = TABLE.getElementsByTagName('tbody')[0];
        var rowCount = TABLE.rows.length;
        var i = rowCount;
        if (i % 2 == 0) {
            var TR = document.createElement('tr');
            var TD = document.createElement('td');

            //var len = document.getElementById("MobileBankingdetails").rows.length;

            var TD = document.createElement("td");
            TD.innerHTML = "<img src='Images/Edit.gif' class='imgbutton' alt='edit' id='edt_" + rowCount + "' onclick='javascript:editrow(this)'/>";
            TR.appendChild(TD);

            var TD1 = document.createElement("td");
            TD1.innerHTML = "<img src='Images/Delete.gif' class='imgbutton' alt='delete' id='del_" + rowCount + "' onclick='javascript:deleteRow(this)'/>";
            TR.appendChild(TD1);

            var TD2 = document.createElement('td');
            TD2.align = "left";
            TD2.innerHTML = _firstname;
            TR.appendChild(TD2);

            var TD3 = document.createElement('td');
            TD3.align = "left";
            TD3.innerHTML = _lastname;
            TR.appendChild(TD3);

            var TD4 = document.createElement('td');
            TD4.align = "right";
            TD4.innerHTML = _accountnumber;
            TR.appendChild(TD4);

            var TD5 = document.createElement('td');
            TD5.align = "right";
            TD5.innerHTML = _contactnumber;
            TR.appendChild(TD5);

            var TD6 = document.createElement('td');
            TD6.align = "left";
            TD6.innerHTML = _emailid;
            TR.appendChild(TD6);

            var TD7 = document.createElement('td');
            TD7.align = "left";
            TD7.innerHTML = _address;
            TR.appendChild(TD7);

            var TD8 = document.createElement('td');
            TD8.align = "left";
            var _accountsavings = document.getElementById("accounttypesavings").checked;
            var _accountcurrent = document.getElementById("accounttypecurrent").checked;
            if (_accountsavings == true) {
                TD8.innerHTML = document.getElementById("accounttypesavings").value;
                TR.appendChild(TD8);
            }
            else {
                TD8.innerHTML = document.getElementById("accounttypecurrent").value;
                TR.appendChild(TD8);

            }

            var TD9 = document.createElement('td');
            TD9.align = "right";
            TD9.innerHTML = document.getElementById("accountbalance").innerHTML;
            TR.appendChild(TD9);

            var TD10 = document.createElement('td');
            TD10.align = "left";
            TD10.innerHTML = _transferfirstname;
            TR.appendChild(TD10);


            var TD11 = document.createElement('td');
            TD10.align = "left";
            TD11.innerHTML = _transferlastname;
            TR.appendChild(TD11);

            var TD12 = document.createElement('td');
            TD12.align = "right";
            TD12.innerHTML = _transferaccountnumber;
            TR.appendChild(TD12);

            var _accountwith = document.getElementById("accountwith").value;
            var TD13 = document.createElement('td');
            TD13.align = "left";
            TD13.innerHTML = _accountwith;
            TR.appendChild(TD13);

            var TD14 = document.createElement('td');
            TD14.align = "right";
            TD14.innerHTML = _amounttobetransfer;
            TR.appendChild(TD14);

            var TD15 = document.createElement('td');
            TD15.align = "right";
            TD15.innerHTML = _transfercontactnumber;
            TR.appendChild(TD15);

            var TD16 = document.createElement('td');
            TD16.align = "left";
            var _checkbook = document.getElementById("checkbook").checked;
            var _creditcard = document.getElementById("creditcard").checked;
            var _loans = document.getElementById("loans").checked;

            if (((_checkbook == false) && (_creditcard == false) && (_loans == false))) {

            }
            else {
                if (_checkbook == true) {
                    TD16.innerHTML = document.getElementById("checkbook").value;
                    TR.appendChild(TD16);
                }
                if (_creditcard == true) {
                    TD16.innerHTML = TD16.innerHTML + " " + document.getElementById("creditcard").value;
                    TR.appendChild(TD16);
                }
                if (_loans == true) {
                    TD16.innerHTML = TD16.innerHTML + " " + document.getElementById("loans").value;
                    TR.appendChild(TD16);
                }
            }


            BODY.appendChild(TR);
        }
        else {
            var TR = document.createElement('tr');                              //Create a row in table (id=tblmultiplication).
            TR.style.backgroundColor = "#DEE7FF";
            TR.style.color = "Black";
            var TD = document.createElement('td');
            var rowCount = TABLE.rows.length;
            //var len = document.getElementById("MobileBankingdetails").rows.length;

            var TD = document.createElement("td");
            TD.innerHTML = "<img src='Images/Edit.gif' class='imgbutton' alt='edit' id='edt_" + rowCount + "' onclick='javascript:editrow(this)'/>";
            TR.appendChild(TD);

            var TD1 = document.createElement("td");
            TD1.innerHTML = "<img src='Images/Delete.gif' class='imgbutton' alt='delete' id='del_" + rowCount + "' onclick='javascript:deleteRow(this)'/>";
            TR.appendChild(TD1);

            var TD2 = document.createElement('td');
            TD2.align = "left";
            TD2.innerHTML = _firstname;
            TR.appendChild(TD2);

            var TD3 = document.createElement('td');
            TD3.align = "left";
            TD3.innerHTML = _lastname;
            TR.appendChild(TD3);

            var TD4 = document.createElement('td');
            TD4.align = "right";
            TD4.innerHTML = _accountnumber;
            TR.appendChild(TD4);

            var TD5 = document.createElement('td');
            TD5.align = "right";
            TD5.innerHTML = _contactnumber;
            TR.appendChild(TD5);

            var TD6 = document.createElement('td');
            TD6.align = "left";
            TD6.innerHTML = _emailid;
            TR.appendChild(TD6);

            var TD7 = document.createElement('td');
            TD7.align = "left";
            TD7.innerHTML = _address;
            TR.appendChild(TD7);

            var TD8 = document.createElement('td');
            TD8.align = "left";
            var _accountsavings = document.getElementById("accounttypesavings").checked;
            var _accountcurrent = document.getElementById("accounttypecurrent").checked;
            if (_accountsavings == true) {
                TD8.innerHTML = document.getElementById("accounttypesavings").value;
                TR.appendChild(TD8);
            }
            else {
                TD8.innerHTML = document.getElementById("accounttypecurrent").value;
                TR.appendChild(TD8);

            }

            var TD9 = document.createElement('td');
            TD9.align = "right";
            TD9.innerHTML = document.getElementById("accountbalance").innerHTML;
            TR.appendChild(TD9);

            var TD10 = document.createElement('td');
            TD10.align = "left";
            TD10.innerHTML = _transferfirstname;
            TR.appendChild(TD10);


            var TD11 = document.createElement('td');
            TD10.align = "left";
            TD11.innerHTML = _transferlastname;
            TR.appendChild(TD11);

            var TD12 = document.createElement('td');
            TD12.align = "right";
            TD12.innerHTML = _transferaccountnumber;
            TR.appendChild(TD12);

            var _accountwith = document.getElementById("accountwith").value;
            var TD13 = document.createElement('td');
            TD13.align = "left";
            TD13.innerHTML = _accountwith;
            TR.appendChild(TD13);

            var TD14 = document.createElement('td');
            TD14.align = "right";
            TD14.innerHTML = _amounttobetransfer;
            TR.appendChild(TD14);

            var TD15 = document.createElement('td');
            TD15.align = "right";
            TD15.innerHTML = _transfercontactnumber;
            TR.appendChild(TD15);

            var TD16 = document.createElement('td');
            TD16.align = "left";
            var _checkbook = document.getElementById("checkbook").checked;

            var _creditcard = document.getElementById("creditcard").checked;
            var _loans = document.getElementById("loans").checked;
            if (((_checkbook == false) && (_creditcard == false) && (_loans == false))) {

            }
            else {
                if (_checkbook == true) {
                    TD16.innerHTML = document.getElementById("checkbook").value;
                    TR.appendChild(TD16);
                }
                if (_creditcard == true) {
                    TD16.innerHTML = TD16.innerHTML + " " + document.getElementById("creditcard").value;
                    TR.appendChild(TD16);
                }
                if (_loans == true) {
                    TD16.innerHTML = TD16.innerHTML + " " + document.getElementById("loans").value;
                    TR.appendChild(TD16);
                }
            }

            BODY.appendChild(TR);
        }



        //document.getElementById("form1").reset();
        document.getElementById("firstname").value = "";
        document.getElementById("lastname").value = "";
        document.getElementById("accountnumber").value = "";
        document.getElementById("contactnumber").value = "";
        document.getElementById("address").value = "";
        document.getElementById("emailid").value = "";
        document.getElementById("accounttypesavings").checked = false;
        document.getElementById("accounttypecurrent").checked = false;
        document.getElementById("accountbalance").innerHTML = "";
        document.getElementById("tfirstname").value = "";
        document.getElementById("tlastname").value = "";
        document.getElementById("taccountnumber").value = "";
        document.getElementById("accountwith").selectedIndex = "";
        document.getElementById("amounttobetransfer").value = "";
        document.getElementById("tcontactnumber").value = "";
        document.getElementById("checkbook").checked = false;
        document.getElementById("creditcard").checked = false;
        document.getElementById("loans").checked = false;
        document.getElementById("lblerr").innerHTML = "";
        document.getElementById("availablerecords").innerHTML = parseFloat(_avaialbelrecords) + 1;
    }
}


//Clear Function to clear fields in form.
function clearbutton() {


    document.getElementById("firstname").value = "";
    document.getElementById("lastname").value = "";
    document.getElementById("accountnumber").value = "";
    document.getElementById("contactnumber").value = "";
    document.getElementById("address").value = "";
    document.getElementById("emailid").value = "";
    document.getElementById("accounttypesavings").checked = false;
    document.getElementById("accounttypecurrent").checked = false;
    document.getElementById("accountbalance").innerHTML = "";
    document.getElementById("tfirstname").value = "";
    document.getElementById("tlastname").value = "";
    document.getElementById("taccountnumber").value = "";
    document.getElementById("accountwith").selectedIndex = "";
    document.getElementById("amounttobetransfer").value = "";
    document.getElementById("tcontactnumber").value = "";
    document.getElementById("checkbook").checked = false;
    document.getElementById("creditcard").checked = false;
    document.getElementById("loans").checked = false;
    document.getElementById("lblerr").innerHTML = "";
}

function editrow(obj) {
    
   /* var _firstname = document.getElementById("firstname").value;
    var _accountnumber = document.getElementById("accountnumber").value;
    if ((_firstname == "") && (_accountnumber == "")) { */

        var table = document.getElementById("Mob_Bankingdetails");
        var rowCount = table.rows.length;
        var rowNumber = obj.parentNode.parentNode.rowIndex;

        if (parseInt(document.getElementById("Mob_Bankingdetails").rows.length) > 0) {
            document.getElementById("firstname").value = table.rows[rowNumber].cells[2].innerHTML;
            document.getElementById("lastname").value = table.rows[rowNumber].cells[3].innerHTML;
            document.getElementById("accountnumber").value = table.rows[rowNumber].cells[4].innerHTML;
            document.getElementById("contactnumber").value = table.rows[rowNumber].cells[5].innerHTML;
            document.getElementById("emailid").value = table.rows[rowNumber].cells[6].innerHTML;
            document.getElementById("address").value = table.rows[rowNumber].cells[7].innerHTML;
            var accounttype = table.rows[rowNumber].cells[8].innerHTML;
            if (accounttype == "Savings") {
                document.getElementById("accounttypesavings").checked = true;
            }
            if (accounttype == "Current") {
                document.getElementById("accounttypecurrent").checked = true;
            }
            document.getElementById("accountbalance").innerHTML = table.rows[rowNumber].cells[9].innerHTML;
            document.getElementById("tfirstname").value = table.rows[rowNumber].cells[10].innerHTML;
            document.getElementById("tlastname").value = table.rows[rowNumber].cells[11].innerHTML;
            document.getElementById("taccountnumber").value = table.rows[rowNumber].cells[12].innerHTML;
            document.getElementById("accountwith").value = table.rows[rowNumber].cells[13].innerHTML;
            document.getElementById("amounttobetransfer").value = table.rows[rowNumber].cells[14].innerHTML;
            document.getElementById("tcontactnumber").value = table.rows[rowNumber].cells[15].innerHTML;

            var requests = table.rows[rowNumber].cells[16].innerHTML;
            if (requests.match("Cheque Book") || requests.match("CreditCard") || requests.match("Loans")) {
                if (requests.match("Cheque Book")) {
                    document.getElementById("checkbook").checked = true;
                }
                else {
                    document.getElementById("checkbook").checked = false;
                }
                if (requests.match("CreditCard")) {
                    document.getElementById("creditcard").checked = true;
                }
                else {
                    document.getElementById("creditcard").checked = false;
                }
                if (requests.match("Loans")) {
                    document.getElementById("loans").checked = true;
                }
                else {
                    document.getElementById("loans").checked = false;
                }
            }
            else {
                document.getElementById("checkbook").checked = false;
                document.getElementById("creditcard").checked = false;
                document.getElementById("loans").checked = false;
            }
        }


        document.getElementById("tdsub").innerHTML = "<input type='button' class='button' value='Update' id='up_' onclick='javascript:return updatebutton(" + rowNumber + ");'>";
        document.getElementById("tdclr").innerHTML = "<input type='button' class='button' value='Reset' id='rs_' onclick='javascript:return resetbutton(" + rowNumber + ");'>";
        var errmsg = "";
        if (errmsg != "") {
            document.getElementById("lblerr").innerHTML = errmsg;
        }
        else {


            document.getElementById("lblerr").innerHTML = "";
        }
    
   /* else {
        alert("Please Update selected record");
    } */

    /*var _editbuttonid = document.getElementById("edt_" + rowCount + "").disabled;
    var _deletebuttonid = document.getElementById("del_" + rowCount + "").disabled;
    if (_editbuttonid = false) {
    _deletebuttonid = true;
    //document.getElementById("del_" + rowCount + "").style.display = "block";
    }
    else {
    //document.getElementById("del_" + rowCount + "").style.display = "none";
    } */


}
//Reset button function to Retrive edited record details .
function resetbutton(obj) {
    var errmsg = "";
    var table = document.getElementById("Mob_Bankingdetails");
    //var rowCount = table.rows.length;
    rowNumber = parseInt(obj);

    if (parseInt(document.getElementById("Mob_Bankingdetails").rows.length) > 0) {
        document.getElementById("firstname").value = table.rows[rowNumber].cells[2].innerHTML;
        document.getElementById("lastname").value = table.rows[rowNumber].cells[3].innerHTML;
        document.getElementById("accountnumber").value = table.rows[rowNumber].cells[4].innerHTML;
        document.getElementById("contactnumber").value = table.rows[rowNumber].cells[5].innerHTML;
        document.getElementById("emailid").value = table.rows[rowNumber].cells[6].innerHTML;
        document.getElementById("address").value = table.rows[rowNumber].cells[7].innerHTML;
        var accounttype = table.rows[rowNumber].cells[8].innerHTML;
        if (accounttype == "Savings") {
            document.getElementById("accounttypesavings").checked = true;
        }
        if (accounttype == "Current") {
            document.getElementById("accounttypecurrent").checked = true;
        }
        document.getElementById("accountbalance").innerHTML = table.rows[rowNumber].cells[9].innerHTML;
        document.getElementById("tfirstname").value = table.rows[rowNumber].cells[10].innerHTML;
        document.getElementById("tlastname").value = table.rows[rowNumber].cells[11].innerHTML;
        document.getElementById("taccountnumber").value = table.rows[rowNumber].cells[12].innerHTML;
        document.getElementById("accountwith").value = table.rows[rowNumber].cells[13].innerHTML;
        document.getElementById("amounttobetransfer").value = table.rows[rowNumber].cells[14].innerHTML;
        document.getElementById("tcontactnumber").value = table.rows[rowNumber].cells[15].innerHTML;
        var requests = table.rows[rowNumber].cells[16].innerHTML;
        if ((requests.match("Cheque Book")) || (requests.match("CreditCard")) || (requests.match("Loans"))) {
            if (requests.match("Cheque Book")) {
                document.getElementById("checkbook").checked = true;
            }
            else {
                document.getElementById("checkbook").checked = false;
            }
            if (requests.match("CreditCard")) {
                document.getElementById("creditcard").checked = true;
            }
            else {
                document.getElementById("creditcard").checked = false;
            }
            if (requests.match("Loans")) {
                document.getElementById("loans").checked = true;
            }
            else {
                document.getElementById("loans").checked = false;
            }
        }
        else {
            document.getElementById("checkbook").checked = false;
            document.getElementById("creditcard").checked = false;
            document.getElementById("loans").checked = false;
        }
    }
    if (errmsg != "") {
        document.getElementById("lblerr").innerHTML = errmsg;
    }
    else {


        document.getElementById("lblerr").innerHTML = "";
    }
}

//Update Function to update records in grid.
function updatebutton(obj) {

    var table = document.getElementById("Mob_Bankingdetails");
    var rowCount = table.rows.length;
    var rowNumber = parseInt(obj);
    var errmsg = "";
    var _firstname = document.getElementById("firstname").value;
    if (_firstname == "") {
        errmsg += "Please enter First Name.<br />";
    }
    else {
        var _firstname = document.getElementById("firstname").value;
        _firstname = _firstname.replace(/^\s+|\s+$/g, "");
        document.getElementById("firstname").value = _firstname;
    }

    //LastName validation.
    var _lastname = document.getElementById("lastname").value;
    if (_lastname == "") {

    }
    else {
        var _lastname = document.getElementById("lastname").value;
        _lastname = _lastname.replace(/^\s+|\s+$/g, "");
        document.getElementById("lastname").value = _lastname;
    }

    //Account Number validation.
    var _accountnumber = document.getElementById("accountnumber").value;
    if (_accountnumber == "") {
        errmsg += "Please enter Account Number.<br />";
    }
    else {
        var _accountnumber = document.getElementById("accountnumber").value;
        _accountnumber = _accountnumber.replace(/^0+|\s+$/g, "");
        document.getElementById("accountnumber").value = _accountnumber;
        var _regaccountnumber = /^\d{12}$/;
        if (_regaccountnumber.test(_accountnumber)) {

        }
        else {
            errmsg += "Account Number must be 12 digits.<br/>";
        }
    }


    //Contact Number validation.
    var _contactnumber = document.getElementById("contactnumber").value;
    if (_contactnumber == "") {

    }
    else {
        var _contactnumber = document.getElementById("contactnumber").value;
        _contactnumber = _contactnumber.replace(/^0+|\s+$/g, "");
        document.getElementById("contactnumber").value = _contactnumber;
        var _regcontactnumber = /^\d{10}$/;
        if (_regcontactnumber.test(_contactnumber)) {

        }
        else {
            errmsg += "Contact Number Must be 10 digits.<br/>";
        }
    }


    //E-MailId validation.
    var _emailid = document.getElementById("emailid").value;
    if (_emailid == "") {
        //errmsg += "Please enter Your E-MailId.<br/>";
    }

    //Address validation.
    var _address = document.getElementById("address").value;

    //Account Type Required field validation.
    var _accounttypesavings = document.getElementById("accounttypesavings").checked;
    var _accounttypecurrent = document.getElementById("accounttypecurrent").checked;
    if (((_accounttypesavings == true) || (_accounttypecurrent == true))) {

    }
    else {
        errmsg += "Please select Account Type.<br />";
    }

    //Transferto validations.
    //ToName valdation.
    var _transferfirstname = document.getElementById("tfirstname").value;
    if (_transferfirstname == "") {
        errmsg += "Please enter First Name in TransferTo section.<br />";
    }
    else {
        var _transferfirstname = document.getElementById("tfirstname").value;
        _transferfirstname = _transferfirstname.replace(/^\s+|\s+$/g, "");
        document.getElementById("tfirstname").value = _transferfirstname;
    }

    var _transferlastname = document.getElementById("tlastname").value;
    if (_transferlastname == "") {

    }
    else {
        var _transferlastname = document.getElementById("tlastname").value;
        _transferlastname = _transferlastname.replace(/^\s+|\s+$/g, "");
        document.getElementById("tlastname").value = _transferlastname;
    }
    //TransferTo AccountNumber required field validation.
    var _accountnumber = document.getElementById("accountnumber").value;
    var _transferaccountnumber = document.getElementById("taccountnumber").value;
    if (_transferaccountnumber == "") {
        errmsg += "Please enter  Account Number in TransferTo section.<br />";
    }
    else {
        var _transferaccountnumber = document.getElementById("taccountnumber").value;
        _transferaccountnumber = _transferaccountnumber.replace(/^0+|\s+$/g, "");
        document.getElementById("taccountnumber").value = _transferaccountnumber;
        var _regtransferaccountnumber = /^\d{12}$/;
        if (_regtransferaccountnumber.test(_transferaccountnumber)) {
            if (parseFloat(_transferaccountnumber) == parseFloat(_accountnumber)) {
                errmsg += "To Account Number and Account Number should not be same.<br/>";
            }
            else {

            }
        }
        else {
            errmsg += "Transfer Account Number must be 12 digits.<br/>";
        }
    }


    //Account with validatoins.
    var _accountwith = document.getElementById("accountwith").selectedIndex;
    if (_accountwith == 0) {
        errmsg += "Please select Your Account with details.<br />";
    }

    //Amoount to be Transfer validation.
    var _amounttobetransfer = document.getElementById("amounttobetransfer").value;
    if (_amounttobetransfer == "") {
        errmsg += "Please enter Amount to Transfer.<br />"
    }
    else {
        if (_amounttobetransfer >= 100) {
            var _amounttobetransfer = document.getElementById("amounttobetransfer").value;
            var _accountbalance = document.getElementById("accountbalance").innerHTML;
            if (parseFloat(_accountbalance) < parseFloat(_amounttobetransfer)) {
                errmsg += "Insufficient Account Balance.<br/>";
            }
        }
        else {
            errmsg += "Transaction is not possible Minimum amount to Transfer is 100.<br/>";
        }
    }


    //ToContactNumber validation.
    var _transfercontactnumber = document.getElementById("tcontactnumber").value;

    if (_transfercontactnumber == "") {

    }
    else {
        var _regtcontactnumber = /^\d{10}$/;
        if (_regtcontactnumber.test(_transfercontactnumber)) {

        }
        else {
            errmsg += "To Contact Number Must be 10 digits.<br/>";
        }
    }
    //Requestfor validation.
    var _checkbook = document.getElementById("checkbook");
    var _creditcard = document.getElementById("creditcard");
    var _loans = document.getElementById("loans");
    /* if (((_checkbook == false) && (_creditcard == false) && (_loans == false))) {
    errmsg += "Please choose your Request<br />";
    } */


    var _avaialbelrecords = document.getElementById("availablerecords").innerHTML;

    //Errormsg validation.
    if (errmsg != "") {
        document.getElementById("lblerr").innerHTML = errmsg;
    }
    else {
        var table = document.getElementById("Mob_Bankingdetails");
        var rowCount = table.rows.length;
        var rowNumber = parseInt(obj);
        table.rows[rowNumber].cells[2].innerHTML = document.getElementById("firstname").value;
        table.rows[rowNumber].cells[3].innerHTML = document.getElementById("lastname").value;
        table.rows[rowNumber].cells[4].innerHTML = document.getElementById("accountnumber").value;
        table.rows[rowNumber].cells[5].innerHTML = document.getElementById("contactnumber").value;
        table.rows[rowNumber].cells[6].innerHTML = document.getElementById("emailid").value;
        table.rows[rowNumber].cells[7].innerHTML = document.getElementById("address").value;
        /*var accounttype = table.rows[rowNumber].cells[8].innerHTML;
        if (accounttype == "Savings") {
        document.getElementById("accounttypesavings").checked = true;
            
            
        }
        if (accounttype == "Current") {
        document.getElementById("accounttypecurrent").checked = true;
            
        } */
        if (document.getElementById("accounttypesavings").checked) {
            table.rows[rowNumber].cells[8].innerHTML = document.getElementById("accounttypesavings").value;
        }
        if (document.getElementById("accounttypecurrent").checked) {
            table.rows[rowNumber].cells[8].innerHTML = document.getElementById("accounttypecurrent").value;

        }
        table.rows[rowNumber].cells[9].innerHTML = document.getElementById("accountbalance").innerHTML;
        table.rows[rowNumber].cells[10].innerHTML = document.getElementById("tfirstname").value;
        table.rows[rowNumber].cells[11].innerHTML = document.getElementById("tlastname").value;
        table.rows[rowNumber].cells[12].innerHTML = document.getElementById("taccountnumber").value;
        table.rows[rowNumber].cells[13].innerHTML = document.getElementById("accountwith").value;
        table.rows[rowNumber].cells[14].innerHTML = document.getElementById("amounttobetransfer").value;
        table.rows[rowNumber].cells[15].innerHTML = document.getElementById("tcontactnumber").value;
        var _checkbook = document.getElementById("checkbook");
        var _creditcard = document.getElementById("creditcard");
        var _loans = document.getElementById("loans");
        table.rows[rowNumber].cells[16].innerHTML = "";

        if (document.getElementById("checkbook").checked == true) {
            table.rows[rowNumber].cells[16].innerHTML = document.getElementById("checkbook").value;
        }
        if (document.getElementById("creditcard").checked == true) {
            table.rows[rowNumber].cells[16].innerHTML = table.rows[rowNumber].cells[16].innerHTML + " " + document.getElementById("creditcard").value;
        }
        if (document.getElementById("loans").checked == true) {
            table.rows[rowNumber].cells[16].innerHTML = table.rows[rowNumber].cells[16].innerHTML + " " + document.getElementById("loans").value;
        }



        document.getElementById("firstname").value = "";
        document.getElementById("lastname").value = "";
        document.getElementById("accountnumber").value = "";
        document.getElementById("contactnumber").value = "";
        document.getElementById("address").value = "";
        document.getElementById("emailid").value = "";
        document.getElementById("accounttypesavings").checked = false;
        document.getElementById("accounttypecurrent").checked = false;
        document.getElementById("accountbalance").innerHTML = "";
        document.getElementById("tfirstname").value = "";
        document.getElementById("tlastname").value = "";
        document.getElementById("taccountnumber").value = "";
        document.getElementById("accountwith").selectedIndex = "";
        document.getElementById("amounttobetransfer").value = "";
        document.getElementById("tcontactnumber").value = "";
        document.getElementById("checkbook").checked = false;
        document.getElementById("creditcard").checked = false;
        document.getElementById("loans").checked = false;
        document.getElementById("lblerr").innerHTML = "";
        document.getElementById("tdsub").innerHTML = "<input type='button' class='button' value='Submit' id='sub_" + rowCount + "' onclick='javascript:return submitbutton(this)'>";
        document.getElementById("tdclr").innerHTML = "<input type='button' class='button' value='Clear' id='rs_" + rowCount + "' onclick='javascript:return clearbutton(this);'>";
    }
}


//Delete function for deleting records in grid.
function deleteRow(obj) {

    /*var table = document.getElementById("Mob_Bankingdetails");
    var rowCount = table.rows.length;
    var rowNumber = obj.parentNode.parentNode.rowIndex;


    if (parseInt(document.getElementById("Mob_Bankingdetails").rows.length) > 0) {
    document.getElementById("Mob_Bankingdetails").deleteRow(rowNumber);


    }
    var _avaialbelrecords = document.getElementById("availablerecords").innerHTML;
    document.getElementById("availablerecords").innerHTML = parseFloat(_avaialbelrecords) - 1; */
    /*
    var _firstname = document.getElementById("firstname").value;
    var _accountnumber = document.getElementById("accountnumber").value;
    if ((_firstname == "") && (_accountnumber == "")) { */
    var errmsg = "";
    var table = document.getElementById("Mob_Bankingdetails");
    var rowCount = table.rows.length;
    var rowNumber = obj.parentNode.parentNode.rowIndex;
    var agree = confirm("Are you sure you wish to delete?");
    if (agree) {

        if (parseInt(document.getElementById("Mob_Bankingdetails").rows.length) > 0) {
            document.getElementById("Mob_Bankingdetails").deleteRow(rowNumber);
        }

        var _avaialbelrecords = document.getElementById("availablerecords").innerHTML;
        document.getElementById("availablerecords").innerHTML = parseFloat(_avaialbelrecords) - 1;

    }

    document.getElementById("firstname").value = "";
    document.getElementById("lastname").value = "";
    document.getElementById("accountnumber").value = "";
    document.getElementById("contactnumber").value = "";
    document.getElementById("address").value = "";
    document.getElementById("emailid").value = "";
    document.getElementById("accounttypesavings").checked = false;
    document.getElementById("accounttypecurrent").checked = false;
    document.getElementById("accountbalance").innerHTML = "";
    document.getElementById("tfirstname").value = "";
    document.getElementById("tlastname").value = "";
    document.getElementById("taccountnumber").value = "";
    document.getElementById("accountwith").selectedIndex = "";
    document.getElementById("amounttobetransfer").value = "";
    document.getElementById("tcontactnumber").value = "";
    document.getElementById("checkbook").checked = false;
    document.getElementById("creditcard").checked = false;
    document.getElementById("loans").checked = false;
    document.getElementById("lblerr").innerHTML = "";
    document.getElementById("tdsub").innerHTML = "<input type='button' class='button' value='Submit' id='sub_" + rowCount + "' onclick='javascript:return submitbutton(this)'>";
    document.getElementById("tdclr").innerHTML = "<input type='button' class='button' value='Clear' id='rs_" + rowCount + "' onclick='javascript:return clearbutton(this);'>";

}

