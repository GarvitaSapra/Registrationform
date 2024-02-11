<script type="text/javascript"> 
function validate() 
{ 
 var name=document.forms["myform"]["name"]; 
 var password=document.forms.["myform"]["password"]; 
 if(name=null || name="") 
 { 
  alert("name cant be null"); 
  return false; 
 
 } 
 
              else if(password.length<6) 
              { 
 alert("password must be atleast 6 chahracters long."); 
 return false; 
             }  
                                                                                                                                                 
 
           var mail = document.forms["myform"]["email"].value; 
                if (mail == "") 
         { 
            alert("Please enter Email-Address"); 
          return false; 
     } 
 var password1=document.forms["newForm"]["password"].value; 
 var password2=document.forms["newForm"]["fcpass"].value; 
if(password1==password2) 
 return true; 
else 
 alert("password dont match"); 
 return false; 
  var phone = document.myform.fphone.value; 
if (phone.length != 10) { 
alert("The number is wrong"); 
                return false; 
            }            
} 
