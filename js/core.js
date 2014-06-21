String.prototype.toHMS = function () {
    var sec_num = parseInt(this, 10); 
    var hours   = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    var time    = hours+':'+minutes+':'+seconds;
    return time;
}

function random(max) {
	var rand = Math.random() * max;
	return Math.ceil(rand);
}

function sum(array) {
	 for(var i=0,s=0;i<array.length;s+=parseInt(array[i++]));
	 return s;
}

function hms(date) {
	var totalSec = date.getSeconds();
    var hours = parseInt( totalSec / 3600 ) % 24;
    var minutes = parseInt( totalSec / 60 ) % 60;
    var seconds = totalSec % 60;
    
    return (hours < 10 ? "0" + hours : hours) + ":" + 
    (minutes < 10 ? "0" + minutes : minutes) + ":" + 
    (seconds  < 10 ? "0" + seconds : seconds);
}

function show() {
	alert('easy');
}