function showTime(){
   var date = new Date();
   var hour = date.getHours();
   var min = date.getMinutes();
   var sec = date.getSeconds();
   hour = (hour < 10) ? "0" + hour : hour;
   min = (min < 10) ? "0" + min : min;
   sec = (sec < 10) ? "0" + sec : sec;     
   var time = hour + ":" + min + ":" + sec + " "; 

   document.getElementById("myClockDisplay").textContent = time;
   setTimeout(showTime, 1000);
}

showTime();
