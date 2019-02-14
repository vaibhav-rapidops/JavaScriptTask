"strict mode"


validation(); 


function checkdatabase()
{   let retrivedatas=JSON.parse(localStorage.getItem("course"));
    console.log(retrivedatas);
    if(retrivedatas==null){
    	return false;
    }else{
    	return true;
    }
}

function validation(){

   let flagOfdb=checkdatabase();
   if(flagOfdb){
        let retrivedatas=JSON.parse(localStorage.getItem("course"));
         let len=table.getElementsByTagName('tr').length;
        console.log(len);
        for(let i in retrivedatas){
      
        let row=document.createElement('tr');
        row.setAttribute("id","row__"+(len)) ;
        console.log(retrivedatas[i]);
        row.innerHTML=`<td>${len}</td><td>${retrivedatas[i]['name']}</td>`;
        let parent=document.getElementById('tbody')
        parent.append(row);
        len++;
        
        }
       }
    

    if(!flagOfdb){
    /*this.data={"email":this.email,"password":this.pwd,"usertype":this.usertype};
    this.retrivedatas.push(this.data);
    localStorage.setItem("account",JSON.stringify(this.retrivedatas));
    */alert("First, You Need to Enter Course");
    }
   }





