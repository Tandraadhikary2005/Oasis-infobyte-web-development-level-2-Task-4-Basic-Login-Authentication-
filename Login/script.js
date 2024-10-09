function Tandra(){
    let a = document.getElementById("username");
    let b = document.getElementById("password");

   if(a.value == "oasis" && b.value == "oasis@123"){
        alert("Login sucessful");
   }else{
        a.value='';
        b.value='';
        alert("wrong username or password");
   }
    
}