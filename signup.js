
// function userLogin(){
// 	let email=document.getElementById('email').value;
// 	let pwd=document.getElementById('pwd').value;
// 	let type=document.getElementById('type').value;
	



// 	if(typeof(Storage)!="undefined"){
//      localStorage.setItem("Email",email);
//            console.log(localStorage.getItem("Email"));
//       console.log(localStorage.getItem("Email"));
// 	}else{
// 		console.log("broweser doesnot suppor");
// 	}

// 	}

"use strict";
class Login{
  constructor(email,pwd,usertype){
	this.email=email;
	this.pwd=pwd;
	this.usertype=usertype;  
  } 

 checkdatabase(){
 this.retrivedatas=JSON.parse(localStorage.getItem("account"));
    console.log(this.retrivedatas);
    if(this.retrivedatas==null){
    	return false;

    }else{
    	return true;
    }
}

  validation(){

      this.flagOfdb=this.checkdatabase();
      this.retrivedatas=[];
     if(this.flagOfdb){
        this.flagOfdb=false;
        this.retrivedatas=JSON.parse(localStorage.getItem("account"));
        for(let retrivedata of this.retrivedatas){
           if(this.email==retrivedata.email){
 	       alert("This Username is already Used! try again");
 	       this.flagOfdb=true;
        break;
        }
       }
    }

    if(!this.flagOfdb){
    this.data={"email":this.email,"password":this.pwd,"usertype":this.usertype};
    this.retrivedatas.push(this.data);
    localStorage.setItem("account",JSON.stringify(this.retrivedatas));
    alert("Login successfull");
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


