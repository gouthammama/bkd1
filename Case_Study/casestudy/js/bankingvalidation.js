
function alphanumeric(evt)                                      
{
    var charcode = (evt.which) ? (evt.which) : (evt.keyCode);
    
    if (((charcode >= 65) && (charcode <= 90)) || ((charcode >= 97) && (charcode <= 122)) || ((charcode >= 48) && (charcode <= 57)) || (charcode == 8) || (charcode == 9) || (charcode == 46)||(charcode == 39))    //Accepts alphanumerics
     {
         return true;
    }


    else {
        return false;
    }
}

function alphabets(evt) 
{
    var charcode = (evt.which) ? (evt.which) : (evt.keyCode);
   
    if (((charcode >= 65) && (charcode <= 90)) || ((charcode >= 97) && (charcode <= 122))||(charcode==46)||(charcode==37)||(charcode==39))
     {
        return true;
    }


    else 
    {
       return false;
    }
}


function numerics(evt) {

    var charcode = (evt.which) ? (evt.which) : (evt.keyCode);
   

     if (((charcode >= 48) && (charcode <= 57))||(charcode == 8)||(charcode == 9)||(charcode==46)||(charcode==37)||(charcode==39))          //Accepts numerics only
   
    {
        return true;
    }


    else 
    {
        return false;
    }
}

function password() { 

    var value = document.getElementById("text_password").value;
    var len = document.getElementById("text_password").value.length;                        //Assigning length of the password to a variable 
    if (value == "")
    {
   var errmsg11="Please Enter Your Password";
    }
    if (len > 8) 
    {
       
    }

    else 
    {
        var errmsg1= "Password Should Contain Atleast 8 Characters";
     }
    var textvalue = document.getElementById("text_email").value;
    if (textvalue == "") {
        var errmsg22 = "please enter your mailid";
    }

    var valid1 = /^[A-Za-z0-9\._-]+@[A-Za-z]+.\w{2,4}.\w{2,2}$/;                        //Email validation 
    if (valid1.test(textvalue)) {
    }
    else
     {

         var errmsg2= "Invalid Email id";
    }

   

     
         
          if (errmsg1 == "") {

          }
          else {

              document.getElementById("lbl_password").innerHTML = errmsg1;
          }
          if (errmsg11 == "") {

          }
          else {

              document.getElementById("lbl_password").innerHTML = errmsg11;
          }
          if (errmsg2 == "") {

          }
          else {

              document.getElementById("lbl_email").innerHTML = errmsg2;
          }
          
          

              document.getElementById("lbl_email").innerHTML = errmsg22;
        
          


}

function balance(evt) 
{

    
    var charcode = (evt.which) ? (evt.which) : (evt.keyCode);
    if (((charcode >= 48) && (charcode <= 57)) || (charcode == 46))                 //Accepts numerics only
    {
        return true;
    }


    else {
        return false;
    }

}

function balance() {

   
    var value_accountnumber = document.getElementById("text_accountnumber").value;
    var value_accountnumber_len = value_accountnumber.length;
    

    if (value_accountnumber_len == 11) 
    {

        if (document.getElementById("radio_savings").checked == true) 
        {

            document.getElementById("text_balance").value = 25000;
        }
        if (document.getElementById("radio_current").checked == true)
         {
            document.getElementById("text_balance").value = 30000;

        }
        if (value_accountnumber == "00000000000") {

            document.getElementById("text_balance").value = "";
        }
        if (value_accountnumber_len < 11) {alert("hi");

        if(document.getElementById("radio_savings").checked==true)
        {

            document.getElementById("text_balance").value = "";
            }
            if(document.getElementById("radio_current").checked==true)
            {
            document.getElementById("text_balance").value = "";
           }

        }



    }
    if (document.getElementById("text_accountnumber").value =="") {

        document.getElementById("text_balance").value = "";

    }

}


function current()
 {
   
    document.getElementById("textarea_id").style.display = "none";
    document.getElementById("textarea_address").style.display = "none";
    //document.getElementById("button_reset").style.display = "none";
    
    date = new Date();
    var month = date.getMonth() + 1;                            
    var day = date.getDate();
    var year = date.getFullYear();


    document.getElementById("date-pick").innerHTML = day + '-' + month + '-' + year;                //display current date



}

function account() 
{

    if (document.getElementById("radio_nonsbi").checked == true) 
    {
        
        document.getElementById("acc_hide").style.display = "block"                                 //Account with is enable only when 'nonsbi' radio option is selected

        document.getElementById("select_accountwith").style.display = "block"
    }
    else {
       
        document.getElementById("acc_hide").style.display = "none"

        document.getElementById("select_accountwith").style.display = "none"
    }


}