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
for(let data of trans_data){console.log(data);}

document.getElementById('user').innerHTML=trans_data[1].email;