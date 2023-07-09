const enddate="15 july 2023 10:00 PM";
document.getElementById("end-date").innerHTML=enddate;
const inputs=document.querySelectorAll("input")
function clock()
{
    const end=new Date(enddate);
const now=new Date();
 const diff=(end-now)/1000;
 if(diff<0)
 {
    return;
 }
 // convert to days
 inputs[0].value=(Math.floor(diff/60/60/24));

 // convert to hours;

inputs[1].value=Math.floor( diff/60/60)%24;
 

 // convert to minutes;

 inputs[2].value=Math.floor( diff/60)%60;
 
 // convert to sec;

inputs[3].value=Math.floor( diff)%60;
 


}

clock();

//i day=24 hours
//1 hour=60 min
// 1 min=60 sec; 

setInterval(
()=>{
    clock()
},1000

)