/*let url=window.location.href;
let usertype=url.slice((url.indexOf('?')+1),url.length).split('&');
let trans_data=[];
for(let i in usertype){
 let data={} 
 let key=usertype[i].slice(0,usertype[i].indexOf('=')); 
 let value=usertype[i].slice(usertype[i].indexOf('=')+1,usertype[i].length);
 data[key]=value;
 trans_data.push(data);
}
for(let data of trans_data){console.log(data);}

document.getElementById('user').innerHTML=trans_data[1].email;
*/

function checkdatabase()
{   let retrivedatas=JSON.parse(localStorage.getItem("student"));
//    console.log(retrivedatas);
    if(retrivedatas==null){
      return false;
    }else{
      return true;
    }
}

function cleanGarbageOfDb(retrivedatas){
    let result=[];
    //if(!retrivedatas){
     // return result;
   // }
    for(let data of retrivedatas){
      if(data){
       result.push(data);
      }
    }
    return result;
  }

function studentList(){

  document.getElementById("course_allocate").style.display ="none";
  document.getElementById("remove_student").style.display ="none";
 document.getElementById("add_student").style.display ="none";
 document.getElementById("student_list").style.display ="block";
 let flagOfdb=checkdatabase();
   if(flagOfdb){
        let retrivedatas=JSON.parse(localStorage.getItem("student"));
        let tname=document.getElementById('table_1');
         var myNode = document.getElementById("tbody_1");
        while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
        } 
       let len=tname.getElementsByTagName('tr').length;
        console.log(len);
        for(let i in retrivedatas){
        let row=document.createElement('tr');
        row.setAttribute("id","row__"+(len)) ;
        console.log(retrivedatas[i]);
        row.innerHTML=`<td>${len}</td><td>${retrivedatas[i]['name']}</td>`;
        let parent=document.getElementById('tbody_1')
        parent.append(row);
        len++;
        
        }
       }

    if(!flagOfdb){
        alert("First, You Need to Enter Student");
    }
}



function addStudent(){
  document.getElementById("student_list").style.display ="none";
  document.getElementById("remove_student").style.display ="none";
  document.getElementById("course_allocate").style.display ="none";
  document.getElementById("add_student").style.display ="block";
  let flagOfdb=checkdatabase();
   if(flagOfdb){
       let retrivedatas=JSON.parse(localStorage.getItem("student"));
        let tname=document.getElementById('table_2');
        var tbody_2 = document.getElementById("tbody_2");
         while (tbody_2.firstChild) {
        tbody_2.removeChild(tbody_2.firstChild);
    }   
        let len=retrivedatas.length;   
        for(let i in retrivedatas){
        let row=document.createElement('tr');
        row.setAttribute("id","row__"+(len)) ;
        console.log(retrivedatas[i]);
        row.innerHTML=`<td>${Number(i)+1}</td><td>${retrivedatas[i]['name']}</td>`;
        let parent=document.getElementById('tbody_2')
        parent.append(row);
        len++;        
        }

 }   
}

function addstudentname(){
    let flagOfdb=checkdatabase();
    let value=document.getElementById("studentnametxt").value;
    let len=0;
    let retrivedatas=[];
    let flagOfdata=true; 
    if(flagOfdb){
    retrivedatas=JSON.parse(localStorage.getItem("student"));
    len=retrivedatas.length;
    for(let retrivedata of retrivedatas){
    if(value==retrivedata.name){
    alert("Alreay, This student Name Is Taken ! Try With Different Name")
    flagOfdata=false;
    break;
  }
  }
  
  } 
  if(flagOfdata){
    let data={"id":len,"name":value};
    retrivedatas.push(data);
    localStorage.setItem("student",JSON.stringify(retrivedatas));
    alert("Your Name Successfully added");
    let row=document.createElement('tr');
    row.setAttribute("id","row__"+(len+1)) ;
    row.innerHTML=`<td>${len+1}</td><td>${data['name']}</td>`;
    let parent=document.getElementById('tbody_2')
    parent.append(row);
  }
  }


function removeStudent(){
  
document.getElementById("add_student").style.display ="none"; 
document.getElementById("student_list").style.display ="none";
document.getElementById("course_allocate").style.display ="none";
document.getElementById("remove_student").style.display ="block";
 

  let flagOfdb=checkdatabase();
      if(flagOfdb){
       let retrivedatas=JSON.parse(localStorage.getItem("student"));
        let Node = document.getElementById("tbody_3");
         while (Node.firstChild) {
         Node.removeChild(Node.firstChild);
         } 
        let tname=document.getElementById('table_3');
        let len=tname.getElementsByTagName('tr').length;
        for(let i in retrivedatas){
        let row=document.createElement('tr');
        row.setAttribute("id","row_"+(len)) ;
           row.innerHTML=`<td>${len}</td>
                       <td>${retrivedatas[i]['name']}</td>
                       <td><button type="button" onclick="removeStudentName(${len})" class="btn btn-danger">Remove Student</button></td>`;
        let parent=document.getElementById('tbody_3')
        parent.append(row);
        len++;
        
    
       }
     }
   }


