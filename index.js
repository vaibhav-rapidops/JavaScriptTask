
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



validation(){
for (let data of this.database){

console.log(data.email);
}
}

}
Login.prototype.database={ email:"vaibhav"};

function loginUser(){
	let email=document.getElementById('email').value.trim();
	let pwd=document.getElementById('pwd').value;
	let usertype=document.getElementById('type').value;

    let userlogin=new Login(email,pwd,usertype);
    userlogin.validation();

};

login.addEventListener("click", loginUser); 


