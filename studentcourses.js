

let username="jigar";
let datas=JSON.parse(localStorage.getItem("courseAllocated"));
let courses={}
let flagOfData=false;
for(let data in datas ){
    if(datas[data]['name']==username){
        courses=datas[data];
        flagOfData=true;
        break;
    }
}

let tasks=[];
for(let j=0 ;j<Object.keys(courses).length;j++){
   let data={};
   data.name=courses['name']; 
   data[`course_${j+1}`]=courses[`course_${j+1}`];
   data[`task_${1}`]=0;
   data[`task_${2}`]=0;
   data[`task_${3}`]=0;
   tasks.push(data);
localStorage.setItem("taskcompleted",JSON.stringify(tasks));
console.log(tasks);
}




if(flagOfData){
let parent=document.getElementById("course_list");
let len=Object.keys(courses).length;
for(let i=1;i<len;i++){
let child=document.createElement('div');
child.setAttribute('id',"course_"+i);
child.setAttribute('class',"col-lg-3 col-md-3 col-sm-3");
child.innerHTML=`<h1>${courses["course_"+i]}</h1>
<div class="progress" style="margin-top:30px">
<div class="progress-bar" role="progressbar" aria-valuenow="70"
aria-valuemin="0" aria-valuemax="100" style="width:70%">     
  70%
</div>
</div>
<div style="margin-top:30px;">
<button type="button" onclick="evalute(${i})" class="btn btn-primary btn-block">start</button>
</div>`;
child.style.margin="10px";
child.style.border="2px solid blue"
child.style.height="300px";
child.style.textAlign="center"
parent.append(child);
}
}

if(!flagOfData)
{
    alert("Yout Have Not Allocated Any Course Till Now");
}


function evalute(id){
    window.open("module.html?username="+username+"&usercourseid="+id);

}