function removeStudentName(id){
 // let tname=document.getElementById('table_3');
  let row=document.getElementById("row_"+id);
  let sname=row.getElementsByTagName('td');
  let studentname=sname[1].innerText;
  row.parentNode.removeChild(row);
  let retrivedatas=JSON.parse(localStorage.getItem("student"))
  
  for(let i in retrivedatas){
    if(retrivedatas[i]['name']==studentname){
       delete retrivedatas[i];
       break;
    }
  }

  let data=cleanGarbageOfDb(retrivedatas);
  localStorage.setItem("student", JSON.stringify(data));
    
}




 function courseAllocation(){



  document.getElementById("add_student").style.display ="none"; 
  document.getElementById("student_list").style.display ="none";
  document.getElementById("remove_student").style.display ="none";
  document.getElementById("course_allocate").style.display ="block";
   
  getStudentForCousre();
  getCourseForStudent();

 }


function getStudentForCousre(){
  let flagOfdb=checkdatabase();
  if(flagOfdb){
   let retrivedatas=JSON.parse(localStorage.getItem("student"));
    let Node = document.getElementById("tbody_4");
     while (Node.firstChild) {
     Node.removeChild(Node.firstChild);
     
    } 
    let tname=document.getElementById('table_4');
    let len=tname.getElementsByTagName('tr').length;
    for(let i in retrivedatas){
    let row=document.createElement('tr');
    row.setAttribute("id","row_"+(len)) ;
       row.innerHTML=`<td>${len}</td>
                   <td>${retrivedatas[i]['name']}</td>
                   <td><input type="checkbox" onclick="if (parentNode.parentElement.bgColor=='#8fd656'){parentElement.parentElement.bgColor='white'} else {parentElement.parentElement.bgColor='#8fd656'};" value="${retrivedatas[i]['name']}"></td>`;
    let parent=document.getElementById('tbody_4')
    parent.append(row);
    len++;
    

   }
 }
}

function setBackGroundColor(id,tname){
tname.getElementById("row_"+len).style.background="green";
}

 function getCourseForStudent(){
  let flagOfdb=checkdatabase();
  if(flagOfdb){
   let retrivedatas=JSON.parse(localStorage.getItem("course"));
    let Node = document.getElementById("tbody_5");
     while (Node.firstChild) {
     Node.removeChild(Node.firstChild);
     } 
    let table_5=document.getElementById('table_5');
    let len=table_5.getElementsByTagName('tr').length;
    for(let i in retrivedatas){
    let row=document.createElement('tr');
    row.setAttribute("id","row_"+(len)) ;
       row.innerHTML=`<td>${len}</td>
                   <td>${retrivedatas[i]['name']}</td>
                   <td><input type="checkbox" onclick="if (parentNode.parentElement.bgColor=='#8fd656'){parentElement.parentElement.bgColor='white'} else {parentElement.parentElement.bgColor='#8fd656'};" value="${retrivedatas[i]['name']}"></td>`;
    let parent=document.getElementById('tbody_5')
    parent.append(row);
    len++;
    
   }

 }

 }


function courseSelected(){
let courseAllocated=[];
let id1=document.getElementById('tbody_4');
let query1=id1.querySelectorAll("input[type='checkbox']:checked");
let id2=document.getElementById('tbody_5');
let query2=id2.querySelectorAll("input[type='checkbox']:checked");
courseAllocated=JSON.parse(localStorage.getItem("courseAllocated"));

console.log(courseAllocated);
for(let i of query1){
  let data={};
  let index=1;
  let flagOfdata=true;
  for(let member of courseAllocated){
     if(member.name==i.value){
         flagOfdata=false; 
         let datamatch=false;
        index = Object.keys(member).length;
        for(let j of query2)
        {
         let cname="course_"+index;
         let courses=Object.values(member); 
          console.log(courses); 
           for(let k =1;k<courses.length;k++)
           {    
            if(courses[k]==j.value)
           {
              alert(`This course already allocated to ${member.name}
               No need to allocate this course`);
              datamatch=true;
               break;
            }
           }
         if(!datamatch){
          member[cname]=j.value;
          index++
         }
       
        }
      console.log(member);
      break;  
     }
     }

    if(flagOfdata){
       console.log("hello");
      data.name=i.value;
      for(let j of query2){
       let cname="course_"+index;
       console.log(index)
       data[cname]=j.value;
       index++;
       }
      courseAllocated.push(data);  
    
    }
  }
localStorage.setItem("courseAllocated",JSON.stringify(courseAllocated));
}