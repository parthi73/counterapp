const days=document.querySelector("#days")
const hours=document.querySelector("#hours")
const minutes=document.querySelector("#minutes")
const seconds=document.querySelector("#seconds")



function updatetime(){
const currentYear=new Date().getFullYear();
const newyear=new Date(`january 1 ${currentYear +1} 00:00:00`);
const currentDate=new Date();
const deff=newyear-currentDate;
const d=Math.floor(deff/1000/60/60/24);
const h=Math.floor((deff/1000/60/60)%24);
const m=Math.floor((deff/1000/60)%60);
const s=Math.floor((deff/1000)%60);

days.innerHTML=d<10?"0"+d:d;
hours.innerHTML=h<10?"0"+h:h;
minutes.innerHTML=m<10?"0"+m:m;
seconds.innerHTML=s<10?"0"+s:s;
}

setInterval(updatetime,1000)