


let url=window.location.href;
let usertype=url.slice((url.indexOf('?')+1),url.length).split('&');
// console.log(usertype);
let trans_data=[];

for(let i of usertype){
 
 let t_data=i.split("=");
 let keyg=t_data[0];

 let data={value1:value2}

 trans_data.push(data);

//let value=usertype[i].slice(usertype[i].indexOf('=')+1,usertype[i].length);
//let data={t_data[0],/*/*/*t_data[1]}

}
//trans_data.push(JSON.stringify(data));
//}
console.log(trans_data);
// console.log(trans_data.length);
// console.log(trans_data[0]);
// console.log(trans_data[1]);

