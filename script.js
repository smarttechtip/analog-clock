
setInterval(function(){
    let date= new Date();
    let hour= date.getHours();
    let minutes=date.getMinutes();
    let seconds=date.getSeconds();
    document.querySelector('.second').style.transform=`rotate(${(seconds/60)*360+90}deg)`;
    document.querySelector('.min').style.transform=`rotate(${(minutes/60)*360+90}deg)`;
    document.querySelector('.hour').style.transform=`rotate(${(hour/12)*360+90+((minutes/60)*30)}deg)`;
    
},1000);
