function clearsallvalues() {
    document.getElementById("txt_firstname").value="";
    document.getElementById("txt_middlename").value="";
    document.getElementById("txt_lastname").value = "";

    document.getElementById("Text1").value="";
   document.getElementById("Text2").value="";
   document.getElementById("Text3").value = "";

   document.getElementById("txt_present").value="";
   document.getElementById("txt_permanent").value="";


   document.getElementById("txt_phone").value="";
   document.getElementById("txt_email").value = "";

   document.getElementById("chk_games").checked = false;
   document.getElementById("chk_music").checked = false;
   document.getElementById("chk_read").checked = false;
   document.getElementById("chk_dancing").checked = false;

   document.getElementById("chk_telugu").checked = false;
   document.getElementById("chk_english").checked = false;
   document.getElementById("chk_hindi").checked = false;
   document.getElementById("chk_other").checked = false;
   document.getElementById("txt_other").style.display = "none";

   document.getElementById("radio_male").checked = true;
   document.getElementById("radio_female").checked = false;


   document.getElementById("sel_course").selectedIndex=0;
   document.getElementById("sel_semister").selectedIndex = 0;





   document.getElementById("txt_dob").value="";
   document.getElementById("txt_dor").value="";

   document.getElementById("chk_address").checked = false;

   document.getElementById("lbl_error").innerHTML = "";
   
}