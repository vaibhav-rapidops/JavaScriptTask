let url=window.location.href;
let usertype=url.slice((url.indexOf('?')+1),url.length).split('&');
let trans_data=[];
for(let i in usertype){
 let data={} 
 let key=usertype[i].slice(0,usertype[i].indexOf('=')); 
 let value=usertype[i].slice(usertype[i].indexOf('=')+1,usertype[i].length);
 data[key]=value;
 trans_data.push(data);
}
console.log(trans_data);
let courses=JSON.parse(localStorage.getItem("taskcompleted"));
let courseid="course_"+trans_data[1]['usercourseid'];
let userdata=JSON.parse(localStorage.getItem("courseAllocated"));
let userkey=Object.keys(userdata);
let coursename;
for(let key of userkey){
    if(key==courseid){
        coursename=userdata[key];
    break
    }
}
let coursedata={};
for(let i=0; i<courses.length;i++){
 
    if(courses[i]['name']==trans_data[0]['username'] && courses[i][`course_${i+1}`]==coursename){
  
     coursedata=courses[i]; 
break;
}
}
console.log(coursedata);


for(let i in coursedata){
    if(coursedata[i]==0){
        document.getElementById("task").innerHTML=`<h1>${i}</h1>`;
        break;
    }
}
//document.getElementById('user').innerHTML=trans_data[1].email
function taskCompleted(){
let data=document.getElementById('task').innerText;
for(let i=0; i<=courses.length;i++){
    if(courses[i]['name']==coursedata['name'] && courses[i][`course_${i+1}`]==coursename){
     courses[i][data]="33.33";
     console.log(courses[i]);
     break;
}

localStorage.setItem("taskcompleted",JSON.stringify(courses));
window.open("module.html?username="+trans_data[0]['username']+"&usercourseid="+trans_data[1]['usercourseid']);
}
}