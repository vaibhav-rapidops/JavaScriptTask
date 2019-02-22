"use strict";
class Login{
   constructor(email,pwd,usertype){
 	this.email=email.trim();
	this.pwd=pwd.trim();
	this.usertype=usertype.trim();  
   } 
  checkdatabase(){
    this.retrivedatas=JSON.parse(localStorage.getItem("account"));
     if(this.retrivedatas==null){return false;}else{return true;}
   }
  validation(){
      this.flagOfdb=this.checkdatabase();
      if(this.flagOfdb){
           this.flagOfdata=false;
           this.retrivedatas=JSON.parse(localStorage.getItem("account"));
           for(let retrivedata of this.retrivedatas){
             if(this.email==retrivedata.email && this.pwd==retrivedata.password){
                 this.flagOfdata=true; 
                 if(this.usertype==retrivedata.usertype){
 	               	alert("login SucccessFull...\nwe will redirecting to Home page...\nplease wait...");
                    window.location="home.html?usertype="+retrivedata.usertype+"&email="+retrivedata.email;
 	               	break;

                 }else{
                    alert(`You are Not ${this.usertype} ! try again...`);break;
                 }
            }
          }
       if(!this.flagOfdata){
       	alert("Your Email or Password is Wrong ! Try again...");
       }
      }else{
     alert("Your Account Not Found!");
     }
   }
}

function loginUser(){
	let email=document.getElementById('email').value;
	let pwd=document.getElementById('pwd').value;
	let usertype=document.getElementsByName('optradio');
    for(let utype of usertype){
     	if(utype.checked){
     		usertype=utype.value;
     		break;
     	}
     }
    let userlogin=new Login(email,pwd,usertype);
    userlogin.validation();

};

login.addEventListener("click", loginUser); 


