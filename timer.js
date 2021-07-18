var day = document.querySelector("span.day");
var hour = document.querySelector("span.hour");
var minute = document.querySelector("span.minute");
var seconds = document.querySelector("span.seconds");


var date2 = new Date("Jul 19 2021 07:00:00 GMT+0900");
var date = Date.now();
var timediff = Math.floor((date2-date) / 1000);

function set_time(){
    date = new Date();
    timediff = Math.floor((date2-date) / 1000);
    set_day = Math.floor(timediff / 86400);
    set_hour = Math.floor(timediff/3600 - (set_day * 24));
    set_minute = Math.floor((timediff / 60) - (set_day * 1440) - (set_hour * 60));
    set_seconds = Math.floor(timediff - (set_day * 86400) - (set_hour * 3600) - (set_minute * 60));
    day.innerHTML = set_day;
    hour.innerHTML = set_hour;
    minute.innerHTML = set_minute;
    seconds.innerHTML = set_seconds;
}
set_time();
setInterval(set_time,1000);